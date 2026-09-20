import { useEffect, useRef, useState } from 'react'
import { useTheme, toggleTheme } from '../lib/theme.js'
import { useConsent, setConsent } from '../lib/consent.js'
import { LANGUAGES, setLanguage, currentLanguage } from '../lib/translate.js'

const iconBtn =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-zinc-400 transition-colors hover:border-volcanoCrimson/40 hover:text-volcanoCrimson'

export function ThemeToggle() {
  const theme = useTheme()
  const dark = theme === 'dark'
  return (
    <button type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'} className={iconBtn}>
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

export function LanguageSwitcher() {
  const consent = useConsent()
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(null)
  const [error, setError] = useState('')
  const [active, setActive] = useState(currentLanguage())
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const apply = async (code) => {
    setError('')
    try {
      await setLanguage(code)
      setActive(code)
      setPending(null)
      setOpen(false)
    } catch {
      setError('Translation is unavailable right now. Please try again later.')
    }
  }

  const choose = (code) => {
    if (code !== 'en' && !consent.translation) {
      setPending(code)
      return
    }
    apply(code)
  }

  const allow = () => {
    setConsent({ translation: true })
    apply(pending)
  }

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Change language" title="Language" className={iconBtn}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-[#24113F]/10 bg-white p-2 shadow-[0_30px_70px_-20px_rgba(36,17,63,0.35)]">
          {pending ? (
            <div className="space-y-3 p-3">
              <p className="text-sm font-semibold text-volcanoWhite">Allow translation?</p>
              <p className="text-xs leading-relaxed text-zinc-400">
                Translation uses Google Translate, an outside service that may receive your IP address and set its own cookie. You can change this anytime in Cookie settings.
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={allow} className="neon-btn h-9 flex-1 rounded-full text-xs font-bold">
                  Allow and translate
                </button>
                <button type="button" onClick={() => setPending(null)} className="h-9 rounded-full px-3 text-xs font-semibold text-zinc-500 hover:text-volcanoCrimson">
                  Cancel
                </button>
              </div>
              {error && <p className="text-xs text-volcanoCrimson">{error}</p>}
            </div>
          ) : (
            <>
              <ul role="listbox" aria-label="Languages" className="max-h-72 overflow-y-auto">
                {LANGUAGES.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active === l.code}
                      onClick={() => choose(l.code)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#F3EEFA] ${
                        active === l.code ? 'font-semibold text-volcanoCrimson' : 'text-volcanoWhite'
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-xs text-zinc-500">{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
              {error && <p className="px-3 py-2 text-xs text-volcanoCrimson">{error}</p>}
            </>
          )}
        </div>
      )}
    </div>
  )
}
