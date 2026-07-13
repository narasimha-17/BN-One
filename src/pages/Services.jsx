import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { staticDatabase, collegeDatabase, collegeDomains } from '../data/servicesData.js'

const TIER_ACCENTS = {
  business: 'border-volcanoCrimson/40 shadow-[0_0_20px_rgba(230,57,70,0.05)]',
  community: 'border-volcanoOrange/40 shadow-[0_0_20px_rgba(255,122,24,0.05)]',
  college: 'border-volcanoPeach/40 shadow-[0_0_20px_rgba(255,212,184,0.05)]',
}

const TIER_INDICATOR_COLOR = {
  business: 'text-volcanoCrimson',
  community: 'text-volcanoOrange',
  college: 'text-volcanoPeach',
}

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

export default function Services() {
  usePageTitle('Capabilities Pipeline — BN ONE')
  const [activeTier, setActiveTier] = useState('')
  const [activeDomain, setActiveDomain] = useState('fullstack')
  const [email, setEmail] = useState('')
  const [queueStatus, setQueueStatus] = useState(null) // null | 'success' | 'error'
  const countdown = useCountdown(45)

  const dataset =
    activeTier === 'college' ? collegeDatabase[activeDomain] : activeTier ? staticDatabase[activeTier] : null

  const selectTier = (tier) => {
    setActiveTier(tier)
    if (tier === 'college') setActiveDomain('fullstack')
  }

  const submitQueue = () => {
    if (email.includes('@') && email.length > 5) {
      setQueueStatus('success')
      setEmail('')
    } else {
      setQueueStatus('error')
    }
  }

  return (
    <div className="relative bg-volcanoBlack text-volcanoWhite antialiased font-sans selection:bg-volcanoCrimson/30 selection:text-volcanoPeach min-h-screen overflow-x-hidden">
      <div className="absolute top-[-10%] left-[-20%] w-[120vw] sm:w-[80vw] h-[120vw] sm:h-[80vw] rounded-full bg-gradient-to-tr from-volcanoCrimson/10 to-volcanoOrange/5 blur-[100px] sm:blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-20%] w-[100vw] sm:w-[60vw] h-[100vw] sm:h-[60vw] rounded-full bg-gradient-to-br from-volcanoOrange/5 to-transparent blur-[100px] sm:blur-[140px] pointer-events-none z-0" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-24 space-y-16 sm:space-y-20">
        <section className="space-y-3 sm:space-y-4 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-volcanoCrimson uppercase">
            // DISPATCH SYSTEM v2.6
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-volcanoWhite">
            Capabilities Pipeline
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
            Select a core client infrastructure division card below to reveal our underlying
            operational frameworks and project ledgers.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              id: 'business',
              wing: 'WING_01 // COM_PRODUCTION',
              title: 'Business Solutions',
              body: 'Tailored commercial applications, administrative automation tools, conversion flows, and secure data schemas engineered for industry scaling parameters.',
              cta: '// View Solutions Repository',
              hoverBorder: 'hover:border-volcanoCrimson/40',
              hoverText: 'group-hover:text-volcanoCrimson',
            },
            {
              id: 'community',
              wing: 'WING_02 // PUBLIC_UTILITY',
              title: 'Community Systems',
              body: 'Real-time public telemetry panels, informational coordination networks, and accessible data feeds built securely to serve regional citizen networks.',
              cta: '// View Systems Repository',
              hoverBorder: 'hover:border-volcanoOrange/40',
              hoverText: 'group-hover:text-volcanoOrange',
            },
            {
              id: 'college',
              wing: 'WING_03 // ACADEMIC_LABS',
              title: 'College Projects',
              body: 'Review-ready conceptual models and framework source configurations complete with validation materials designed for university research tracks.',
              cta: '// Explore Specialized Domains',
              hoverBorder: 'hover:border-volcanoPeach/40',
              hoverText: 'group-hover:text-volcanoPeach',
              extraClass: 'sm:col-span-2 md:col-span-1',
            },
          ].map((tier) => {
            const isActive = activeTier === tier.id
            return (
              <button
                key={tier.id}
                onClick={() => selectTier(tier.id)}
                className={`tier-card group text-left border ${
                  isActive ? `${TIER_ACCENTS[tier.id]} bg-[#141414]/60` : 'border-white/5 bg-[#141414]/40'
                } p-6 sm:p-8 rounded-3xl transition-all duration-500 ${
                  isActive ? '' : tier.hoverBorder
                } flex flex-col justify-between min-h-[200px] sm:min-h-[240px] ${tier.extraClass || ''}`}
              >
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center font-mono text-[9px] sm:text-[10px] text-zinc-500">
                    <span>{tier.wing}</span>
                    <span
                      className={`font-bold ${TIER_INDICATOR_COLOR[tier.id]} ${isActive ? '' : 'hidden'}`}
                    >
                      ✓ SELECTED
                    </span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-black text-volcanoWhite ${tier.hoverText} transition-colors tracking-tight`}>
                    {tier.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{tier.body}</p>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-zinc-600 mt-4 uppercase">{tier.cta}</div>
              </button>
            )
          })}
        </section>

        {activeTier === 'college' && (
          <section className="grid-fade space-y-4 sm:space-y-6 pt-6 border-t border-zinc-900">
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-volcanoPeach/80 text-center sm:text-left">
              // SELECT DISCIPLINE SUB-NODE
            </div>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {collegeDomains.map((d) => {
                const isActive = activeDomain === d.id
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDomain(d.id)}
                    className={`domain-btn w-full p-3 sm:p-4 text-left font-mono rounded-xl border transition-colors ${
                      isActive
                        ? 'border-volcanoCrimson bg-gradient-to-b from-[#1c1212] to-volcanoBlack text-volcanoWhite shadow-[0_0_15px_rgba(230,57,70,0.15)]'
                        : 'border-zinc-900 bg-[#141414]/30 text-zinc-400 hover:text-volcanoWhite'
                    }`}
                  >
                    <div className={`text-[8px] sm:text-[9px] ${isActive ? 'text-volcanoCrimson font-bold' : 'text-zinc-600'}`}>
                      {d.node}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold mt-1 tracking-tight">{d.label}</div>
                  </button>
                )
              })}
            </div>
          </section>
        )}

        {dataset && (
          <section className="space-y-6 sm:space-y-8 pt-4 sm:pt-6 border-t border-zinc-900 mt-8 sm:mt-12">
            <div className="grid-fade grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" key={activeTier + activeDomain}>
              {dataset.map((proj, index) => (
                <ProjectCard key={proj.url} proj={proj} index={index} />
              ))}
            </div>
          </section>
        )}

        <section id="research" className="py-20 sm:py-32 border-t border-zinc-900/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-volcanoCrimson/40 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-volcanoOrange/30 bg-volcanoOrange/5 px-3 py-1.5 sm:px-4 sm:py-1.5 backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volcanoOrange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-volcanoOrange" />
                </span>
                <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-volcanoPeach">
                  // MODULE_LAUNCH: ALPHA_PHASE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-volcanoWhite leading-[1.05] sm:leading-[0.95]">
                Research Paper Publishing <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-volcanoCrimson via-volcanoOrange to-volcanoPeach bg-clip-text text-transparent">
                  Is Coming Soon.
                </span>
              </h2>

              <p className="text-[11px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed max-w-xl">
                We are currently engineering a streamlined archival routing track designed to guide
                engineering candidates through the rigors of indexing papers in global peer-reviewed
                repositories. From formatting source architecture records to clearing structural
                technical documentation checks, we help ensure your breakthroughs survive panel
                reviews.
              </p>

              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:gap-4 font-mono text-[9px] sm:text-[10px] text-zinc-500 pt-2 w-full text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-volcanoCrimson">▸</span>
                  <span>Formatting Verification Core</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-volcanoOrange">▸</span>
                  <span>Plagiarism Audit Shields</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-volcanoPeach">▸</span>
                  <span>Review Panel Simulation</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-zinc-400">▸</span>
                  <span>Data Analytics Verification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-volcanoCrimson to-volcanoOrange opacity-10 blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl border border-white/5 bg-[#141414]/60 p-5 sm:p-6 md:p-8 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] space-y-5 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] text-zinc-500 border-b border-zinc-900/60 pb-3 sm:pb-4 text-center sm:text-left">
                  <span>REGISTRY_ID: BNS_PUBLISH_CORE</span>
                  <span className="text-volcanoCrimson font-bold">
                    {countdown.done ? 'STATUS: LIVE' : 'STATUS: COMPILING...'}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center font-mono py-2">
                  <div className="bg-volcanoBlack/50 p-3 sm:p-4 rounded-xl border border-zinc-900">
                    <div className="text-xl sm:text-2xl font-black text-volcanoWhite">{countdown.d}</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Days</div>
                  </div>
                  <div className="bg-volcanoBlack/50 p-3 sm:p-4 rounded-xl border border-zinc-900">
                    <div className="text-xl sm:text-2xl font-black text-volcanoOrange">{countdown.h}</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Hours</div>
                  </div>
                  <div className="bg-volcanoBlack/50 p-3 sm:p-4 rounded-xl border border-zinc-900">
                    <div className="text-xl sm:text-2xl font-black text-volcanoPeach">{countdown.m}</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Mins</div>
                  </div>
                  <div className="bg-volcanoBlack/50 p-3 sm:p-4 rounded-xl border border-zinc-900">
                    <div className="text-xl sm:text-2xl font-black text-zinc-300">{countdown.s}</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Secs</div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-zinc-900/60">
                  <p className="font-mono text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider text-center sm:text-left">
                    // Request Priority Queue Allocation
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="academic_endpoint@domain.com"
                      className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 font-mono text-[10px] sm:text-xs text-volcanoWhite focus:border-volcanoCrimson focus:outline-none transition-colors"
                    />
                    <button
                      onClick={submitQueue}
                      className="h-11 sm:h-auto w-full sm:w-auto bg-volcanoWhite hover:bg-volcanoCrimson hover:text-volcanoWhite text-volcanoBlack font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase px-6 rounded-xl transition-all whitespace-nowrap flex items-center justify-center"
                    >
                      Queue Request
                    </button>
                  </div>
                  <div
                    className={`font-mono text-[9px] sm:text-[10px] flex items-center justify-center sm:justify-start gap-2 transition-colors mt-2 ${
                      queueStatus === 'success'
                        ? 'text-emerald-400 animate-pulse'
                        : queueStatus === 'error'
                          ? 'text-volcanoCrimson'
                          : 'text-zinc-600'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        queueStatus === 'success'
                          ? 'bg-emerald-400'
                          : queueStatus === 'error'
                            ? 'bg-volcanoCrimson'
                            : 'bg-zinc-700'
                      }`}
                    />
                    <span>
                      {queueStatus === 'success'
                        ? 'SUCCESS: Priority queue slot reserved.'
                        : queueStatus === 'error'
                          ? 'ERROR: Invalid communication endpoint.'
                          : 'Awaiting secure verification sequence.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-volcanoBlack relative z-10 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-[10px] sm:text-[11px] font-medium text-zinc-600 tracking-wide text-center">
          <div>&copy; 2026 BNS ONE &bull; One Vision. Infinite Possibilities.</div>
        </div>
      </footer>
    </div>
  )
}
