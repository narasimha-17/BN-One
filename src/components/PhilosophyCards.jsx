import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

// Each card: a front plus three swipe panels (title, short text, glossy illustration).
// To use a real photo on a panel, save it in public/philosophy/ and set image: '/philosophy/your-file.png'.
const ITEMS = [
  {
    key: 'values',
    title: 'Values',
    body: 'Five values guide how we build and how we treat clients.',
    to: '/about',
    cta: 'Read our story',
    panels: [
      { title: 'Building Trust', art: 'shield', text: 'Trust is the base of every project. We give honest timelines, flag risks early and keep our word on scope.' },
      { title: 'Aiming True', art: 'target', text: 'We agree what success looks like before we start, then measure ourselves against it.' },
      { title: 'Built to Last', art: 'cube', text: 'We write clean, documented code and plan for the day after launch, so your software keeps running.' },
    ],
  },
  {
    key: 'approach',
    title: 'Our approach',
    body: 'A small, hands-on team. The people who scope your project build it.',
    to: '/how-we-work',
    cta: 'See how we work',
    panels: [
      { title: 'One Team', art: 'chat', text: 'You talk directly to the people building your product, with no layers between you and the work.' },
      { title: 'Progress You Can See', art: 'rocket', text: 'We work in short cycles, with something reviewable every few days instead of a big reveal at the end.' },
      { title: 'Clear Layers', art: 'layers', text: 'Plain-language updates and a simple plan, so you always know what is done and what comes next.' },
    ],
  },
  {
    key: 'innovation',
    title: 'Innovation',
    body: 'We turn new ideas into working software with the right tool for each problem.',
    to: '/services',
    cta: 'Explore services',
    panels: [
      { title: 'The Right Tool', art: 'gear', text: 'We stay language agnostic and choose the technology that fits your problem, not the one we like best.' },
      { title: 'Start Small', art: 'bulb', text: 'We prove an idea on a small scope first, see what it saves, and only then build it out.' },
      { title: 'Practical AI', art: 'spark', text: 'We add AI where it saves real time, with a person in the loop until the results are trusted.' },
    ],
  },
]


// A regular 8-tooth gear outline, centred at (60, 60), generated so every tooth is identical.
const GEAR = (() => {
  const teeth = 8
  const rOuter = 46
  const rInner = 36
  const step = (Math.PI * 2) / teeth
  const pts = []
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    // each tooth: rise, flat top, fall, then a flat valley
    const offsets = [
      [-0.26, rInner],
      [-0.13, rOuter],
      [0.13, rOuter],
      [0.26, rInner],
    ]
    offsets.forEach(([o, r]) => pts.push([60 + r * Math.cos(a + o * step * 1.6), 60 + r * Math.sin(a + o * step * 1.6)]))
  }
  return `M${pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`
})()

