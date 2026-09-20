const BARS = [38, 62, 48, 78, 56, 92, 68]

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6D28D9]/10 text-[#6D28D9]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
        <path d="M5 12l4.5 4.5L19 7" />
      </svg>
    </span>
  )
}

const BODIES = {
  PowerLens: (
    <div className="space-y-4">
      <div className="flex h-28 items-end gap-2.5">
        {BARS.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md bg-[#6D28D9] ${i === 5 ? 'opacity-100' : 'opacity-25'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['Signals', 'Trends', 'Alerts'].map((label) => (
          <div key={label} className="rounded-xl bg-[#F3EEFA] p-3">
            <div className="text-[10px] font-medium text-[#6B6472]">{label}</div>
            <div className="mt-2 h-1.5 w-2/3 rounded-full bg-[#6D28D9]/30" />
          </div>
        ))}
      </div>
    </div>
  ),
  VIBE: (
    <div className="space-y-4">
      <div className="rounded-xl bg-[#F3EEFA] p-3">
        <svg viewBox="0 0 300 80" className="h-24 w-full" fill="none" aria-hidden="true">
          <path d="M0 40C20 8 40 72 60 40S100 8 120 40 160 72 180 40 220 8 240 40 280 72 300 40" stroke="#6D28D9" strokeOpacity="0.25" strokeWidth="6" strokeLinecap="round" />
          <path d="M0 40C20 8 40 72 60 40S100 8 120 40 160 72 180 40 220 8 240 40 280 72 300 40" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex gap-2">
        {['Brand', 'Motion', 'Convert'].map((label, i) => (
          <span
            key={label}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${i === 0 ? 'bg-[#6D28D9] text-white' : 'bg-[#F3EEFA] text-[#6B6472]'}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  ),
  'Code Check': (
    <div className="space-y-2.5">
      {[70, 46, 82, 58].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-4 text-right font-mono text-[10px] text-[#6B6472]/70">{i + 1}</span>
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#F3EEFA] px-3 py-2.5">
            <div className="h-1.5 rounded-full bg-[#6D28D9]/60" style={{ width: `${w * 0.45}%` }} />
            <div className="h-1.5 rounded-full bg-[#24113F]/20" style={{ width: `${w * 0.3}%` }} />
          </div>
          <Check />
        </div>
      ))}
    </div>
  ),
  'Exam+': (
    <div className="flex items-center gap-6">
      <svg viewBox="0 0 80 80" className="h-24 w-24 shrink-0 -rotate-90" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="#F3EEFA" strokeWidth="9" />
        <circle cx="40" cy="40" r="32" stroke="#6D28D9" strokeWidth="9" strokeLinecap="round" strokeDasharray="201" strokeDashoffset="60" />
      </svg>
      <div className="flex-1 space-y-3">
        {[
          ['Study plan', 'w-4/5'],
          ['Practice', 'w-3/5'],
          ['Revision', 'w-2/5'],
        ].map(([label, width]) => (
          <div key={label} className="space-y-1.5">
            <div className="text-[10px] font-medium text-[#6B6472]">{label}</div>
            <div className="h-1.5 rounded-full bg-[#F3EEFA]">
              <div className={`h-full rounded-full bg-[#6D28D9] ${width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export default function ProductPreview({ name }) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#6D28D9]/15 to-transparent blur-2xl pointer-events-none" />
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-[#24113F]/8 bg-gradient-to-br from-[#F3EEFA] to-white p-6 sm:p-10">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#6D28D9]/10 blur-3xl" />
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#24113F]/10 bg-white shadow-[0_30px_60px_-30px_rgba(109,40,217,0.45)]">
          <div className="flex items-center gap-2 border-b border-[#24113F]/8 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3dcee]" />
            <span className="ml-3 text-[11px] font-semibold text-[#6B6472]">{name}</span>
          </div>
          <div className="p-5 sm:p-6">{BODIES[name]}</div>
        </div>
      </div>
    </div>
  )
}
