import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { checklists, learningPaths, glossary } from '../data/resources.js'
import { posts } from '../data/blogPosts.js'
import { products } from '../data/products.js'
import { findService } from '../data/serviceCatalog.js'

// ---------- Learning paths ----------

function resolveStep(step) {
  if (step.kind === 'article') {
    const post = posts.find((p) => p.slug === step.slug)
    return post && { label: 'Article', title: post.title, meta: `${post.readTime} min read`, to: `/blog/${post.slug}` }
  }
  if (step.kind === 'checklist') {
    const list = checklists.find((c) => c.id === step.id)
    return list && { label: 'Checklist', title: list.title, meta: `${list.items.length} items`, to: { hash: '#checklists', state: { checklist: list.id } } }
  }
  if (step.kind === 'service') {
    const service = findService(step.slug)
    return service && { label: 'Service', title: service.name, meta: service.category, to: `/services/${service.slug}` }
  }
  if (step.kind === 'product') {
    const product = products.find((p) => p.slug === step.slug)
    return product && { label: 'Product', title: product.name, meta: product.category, to: `/products#${product.slug}` }
  }
  return null
}

function LearningPaths() {
  const [active, setActive] = useState(learningPaths[0].id)
  const path = learningPaths.find((p) => p.id === active)
  const steps = path.steps.map((s) => ({ ...resolveStep(s), note: s.note })).filter((s) => s.title)

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Pick a learning path</h3>
        <p className="text-sm text-zinc-400">Choose what you are working on. Each path is a short, ordered route through our material.</p>
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Learning paths">
        {learningPaths.map((p) => {
          const on = p.id === active
          return (
            <button
              key={p.id}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls="path-panel"
              onClick={() => setActive(p.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                on
                  ? 'border-transparent bg-volcanoCrimson text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.8)]'
                  : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
              }`}
            >
              {p.label}
            </button>
          )
        })}
      </div>

      <div id="path-panel" role="tabpanel" key={active} className="lead-rise grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
        <div className="space-y-4">
          <p className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{path.intro}</p>
          <p className="text-sm font-semibold text-volcanoCrimson">
            {steps.length} steps · start at the top
          </p>
        </div>

        <ol className="relative space-y-3">
          <span className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-gradient-to-b from-[#6D28D9] via-[#4FB3E8] to-[#00D4C4] opacity-40" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-4">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-volcanoCrimson text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(109,40,217,0.8)]">
                {i + 1}
              </span>
              <Link to={step.to} className="hud-card group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 hover:-translate-y-0.5 sm:p-5">
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-volcanoCrimson">
                    {step.label}
                    <span className="font-medium normal-case tracking-normal text-zinc-500">· {step.meta}</span>
                  </p>
                  <p className="mt-1 font-bold leading-snug transition-colors group-hover:text-volcanoCrimson">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.note}</p>
                </div>
                <svg className="h-4 w-4 shrink-0 text-volcanoCrimson transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// ---------- Checklists ----------

const storeKey = (id) => `checklist:${id}`

function readChecked(id) {
  try {
    const raw = localStorage.getItem(storeKey(id))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeChecked(id, value) {
  try {
    localStorage.setItem(storeKey(id), JSON.stringify(value))
  } catch {
    /* storage unavailable: ticks just won't persist */
  }
}

const RING_R = 34
const RING_C = 2 * Math.PI * RING_R

function ProgressRing({ done, total }) {
  const pct = total ? done / total : 0
  return (
    <div className="relative h-24 w-24 shrink-0" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label="Checklist progress">
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#00D4C4" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r={RING_R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
        <circle
          cx="40"
          cy="40"
          r={RING_R}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={RING_C}
          strokeDashoffset={RING_C * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-xl font-extrabold leading-none tabular-nums">{done}</span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/55">of {total}</span>
      </span>
    </div>
  )
}

function Checklists() {
  const { state, key } = useLocation()
  const [active, setActive] = useState(checklists[0].id)
  const [checked, setChecked] = useState(() => Object.fromEntries(checklists.map((c) => [c.id, readChecked(c.id)])))
  const [copied, setCopied] = useState(false)

  // A learning-path step can open a specific checklist by passing its id in the link state.
  useEffect(() => {
    const id = state?.checklist
    if (id && checklists.some((c) => c.id === id)) setActive(id)
  }, [key, state])

  const list = checklists.find((c) => c.id === active)
  const ticks = checked[list.id]
  const total = list.items.length
  const done = ticks.length

  const update = (id, next) => {
    setChecked((c) => ({ ...c, [id]: next }))
    writeChecked(id, next)
  }
  const toggle = (i) => update(list.id, ticks.includes(i) ? ticks.filter((n) => n !== i) : [...ticks, i])

  const copy = async () => {
    const text = `${list.title}\n\n${list.items.map((item, i) => `${ticks.includes(i) ? '[x]' : '[ ]'} ${item}`).join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div id="checklists" className="scroll-mt-28 space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Checklists you can use today</h3>
        <p className="text-sm text-zinc-400">Tick items as you go. Your progress is saved in this browser.</p>
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Checklists">
        {checklists.map((c) => {
          const on = c.id === active
          const n = checked[c.id].length
          return (
            <button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls="checklist-panel"
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-2.5 rounded-full border py-2 pl-5 pr-2.5 text-sm font-semibold transition-all ${
                on
                  ? 'border-transparent bg-volcanoCrimson text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.8)]'
                  : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
              }`}
            >
              {c.title}
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums ${on ? 'bg-white/20 text-white' : 'bg-[#F3EEFA] text-volcanoCrimson'}`}>
                {n}/{c.items.length}
              </span>
            </button>
          )
        })}
      </div>

      <div id="checklist-panel" role="tabpanel" key={active} className="lead-rise grid overflow-hidden rounded-3xl shadow-[0_30px_60px_-34px_rgba(36,17,63,0.45)] lg:grid-cols-[19rem_1fr]">
        <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-[#24113F] p-7 text-white">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#6D28D9]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[#00D4C4]/20 blur-3xl" />
          <div className="relative space-y-3">
            <ProgressRing done={done} total={total} />
            <h4 className="pt-2 text-xl font-extrabold leading-snug tracking-tight">{list.title}</h4>
            <p className="text-sm leading-relaxed text-white/65">{list.blurb}</p>
            {done === total && (
              <p className="lead-rise inline-flex items-center gap-2 rounded-full bg-[#00D4C4]/15 px-3 py-1 text-xs font-bold text-[#7FEFE6]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l4.5 4.5L19 7" />
                </svg>
                All done
              </p>
            )}
          </div>
          <div className="relative flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copy}
              className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-bold text-[#24113F] transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]"
            >
              {copied ? 'Copied!' : 'Copy as text'}
            </button>
            {done > 0 && (
              <button type="button" onClick={() => update(list.id, [])} className="text-sm font-semibold text-white/60 transition-colors hover:text-white">
                Reset
              </button>
            )}
          </div>
        </div>

        <ul className="grid content-start gap-2 bg-white p-4 sm:grid-cols-2 sm:p-6">
          {list.items.map((item, i) => {
            const on = ticks.includes(i)
            return (
              <li key={item}>
                <label
                  className={`flex h-full cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm transition-all duration-200 ${
                    on ? 'border-[#00D4C4]/40 bg-[#E3F8F5]/60' : 'border-[#24113F]/8 hover:border-volcanoCrimson/30 hover:bg-[#F3EEFA]/60'
                  }`}
                >
                  <input type="checkbox" checked={on} onChange={() => toggle(i)} className="peer sr-only" />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 peer-focus-visible:ring-4 peer-focus-visible:ring-volcanoCrimson/25 ${
                      on ? 'border-transparent bg-gradient-to-br from-[#6D28D9] to-[#00D4C4]' : 'border-zinc-600/50 bg-white'
                    }`}
                  >
                    <svg className={`h-3 w-3 text-white transition-transform duration-200 ${on ? 'scale-100' : 'scale-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className={`leading-snug transition-colors ${on ? 'text-zinc-500 line-through decoration-zinc-500/40' : 'text-volcanoWhite'}`}>{item}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

// ---------- Glossary ----------

function Glossary() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const shown = glossary.filter((g) => !q || g.term.toLowerCase().includes(q) || g.meaning.toLowerCase().includes(q))

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Plain-language glossary</h3>
          <p className="text-sm text-zinc-400">The terms you will hear on a software call, explained without the jargon.</p>
        </div>
        <label className="relative block w-full sm:w-64">
          <span className="sr-only">Search the glossary</span>
          <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms"
            className="w-full rounded-full border border-[#24113F]/15 bg-white py-2.5 pl-10 pr-4 text-sm text-volcanoWhite placeholder:text-zinc-500/70 focus:border-volcanoCrimson focus:outline-none focus:ring-4 focus:ring-volcanoCrimson/10"
          />
        </label>
      </div>

      {shown.length ? (
        <dl className="grid gap-4 sm:grid-cols-2">
          {shown.map((g) => (
            <div key={g.term} className="hud-card rounded-2xl p-5">
              <dt className="inline-block rounded-full bg-[#F3EEFA] px-3 py-1 text-sm font-bold text-volcanoCrimson">{g.term}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-zinc-400">{g.meaning}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="text-sm text-zinc-500">No matching terms. Try a different word, or ask us on a call.</p>
      )}
    </div>
  )
}

export default function ResourceLearn() {
  return (
    <div className="space-y-16 md:space-y-20">
      <LearningPaths />
      <Checklists />
      <Glossary />
    </div>
  )
}
