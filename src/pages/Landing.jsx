import { Link } from 'react-router-dom'
import { courses } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'

const benefits = [
  {
    title: 'Praxis statt Theorie',
    desc: 'Jede Lektion endet mit einer konkreten Aufgabe, die du direkt im Arbeitsalltag anwendest.',
    icon: 'M13 2 3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    title: 'Von Expert:innen',
    desc: 'Kursinhalte aus echten KI-Projekten – kuratiert von Praktiker:innen, nicht von Theoretiker:innen.',
    icon: 'M12 2 4 7v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-5z',
  },
  {
    title: 'In deinem Tempo',
    desc: 'Lerne wann und wo du willst. Fortschritt wird automatisch gespeichert.',
    icon: 'M12 6v6l4 2M12 22a10 10 0 110-20 10 10 0 010 20z',
  },
  {
    title: 'Zertifikat inklusive',
    desc: 'Schließe Kurse ab und erhalte ein anerkanntes Teilnahmezertifikat für dein Profil.',
    icon: 'M12 15a4 4 0 100-8 4 4 0 000 8zM12 15v7l-3-2-3 2M12 15l3 7 3-2 3 2',
  },
  {
    title: 'Für ganze Teams',
    desc: 'Skaliere Weiterbildung im Unternehmen mit Team-Lizenzen und gemeinsamen Lernpfaden.',
    icon: 'M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 10a4 4 0 100-8 4 4 0 000 8zM23 20v-2a4 4 0 00-3-3.87',
  },
  {
    title: 'Immer aktuell',
    desc: 'KI verändert sich schnell. Unsere Inhalte werden laufend an neue Tools angepasst.',
    icon: 'M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5',
  },
]

const stats = [
  { value: '2.400+', label: 'Teilnehmende' },
  { value: '6', label: 'Kurse & Lernpfade' },
  { value: '94%', label: 'Abschlussquote' },
  { value: '4,9/5', label: 'Bewertung' },
]

const team = [
  { name: 'Dr. Lena Hoffmann', role: 'Head of AI Education', initials: 'LH', color: 'from-indigo-500 to-violet-600' },
  { name: 'Marco Brandt', role: 'Lead Instructor', initials: 'MB', color: 'from-fuchsia-500 to-pink-600' },
  { name: 'Sara Köhler', role: 'KI & Compliance', initials: 'SK', color: 'from-emerald-500 to-teal-600' },
  { name: 'Jonas Weber', role: 'Automatisierung', initials: 'JW', color: 'from-amber-500 to-orange-600' },
]

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-[120px]" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Neue Kurse für 2026 verfügbar
            </span>
            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
              KI-Kompetenz, die <span className="bg-gradient-to-r from-brand-300 via-fuchsia-300 to-brand-400 bg-clip-text text-transparent">wirklich ankommt</span>
            </h1>
            <p className="animate-fade-up mt-6 text-lg leading-relaxed text-slate-300">
              Die C&amp;C AI Academy macht dein Team fit für künstliche Intelligenz –
              praxisnah, verständlich und in deinem Tempo. Vom ersten Prompt bis zur
              produktiven Automatisierung.
            </p>
            <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register" className="btn-primary w-full sm:w-auto">
                Jetzt kostenlos starten
              </Link>
              <Link to="/kurse" className="btn-ghost w-full sm:w-auto">
                Kurse entdecken
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurse */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Beliebte Kurse
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Von den Grundlagen bis zur Automatisierung – wähle den passenden Lernpfad
              für dich und dein Team.
            </p>
          </div>
          <Link to="/kurse" className="btn-ghost shrink-0">
            Alle Kurse ansehen
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Warum die C&amp;C AI Academy?
            </h2>
            <p className="mt-3 text-slate-400">
              Weiterbildung, die nicht in der Schublade landet, sondern den Arbeitsalltag verändert.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Deine Trainer:innen
          </h2>
          <p className="mt-3 text-slate-400">
            Praktiker:innen aus echten KI-Projekten – kein Buzzword-Bingo.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="card p-6 text-center">
              <div className={`mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${m.color} text-2xl font-extrabold text-white`}>
                {m.initials}
              </div>
              <h3 className="mt-4 font-bold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700 via-brand-600 to-fuchsia-700 p-10 text-center sm:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Bereit, KI für dich arbeiten zu lassen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Erstelle in unter einer Minute deinen kostenlosen Zugang und starte sofort
              mit dem ersten Kurs.
            </p>
            <Link to="/register" className="btn mt-8 bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5">
              Kostenloses Konto erstellen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
