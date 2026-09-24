import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import IndustryExplorer from '../components/IndustryExplorer.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import BookingModal from '../components/BookingModal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { services, serviceIcons, techGroups, projects, industries } from '../data/industryData.js'

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">{title}</h2>
      {body && <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{body}</p>}
    </div>
  )
}

export default function Industry() {
  usePageTitle('Industries We Build For — Agentosys')
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="mx-auto max-w-3xl space-y-6 pb-16 pt-32 text-center md:pb-24 md:pt-44">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Industries</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Software built for how <span className="neon-text">your industry</span> works.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Every sector runs on different constraints: compliance, latency, trust. We tailor the architecture to
            your industry, not the other way around.
          </p>
          <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
            <button
              onClick={() => setBookingOpen(true)}
              className="neon-btn rounded-full px-8 py-4 text-sm font-bold"
            >
              Talk to us
            </button>
            <a
              href="#industries"
              className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-volcanoWhite transition-all hover:border-volcanoCrimson/50 hover:text-volcanoCrimson"
            >
              Explore industries
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {industries.map((ind) => (
              <a
                key={ind.key}
                href={`#${ind.key}`}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-zinc-400 transition-colors hover:border-volcanoCrimson/40 hover:text-volcanoCrimson"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="space-y-12 border-t border-zinc-900/60 py-16 md:py-24">
          <SectionHeading
            eyebrow="Sectors"
            title="Industries we build for"
            body="From clinical portals to live fleet tracking, here is where we do our best work."
          />
          <IndustryExplorer onTalk={() => setBookingOpen(true)} />
        </section>

        {/* Capabilities */}
        <section id="services" className="space-y-12 border-t border-zinc-900/60 py-16 md:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we can build for you"
            body="The same engineering toolkit sits behind every industry."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {services.map((name) => (
              <Reveal
                key={name}
                className="hud-card group flex items-center gap-3 rounded-2xl p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3EEFA] text-volcanoCrimson transition-colors duration-300 group-hover:bg-volcanoCrimson group-hover:text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: serviceIcons[name] }}
                  />
                </span>
                <span className="text-sm font-semibold leading-snug text-volcanoWhite">{name}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section id="stack" className="border-t border-zinc-900/60 py-16 md:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Technology</p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-volcanoWhite sm:text-4xl">
                Language agnostic by design.
              </h2>
              <p className="text-base leading-relaxed text-zinc-400">
                We don&apos;t start with a favourite tool. We start with your problem, your team and your
                constraints, then choose the language and stack that fit. If it&apos;s the right tool for the job,
                we build with it.
              </p>
              <ul className="space-y-3">
                {[
                  ['Right tool, not our favourite', 'Every choice is made for your outcome, not our habits.'],
                  ['Fits your existing stack', 'We work with what you already run instead of forcing a rewrite.'],
                  ['No lock-in', 'Clean code and clear documentation, so you can take it anywhere.'],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson/10 text-volcanoCrimson">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                        <path d="M5 12l4.5 4.5L19 7" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-volcanoWhite">{title}</span>
                      <span className="block text-sm text-zinc-400">{body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Reveal className="hud-card space-y-6 rounded-3xl p-6 sm:p-8">
              {techGroups.map((group) => (
                <div key={group.label} className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-black/10 bg-[#F3EEFA] px-4 py-2 text-sm font-medium text-volcanoWhite transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-volcanoCrimson hover:text-white"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="border-t border-zinc-900/60 pt-5 text-xs text-zinc-500">
                Don&apos;t see your stack? We&apos;ll likely work with it. Just ask.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Selected work */}
        <section id="projects" className="space-y-12 border-t border-zinc-900/60 py-16 md:py-24">
          <SectionHeading eyebrow="Selected work" title="Projects across industries" />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.t} className="hud-card group flex flex-col justify-between gap-10 rounded-2xl p-7">
                <span className="w-fit rounded-full bg-[#F3EEFA] px-3 py-1 text-[11px] font-semibold text-volcanoCrimson">
                  {project.s}
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-volcanoWhite">{project.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <SiteFooter />
    </div>
  )
}
