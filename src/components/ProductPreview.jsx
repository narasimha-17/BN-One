import { useEffect, useState } from 'react'

const reduce = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs fn every ms while mounted (skipped for visitors who prefer reduced motion).
function useTicker(fn, ms) {
  useEffect(() => {
    if (reduce()) return undefined
    const id = setInterval(fn, ms)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms])
}

const rand = (min, max) => Math.round(min + Math.random() * (max - min))

function Check({ on }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
        on ? 'scale-100 bg-[#6D28D9] text-white' : 'scale-90 bg-[#6D28D9]/10 text-transparent'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
        <path d="M5 12l4.5 4.5L19 7" />
      </svg>
    </span>
  )
}

function PowerLensBody() {
  const [bars, setBars] = useState([38, 62, 48, 78, 56, 92, 68])
  const [signals, setSignals] = useState(1248)
  const [trend, setTrend] = useState(12)
  const [alerts, setAlerts] = useState(3)

  useTicker(() => {
    setBars((b) => b.map(() => rand(30, 96)))
    setSignals((n) => n + rand(3, 24))
    setTrend(rand(4, 19))
    setAlerts(rand(1, 6))
  }, 1600)

  const top = Math.max(...bars)
  return (
    <div className="space-y-4">
      <div className="flex h-28 items-end gap-2.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md bg-[#6D28D9] transition-all duration-700 ease-out ${h === top ? 'opacity-100' : 'opacity-25'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          ['Signals', signals.toLocaleString()],
          ['Trend', `+${trend}%`],
          ['Alerts', alerts],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-[#F3EEFA] p-3">
            <div className="text-[10px] font-medium text-[#6B6472]">{label}</div>
            <div className="mt-1 text-sm font-bold tabular-nums text-volcanoWhite">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// VIBE: assembles a real page from components, one at a time: navbar, hero, footer.
const PARTS = ['Navbar', 'Hero section', 'Footer']

function MiniNavbar() {
  return (
    <div className="flex items-center justify-between rounded-md border border-[#24113F]/10 bg-white px-3 py-1.5 shadow-sm">
      <span className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#00D4C4]" />
        <span className="text-[9px] font-extrabold tracking-wider text-[#24113F]">BRAND</span>
      </span>
      <span className="hidden gap-3 sm:flex">
        {['Home', 'Work', 'About'].map((t) => (
          <span key={t} className="text-[8px] font-medium text-[#6B6472]">{t}</span>
        ))}
      </span>
      <span className="rounded-full bg-[#6D28D9] px-2 py-0.5 text-[8px] font-bold text-white">Contact</span>
    </div>
  )
}

function MiniHero() {
  return (
    <div className="grid grid-cols-[1.2fr_1fr] items-center gap-3 rounded-md bg-white px-3 py-3 shadow-sm">
      <div className="space-y-1.5">
        <div className="h-2 w-4/5 rounded-full bg-[#24113F]" />
        <div className="h-2 w-3/5 rounded-full bg-[#6D28D9]" />
        <div className="h-1 w-full rounded-full bg-[#24113F]/15" />
        <div className="h-1 w-5/6 rounded-full bg-[#24113F]/15" />
        <div className="flex gap-1.5 pt-1">
          <span className="rounded-full bg-[#6D28D9] px-2 py-0.5 text-[7px] font-bold text-white">Get started</span>
          <span className="rounded-full border border-[#6D28D9]/40 px-2 py-0.5 text-[7px] font-bold text-[#6D28D9]">Learn more</span>
        </div>
      </div>
      <div className="h-16 rounded-lg bg-gradient-to-br from-[#6D28D9]/80 to-[#00D4C4]/80" />
    </div>
  )
}

function MiniFooter() {
  return (
    <div className="rounded-md bg-[#24113F] px-3 py-2.5">
      <div className="grid grid-cols-4 gap-2">
        <div className="space-y-1">
          <span className="block h-2 w-8 rounded-full bg-white/80" />
          <span className="block h-1 w-10 rounded-full bg-white/25" />
        </div>
        {[0, 1, 2].map((c) => (
          <div key={c} className="space-y-1">
            <span className="block h-1 w-6 rounded-full bg-white/60" />
            <span className="block h-1 w-8 rounded-full bg-white/25" />
            <span className="block h-1 w-7 rounded-full bg-white/25" />
          </div>
        ))}
      </div>
    </div>
  )
}

const COMPONENTS = [MiniNavbar, MiniHero, MiniFooter]

function VibeBody() {
  const [step, setStep] = useState(0) // 0 empty, 1 navbar, 2 hero, 3 footer, 4-5 hold
  useTicker(() => setStep((n) => (n >= 5 ? 0 : n + 1)), 1100)
  const current = Math.min(step, 3)

  return (
    <div className="space-y-3">
      <div className="relative min-h-[10.5rem] space-y-2 overflow-hidden rounded-xl border border-dashed border-[#6D28D9]/25 bg-[#F3EEFA] p-2.5" aria-hidden="true">
        {step === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-[#6B6472]">
            Building your interface…
          </div>
        )}
        {COMPONENTS.map((Comp, i) => {
          const placed = i < current
          const active = i === current - 1 && step <= 3
          return (
            <div
              key={PARTS[i]}
              className={`relative transition-all duration-700 ease-out ${
                placed ? 'translate-y-0 opacity-100' : i === 2 ? 'translate-y-4 opacity-0' : '-translate-y-3 opacity-0'
              }`}
            >
              <Comp />
              {active && (
                <>
                  <span className="pointer-events-none absolute -inset-0.5 animate-pulse rounded-lg border-2 border-[#00D4C4]" />
                  <span className="absolute -top-2 left-2 rounded bg-[#00D4C4] px-1.5 py-px text-[7px] font-bold uppercase tracking-wider text-[#24113F]">
                    {PARTS[i]}
                  </span>
                </>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {PARTS.map((name, i) => {
          const done = i < current
          const live = i === current - 1 && step <= 3
          return (
            <span
              key={name}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-500 ${
                live ? 'scale-105 bg-[#6D28D9] text-white' : done ? 'bg-[#6D28D9]/10 text-[#6D28D9]' : 'bg-[#F3EEFA] text-[#6B6472]'
              }`}
            >
              {done && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                  <path d="M5 12l4.5 4.5L19 7" />
                </svg>
              )}
              {name}
            </span>
          )
        })}
        <span className="ml-auto font-mono text-[10px] text-[#6B6472]">{current}/3 components</span>
      </div>
    </div>
  )
}

function CodeCheckBody() {
  const [step, setStep] = useState(0)
  useTicker(() => setStep((s) => (s >= 6 ? 0 : s + 1)), 850)
  const rows = [70, 46, 82, 58]
  return (
    <div className="space-y-2.5">
      {rows.map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-4 text-right font-mono text-[10px] text-[#6B6472]/70">{i + 1}</span>
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#F3EEFA] px-3 py-2.5">
            <div className="h-1.5 rounded-full bg-[#6D28D9]/60 transition-all duration-500" style={{ width: `${i < step ? w * 0.45 : w * 0.2}%` }} />
            <div className="h-1.5 rounded-full bg-[#24113F]/20" style={{ width: `${w * 0.3}%` }} />
          </div>
          <Check on={i < step} />
        </div>
      ))}
      <p className="pt-1 text-right font-mono text-[10px] text-[#6B6472]">
        {Math.min(step, 4)}/4 checks passed
      </p>
    </div>
  )
}

function ExamBody() {
  const [p, setP] = useState(30)
  useTicker(() => setP((v) => (v >= 100 ? 20 : v + 10)), 700)
  const bars = [
    ['Study plan', Math.min(100, p + 15)],
    ['Practice', Math.round(p * 0.85)],
    ['Revision', Math.round(p * 0.6)],
  ]
  return (
    <div className="flex items-center gap-6">
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="32" stroke="#F3EEFA" strokeWidth="9" />
          <circle
            cx="40"
            cy="40"
            r="32"
            stroke="#6D28D9"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="201"
            strokeDashoffset={201 * (1 - p / 100)}
            style={{ transition: 'stroke-dashoffset 0.6s ease-out' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tabular-nums text-volcanoWhite">{p}%</span>
      </div>
      <div className="flex-1 space-y-3">
        {bars.map(([label, value]) => (
          <div key={label} className="space-y-1.5">
            <div className="text-[10px] font-medium text-[#6B6472]">{label}</div>
            <div className="h-1.5 rounded-full bg-[#F3EEFA]">
              <div className="h-full rounded-full bg-[#6D28D9] transition-all duration-700" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const BODIES = {
  PowerLens: PowerLensBody,
  VIBE: VibeBody,
  'Code Check': CodeCheckBody,
  'Exam+': ExamBody,
}

export default function ProductPreview({ name }) {
  const Body = BODIES[name]
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#6D28D9]/15 to-transparent blur-2xl pointer-events-none" />
      <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-[#24113F]/8 bg-gradient-to-br from-[#F3EEFA] to-white p-4 sm:aspect-[4/3] sm:p-10">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#6D28D9]/10 blur-3xl" />
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#24113F]/10 bg-white shadow-[0_30px_60px_-30px_rgba(109,40,217,0.45)]">
          <div className="flex items-center gap-2 border-b border-[#24113F]/8 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="ml-3 text-[11px] font-semibold text-[#6B6472]">{name}</span>
            <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-[#6B6472]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4C4] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D4C4]" />
              </span>
              Live · sample data
            </span>
          </div>
          <div className="p-5 sm:p-6">{Body ? <Body /> : null}</div>
        </div>
      </div>
    </div>
  )
}
