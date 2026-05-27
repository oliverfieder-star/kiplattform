import { useMemo, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { allLessons, getLesson, getStage } from '../data/journey.js'
import { useAuth } from '../context/AuthContext.jsx'
import ResourceItem from '../components/ResourceItem.jsx'
import Quiz from '../components/Quiz.jsx'

export default function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { progress, completeLesson, isComplete } = useAuth()

  const lesson = getLesson(lessonId)
  const [quizPassed, setQuizPassed] = useState(false)
  const [saving, setSaving] = useState(false)

  const nextLesson = useMemo(() => {
    const idx = allLessons.findIndex((l) => l.id === lessonId)
    return idx >= 0 ? allLessons[idx + 1] : null
  }, [lessonId])

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Lektion nicht gefunden</h1>
        <Link to="/journey" className="btn-primary mt-6">Zur Journey</Link>
      </div>
    )
  }

  const stage = getStage(lesson.stageId)
  const completed = isComplete(lesson.id)
  const hasQuiz = lesson.quiz?.length > 0
  const canComplete = !hasQuiz || quizPassed || completed

  const finish = async () => {
    if (saving) return
    setSaving(true)
    await completeLesson(lesson.id, true)
    if (nextLesson) navigate(`/lesson/${nextLesson.id}`)
    else navigate('/dashboard')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        to={`/journey/${lesson.stageId}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        {stage?.title}
      </Link>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
        <span>{lesson.duration}</span>
        {lesson.tools?.map((t) => (
          <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-slate-300">{t}</span>
        ))}
      </div>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">{lesson.title}</h1>

      {completed && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
          ✓ Abgeschlossen
        </div>
      )}

      <p className="mt-6 leading-relaxed text-slate-300">{lesson.context}</p>

      {/* Resources */}
      {lesson.resources?.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-white">Kuratierte Ressourcen</h2>
          <p className="mt-1 text-sm text-slate-400">Frei verfügbar – öffnet in neuem Tab.</p>
          <div className="mt-4 space-y-3">
            {lesson.resources.map((r) => (
              <ResourceItem key={r.url} resource={r} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-10 rounded-xl border border-dashed border-white/15 p-5 text-sm text-slate-400">
          Ressourcen für diese Lektion werden gerade kuratiert und kommen im nächsten Update.
        </section>
      )}

      {/* Exercise */}
      {lesson.exercise && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-white">Praxis-Übung</h2>
          <div className="mt-4 rounded-2xl border border-brand-400/20 bg-brand-500/5 p-5">
            <p className="font-semibold text-brand-100">{lesson.exercise.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{lesson.exercise.prompt}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Geschafft, wenn:
            </p>
            <ul className="mt-2 space-y-1.5">
              {lesson.exercise.criteria.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Quiz */}
      {hasQuiz && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-white">Wissens-Check</h2>
          <p className="mt-1 text-sm text-slate-400">
            Beantworte alle Fragen richtig, um die Lektion abzuschließen.
          </p>
          <div className="mt-4">
            <Quiz questions={lesson.quiz} onPassed={() => setQuizPassed(true)} />
          </div>
        </section>
      )}

      {/* Complete */}
      <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-400">
          {canComplete
            ? completed
              ? 'Diese Lektion ist abgeschlossen.'
              : 'Bereit? Schließe die Lektion ab und sammle Punkte.'
            : 'Bestehe zuerst den Wissens-Check oben.'}
        </p>
        <button onClick={finish} disabled={!canComplete || saving} className="btn-primary w-full sm:w-auto">
          {completed
            ? nextLesson
              ? 'Weiter zur nächsten Lektion'
              : 'Zum Dashboard'
            : saving
              ? 'Speichern…'
              : 'Lektion abschließen (+10 Punkte)'}
        </button>
      </div>
    </div>
  )
}
