import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { blueprintSteps } from '../data/homeData.js'

const EXPECT = [
  ['One team, start to finish', 'The people who scope your project are the people who build it.'],
  ['Progress you can see', 'Something reviewable every few days, not a big reveal at the end.'],
  ['Plain-language updates', 'Clear status, clear risks and no jargon.'],
]

const NEED = [
  'A clear picture of the problem you want to solve',
  'One decision-maker who can approve work quickly',
  'Access to any existing systems, data or brand assets',
  'Honest feedback at each review',
]

export default function HowWeWork() {
  usePageTitle('How We Work — Infortia')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-32 sm:px-6 md:pt-44">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">How we work</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            A clear path from idea to <span className="neon-text">launch and beyond.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Five steps, each with a clear outcome. Timings are typical for a focused scope and vary with the size of
            your project.
          </p>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-24">
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-6 left-[1.6rem] top-6 w-px bg-gradient-to-b from-[#6D28D9] via-[#4FB3E8] to-[#00D4C4] opacity-40" aria-hidden="true" />
          <ol className="relative space-y-6">
            {blueprintSteps.map((step, i) => (
              <Reveal as="li" key={step.title} style={{ transitionDelay: `${i * 70}ms` }} className="relative flex gap-5">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson text-lg font-bold text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.8)]">
                  {i + 1}
                </span>
                <div className="hud-card group flex-1 rounded-2xl p-6 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-xl font-bold">{step.title}</h2>
                    <span className="rounded-full bg-[#F3EEFA] px-3 py-1 text-xs font-semibold text-volcanoCrimson">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-500">{step.tag}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          </div>
        </section>

        {/* Expect / need */}
        <section className="grid gap-5 border-t border-zinc-900/60 py-16 md:grid-cols-2 md:py-24">
          <div className="hud-card space-y-6 rounded-3xl p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">What you can expect</h2>
            <ul className="space-y-5">
              {EXPECT.map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson/10 text-volcanoCrimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <path d="M5 12l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-semibold">{title}</span>
                    <span className="block text-sm text-zinc-400">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-[#24113F] p-8 text-white">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00D4C4]/25 blur-3xl" />
            <div className="relative space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight">What we need from you</h2>
              <ul className="space-y-4">
                {NEED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D4C4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
