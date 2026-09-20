// Page translation through the Google Translate website widget. The script is only loaded after the
// visitor has allowed "translation" in the cookie settings.
import { getConsent, subscribeConsent } from './consent.js'

export const LANGUAGES = [
  { code: 'en', native: 'English', label: 'English' },
  { code: 'hi', native: 'हिन्दी', label: 'Hindi' },
  { code: 'te', native: 'తెలుగు', label: 'Telugu' },
  { code: 'ta', native: 'தமிழ்', label: 'Tamil' },
  { code: 'bn', native: 'বাংলা', label: 'Bengali' },
  { code: 'mr', native: 'मराठी', label: 'Marathi' },
  { code: 'gu', native: 'ગુજરાતી', label: 'Gujarati' },
  { code: 'kn', native: 'ಕನ್ನಡ', label: 'Kannada' },
  { code: 'ml', native: 'മലയാളം', label: 'Malayalam' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
  { code: 'or', native: 'ଓଡ଼ିଆ', label: 'Odia' },
  { code: 'as', native: 'অসমীয়া', label: 'Assamese' },
  { code: 'ur', native: 'اردو', label: 'Urdu' },
  { code: 'fr', native: 'Français', label: 'French' },
  { code: 'de', native: 'Deutsch', label: 'German' },
]

let loading = null

// Google Translate rewrites the page's text nodes, which can make React throw when it later removes or
// inserts nodes it no longer finds. These guards are the widely used workaround.
function guardDom() {
  if (window.__translateGuard) return
  window.__translateGuard = true
  const removeChild = Node.prototype.removeChild
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) return child
    return removeChild.apply(this, arguments)
  }
  const insertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function (node, ref) {
    if (ref && ref.parentNode !== this) return node
    return insertBefore.apply(this, arguments)
  }
}

function loadWidget() {
  if (loading) return loading
  guardDom()
  loading = new Promise((resolve, reject) => {
    const holder = document.createElement('div')
    holder.id = 'google_translate_element'
    holder.style.cssText = 'position:absolute;height:0;overflow:hidden;visibility:hidden'
    document.body.appendChild(holder)

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.filter((l) => l.code !== 'en').map((l) => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element',
      )
      resolve()
    }
    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.onerror = () => {
      loading = null
      reject(new Error('Translation service could not be loaded'))
    }
    document.body.appendChild(script)
  })
  return loading
}

function waitForCombo(code, tries = 60) {
  return new Promise((resolve, reject) => {
    const tick = () => {
      const combo = document.querySelector('select.goog-te-combo')
      // the menu exists before Google has filled in its language options, so wait for the one we need
      if (combo && [...combo.options].some((o) => o.value === code)) return resolve(combo)
      if (tries-- <= 0) return reject(new Error('Translation menu not ready'))
      return setTimeout(tick, 150)
    }
    tick()
  })
}

function clearTranslateCookie() {
  const expire = 'expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = `googtrans=; ${expire}; path=/`
  document.cookie = `googtrans=; ${expire}; path=/; domain=${window.location.hostname}`
}

export function currentLanguage() {
  try {
    return localStorage.getItem('lang') || (document.cookie.match(/googtrans=\/en\/([a-z-]+)/) || [])[1] || 'en'
  } catch {
    return 'en'
  }
}

export async function setLanguage(code) {
  if (code === 'en') {
    const wasTranslated = /googtrans=\/en\//.test(document.cookie) || document.documentElement.classList.contains('translated-ltr')
    try {
      localStorage.removeItem('lang')
    } catch {
      /* ignore */
    }
    clearTranslateCookie()
    if (wasTranslated) window.location.reload()
    return
  }
  await loadWidget()
  const combo = await waitForCombo(code)
  combo.value = code
  combo.dispatchEvent(new Event('change'))
  if (getConsent().preferences) {
    try {
      localStorage.setItem('lang', code)
    } catch {
      /* ignore */
    }
  }
}

// Re-apply a remembered language on page load, once the visitor has allowed translation.
export function restoreLanguage() {
  const run = () => {
    const { translation, preferences } = getConsent()
    if (!translation || !preferences) return
    let code = null
    try {
      code = localStorage.getItem('lang')
    } catch {
      /* ignore */
    }
    if (code && code !== 'en') setLanguage(code).catch(() => {})
  }
  run()
  return subscribeConsent(run)
}
