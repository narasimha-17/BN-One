import { useState } from 'react'
import { submitEnquiry } from '../lib/enquiry.js'

const CONTACT_EMAIL = 'contact@agentosys.in'
// Delivers the enquiry straight to CONTACT_EMAIL. Overridden by VITE_FORM_ENDPOINT if that is set.
const EMAIL_DELIVERY_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const EMPTY = { name: '', contact: '', email: '', message: '' }
const MESSAGE_MAX = 1000

// Decorative background curves (viewBox 1200 x 500)
const CTA_LINES = [
  'M-50 400C260 280 500 500 800 380S1100 240 1260 320',
  'M-50 460C270 350 520 560 820 440S1120 310 1260 380',
]

const ICON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-[18px] w-[18px]',
  'aria-hidden': true,
}

const ICONS = {
  name: (
    <svg {...ICON}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  ),
  contact: (
    <svg {...ICON}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  email: (
    <svg {...ICON}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  message: (
    <svg {...ICON}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
    </svg>
  ),
}

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60'

function inputClass(invalid) {
  return `w-full rounded-xl border bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/35 transition-all duration-200 hover:bg-white/[0.07] focus:bg-white/[0.08] focus:outline-none focus-visible:outline-none focus:ring-4 ${
    invalid
      ? 'border-[#FF8A8A]/70 focus:border-[#FF8A8A] focus:ring-[#FF8A8A]/15'
      : 'border-white/10 focus:border-[#00D4C4]/70 focus:ring-[#00D4C4]/15'
  }`
}

function Field({ id, label, icon, invalid, children, tall }) {
  return (
    <div className="space-y-2">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <div className="group/field relative">
        <span
          className={`pointer-events-none absolute left-4 ${tall ? 'top-[15px]' : 'top-1/2 -translate-y-1/2'} text-white/40 transition-colors duration-200 group-focus-within/field:text-[#00D4C4] ${
            invalid ? '!text-[#FF8A8A]' : ''
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  )
}

export default function ContactSection({ onBook }) {
  const [values, setValues] = useState(EMPTY)
  const [error, setError] = useState({ field: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [stored, setStored] = useState(false)

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (error.field === key) setError({ field: '', message: '' })
  }

  const fail = (field, message) => {
    setError({ field, message })
    document.getElementById(`contact-${field}`)?.focus()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))
    const digits = data.contact.replace(/\D/g, '')

    if (!data.name) return fail('name', 'Please enter your name.')
    if (digits.length < 7 || digits.length > 15 || !/^[\d\s()+\-.]+$/.test(data.contact))
      return fail('contact', 'Please enter a valid contact number.')
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return fail('email', 'Please enter a valid email address.')
    if (!data.message) return fail('message', 'Please tell us a little about your requirement.')

    setError({ field: '', message: '' })
    setSending(true)

    const subject = encodeURIComponent(`New enquiry from ${data.name}`)
    const body = encodeURIComponent(
      `Name: ${data.name}\nContact: ${data.contact}\nEmail: ${data.email}\n\nRequirement:\n${data.message}`,
    )
    const result = await submitEnquiry(
      'Contact enquiry',
      {
        name: data.name,
        contact: data.contact,
        email: data.email,
        message: data.message,
        // FormSubmit options (ignored by other form services)
        _subject: `New Agentosys enquiry from ${data.name}`,
        _replyto: data.email,
        _captcha: 'false',
        _template: 'table',
      },
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      EMAIL_DELIVERY_ENDPOINT,
    )
    setSending(false)

    if (!result.ok) {
      setError({
        field: '',
        message: `Sorry, we could not send your enquiry. Please try again, or email us at ${CONTACT_EMAIL}.`,
      })
      return
    }
    setStored(result.stored)
    setSent(true)
    setValues(EMPTY)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#24113F] px-6 py-12 sm:px-10 md:px-14 md:py-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#6D28D9]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-[#00D4C4]/25 blur-3xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cta-line-glow" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#6D28D9" />
              <stop offset="0.55" stopColor="#A78BFA" />
              <stop offset="1" stopColor="#00D4C4" />
            </linearGradient>
          </defs>
          <g className="cta-line-sway">
            {CTA_LINES.map((d, i) => (
              <g key={d}>
                <path d={d} stroke="white" strokeOpacity={i === 0 ? 0.08 : 0.05} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                <path
                  d={d}
                  pathLength="1000"
                  stroke="url(#cta-line-glow)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="cta-line-flow"
                  style={{ animationDuration: `${9 + i * 3}s`, animationDelay: `${-i * 4}s` }}
                />
              </g>
            ))}
          </g>
        </svg>

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              <span className="h-px w-8 bg-gradient-to-r from-[#00D4C4] to-transparent" aria-hidden="true" />
              Get in touch
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
              Let&apos;s Construct Something{' '}
              <span className="bg-gradient-to-r from-white via-[#D9CCFF] to-[#7FEFE6] bg-clip-text text-transparent">
                Memorable.
              </span>
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-white/70 md:text-base lg:mx-0">
              Partner with us to create premium interface platforms tailored precisely to secure
              absolute authority within your local industry sector.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row lg:justify-start">
              <button
                onClick={onBook}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-[#24113F] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]"
              >
                Book free consultation
              </button>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner p-6 sm:p-9">
              {sent ? (
                <div role="status" className="flex min-h-[26rem] flex-col items-center justify-center space-y-5 text-center">
                  <div className="contact-pop relative flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#00D4C4]/25 [animation-duration:2.4s]" />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00D4C4] text-white shadow-[0_20px_40px_-12px_rgba(109,40,217,0.7)]">
                      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="contact-rise text-2xl font-extrabold tracking-tight text-white [animation-delay:120ms]">
                    Thank you!
                  </h3>
                  <p className="contact-rise max-w-sm text-sm leading-relaxed text-white/70 [animation-delay:200ms]">
                    {stored
                      ? 'We have received your enquiry and will get back to you shortly.'
                      : 'Your mail app should now be open with your enquiry ready to send. We will get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="contact-rise inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition-all [animation-delay:280ms] hover:border-white/50 hover:bg-white/10"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7 space-y-1.5">
                    <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Tell us about your project</h3>
                    <p className="text-sm text-white/55">Share a few details and we will take it from there.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="contact-name" label="Name" icon={ICONS.name} invalid={error.field === 'name'}>
                        <input
                          id="contact-name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={set('name')}
                          aria-invalid={error.field === 'name'}
                          placeholder="Your full name"
                          className={inputClass(error.field === 'name')}
                        />
                      </Field>
                      <Field id="contact-contact" label="Contact number" icon={ICONS.contact} invalid={error.field === 'contact'}>
                        <input
                          id="contact-contact"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          value={values.contact}
                          onChange={set('contact')}
                          aria-invalid={error.field === 'contact'}
                          placeholder="+91 98765 43210"
                          className={inputClass(error.field === 'contact')}
                        />
                      </Field>
                    </div>

                    <Field id="contact-email" label="Email" icon={ICONS.email} invalid={error.field === 'email'}>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={set('email')}
                        aria-invalid={error.field === 'email'}
                        placeholder="you@company.com"
                        className={inputClass(error.field === 'email')}
                      />
                    </Field>

                    <Field id="contact-message" label="Your requirement" icon={ICONS.message} invalid={error.field === 'message'} tall>
                      <textarea
                        id="contact-message"
                        value={values.message}
                        onChange={set('message')}
                        rows={4}
                        maxLength={MESSAGE_MAX}
                        aria-invalid={error.field === 'message'}
                        placeholder="Tell us briefly what you need..."
                        className={`${inputClass(error.field === 'message')} resize-none`}
                      />
                      <span className="pointer-events-none absolute bottom-3 right-4 text-[10px] font-medium tabular-nums text-white/30">
                        {values.message.length}/{MESSAGE_MAX}
                      </span>
                    </Field>

                    {error.message && (
                      <p
                        role="alert"
                        className="contact-rise flex items-start gap-2.5 rounded-xl border border-[#FF8A8A]/25 bg-[#FF8A8A]/10 px-4 py-3 text-xs font-medium leading-relaxed text-[#FFC2C2]"
                      >
                        <svg className="mt-px h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8v5M12 16.5v.01" />
                        </svg>
                        {error.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="contact-submit group inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full px-8 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-70"
                    >
                      {sending ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send enquiry
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
