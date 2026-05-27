import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import {
  stages,
  getStageProgress,
  getNextLesson,
  totalLessons,
  getRank,
  RANKS,
} from '../data/journey.js'

const BADGES = [
  { id: 'first', label: 'Erste Lektion', emoji: '🌱', test: (s) => s.done >= 1 },
  { id: 'streak3', label: '3-Tage-Streak', emoji: '🔥', test: (s) => s.streak >= 3 },
  { id: 'five', label: '5 Lektionen', emoji: '⭐', test: (s) => s.done >= 5 },
  { id: 'prompting', label: 'Prompting-Profi', emoji: '✍️', test: (s) => s.promptingDone },
  { id: 'streak7', label: '7-Tage-Streak', emoji: '🚀', test: (s) => s.streak >= 7 },
  { id: 'half', label: 'Halbzeit', emoji: '🏅', test: (s) => s.done >= totalLessons / 2 },
]

export default function Dashboard() {
  const { profile, progress, points, streak } = useAuth()

  const done = progress.size
  const rank = getRank(points)
  const next = getNextLesson(progress, profile?.level)
  const promptingDone = stages
    .find((s) => s.id === 'prompting')
    .lessons.every((l) => progress.has(l.id))
  const badgeState = { done, streak, promptingDone }
  const started = stages
    .map((s) => ({ stage: s, ...getStageProgress(s, progress) }))
    .filter((s) => s.done > 0)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-300">Dashboard</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            Hallo, {profile?.name?.split(' ')[0] || 'Mitglied'} 👋
          </h1>
        </div>
        {next && (
          <Link to={`/lesson/${next.id}`} className="btn-primary shrink-0">
            Weiterlernen
          </Link>
        )}
      </div>

      {/* Level */}
      <div className="card mt-8 overflow-hidden p-6">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-3xl">
            {rank.current.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-brand-300">Level {rank.current.level}</p>
            <h2 className="text-xl font-extrabold text-white">{rank.current.title}</h2>
          </div>
          {rank.next && (
            <span className="hidden text-right text-sm text-slate-400 sm:block">
              noch {rank.pointsToNext} P bis
              <br />
              <span className="font-semibold text-slate-200">{rank.next.title}</span>
            </span>
          )}
        </div>
        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all"
              style={{ width: `${rank.pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            {rank.next
              ? `${points} Punkte · noch ${rank.pointsToNext} bis Level ${rank.next.level} (${rank.next.title})`
              : `Höchstes Level erreicht – ${points} Punkte. Respekt! 🏆`}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="card p-6">
          <div className="text-3xl font-extrabold text-white">{points}</div>
          <div className="mt-1 text-sm text-slate-400">Punkte</div>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-extrabold text-white">🔥 {streak}</div>
          <div className="mt-1 text-sm text-slate-400">Tage-Streak</div>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-extrabold text-white">
            {done}
            <span className="text-lg text-slate-500">/{totalLessons}</span>
          </div>
          <div className="mt-1 text-sm text-slate-400">Lektionen</div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Continue */}
          {next ? (
            <Link
              to={`/lesson/${next.id}`}
              className="card flex items-center justify-between gap-4 p-5 transition-colors hover:border-brand-400/40"
            >
              <div>
                <p className="text-sm text-brand-200">Nächster Schritt</p>
                <p className="font-bold text-white">{next.title}</p>
                <p className="text-sm text-slate-400">{next.stageTitle}</p>
              </div>
              <span className="btn-primary shrink-0">Start</span>
            </Link>
          ) : (
            <div className="card p-6 text-center">
              <p className="text-2xl">🎉</p>
              <p className="mt-2 font-bold text-white">Alles abgeschlossen!</p>
              <p className="mt-1 text-sm text-slate-400">
                Du hast alle aktuellen Lektionen gemeistert. Jedes Semester kommen neue dazu.
              </p>
            </div>
          )}

          {/* Stage progress */}
          <h2 className="mt-10 text-lg font-bold text-white">Dein Fortschritt</h2>
          {started.length === 0 && (
            <p className="mt-3 rounded-xl border border-dashed border-white/15 p-4 text-sm text-slate-400">
              Noch nichts begonnen – sobald du deine erste Lektion abschließt, siehst du hier
              deinen Fortschritt pro Stufe.
            </p>
          )}
          <div className="mt-4 space-y-3">
            {(started.length ? started.map((s) => s.stage) : stages.slice(0, 3)).map((stage) => {
              const { done: d, total, pct } = getStageProgress(stage, progress)
              return (
                <Link
                  key={stage.id}
                  to={`/journey/${stage.id}`}
                  className="card flex items-center gap-4 p-4 transition-colors hover:border-brand-400/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-xl">
                    {stage.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-white">{stage.title}</h3>
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{d}/{total}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Badges */}
          <div>
            <h2 className="text-lg font-bold text-white">Abzeichen</h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {BADGES.map((b) => {
                const earned = b.test(badgeState)
                return (
                  <div
                    key={b.id}
                    title={b.label}
                    className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center ${
                      earned
                        ? 'border-brand-400/40 bg-brand-500/10'
                        : 'border-white/10 bg-white/5 opacity-40 grayscale'
                    }`}
                  >
                    <span className="text-2xl">{b.emoji}</span>
                    <span className="text-[10px] leading-tight text-slate-400">{b.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Levels overview */}
          <div>
            <h2 className="text-lg font-bold text-white">Deine Level</h2>
            <div className="mt-4 space-y-2">
              {RANKS.map((r) => {
                const reached = points >= r.min
                const isCurrent = r.level === rank.current.level
                return (
                  <div
                    key={r.level}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                      isCurrent
                        ? 'border-accent-400/50 bg-accent-400/10'
                        : reached
                          ? 'border-white/10 bg-white/5'
                          : 'border-white/10 bg-white/5 opacity-50'
                    }`}
                  >
                    <span className="text-xl">{r.emoji}</span>
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-white">
                      Lvl {r.level} · {r.title}
                    </span>
                    {reached ? (
                      <span className="text-xs font-semibold text-accent-400">erreicht</span>
                    ) : (
                      <span className="text-xs text-slate-500">{r.min} P</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Streak explainer */}
          <div className="card p-5">
            <p className="font-semibold text-white">🔥 Dein Streak</p>
            <p className="mt-1 text-sm text-slate-400">
              Schließe an aufeinanderfolgenden Tagen mindestens eine Lektion ab, um deinen
              Streak wachsen zu lassen. Pausierst du einen Tag, beginnt er neu bei 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
