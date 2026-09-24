import Reveal from './Reveal.jsx'

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-6 w-6',
  'aria-hidden': true,
}

const PRINCIPLES = [
  {
    title: 'Innovation',
    body: 'New ideas turned into working software, not slide decks.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
  {
    title: 'Fast & Adaptive',
    body: 'Short build cycles that adjust as your needs change.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Leadership',
    body: 'Clear technical direction from the first call to launch.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
      </svg>
    ),
  },
  {
    title: 'Connectivity',
    body: 'Systems that connect your tools, teams and customers.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
      </svg>
    ),
  },
  {
    title: 'Operations',
    body: 'Reliable deployment and support long after go-live.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
      </svg>
    ),
  },
]

export default function PrinciplesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-12 sm:px-10 md:px-12 md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6D28D9]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#00D4C4]/25 blur-3xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-50 380C250 260 480 480 780 360S1080 220 1260 300" stroke="white" strokeOpacity="0.07" strokeWidth="1.2" />
          <path d="M-50 440C260 330 500 540 800 420S1100 290 1260 360" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
        </svg>

        <div className="relative mx-auto max-w-2xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Our principles</p>
          <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">What Agentosys stands for</h2>
        </div>

        <div className="relative mt-12 grid divide-y divide-white/10 md:mt-14 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {PRINCIPLES.map((item, i) => (
            <Reveal
              key={item.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group relative px-2 py-8 transition-colors duration-300 hover:bg-white/5 lg:px-6 lg:py-4"
            >
              <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-white/5 transition-colors duration-300 group-hover:text-white/10">
                0{i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#4FB3E8] group-hover:to-[#00D4C4] group-hover:shadow-[0_10px_24px_-8px_rgba(0,212,196,0.85)]">
                {item.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
