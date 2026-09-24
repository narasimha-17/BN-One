import { useState } from 'react'
import { submitEnquiry } from '../lib/enquiry.js'

const CONTACT_EMAIL = 'bnst17042006@gmail.com'

const PERKS = ['Build breakdowns and practical lessons', 'New capabilities as they launch', 'Early access to consultation slots']

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const subject = encodeURIComponent('Subscribe me to Agentosys updates')
    const body = encodeURIComponent(`Please add this address to your updates list: ${email}`)
    const result = await submitEnquiry('Newsletter signup', { email }, `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`)
    if (!result.ok) {
      setStatus('failed')
      return
    }
    setStatus(result.stored ? 'done' : 'sent')
    setEmail('')
  }

  return (
    <section id="newsletter" className="py-16 md:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#24113F]/10 bg-white px-6 py-12 shadow-[0_1px_2px_rgba(36,17,63,0.04),0_20px_50px_-30px_rgba(109,40,217,0.25)] sm:px-10 md:px-14 md:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#6D28D9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#6D28D9]/5 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-5 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6D28D9]">Stay in the loop</p>
            <h3 className="text-3xl font-extrabold leading-tight tracking-tighter text-[#24113F] sm:text-4xl">
              Not ready to book yet?
            </h3>
            <ul className="mx-auto max-w-sm space-y-3 text-left md:mx-0">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-[#6B6472]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3EEFA] text-[#6D28D9]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <path d="M5 12l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3 rounded-2xl border border-[#6D28D9]/15 bg-[#F3EEFA]/60 p-5 sm:p-6">
            <label htmlFor="newsletter-email" className="text-sm font-semibold text-[#6D28D9]">
              Get updates in your inbox
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status) setStatus(null)
                }}
                placeholder="you@company.com"
                aria-invalid={status === 'error'}
                className="h-12 w-full rounded-xl border border-[#6D28D9]/25 bg-white px-4 text-sm text-[#24113F] placeholder:text-[#6D28D9]/50 transition focus:border-[#6D28D9] focus:outline-none focus:ring-4 focus:ring-[#6D28D9]/15"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-[#6D28D9] px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#5b21b6]"
              >
                Subscribe
              </button>
            </div>
            <p
              role="status"
              className={`text-xs ${status === 'error' || status === 'failed' ? 'text-[#b42318]' : status === 'sent' || status === 'done' ? 'text-[#6D28D9]' : 'text-[#6B6472]'}`}
            >
              {status === 'done'
                ? 'Thanks, you are subscribed.'
                : status === 'failed'
                  ? 'Sorry, that did not go through. Please try again.'
                  : status === 'sending'
                    ? 'Sending…'
                    : status === 'sent'
                      ? 'Your email app should now be open. Press send to finish subscribing.'
                : status === 'error'
                  ? 'Please enter a valid email address.'
                  : 'No spam. Unsubscribe anytime.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
