import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'cundc_users'
const SESSION_KEY = 'cundc_session'
const PROGRESS_KEY = 'cundc_progress'

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}
const writeUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users))

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY))
      if (session) setUser(session)
      const prog = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
      setProgress(prog)
    } catch {
      /* ignore */
    }
    setReady(true)
  }, [])

  const persistSession = (u) => {
    if (u) localStorage.setItem(SESSION_KEY, JSON.stringify(u))
    else localStorage.removeItem(SESSION_KEY)
    setUser(u)
  }

  const register = ({ name, email, password }) => {
    const users = readUsers()
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    if (exists) return { error: 'Diese E-Mail ist bereits registriert.' }
    const newUser = { id: crypto.randomUUID(), name, email, password }
    writeUsers([...users, newUser])
    const safe = { id: newUser.id, name, email }
    persistSession(safe)
    return { user: safe }
  }

  const login = ({ email, password }) => {
    const users = readUsers()
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    )
    if (!found) return { error: 'E-Mail oder Passwort ist falsch.' }
    const safe = { id: found.id, name: found.name, email: found.email }
    persistSession(safe)
    return { user: safe }
  }

  const logout = () => persistSession(null)

  const toggleLesson = (courseId, lessonIndex) => {
    setProgress((prev) => {
      const done = new Set(prev[courseId] || [])
      if (done.has(lessonIndex)) done.delete(lessonIndex)
      else done.add(lessonIndex)
      const next = { ...prev, [courseId]: [...done] }
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }

  const value = useMemo(
    () => ({ user, ready, register, login, logout, progress, toggleLesson }),
    [user, ready, progress],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
