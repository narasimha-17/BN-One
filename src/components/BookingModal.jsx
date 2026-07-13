import { useEffect, useState } from 'react'
import useSpeechToText from '../hooks/useSpeechToText.js'

const GREETING = 'Welcome to BN One. How can I help you? Please enter your details to confirm your slot.'

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
  return new Date().toISOString().split('T')[0]
}

export default function BookingModal({ open, onClose }) {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [idea, setIdea] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

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
  }

  const handleClose = () => {
    speech.stop()
    reset()
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!date || !slot || !email.includes('@')) {
      setError('Please pick a date, a time slot, and enter a valid email.')
      return
    }
    setError('')

    const slotLabel = SLOTS.find((s) => s.id === slot)?.label
    const subject = encodeURIComponent('New Consultation Booking Request')
    const body = encodeURIComponent(
      `Date: ${date}\nTime slot: ${slotLabel}\nCompany: ${company || '(not provided)'}\nContact email: ${email}\n\nIdea:\n${idea || '(no details provided)'}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-zinc-800 bg-[#141414] p-5 sm:p-8 space-y-5 sm:space-y-6 relative shadow-[0_40px_100px_-30px_rgba(230,57,70,0.25)]"
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-zinc-500 hover:text-volcanoCrimson transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="text-center space-y-4 py-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-volcanoWhite">Request Sent</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your mail app should now be open with the booking details ready to send. We'll
              confirm your slot by email shortly.
            </p>
            <button
              onClick={handleClose}
              className="w-full h-11 rounded-xl bg-volcanoWhite text-volcanoBlack text-xs font-bold uppercase tracking-widest hover:bg-volcanoCrimson hover:text-white transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold tracking-widest text-volcanoCrimson uppercase">
                // Schedule Meeting
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-volcanoWhite">Book Free Consultation</h3>
              <p className="text-xs text-zinc-400">Evening slots only, 8:00 PM – 10:00 PM.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={todayISO()}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 text-xs text-volcanoWhite focus:border-volcanoCrimson focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SLOTS.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSlot(s.id)}
                      className={`min-h-11 px-2 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border transition-all leading-tight ${
                        slot === s.id
                          ? 'border-volcanoCrimson bg-volcanoCrimson/10 text-volcanoWhite'
                          : 'border-zinc-800 bg-volcanoBlack text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company or startup name"
                  className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 text-xs text-volcanoWhite focus:border-volcanoCrimson focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 text-xs text-volcanoWhite focus:border-volcanoCrimson focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    <svg className="w-3.5 h-3.5 text-volcanoOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.5.5.8 1 .9 1.5h6.2c.1-.5.4-1 .9-1.5A6 6 0 0 0 12 3z"
                      />
                    </svg>
                    Drop your idea
                  </label>
                  {speech.supported && (
                    <button
                      type="button"
                      onClick={speech.toggle}
                      aria-label={speech.listening ? 'Stop voice input' : 'Start voice input'}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-mono uppercase tracking-wider transition-all ${
                        speech.listening
                          ? 'border-volcanoCrimson bg-volcanoCrimson/10 text-volcanoCrimson'
                          : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                      }`}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        {speech.listening && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volcanoCrimson opacity-75" />
                        )}
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${speech.listening ? 'bg-volcanoCrimson' : 'bg-zinc-600'}`}
                        />
                      </span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={3}
                  placeholder="Tell us briefly what you're building, or use voice above..."
                  className="w-full bg-volcanoBlack border border-zinc-800 rounded-xl px-4 py-3 text-xs text-volcanoWhite focus:border-volcanoCrimson focus:outline-none transition-colors resize-none"
                />
              </div>

              {error && <p className="text-[11px] text-volcanoCrimson">{error}</p>}

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-volcanoWhite text-volcanoBlack text-xs font-bold uppercase tracking-widest hover:bg-volcanoCrimson hover:text-white transition-all"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
