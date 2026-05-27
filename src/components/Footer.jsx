import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Praxisnahe KI-Weiterbildung für Unternehmen und Teams. Wir machen
              künstliche Intelligenz verständlich, anwendbar und sicher.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Academy</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li><a href="/kurse" className="hover:text-white">Kurse</a></li>
              <li><a href="/#vorteile" className="hover:text-white">Vorteile</a></li>
              <li><a href="/#team" className="hover:text-white">Team</a></li>
              <li><a href="/register" className="hover:text-white">Registrieren</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li><a href="mailto:academy@cundc.org" className="hover:text-white">academy@cundc.org</a></li>
              <li>C&amp;C GmbH</li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} C&amp;C AI Academy. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Impressum</a>
            <a href="#" className="hover:text-slate-300">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
