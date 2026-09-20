import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import ContactSection from '../components/ContactSection.jsx'
import BookingModal from '../components/BookingModal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { services, serviceIcons, stack, projects, industries, industryIcons } from '../data/industryData.js'

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
  usePageTitle('Industries We Build For — INFOLCON')
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.key}
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
                className="hud-card group flex scroll-mt-32 flex-col rounded-2xl p-6 hover:-translate-y-1"
                id={ind.key}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EEFA] text-volcanoCrimson transition-colors duration-300 group-hover:bg-volcanoCrimson group-hover:text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: industryIcons[ind.key] }}
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold text-volcanoWhite">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{ind.blurb}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-zinc-900/60 pt-5">
                  {ind.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-volcanoWhite">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson/10 text-volcanoCrimson">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden="true">
                          <path d="M5 12l4.5 4.5L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="mt-6 inline-flex items-center gap-1 self-start text-sm font-semibold text-volcanoCrimson"
                >
                  Talk to us
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </Reveal>
            ))}
          </div>
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

        {/* Stack */}
        <section id="stack" className="space-y-10 border-t border-zinc-900/60 py-16 md:py-24">
          <SectionHeading eyebrow="Technology" title="Tools we trust" />
          <Reveal className="flex flex-wrap justify-center gap-3">
            {stack.map((tool) => (
              <span
                key={tool}
                className="hud-card rounded-full px-6 py-3 text-sm font-semibold text-volcanoWhite"
              >
                {tool}
              </span>
            ))}
          </Reveal>
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

        <ContactSection onBook={() => setBookingOpen(true)} />
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <SiteFooter />
    </div>
  )
}
