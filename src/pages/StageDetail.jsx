import { Link, useParams } from 'react-router-dom'
import { getStage, getStageProgress } from '../data/journey.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function StageDetail() {
  const { stageId } = useParams()
  const stage = getStage(stageId)
  const { user, progress } = useAuth()

  if (!stage) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Stufe nicht gefunden</h1>
        <Link to="/journey" className="btn-primary mt-6">Zur Journey</Link>
      </div>
    )
  }

  const { done, total } = getStageProgress(stage, progress)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/journey" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Learning Journey
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-3xl">
          {stage.emoji}
        </span>
        <div>
          <p className="text-sm font-medium text-slate-500">Stufe {stage.order}</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">{stage.title}</h1>
          <p className="mt-1 text-brand-200">{stage.subtitle}</p>
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-slate-300">{stage.summary}</p>

      {user && total > 0 && (
        <p className="mt-4 text-sm text-slate-400">
          {done}/{total} Lektionen abgeschlossen
        </p>
      )}

      <div className="mt-8 space-y-3">
        {stage.lessons.map((lesson, i) => {
          const completed = progress.has(lesson.id)
          const hasQuiz = lesson.quiz?.length
          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="card group flex items-center gap-4 p-4 transition-colors hover:border-brand-400/40"
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold ${
                  completed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-300'
                }`}
              >
                {completed ? '✓' : i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-white group-hover:text-brand-200">
                  {lesson.title}
                </h3>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-slate-500">
                  <span>{lesson.duration}</span>
                  {lesson.resources?.length > 0 && <span>· {lesson.resources.length} Ressourcen</span>}
                  {hasQuiz ? <span>· Quiz</span> : null}
                </div>
              </div>
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-brand-300" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
