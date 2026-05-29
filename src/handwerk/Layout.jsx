import { Link, NavLink } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/handwerk" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/30 transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* stylised wrench/spanner */}
          <path d="M14.7 6.3a4 4 0 015.0 5.0L20 12l-8 8a2.5 2.5 0 01-3.5-3.5l8-8 .2-.2z" />
          <path d="M14.7 6.3L11 10" />
        </svg>
      </span>
      <span className="text-base font-extrabold tracking-tight text-slate-900">
        KI-<span className="text-orange-500">Werkstatt</span>
      </span>
    </Link>
  )
}

export default function HandwerkLayout({ children }) {
  const linkBase =
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  const linkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'}`

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Logo />
          <div className="hidden items-center gap-1 md:flex">
            <NavLink end to="/handwerk" className={linkClass}>Start</NavLink>
            <NavLink to="/handwerk/lerntour" className={linkClass}>Lerntour</NavLink>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/handwerk/lerntour" className="hw-btn hw-btn-primary">
              Kostenlos testen
            </Link>
          </div>
          <Link to="/handwerk/lerntour" className="md:hidden hw-btn hw-btn-primary text-xs px-3 py-2">
            Loslegen
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              KI für dein Handwerk – ohne IT-Studium. Wir zeigen dir Schritt für
              Schritt, wie du den Papierkram leichter machst.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Lernen</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/handwerk/lerntour" className="hover:text-slate-900">Lerntour</Link></li>
              <li><Link to="/handwerk/lektion/angebote-1" className="hover:text-slate-900">Beispiel-Lektion</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Hinweis</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Dies ist ein Prototyp zur Demonstration. Eine produktive Version
              würde DSGVO-konformen Account-Bereich, Zahlungs-Workflow und
              individuell auf das Gewerk zugeschnittene Inhalte ergänzen.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
          © 2026 KI-Werkstatt · Prototyp
        </div>
      </footer>
    </div>
  )
}
