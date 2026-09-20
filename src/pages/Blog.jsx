import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { posts, categories, formatDate } from '../data/blogPosts.js'

// Each article gets its own flat illustration drawn for its topic (not a shared template).
const PLUM = '#24113F'
const PURPLE = '#6D28D9'
const TEAL = '#00D4C4'

function Layer({ y, top, side, shade }) {
  return (
    <g>
      <polygon points={`110,${y} 200,${y + 30} 200,${y + 48} 110,${y + 18}`} fill={shade} />
      <polygon points={`200,${y + 30} 290,${y} 290,${y + 18} 200,${y + 48}`} fill={side} />
      <polygon points={`200,${y - 30} 290,${y} 200,${y + 30} 110,${y}`} fill={top} />
    </g>
  )
}

function StackArt() {
  return (
    <>
      <rect width="400" height="240" fill="#F3EEFA" />
      <rect x="318" y="30" width="30" height="30" fill="none" stroke={PURPLE} strokeOpacity="0.35" strokeWidth="2" transform="rotate(12 333 45)" />
      <rect x="338" y="168" width="22" height="22" fill={TEAL} fillOpacity="0.7" transform="rotate(-14 349 179)" />
      <circle cx="60" cy="190" r="7" fill="none" stroke={PURPLE} strokeOpacity="0.4" strokeWidth="2" />
      <Layer y={160} top="#d7c8f5" side="#b9a3ea" shade="#a58ee0" />
      <Layer y={128} top="#a78bfa" side="#8465e8" shade="#6f4fd6" />
      <Layer y={96} top={TEAL} side="#00a99c" shade="#008f84" />
      <Layer y={64} top={PURPLE} side="#5320b2" shade="#431a91" />
      <path d="M296 96h34M296 96l8-6M296 96l8 6" stroke={PLUM} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  )
}

const IN = [60, 100, 140, 180]
const MID = [42, 84, 126, 168, 210]
const OUT = [96, 156]

function NetworkArt() {
  return (
    <>
      <rect width="400" height="240" fill="#0d2a31" />
      <g stroke="#5eead4" strokeOpacity="0.22" strokeWidth="1">
        {IN.map((y1) => MID.map((y2) => <line key={`a${y1}-${y2}`} x1="90" y1={y1} x2="200" y2={y2} />))}
        {MID.map((y1) => OUT.map((y2) => <line key={`b${y1}-${y2}`} x1="200" y1={y1} x2="310" y2={y2} />))}
      </g>
      <g stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" fill="none">
        <line x1="90" y1="100" x2="200" y2="126" />
        <line x1="200" y1="126" x2="310" y2="96" />
      </g>
      {IN.map((y) => <circle key={`i${y}`} cx="90" cy={y} r="7" fill="#12424a" stroke="#5eead4" strokeWidth="2" />)}
      {MID.map((y) => <circle key={`m${y}`} cx="200" cy={y} r="8" fill="#0d2a31" stroke="#5eead4" strokeOpacity="0.6" strokeWidth="2" />)}
      <circle cx="200" cy="126" r="8" fill={TEAL} />
      <circle cx="90" cy="100" r="7" fill={TEAL} />
      {OUT.map((y) => <circle key={`o${y}`} cx="310" cy={y} r="11" fill="#12424a" stroke={TEAL} strokeWidth="2.5" />)}
      <circle cx="310" cy="96" r="11" fill={TEAL} />
      <path d="M304 96l4 4 8-9" stroke={PLUM} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  )
}

