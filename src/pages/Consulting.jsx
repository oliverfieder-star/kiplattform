import { useEffect, useState } from 'react'
import NeuralBackground from '../components/consulting/NeuralBackground.jsx'
import Reveal from '../components/consulting/Reveal.jsx'
import CountUp from '../components/consulting/CountUp.jsx'
import logo from '../assets/cc-logo.png'

const modules = [
  {
    n: '01',
    tag: 'STATUS-QUO · POTENZIALE · ROADMAP',
    title: 'KI-Readiness-Check',
    subtitle: 'Status-Quo-Analyse · Potenzialidentifikation · Handlungsempfehlungen',
    desc:
      'Bevor Sie investieren, schaffen wir Klarheit: Wo stehen Sie heute, welche Prozesse profitieren am stärksten von Automatisierung – und welche Quick Wins lassen sich sofort umsetzen?',
    features: [
      ['Prozess-Mapping', 'Systematische Erfassung Ihrer Kernprozesse und Identifikation von Automatisierungspotenzialen.'],
      ['Reifegrad-Bewertung', 'Einordnung auf einer Digitalisierungsskala mit konkretem Benchmark.'],
      ['Tool-Landschaft', 'Analyse Ihrer bestehenden Software und Bewertung der KI-Integrationsfähigkeit.'],
      ['Maßnahmen-Roadmap', 'Priorisierte Handlungsempfehlungen mit Quick Wins und strategischen Maßnahmen.'],
    ],
    meta: ['2–4 Wochen', 'Interviews, Analyse, Workshop', 'Ergebnisbericht + Roadmap'],
    icon: 'analytics',
  },
  {
    n: '02',
    tag: 'WEBSITE · SEO · GEO',
    title: 'Digitaler Auftritt & Sichtbarkeit',
    subtitle: 'Website-Optimierung · Suchmaschinen­optimierung · Generative Engine Optimization',
    desc:
      'Ihre Website ist Ihre digitale Visitenkarte – und zunehmend Ihr wichtigster Vertriebskanal. Wir machen Sie sichtbar bei Google und bei ChatGPT, Perplexity & Co.',
    features: [
      ['Website-Audit & Redesign', 'Technische Analyse, UX-Bewertung und – wo nötig – Neugestaltung für Performance & Conversion.'],
      ['SEO-Optimierung', 'Keyword-Strategie, technisches SEO, Content und lokale Suchmaschinenoptimierung.'],
      ['GEO-Strategie', 'Strukturierte Daten und zitierfähige Inhalte, damit KI-Assistenten Sie aktiv empfehlen.'],
      ['Monitoring & Reporting', 'Tracking-Setup und regelmäßige Performance-Berichte – Sie sehen, was wirkt.'],
    ],
    meta: ['4–8 Wochen', 'Audit · Umsetzung · Monitoring', 'Mehr qualifizierte Anfragen'],
    icon: 'search',
  },
  {
    n: '03',
    tag: 'STRATEGIE · WORKFLOWS · TOOLS',
    title: 'KI-Strategie & Implementierung',
    subtitle: 'Tool-Auswahl · Workflow-Automatisierung · Maßgeschneiderte KI-Lösungen',
    desc:
      'Bei uns endet das Projekt nicht beim Konzept, sondern in der produktiven Nutzung. Vom Enterprise-Setup über automatisierte Workflows bis zum individuellen Custom GPT.',
    features: [
      ['Enterprise KI-Tools', 'ChatGPT Enterprise, Microsoft Copilot, Google Gemini – beraten, einführen, einrichten.'],
      ['Workflow-Automation', 'Automatisierte Prozesse mit n8n, Make oder Zapier – passend zu Ihrer Systemlandschaft.'],
      ['Custom GPTs & Chatbots', 'Maßgeschneiderte Assistenten für Service, Wissensmanagement oder Vertrieb.'],
      ['Wissensdatenbank', 'Ihre Dokumente per KI durchsuchbar – schnelle Antworten auf Basis Ihres Firmenwissens.'],
    ],
    meta: ['ab 6 Wochen', '5–15 h/Woche Zeitersparnis', 'Produktiv im Alltag'],
    icon: 'workflow',
  },
  {
    n: '04',
    tag: 'SCHULUNGEN · ENABLEMENT · BEGLEITUNG',
    title: 'Change Management & Workshops',
    subtitle: 'Mitarbeiter-Enablement · Schulungs­konzepte · Nachhaltige Verankerung',
    desc:
      'Technologie allein schafft keinen Wandel – Menschen tun es. Wir befähigen Ihr Team mit Hands-on-Workshops, die nachhaltig wirken.',
    features: [
      ['KI-Einführungs­workshop', '½ Tag: Grundlagen, Live-Demos, erster eigener KI-Workflow für jeden Teilnehmer.'],
      ['Implementierungs­programm', '3–5 Tage modular: Analyse, Workflow-Aufbau, Power-User-Training, Übergabe.'],
      ['Interne Multiplikatoren', 'Wir machen Ihre Mitarbeiter zu KI-Champions – Kompetenz, die bleibt.'],
      ['Begleitung im Alltag', 'Sprechstunden und Coachings über die Workshop-Phase hinaus.'],
    ],
    meta: ['½ – 5 Tage', 'Alle Hierarchie-Ebenen', 'Akzeptanz, die bleibt'],
    icon: 'people',
  },
]

