import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Values come from the company tagline: Innovation. Fast & Adaptive. Leadership. Connectivity. Operations.
const VALUES = [
  ['Innovation', 'We turn new ideas into working software that people can actually use.'],
  ['Fast & Adaptive', 'Short cycles and honest updates, so we can change direction when your needs do.'],
  ['Leadership', 'Clear technical direction from the first conversation to launch day.'],
  ['Connectivity', 'We build systems that connect your tools, your teams and your customers.'],
  ['Operations', 'Software is only useful if it keeps running. We plan for life after go-live.'],
]

export default function About() {
  usePageTitle('About — Agentosys')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-28 sm:px-6 md:pt-36">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-16 sm:px-12 md:py-24">
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#6D28D9]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#00D4C4]/25 blur-3xl" />
          <div className="relative max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">About Agentosys</p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl">
              Software built with <span className="neon-text-light">care, not committees.</span>
            </h1>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              We are a small, hands-on software team in Hyderabad. We help businesses turn ideas into products that
              are fast, reliable and easy to use.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Our story</p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl">
              Why we build the way we do.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-[1.8] text-zinc-400">
            <p>
              Too many software projects fail for the same reasons: unclear goals, layers of people between the client
              and the builders, and tools chosen because they were fashionable rather than because they fit.
            </p>
            <p>
              Agentosys was set up to do it differently. Our founders work directly on every engagement, so the person
              you talk to is the person who builds and reviews your product. We stay language agnostic, choosing the
              right tool for your problem instead of forcing your problem into our favourite tool.
            </p>
            <p>
              We work across industries, from healthcare and finance to logistics and education, and we build our own
              products too. That gives us a practical view of what it takes to ship software and keep it healthy.
            </p>
          </div>
        </section>

        {/* Mission and vision */}
        <section className="grid gap-5 border-t border-zinc-900/60 py-16 md:grid-cols-2 md:py-24">
          {[
            ['Our mission', 'To make well-built software accessible to every business that needs it, with honest communication and dependable delivery.'],
            ['Our vision', 'A future where technology quietly does the heavy lifting, so people can focus on the work that matters to them.'],
          ].map(([title, body]) => (
            <Reveal key={title} className="hud-card rounded-3xl p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{title}</p>
              <p className="mt-4 text-xl font-semibold leading-snug text-volcanoWhite sm:text-2xl">{body}</p>
            </Reveal>
          ))}
        </section>

        {/* Values */}
        <section className="space-y-12 border-t border-zinc-900/60 py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">What we stand for</p>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Five values, one name.</h2>
            <p className="text-sm text-zinc-400 md:text-base">
              Innovation. Fast &amp; Adaptive. Leadership. Connectivity. Operations.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map(([title, body], i) => (
              <Reveal key={title} style={{ transitionDelay: `${i * 70}ms` }} className="hud-card rounded-2xl p-6 hover:-translate-y-1">
                <span className="text-xs font-semibold tracking-widest text-volcanoCrimson">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="grid gap-5 border-t border-zinc-900/60 py-16 md:grid-cols-3 md:py-24">
          {[
            ['Meet the team', 'The people who build and review every project.', '/leadership'],
            ['See how we work', 'Our process from first call to launch and support.', '/how-we-work'],
            ['Join us', 'We are always glad to meet talented people.', '/careers'],
          ].map(([title, body, to]) => (
            <Link key={title} to={to} className="hud-card group flex flex-col justify-between gap-8 rounded-2xl p-7 hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-volcanoCrimson">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
              </div>
              <span className="text-sm font-semibold text-volcanoCrimson">
                Learn more <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
