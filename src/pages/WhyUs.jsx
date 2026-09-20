import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import PhilosophyCards from '../components/PhilosophyCards.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Icon paths (24x24, stroke-based), one per reason.
const I = {
  founder: 'M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8 9.5 8z',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  cycle: 'M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4',
  chat: 'M4 5h16v11H9l-5 4z',
  scope: 'M4 4h16v16H4zM4 9h16M9 9v11',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  shield: 'M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6zM9 12l2 2 4-4',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
  chip: 'M7 7h10v10H7zM10 10h4v4h-4zM12 2v3M12 19v3M2 12h3M19 12h3',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  doc: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6',
  unlock: 'M6 11h12v9H6zM9 11V7a3 3 0 0 1 5.7-1.3',
  support: 'M4 13v-1a8 8 0 0 1 16 0v1M4 13h3v5H4zM17 13h3v5h-3zM17 18a4 4 0 0 1-4 3h-2',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  access: 'M12 4a2 2 0 1 0 0-.01M5 8h14M12 8v6M8 21l4-7 4 7',
  people: 'M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 20v-1a4 4 0 0 0-3-3.87M15 5.13a3 3 0 0 1 0 5.74',
}

const REASONS = [
  ['founder', 'Founder-led delivery'],
  ['code', 'Language agnostic'],
  ['cycle', 'Short build cycles'],
  ['chat', 'Plain-language updates'],
  ['scope', 'Clear, agreed scope'],
  ['eye', 'Reviewable progress every few days'],
  ['shield', 'Secure by default'],
  ['bolt', 'Fast, responsive interfaces'],
  ['chip', 'AI and data expertise'],
  ['layers', 'Experience across industries'],
  ['doc', 'Clean, documented code'],
  ['unlock', 'No vendor lock-in'],
  ['support', 'Support after launch'],
  ['clock', 'Honest timelines'],
  ['access', 'Accessible design'],
  ['people', 'Direct access to the team'],
]

function Icon({ name, className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={I[name]} />
    </svg>
  )
}

export default function WhyUs() {
  usePageTitle('Why Infortia — Infortia')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-44">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Why us?</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Why teams choose <span className="neon-text">Infortia.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A small, hands-on team that builds the way we would want our own software built: clear, honest and made to last.
          </p>
        </section>

        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-[#24113F]/10 bg-white md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-5 [&>*]:border-b [&>*]:border-r [&>*]:border-[#24113F]/10">
            {REASONS.map(([icon, label]) => (
              <div
                key={label}
                className="group flex flex-col items-center justify-center gap-5 px-4 py-9 text-center transition-colors duration-300 hover:bg-[#F3EEFA]"
              >
                <span className="text-volcanoCrimson transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#00B3A6]">
                  <Icon name={icon} />
                </span>
                <span className="text-[15px] font-medium leading-snug text-volcanoWhite">{label}</span>
              </div>
            ))}

            <div className="col-span-2 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#F3EEFA] via-white to-[#E7F8F6] px-6 py-12 text-center md:col-start-2 md:row-span-2 md:row-start-2">
              <span className="text-volcanoCrimson">
                <Icon name="founder" className="h-16 w-16" />
              </span>
              <p className="max-w-xs text-xl font-semibold leading-snug text-volcanoWhite">
                Built by a small, hands-on team in Hyderabad
              </p>
              <Link to="/leadership" className="text-sm font-semibold text-volcanoCrimson hover:underline">
                Meet the team →
              </Link>
            </div>
          </div>
        </Reveal>

        <PhilosophyCards />

        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <Link to="/how-we-work" className="neon-btn inline-flex h-12 items-center rounded-full px-8 text-sm font-bold">
            See how we work
          </Link>
          <Link
            to="/#contact"
            className="inline-flex h-12 items-center rounded-full border border-volcanoCrimson/30 px-8 text-sm font-bold text-volcanoCrimson transition-colors hover:bg-[#F3EEFA]"
          >
            Talk to us
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
