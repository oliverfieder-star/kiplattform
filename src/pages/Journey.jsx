import { Link } from 'react-router-dom'
import { stages, getStageProgress, getNextLesson, isStageFull } from '../data/journey.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Journey() {
  const { user, progress, profile } = useAuth()
  const next = getNextLesson(progress, profile?.level)

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-brand-300">Deine Learning Journey</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Von „Was ist KI?“ bis Multi-Agent-Systeme
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Sieben aufeinander aufbauende Stufen. Jede Lektion kombiniert kuratierte
          Gratis-Ressourcen mit einer praktischen Übung und einem kurzen Wissens-Check.
        </p>
      </div>

      {user && next && (
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-brand-400/30 bg-brand-500/10 p-5 sm:flex-row">
          <div>
            <p className="text-sm text-brand-200">Weitermachen</p>
            <p className="font-bold text-white">{next.title}</p>
          </div>
          <Link to={`/lesson/${next.id}`} className="btn-primary shrink-0">
            Lektion starten
          </Link>
        </div>
      )}

      <div className="relative mt-12">
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10 sm:left-[31px]" />
        <div className="space-y-4">
          {stages.map((stage) => {
            const { done, total, pct } = getStageProgress(stage, progress)
            const complete = total > 0 && done === total
            return (
              <Link
                key={stage.id}
                to={`/journey/${stage.id}`}
                className="card group relative flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 sm:gap-5"
              >
                <span
                  className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl transition-colors ${
                    complete ? 'bg-emerald-500/20' : 'bg-white/5 group-hover:bg-brand-500/15'
                  }`}
                >
                  {complete ? '✓' : stage.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">Stufe {stage.order}</span>
                    {isStageFull(stage) ? (
                      <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-200">
                        Komplett ausgearbeitet
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        In Aufbau
                      </span>
                    )}
                  </div>
                  <h3 className="truncate text-lg font-bold text-white group-hover:text-brand-200">
                    {stage.title}
                  </h3>
                  <p className="truncate text-sm text-slate-400">{stage.subtitle}</p>
                  {user && total > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">
                        {done}/{total}
                      </span>
                    </div>
                  )}
                </div>
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-brand-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
