import { useEffect, useRef, useState } from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const pad = (n) => String(n).padStart(2, '0')
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`

function todayLocal() {
  const t = new Date()
  return iso(t.getFullYear(), t.getMonth(), t.getDate())
}

export default function DatePicker({ id, value, min, onChange, inputClass }) {
  const start = value ? new Date(`${value}T00:00:00`) : new Date()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState({ y: start.getFullYear(), m: start.getMonth() })
  const ref = useRef(null)
  const today = todayLocal()
  const minDate = min || today

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey, true)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey, true)
    }
  }, [open])

  const shift = (step) =>
    setView(({ y, m }) => {
      const d = new Date(y, m + step, 1)
      return { y: d.getFullYear(), m: d.getMonth() }
    })

  const first = new Date(view.y, view.m, 1).getDay()
  const count = new Date(view.y, view.m + 1, 0).getDate()
  const cells = [...Array(first).fill(null), ...Array.from({ length: count }, (_, i) => i + 1)]
  const atMin = iso(view.y, view.m, count) < minDate || iso(view.y, view.m, 1) <= minDate.slice(0, 8) + '01'

  const label = value
    ? new Date(`${value}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Select a date'

  const navButtons = [
    { step: -1, aria: 'Previous month', d: 'M15 6l-6 6 6 6', disabled: atMin },
    { step: 1, aria: 'Next month', d: 'M9 6l6 6-6 6', disabled: false },
  ]

  return (
    <div ref={ref} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`${inputClass} flex items-center justify-between text-left ${value ? '' : 'text-zinc-500/70'}`}
      >
        {label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-volcanoCrimson" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose a date"
          className="absolute left-0 top-full z-20 mt-2 w-full min-w-[18rem] overflow-hidden rounded-2xl border border-[#24113F]/10 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(36,17,63,0.4)]"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold text-volcanoWhite">
              {MONTHS[view.m]} {view.y}
            </span>
            <div className="flex gap-1">
              {navButtons.map((n) => (
                <button
                  key={n.aria}
                  type="button"
                  disabled={n.disabled}
                  aria-label={n.aria}
                  onClick={() => shift(n.step)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-volcanoCrimson transition-colors hover:bg-[#F3EEFA] disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d={n.d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-7 text-center">
            {DAYS.map((d) => (
              <span key={d} className="pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                {d}
              </span>
            ))}
            {cells.map((day, i) => {
              if (!day) return <span key={`e${i}`} />
              const date = iso(view.y, view.m, day)
              const disabled = date < minDate
              const selected = date === value
              let cls = 'font-medium text-volcanoWhite hover:bg-[#F3EEFA]'
              if (date === today) cls += ' ring-1 ring-volcanoCrimson/50'
              if (disabled) cls = 'cursor-not-allowed text-zinc-500/40'
              if (selected) cls = 'bg-volcanoCrimson font-bold text-white shadow-[0_8px_18px_-8px_rgba(109,40,217,0.8)]'
              return (
                <button
                  key={date}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(date)
                    setOpen(false)
                  }}
                  className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${cls}`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex justify-between border-t border-[#24113F]/10 pt-3 text-sm font-semibold">
            <button
              type="button"
              onClick={() => {
                onChange('')
                setOpen(false)
              }}
              className="text-zinc-500 hover:text-volcanoCrimson"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => {
                onChange(today)
                setOpen(false)
              }}
              className="text-volcanoCrimson hover:underline"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
