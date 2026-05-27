import Logo from './Logo.jsx'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-600/25 blur-[110px]" />
      <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[110px]" />
      <div className="relative w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="card p-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">{title}</h1>
          <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
