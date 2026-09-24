import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { legal, LAST_UPDATED, CONTACT_EMAIL } from '../data/legal.js'
import { openCookieSettings } from '../lib/consent.js'

const NAV = [
  ['privacy', 'Privacy Policy', '/privacy'],
  ['terms', 'Terms of Use', '/terms'],
  ['cookies', 'Cookie Policy', '/cookies'],
]

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export default function Legal({ kind }) {
  const page = legal[kind]
  usePageTitle(`${page.title} — Agentosys`)

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 md:pt-44">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Legal</p>
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">{page.title}</h1>
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">{page.intro}</p>
          <p className="text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>
          {kind === 'cookies' && (
            <button type="button" onClick={openCookieSettings} className="neon-btn mt-2 inline-flex h-11 items-center rounded-full px-7 text-sm font-bold">
              Open cookie settings
            </button>
          )}
          <div className="accent-line h-1 w-24 rounded-full" />
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[15rem_1fr]">
          <aside className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
            <nav aria-label="Legal pages" className="space-y-1">
              {NAV.map(([key, label, to]) => (
                <Link
                  key={key}
                  to={to}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    key === kind
                      ? 'bg-[#F3EEFA] font-semibold text-volcanoCrimson'
                      : 'text-zinc-400 hover:bg-[#F3EEFA]/60 hover:text-volcanoWhite'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <nav aria-label="On this page" className="hidden space-y-2 border-t border-zinc-900/60 pt-6 lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">On this page</p>
              {page.sections.map((s) => (
                <a key={s.heading} href={`#${slugify(s.heading)}`} className="block text-sm text-zinc-400 transition-colors hover:text-volcanoCrimson">
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl space-y-10">
            {page.sections.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-volcanoWhite">{s.heading}</h2>
                {s.body?.map((para) => (
                  <p key={para} className="text-base leading-[1.8] text-zinc-400">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="space-y-3">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-[1.7] text-zinc-400">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-volcanoCrimson" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="hud-card space-y-2 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-volcanoWhite">Questions?</h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                Contact Agentosys, Hyderabad, India at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-volcanoCrimson hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
