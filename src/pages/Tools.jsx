import { useMemo, useState } from 'react'
import { tools, toolCategories } from '../data/tools.js'

export default function Tools() {
  const [cat, setCat] = useState('Alle')
  const cats = ['Alle', ...toolCategories]

  const filtered = useMemo(
    () => (cat === 'Alle' ? tools : tools.filter((t) => t.category === cat)),
    [cat],
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Tool-Bibliothek
        </h1>
        <p className="mt-3 text-slate-400">
          Die wichtigsten KI-Tools im Überblick. Im Verein arbeiten wir primär mit{' '}
          <span className="font-semibold text-brand-200">Claude</span>; daneben lohnt sich der
          Blick auf bewährte Ergänzungen.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              cat === c
                ? 'bg-brand-600 text-white'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((t) => (
          <a
            key={t.name}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-200">{t.name}</h3>
                  {t.recommended && (
                    <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-200">
                      Empfohlen
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500">{t.category}</span>
              </div>
              <span className="shrink-0 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
                {t.pricing}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{t.what}</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500">Stark für: {t.bestFor}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-brand-300">
                Öffnen
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