function SpeedArt() {
  return (
    <>
      <rect width="400" height="240" fill="#FCEFDD" />
      <g stroke="#F97316" strokeWidth="4" strokeLinecap="round">
        <line x1="34" y1="92" x2="100" y2="92" />
        <line x1="54" y1="118" x2="108" y2="118" strokeOpacity="0.7" />
        <line x1="24" y1="144" x2="96" y2="144" strokeOpacity="0.5" />
        <line x1="60" y1="170" x2="104" y2="170" strokeOpacity="0.35" />
      </g>
      <rect x="120" y="44" width="230" height="156" rx="12" fill="#ffffff" stroke={PLUM} strokeWidth="3" />
      <path d="M120 56a12 12 0 0 1 12-12h206a12 12 0 0 1 12 12v18H120z" fill={PLUM} />
      <circle cx="138" cy="59" r="4" fill="#F97316" />
      <circle cx="152" cy="59" r="4" fill="#fdba74" />
      <circle cx="166" cy="59" r="4" fill="#fff" fillOpacity="0.5" />
      <rect x="140" y="90" width="90" height="12" rx="6" fill={PLUM} />
      <rect x="140" y="110" width="150" height="8" rx="4" fill="#d8ccf0" />
      <rect x="140" y="126" width="120" height="8" rx="4" fill="#d8ccf0" />
      <rect x="248" y="86" width="82" height="42" rx="8" fill="#e6dcf7" />
      <rect x="140" y="158" width="190" height="14" rx="7" fill="#efe6fb" />
      <rect x="140" y="158" width="190" height="14" rx="7" fill={TEAL} />
      <circle cx="330" cy="165" r="11" fill="#F97316" />
      <path d="M332 158l-6 9h5l-2 7 7-10h-5z" fill="#fff" />
    </>
  )
}

function LaunchArt() {
  const bars = [
    [46, 150, 60, '#7c5ce0'],
    [124, 116, 60, '#9b7df0'],
    [202, 82, 60, '#b9a3f5'],
    [280, 48, 60, '#d9cdfa'],
  ]
  return (
    <>
      <rect width="400" height="240" fill={PLUM} />
      <line x1="20" y1="210" x2="380" y2="210" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      {bars.map(([x, y, w, c], i) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={210 - y} rx="6" fill={c} />
          <text x={x + w / 2} y={y + 30} textAnchor="middle" fontSize="20" fontWeight="800" fill={PLUM} fontFamily="sans-serif">
            {i + 1}
          </text>
        </g>
      ))}
      <path d="M76 138C110 100 150 122 176 88S250 70 310 34" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="5 6" fill="none" />
      <circle cx="76" cy="132" r="10" fill="#fde68a" />
      <g stroke="#fde68a" strokeWidth="2.5" strokeLinecap="round">
        <line x1="76" y1="112" x2="76" y2="106" />
        <line x1="58" y1="120" x2="53" y2="116" />
        <line x1="94" y1="120" x2="99" y2="116" />
      </g>
      <line x1="326" y1="48" x2="326" y2="14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M326 14l30 9-30 9z" fill={TEAL} />
    </>
  )
}

function BalanceArt() {
  return (
    <>
      <rect width="400" height="240" fill="#DFF4F0" />
      <rect x="150" y="196" width="100" height="10" rx="5" fill={PLUM} />
      <rect x="196" y="58" width="8" height="140" fill={PLUM} />
      <circle cx="200" cy="56" r="9" fill={PURPLE} />
      <g transform="rotate(-6 200 64)">
        <rect x="90" y="60" width="220" height="8" rx="4" fill={PLUM} />
        <g stroke={PLUM} strokeWidth="2">
          <line x1="100" y1="68" x2="66" y2="132" />
          <line x1="100" y1="68" x2="134" y2="132" />
          <line x1="300" y1="68" x2="266" y2="132" />
          <line x1="300" y1="68" x2="334" y2="132" />
        </g>
        <path d="M58 132h84a42 22 0 0 1-84 0z" fill={PURPLE} />
        <path d="M258 132h84a42 22 0 0 1-84 0z" fill={PURPLE} />
        <rect x="76" y="98" width="48" height="34" rx="5" fill="#ffffff" stroke={PLUM} strokeWidth="3" />
        <path d="M76 110h48M100 98v12" stroke={PLUM} strokeWidth="3" />
        <rect x="268" y="114" width="20" height="18" fill={TEAL} stroke={PLUM} strokeWidth="2" />
        <rect x="290" y="114" width="20" height="18" fill="#a78bfa" stroke={PLUM} strokeWidth="2" />
        <rect x="279" y="96" width="20" height="18" fill="#fde68a" stroke={PLUM} strokeWidth="2" />
      </g>
    </>
  )
}

