import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ServiceCatalog from '../components/ServiceCatalog.jsx'
import ServiceModels from '../components/ServiceModels.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { submitEnquiry } from '../lib/enquiry.js'
import { staticDatabase, collegeDatabase, collegeDomains } from '../data/servicesData.js'

const ICON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-5 w-5',
  'aria-hidden': true,
}

const TIERS = [
  {
    id: 'business',
    label: 'Business Solutions',
    title: 'Business Solutions',
    body: 'Tailored commercial applications, administrative automation tools, conversion flows, and secure data schemas engineered to scale with your business.',
    icon: (
      <svg {...ICON}>
        <path d="M3 8h18v11H3zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    id: 'community',
    label: 'Community Systems',
    title: 'Community Systems',
    body: 'Real-time public panels, information networks, and accessible data feeds built securely to serve regional communities.',
    icon: (
      <svg {...ICON}>
        <path d="M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 20v-1a4 4 0 0 0-3-3.87M15 5.13a3 3 0 0 1 0 5.74" />
      </svg>
    ),
  },
  {
    id: 'college',
    label: 'College Projects',
    title: 'College Projects',
    body: 'Review-ready project models and source code with validation materials, designed for university and research tracks.',
    icon: (
      <svg {...ICON}>
        <path d="M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.5" />
      </svg>
    ),
  },
]

const LAUNCH_TARGET_KEY = 'researchLaunchTarget'

// Persist the target the first time it's computed, so the countdown actually
// runs down across visits instead of resetting to "N days from now" every load.
function getLaunchTarget(days) {
  const stored = Number(localStorage.getItem(LAUNCH_TARGET_KEY))
  if (stored) return stored
  const target = Date.now() + days * 24 * 60 * 60 * 1000
  localStorage.setItem(LAUNCH_TARGET_KEY, String(target))
  return target
}

function useCountdown(days = 65) {
  const [target] = useState(() => getLaunchTarget(days))
  const [remaining, setRemaining] = useState({ d: '--', h: '--', m: '--', s: '--', done: false })

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setRemaining({ d: '00', h: '00', m: '00', s: '00', done: true })
        return
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((diff % (1000 * 60)) / 1000)
      setRemaining({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
        done: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return remaining
}

const RESEARCH_POINTS = [
  'Formatting verification',
  'Plagiarism audit',
  'Review panel simulation',
  'Data analytics verification',
]

export default function Services() {
  usePageTitle('Services — Agentosys')
  const [activeTier, setActiveTier] = useState('business')
  const [activeDomain, setActiveDomain] = useState('fullstack')
  const [email, setEmail] = useState('')
  const [queueStatus, setQueueStatus] = useState(null) // null | 'success' | 'error'
  const countdown = useCountdown(45)

  const tier = TIERS.find((t) => t.id === activeTier)
  const dataset = activeTier === 'college' ? collegeDatabase[activeDomain] : staticDatabase[activeTier]

  const selectTier = (id) => {
    setActiveTier(id)
    if (id === 'college') setActiveDomain('fullstack')
  }

  const submitQueue = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setQueueStatus('error')
      return
    }
    const subject = encodeURIComponent('Early access: research paper publishing')
    const body = encodeURIComponent(`Please add me to the early-access queue: ${email}`)
    const result = await submitEnquiry('Research publishing early access', { email }, `mailto:bnst17042006@gmail.com?subject=${subject}&body=${body}`)
    if (result.ok) {
      setQueueStatus('success')
      setEmail('')
    } else {
      setQueueStatus('error')
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="mx-auto max-w-3xl space-y-5 pb-12 pt-32 text-center md:pb-16 md:pt-44">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Services</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Ready-to-launch solutions for <span className="neon-text">every stage.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Pick a track to browse our project library, from commercial platforms to community tools and
            college-ready builds.
          </p>
        </section>

        <ServiceCatalog />

        {/* Tier tabs */}
        <section className="space-y-10" aria-label="Solution tracks">
          <div role="tablist" aria-label="Solution tracks" className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {TIERS.map((t) => {
              const active = t.id === activeTier
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectTier(t.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'border-volcanoCrimson bg-volcanoCrimson text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.7)]'
                      : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
                  }`}
                >
                  {t.icon}
                  {t.label}
                </button>
              )
            })}
          </div>

          <div key={activeTier} className="word-in hud-card mx-auto max-w-3xl space-y-3 rounded-2xl p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-volcanoWhite">{tier.title}</h2>
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{tier.body}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">
              {dataset.length} {dataset.length === 1 ? 'solution' : 'solutions'} available
            </p>
          </div>

          {activeTier === 'college' && (
            <div className="space-y-3">
              <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Choose a discipline
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {collegeDomains.map((d) => {
                  const active = activeDomain === d.id
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDomain(d.id)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'border-volcanoCrimson bg-[#F3EEFA] font-semibold text-volcanoCrimson'
                          : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
                      }`}
                    >
                      {d.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <div
            key={activeTier + activeDomain}
            className="word-in grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {dataset.map((proj) => (
              <ProjectCard key={proj.url} proj={proj} tier={tier.title} icon={tier.icon} />
            ))}
          </div>
        </section>

        <ServiceModels />

        {/* Research paper publishing */}
        <section id="research" className="py-16 md:py-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-12 sm:px-10 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#6D28D9]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#00D4C4]/25 blur-3xl" />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1200 500"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path d="M-50 400C260 280 500 500 800 380S1100 240 1260 320" stroke="white" strokeOpacity="0.07" strokeWidth="1.2" />
              <path d="M-50 460C270 350 520 560 820 440S1120 310 1260 380" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
            </svg>

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Coming soon
                </span>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Research paper publishing support.
                </h2>
                <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/70 md:text-base lg:mx-0">
                  We are building a guided track that takes engineering candidates from source records to
                  paper-ready documentation, so your work is prepared for peer-reviewed repositories and
                  survives panel review.
                </p>
                <ul className="mx-auto grid max-w-xl gap-3 text-left sm:grid-cols-2 lg:mx-0">
                  {RESEARCH_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-white">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                          <path d="M5 12l4.5 4.5L19 7" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-widest text-white/60">Launch countdown</span>
                  <span className="font-semibold text-white">{countdown.done ? 'Live now' : 'In progress'}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center sm:gap-3">
                  {[
                    [countdown.d, 'Days'],
                    [countdown.h, 'Hours'],
                    [countdown.m, 'Mins'],
                    [countdown.s, 'Secs'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl bg-white/10 py-4">
                      <div className="text-2xl font-black text-white sm:text-3xl">{value}</div>
                      <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/60">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-white">Get early access</p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@university.edu"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                    />
                    <button
                      onClick={submitQueue}
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#24113F] transition-colors hover:bg-[#F3EEFA]"
                    >
                      Join the queue
                    </button>
                  </div>
                  <p
                    className={`text-xs ${
                      queueStatus === 'success' ? 'text-white' : queueStatus === 'error' ? 'text-[#f0b8b8]' : 'text-white/50'
                    }`}
                  >
                    {queueStatus === 'success'
                      ? 'Thanks. Your priority slot is reserved.'
                      : queueStatus === 'error'
                        ? 'Please enter a valid email address.'
                        : "We'll only use your email to tell you when this launches."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
