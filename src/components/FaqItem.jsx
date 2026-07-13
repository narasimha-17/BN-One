export default function FaqItem({ q, a }) {
  return (
    <details className="group bg-zinc-950/20 border border-zinc-900 rounded-xl overflow-hidden shadow-sm">
      <summary className="flex items-center justify-between p-5 text-sm font-bold text-zinc-200 cursor-pointer list-none select-none hover:bg-zinc-900/20">
        <span>{q}</span>
        <svg
          className="w-4 h-4 text-zinc-500 transition-transform duration-300 ease-out shrink-0 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed bg-zinc-950/10 border-t border-zinc-900/40 pt-3">
        {a}
      </div>
    </details>
  )
}
