import { useState } from 'react'

const LONG = 130

// size: 'tall' | 'medium' | 'short' show a coloured header block of that height;
// 'text' is a header-less quote card with a large quote mark.
const HEADER_HEIGHT = { tall: 'h-60', medium: 'h-40', short: 'h-24' }

export default function StoryCard({ story }) {
  const [open, setOpen] = useState(false)
  const size = story.size ?? 'medium'
  const textOnly = size === 'text'
  const long = story.quote.length > LONG
  const initial = story.company.trim().charAt(0).toUpperCase()

  return (
    <article className="hud-card mb-6 break-inside-avoid overflow-hidden rounded-2xl">
      {!textOnly && (
        <div className={`relative flex items-center justify-center ${HEADER_HEIGHT[size]} ${story.tone}`}>
          {story.logo ? (
            <img src={story.logo} alt={story.company} className="max-h-16 w-auto max-w-[70%] object-contain" />
          ) : (
            <span className="flex items-center gap-3 text-volcanoWhite">
              <span
                className={`flex items-center justify-center rounded-xl bg-[#6D28D9] font-black text-white ${
                  size === 'short' ? 'h-9 w-9 text-base' : 'h-12 w-12 text-xl'
                }`}
              >
                {initial}
              </span>
              <span className={`font-bold tracking-tight ${size === 'tall' ? 'text-xl' : 'text-lg'}`}>{story.company}</span>
            </span>
          )}
          {story.placeholder && (
            <span className="absolute right-3 top-3 rounded-full border border-dashed border-[#6D28D9]/40 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-volcanoCrimson">
              Sample
            </span>
          )}
        </div>
      )}

      <div className={`space-y-5 p-6 sm:p-7 ${textOnly ? 'pt-8' : ''}`}>
        {textOnly && (
          <div className="flex items-center justify-between">
            <span className="text-6xl font-black leading-none text-[#6D28D9]/25" aria-hidden="true">
              &ldquo;
            </span>
            <span className="text-sm font-bold text-volcanoWhite">{story.company}</span>
          </div>
        )}
        <p
          className={`leading-relaxed text-volcanoWhite ${textOnly ? 'text-xl font-medium' : 'text-base'} ${
            open || !long ? '' : 'line-clamp-4'
          }`}
        >
          {textOnly ? story.quote : `“${story.quote}”`}
        </p>
        <div>
          <div className="font-semibold text-volcanoCrimson">{story.person}</div>
          <div className="text-xs text-zinc-400">{story.role}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[story.industry, story.product].map((tag) => (
            <span key={tag} className="rounded-full bg-[#F3EEFA] px-2.5 py-1 text-[11px] font-medium text-volcanoCrimson">
              {tag}
            </span>
          ))}
        </div>
        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-semibold text-volcanoWhite underline underline-offset-4 transition-colors hover:text-volcanoCrimson"
          >
            {open ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}
