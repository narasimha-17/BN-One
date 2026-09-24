// Generates public/sitemap.xml and public/robots.txt. Runs automatically before every build.
// Set SITE_URL (for example https://agentosys.com) so the sitemap uses your real domain.
import { writeFileSync, mkdirSync } from 'node:fs'
import { posts } from '../src/data/blogPosts.js'
import { allServices } from '../src/data/serviceCatalog.js'

const SITE = (process.env.SITE_URL || 'https://agentosys.com').replace(/\/$/, '')

const pages = [
  '/', '/services', '/industry', '/customers', '/leadership', '/careers', '/blog', '/about', '/why-us',
  '/how-we-work', '/resources', '/privacy', '/terms', '/cookies',
  ...allServices.map((s) => `/services/${s.slug}`),
  ...posts.map((p) => `/blog/${p.slug}`),
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`

mkdirSync('public', { recursive: true })
writeFileSync('public/sitemap.xml', xml)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`sitemap: ${pages.length} pages for ${SITE}`)
