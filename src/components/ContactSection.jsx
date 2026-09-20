const ICON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-5 w-5',
  'aria-hidden': true,
}

const CONTACTS = [
  {
    label: 'Call us',
    value: '+91 9381472064',
    href: 'tel:+919381472064',
    icon: (
      <svg {...ICON}>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    label: 'Email us',
    value: 'bnst17042006@gmail.com',
    href: 'mailto:bnst17042006@gmail.com',
    icon: (
      <svg {...ICON}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'Based in',
    value: 'Hyderabad, India',
    icon: (
      <svg {...ICON}>
        <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
]

const rowClass =
  'group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300'

export default function ContactSection({ onBook }) {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-12 sm:px-10 md:px-14 md:py-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#6D28D9]/40 blur-3xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-50 400C260 280 500 500 800 380S1100 240 1260 320" stroke="white" strokeOpacity="0.07" strokeWidth="1.2" />
          <path d="M-50 460C270 350 520 560 820 440S1120 310 1260 380" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
        </svg>

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Get in touch</p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
              Let&apos;s Construct Something Memorable.
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-white/70 md:text-base lg:mx-0">
              Partner with us to create premium interface platforms tailored precisely to secure
              absolute authority within your local industry sector.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row lg:justify-start">
              <button
                onClick={onBook}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-[#24113F] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]"
              >
                Book free consultation
              </button>
              <a
                href="mailto:bnst17042006@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Send an email
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {CONTACTS.map((c) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 group-hover:bg-[#6D28D9]">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/60">{c.label}</span>
                    <span className="block break-all text-base font-semibold text-white">{c.value}</span>
                  </span>
                </>
              )
              return c.href ? (
                <a key={c.label} href={c.href} className={`${rowClass} hover:border-white/25 hover:bg-white/10`}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={rowClass}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
