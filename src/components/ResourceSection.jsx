import Reveal from './Reveal.jsx'

// One of the three big sections on /resources: a numbered header, then the content.
// tone: 'plain' (page background), 'tint' (soft lilac panel) or 'dark' (deep purple panel).
const TONES = {
  plain: { shell: 'py-16 md:py-24', eyebrow: 'text-volcanoCrimson', title: '', intro: 'text-zinc-400', badge: 'border-volcanoCrimson/30 bg-white/60' },
  tint: {
    shell: 'my-8 rounded-[2rem] bg-gradient-to-br from-[#EAE2F7] via-[#F3EEFA] to-white px-5 py-14 sm:px-10 md:my-12 md:px-14 md:py-20',
    eyebrow: 'text-volcanoCrimson',
    title: '',
    intro: 'text-zinc-400',
    badge: 'border-volcanoCrimson/30 bg-white/60',
  },
  dark: {
    shell: 'relative my-8 overflow-hidden rounded-[2rem] bg-[#24113F] px-5 py-14 sm:px-10 md:my-12 md:px-14 md:py-20',
    eyebrow: 'text-[#7FEFE6]',
    title: 'text-white',
    intro: 'text-white/70',
    badge: 'border-white/25 bg-white/10',
  },
}

export default function ResourceSection({ id, n, eyebrow, title, intro, tone = 'plain', children }) {
  const t = TONES[tone]
  return (
    <section id={id} className={`scroll-mt-24 ${t.shell}`}>
      {tone === 'dark' && (
        <>
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#6D28D9]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-[#00D4C4]/20 blur-3xl" />
        </>
      )}
      <div className="relative space-y-12 md:space-y-16">
        <Reveal className="relative max-w-3xl">
          <div className="space-y-4">
            <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-widest ${t.eyebrow}`}>
              <span aria-hidden="true" className={`flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[11px] font-bold tabular-nums tracking-normal ${t.badge}`}>
                {n}
              </span>
              {eyebrow}
            </p>
            <h2 className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl ${t.title}`}>{title}</h2>
            <p className={`max-w-2xl text-base leading-relaxed md:text-lg ${t.intro}`}>{intro}</p>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
