export default function ProjectCard({ proj, index }) {
  return (
    <div className="group border border-white/5 bg-[#141414]/40 p-5 sm:p-6 rounded-3xl hover:border-volcanoCrimson/40 hover:bg-white/[0.01] transition-all duration-500 flex flex-col justify-between min-h-[300px] sm:min-h-[350px]">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between font-mono text-zinc-500">
          <span className="text-[9px] sm:text-[10px] tracking-wider uppercase bg-zinc-900/50 px-2 py-1 sm:px-2.5 sm:py-1 rounded border border-zinc-800">
            BLOCK_{String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-volcanoPeach font-bold tracking-tight font-sans text-sm sm:text-base">
            {proj.price}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-black text-volcanoWhite group-hover:text-volcanoCrimson transition-colors tracking-tight leading-snug">
          {proj.name}
        </h3>
        <div className="space-y-1 sm:space-y-1.5">
          <div className="text-[8px] sm:text-[9px] font-mono text-volcanoOrange uppercase tracking-wider">
            // Problem Architecture
          </div>
          <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">{proj.problem}</p>
        </div>
      </div>
      <div className="space-y-4 pt-4 border-t border-zinc-900/50 mt-5 sm:mt-6">
        <div className="flex flex-wrap gap-1.5 font-mono text-[8px] sm:text-[9px]">
          {proj.stack.map((tech) => (
            <span key={tech} className="bg-volcanoBlack px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded border border-zinc-800 text-zinc-500">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] pt-1">
          <span className="font-mono text-zinc-600 text-[8px] sm:text-2xs shrink-0">ASSETS // CORES</span>
          <div className="flex items-center gap-2">
            <a
              href={`https://demo.bnsone.com/${proj.url}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 sm:h-8 items-center justify-center rounded-lg border border-volcanoCrimson/30 bg-volcanoCrimson/5 px-2.5 sm:px-3 font-mono text-[9px] sm:text-2xs font-bold uppercase tracking-wider text-volcanoCrimson hover:bg-volcanoCrimson hover:text-volcanoWhite transition-all whitespace-nowrap"
            >
              {proj.buyUrl ? 'Preview' : 'Live Target'}
            </a>
            {proj.buyUrl && (
              <a
                href={proj.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 sm:h-8 items-center justify-center rounded-lg bg-linear-to-r from-volcanoCrimson to-volcanoOrange px-2.5 sm:px-3 font-mono text-[9px] sm:text-2xs font-bold uppercase tracking-wider text-volcanoWhite hover:opacity-90 transition-all whitespace-nowrap"
              >
                Buy Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
