import Reveal from './Reveal.jsx'

const ICON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-6 w-6',
  'aria-hidden': true,
}

const ICONS = {
  '01': (
    <svg {...ICON}>
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
    </svg>
  ),
  '02': (
    <svg {...ICON}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  '03': (
    <svg {...ICON}>
      <rect x="3" y="4" width="14" height="10" rx="2" />
      <path d="M8 18h4" />
      <rect x="15" y="9" width="6" height="11" rx="1.5" />
    </svg>
  ),
  '04': (
    <svg {...ICON}>
      <path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.7-1A4.5 4.5 0 0 1 17 18H7z" />
      <path d="M12 12v6M9.5 14.5L12 12l2.5 2.5" />
    </svg>
  ),
  '05': (
    <svg {...ICON}>
      <path d="M4 5h16v11H9l-5 4V5z" />
    </svg>
  ),
  '06': (
    <svg {...ICON}>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
}

export default function FeatureGrid({ features }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => {
        const featured = i === 0
        const banner = i === features.length - 1

        if (featured) {
          return (
            <Reveal
              key={f.n}
              className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#24113F] p-7 sm:col-span-2 md:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#6D28D9]/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#00D4C4]/25 blur-3xl" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 300" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path d="M-20 240C140 160 260 290 420 210S560 130 640 170" stroke="white" strokeOpacity="0.08" strokeWidth="1.2" />
                <path d="M-20 280C150 210 280 320 440 250S570 180 640 210" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
              </svg>
              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6D28D9] text-white shadow-[0_10px_24px_-8px_rgba(109,40,217,0.9)]">
                  {ICONS[f.n]}
                </span>
                <span className="text-5xl font-black text-white/10">{f.n}</span>
              </div>
              <div className="relative mt-10 max-w-md space-y-2">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{f.body}</p>
              </div>
            </Reveal>
          )
        }

        return (
          <Reveal
            key={f.n}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            className={`hud-card group relative flex flex-col justify-between rounded-3xl p-7 hover:-translate-y-1 ${
              banner ? 'gap-6 sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-start lg:gap-8 !bg-[#F3EEFA]' : 'min-h-[15rem]'
            }`}
          >
            <div className={`flex items-start justify-between ${banner ? 'lg:shrink-0' : ''}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#6D28D9]/20 bg-[#6D28D9]/10 text-[#6D28D9] transition-all duration-300 group-hover:border-transparent group-hover:bg-[#6D28D9] group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(109,40,217,0.8)]">
                {ICONS[f.n]}
              </span>
              {!banner && <span className="text-4xl font-black text-[#24113F]/[0.06]">{f.n}</span>}
            </div>
            <div className={`space-y-2 ${banner ? 'max-w-2xl' : 'pt-8'}`}>
              <h3 className="text-lg font-bold text-volcanoWhite">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
