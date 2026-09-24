import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Default descriptions for each page. Pages that know better (a blog post, a service) pass their own.
const DESCRIPTIONS = {
  '/': 'Agentosys builds fast, reliable software: web and mobile apps, AI solutions, automation, cloud and security. A small, hands-on team in Hyderabad.',
  '/services': 'AI, software engineering, automation, cloud and data, and security and quality services from Agentosys, delivered as SaaS or TaaS.',
  '/industry': 'Software for healthcare, e-commerce, travel, fintech, logistics, education, proptech and manufacturing, tailored to each sector.',
  '/customers': 'What teams say about working with Agentosys. Filter customer stories by industry and product.',
  '/leadership': 'Meet the Agentosys leadership team: CEO, CTO, COO, CCO, CPO and CFO.',
  '/careers': 'Open roles at Agentosys. Join a small, hands-on team building software for real businesses.',
  '/blog': 'Practical articles on engineering, AI, product and business from the Agentosys team.',
  '/about': 'About Agentosys: our story, mission, vision and the five values behind our name.',
  '/why-us': 'Why teams choose Agentosys: founder-led delivery, language-agnostic engineering, short build cycles and support after launch.',
  '/how-we-work': 'How Agentosys works: discovery, architecture, build, deploy and ongoing support, with reviewable progress every few days.',
  '/resources': 'Free checklists and guides for planning a software project, launching a website and choosing a software partner.',
  '/privacy': 'How Agentosys collects, uses and protects personal information.',
  '/terms': 'Terms of use for the Agentosys website.',
  '/cookies': 'What the Agentosys website stores on your device and which outside services it loads.',
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function usePageTitle(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    const desc = description || DESCRIPTIONS[pathname] || DESCRIPTIONS['/']
    const url = `${window.location.origin}${pathname}`
    const image = `${window.location.origin}/logo-stacked.png`

    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', image)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }, [title, description, pathname])
}
