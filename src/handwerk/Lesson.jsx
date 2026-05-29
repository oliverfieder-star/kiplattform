import { Link, useParams } from 'react-router-dom'
import HandwerkLayout from './Layout.jsx'
import HandwerkQuiz from './Quiz.jsx'
import { getLesson, flagshipLesson } from './content.js'

const TYPE = {
  doc: { label: 'Doku' },
  article: { label: 'Artikel' },
  course: { label: 'Kurs' },
  video: { label: 'Video' },
  tool: { label: 'Tool' },
  interactive: { label: 'Interaktiv' },
}

function ResourceItem({ resource }) {
  const meta = TYPE[resource.type] || TYPE.article
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hw-card group flex items-center gap-4 p-4 transition-colors hover:border-orange-300"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange-50 font-bold text-orange-700">
        {meta.label.slice(0, 1)}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold text-slate-900 group-hover:text-orange-600">
          {resource.title}
        </div>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500">
          <span className="rounded bg-slate-100 px-1.5 py-0.5">{meta.label}</span>
          {resource.provider && <span>· {resource.provider}</span>}
          {resource.duration && <span>· {resource.duration}</span>}
        </div>
      </div>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-orange-500" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export default function HandwerkLesson() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId) || flagshipLesson
  const isFlagship = lesson.id === flagshipLesson.id

  return (
    <HandwerkLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link to="/handwerk/lerntour" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Lerntour
        </Link>

        {!isFlagship && (
          <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
            Diese Lektion ist im Prototyp noch nicht ausgearbeitet.{' '}
            <Link to={`/handwerk/lektion/${flagshipLesson.id}`} className="font-semibold underline">
              Beispiel-Lektion ansehen
            </Link>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <span>{lesson.duration}</span>
          {lesson.tools?.map((t) => (
            <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-slate-700">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{lesson.title}</h1>

        {lesson.context && (
          <p className="mt-6 leading-relaxed text-slate-700">{lesson.context}</p>
        )}

        {lesson.resources?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-slate-900">Frei verfügbare Ressourcen</h2>
            <p className="mt-1 text-sm text-slate-500">Öffnet in neuem Tab.</p>
            <div className="mt-4 space-y-3">
              {lesson.resources.map((r) => (
                <ResourceItem key={r.url} resource={r} />
              ))}
            </div>
          </section>
        )}

        {lesson.exercise && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-slate-900">Praxis-Übung</h2>
            <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
              <p className="font-semibold text-orange-900">{lesson.exercise.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                {lesson.exercise.prompt}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Geschafft, wenn:
              </p>
              <ul className="mt-2 space-y-1.5">
                {lesson.exercise.criteria.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-800">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {lesson.quiz?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-slate-900">Kurzer Wissens-Check</h2>
            <p className="mt-1 text-sm text-slate-500">
              Drei Fragen, damit das Gelernte sitzt.
            </p>
            <div className="mt-4">
              <HandwerkQuiz questions={lesson.quiz} />
            </div>
          </section>
        )}

        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <Link to="/handwerk/lerntour" className="hw-btn-primary">
            Zurück zur Lerntour
          </Link>
        </div>
      </div>
    </HandwerkLayout>
  )
}
