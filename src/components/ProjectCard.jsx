export default function ProjectCard({ proj, tier, icon }) {
  return (
    <article className="hud-card group flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1">
      {/* Header band */}
      <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAE2F7] via-[#F3EEFA] to-white">
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#6D28D9]/20 blur-2xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 300 128"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-10 96C60 60 120 120 190 84S270 40 320 64" stroke="#6D28D9" strokeOpacity="0.18" strokeWidth="1.2" />
          <path d="M-10 118C70 84 130 140 200 104S280 62 320 84" stroke="#6D28D9" strokeOpacity="0.12" strokeWidth="1.2" />
        </svg>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-volcanoCrimson shadow-[0_16px_32px_-14px_rgba(109,40,217,0.55)] transition-transform duration-500 group-hover:scale-110 [&>svg]:h-8 [&>svg]:w-8">
          {icon}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-[#24113F] px-3 py-1 text-xs font-bold text-white">
          {proj.price}
        </span>
        <span className="absolute left-4 top-4 rounded-full border border-[#6D28D9]/25 bg-white/70 px-3 py-1 text-[11px] font-semibold text-volcanoCrimson">
          {tier}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div className="space-y-3">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-volcanoWhite">{proj.name}</h3>
          <p className="text-sm leading-relaxed text-zinc-400">{proj.problem}</p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-1.5">
            {proj.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#F3EEFA] px-2.5 py-1 text-[11px] font-medium text-volcanoCrimson"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://demo.agentosys.com/${proj.url}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-volcanoCrimson/30 px-4 text-sm font-semibold text-volcanoCrimson transition-all hover:bg-volcanoCrimson hover:text-white"
            >
              {proj.buyUrl ? 'Preview' : 'Live demo'}
            </a>
            {proj.buyUrl && (
              <a
                href={proj.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-btn inline-flex h-10 flex-1 items-center justify-center rounded-full px-4 text-sm font-bold"
              >
                Buy now
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
