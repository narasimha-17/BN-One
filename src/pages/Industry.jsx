import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import {
  services,
  serviceIcons,
  stack,
  projects,
  industries,
} from '../data/industryData.js'

export default function Industry() {
  usePageTitle('Industries We Build For — BN ONE')
  const scrollBarRef = useRef(null)
  const cursorGlowRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      if (scrollBarRef.current) scrollBarRef.current.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const onMove = (e) => {
      const glow = cursorGlowRef.current
      if (!glow) return
      glow.style.opacity = '1'
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="antialiased relative bg-volcanoBlack text-white font-sans">
      <div id="scroll-bar" ref={scrollBarRef} />
      <div id="cursor-glow" ref={cursorGlowRef} className="hidden md:block" />

      <Navbar />

      <header className="min-h-[100svh] flex flex-col justify-center items-center px-4 sm:px-6 relative pt-20">
        <div className="max-w-4xl text-center reveal in">
          <span className="text-orange-500 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 block">
            Elite Architectural Logic
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[7rem] font-black tracking-tighter leading-[1] md:leading-[0.9] mb-6 sm:mb-10 gradient-text">
            ENGINEERING
            <br />
            EXCELLENCE.
          </h1>
          <p className="text-zinc-500 text-sm md:text-lg max-w-xl mx-auto mb-8 sm:mb-12 px-2">
            We architect high-concurrency systems, secure infrastructure, and scalable digital
            foundations for the world's most demanding enterprises — across healthcare, commerce,
            travel, finance, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap w-full sm:w-auto">
            <button className="px-8 sm:px-10 py-4 bg-white text-black font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all w-full sm:w-auto">
              Initiate Project
            </button>
            <a
              href="#industries"
              className="px-8 sm:px-10 py-4 border border-white/10 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              See Industries
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal as="h2" className="text-3xl md:text-5xl font-black mb-12 md:mb-20 tracking-tighter">
          Operational Capabilities
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s) => (
            <Reveal
              key={s}
              className="p-6 sm:p-8 glass hover-glow rounded-3xl min-h-[160px] sm:min-h-[200px] flex flex-col justify-between border border-white/5"
            >
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--volcanoOrange)"
                  strokeWidth="1.6"
                  dangerouslySetInnerHTML={{ __html: serviceIcons[s] }}
                />
              </span>
              <h3 className="font-bold text-xs sm:text-sm tracking-widest uppercase mt-4 sm:mt-6">{s}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="industries" className="py-16 md:py-32 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4 block">
                // Sector Deployment Ledger
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Industries We Build For.</h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm">
              Every vertical runs on different constraints — compliance, latency, trust. We tailor
              the architecture to the industry, not the other way around. Tap a sector for
              specifics.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {industries.map((ind, idx) => (
              <IndustryCard key={ind.key} industry={ind} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal as="h2" className="text-3xl md:text-5xl font-black mb-12 md:mb-20">
            Technology Stack
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6">
            {stack.map((s) => (
              <Reveal
                key={s}
                className="p-4 sm:p-6 glass rounded-2xl text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest"
              >
                {s}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal as="h2" className="text-3xl md:text-5xl font-black mb-12 md:mb-20">
          Selected Works
        </Reveal>
        <div className="space-y-4 sm:space-y-6">
          {projects.map((p) => (
            <Reveal
              key={p.t}
              className="glass hover-glow p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 border border-white/5"
            >
              <div>
                <span className="text-orange-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">
                  {p.s}
                </span>
                <h3 className="text-2xl md:text-4xl font-black mt-2">{p.t}</h3>
              </div>
              <p className="text-zinc-500 text-sm sm:max-w-xs sm:text-right">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <footer id="contact" className="py-16 md:py-32 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <svg className="logo-mark" width="26" height="26" viewBox="0 0 40 40" fill="none">
                <path d="M20 3 L35 33 L5 33 Z" fill="#FF7A18" />
                <path d="M20 14 L28 33 L12 33 Z" fill="#0a0a0a" opacity="0.55" />
                <circle cx="20" cy="9" r="2.3" fill="#FFD4B8" />
              </svg>
              <h3 className="text-xl sm:text-2xl font-black">BNS ONE</h3>
            </div>
            <p className="text-zinc-600 text-sm">
              Architecting resilient digital futures with precision-engineered infrastructure,
              tuned to the industry it serves.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm sm:text-base">Solutions</h4>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>Cloud</li>
                <li>Security</li>
                <li>AI</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm sm:text-base">Industries</h4>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>Healthcare</li>
                <li>E-Commerce</li>
                <li>Travel</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm sm:text-base">Contact</h4>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>bnst17042006@gmail.com</li>
                <li>Hyderabad</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
