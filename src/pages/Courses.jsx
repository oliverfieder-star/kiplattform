import { useMemo, useState } from 'react'
import { courses } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'

const levels = ['Alle', 'Einsteiger', 'Fortgeschritten', 'Profi']

export default function Courses() {
  const [level, setLevel] = useState('Alle')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const byLevel = level === 'Alle' || c.level === level
      const byQuery =
        !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.summary.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase())
      return byLevel && byQuery
    })
  }, [level, query])

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Alle Kurse
        </h1>
        <p className="mt-3 text-slate-400">
          Finde den passenden Lernpfad – vom ersten Kontakt mit KI bis zur produktiven Automatisierung.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                level === l
                  ? 'bg-brand-600 text-white'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Kurse durchsuchen…"
            className="input pl-9"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-slate-400">
          Keine Kurse gefunden. Passe deine Filter an.
        </div>
      )}
    </div>
  )
}
