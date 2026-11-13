// Sends a form submission somewhere you can read it.
//
// Set VITE_FORM_ENDPOINT to a form service URL (Formspree, Web3Forms, Basin, or your own API) and every
// enquiry is stored and emailed to you. For Web3Forms also set VITE_FORM_ACCESS_KEY.
// If no endpoint is set, it falls back to opening the visitor's email app (the previous behaviour).
import { track } from './analytics.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY

export const enquiryStorageEnabled = Boolean(ENDPOINT)

// `fallbackEndpoint` is used only when VITE_FORM_ENDPOINT is not set. It lets a single form (the contact
// form) deliver by email without a configured form service. Without either, we open the mail app.
export async function submitEnquiry(form, fields, mailtoHref, fallbackEndpoint) {
  const endpoint = ENDPOINT || fallbackEndpoint
  if (!endpoint) {
    window.location.href = mailtoHref
    track('Enquiry', { form, via: 'email' })
    return { ok: true, stored: false }
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...(ENDPOINT && ACCESS_KEY ? { access_key: ACCESS_KEY, subject: `Agentosys enquiry: ${form}` } : {}),
        form,
        ...fields,
      }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    track('Enquiry', { form, via: 'stored' })
    return { ok: true, stored: true }
  } catch {
    return { ok: false, stored: false }
  }
}
