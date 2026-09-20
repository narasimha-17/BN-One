import { useEffect, useState } from 'react'
import { industries, industryIcons } from '../data/industryData.js'

function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.4"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: industryIcons[name] }}
    />
  )
}

export default function IndustryExplorer({ onTalk }) {
  const [active, setActive] = useState(0)

  // The hero's sector chips link to #healthcare, #fintech, etc. Select that sector when one is used.
  useEffect(() => {
    const fromHash = () => {
      const i = industries.findIndex((ind) => `#${ind.key}` === window.location.hash)
      if (i >= 0) setActive(i)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const ind = industries[active]
  const onKey = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      setActive((a) => (a + 1) % industries.length)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      setActive((a) => (a - 1 + industries.length) % industries.length)
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-8">
      {/* Sector list */}
      <div role="tablist" aria-label="Industries" aria-orientation="vertical" onKeyDown={onKey} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
        {industries.map((item, i) => {
          const on = i === active
          return (
            <button
              key={item.key}
              id={item.key}
              role="tab"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group flex shrink-0 scroll-mt-32 items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 lg:w-full ${
                on ? 'bg-[#24113F] text-white shadow-[0_18px_36px_-18px_rgba(36,17,63,0.7)]' : 'text-volcanoWhite hover:bg-white'
              }`}
            >
              <span className={`w-6 shrink-0 text-xs font-bold tabular-nums ${on ? 'text-[#00D4C4]' : 'text-zinc-500'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${on ? 'bg-white/10 text-white' : 'bg-[#F3EEFA] text-volcanoCrimson group-hover:bg-volcanoCrimson group-hover:text-white'}`}>
                <Icon name={item.key} />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold lg:whitespace-normal">{item.title}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`ml-auto hidden h-4 w-4 shrink-0 transition-all duration-300 lg:block ${on ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )
        })}
      </div>

      {/* Feature panel */}
      <div
        key={ind.key}
        role="tabpanel"
        aria-label={ind.title}
        className="word-in relative overflow-hidden rounded-[2rem] bg-[#24113F] p-7 text-white sm:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#6D28D9]/55 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#00D4C4]/20 blur-3xl" />
        <Icon name={ind.key} className="pointer-events-none absolute -bottom-10 -right-6 h-64 w-64 text-white opacity-[0.06]" />

        <div className="relative space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4C4]">
              Sector {String(active + 1).padStart(2, '0')} of {String(industries.length).padStart(2, '0')}
            </p>
            <h3 className="text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:text-5xl">{ind.title}</h3>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{ind.blurb}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">What we build</p>
            <ol className="mt-3 border-t border-white/10">
              {ind.items.map((item, i) => (
                <li key={item} className="group/row flex items-center gap-5 border-b border-white/10 py-4 transition-colors hover:bg-white/5 sm:px-3">
                  <span className="w-8 text-2xl font-black leading-none text-transparent" style={{ WebkitTextStroke: '1.2px rgba(0,212,196,0.8)' }}>
                    {i + 1}
                  </span>
                  <span className="text-base font-medium sm:text-lg">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={onTalk} className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#24113F] transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]">
              Talk to us about {ind.title.split(' & ')[0]}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
            <div className="ml-auto flex gap-2">
              {[[-1, 'Previous sector', 'M15 6l-6 6 6 6'], [1, 'Next sector', 'M9 6l6 6-6 6']].map(([step, label, d]) => (
                <button
                  key={label}
                  onClick={() => setActive((a) => (a + step + industries.length) % industries.length)}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-transparent hover:bg-white hover:text-[#24113F]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d={d} /></svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
