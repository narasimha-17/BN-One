import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { team } from '../data/teamData.js'

const PORTRAIT_BG = [
  'from-[#EAE2F7] to-[#F3EEFA]',
  'from-[#7c5ce0] to-[#c4b5f5]',
  'from-[#F3EEFA] to-[#e3dcee]',
]

function Silhouette() {
  return (
    <svg viewBox="0 0 200 240" className="absolute bottom-0 left-1/2 h-[82%] -translate-x-1/2" aria-hidden="true">
      <circle cx="100" cy="78" r="42" fill="#24113F" fillOpacity="0.16" />
      <path d="M12 240c0-56 38-88 88-88s88 32 88 88z" fill="#24113F" fillOpacity="0.16" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3V9.75zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.85h-4v-5.2c0-1.24-.02-2.83-1.72-2.83-1.73 0-2 1.35-2 2.74v5.29h-4V9.75z" />
    </svg>
  )
}

export default function Leadership() {
  usePageTitle('Leadership — Agentosys')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-28 sm:px-6 md:pt-36">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EAE2F7] via-[#F3EEFA] to-white px-6 py-16 sm:px-12 md:py-24">
          <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#6D28D9]/25 blur-3xl" />
          <svg
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 md:block"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="290" cy="150" r="60" stroke="#6D28D9" strokeOpacity="0.35" />
            <circle cx="290" cy="150" r="105" stroke="#6D28D9" strokeOpacity="0.22" />
            <circle cx="290" cy="150" r="150" stroke="#6D28D9" strokeOpacity="0.14" />
            <circle cx="290" cy="150" r="9" fill="#6D28D9" />
            <circle cx="235" cy="62" r="6" fill="#6D28D9" fillOpacity="0.7" />
            <circle cx="352" cy="208" r="6" fill="#6D28D9" fillOpacity="0.7" />
          </svg>
          <div className="relative max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Leadership</p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">
              Led by people who build.
            </h1>
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              A small, hands-on team. Every engagement is built and reviewed personally, not routed through a
              queue of contractors.
            </p>
          </div>
        </section>

        {/* Leaders */}
        <section className="pt-16 md:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Meet Our Leaders</h2>
          </div>
          <div className="mt-8 h-[3px] w-full rounded-full bg-gradient-to-r from-[#6D28D9] via-[#4FB3E8] to-[#00D4C4]" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person, i) => (
              <Reveal
                key={person.name}
                style={{ transitionDelay: `${i * 90}ms` }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(36,17,63,0.05),0_12px_30px_-16px_rgba(109,40,217,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_60px_-24px_rgba(109,40,217,0.6)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${PORTRAIT_BG[i % PORTRAIT_BG.length]} transition-transform duration-700 ease-out group-hover:scale-110`}
                  >
                    {person.photo ? (
                      <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      <Silhouette />
                    )}
                  </div>

                  {/* Name bar (default state) */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#24113F] via-[#24113F]/85 to-transparent px-6 pb-6 pt-24 transition-opacity duration-500 lg:group-hover:opacity-0">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{person.name}</h3>
                      <p className="mt-0.5 text-sm text-white/70">{person.role}</p>
                    </div>
                    <a
                      href={person.linkedin || 'https://www.linkedin.com'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#24113F] transition-colors hover:bg-[#0A66C2] hover:text-white"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  {/* Hover state: photo stays visible, bio slides up over a bottom gradient */}
                  <div className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-[#24113F] via-[#24113F]/90 to-transparent p-7 pt-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:flex">
                    <p className="translate-y-3 text-sm leading-relaxed text-white/90 transition-transform duration-500 group-hover:translate-y-0">
                      {person.bio}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{person.name}</h3>
                        <p className="mt-0.5 text-sm text-white/70">{person.role}</p>
                      </div>
                      <a
                        href={person.linkedin || 'https://www.linkedin.com'}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#24113F] transition-colors hover:bg-[#0A66C2] hover:text-white"
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio below the card on screens without hover */}
                <p className="p-6 text-sm leading-relaxed text-zinc-400 lg:hidden">{person.bio}</p>
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
