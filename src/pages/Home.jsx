import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Preloader from '../components/Preloader.jsx'
import FaqItem from '../components/FaqItem.jsx'
import BookingModal from '../components/BookingModal.jsx'
import BlueprintModal from '../components/BlueprintModal.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { features, testimonials, disciplines, faqs, services } from '../data/homeData.js'

export default function Home() {
  usePageTitle('BN ONE — Next-Gen Digital Architectures')
  const [bookingOpen, setBookingOpen] = useState(false)
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  return (
    <div className="relative bg-volcanoBlack text-volcanoWhite antialiased font-sans selection:bg-volcanoCrimson/30 selection:text-volcanoPeach min-h-[100dvh] overflow-x-hidden">
      <Preloader />

      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-volcanoCrimson/10 to-volcanoOrange/5 blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-30%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-volcanoOrange/5 to-transparent blur-[160px] pointer-events-none z-0" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-32 md:pt-48">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-24 max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-volcanoCrimson/20 bg-volcanoCrimson/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volcanoCrimson opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-volcanoCrimson" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-volcanoPeach">
                Next-Gen Interface Labs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
              Your Business <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-volcanoCrimson to-volcanoOrange bg-clip-text text-transparent">
                Deserves Elite
              </span>
              <br />
              Architecture.
            </h1>

            <p className="text-zinc-400 max-w-lg leading-relaxed text-base md:text-lg">
              We completely ditch identical, uninspired structural templates. We produce
              lightning-fast interactive storefronts, applications, and portfolios designed to
              hook engagement and never let go.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-volcanoWhite text-volcanoBlack rounded-full font-bold text-sm hover:bg-volcanoCrimson hover:text-white transition-all"
              >
                INITIATE PROJECT
              </button>
              <button
                onClick={() => setBlueprintOpen(true)}
                className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-zinc-400 rounded-full font-bold text-sm hover:border-volcanoOrange transition-all"
              >
                VIEW BLUEPRINT
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-[#1a1a1a] p-1.5 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="bg-[#101010] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 space-y-6">
                <div className="bg-[#181818] p-6 sm:p-8 rounded-2xl border border-white/5 flex items-center justify-center">
                  <img src="/logo.png" alt="BNS ONE" className="h-12 sm:h-16 w-auto object-contain" />
                </div>
                <div className="bg-gradient-to-br from-[#1c1212] to-black p-5 sm:p-6 rounded-2xl border border-volcanoCrimson/20">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                    <span className="text-volcanoCrimson">From Vision to Reality,</span>
                    <br />
                    We Build Digital...
                  </h3>
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.n}
                className="group border border-zinc-900 bg-[#141414]/40 p-6 md:p-8 rounded-2xl hover:border-volcanoCrimson/40 hover:bg-white/[0.01] transition-all duration-300 flex flex-col justify-between min-h-[200px] md:min-h-[220px]"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-sm font-bold border border-zinc-800 text-zinc-400 group-hover:text-volcanoOrange group-hover:border-volcanoOrange/30 transition-colors">
                  {f.n}
                </div>
                <div className="space-y-2 pt-6 md:pt-8">
                  <h3 className="text-base font-bold text-volcanoWhite">{f.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 border-t border-zinc-900">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.tag} className="space-y-3">
                <div className={`text-xs font-mono ${t.color}`}>{t.tag}</div>
                <p className="text-sm text-zinc-300 leading-relaxed italic">{t.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 space-y-12 md:space-y-16">
          <div className="max-w-xl space-y-4">
            <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
              // Scaled Access
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite">
              Fixed Architecture Tiering.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <div className="border border-zinc-900 bg-volcanoBlack/40 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:border-zinc-800 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider uppercase text-zinc-500">
                  Core Footprint
                </div>
                <h3 className="text-xl font-bold text-volcanoWhite">Starter</h3>
                <div className="text-3xl font-black text-volcanoWhite tracking-tight">₹2,999</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Perfect for essential high-impact local presence nodes.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-zinc-400 border-t border-zinc-900 pt-6">
                <li className="flex items-center gap-2">🔥 1 Bespoke Production Page</li>
                <li className="flex items-center gap-2">🔥 Full Mobile Adaptive Scaling</li>
                <li className="flex items-center gap-2">🔥 Standard Direct Intake Form</li>
              </ul>
              <a
                href="#contact"
                className="w-full inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 border border-zinc-800 hover:bg-zinc-800 transition-colors mt-auto"
              >
                Select Framework
              </a>
            </div>

            <div className="border-2 border-volcanoCrimson bg-gradient-to-b from-volcanoBlack to-zinc-900/20 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-8 relative shadow-2xl shadow-volcanoCrimson/5">
              <span className="absolute -top-3 right-6 rounded-full bg-volcanoCrimson px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-volcanoWhite">
                Recommended
              </span>
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider uppercase text-volcanoOrange">
                  Growth Catalyst
                </div>
                <h3 className="text-xl font-bold text-volcanoWhite">Business</h3>
                <div className="text-3xl font-black text-volcanoWhite tracking-tight">₹6,999</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered for full-scale marketplace authority indexing.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 border-t border-zinc-900 pt-6">
                <li className="flex items-center gap-2 text-volcanoOrange">
                  🔥 5 Articulated Custom Core Pages
                </li>
                <li className="flex items-center gap-2">🔥 Built-In Deep Metadata Mapping</li>
                <li className="flex items-center gap-2">🔥 Consolidated Analytics Routing</li>
              </ul>
              <a
                href="#contact"
                className="w-full inline-flex h-10 items-center justify-center rounded-xl bg-volcanoCrimson text-xs font-bold uppercase tracking-wider text-volcanoWhite shadow hover:bg-volcanoCrimson/80 transition-colors mt-auto"
              >
                Launch Deployment
              </a>
            </div>

            <div className="border border-zinc-900 bg-volcanoBlack/40 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:border-zinc-800 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider uppercase text-zinc-500">
                  Unrestricted Core
                </div>
                <h3 className="text-xl font-bold text-volcanoWhite">Premium</h3>
                <div className="text-3xl font-black text-volcanoWhite tracking-tight">Custom</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Bespoke layout builds with complex multi-service wiring.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-zinc-400 border-t border-zinc-900 pt-6">
                <li className="flex items-center gap-2">🔥 Unlimited Application Pages</li>
                <li className="flex items-center gap-2">🔥 Bespoke Interaction Engineering</li>
                <li className="flex items-center gap-2">🔥 Dedicated 24-Hour Developer SLA</li>
              </ul>
              <a
                href="#contact"
                className="w-full inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 border border-zinc-800 hover:bg-zinc-800 transition-colors mt-auto"
              >
                Contact Strategy Advisor
              </a>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="py-20 md:py-32 border-t border-zinc-900/60 space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
                // Core Directives
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite leading-tight">
                We Engineer Pure Operational Authority.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                We don't just patch layout visuals together. BNS ONE constructs high-performance
                custom digital systems designed to cleanly capture market share, isolate
                operational latency, and provide uncompromised accessibility metrics.
              </p>
              <div className="pt-4 hidden lg:block">
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  System Runtime status
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-400">Continuous Integration Active</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {disciplines.map((d) => (
                <div
                  key={d.tag}
                  className={`group border border-white/5 bg-[#141414]/40 p-6 sm:p-8 rounded-2xl ${d.hoverBorder} transition-all duration-300 space-y-4`}
                >
                  <div className="flex items-center justify-between font-mono text-zinc-500">
                    <span className="text-xs tracking-wider">// {d.tag}</span>
                    <span className={`${d.color} font-bold`}>{d.label}</span>
                  </div>
                  <h3 className={`text-xl font-black text-volcanoWhite ${d.hoverText} transition-colors`}>
                    {d.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{d.body}</p>
                  <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                    {d.chips.map((c) => (
                      <span key={c} className="bg-volcanoBlack px-2.5 py-1 rounded border border-zinc-900">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 max-w-3xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
              // Strategic Alignment
            </div>
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite">
              Operational Protocol Intel
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 md:py-32 border-t border-zinc-900/60 space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
                // Targeted Operations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-volcanoWhite">
                Operational Verticals.
              </h2>
            </div>
            <p className="text-xs text-zinc-500 max-w-xs md:text-right leading-relaxed font-mono break-all">
              [SYSTEM_CAPABILITIES // PRODUCTION_READY_MODUELS]
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.tag}
                className={`group border border-white/5 bg-[#141414]/40 p-6 sm:p-8 rounded-3xl ${s.hoverBorder} hover:bg-white/[0.01] transition-all duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[320px]`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-zinc-500">
                    <span className="text-[10px] tracking-wider">// {s.tag}</span>
                    <span className={`${s.color} font-bold font-mono text-[10px] sm:text-xs`}>
                      {s.label}
                    </span>
                  </div>
                  <h3 className={`text-xl font-black text-volcanoWhite ${s.hoverText} transition-colors`}>
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.body}</p>
                </div>
                <div className="pt-6 font-mono text-[9px] sm:text-[10px] text-zinc-500 border-t border-zinc-900/50 flex gap-4 mt-auto">
                  {s.bullets.map((b) => (
                    <span key={b}>• {b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSignup />

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20">
          <div className="rounded-[2rem] md:rounded-3xl border border-zinc-800 bg-[#141414]/80 p-6 sm:p-8 md:p-16 text-center max-w-4xl mx-auto space-y-10 md:space-y-12 relative overflow-hidden shadow-[0_40px_100px_-30px_rgba(230,57,70,0.15)]">
            <div className="absolute -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 w-64 h-64 sm:w-96 sm:h-96 bg-volcanoCrimson/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-volcanoWhite">
                Let's Construct Something Memorable.
              </h2>
              <p className="text-zinc-400 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                Partner with us to create premium interface platforms tailored precisely to secure
                absolute authority within your local industry sector.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <a
                href="tel:+919381472064"
                className="p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-volcanoBlack/40 hover:border-volcanoCrimson/50 transition-all group flex flex-col items-center"
              >
                <div className="text-[10px] font-mono text-volcanoCrimson uppercase tracking-widest mb-2">
                  Direct Line
                </div>
                <div className="text-xs font-bold text-volcanoWhite group-hover:text-volcanoCrimson transition-colors">
                  +91 9381472064
                </div>
              </a>
              <a
                href="mailto:bnst17042006@gmail.com"
                className="p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-volcanoBlack/40 hover:border-volcanoOrange/50 transition-all group flex flex-col items-center"
              >
                <div className="text-[10px] font-mono text-volcanoOrange uppercase tracking-widest mb-2">
                  Secure Endpoint
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-volcanoWhite group-hover:text-volcanoOrange transition-colors break-all">
                  bnst17042006@gmail.com
                </div>
              </a>
              <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-volcanoBlack/40 hover:border-volcanoPeach/50 transition-all group flex flex-col items-center">
                <div className="text-[10px] font-mono text-volcanoPeach uppercase tracking-widest mb-2">
                  Base Station
                </div>
                <div className="text-xs font-bold text-volcanoWhite">Hyderabad, India</div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex w-full sm:w-auto h-14 sm:h-12 items-center justify-center rounded-full bg-volcanoWhite px-6 sm:px-10 text-xs font-bold uppercase tracking-widest text-volcanoBlack shadow-lg hover:bg-volcanoCrimson hover:text-volcanoWhite transition-all transform hover:-translate-y-0.5"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <BlueprintModal open={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      <footer className="border-t border-zinc-900 bg-volcanoBlack relative z-10 mt-10 sm:mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-medium text-zinc-600 tracking-wide text-center sm:text-left">
          <div>&copy; 2026 BNS ONE &bull; One Vision. Infinite Possibilities.</div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-volcanoPeach transition-colors">
              Privacy Paradigm
            </a>
            <a href="#" className="hover:text-volcanoPeach transition-colors">
              Terms of Operations
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
