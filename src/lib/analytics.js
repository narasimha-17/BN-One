// Privacy-friendly analytics (Plausible). Loads only when BOTH are true:
//   1. VITE_PLAUSIBLE_DOMAIN is set (your site's domain, e.g. agentosys.com), and
//   2. the visitor has allowed "Analytics" in the cookie settings.
// Plausible records page views (including single-page navigation) and any events sent with track().
import { getConsent, subscribeConsent } from './consent.js'

const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN
let loaded = false

function load() {
  if (loaded || !DOMAIN) return
  loaded = true
  window.plausible =
    window.plausible ||
    function () {
      ;(window.plausible.q = window.plausible.q || []).push(arguments)
    }
  const s = document.createElement('script')
  s.defer = true
  s.dataset.domain = DOMAIN
  s.src = 'https://plausible.io/js/script.tagged-events.js'
  document.head.appendChild(s)
}

export function initAnalytics() {
  const run = () => {
    if (getConsent().analytics) load()
  }
  run()
  return subscribeConsent(run)
}

export function track(name, props) {
  if (getConsent().analytics && typeof window.plausible === 'function') window.plausible(name, { props })
}
