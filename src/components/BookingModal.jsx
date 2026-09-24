import { useEffect, useState } from 'react'
import DatePicker from './DatePicker.jsx'
import { submitEnquiry } from '../lib/enquiry.js'
import useSpeechToText from '../hooks/useSpeechToText.js'

const GREETING = 'Welcome to Agentosys. How can I help you? Please enter your details to confirm your slot.'

const FEMALE_VOICE_HINTS = [
  'female',
  'zira',
  'samantha',
  'victoria',
  'karen',
  'moira',
  'tessa',
  'fiona',
  'susan',
  'google us english',
]

function pickFemaleVoice() {
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  return (
    voices.find((v) => v.lang.startsWith('en') && FEMALE_VOICE_HINTS.some((h) => v.name.toLowerCase().includes(h))) ||
    voices.find((v) => v.lang.startsWith('en')) ||
    voices[0]
  )
}

const SLOTS = [
  { id: '20-21', label: '8:00 PM – 9:00 PM' },
  { id: '21-22', label: '9:00 PM – 10:00 PM' },
]

const CONTACT_EMAIL = 'bnst17042006@gmail.com'

function todayISO() {
  const t = new Date()
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`
}

export default function BookingModal({ open, onClose }) {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [idea, setIdea] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [stored, setStored] = useState(false)

  const speech = useSpeechToText({
    onResult: (transcript) => setIdea((prev) => (prev ? `${prev} ${transcript}` : transcript)),
  })

  useEffect(() => {
    if (!open || !window.speechSynthesis) return

    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(GREETING)
      const voice = pickFemaleVoice()
      if (voice) utterance.voice = voice
      utterance.pitch = 1.1
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
    }

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', speak, { once: true })
    } else {
      speak()
    }

    return () => {
      window.speechSynthesis.cancel()
      window.speechSynthesis.removeEventListener('voiceschanged', speak)
    }
  }, [open])

  if (!open) return null

  const reset = () => {
    setDate('')
    setSlot('')
    setCompany('')
    setEmail('')
    setIdea('')
    setError('')
    setSent(false)
    setSending(false)
    setStored(false)
  }

  const handleClose = () => {
    speech.stop()
    reset()
    onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!date || !slot || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please pick a date, a time slot, and enter a valid email.')
      return
    }
    setError('')
    setSending(true)

    const slotLabel = SLOTS.find((s) => s.id === slot)?.label
    const fields = { date, timeSlot: slotLabel, company: company || '(not provided)', email, idea: idea || '(no details provided)' }
    const subject = encodeURIComponent('New Consultation Booking Request')
    const body = encodeURIComponent(
      `Date: ${date}\nTime slot: ${slotLabel}\nCompany: ${fields.company}\nContact email: ${email}\n\nIdea:\n${fields.idea}`,
    )
    const result = await submitEnquiry('Consultation booking', fields, `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`)
    setSending(false)
    if (!result.ok) {
      setError('Sorry, we could not send your request. Please try again, or email us directly.')
      return
    }
    setStored(result.stored)
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-[#24113F]/10 bg-[#FAF8F4] px-4 py-3 text-sm text-volcanoWhite placeholder:text-zinc-500/70 transition focus:border-volcanoCrimson focus:bg-white focus:outline-none focus:ring-4 focus:ring-volcanoCrimson/10'
  const labelClass = 'text-[11px] font-semibold uppercase tracking-widest text-zinc-500'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#24113F]/60 p-0 backdrop-blur-md sm:items-center sm:p-4"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a free consultation"
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[94vh] w-full overflow-hidden rounded-t-3xl bg-white shadow-[0_40px_100px_-30px_rgba(36,17,63,0.6)] sm:max-w-3xl sm:rounded-3xl md:grid-cols-[17rem_1fr]"
      >
        {/* Brand panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-[#24113F] p-8 md:flex">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#6D28D9]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#00D4C4]/25 blur-3xl" />
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 270 600"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-20 430C60 380 120 470 200 420S260 380 300 400" stroke="white" strokeOpacity="0.08" strokeWidth="1.2" />
            <path d="M-20 480C70 430 130 520 210 470S270 430 300 450" stroke="white" strokeOpacity="0.05" strokeWidth="1.2" />
          </svg>

          <div className="relative space-y-6">
            <img src="/logo-on-dark.svg" alt="Agentosys" className="h-9 w-auto object-contain object-left" />
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/55">Schedule a meeting</p>
              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white">
                Book a free consultation
              </h3>
              <p className="text-sm leading-relaxed text-white/65">Evening slots only, 8:00 PM – 10:00 PM.</p>
            </div>
          </div>

          <ul className="relative space-y-4 text-sm text-white/80">
            {['Free, no obligation', 'Tell us your idea in a few words', 'We confirm your slot by email'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#00D4C4]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M5 12l4.5 4.5L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form panel */}
        <div className="relative overflow-y-auto p-6 sm:p-8">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-[#F3EEFA] hover:text-volcanoCrimson"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {sent ? (
            <div className="flex min-h-[20rem] flex-col items-center justify-center space-y-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#6D28D9] to-[#00D4C4] text-white shadow-[0_16px_32px_-12px_rgba(109,40,217,0.6)]">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-volcanoWhite">Request sent</h3>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                {stored
                  ? "Thanks, we have received your request. We'll confirm your slot by email shortly."
                  : "Your mail app should now be open with the booking details ready to send. We'll confirm your slot by email shortly."}
              </p>
              <button onClick={handleClose} className="neon-btn h-12 w-full max-w-xs rounded-full text-sm font-bold">
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 space-y-1 md:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-volcanoCrimson">Schedule a meeting</p>
                <h3 className="text-2xl font-extrabold tracking-tight text-volcanoWhite">Book a free consultation</h3>
                <p className="text-sm text-zinc-400">Evening slots only, 8:00 PM – 10:00 PM.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 pt-1 md:pt-6">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="booking-date">Date</label>
                  <DatePicker id="booking-date" value={date} min={todayISO()} onChange={setDate} inputClass={inputClass} />
                </div>

                <div className="space-y-2">
                  <span className={labelClass}>Time slot</span>
                  <div className="grid grid-cols-2 gap-3">
                    {SLOTS.map((s) => {
                      const active = slot === s.id
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setSlot(s.id)}
                          aria-pressed={active}
                          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-all ${
                            active
                              ? 'border-volcanoCrimson bg-[#F3EEFA] text-volcanoCrimson shadow-[0_8px_20px_-12px_rgba(109,40,217,0.6)]'
                              : 'border-[#24113F]/10 bg-[#FAF8F4] text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
                          }`}
                        >
                          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>
                          {s.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="booking-company">Company</label>
                    <input
                      id="booking-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company or startup"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="booking-email">Email</label>
                    <input
                      id="booking-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <label className={`${labelClass} flex items-center gap-2`} htmlFor="booking-idea">
                      <svg className="h-3.5 w-3.5 text-volcanoCrimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.5.5.8 1 .9 1.5h6.2c.1-.5.4-1 .9-1.5A6 6 0 0 0 12 3z"
                        />
                      </svg>
                      Your idea
                    </label>
                    {speech.supported && (
                      <button
                        type="button"
                        onClick={speech.toggle}
                        aria-label={speech.listening ? 'Stop voice input' : 'Start voice input'}
                        className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold transition-all ${
                          speech.listening
                            ? 'border-volcanoCrimson bg-[#F3EEFA] text-volcanoCrimson'
                            : 'border-[#24113F]/10 text-zinc-500 hover:border-volcanoCrimson/40 hover:text-volcanoCrimson'
                        }`}
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          {speech.listening && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volcanoCrimson opacity-75" />
                          )}
                          <span
                            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${speech.listening ? 'bg-volcanoCrimson' : 'bg-zinc-600'}`}
                          />
                        </span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm-7-3a7 7 0 0 0 14 0M12 19v3"
                          />
                        </svg>
                        {speech.listening ? 'Listening' : 'Voice'}
                      </button>
                    )}
                  </div>
                  <textarea
                    id="booking-idea"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    rows={3}
                    placeholder="Tell us briefly what you're building, or use voice above..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p role="alert" className="rounded-xl border border-volcanoCrimson/20 bg-[#F3EEFA] px-4 py-3 text-xs font-medium text-volcanoCrimson">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={sending} className="neon-btn h-12 w-full rounded-full text-sm font-bold disabled:opacity-60">
                  {sending ? 'Sending…' : 'Confirm booking'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
