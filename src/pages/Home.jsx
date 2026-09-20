import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import ProductLogo from '../components/ProductLogo.jsx'
import Reveal from '../components/Reveal.jsx'
import InAction from '../components/InAction.jsx'
import Typewriter from '../components/Typewriter.jsx'
import PrinciplesSection from '../components/PrinciplesSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import TrustedBrands from '../components/TrustedBrands.jsx'
import RotatingWords from '../components/RotatingWords.jsx'
import StackedCards from '../components/StackedCards.jsx'
import ProductShowcase from '../components/ProductShowcase.jsx'
import Preloader from '../components/Preloader.jsx'
import BookingModal from '../components/BookingModal.jsx'
import BlueprintModal from '../components/BlueprintModal.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { features, testimonials, disciplines, services } from '../data/homeData.js'
const featuredProducts = [
  {
    name: 'PowerLens',
    tile: 'from-[#F3EEFA]0 to-purple-700',
    initial: 'P',
    category: 'INTELLIGENCE / ANALYTICS',
    accent: 'text-volcanoCrimson',
    body: 'Turn complex operational data into clear decisions with a live command view built around your business.',
    tags: ['Live Insights', 'Signal Mapping', 'Decision Tools'],
  },
  {
    name: 'VIBE',
    tile: 'from-fuchsia-500 to-violet-600',
    initial: 'V',
    category: 'EXPERIENCE / ENGAGEMENT',
    accent: 'text-volcanoCrimson',
    body: 'A high-energy digital experience system for brands that need attention, movement, and measurable connection.',
    tags: ['Brand Systems', 'Interactive UI', 'Conversion Flow'],
  },
  {
    name: 'Code Check',
    tile: 'from-indigo-500 to-blue-600',
    initial: 'C',
    category: 'ENGINEERING / QUALITY',
    accent: 'text-volcanoPeach',
    body: 'Bring confidence to every release with structured code review, performance checks, and practical fixes.',
    tags: ['Code Review', 'Runtime Health', 'Release Ready'],
  },
  {
    name: 'Exam+',
    tile: 'from-cyan-400 to-sky-600',
    initial: 'E',
    category: 'LEARNING / PERFORMANCE',
    accent: 'text-volcanoCrimson',
    body: 'A focused preparation system that turns revision into measurable progress before the exam begins.',
    tags: ['Study Plans', 'Practice Tests', 'Progress Signals'],
  },
]

