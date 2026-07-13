import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { industryIcons } from '../data/industryData.js'

export default function IndustryCard({ industry, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal
      as="div"
      className={`industry-card glass hover-glow rounded-3xl p-5 sm:p-7 border border-white/5 ${open ? 'open' : ''}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="var(--volcanoOrange)"
              stroke="var(--volcanoOrange)"
              strokeWidth="0.4"
              dangerouslySetInnerHTML={{ __html: industryIcons[industry.key] }}
            />
          </span>
          <div>
            <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
              Sector {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-base sm:text-lg font-black tracking-tight">{industry.title}</h3>
          </div>
        </div>
        <svg
          className="chev shrink-0 mt-1 text-zinc-500 w-4 h-4 sm:w-5 sm:h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <p className="text-zinc-500 text-xs sm:text-sm mt-4 leading-relaxed">{industry.blurb}</p>
      <div className="industry-detail">
        <ul className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-white/5 space-y-2.5 text-[11px] sm:text-xs text-zinc-400">
          {industry.items.map((i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
