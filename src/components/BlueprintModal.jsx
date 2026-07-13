import { blueprintSteps } from '../data/homeData.js'

export default function BlueprintModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-zinc-800 bg-[#141414] p-5 sm:p-8 space-y-6 sm:space-y-8 relative shadow-[0_40px_100px_-30px_rgba(230,57,70,0.25)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-zinc-500 hover:text-volcanoCrimson transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center justify-between gap-4 font-mono text-[9px] sm:text-[10px] text-zinc-500 border-b border-zinc-900/60 pb-3 sm:pb-4">
          <span>REGISTRY_ID: BNS_BLUEPRINT_CORE</span>
          <span className="text-volcanoCrimson font-bold">STATUS: LIVE</span>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] font-mono font-bold tracking-widest text-volcanoCrimson uppercase">
            // Delivery Pipeline
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-volcanoWhite">Process Blueprint</h3>
          <p className="text-xs text-zinc-400">Discovery → Architecture → Build → Deploy → SLA.</p>
        </div>

        <div className="relative pl-8 sm:pl-10 space-y-8 sm:space-y-10">
          <div className="absolute left-[9px] sm:left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-volcanoCrimson via-volcanoOrange to-volcanoPeach opacity-30" />

          {blueprintSteps.map((step, i) => (
            <div key={step.phase} className="relative">
              <span
                className={`absolute -left-8 sm:-left-10 top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full ${step.dot} ring-4 ${step.ring} flex items-center justify-center text-[9px] sm:text-[10px] font-black text-volcanoBlack`}
              >
                {i + 1}
              </span>

              <div className="flex items-center justify-between font-mono text-zinc-500 mb-1.5">
                <span className="text-[9px] sm:text-[10px] tracking-wider">// {step.phase}</span>
                <span className={`${step.color} font-bold text-[9px] sm:text-[10px] tracking-wider uppercase`}>
                  {step.duration}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-volcanoWhite">
                {step.title}
                <span className="ml-2 text-xs font-semibold text-zinc-500">{step.tag}</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mt-1.5">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="pt-2 sm:pt-4 border-t border-zinc-900/60">
          <button
            onClick={onClose}
            className="w-full h-12 rounded-xl bg-volcanoWhite text-volcanoBlack text-xs font-bold uppercase tracking-widest hover:bg-volcanoCrimson hover:text-white transition-all"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  )
}
