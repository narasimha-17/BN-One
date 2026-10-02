// Runs after `vite build`. Opens every page in headless Chromium and saves the finished HTML as
// dist/<route>/index.html, so crawlers and AI tools that do not run JavaScript still see the real
// content, title and description. Visitors still get the normal React app (it replaces the snapshot).
// If Chromium is not available (for example on a build server), this step is skipped and the site
// is served as a normal single-page app.
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, resolve } from 'node:path'
import { SITE, pages } from './routes.mjs'

const DIST = resolve('dist')
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.woff2': 'font/woff2',
}

// Static server over dist/ with the same fallback to index.html that vercel.json gives the real site.
const shell = await readFile(join(DIST, 'index.html'))
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  const file = join(DIST, path)
  if (file.startsWith(DIST) && extname(path) && existsSync(file)) {
    res.writeHead(200, { 'Content-Type': TYPES[extname(path)] || 'application/octet-stream' })
    res.end(await readFile(file))
  } else {
    res.writeHead(200, { 'Content-Type': TYPES['.html'] })
    res.end(shell)
  }
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const origin = `http://127.0.0.1:${server.address().port}`

let browser
try {
  const { chromium } = await import('playwright')
  browser = await chromium.launch()
} catch (err) {
  console.warn(`prerender: skipped, Chromium is not available (${String(err.message).split('\n')[0]})`)
  server.close()
  process.exit(0)
}

const context = await browser.newContext()
// Snapshot the page as a first-time visitor who has already seen the intro and made a cookie choice
// with everything optional off, so no splash screen or banner ends up in the saved HTML.
await context.addInitScript(() => {
  localStorage.setItem('seenIntro', 'true')
  localStorage.setItem('cookieConsent', JSON.stringify({ decided: true, preferences: false, translation: false, analytics: false }))
})
// Only the local build is needed; keep fonts, analytics and other outside requests out of the snapshot.
await context.route((url) => url.origin !== origin, (route) => route.abort())

let failed = 0
for (const route of pages) {
  const page = await context.newPage()
  try {
    await page.goto(origin + route, { waitUntil: 'load' })
    await page.waitForSelector('main', { timeout: 15000 })
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
    let html = await page.content()
    html = html.replaceAll(origin, SITE)
    const out = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html')
    await mkdir(join(out, '..'), { recursive: true })
    await writeFile(out, '<!doctype html>\n' + html.replace(/^<!DOCTYPE html>\s*/i, ''))
  } catch (err) {
    failed += 1
    console.warn(`prerender: ${route} failed (${String(err.message).split('\n')[0]})`)
  }
  await page.close()
}

await browser.close()
server.close()
console.log(`prerender: ${pages.length - failed}/${pages.length} pages saved to dist/`)
