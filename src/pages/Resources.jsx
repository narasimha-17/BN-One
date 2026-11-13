import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import BookingModal from '../components/BookingModal.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import ResourceSection from '../components/ResourceSection.jsx'
import ResourceKnow from '../components/ResourceKnow.jsx'
import ResourceLearn from '../components/ResourceLearn.jsx'
import ResourceUse from '../components/ResourceUse.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { pillars } from '../data/resources.js'

export default function Resources() {
  usePageTitle('Resources — Agentosys')
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-32 sm:px-6 md:pt-44">
        {/* Hero */}
        <section className="relative">
          <div className="lead-glow pointer-events-none absolute -top-24 left-1/2 h-72 w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-[#6D28D9]/15 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl space-y-5 text-center">
            <p className="lead-rise text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Resources</p>
            <h1 className="lead-rise text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl" style={{ animationDelay: '100ms' }}>
              What we know, what you can learn, and how to <span className="neon-text">put it to work.</span>
            </h1>
            <p className="lead-rise mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg" style={{ animationDelay: '200ms' }}>
              Guides, checklists and explainers from our team, plus a clear way to start with our products and services.
              Use them on your own, or bring them to a call with us.
            </p>
          </div>

          <ul className="relative mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <li key={p.id} className="lead-rise" style={{ animationDelay: `${320 + i * 90}ms` }}>
                <Link
                  to={`#${p.id}`}
                  className="hud-card group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-3xl p-6 hover:-translate-y-1 sm:p-7"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#6D28D9] via-[#4FB3E8] to-[#00D4C4] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="space-y-3">
                    <span className="text-sm font-black tabular-nums text-volcanoCrimson/50">0{i + 1}</span>
                    <h2 className="text-xl font-extrabold tracking-tight">{p.question}</h2>
                    <p className="text-sm leading-relaxed text-zinc-400">{p.blurb}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-volcanoCrimson">
                    {p.cta}
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M6 13l6 6 6-6" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ResourceSection
          id="know"
          n="01"
          eyebrow="What we know"
          title="Experience from building for real businesses."
          intro="We are a small, hands-on team working across AI, software, automation, cloud and security. Here is where that experience sits, and what we have written down so far."
        >
          <ResourceKnow />
        </ResourceSection>

        <ResourceSection
          id="learn"
          n="02"
          eyebrow="What you can learn"
          title="Learn it before you buy it."
          intro="Follow a path, work through a checklist, or look up a term. Everything here is free, and nothing needs an account."
          tone="tint"
        >
          <ResourceLearn />
        </ResourceSection>

        <ResourceSection
          id="use"
          n="03"
          eyebrow="How to use what we offer"
          title="Find the right service, then start."
          intro="Tell us what you are trying to do, see where we can help, and find the simplest way to begin."
          tone="dark"
        >
          <ResourceUse onBook={() => setBookingOpen(true)} />
        </ResourceSection>

        <NewsletterSignup />
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <SiteFooter />
    </div>
  )
}
