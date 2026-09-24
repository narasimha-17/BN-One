import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { HIRING_EMAIL, departments, jobTypes, roles, reasons, process } from '../data/careers.js'

const ICON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-6 w-6',
  'aria-hidden': true,
}

const REASON_ICONS = [
  <svg key="own" {...ICON}>
    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
  </svg>,
  <svg key="proj" {...ICON}>
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
  </svg>,
  <svg key="lang" {...ICON}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>,
  <svg key="team" {...ICON}>
    <path d="M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 20v-1a4 4 0 0 0-3-3.87M15 5.13a3 3 0 0 1 0 5.74" />
  </svg>,
]

const applyHref = (title) =>
  `mailto:${HIRING_EMAIL}?subject=${encodeURIComponent(`Application: ${title}`)}&body=${encodeURIComponent(
    'Hi Agentosys team,\n\nI would like to apply for this role.\n\nName:\nLinkedIn / GitHub / Portfolio:\nCV: (attached)\n\nA few lines about me:\n',
  )}`

function RoleItem({ role, open, onToggle }) {
  const panelId = `role-${role.id}`
  return (
    <div className={`border-b border-[#24113F]/10 transition-colors ${open ? 'bg-[#F3EEFA]/60' : 'hover:bg-[#F3EEFA]/40'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-6 px-4 py-6 text-left sm:px-6"
      >
        <span className="min-w-0 space-y-1.5">
          <span className="block text-lg font-bold text-volcanoWhite transition-colors group-hover:text-volcanoCrimson sm:text-xl">
            {role.title}
          </span>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
            <span>{role.department}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-zinc-500/50" />
            <span>{role.type}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-zinc-500/50" />
            <span>{role.location}</span>
          </span>
        </span>
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-90 border-transparent bg-volcanoCrimson text-white'
              : 'border-[#24113F]/15 text-volcanoCrimson group-hover:border-transparent group-hover:bg-volcanoCrimson group-hover:text-white'
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-label={`${role.title} details`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 px-4 pb-8 sm:px-6">
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{role.summary}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ['What you will do', role.responsibilities],
                ['What we look for', role.requirements],
              ].map(([heading, items]) => (
                <div key={heading} className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{heading}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-volcanoWhite">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-volcanoCrimson" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href={applyHref(role.title)} className="neon-btn inline-flex h-11 items-center gap-2 rounded-full px-7 text-sm font-bold">
              Apply for this role <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Careers() {
  usePageTitle('Careers — Agentosys')
  const [department, setDepartment] = useState(null)
  const [type, setType] = useState(null)
  const [openId, setOpenId] = useState(null)
  const [query, setQuery] = useState('')

  const visible = useMemo(
    () =>
      roles.filter(
        (r) =>
          (!department || r.department === department) &&
          (!type || r.type === type) &&
          (!query.trim() || `${r.title} ${r.department} ${r.summary}`.toLowerCase().includes(query.trim().toLowerCase())),
      ),
    [department, type, query],
  )

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-28 sm:px-6 md:pt-36">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-16 sm:px-12 md:py-24">
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#6D28D9]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#00D4C4]/25 blur-3xl" />
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-50 400C260 280 500 500 800 380S1100 240 1260 320" stroke="white" strokeOpacity="0.08" strokeWidth="1.2" />
            <path d="M-50 460C270 350 520 560 820 440S1120 310 1260 380" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
          </svg>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4C4] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4C4]" />
                </span>
                We&apos;re hiring
              </span>
              <h1 className="text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl">
                Build what&apos;s next <span className="neon-text-light">with us.</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                We are a small, hands-on team building software for real businesses. Join us and do the best work of
                your career.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href="#roles" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-[#24113F] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]">
                  See open roles
                </a>
                <a
                  href={applyHref('General application')}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Send your CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                [String(roles.length), 'Open roles'],
                [String(departments.length), 'Teams'],
                ['Hyderabad', 'Based in'],
              ].map(([value, label], i) => (
                <div key={label} className={`min-w-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur transition-colors hover:bg-white/10 sm:px-5 sm:py-4 ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <div className="text-xl font-extrabold text-white sm:text-3xl">{value}</div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/55 sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why join */}
        <section className="space-y-12 py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Why Agentosys</p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">
              A place to grow, build and be heard.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <Reveal
                key={reason.title}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="hud-card group rounded-2xl p-6 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EEFA] text-volcanoCrimson transition-colors duration-300 group-hover:bg-volcanoCrimson group-hover:text-white">
                  {REASON_ICONS[i]}
                </span>
                <h3 className="mt-5 text-lg font-bold text-volcanoWhite">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{reason.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Open roles */}
        <section id="roles" className="scroll-mt-28 space-y-10 border-t border-zinc-900/60 py-16 md:py-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">Find your role</h2>
            <div className="relative max-w-2xl">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles by title or keyword"
                aria-label="Search roles"
                className="w-full rounded-full border border-[#24113F]/15 bg-white py-4 pl-14 pr-6 text-sm text-volcanoWhite placeholder:text-zinc-500/70 transition focus:border-volcanoCrimson focus:outline-none focus:ring-4 focus:ring-volcanoCrimson/10"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Filters</span>
                {(department || type || query) && (
                  <button
                    type="button"
                    onClick={() => {
                      setDepartment(null)
                      setType(null)
                      setQuery('')
                    }}
                    className="text-sm font-semibold text-volcanoCrimson underline underline-offset-4"
                  >
                    Clear all
                  </button>
                )}
              </div>
              {[
                ['Team', departments, department, setDepartment],
                ['Job type', jobTypes, type, setType],
              ].map(([title, options, value, setter]) => (
                <fieldset key={title} className="space-y-3">
                  <legend className="mb-3 text-lg font-bold text-volcanoWhite">{title}</legend>
                  {options.map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-volcanoWhite">
                      <input
                        type="checkbox"
                        checked={value === option}
                        onChange={() => setter(value === option ? null : option)}
                        className="h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-700 accent-[#6D28D9]"
                      />
                      <span className={value === option ? 'font-semibold text-volcanoCrimson' : ''}>{option}</span>
                    </label>
                  ))}
                </fieldset>
              ))}
            </div>

            <div aria-live="polite">
              <p className="mb-2 text-sm text-zinc-500">
                {visible.length} {visible.length === 1 ? 'role' : 'roles'} found
              </p>
              <div className="border-t border-[#24113F]/10">
                {visible.map((role) => (
                  <RoleItem
                    key={role.id}
                    role={role}
                    open={openId === role.id}
                    onToggle={() => setOpenId(openId === role.id ? null : role.id)}
                  />
                ))}
              </div>
              {!visible.length && (
                <div className="hud-card mt-4 rounded-2xl p-10 text-center">
                  <p className="font-semibold text-volcanoWhite">
                    {roles.length ? 'No roles match these filters.' : 'No open roles right now.'}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {roles.length
                      ? 'Try clearing a filter, or send us a general application below.'
                      : 'Send us a general application and we will keep you in mind.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hiring process */}
        <section className="space-y-12 border-t border-zinc-900/60 py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">How we hire</p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">
              A simple, respectful process.
            </h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-4">
            {process.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="hud-card relative rounded-2xl p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-volcanoCrimson text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-volcanoWhite">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* General application */}
        <section className="py-8 md:py-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-12 text-center sm:px-10 md:py-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#6D28D9]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#00D4C4]/25 blur-3xl" />
            <div className="relative mx-auto max-w-xl space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
                Don&apos;t see the right role?
              </h2>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                We are always happy to meet talented people. Tell us what you do best and how you could help, and we
                will reach out when there is a fit.
              </p>
              <a
                href={applyHref('General application')}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-[#24113F] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]"
              >
                Send a general application
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
