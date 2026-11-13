import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { serviceCatalog } from '../data/serviceCatalog.js'
import { posts, categories, formatDate } from '../data/blogPosts.js'

const PROOF = [
  { to: '/customers', title: 'Customer stories', text: 'What it was like to work with us, in our clients’ words.' },
  { to: '/how-we-work', title: 'How we work', text: 'Our five-step process, from first call to support.' },
  { to: '/why-us', title: 'Why Agentosys', text: 'What sets a small, hands-on team apart.' },
]

function Arrow({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ExpertiseCard({ area, i }) {
  return (
    <Reveal style={{ transitionDelay: `${i * 60}ms` }} className="hud-card group flex flex-col rounded-3xl p-6 hover:-translate-y-1">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3EEFA] text-volcanoCrimson transition-colors group-hover:bg-volcanoCrimson group-hover:text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
          <path d={area.icon} />
        </svg>
      </span>
      <h3 className="mt-5 text-lg font-bold">{area.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{area.blurb}</p>
      <ul className="mt-5 space-y-1 border-t border-zinc-900/10 pt-4">
        {area.items.map((s) => (
          <li key={s.slug}>
            <Link
              to={`/services/${s.slug}`}
              className="group/link flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-[#F3EEFA] hover:text-volcanoCrimson"
            >
              {s.name}
              <Arrow className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="hud-card group flex flex-col justify-between gap-6 rounded-3xl p-6 hover:-translate-y-1">
      <div>
        <span className="rounded-full bg-[#F3EEFA] px-3 py-1 text-xs font-semibold text-volcanoCrimson">{post.category}</span>
        <h3 className="mt-4 text-lg font-bold leading-snug transition-colors group-hover:text-volcanoCrimson">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
      </div>
      <p className="text-xs text-zinc-500">
        {formatDate(post.date)} · {post.readTime} min read
      </p>
    </Link>
  )
}

function FeaturedPost({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-[#24113F] p-7 text-white shadow-[0_30px_60px_-30px_rgba(36,17,63,0.7)] transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:col-span-2"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#6D28D9]/50 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-[#00D4C4]/20 blur-3xl" />
      <div className="relative space-y-4">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#7FEFE6]">Featured · {post.category}</span>
        <h3 className="max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{post.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{post.excerpt}</p>
      </div>
      <div className="relative flex items-center justify-between gap-4">
        <p className="text-xs text-white/55">
          {formatDate(post.date)} · {post.readTime} min read
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-bold">
          Read article <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function ResourceKnow() {
  const [category, setCategory] = useState('All')
  const shown = category === 'All' ? posts : posts.filter((p) => p.category === category)
  const [featured, ...rest] = shown

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Expertise */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Where our expertise sits</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((area, i) => (
            <ExpertiseCard key={area.title} area={area} i={i} />
          ))}
          <Reveal style={{ transitionDelay: `${serviceCatalog.length * 60}ms` }}>
            <Link
              to="/services"
              className="group flex h-full min-h-48 flex-col justify-between gap-6 rounded-3xl border border-dashed border-volcanoCrimson/35 p-6 transition-colors hover:border-volcanoCrimson hover:bg-[#F3EEFA]/60"
            >
              <p className="text-lg font-bold">Not sure which area fits?</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-volcanoCrimson">
                Browse every service <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Insights from our team</h3>
            <p className="text-sm text-zinc-400">Short, practical reads on engineering, AI, product and business.</p>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-volcanoCrimson hover:underline">
            View all articles →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
          {['All', ...categories].map((c) => {
            const active = category === c
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'border-volcanoCrimson bg-[#F3EEFA] font-semibold text-volcanoCrimson'
                    : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {featured ? (
          <div key={category} className="lead-rise grid gap-5 lg:grid-cols-3">
            <FeaturedPost post={featured} />
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">No articles in this topic yet.</p>
        )}
      </div>

      {/* Proof */}
      <div className="grid gap-4 md:grid-cols-3">
        {PROOF.map((p, i) => (
          <Reveal key={p.to} style={{ transitionDelay: `${i * 70}ms` }}>
            <Link to={p.to} className="hud-card group flex h-full items-start justify-between gap-4 rounded-2xl p-5 hover:-translate-y-0.5">
              <div>
                <p className="font-bold transition-colors group-hover:text-volcanoCrimson">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.text}</p>
              </div>
              <Arrow className="mt-1 h-4 w-4 shrink-0 text-volcanoCrimson transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
