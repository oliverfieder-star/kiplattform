import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { courses } from '../data/courses.js'

export default function Dashboard() {
  const { user, progress } = useAuth()

  const enriched = courses.map((c) => {
    const done = (progress[c.id] || []).length
    const total = c.modules.length
    return { ...c, done, total, pct: Math.round((done / total) * 100) }
  })

  const started = enriched.filter((c) => c.done > 0)
  const completed = enriched.filter((c) => c.done === c.total)
  const totalModulesDone = enriched.reduce((sum, c) => sum + c.done, 0)

  const overview = [
    { label: 'Begonnene Kurse', value: started.length },
    { label: 'Abgeschlossen', value: completed.length },
    { label: 'Module erledigt', value: totalModulesDone },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-300">Dashboard</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            Hallo, {user.name.split(' ')[0]} 👋
          </h1>
          <p className="mt-2 text-slate-400">Schön, dass du weiterlernst. Hier geht's weiter.</p>
        </div>
        <Link to="/kurse" className="btn-primary shrink-0">Neuen Kurs starten</Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {overview.map((o) => (
          <div key={o.label} className="card p-6">
            <div className="text-3xl font-extrabold text-white">{o.value}</div>
            <div className="mt-1 text-sm text-slate-400">{o.label}</div>
          </div>
        ))}
      </div>

      {started.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-white">Weiterlernen</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {started.map((c) => (
              <Link key={c.id} to={`/kurse/${c.id}`} className="card flex items-center gap-4 p-5 transition-colors hover:border-brand-400/40">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-lg font-extrabold text-white`}>
                  {c.pct}%
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold text-white">{c.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-400">{c.done}/{c.total} Module</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-xl font-bold text-white">
          {started.length > 0 ? 'Weitere Kurse für dich' : 'Empfohlene Kurse'}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enriched
            .filter((c) => c.done === 0)
            .map((c) => (
              <Link key={c.id} to={`/kurse/${c.id}`} className="card overflow-hidden transition-colors hover:border-brand-400/40">
                <div className={`h-2 bg-gradient-to-r ${c.color}`} />
                <div className="p-5">
                  <div className="text-xs font-medium text-slate-400">{c.level} · {c.duration}</div>
                  <h3 className="mt-1.5 font-bold text-white">{c.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">{c.summary}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
