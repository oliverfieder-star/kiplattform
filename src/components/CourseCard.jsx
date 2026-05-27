import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/kurse/${course.id}`}
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-600/10"
    >
      <div className={`h-32 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="rounded-md bg-white/5 px-2 py-0.5">{course.level}</span>
          <span>·</span>
          <span>{course.duration}</span>
          <span>·</span>
          <span>{course.lessons} Lektionen</span>
        </div>
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-300">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{course.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
          Kurs ansehen
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
