import Navbar from '../components/Navbar.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { team } from '../data/teamData.js'

export default function About() {
  usePageTitle('About — BN ONE')
  return (
    <div className="relative bg-volcanoBlack text-volcanoWhite antialiased font-sans selection:bg-volcanoCrimson/30 selection:text-volcanoPeach min-h-[100dvh] overflow-x-hidden">
      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-volcanoCrimson/10 to-volcanoOrange/5 blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-30%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-volcanoOrange/5 to-transparent blur-[160px] pointer-events-none z-0" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-32 md:pt-48 pb-20 md:pb-32 space-y-16 md:space-y-20">
        <section className="max-w-2xl space-y-4 text-center md:text-left mx-auto md:mx-0">
          <div className="text-xs font-bold tracking-widest text-volcanoCrimson uppercase">
            // Command Origin
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-volcanoWhite">
            Built By People, Not a Committee.
          </h1>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            BNS ONE is run by a small, hands-on team — every engagement is built and reviewed
            personally, not routed through a queue of contractors.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((person) => (
            <div
              key={person.name}
              className="border border-white/5 bg-[#141414]/40 p-6 sm:p-8 rounded-3xl space-y-5 hover:border-white/10 transition-colors"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center text-3xl font-black text-volcanoBlack`}
              >
                {person.initial}
              </div>
              <div>
                <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${person.accent}`}>
                  {person.role}
                </div>
                <h3 className="text-xl font-black text-volcanoWhite">{person.name}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </section>

        <section id="contact" className="pt-4">
          <div className="rounded-[2rem] md:rounded-3xl border border-zinc-800 bg-[#141414]/80 p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-volcanoWhite">
              Want to Work With Us?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:bnst17042006@gmail.com"
                className="px-6 py-3 rounded-xl border border-zinc-800 bg-volcanoBlack/40 hover:border-volcanoCrimson/50 hover:text-volcanoCrimson transition-all text-xs font-bold uppercase tracking-widest"
              >
                bnst17042006@gmail.com
              </a>
              <a
                href="tel:+919381472064"
                className="px-6 py-3 rounded-xl border border-zinc-800 bg-volcanoBlack/40 hover:border-volcanoOrange/50 hover:text-volcanoOrange transition-all text-xs font-bold uppercase tracking-widest"
              >
                +91 9381472064
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-volcanoBlack relative z-10 mt-10 sm:mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-medium text-zinc-600 tracking-wide text-center sm:text-left">
          <div>&copy; 2026 BNS ONE &bull; One Vision. Infinite Possibilities.</div>
        </div>
      </footer>
    </div>
  )
}
