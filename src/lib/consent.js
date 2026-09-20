// Cookie / storage consent. Essential storage is always on. Preferences (theme + language memory) and
// third-party translation (Google Translate) only run after the visitor allows them.
import { useSyncExternalStore } from 'react'

const KEY = 'cookieConsent'
const listeners = new Set()

function read() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY))
    return parsed && parsed.decided ? parsed : null
  } catch {
    return null
  }
}

let state = read() ?? { decided: false, preferences: false, translation: false, analytics: false }
let panelOpen = false
let snap = { ...state, panelOpen }

function emit() {
  snap = { ...state, panelOpen }
  listeners.forEach((fn) => fn())
}

export function getConsent() {
  return state
}

export function subscribeConsent(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function setConsent(patch) {
  state = { ...state, ...patch, decided: true }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
    if (!state.preferences) {
      localStorage.removeItem('theme')
      localStorage.removeItem('lang')
    }
  } catch {
    /* storage unavailable: choice applies for this visit only */
  }
  emit()
}

export function openCookieSettings() {
  panelOpen = true
  emit()
}

export function closeCookieSettings() {
  panelOpen = false
  emit()
}

// Removes everything this site stored (except that it forgets the consent choice too) and reloads.
export function clearAllStoredData() {
  try {
    localStorage.clear()
    document.cookie.split(';').forEach((c) => {
      const name = c.split('=')[0].trim()
      if (name) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    })
  } catch {
    /* ignore */
  }
  window.location.reload()
}

export function useConsent() {
  return useSyncExternalStore(subscribeConsent, () => snap)
}
