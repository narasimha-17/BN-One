import { useState } from 'react'
import { actionTabs } from '../data/inAction.js'

const arrow = (d) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d={d} />
  </svg>
)

export default function InAction() {
  const [tabIdx, setTabIdx] = useState(0)
  const [groupIdx, setGroupIdx] = useState(0)
  const [itemIdx, setItemIdx] = useState(0)

  const tab = actionTabs[tabIdx]
  const group = tab.groups[groupIdx]
  const item = group.items[itemIdx]
  const count = group.items.length

  const pickTab = (i) => {
    setTabIdx(i)
    setGroupIdx(0)
    setItemIdx(0)
  }
  const pickGroup = (i) => {
    setGroupIdx(i)
    setItemIdx(0)
  }
  const step = (n) => setItemIdx((i) => (i + n + count) % count)

  return (
    <section id="in-action" className="space-y-10 border-t border-zinc-900/60 py-16 md:space-y-12 md:py-24">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Real problems, real fixes</p>
        <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">How we help, in practice</h2>
        <p className="text-sm text-zinc-400 md:text-base">Choose an area to see the challenge teams bring us and how we approach it.</p>
      </div>

      {/* Pill switcher */}
      <div className="flex justify-center">
        <div role="tablist" aria-label="Areas" className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-black/10 bg-white p-1.5 shadow-sm">
          {actionTabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === tabIdx}
              onClick={() => pickTab(i)}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                i === tabIdx
                  ? 'bg-[#24113F] text-white shadow-[0_8px_20px_-10px_rgba(36,17,63,0.8)]'
                  : 'text-zinc-400 hover:text-volcanoWhite'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
        {/* Step list */}
        <ol className="relative flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
          <span className="absolute bottom-6 left-[1.05rem] top-6 hidden w-px bg-gradient-to-b from-[#6D28D9] to-[#00D4C4] opacity-30 lg:block" aria-hidden="true" />
          {tab.groups.map((g, i) => {
            const on = i === groupIdx
            return (
              <li key={g.name} className="shrink-0 lg:shrink">
                <button onClick={() => pickGroup(i)} aria-current={on} className="group relative flex w-full items-center gap-4 rounded-xl py-3 text-left lg:pr-2">
                  <span
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                      on
                        ? 'border-volcanoCrimson bg-volcanoCrimson text-white shadow-[0_8px_18px_-8px_rgba(109,40,217,0.9)]'
                        : 'border-black/10 bg-white text-zinc-500 group-hover:border-volcanoCrimson/40'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className={`block whitespace-nowrap text-sm font-semibold transition-colors lg:whitespace-normal ${on ? 'text-volcanoWhite' : 'text-zinc-400 group-hover:text-volcanoWhite'}`}>
                      {g.name}
                    </span>
                    <span className="block text-xs text-zinc-500">
                      {g.items.length} {g.items.length === 1 ? 'scenario' : 'scenarios'}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        {/* Detail */}
        <div key={`${tabIdx}-${groupIdx}-${itemIdx}`} className="word-in space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{group.name}</p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-volcanoWhite">{item.title}</h3>
            </div>
            {count > 1 && (
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  {group.items.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === itemIdx ? 'w-6 bg-volcanoCrimson' : 'w-1.5 bg-zinc-700'}`} />
                  ))}
                </div>
                <button onClick={() => step(-1)} aria-label="Previous scenario" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white">
                  {arrow('M15 6l-6 6 6 6')}
                </button>
                <button onClick={() => step(1)} aria-label="Next scenario" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white">
                  {arrow('M9 6l6 6-6 6')}
                </button>
              </div>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
            <div className="rounded-3xl border border-volcanoCrimson/15 bg-[#F3EEFA] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-volcanoCrimson">The challenge</p>
              <ul className="mt-4 space-y-3">
                {item.gaps.map((g) => (
                  <li key={g} className="flex gap-3 text-sm leading-relaxed text-volcanoWhite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-volcanoCrimson" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center text-volcanoCrimson" aria-hidden="true">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md md:rotate-0 rotate-90">{arrow('M5 12h14M13 6l6 6-6 6')}</span>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#6D28D9] p-6 text-white sm:p-7">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <p className="relative text-xs font-bold uppercase tracking-widest text-white/95">Our approach</p>
              <p className="relative mt-4 text-sm leading-relaxed text-white/95">{item.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
