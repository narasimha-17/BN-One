import { useState } from 'react'

const LEVEL_OFFSET = 26
const LEVEL_SCALE = 0.035

export default function StackedCards({ items }) {
  const [active, setActive] = useState(0)
  const total = items.length

  const go = (step) => setActive((n) => (n + step + total) % total)

  return (
    <div className="lg:col-span-7">
      <div className="grid pb-12" role="group" aria-roledescription="carousel" aria-label="Core directives">
        {items.map((d, i) => {
          const level = (i - active + total) % total
          const visibleLevel = Math.min(level, 3)
          const isFront = level === 0
          return (
            <div
              key={d.tag}
              aria-hidden={!isFront}
              style={{
                transform: `translateY(${visibleLevel * LEVEL_OFFSET}px) scale(${1 - visibleLevel * LEVEL_SCALE})`,
                opacity: level >= 3 ? 0 : 1 - level * 0.18,
                zIndex: total - level,
                transformOrigin: 'top center',
              }}
              className={`hud-card col-start-1 row-start-1 flex min-h-[20rem] flex-col justify-between space-y-4 rounded-2xl p-6 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8 ${
                isFront ? '' : 'pointer-events-none select-none'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-zinc-500">
                  <span className="text-xs tracking-wider">// {d.tag}</span>
                  <span className={`${d.color} font-bold`}>{d.label}</span>
                </div>
                <h3 className="text-xl font-black text-volcanoWhite">{d.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">{d.body}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-[10px] text-zinc-500">
                {d.chips.map((c) => (
                  <span key={c} className="rounded border border-zinc-900 bg-volcanoBlack px-2.5 py-1">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            <span className="font-bold text-volcanoCrimson">0{active + 1}</span> / 0{total}
          </span>
          <div className="flex gap-1.5" aria-hidden="true">
            {items.map((d, i) => (
              <span
                key={d.tag}
                className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-volcanoCrimson' : 'w-2 bg-zinc-700'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous card"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-volcanoCrimson/30 bg-white text-volcanoCrimson transition-all duration-300 hover:bg-volcanoCrimson hover:text-white hover:shadow-[0_10px_24px_-10px_rgba(109,40,217,0.8)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next card"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-volcanoCrimson text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.8)] transition-all duration-300 hover:bg-volcanoWhite"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