// Front-of-card line icons (two-tone).
function LineIcon({ kind }) {
  const id = `li-${kind}`
  return (
    <svg viewBox="0 0 96 96" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24" aria-hidden="true">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="10" y1="8" x2="88" y2="90">
          <stop offset="0" stopColor="#6D28D9" />
          <stop offset="0.55" stopColor="#5B7CE6" />
          <stop offset="1" stopColor="#00C9B7" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`}>
        {kind === 'values' && (
          <>
            <path d="M30 28L38 16H58L66 28L48 52Z" />
            <path d="M30 28H66M40 16L44 28L48 52L52 28L56 16" />
            <path d="M48 5V9M35 8l2 3.5M61 8l-2 3.5" />
            <path d="M14 62H26V82H14Z" />
            <path d="M26 66L38 63C44 62 50 63 54 67L72 67C77 67 79 72 74 75L58 82C52 85 44 85 38 81L26 80" />
            <path d="M42 70H58" />
          </>
        )}
        {kind === 'approach' && (
          <>
            <path d="M48 12L74 27V57L48 72L22 57V27Z" />
            <circle cx="48" cy="12" r="4.5" />
            <circle cx="74" cy="27" r="4.5" />
            <circle cx="74" cy="57" r="4.5" />
            <circle cx="48" cy="72" r="4.5" />
            <circle cx="22" cy="57" r="4.5" />
            <circle cx="22" cy="27" r="4.5" />
            <circle cx="48" cy="42" r="15" />
            <circle cx="48" cy="38" r="5" />
            <path d="M39 51C40 46 44 44.5 48 44.5C52 44.5 56 46 57 51" />
            <path d="M48 76V88M40 88H56" />
          </>
        )}
        {kind === 'innovation' && (
          <>
            <path d="M48 14A22 22 0 0 0 35 54C37 55.5 38 58 38 61V64H58V61C58 58 59 55.5 61 54A22 22 0 0 0 48 14Z" />
            <path d="M40 70H56M43 76H53" />
            <circle cx="48" cy="36" r="6" />
            <path d="M48 26V29M48 43V46M38 36H41M55 36H58M41 29L43 31M53 41L55 43M55 29L53 31M41 43L43 41" />
            <path d="M48 3V8M20 13L24 17M76 13L72 17M8 36H13M83 36H88" />
          </>
        )}
      </g>
    </svg>
  )
}

// Glossy 3D-style illustrations: gradient body, soft shadow and a white highlight.
function Glossy({ art }) {
  const grad = (id, a, b) => (
    <linearGradient id={`${art}-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={a} />
      <stop offset="1" stopColor={b} />
    </linearGradient>
  )
  const u = (id) => `url(#${art}-${id})`
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <defs>
        {grad('p', '#8B5CF6', '#4F46E5')}
        {grad('t', '#5EEAD4', '#0EA5A5')}
        {grad('b', '#60A5FA', '#3B5BDB')}
        {grad('d', '#4C2A8C', '#24113F')}
      </defs>
      <ellipse cx="60" cy="110" rx="34" ry="6" fill="#24113F" opacity="0.14" />
      {art === 'shield' && (
        <>
          <path d="M60 10L100 24V56C100 80 82 96 60 104C38 96 20 80 20 56V24Z" fill={u('t')} />
          <path d="M60 10L100 24V56C100 80 82 96 60 104Z" fill="#0EA5A5" opacity="0.35" />
          <path d="M40 58L54 72L82 42" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M30 26L60 15" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
        </>
      )}
      {art === 'target' && (
        <>
          <circle cx="60" cy="60" r="46" fill={u('b')} />
          <circle cx="60" cy="60" r="33" fill="#fff" />
          <circle cx="60" cy="60" r="22" fill={u('p')} />
          <circle cx="60" cy="60" r="10" fill="#fff" />
          <path d="M60 60L96 24" stroke="#24113F" strokeWidth="5" strokeLinecap="round" />
          <path d="M88 16L98 26L86 28Z" fill="#00C9B7" />
          <path d="M28 36A40 40 0 0 1 50 20" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.6" fill="none" />
        </>
      )}
      {art === 'cube' && (
        <>
          <path d="M60 12L100 34V78L60 100L20 78V34Z" fill={u('p')} />
          <path d="M60 56L100 34V78L60 100Z" fill="#4C1D95" opacity="0.55" />
          <path d="M60 56L20 34L60 12L100 34Z" fill="#A78BFA" />
          <path d="M60 56V100" stroke="#fff" strokeWidth="3" opacity="0.35" />
          <path d="M30 36L58 22" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          <circle cx="60" cy="56" r="8" fill="#5EEAD4" />
        </>
      )}
      {art === 'chat' && (
        <>
          <path d="M20 26H78A10 10 0 0 1 88 36V64A10 10 0 0 1 78 74H46L30 88V74H20A10 10 0 0 1 10 64V36A10 10 0 0 1 20 26Z" fill={u('p')} />
          <path d="M58 48H104A10 10 0 0 1 114 58V82A10 10 0 0 1 104 92H96V104L82 92H58A10 10 0 0 1 48 82V58A10 10 0 0 1 58 48Z" fill={u('t')} />
          <circle cx="32" cy="50" r="4.5" fill="#fff" />
          <circle cx="48" cy="50" r="4.5" fill="#fff" />
          <circle cx="64" cy="50" r="4.5" fill="#fff" />
          <circle cx="68" cy="70" r="4" fill="#fff" />
          <circle cx="82" cy="70" r="4" fill="#fff" />
          <circle cx="96" cy="70" r="4" fill="#fff" />
          <path d="M22 34H56" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        </>
      )}
      {art === 'rocket' && (
        <>
          <path d="M60 8C82 22 88 52 80 80H40C32 52 38 22 60 8Z" fill={u('b')} />
          <path d="M60 8C82 22 88 52 80 80H60Z" fill="#2B3FB4" opacity="0.4" />
          <circle cx="60" cy="44" r="12" fill="#fff" />
          <circle cx="60" cy="44" r="7" fill={u('t')} />
          <path d="M40 66L22 86L42 82ZM80 66L98 86L78 82Z" fill={u('p')} />
          <path d="M48 84H72L60 108Z" fill="#00C9B7" />
          <path d="M46 26C52 16 58 12 60 12" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.6" fill="none" />
        </>
      )}
      {art === 'layers' && (
        <>
          <path d="M60 68L100 86L60 104L20 86Z" fill={u('d')} />
          <path d="M60 46L100 64L60 82L20 64Z" fill={u('t')} />
          <path d="M60 24L100 42L60 60L20 42Z" fill={u('p')} />
          <path d="M28 40L58 26" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        </>
      )}
      {art === 'gear' && (
        <>
          <path d={GEAR} fill={u('p')} />
          <path d={GEAR} fill="none" stroke="#4C1D95" strokeOpacity="0.25" strokeWidth="2" />
          <circle cx="60" cy="60" r="22" fill="#fff" />
          <circle cx="60" cy="60" r="12" fill={u('t')} />
          <path d="M30 32A44 44 0 0 1 56 20" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.6" fill="none" />
        </>
      )}
      {art === 'bulb' && (
        <>
          <path d="M60 8A34 34 0 0 0 40 70C44 74 46 78 46 84H74C74 78 76 74 80 70A34 34 0 0 0 60 8Z" fill={u('p')} />
          <path d="M60 8A34 34 0 0 1 80 70C76 74 74 78 74 84H60Z" fill="#4C1D95" opacity="0.3" />
          <rect x="46" y="88" width="28" height="9" rx="4.5" fill="#24113F" />
          <rect x="50" y="100" width="20" height="8" rx="4" fill="#24113F" opacity="0.7" />
          <path d="M42 30A22 22 0 0 1 58 16" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.65" fill="none" />
          <path d="M52 60L60 46L68 60" stroke="#5EEAD4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="16" cy="30" r="4" fill="#00C9B7" />
          <circle cx="104" cy="30" r="4" fill="#00C9B7" />
          <circle cx="10" cy="60" r="4" fill="#00C9B7" />
          <circle cx="110" cy="60" r="4" fill="#00C9B7" />
        </>
      )}
      {art === 'spark' && (
        <>
          <path d="M60 6L74 44L112 58L74 72L60 110L46 72L8 58L46 44Z" fill={u('p')} />
          <path d="M60 6L74 44L112 58L74 72L60 58Z" fill="#4C1D95" opacity="0.35" />
          <path d="M60 22L68 46" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
          <circle cx="94" cy="24" r="10" fill={u('t')} />
          <circle cx="24" cy="96" r="8" fill={u('b')} />
        </>
      )}
    </svg>
  )
}

