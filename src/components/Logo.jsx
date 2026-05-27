import { Link } from 'react-router-dom'

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path d="M15 8c-1.2-1.2-3-1.6-4.6-.8C8 8 6.8 11 7.6 13.5 8.4 15.5 10.6 16.7 12.6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16.5" cy="14.5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="text-base font-extrabold tracking-tight text-white">
        C&amp;C <span className="text-brand-300">AI Academy</span>
      </span>
    </Link>
  )
}
