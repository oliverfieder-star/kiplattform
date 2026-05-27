import { Link } from 'react-router-dom'
import logo from '../assets/cc-logo.png'

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-lg shadow-brand-900/40 transition-transform group-hover:scale-105">
        <img src={logo} alt="C&C" className="h-6 w-auto" />
      </span>
      <span className="text-base font-extrabold tracking-tight text-white">
        C&amp;C <span className="text-accent-400">AI Academy</span>
      </span>
    </Link>
  )
}
