import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import AuthLayout from '../components/AuthLayout.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/dashboard'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = login(form)
    setLoading(false)
    if (res.error) {
      setError(res.error)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <AuthLayout title="Willkommen zurück" subtitle="Melde dich an, um weiterzulernen.">
      <form onSubmit={submit} className="space-y-4">
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}
        <div>
          <label className="label" htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input"
            placeholder="du@unternehmen.de"
          />
        </div>
        <div>
          <label className="label" htmlFor="password">Passwort</label>
          <input
            id="password"
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="input"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? 'Anmelden…' : 'Anmelden'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Noch kein Konto?{' '}
        <Link to="/register" className="font-semibold text-brand-300 hover:text-brand-200">
          Jetzt registrieren
        </Link>
      </p>
    </AuthLayout>
  )
}
