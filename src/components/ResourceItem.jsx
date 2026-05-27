const META = {
  video: { label: 'Video', icon: 'M8 5v14l11-7z' },
  doc: { label: 'Doku', icon: 'M7 3h7l5 5v13H7zM14 3v5h5' },
  article: { label: 'Artikel', icon: 'M4 5h16M4 12h16M4 19h10' },
  course: { label: 'Kurs', icon: 'M12 3 2 8l10 5 8-4v6M6 11v5c0 1 3 3 6 3s6-2 6-3v-5' },
  interactive: { label: 'Interaktiv', icon: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3' },
  tool: { label: 'Tool', icon: 'M14 7l3 3-9 9H5v-3zM14 7l2-2 3 3-2 2' },
}

export default function ResourceItem({ resource }) {
  const meta = META[resource.type] || META.article
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={meta.icon} />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold text-white group-hover:text-brand-200">
          {resource.title}
        </div>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-400">
          <span className="rounded bg-white/5 px-1.5 py-0.5">{meta.label}</span>
          {resource.provider && <span>· {resource.provider}</span>}
          {resource.duration && <span>· {resource.duration}</span>}
        </div>
      </div>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-brand-300" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