function FallbackArt() {
  return (
    <>
      <rect width="400" height="240" fill="#F3EEFA" />
      <circle cx="150" cy="120" r="56" fill={PURPLE} />
      <circle cx="230" cy="120" r="56" fill={TEAL} fillOpacity="0.85" />
    </>
  )
}

const ART = {
  'choosing-the-right-tech-stack': StackArt,
  'practical-ai-for-small-businesses': NetworkArt,
  'what-makes-a-fast-website': SpeedArt,
  'from-idea-to-launch-in-weeks': LaunchArt,
  'build-vs-buy-software': BalanceArt,
}

function Cover({ post, className = '' }) {
  const Art = ART[post.slug] ?? FallbackArt
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
        role="img"
        aria-label={`${post.category} illustration`}
      >
        <Art />
      </svg>
      <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#24113F] shadow-sm">
        {post.category}
      </span>
    </div>
  )
}

export default function Blog() {
  usePageTitle('Blog — Infortia')
  const [category, setCategory] = useState(null)
  const [query, setQuery] = useState('')

  const filtering = Boolean(category || query.trim())
  const visible = useMemo(
    () =>
      posts.filter(
        (p) =>
          (!category || p.category === category) &&
          (!query.trim() || `${p.title} ${p.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())),
      ),
    [category, query],
  )
  const [featured, ...rest] = filtering ? [null, ...visible] : visible
  const list = filtering ? visible : rest

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-44">
        <section className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Blog</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Ideas on building <span className="neon-text">better software.</span>
          </h1>
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
            Practical notes on engineering, AI, product and business from the Infortia team.
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((c) => {
              const active = (category ?? 'All') === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c === 'All' ? null : c)}
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
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-full border border-[#24113F]/15 bg-white px-5 py-3 text-sm text-volcanoWhite placeholder:text-zinc-500/70 focus:border-volcanoCrimson focus:outline-none focus:ring-4 focus:ring-volcanoCrimson/10 md:w-72"
          />
        </div>

        {featured && (
          <Link
            to={`/blog/${featured.slug}`}
            className="group mt-10 grid overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(36,17,63,0.05),0_20px_50px_-30px_rgba(109,40,217,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-30px_rgba(109,40,217,0.5)] md:grid-cols-2"
          >
            <Cover post={featured} index={0} className="min-h-[14rem] md:min-h-[20rem]" />
            <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Featured</p>
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-volcanoWhite transition-colors group-hover:text-volcanoCrimson sm:text-3xl">
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{featured.excerpt}</p>
              <p className="text-xs text-zinc-500">
                {formatDate(featured.date)} · {featured.readTime} min read
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-volcanoCrimson">
                Read article <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {list.map((post, i) => (
            <Reveal key={post.slug} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <Link
                to={`/blog/${post.slug}`}
                className="hud-card group flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1"
              >
                <Cover post={post} index={i + 1} className="aspect-[5/3]" />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold leading-snug text-volcanoWhite transition-colors group-hover:text-volcanoCrimson">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
                  <p className="text-xs text-zinc-500">
                    {formatDate(post.date)} · {post.readTime} min read
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {!visible.length && (
          <div className="hud-card mt-8 rounded-2xl p-10 text-center">
            <p className="font-semibold text-volcanoWhite">No articles match your search.</p>
            <p className="mt-1 text-sm text-zinc-400">Try a different keyword or category.</p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
