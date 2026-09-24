// Sends a form submission somewhere you can read it.
//
// Set VITE_FORM_ENDPOINT to a form service URL (Formspree, Web3Forms, Basin, or your own API) and every
// enquiry is stored and emailed to you. For Web3Forms also set VITE_FORM_ACCESS_KEY.
// If no endpoint is set, it falls back to opening the visitor's email app (the previous behaviour).
import { track } from './analytics.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY

export const enquiryStorageEnabled = Boolean(ENDPOINT)

export async function submitEnquiry(form, fields, mailtoHref) {
  if (!ENDPOINT) {
    window.location.href = mailtoHref
    track('Enquiry', { form, via: 'email' })
    return { ok: true, stored: false }
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...(ACCESS_KEY ? { access_key: ACCESS_KEY, subject: `Agentosys enquiry: ${form}` } : {}),
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