export default function Home() {
  usePageTitle('Infortia — Next-Gen Digital Architectures')
  const [bookingOpen, setBookingOpen] = useState(false)
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  return (
    <div className="relative text-volcanoWhite antialiased font-sans selection:bg-volcanoCrimson/30 selection:text-volcanoPeach min-h-[100dvh] overflow-x-clip">
      <Preloader />

      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-volcanoCrimson/10 to-volcanoOrange/5 blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-30%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-volcanoOrange/5 to-transparent blur-[160px] pointer-events-none z-0" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-24 md:pt-28">
        {/* Hero */}
        <section className="mx-auto max-w-4xl space-y-7 py-8 text-center md:py-14">
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
            Your Business
            <span className="block min-h-[1.05em]">
              <Typewriter
                phrases={['Deserves Elite', 'Demands Modern', 'Deserves Scalable', 'Deserves Secure']}
                className="neon-text"
                holdMs={2200}
              />
            </span>
            Architecture.
          </h1>
          <p className="text-xl font-semibold text-volcanoWhite sm:text-2xl">
            We build{' '}
            <RotatingWords
              words={['Websites', 'Web Apps', 'AI Systems', 'Digital Platforms']}
              className="text-volcanoOrange"
            />
          </p>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            We completely ditch identical, uninspired structural
              templates. We produce lightning-fast interactive storefronts, applications, and
              portfolios designed to hook engagement and never let go.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
            <button
              onClick={() => setBookingOpen(true)}
              className="neon-btn w-full rounded-full px-8 py-4 text-sm font-bold sm:w-auto"
            >
              INITIATE PROJECT
            </button>
            <button
              onClick={() => setBlueprintOpen(true)}
              className="w-full rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-volcanoWhite transition-all hover:border-volcanoCrimson/50 hover:text-volcanoCrimson sm:w-auto"
            >
              VIEW BLUEPRINT
            </button>
          </div>
        </section>

        <TrustedBrands />
        {/* Products */}
        <section id="products" className="space-y-12 py-20 md:space-y-14 md:py-28">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Products</p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">
              Working Architectures, Ready to Deploy.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              Explore focused systems built for real operational problems, from intelligent
              diagnostics to resilient business infrastructure.
            </p>
          </div>
          <ProductShowcase products={featuredProducts} />
        </section>

        {/* Capabilities Matrix */}
        <section id="features" className="py-20 md:py-32 space-y-12 md:space-y-20">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-6 space-y-4">
              <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
                // Strategic Frameworks
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite">
                Engineered to Displace the Outdated Template Standard.
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm text-zinc-400 max-w-md md:ml-auto leading-relaxed">
                We architect customized frontend ecosystems built strictly for deployment
                longevity, immediate load processing, and unparalleled conversion stability.
              </p>
            </div>
          </div>

          <FeatureGrid features={features} />
        </section>

        <InAction />

        {/* What We Do */}
        <section id="what-we-do" className="pt-16 pb-4 md:pt-24 md:pb-6 border-t border-zinc-900/60 space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
                // Core Directives
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite leading-tight">
                We Engineer Pure Operational Authority.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                We don't just patch layout visuals together. Infortia constructs high-performance
                custom digital systems designed to cleanly capture market share, isolate
                operational latency, and provide uncompromised accessibility metrics.
              </p>
              <div className="pt-4 hidden lg:block">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  System Runtime status
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-400">Continuous Integration Active</span>
                </div>
              </div>
            </div>

            <StackedCards items={disciplines} />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="pt-10 pb-16 md:pt-14 md:pb-24 border-t border-zinc-900/60 space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
                // Targeted Operations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite">
                Operational Verticals.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal
                key={s.tag}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group border border-black/10 hud-card p-6 sm:p-8 rounded-3xl ${s.hoverBorder} hover:bg-[#F3EEFA] transition-all duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[320px] fade-text`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EEFA] text-xs font-bold text-volcanoCrimson">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-volcanoCrimson/25 px-3 py-1 text-[11px] font-semibold text-volcanoCrimson">
                      {s.label.split('_').map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
                    </span>
                  </div>
                  <h3 className={`text-xl font-black text-volcanoWhite ${s.hoverText} transition-colors`}>
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.body}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-900/50 pt-6">
                  {s.bullets.map((b) => (
                    <span key={b} className="rounded-full bg-[#F3EEFA] px-3 py-1 text-xs font-medium text-volcanoCrimson">{b}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="stories" className="space-y-10 border-t border-zinc-900/60 py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Customer stories</p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">
              Teams that build with Infortia
            </h2>
            <Link to="/customers" className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-volcanoCrimson">
              Read all customer stories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.tag}
                className="group relative flex min-h-[20rem] flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-[#F3EEFA] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00D4C4_0%,transparent_50%),linear-gradient(135deg,#6D28D9,#24113F)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative space-y-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#6D28D9]/25 bg-white text-volcanoCrimson transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                      <path d="M4 17.5C4 12 6.5 8.5 11 7l.8 1.7C9.6 9.7 8.6 11 8.4 12.8H11V18H4v-.5zM13 17.5C13 12 15.5 8.5 20 7l.8 1.7c-2.2 1-3.2 2.3-3.4 4.1H20V18h-7v-.5z" />
                    </svg>
                  </span>
                  <blockquote className="text-lg leading-relaxed text-volcanoWhite transition-colors duration-500 group-hover:text-white">
                    {t.quote}
                  </blockquote>
                </div>

                <div className="relative flex items-center justify-between gap-4">
                  <figcaption className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson transition-colors duration-500 group-hover:text-white/80">
                    {t.tag}
                  </figcaption>
                  <Link
                    to="/customers"
                    className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#24113F]/40 px-5 text-sm font-semibold text-volcanoWhite transition-all duration-500 group-hover:border-[#24113F] group-hover:bg-[#24113F] group-hover:text-white"
                  >
                    Read story
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </Link>
                </div>
              </figure>
            ))}
          </div>
        </section>

        <PrinciplesSection />

        <NewsletterSignup />

        <ContactSection onBook={() => setBookingOpen(true)} />
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <BlueprintModal open={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      <SiteFooter />
    </div>
  )
}
