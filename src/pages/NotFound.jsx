import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="grid min-h-[calc(100vh-64px)] place-items-center px-4 text-center">
      <div>
        <p className="text-7xl font-extrabold text-brand-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">Seite nicht gefunden</h1>
        <p className="mt-2 text-slate-400">Diese Seite gibt es leider nicht (mehr).</p>
        <Link to="/" className="btn-primary mt-8">Zurück zur Startseite</Link>
      </div>
    </div>
  )
}
