import { supabase, isSupabaseConfigured } from './supabase.js'
import { POINTS_PER_LESSON } from '../data/journey.js'

const LOCAL_KEY = 'cundc_local_v2'

const readLocal = () => {
  try {
    return (
      JSON.parse(localStorage.getItem(LOCAL_KEY)) || {
        profile: null,
        progress: [],
      }
    )
  } catch {
    return { profile: null, progress: [] }
  }
}
const writeLocal = (data) => localStorage.setItem(LOCAL_KEY, JSON.stringify(data))

const todayStr = () => new Date().toISOString().slice(0, 10)
const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000)

// Returns the new streak given the previously recorded active date.
const nextStreak = (lastActive, currentStreak) => {
  if (!lastActive) return 1
  const diff = daysBetween(lastActive, todayStr())
  if (diff <= 0) return currentStreak || 1 // same day
  if (diff === 1) return (currentStreak || 0) + 1 // consecutive day
  return 1 // streak broken
}

/* ---------- Local mode ---------- */

const local = {
  async getProfile() {
    return readLocal().profile
  },
  async ensureProfile(name) {
    const data = readLocal()
    if (!data.profile) {
      data.profile = {
        id: 'local',
        name: name || 'Gast',
        level: null,
        points: 0,
        streak: 0,
        last_active: null,
      }
      writeLocal(data)
    }
    return data.profile
  },
  async updateProfile(fields) {
    const data = readLocal()
    data.profile = { ...(data.profile || {}), ...fields }
    writeLocal(data)
    return data.profile
  },
  async getProgress() {
    return new Set(readLocal().progress)
  },
  async setLessonComplete(lessonId, completed) {
    const data = readLocal()
    const set = new Set(data.progress)
    if (completed) set.add(lessonId)
    else set.delete(lessonId)
    data.progress = [...set]
    if (data.profile) data.profile.points = data.progress.length * POINTS_PER_LESSON
    writeLocal(data)
    return set
  },
  async recordActivity() {
    const data = readLocal()
    if (!data.profile) return null
    data.profile.streak = nextStreak(data.profile.last_active, data.profile.streak)
    data.profile.last_active = todayStr()
    writeLocal(data)
    return data.profile
  },
  async getLeaderboard() {
    const data = readLocal()
    return data.profile ? [{ ...data.profile, isYou: true }] : []
  },
}

/* ---------- Supabase mode ---------- */

const remote = {
  async getProfile(userId) {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle()
    return data
  },
  async ensureProfile(userId, name) {
    let profile = await this.getProfile(userId)
    if (!profile) {
      const { data } = await supabase
        .from('profiles')
        .insert({ id: userId, name: name || 'Mitglied', points: 0, streak: 0 })
        .select()
        .single()
      profile = data
    }
    return profile
  },
  async updateProfile(userId, fields) {
    const { data } = await supabase
      .from('profiles')
      .update(fields)
      .eq('id', userId)
      .select()
      .single()
    return data
  },
  async getProgress(userId) {
    const { data } = await supabase
      .from('lesson_progress')
      .select('lesson_id')
      .eq('user_id', userId)
    return new Set((data || []).map((r) => r.lesson_id))
  },
  async setLessonComplete(userId, lessonId, completed) {
    if (completed) {
      await supabase
        .from('lesson_progress')
        .upsert({ user_id: userId, lesson_id: lessonId }, { onConflict: 'user_id,lesson_id' })
    } else {
      await supabase
        .from('lesson_progress')
        .delete()
        .eq('user_id', userId)
        .eq('lesson_id', lessonId)
    }
    const progress = await this.getProgress(userId)
    await supabase
      .from('profiles')
      .update({ points: progress.size * POINTS_PER_LESSON })
      .eq('id', userId)
    return progress
  },
  async recordActivity(userId) {
    const profile = await this.getProfile(userId)
    if (!profile) return null
    const streak = nextStreak(profile.last_active, profile.streak)
    return this.updateProfile(userId, { streak, last_active: todayStr() })
  },
  async getLeaderboard(userId) {
    const { data } = await supabase
      .from('profiles')
      .select('id, name, points, streak')
      .order('points', { ascending: false })
      .order('streak', { ascending: false })
      .limit(20)
    return (data || []).map((p) => ({ ...p, isYou: p.id === userId }))
  },
}

/* ---------- Unified API ---------- */

export const store = {
  configured: isSupabaseConfigured,
  getProfile: (userId) => (isSupabaseConfigured ? remote.getProfile(userId) : local.getProfile()),
  ensureProfile: (userId, name) =>
    isSupabaseConfigured ? remote.ensureProfile(userId, name) : local.ensureProfile(name),
  updateProfile: (userId, fields) =>
    isSupabaseConfigured ? remote.updateProfile(userId, fields) : local.updateProfile(fields),
  getProgress: (userId) => (isSupabaseConfigured ? remote.getProgress(userId) : local.getProgress()),
  setLessonComplete: (userId, lessonId, completed) =>
    isSupabaseConfigured
      ? remote.setLessonComplete(userId, lessonId, completed)
      : local.setLessonComplete(lessonId, completed),
  recordActivity: (userId) =>
    isSupabaseConfigured ? remote.recordActivity(userId) : local.recordActivity(),
  getLeaderboard: (userId) =>
    isSupabaseConfigured ? remote.getLeaderboard(userId) : local.getLeaderboard(),
}
