import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import Logo from './Logo.jsx'

export default function Navbar() {
  const { user, signOut, streak } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    setOpen(false)
    navigate('/')
  }

  const links = [
    { to: '/journey', label: 'Learning Journey' },
    { to: '/tools', label: 'Tools' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              {streak > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/15 px-3 py-1.5 text-sm font-semibold text-orange-300">
                  🔥 {streak}
                </span>
              )}
              <Link to="/dashboard" className="btn-ghost">
                Dashboard
              </Link>
              <button onClick={handleSignOut} className="text-sm font-medium text-slate-300 hover:text-white">
                Abmelden
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-slate-200 hover:text-white">
                Anmelden
              </Link>
              <Link to="/register" className="btn-primary">
                Loslegen
              </Link>
            </>
          )}
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="btn-ghost">
                    Dashboard {streak > 0 && `· 🔥 ${streak}`}
                  </Link>
                  <button onClick={handleSignOut} className="btn-ghost">
                    Abmelden
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="btn-ghost">
                    Anmelden
                  </Link>
                  <Link to="/register" onClick={() => setOpen(false)} className="btn-primary">
                    Loslegen
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