const reasons = [
  {
    n: '01',
    title: 'Frische Perspektiven, aktuelles Know-how',
    desc:
      'Unsere Berater studieren an der Universität Würzburg und bringen aktuelles Wissen aus 14 Studiengängen direkt in Ihr Projekt ein. KI und Digitalisierung sind für uns keine Theorie, sondern tägliche Praxis.',
  },
  {
    n: '02',
    title: 'Wir beraten nicht nur – wir setzen um',
    desc:
      'Kein Projekt endet bei einer PowerPoint-Präsentation. Wir gehen mit Ihnen in die Implementierung und stellen sicher, dass Lösungen im Alltag funktionieren.',
  },
  {
    n: '03',
    title: 'Kosteneffizient und flexibel',
    desc:
      'Hochwertige Beratung zu einem Bruchteil der Kosten klassischer Unternehmens­beratungen. Unsere Teams arbeiten agil und passen sich Ihrem Zeitplan und Budget an.',
  },
  {
    n: '04',
    title: 'Bewährtes Netzwerk und Qualität',
    desc:
      'Als Teil des JCNetwork – dem größten studentischen Beratungs­netzwerk Deutschlands – profitieren Sie von erprobten Methoden und Qualitäts­standards.',
  },
]

const process = [
  { t: 'Erstgespräch & Bedarfsanalyse', d: '30-minütiges kostenfreies Gespräch, um Ziele und Ausgangslage zu verstehen.' },
  { t: 'Individuelles Angebot', d: 'Auf Basis des Gesprächs erstellen wir ein maßgeschneidertes Angebot für Sie.' },
  { t: 'Projektstart & Umsetzung', d: 'Klar definierte Meilensteine, agile Iteration, direkter Draht zum Projektteam.' },
  { t: 'Ergebnisse & Übergabe', d: 'Dokumentierte Resultate, geschulte Multiplikatoren, produktive Workflows.' },
  { t: 'Nachbetreuung & Weiterentwicklung', d: 'Wir bleiben ansprechbar – damit der KI-Vorsprung erhalten bleibt.' },
]

const partners = ['Accenture', 'Deloitte', 'FIS', 'JCNetwork', 'Universität Würzburg']

const moduleIcons = {
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16V11" />
      <path d="M12 16V8" />
      <path d="M16 16v-3" />
      <path d="M20 16V6" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M8 11h6" />
      <path d="M11 8v6" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" />
      <path d="M6 9v3a3 3 0 003 3h3" />
      <path d="M18 9v3a3 3 0 01-3 3h-3" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M15 20c0-2.2 1.7-4 4-4s2 .6 2 2" />
    </svg>
  ),
}

function ConsultingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    ['Leistungen', '#leistungen'],
    ['Vorgehen', '#vorgehen'],
    ['Über uns', '#ueber-uns'],
    ['Kontakt', '#kontakt'],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-brand-950/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <img src={logo} alt="C&amp;C" className="h-8 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            Contact &amp; Cooperation
            <span className="ml-2 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-accent-300 lg:inline">
              Würzburg e.V.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-brand-400 px-4 py-2 text-sm font-semibold text-brand-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:shadow-accent-500/40"
          >
            Erstgespräch
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {items.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-brand-400 px-4 py-3 text-sm font-semibold text-brand-950"
            >
              Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,96,148,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(51,204,255,0.18),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-fine" />
      <NeuralBackground className="-z-10 opacity-80" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-brand-950" />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent-400/70" />
                  <span className="relative h-2 w-2 rounded-full bg-accent-400" />
                </span>
                Proposal 2026 · KI &amp; Digitalisierung
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Künstliche Intelligenz{' '}
                <span className="text-gradient-cyan animate-gradient-x">für den Mittelstand.</span>
                <br className="hidden sm:block" />
                <span className="text-slate-300">Von der Analyse bis zur Umsetzung.</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                Wir sind <span className="font-semibold text-white">Contact &amp; Cooperation</span> – die
                studentische Unternehmens­beratung der Universität Würzburg. Wir bringen KI und
                Digitalisierung in den Mittelstand: pragmatisch, messbar, umgesetzt.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 via-accent-300 to-brand-300 bg-[length:200%_200%] px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-[0_10px_40px_-10px_rgba(51,204,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[position:100%_50%] hover:shadow-[0_18px_50px_-10px_rgba(51,204,255,0.8)]"
                >
                  Kostenloses Erstgespräch
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-accent-400/40 hover:bg-white/10"
                >
                  Unsere vier Module
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 text-left">
                {[
                  ['30+', 'Jahre Erfahrung'],
                  ['~50', 'aktive Berater'],
                  ['100+', 'Projekte'],
                ].map(([n, l]) => (
                  <div key={l} className="border-l-2 border-accent-400/40 pl-3">
                    <div className="text-2xl font-bold text-white sm:text-3xl">{n}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={3} className="relative hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </div>

      {/* Marquee with capabilities */}
      <div className="relative mt-8 overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap pl-12 text-sm font-medium text-slate-400">
          {[
            ...['KI-Readiness-Check', 'SEO & GEO', 'Custom GPTs', 'Workflow-Automation', 'Microsoft Copilot', 'n8n · Make · Zapier', 'Change Management', 'Enterprise ChatGPT', 'Wissens­datenbank', 'Power-User-Training'],
            ...['KI-Readiness-Check', 'SEO & GEO', 'Custom GPTs', 'Workflow-Automation', 'Microsoft Copilot', 'n8n · Make · Zapier', 'Change Management', 'Enterprise ChatGPT', 'Wissens­datenbank', 'Power-User-Training'],
          ].map((label, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="text-accent-400">◆</span>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Outer conic glow */}
      <div className="absolute inset-0 animate-spin-slow conic-ring opacity-50" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-white/5" />
      <div className="absolute inset-24 rounded-full border border-white/5" />

      {/* Floating glassy chips */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="glass animate-float rounded-2xl px-5 py-4 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
            Strategy → Workflow
          </div>
          <div className="mt-1 text-lg font-bold text-white">KI-Beratung, die umsetzt.</div>
        </div>
      </div>

      <FloatingChip className="left-[-2%] top-[18%]" delay="0s" label="GPT-Enterprise" tone="cyan" />
      <FloatingChip className="right-[-4%] top-[12%]" delay="1.2s" label="GEO-ready" tone="indigo" />
      <FloatingChip className="left-[-6%] bottom-[20%]" delay="2.4s" label="n8n Workflow" tone="cyan" />
      <FloatingChip className="right-[-2%] bottom-[14%]" delay="0.8s" label="Copilot" tone="indigo" />
      <FloatingChip className="left-1/2 top-[2%] -translate-x-1/2" delay="1.6s" label="ROI in 4 Wochen" tone="cyan" />
      <FloatingChip className="left-1/2 bottom-[0%] -translate-x-1/2" delay="2.0s" label="Made in Würzburg" tone="indigo" />

      {/* Pulsing dots on rings */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <span
          key={deg}
          aria-hidden
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_12px_2px_rgba(51,204,255,0.7)]"
          style={{
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-170px)`,
            animation: `glow-pulse 3s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

function FloatingChip({ className = '', label, tone = 'cyan', delay = '0s' }) {
  const tones = {
    cyan: 'from-accent-400/30 to-brand-500/20 text-accent-200 border-accent-400/30',
    indigo: 'from-indigo-400/25 to-brand-500/20 text-indigo-200 border-indigo-400/30',
  }
  return (
    <div
      className={`absolute ${className}`}
      style={{ animation: `float 7s ease-in-out infinite`, animationDelay: delay }}
    >
      <div
        className={`flex items-center gap-2 rounded-full border bg-gradient-to-r ${tones[tone]} px-3.5 py-1.5 text-xs font-semibold backdrop-blur`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {label}
      </div>
    </div>
  )
}

function StatsRow() {
  const stats = [
    { n: 68, suffix: '%', label: 'der KMU sehen Digitalisierung als größte Herausforderung' },
    { n: 4, suffix: ' h', label: 'pro Woche spart ein Mitarbeiter durch gezielte KI-Nutzung' },
    { n: 73, suffix: '%', label: 'der Suchanfragen werden bis 2027 über KI-Systeme beantwortet' },
  ]
  return (
    <section className="relative border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Ausgangslage
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Warum jetzt – und warum genau Sie?
          </h2>
          <p className="mt-3 text-slate-400">
            Künstliche Intelligenz verändert die Spielregeln. Es braucht keine Millionenbudgets –
            sondern den richtigen ersten Schritt.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i + 1)}>
              <div className="glow-border relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7">
                <div className="flex items-baseline gap-1 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  <CountUp to={s.n} className="text-gradient-cyan" />
                  <span className="text-gradient-cyan">{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Effizienz­potenziale heben', 'Repetitive Aufgaben automatisieren, Mitarbeiter für wertschöpfende Tätigkeiten freisetzen.', '⚡'],
            ['Sichtbarkeit sichern', 'In einer KI-gesteuerten Suchlandschaft auffindbar bleiben – für Kunden und Talente.', '🔍'],
            ['Wettbewerbsfähig bleiben', 'Wer jetzt nicht digitalisiert, verliert mittelfristig den Anschluss.', '🎯'],
            ['Mitarbeiter mitnehmen', 'Erfolgreiche Digitalisierung steht und fällt mit der Akzeptanz im Team.', '👥'],
          ].map(([title, desc, emoji], i) => (
            <Reveal key={title} delay={i + 1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:-translate-y-1 hover:border-accent-400/30 hover:bg-white/[0.04]">
                <div className="text-2xl">{emoji}</div>
                <h3 className="mt-3 font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Modules() {
  return (
    <section id="leistungen" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-accent-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Unser Angebot
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vier Module. <span className="text-gradient-cyan animate-gradient-x">Ein Ziel.</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Ob Einstiegsanalyse oder ganzheitliche Transformation – unsere Module lassen sich
            flexibel kombinieren und individuell auf Ihre Situation zuschneiden.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {modules.map((m, idx) => (
            <Reveal key={m.n} delay={Math.min(2, idx + 1)}>
              <ModuleCard module={m} flip={idx % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ module, flip }) {
  return (
    <article className="glow-border group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 transition-all hover:border-accent-400/30 sm:p-10">
      {/* Decorative gradient blob */}
      <div
        className={`pointer-events-none absolute top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 ${
          flip ? 'left-0 opacity-50' : 'right-0 opacity-60'
        }`}
      />
      <div className={`relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <div className="flex items-baseline gap-4">
            <span className="bg-gradient-to-b from-white/40 to-white/5 bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl">
              {module.n}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-300">
              {module.tag}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            {module.title}
          </h3>
          <p className="mt-1.5 text-sm text-slate-400 sm:text-base">{module.subtitle}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">{module.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {module.meta.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-300"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 inline-flex items-center gap-3 rounded-xl border border-accent-400/20 bg-accent-400/5 px-3 py-2 text-accent-300">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-400 to-brand-500 text-brand-950">
              {moduleIcons[module.icon]}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">Schwerpunkte</span>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {module.features.map(([title, desc]) => (
              <li
                key={title}
                className="group/feat rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-accent-400" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4.5 4.5L20 6" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function CaseStudy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800/60 via-brand-900/60 to-brand-950 p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
                  Praxisbeispiel
                </span>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
                  Vom E-Mail-Eingang zum fertigen Angebot –
                  <span className="text-gradient-cyan"> in 5 Minuten statt 45.</span>
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-slate-300">
                  Ein mittelständischer Handwerksbetrieb erhält eine Kundenanfrage. Ein von uns
                  eingerichteter Workflow erfasst die Anfrage automatisch, extrahiert die
                  relevanten Informationen, erstellt ein vorausgefülltes Angebot und legt es dem
                  Vertrieb zur Freigabe vor.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 font-semibold text-emerald-300">
                    −89 % Bearbeitungszeit
                  </span>
                  <span className="rounded-full bg-accent-400/15 px-3 py-1 font-semibold text-accent-300">
                    100 % konsistente Angebote
                  </span>
                </div>
              </div>

              <div className="relative">
                <FlowDiagram />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FlowDiagram() {
  const steps = [
    { t: 'E-Mail-Eingang', d: 'Kundenanfrage trifft ein', icon: '✉️' },
    { t: 'KI extrahiert Daten', d: 'Bedarf, Menge, Termin', icon: '🤖' },
    { t: 'Angebot generiert', d: 'Aus Wissensdatenbank', icon: '📄' },
    { t: 'Vertrieb prüft', d: '5 Min. statt 45', icon: '✅' },
  ]
  return (
    <ol className="relative space-y-3">
      <span className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-400 via-accent-400/40 to-transparent" />
      {steps.map((s, i) => (
        <li key={s.t} className="relative flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur">
          <span
            className="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-brand-500 text-lg shadow-lg shadow-accent-500/30"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {s.icon}
          </span>
          <div>
            <div className="text-sm font-semibold text-white">{s.t}</div>
            <div className="text-xs text-slate-400">{s.d}</div>
          </div>
          <span className="ml-auto text-xs font-mono text-accent-300/70">0{i + 1}</span>
        </li>
      ))}
    </ol>
  )
}

function Process() {
  return (
    <section id="vorgehen" className="relative border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Unser Vorgehen
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vom Kennenlernen zur produktiven Lösung
          </h2>
          <p className="mt-4 text-slate-400">
            Klare Etappen, regelmäßiger Austausch, sichtbare Ergebnisse.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(5, i + 1)}>
                <li className="relative h-full rounded-2xl border border-white/10 bg-brand-950/60 p-5 backdrop-blur">
                  <div className="absolute -top-5 left-5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-brand-500 text-sm font-bold text-brand-950 shadow-lg shadow-accent-500/30">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="ueber-uns" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Über uns
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Akademische Exzellenz – mit
              <span className="text-gradient-cyan"> unternehmerischer Praxis.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Seit über 30 Jahren verbindet <strong className="font-semibold text-white">Contact &amp; Cooperation Würzburg e.V.</strong> Studierende
              der Universität Würzburg mit Unternehmen aus der Region und ganz Deutschland. KI und
              Digitalisierung sind für uns keine Buzzwords – sondern unsere tägliche Praxis.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { n: 30, s: '+', l: 'Jahre Erfahrung' },
                { n: 50, s: '', l: 'Aktive Mitglieder' },
                { n: 14, s: '', l: 'Studiengänge' },
                { n: 100, s: '+', l: 'Projekte' },
              ].map((s) => (
                <div key={s.l} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    <CountUp to={s.n} suffix={s.s} className="text-gradient-cyan" />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Vertrauen unsere Partner
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-slate-200">
                {partners.map((p) => (
                  <span key={p} className="opacity-80">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={Math.min(4, i + 1)}>
                <div className="group flex gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-all hover:-translate-y-0.5 hover:border-accent-400/30">
                  <div className="flex-none">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent-400/30 bg-accent-400/10 text-sm font-bold text-accent-300">
                      {r.n}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section id="kontakt" className="relative isolate overflow-hidden">
      <NeuralBackground className="-z-10 opacity-50" density={50} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Nächste Schritte
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Bereit für den{' '}
            <span className="text-gradient-cyan animate-gradient-x">nächsten Schritt?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Ob kompakter KI-Readiness-Check oder ganzheitliche Digitalisierungsstrategie – wir
            freuen uns auf den Austausch mit Ihnen. Das Erstgespräch ist selbstverständlich
            unverbindlich und kostenfrei.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ['1', 'Kontakt aufnehmen', 'Eine kurze E-Mail oder ein Anruf genügt. Wir melden uns innerhalb von 48 Stunden.'],
              ['2', 'Erstgespräch', '30-minütiges, kostenfreies Gespräch, um Ihre Situation und Ziele zu verstehen.'],
              ['3', 'Individuelles Angebot', 'Auf Basis des Gesprächs erstellen wir ein maßgeschneidertes Angebot.'],
            ].map(([n, t, d]) => (
              <div
                key={n}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-brand-500 text-sm font-bold text-brand-950">
                  {n}
                </div>
                <h3 className="mt-4 font-bold text-white">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@cundc.org?subject=Erstgespr%C3%A4ch%20KI%20%26%20Digitalisierung"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 via-accent-300 to-brand-300 bg-[length:200%_200%] px-7 py-4 text-base font-semibold text-brand-950 shadow-[0_18px_45px_-10px_rgba(51,204,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[position:100%_50%]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              info@cundc.org
            </a>
            <a
              href="https://www.cundc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-accent-400/40 hover:bg-white/10"
            >
              www.cundc.org
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ConsultingFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr,0.9fr,0.9fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="C&amp;C" className="h-8 w-auto" />
            <div className="text-sm font-semibold text-white">
              Contact &amp; Cooperation Würzburg e.V.
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Studentische Unternehmens­beratung der Universität Würzburg. Wir bringen KI und
            Digitalisierung in den Mittelstand – seit über 30 Jahren.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            Mitglied im JCNetwork – Deutschlands größtem studentischen Beraternetzwerk.
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Kontakt
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Sanderring 2 · 97070 Würzburg</li>
            <li>
              <a className="hover:text-white" href="mailto:info@cundc.org">
                info@cundc.org
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="https://www.cundc.org" target="_blank" rel="noopener noreferrer">
                www.cundc.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            Navigation
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a className="hover:text-white" href="#leistungen">Leistungen</a></li>
            <li><a className="hover:text-white" href="#vorgehen">Vorgehen</a></li>
            <li><a className="hover:text-white" href="#ueber-uns">Über uns</a></li>
            <li><a className="hover:text-white" href="#kontakt">Erstgespräch</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-500">
        © 2026 Contact &amp; Cooperation Würzburg e.V. – Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}

export default function Consulting() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-950 text-slate-100 antialiased">
      <ConsultingNav />
      <Hero />
      <StatsRow />
      <Modules />
      <CaseStudy />
      <Process />
      <WhyUs />
      <ContactCTA />
      <ConsultingFooter />
    </div>
  )
}
