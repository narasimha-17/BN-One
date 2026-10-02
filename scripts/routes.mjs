// Every public page of the site. Shared by the sitemap and the prerender step.
import { posts } from '../src/data/blogPosts.js'
import { allServices } from '../src/data/serviceCatalog.js'

export const SITE = (process.env.SITE_URL || 'https://www.agentosys.in').replace(/\/$/, '')

export const pages = [
  '/', '/services', '/industry', '/customers', '/leadership', '/careers', '/blog', '/about', '/why-us',
  '/how-we-work', '/resources', '/privacy', '/terms', '/cookies',
  ...allServices.map((s) => `/services/${s.slug}`),
  ...posts.map((p) => `/blog/${p.slug}`),
]
