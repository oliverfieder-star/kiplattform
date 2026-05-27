import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'
import { store } from '../lib/store.js'

const AuthContext = createContext(null)
const LOCAL_SESSION = 'cundc_local_session'

const mapUser = (su) => ({
  id: su.id,
  email: su.email,
  name: su.user_metadata?.name || su.email,
})

export function AuthProvider({ children }) {
  const mode = isSupabaseConfigured ? 'supabase' : 'local'
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [progress, setProgress] = useState(new Set())
  const [leaderboard, setLeaderboard] = useState([])
  const [ready, setReady] = useState(false)
  const loadedRef = useRef(null)

  // Loads profile + progress for a user. Deduped so getSession and the
  // auth listener can't trigger two concurrent loads for the same user.
  const handleUser = useCallback(async (u) => {
    setUser(u)
    if (loadedRef.current === u.id) return
    loadedRef.current = u.id
    const p = await store.ensureProfile(u.id, u.name)
    const prog = await store.getProgress(u.id)
    setProfile(p)
    setProgress(prog)
  }, [])

  const clearSession = useCallback(() => {
    loadedRef.current = null
    setUser(null)
    setProfile(null)
    setProgress(new Set())
  }, [])

  useEffect(() => {
    let active = true
    let subscription

    const init = async () => {
      try {
        if (mode === 'supabase') {
          const { data } = await supabase.auth.getSession()
          if (active && data.session?.user) {
            await handleUser(mapUser(data.session.user))
          }
          const sub = supabase.auth.onAuthStateChange((_event, session) => {
            if (!active) return
            if (session?.user) handleUser(mapUser(session.user))
            else clearSession()
          })
          subscription = sub.data.subscription
        } else {
          const loggedIn = localStorage.getItem(LOCAL_SESSION) === '1'
          const existing = await store.getProfile('local')
          if (active && loggedIn && existing) {
            await handleUser({ id: 'local', email: existing.email || '', name: existing.name })
          }
        }
      } catch (err) {
        console.error('Auth init failed:', err)
      } finally {
        if (active) setReady(true)
      }
    }

    init()
    return () => {
      active = false
      subscription?.unsubscribe()
    }
  }, [mode, handleUser, clearSession])

  const signUp = useCallback(
    async ({ name, email, password }) => {
      if (mode === 'supabase') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        })
        if (error) return { error: error.message }
        if (!data.session) return { info: 'Bitte bestätige deine E-Mail, um dich anzumelden.' }
        return {}
      }
      await store.ensureProfile('local', name)
      await store.updateProfile('local', { email, name })
      localStorage.setItem(LOCAL_SESSION, '1')
      await handleUser({ id: 'local', email, name })
      return {}
    },
    [mode, handleUser],
  )

  const signIn = useCallback(
    async ({ email, password }) => {
      if (mode === 'supabase') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return { error: error.message }
        return {}
      }
      const existing = await store.getProfile('local')
      const name = existing?.name || 'Mitglied'
      await store.ensureProfile('local', name)
      localStorage.setItem(LOCAL_SESSION, '1')
      await handleUser({ id: 'local', email, name })
      return {}
    },
    [mode, handleUser],
  )

  const signOut = useCallback(async () => {
    if (mode === 'supabase') await supabase.auth.signOut()
    else localStorage.removeItem(LOCAL_SESSION)
    clearSession()
  }, [mode, clearSession])

  const completeLesson = useCallback(
    async (lessonId, completed = true) => {
      if (!user) return
      const next = await store.setLessonComplete(user.id, lessonId, completed)
      setProgress(new Set(next))
      // Streak counts learning days, so it advances on completion – not login.
      if (completed) await store.recordActivity(user.id)
      const p = await store.getProfile(user.id)
      if (p) setProfile(p)
    },
    [user],
  )

  const setLevel = useCallback(
    async (levelId) => {
      if (!user) return
      const p = await store.updateProfile(user.id, { level: levelId })
      if (p) setProfile(p)
    },
    [user],
  )

  const refreshLeaderboard = useCallback(async () => {
    if (!user) return
    setLeaderboard(await store.getLeaderboard(user.id))
  }, [user])

  const value = useMemo(
    () => ({
      mode,
      ready,
      user,
      profile,
      progress,
      isComplete: (lessonId) => progress.has(lessonId),
      points: profile?.points || 0,
      streak: profile?.streak || 0,
      needsOnboarding: Boolean(user && profile && !profile.level),
      leaderboard,
      signUp,
      signIn,
      signOut,
      completeLesson,
      setLevel,
      refreshLeaderboard,
    }),
    [
      mode,
      ready,
      user,
      profile,
      progress,
      leaderboard,
      signUp,
      signIn,
      signOut,
      completeLesson,
      setLevel,
      refreshLeaderboard,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
