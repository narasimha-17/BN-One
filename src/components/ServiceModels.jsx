const MODELS = [
  {
    short: 'SaaS',
    full: 'Software as a Service',
    tagline: 'A complete software product',
    body: 'Ready-to-use software delivered online. You subscribe and use the finished product, while we host, maintain and improve it for you.',
    points: ['Complete, ready-to-use product', 'Hosting, updates and support included', 'Start quickly with no infrastructure to manage'],
    icon: 'M4 6h16v10H4zM8 20h8M12 16v4',
  },
  {
    short: 'TaaS',
    full: 'Technology as a Service / Testing as a Service',
    tagline: 'Technology capabilities or software testing as a service',
    body: 'Technology capabilities or software testing delivered on demand. Bring in the engineering or testing expertise you need, without hiring a full team.',
    points: ['Technology capabilities on demand', 'Software testing and quality assurance', 'Scale up or down as your project needs'],
    icon: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M8 15h8',
  },
]

export default function ServiceModels() {
  return (
    <section id="service-models" className="space-y-10 border-t border-zinc-900/60 py-16 md:py-24">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Service models</p>
        <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">How we deliver</h2>
        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">Two ways to work with us, depending on what you need.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {MODELS.map((m) => (
          <article key={m.short} className="hud-card group flex flex-col gap-6 rounded-3xl p-7 hover:-translate-y-1 sm:p-9">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F3EEFA] text-volcanoCrimson transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#4FB3E8] group-hover:to-[#00D4C4] group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                  <path d={m.icon} />
                </svg>
              </span>
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-volcanoWhite">{m.short}</h3>
                <p className="text-sm font-medium text-volcanoCrimson">{m.full}</p>
              </div>
            </div>
            <p className="text-base font-semibold text-volcanoWhite">{m.tagline}</p>
            <p className="text-sm leading-relaxed text-zinc-400">{m.body}</p>
            <ul className="mt-auto space-y-3 border-t border-zinc-900/60 pt-6">
              {m.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-volcanoWhite">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson/10 text-volcanoCrimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <path d="M5 12l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
