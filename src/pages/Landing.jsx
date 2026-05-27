import { Link } from 'react-router-dom'
import { stages, totalLessons } from '../data/journey.js'
import { useAuth } from '../context/AuthContext.jsx'

const benefits = [
  {
    title: 'Kuratiert, nicht zugemüllt',
    desc: 'Wir bündeln die besten frei verfügbaren Ressourcen (Anthropic Academy, Docs, Tutorials) zu klaren Lernpfaden – statt dich im YouTube-Dschungel zu verlieren.',
    icon: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5z',
  },
  {
    title: 'Claude im Fokus, ChatGPT dabei',
    desc: 'Wir arbeiten im Verein primär mit Claude – inkl. Projects, Skills und Claude Code. ChatGPT wird gleichwertig abgebildet.',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20',
  },
  {
    title: 'Lernen durch Tun',
    desc: 'Jede Lektion endet mit einer praktischen Übung und einem Wissens-Check. Du beherrschst die Tools wirklich – nicht nur in der Theorie.',
    icon: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    title: 'Jedes Semester aktuell',
    desc: 'KI verändert sich rasend schnell. Die Inhalte werden jedes Semester überarbeitet – du bleibst am Puls der Zeit.',
    icon: 'M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5',
  },
]

export default function Landing() {
  const { user } = useAuth()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-[120px]" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-accent-400/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Die interne KI-Lernplattform von C&amp;C
            </span>
            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Werde{' '}
              <span className="bg-gradient-to-r from-accent-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                AI-native
              </span>
              {' '}– dein Vorsprung für den Berufseinstieg
            </h1>
            <p className="animate-fade-up mt-6 text-lg leading-relaxed text-slate-300">
              Eine geführte Learning Journey vom ersten Prompt bis zu Multi-Agent-Systemen.
              Kuratierte Gratis-Ressourcen, praktische Übungen und ein klarer Pfad, wie du
              dich in KI weiterentwickelst – gemacht für unsere Mitglieder.
            </p>
            <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={user ? '/dashboard' : '/register'} className="btn-primary w-full sm:w-auto">
                {user ? 'Zum Dashboard' : 'Kostenlos starten'}
              </Link>
              <Link to="/journey" className="btn-ghost w-full sm:w-auto">
                Learning Journey ansehen
              </Link>
            </div>
            <p className="animate-fade-up mt-5 text-sm text-slate-500">
              {stages.length} Stufen · {totalLessons} Lektionen · komplett kostenlos
            </p>
          </div>
        </div>
      </section>

      {/* Journey preview */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Die Learning Journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Sieben Stufen, die aufeinander aufbauen – steig dort ein, wo du stehst.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <Link
              key={s.id}
              to={`/journey/${s.id}`}
              className="card group p-5 transition-all hover:-translate-y-1 hover:border-brand-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-xs font-medium text-slate-500">Stufe {s.order}</span>
              </div>
              <h3 className="mt-3 font-bold text-white group-hover:text-brand-200">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{s.subtitle}</p>
            </Link>
          ))}
          <Link
            to="/journey"
            className="card group flex flex-col items-center justify-center p-5 text-center transition-all hover:-translate-y-1 hover:border-brand-400/40"
          >
            <span className="text-2xl">→</span>
            <h3 className="mt-3 font-bold text-brand-200">Alle Stufen ansehen</h3>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Warum diese Plattform?
            </h2>
            <p className="mt-3 text-slate-400">
              Fast alle nutzen KI schon – aber meist nur an der Oberfläche. Hier holst du das
              Maximum heraus.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6 transition-colors hover:border-brand-400/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-600 to-brand-500 p-10 text-center sm:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sichere dir deinen KI-Vorsprung
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Erstelle dein kostenloses Konto, sag uns kurz, wo du stehst – und leg mit dem
              passenden Lernpfad los.
            </p>
            <Link
              to={user ? '/journey' : '/register'}
              className="btn mt-8 bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5"
            >
              {user ? 'Weiterlernen' : 'Jetzt loslegen'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