const TOTAL = 4 // front + three panels

function Arrow({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

function Card({ c, index }) {
  const [slide, setSlide] = useState(0)
  const go = (n) => setSlide(Math.max(0, Math.min(TOTAL - 1, n)))

  return (
    <Reveal
      style={{ transitionDelay: `${index * 90}ms` }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(36,17,63,0.05),0_16px_36px_-22px_rgba(109,40,217,0.3)] transition-shadow duration-500 hover:shadow-[0_34px_60px_-28px_rgba(109,40,217,0.5)]"
    >
      <div className="flex w-[400%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: `translateX(-${slide * 25}%)` }}>
        {/* Front */}
        <div className="flex min-h-[23rem] w-1/4 flex-col items-center px-6 pb-8 pt-8 text-center" aria-hidden={slide !== 0}>
          <LineIcon kind={c.key} />
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-volcanoWhite">{c.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{c.body}</p>
          <button
            type="button"
            tabIndex={slide === 0 ? 0 : -1}
            onClick={() => go(1)}
            aria-label={`Swipe to learn more about ${c.title}`}
            className="mt-4 flex h-10 w-10 items-center justify-center self-end rounded-full border border-volcanoCrimson/30 text-volcanoCrimson transition-all duration-300 hover:border-transparent hover:bg-volcanoCrimson hover:text-white group-hover:translate-x-1"
          >
            <Arrow d="M5 12h14M13 6l6 6-6 6" />
          </button>
        </div>

        {/* Three swipe panels */}
        {c.panels.map((p, i) => {
          const n = i + 1
          const active = slide === n
          const last = n === TOTAL - 1
          return (
            <div
              key={p.title}
              className="relative flex min-h-[23rem] w-1/4 flex-col bg-gradient-to-br from-[#F3EEFA] via-[#EAF1FB] to-[#BFEDE6] px-7 pb-8 pt-8"
              aria-hidden={slide !== n}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-volcanoWhite">{p.title}</h3>
              <p className="mt-3 max-w-[16rem] text-[15px] leading-relaxed text-volcanoWhite">{p.text}</p>
              <div className="pointer-events-none absolute bottom-8 left-5 h-32 w-32">
                {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-contain" /> : <Glossy art={p.art} />}
              </div>
              {last && (
                <Link to={c.to} tabIndex={active ? 0 : -1} className="absolute bottom-24 right-7 whitespace-nowrap text-sm font-semibold text-volcanoCrimson hover:underline">
                  {c.cta} →
                </Link>
              )}
              <div className="mt-auto flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  tabIndex={active ? 0 : -1}
                  onClick={() => go(n - 1)}
                  aria-label={`Previous panel of ${c.title}`}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-volcanoCrimson/30 bg-white/70 text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white"
                >
                  <Arrow d="M19 12H5M11 6l-6 6 6 6" />
                </button>
                {!last && (
                  <button
                    type="button"
                    tabIndex={active ? 0 : -1}
                    onClick={() => go(n + 1)}
                    aria-label={`Next panel of ${c.title}`}
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-volcanoCrimson text-white transition-colors hover:bg-[#24113F]"
                  >
                    <Arrow d="M5 12h14M13 6l6 6-6 6" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots sit over the card, so there is no white strip below it */}
      <div role="tablist" aria-label={`${c.title} panels`} className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={slide === i}
            aria-label={`Panel ${i + 1} of ${TOTAL}`}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${slide === i ? 'w-6 bg-volcanoCrimson' : 'w-1.5 bg-zinc-700/40 hover:bg-volcanoCrimson/60'}`}
          />
        ))}
      </div>
    </Reveal>
  )
}

export default function PhilosophyCards() {
  return (
    <section className="mx-auto mt-20 max-w-5xl space-y-10 md:mt-28" aria-label="Our philosophy">
      <h2 className="text-center text-3xl font-extrabold tracking-tighter sm:text-4xl">Our philosophy</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {ITEMS.map((c, i) => (
          <Card key={c.key} c={c} index={i} />
        ))}
      </div>
    </section>
  )
}
