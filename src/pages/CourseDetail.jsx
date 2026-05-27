import { Link, useParams } from 'react-router-dom'
import { getCourse } from '../data/courses.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourse(id)
  const { user, progress, toggleLesson } = useAuth()

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Kurs nicht gefunden</h1>
        <Link to="/kurse" className="btn-primary mt-6">Zurück zu den Kursen</Link>
      </div>
    )
  }

  const done = new Set(progress[course.id] || [])
  const pct = Math.round((done.size / course.modules.length) * 100)

  return (
    <div>
      <div className={`relative overflow-hidden bg-gradient-to-br ${course.color}`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <Link to="/kurse" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Alle Kurse
          </Link>
          <span className="mt-6 inline-block rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {course.category}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">{course.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-white/90">
            <span className="rounded-lg bg-black/20 px-3 py-1.5">{course.level}</span>
            <span className="rounded-lg bg-black/20 px-3 py-1.5">{course.duration}</span>
            <span className="rounded-lg bg-black/20 px-3 py-1.5">{course.lessons} Lektionen</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white">Das lernst du</h2>
          <ul className="mt-4 space-y-3">
            {course.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-slate-300">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {o}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold text-white">Kursmodule</h2>
          <div className="mt-4 space-y-3">
            {course.modules.map((m, i) => {
              const completed = done.has(i)
              return (
                <div key={m} className="card flex items-center justify-between gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-sm font-bold text-slate-300">
                      {i + 1}
                    </span>
                    <span className={`font-medium ${completed ? 'text-slate-500 line-through' : 'text-white'}`}>{m}</span>
                  </div>
                  {user ? (
                    <button
                      onClick={() => toggleLesson(course.id, i)}
                      className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                        completed
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {completed ? 'Erledigt' : 'Als erledigt'}
                    </button>
                  ) : (
                    <span className="text-xs text-slate-500">Anmelden zum Start</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="card sticky top-24 p-6">
            {user ? (
              <>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-300">Dein Fortschritt</span>
                  <span className="font-bold text-brand-300">{pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {done.size} von {course.modules.length} Modulen abgeschlossen.
                </p>
                <Link to="/dashboard" className="btn-primary mt-6 w-full">Zum Dashboard</Link>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white">Jetzt loslegen</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Erstelle ein kostenloses Konto, um diesen Kurs zu starten und deinen
                  Fortschritt zu speichern.
                </p>
                <Link to="/register" className="btn-primary mt-5 w-full">Kostenlos starten</Link>
                <Link to="/login" className="btn-ghost mt-3 w-full">Anmelden</Link>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
