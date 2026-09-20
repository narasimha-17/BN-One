import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { serviceCatalog } from '../data/serviceCatalog.js'

export default function ServiceCatalog() {
  return (
    <section id="what-we-offer" className="space-y-10 pb-16 md:space-y-12 md:pb-24">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">What we offer</p>
        <h2 className="text-3xl font-extrabold tracking-tighter text-volcanoWhite sm:text-4xl">Our services</h2>
        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">Five areas, from AI to security. Pick a service to see how we approach it.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {serviceCatalog.map((cat, i) => (
          <Reveal
            key={cat.title}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            className={`hud-card group flex flex-col gap-5 rounded-3xl p-7 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3EEFA] text-volcanoCrimson transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#4FB3E8] group-hover:to-[#00D4C4] group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  <path d={cat.icon} />
                </svg>
              </span>
              <h3 className="text-xl font-bold tracking-tight text-volcanoWhite">{cat.title}</h3>
            </div>
            <ul className="space-y-1 border-t border-zinc-900/60 pt-4">
              {cat.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="group/item flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm font-semibold text-volcanoWhite transition-colors hover:bg-[#F3EEFA] hover:text-volcanoCrimson"
                  >
                    {item.name}
                    <span aria-hidden="true" className="text-volcanoCrimson opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
