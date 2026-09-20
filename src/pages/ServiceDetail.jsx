import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import BookingModal from '../components/BookingModal.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { allServices, findService } from '../data/serviceCatalog.js'

const STEPS = [
  ['Discover', 'We learn your goal, users and constraints.'],
  ['Design', 'We plan the approach and agree what success looks like.'],
  ['Build', 'We deliver in short cycles you can review.'],
  ['Support', 'We launch, monitor and keep improving.'],
]

const SECTIONS = [
  ['overview', 'Overview'],
  ['deliverables', 'What you get'],
  ['scenarios', 'Where it helps'],
  ['stack', 'Tools'],
  ['process', 'How it works'],
]

const arrow = 'M5 12h14M13 6l6 6-6 6'

function useSectionSpy(ids, key) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return active
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = findService(slug)
  const [bookingOpen, setBookingOpen] = useState(false)
  const active = useSectionSpy(SECTIONS.map(([id]) => id), slug)
  usePageTitle(service ? `${service.name} — Infortia` : 'Services — Infortia', service ? `${service.name}: ${service.tagline} ${service.intro}` : undefined)

  if (!service) return <Navigate to="/services" replace />

  const index = allServices.findIndex((s) => s.slug === service.slug)
  const prev = allServices[(index - 1 + allServices.length) % allServices.length]
  const next = allServices[(index + 1) % allServices.length]
  const number = String(index + 1).padStart(2, '0')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pt-36">
        {/* Hero: oversized index number behind the title */}
        <header className="relative overflow-hidden pb-12 md:pb-16">
          <span
            className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-black leading-none tracking-tighter text-transparent sm:text-[14rem] md:text-[18rem]"
            style={{ WebkitTextStroke: '2px rgba(109,40,217,0.18)' }}
            aria-hidden="true"
          >
            {number}
          </span>
          <div className="relative max-w-3xl space-y-6">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              <Link to="/services" className="hover:text-volcanoCrimson">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="rounded-full bg-[#F3EEFA] px-3 py-1 text-volcanoCrimson">{service.category}</span>
            </nav>
            <h1 className="text-5xl font-black leading-[0.98] tracking-tighter sm:text-6xl md:text-7xl">
              {service.name}
              <span className="text-volcanoCrimson">.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">{service.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => setBookingOpen(true)}
                className="neon-btn inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-bold"
              >
                Start a conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d={arrow} /></svg>
              </button>
              <Link to="/services" className="text-sm font-semibold text-volcanoCrimson hover:underline">
                Browse all services
              </Link>
            </div>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
          {/* Sticky section rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">On this page</p>
              <ul className="space-y-1 border-l border-[#24113F]/10">
                {SECTIONS.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`-ml-px block border-l-2 py-2 pl-4 text-sm font-medium transition-all ${
                        active === id ? 'border-volcanoCrimson text-volcanoCrimson' : 'border-transparent text-zinc-400 hover:text-volcanoWhite'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full rounded-2xl border border-volcanoCrimson/25 bg-[#F3EEFA] px-4 py-3 text-left text-sm font-semibold text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white"
              >
                Talk to us about {service.name} →
              </button>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 md:space-y-28">
            {/* Overview + pull quote */}
            <section id="overview" className="scroll-mt-28 space-y-10">
              <p className="text-2xl font-semibold leading-relaxed text-volcanoWhite sm:text-3xl">{service.intro}</p>
              <blockquote className="relative rounded-3xl bg-[#F3EEFA] py-8 pl-8 pr-6 sm:pl-10">
                <span className="absolute inset-y-6 left-0 w-1.5 rounded-full bg-gradient-to-b from-[#6D28D9] to-[#00D4C4]" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">What makes our approach different</p>
                <p className="mt-3 text-lg font-medium leading-relaxed text-volcanoWhite sm:text-xl">{service.different}</p>
              </blockquote>
            </section>

            {/* Deliverables as numbered rows */}
            <section id="deliverables" className="scroll-mt-28 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">What you get</h2>
              <ol className="border-t border-[#24113F]/10">
                {service.offers.map((offer, i) => (
                  <Reveal as="li" key={offer} style={{ transitionDelay: `${i * 60}ms` }} className="group flex items-center gap-6 border-b border-[#24113F]/10 px-2 py-6 transition-colors duration-300 hover:bg-[#F3EEFA]/70 sm:gap-10 sm:px-4">
                    <span
                      className="w-14 shrink-0 text-5xl font-black leading-none text-transparent transition-all duration-300 group-hover:text-volcanoCrimson sm:w-20 sm:text-6xl"
                      style={{ WebkitTextStroke: '1.5px rgba(109,40,217,0.55)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="flex-1 text-base font-medium leading-relaxed text-volcanoWhite sm:text-lg">{offer}</p>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden h-5 w-5 shrink-0 -translate-x-2 text-volcanoCrimson opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block" aria-hidden="true">
                      <path d={arrow} />
                    </svg>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* Scenarios: staggered cards */}
            <section id="scenarios" className="scroll-mt-28 space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Where it helps</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {service.useCases.map((u, i) => (
                  <Reveal
                    key={u}
                    style={{ transitionDelay: `${i * 90}ms` }}
                    className={`hud-card flex min-h-[10rem] flex-col justify-between gap-6 rounded-3xl p-6 hover:-translate-y-1 ${i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''}`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-volcanoCrimson">Scenario {String.fromCharCode(65 + i)}</span>
                    <p className="text-lg font-semibold leading-snug text-volcanoWhite">{u}</p>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Tools band */}
            <section id="stack" className="scroll-mt-28">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-10 text-white sm:px-10 md:py-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00D4C4]/25 blur-3xl" />
                <div className="relative grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Tools we may use</h2>
                    <p className="text-sm text-white/70">Language agnostic: we choose what fits your project, not the other way round.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {service.tools.map((t) => (
                      <span key={t} className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#00D4C4] hover:bg-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Process: connected steps */}
            <section id="process" className="scroll-mt-28 space-y-10">
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">How it works</h2>
              <ol className="relative grid gap-8 md:grid-cols-4 md:gap-4">
                <span className="absolute left-[1.05rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[#6D28D9] to-[#00D4C4] opacity-40 max-md:block md:left-3 md:top-[1.05rem] md:h-px md:w-[calc(100%-1.5rem)] md:bg-gradient-to-r" aria-hidden="true" />
                {STEPS.map(([title, body], i) => (
                  <li key={title} className="relative flex gap-4 md:flex-col md:gap-5">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-volcanoCrimson bg-white text-sm font-bold text-volcanoCrimson">{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        {/* Previous / next service */}
        <nav aria-label="More services" className="mt-20 grid gap-4 border-t border-zinc-900/60 pt-12 sm:grid-cols-2 md:mt-28">
          {[[prev, 'Previous'], [next, 'Next']].map(([s, dir]) => (
            <Link
              key={dir}
              to={`/services/${s.slug}`}
              className={`hud-card group flex flex-col gap-2 rounded-3xl p-7 hover:-translate-y-1 ${dir === 'Next' ? 'sm:items-end sm:text-right' : ''}`}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{dir} service</span>
              <span className="text-2xl font-extrabold tracking-tight transition-colors group-hover:text-volcanoCrimson">{s.name}</span>
              <span className="text-sm text-zinc-400">{s.category}</span>
            </Link>
          ))}
        </nav>
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <SiteFooter />
    </div>
  )
}
