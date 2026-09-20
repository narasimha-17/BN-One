// Light / dark theme. The initial value is set before first paint by a small script in index.html.
import { useSyncExternalStore } from 'react'
import { getConsent, subscribeConsent } from './consent.js'

const listeners = new Set()
let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

function persist() {
  if (!getConsent().preferences) return
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* ignore */
  }
}

// If the visitor allows preferences later, remember the theme they already picked.
subscribeConsent(persist)

export function setTheme(next) {
  theme = next === 'dark' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  persist()
  listeners.forEach((fn) => fn())
}

export const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

export function useTheme() {
  return useSyncExternalStore(
    (fn) => {
      listeners.add(fn)
      return () => listeners.delete(fn)
    },
    () => theme,
  )
}
