import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.includes('@') && email.length > 5) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-16 md:py-20 border-t border-zinc-900/60">
      <div className="rounded-[2rem] md:rounded-3xl border border-zinc-800 bg-[#141414]/60 p-6 sm:p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-volcanoOrange/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-volcanoOrange/30 bg-volcanoOrange/5 px-3 py-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volcanoOrange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-volcanoOrange" />
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-volcanoPeach">
                // DISPATCH_FEED
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tighter text-volcanoWhite">
              Not Ready to Book Yet?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Get build breakdowns, new capability drops, and early access to slots — straight to
              your inbox, no spam pipeline.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 font-mono text-[11px] sm:text-xs text-volcanoWhite focus:border-volcanoOrange focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="h-11 sm:h-auto w-full sm:w-auto bg-volcanoWhite hover:bg-volcanoOrange hover:text-white text-volcanoBlack font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase px-6 rounded-xl transition-all whitespace-nowrap flex items-center justify-center"
              >
                Subscribe
              </button>
            </div>
            <div
              className={`font-mono text-[9px] sm:text-[10px] flex items-center justify-center sm:justify-start gap-2 transition-colors ${
                status === 'success'
                  ? 'text-emerald-400'
                  : status === 'error'
                    ? 'text-volcanoCrimson'
                    : 'text-zinc-600'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  status === 'success'
                    ? 'bg-emerald-400'
                    : status === 'error'
                      ? 'bg-volcanoCrimson'
                      : 'bg-zinc-700'
                }`}
              />
              <span>
                {status === 'success'
                  ? 'SUCCESS: You are on the dispatch feed.'
                  : status === 'error'
                    ? 'ERROR: Invalid communication endpoint.'
                    : 'No spam. Unsubscribe anytime.'}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
