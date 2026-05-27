import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import AuthLayout from '../components/AuthLayout.jsx'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.')
      return
    }
    setLoading(true)
    const res = register(form)
    setLoading(false)
    if (res.error) {
      setError(res.error)
      return
    }
    navigate('/dashboard', { replace: true })
  }

  return (
    <AuthLayout title="Konto erstellen" subtitle="Kostenlos starten – in unter einer Minute.">
      <form onSubmit={submit} className="space-y-4">
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}
        <div>
          <label className="label" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input"
            placeholder="Vor- und Nachname"
          />
        </div>
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
            placeholder="Mindestens 6 Zeichen"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? 'Konto wird erstellt…' : 'Konto erstellen'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Bereits registriert?{' '}
        <Link to="/login" className="font-semibold text-brand-300 hover:text-brand-200">
          Anmelden
        </Link>
      </p>
    </AuthLayout>
  )
}
