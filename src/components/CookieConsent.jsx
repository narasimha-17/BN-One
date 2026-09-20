import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useConsent,
  setConsent,
  openCookieSettings,
  closeCookieSettings,
  clearAllStoredData,
} from '../lib/consent.js'

const CATEGORIES = [
  {
    key: 'essential',
    title: 'Essential',
    locked: true,
    body: 'Keeps the site working: it remembers that you have seen the welcome screen, the launch countdown, and your cookie choice. Always on.',
  },
  {
    key: 'preferences',
    title: 'Preferences',
    body: 'Remembers your theme (light or dark) and chosen language for your next visit.',
  },
  {
    key: 'analytics',
    title: 'Analytics',
    body: 'Anonymous visit counts and page views (Plausible, no advertising and no cross-site tracking), so we can see what is useful.',
  },
  {
    key: 'translation',
    title: 'Translation (Google Translate)',
    body: 'Lets you read the site in other languages. This loads a Google service, which may receive your IP address and set its own cookie.',
  },
]

function Toggle({ on, locked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={locked}
      onClick={() => onChange(!on)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? 'bg-volcanoCrimson' : 'bg-zinc-700'} ${
        locked ? 'cursor-not-allowed opacity-60' : ''
      }`}
    >
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? 'left-6' : 'left-1'}`} />
    </button>
  )
}

function SettingsPanel({ consent }) {
  const [draft, setDraft] = useState({ preferences: consent.preferences, translation: consent.translation, analytics: Boolean(consent.analytics) })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeCookieSettings()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const save = (values) => {
    setConsent(values)
    closeCookieSettings()
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center bg-[#24113F]/60 p-0 backdrop-blur-md sm:items-center sm:p-4" onClick={closeCookieSettings}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie settings"
        onClick={(e) => e.stopPropagation()}
        className="hud-card max-h-[92vh] w-full max-w-xl space-y-6 overflow-y-auto rounded-t-3xl p-6 sm:rounded-3xl sm:p-8"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-volcanoWhite">Cookie settings</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Choose what this site may store on your device. We do not use advertising or tracking cookies. See our{' '}
            <Link to="/cookies" onClick={closeCookieSettings} className="font-semibold text-volcanoCrimson hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <ul className="space-y-3">
          {CATEGORIES.map((c) => (
            <li key={c.key} className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 p-4">
              <div className="space-y-1">
                <p className="font-semibold text-volcanoWhite">{c.title}</p>
                <p className="text-xs leading-relaxed text-zinc-400">{c.body}</p>
              </div>
              <Toggle
                label={c.title}
                locked={c.locked}
                on={c.locked ? true : draft[c.key]}
                onChange={(v) => setDraft((d) => ({ ...d, [c.key]: v }))}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => save(draft)} className="neon-btn h-11 flex-1 rounded-full text-sm font-bold">
            Save choices
          </button>
          <button
            type="button"
            onClick={() => save({ preferences: true, translation: true, analytics: true })}
            className="h-11 flex-1 rounded-full border border-volcanoCrimson/30 text-sm font-semibold text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white"
          >
            Accept all
          </button>
        </div>

        <button type="button" onClick={clearAllStoredData} className="text-xs font-semibold text-zinc-500 underline underline-offset-4 hover:text-volcanoCrimson">
          Clear everything this site has stored and reload
        </button>
      </div>
    </div>
  )
}

export default function CookieConsent() {
  const consent = useConsent()

  return (
    <>
      {!consent.decided && !consent.panelOpen && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-[110] sm:right-auto sm:max-w-md"
        >
          <div className="hud-card space-y-4 rounded-2xl p-5 shadow-[0_24px_60px_-20px_rgba(36,17,63,0.5)]">
            <div className="space-y-1.5">
              <p className="font-semibold text-volcanoWhite">Your privacy, your choice</p>
              <p className="text-xs leading-relaxed text-zinc-400">
                We use only the storage this site needs, plus optional settings to remember your theme and language, offer
                translation and count visits anonymously. Nothing is used for advertising.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setConsent({ preferences: true, translation: true, analytics: true })} className="neon-btn h-10 rounded-full px-5 text-sm font-bold">
                Accept all
              </button>
              <button
                type="button"
                onClick={() => setConsent({ preferences: false, translation: false, analytics: false })}
                className="h-10 rounded-full border border-volcanoCrimson/30 px-5 text-sm font-semibold text-volcanoCrimson transition-colors hover:bg-volcanoCrimson hover:text-white"
              >
                Reject optional
              </button>
              <button type="button" onClick={openCookieSettings} className="h-10 px-3 text-sm font-semibold text-zinc-500 underline underline-offset-4 hover:text-volcanoCrimson">
                Customize
              </button>
            </div>
          </div>
        </div>
      )}
      {consent.panelOpen && <SettingsPanel key="panel" consent={consent} />}
    </>
  )
}
