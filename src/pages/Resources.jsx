import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import BookingModal from '../components/BookingModal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { checklists } from '../data/resources.js'
import { posts, formatDate } from '../data/blogPosts.js'

const storeKey = (id) => `checklist:${id}`

function readChecked(id) {
  try {
    const raw = localStorage.getItem(storeKey(id))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function Checklist({ list }) {
  const [checked, setChecked] = useState(() => readChecked(list.id))
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(storeKey(list.id), JSON.stringify(checked))
    } catch {
      /* storage unavailable: ticks just won't persist */
    }
  }, [checked, list.id])

  const done = checked.length
  const total = list.items.length
  const toggle = (i) => setChecked((c) => (c.includes(i) ? c.filter((n) => n !== i) : [...c, i]))

  const copy = async () => {
    const text = `${list.title}\n\n${list.items.map((item, i) => `${checked.includes(i) ? '[x]' : '[ ]'} ${item}`).join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="hud-card flex flex-col rounded-3xl p-6 sm:p-8">
      <h3 className="text-xl font-bold">{list.title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{list.blurb}</p>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F3EEFA]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#00D4C4] transition-all duration-500"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-zinc-500">
          {done}/{total}
        </span>
      </div>

      <ul className="mt-5 flex-1 space-y-2">
        {list.items.map((item, i) => {
          const on = checked.includes(i)
          return (
            <li key={item}>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2 text-sm transition-colors hover:bg-[#F3EEFA]/60">
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggle(i)}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-700 accent-[#6D28D9]"
                />
                <span className={on ? 'text-zinc-500 line-through' : 'text-volcanoWhite'}>{item}</span>
              </label>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-10 items-center rounded-full border border-volcanoCrimson/30 px-5 text-sm font-semibold text-volcanoCrimson transition-all hover:bg-volcanoCrimson hover:text-white"
        >
          {copied ? 'Copied!' : 'Copy as text'}
        </button>
        {done > 0 && (
          <button type="button" onClick={() => setChecked([])} className="text-sm font-semibold text-zinc-500 hover:text-volcanoCrimson">
            Reset
          </button>
        )}
      </div>
    </article>
  )
}

export default function Resources() {
  usePageTitle('Resources — Infortia')
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-32 sm:px-6 md:pt-44">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Resources</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Practical tools for <span className="neon-text">your next project.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Free checklists and guides from our team. Use them on your own, or bring them to a call with us.
          </p>
        </section>

        <section className="space-y-10 py-16 md:py-24">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Checklists</h2>
            <p className="text-sm text-zinc-400">Tick items as you go. Your progress is saved in this browser.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {checklists.map((list) => (
              <Checklist key={list.id} list={list} />
            ))}
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-900/60 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Guides and articles</h2>
              <p className="text-sm text-zinc-400">Short reads on engineering, AI, product and business.</p>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-volcanoCrimson hover:underline">
              View all articles →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="hud-card group flex flex-col justify-between gap-6 rounded-2xl p-6 hover:-translate-y-1">
                <div>
                  <span className="rounded-full bg-[#F3EEFA] px-3 py-1 text-xs font-semibold text-volcanoCrimson">{post.category}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug transition-colors group-hover:text-volcanoCrimson">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
                </div>
                <p className="text-xs text-zinc-500">
                  {formatDate(post.date)} · {post.readTime} min read
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-5 border-t border-zinc-900/60 py-16 md:grid-cols-2 md:py-24">
          <Link to="/how-we-work" className="hud-card group rounded-3xl p-8 hover:-translate-y-1">
            <h3 className="text-xl font-bold transition-colors group-hover:text-volcanoCrimson">How we work</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">See our five-step process from discovery to support.</p>
            <span className="mt-6 inline-block text-sm font-semibold text-volcanoCrimson">Read the process →</span>
          </Link>
          <button onClick={() => setBookingOpen(true)} className="hud-card group rounded-3xl p-8 text-left hover:-translate-y-1">
            <h3 className="text-xl font-bold transition-colors group-hover:text-volcanoCrimson">Talk it through with us</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">Book a free consultation and bring your checklist.</p>
            <span className="mt-6 inline-block text-sm font-semibold text-volcanoCrimson">Book a call →</span>
          </button>
        </section>

      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <SiteFooter />
    </div>
  )
}
