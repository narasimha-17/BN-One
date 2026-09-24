import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { initAnalytics } from './lib/analytics.js'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackgroundCurves from './components/BackgroundCurves.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import usePageTitle from './hooks/usePageTitle.js'
import { restoreLanguage } from './lib/translate.js'

const Industry = lazy(() => import('./pages/Industry.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Leadership = lazy(() => import('./pages/Leadership.jsx'))
const CustomerStories = lazy(() => import('./pages/CustomerStories.jsx'))
const Careers = lazy(() => import('./pages/Careers.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const HowWeWork = lazy(() => import('./pages/HowWeWork.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const WhyUs = lazy(() => import('./pages/WhyUs.jsx'))

function NotFound() {
  usePageTitle('Page not found — Agentosys')
  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Error 404</p>
      <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">This page could not be found.</h1>
      <p className="text-zinc-400">The link may be broken, or the page may have moved.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="neon-btn inline-flex h-11 items-center rounded-full px-7 text-sm font-bold">Go to the home page</Link>
        <Link to="/services" className="inline-flex h-11 items-center rounded-full border border-volcanoCrimson/30 px-7 text-sm font-bold text-volcanoCrimson">Browse services</Link>
      </div>
    </main>
  )
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => restoreLanguage(), [])
  useEffect(() => initAnalytics(), [])

  // Give each page's <main> an id so the "Skip to content" link has somewhere to land. Pages load
  // lazily, so watch for the <main> element to appear rather than assuming it is there already.
  useEffect(() => {
    const tag = () => {
      const main = document.querySelector('main')
      if (main && main.id !== 'main') {
        main.id = 'main'
        main.tabIndex = -1
      }
      return Boolean(main)
    }
    if (tag()) return undefined
    const observer = new MutationObserver(() => tag() && observer.disconnect())
    observer.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[#24113F] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <BackgroundCurves />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[100dvh]" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/cookies" element={<Legal kind="cookies" />} />
          <Route path="/customers" element={<CustomerStories />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}

export default App
