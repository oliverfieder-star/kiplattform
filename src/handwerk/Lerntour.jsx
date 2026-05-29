import { Link } from 'react-router-dom'
import HandwerkLayout from './Layout.jsx'
import { stages, flagshipLesson } from './content.js'

export default function HandwerkLerntour() {
  return (
    <HandwerkLayout>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-orange-600">Lerntour</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sieben Schritte zum entspannteren Bürotag
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Jede Lektion löst genau ein konkretes Problem aus dem Betrieb. Starte dort,
            wo dich der Schuh drückt – die Reihenfolge ist nur ein Vorschlag.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-semibold text-orange-700">Heute schon konkret:</p>
            <p className="font-bold text-slate-900">{flagshipLesson.title}</p>
            <p className="text-sm text-slate-600">Der größte Zeitfresser für Inhaber.</p>
          </div>
          <Link to={`/handwerk/lektion/${flagshipLesson.id}`} className="hw-btn-primary mt-3 sm:mt-0 shrink-0">
            Lektion starten
          </Link>
        </div>

        <div className="mt-12 space-y-4">
          {stages.map((stage) => (
            <div key={stage.id} className="hw-card overflow-hidden">
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-50 text-2xl">
                  {stage.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      Schritt {stage.order + 1}
                    </span>
                    {stage.featured && (
                      <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                        Beispiel komplett
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
                  <p className="text-sm text-slate-600">{stage.subtitle}</p>
                </div>
              </div>
              <div className="border-t border-slate-100 bg-slate-50/50 px-5 py-3">
                <ul className="grid gap-1 sm:grid-cols-2">
                  {stage.lessons.map((l, i) => {
                    const linkable = l.id === flagshipLesson.id
                    const className =
                      'flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm ' +
                      (linkable
                        ? 'text-slate-900 hover:bg-white'
                        : 'text-slate-500')
                    const inner = (
                      <>
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 truncate">{l.title}</span>
                        <span className="shrink-0 text-xs text-slate-400">{l.duration}</span>
                        {linkable && (
                          <span className="ml-1 rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-orange-700">
                            offen
                          </span>
                        )}
                      </>
                    )
                    return (
                      <li key={l.id}>
                        {linkable ? (
                          <Link to={`/handwerk/lektion/${l.id}`} className={className}>
                            {inner}
                          </Link>
                        ) : (
                          <div className={className} title="Prototyp: in dieser Demo nicht ausgearbeitet">
                            {inner}
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Dies ist ein Prototyp. Eine produktive Version würde alle 14 Lektionen voll
          ausarbeiten – je nach Gewerk auch zugeschnitten (SHK, Elektro, Maler …).
        </p>
      </div>
    </HandwerkLayout>
  )
}
