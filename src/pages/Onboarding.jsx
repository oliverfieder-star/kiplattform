import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { LEVELS, getStage } from '../data/journey.js'

export default function Onboarding() {
  const { setLevel, profile } = useAuth()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(profile?.level || null)
  const [saving, setSaving] = useState(false)

  const confirm = async () => {
    if (!selected) return
    setSaving(true)
    await setLevel(selected)
    const level = LEVELS.find((l) => l.id === selected)
    navigate(`/journey/${level?.startStage || 'foundations'}`, { replace: true })
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-brand-300">Willkommen 👋</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
          Wo stehst du gerade?
        </h1>
        <p className="mt-3 text-slate-400">
          Damit du nicht bei null anfängst, empfehlen wir dir einen passenden Einstiegspunkt.
          Du kannst jederzeit überall hinspringen.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {LEVELS.map((level) => {
          const active = selected === level.id
          const stage = getStage(level.startStage)
          return (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                active
                  ? 'border-brand-400/60 bg-brand-500/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
              }`}
            >
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                  active ? 'border-brand-400 bg-brand-400' : 'border-white/30'
                }`}
              >
                {active && (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-slate-950" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </span>
              <div>
                <p className="font-bold text-white">{level.label}</p>
                <p className="mt-0.5 text-sm text-slate-400">{level.desc}</p>
                <p className="mt-2 text-xs font-medium text-brand-300">
                  Einstieg: {stage?.emoji} {stage?.title}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <button onClick={confirm} disabled={!selected || saving} className="btn-primary mt-8 w-full">
        {saving ? 'Speichern…' : 'Los geht’s'}
      </button>
    </div>
  )
}
