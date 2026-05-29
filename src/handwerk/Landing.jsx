import { Link } from 'react-router-dom'
import HandwerkLayout from './Layout.jsx'
import { stages, flagshipLesson } from './content.js'

const painPoints = [
  'Angebote schreiben',
  'Kundenmails',
  'Bauberichte',
  'Stellenanzeigen',
  'Mahnungen',
  'Bewertungen beantworten',
]

const valueProps = [
  {
    title: 'Sofort spürbar',
    desc: '5–10 Stunden pro Woche, die nicht mehr im Büro vergehen. Vom Kostenvoranschlag bis zur Bewertungsantwort.',
    icon: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    title: 'Für die Baustelle gemacht',
    desc: 'Bedienung per Sprache – Hände frei, Notizen werden automatisch zu sauberen Berichten.',
    icon: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4',
  },
  {
    title: 'DSGVO im Blick',
    desc: 'Wir zeigen klar, was rein darf und was nicht – inklusive sicherer Tarife für Kundendaten.',
    icon: 'M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z',
  },
  {
    title: 'Keine IT-Vorkenntnisse',
    desc: 'Wir starten beim Smartphone, nicht beim Programmieren. Ohne Fremdwörter, ohne Berater-Sprech.',
    icon: 'M3 7h18M3 12h18M3 17h18',
  },
]

export default function HandwerkLanding() {
  return (
    <HandwerkLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />
        <div className="absolute -left-32 -top-10 h-80 w-80 rounded-full bg-amber-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              KI für dein Handwerk – ohne Bullshit
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
              Mehr Aufträge.{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Weniger Papierkram.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Lern in wenigen Minuten, wie du mit KI Angebote schreibst, Kundenmails
              beantwortest und Bauberichte diktierst – als Inhaber, Meister oder Bürokraft.
              Keine Theorie. Übungen mit deinen echten Aufträgen.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/handwerk/lerntour" className="hw-btn-primary w-full sm:w-auto">
                Kostenlos zur Lerntour
              </Link>
              <Link to={`/handwerk/lektion/${flagshipLesson.id}`} className="hw-btn-ghost w-full sm:w-auto">
                Beispiel-Lektion ansehen
              </Link>
            </div>

            {/* pain pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Du sparst Zeit bei:
              </span>
              {painPoints.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Outcome */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Drei typische Abende. Und wie sie mit KI aussehen.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                pain: 'Drei Stunden im Büro für einen Kostenvoranschlag.',
                gain: 'Auf dem Heimweg diktiert. Zuhause nur noch prüfen. 15 Minuten.',
                tag: 'Angebote',
              },
              {
                pain: 'Schwierige Beschwerde-Mail. Du tippst, löschst, tippst neu.',
                gain: 'Drei Sätze als Kontext rein – ein sauberer, freundlicher Entwurf raus.',
                tag: 'Kommunikation',
              },
              {
                pain: 'Baubericht „mach ich später" – und dann doch Sonntags.',
                gain: 'Sprachnotiz von der Baustelle wird automatisch zum strukturierten Bericht.',
                tag: 'Doku',
              },
            ].map((c) => (
              <div key={c.tag} className="hw-card flex flex-col p-6">
                <span className="self-start rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-orange-700">
                  {c.tag}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 line-through">
                  {c.pain}
                </p>
                <p className="mt-3 font-semibold leading-relaxed text-slate-900">
                  {c.gain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lerntour preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Die Lerntour
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Sieben Schritte – nach echten Themen aus dem Betrieb. Du startest dort,
            wo dich gerade am meisten der Schuh drückt.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <Link
              key={s.id}
              to="/handwerk/lerntour"
              className="hw-card group p-5 transition-all hover:-translate-y-1 hover:border-orange-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-xs font-medium text-slate-400">Schritt {s.order + 1}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-900 group-hover:text-orange-600">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{s.subtitle}</p>
            </Link>
          ))}
          <Link
            to="/handwerk/lerntour"
            className="hw-card group flex flex-col items-center justify-center p-5 text-center transition-all hover:-translate-y-1 hover:border-orange-300"
          >
            <span className="text-2xl">→</span>
            <h3 className="mt-3 font-bold text-orange-600">Alle Schritte ansehen</h3>
          </Link>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Warum diese Plattform?
            </h2>
            <p className="mt-3 text-slate-600">
              Weil 99 % der KI-Kurse für Berater oder Entwickler gemacht sind. Diese
              hier ist für den, der morgens auf die Baustelle muss.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {valueProps.map((v) => (
              <div key={v.title} className="hw-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pack's an.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-orange-50">
            Die Beispiel-Lektion „Kostenvoranschlag in 5 Minuten" zeigt dir, wie das
            konkret aussieht. Kostenlos, direkt umsetzbar.
          </p>
          <Link
            to={`/handwerk/lektion/${flagshipLesson.id}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            Beispiel-Lektion starten
          </Link>
        </div>
      </section>
    </HandwerkLayout>
  )
}
