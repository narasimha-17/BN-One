import { Link } from 'react-router-dom'
import { industries } from '../data/industryData.js'
import { openCookieSettings } from '../lib/consent.js'

const productLinks = ['PowerLens', 'VIBE', 'Code Check', 'Exam+']

const industryLinks = industries.map((ind) => ({ label: ind.title, to: `/industry#${ind.key}` }))

const whyUsLinks = [
  { label: 'Why Infortia', to: '/why-us' },
  { label: 'How we work', to: '/how-we-work' },
  { label: 'Language agnostic', to: '/industry#stack' },
  { label: 'Our values', to: '/about' },
  { label: 'Meet the team', to: '/leadership' },
  { label: 'Customer stories', to: '/customers' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resources', to: '/resources' },
  { label: 'Services', to: '/services' },
  { label: 'Contact us', to: '/#contact' },
]

const legalLinks = [
  { label: 'Sitemap', subject: 'Sitemap%20request' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'AI Usage Policy', subject: 'AI%20usage%20question' },
]

const ICON = { viewBox: '0 0 24 24', className: 'h-[18px] w-[18px]', 'aria-hidden': true }

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg {...ICON} fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3V9.75zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.85h-4v-5.2c0-1.24-.02-2.83-1.72-2.83-1.73 0-2 1.35-2 2.74v5.29h-4V9.75z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg {...ICON} fill="currentColor">
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com',
    icon: (
      <svg {...ICON} fill="currentColor">
        <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.8-6.3L5.4 21H2.3l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <svg {...ICON} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com',
    icon: (
      <svg {...ICON} fill="currentColor">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z" />
      </svg>
    ),
  },
]

const linkClass =
  'group/link inline-flex items-center gap-1 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-white'

function Column({ title, children }) {
  return (
    <nav aria-label={title} className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-white/65">{title}</h2>
      <ul className="space-y-2">{children}</ul>
    </nav>
  )
}

function ContactRow({ icon, children, href }) {
  const inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-300 group-hover/contact:bg-[#6D28D9]">
        {icon}
      </span>
      <span className="text-sm text-white/75 transition-colors group-hover/contact:text-white">{children}</span>
    </>
  )
  return href ? (
    <a href={href} className="group/contact flex items-center gap-3">
      {inner}
    </a>
  ) : (
    <div className="group/contact flex items-center gap-3">{inner}</div>
  )
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-4 w-4',
  'aria-hidden': true,
}

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 overflow-hidden bg-[#24113F] text-white">
      <div className="accent-line relative z-10 h-1" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#6D28D9]/35 blur-3xl" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-50 420C260 300 500 520 800 400S1100 260 1260 340" stroke="white" strokeOpacity="0.06" strokeWidth="1.2" />
        <path d="M-50 480C270 370 520 580 820 460S1120 330 1260 400" stroke="white" strokeOpacity="0.04" strokeWidth="1.2" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pb-5 pt-10 sm:px-10 md:pt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.25fr_1.1fr_1fr] lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img src="/logo-on-dark.png" alt="Infortia" className="h-9 w-auto object-contain" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Innovation. Fast &amp; Adaptive. Leadership. Connectivity. Operations.
            </p>
            <div className="flex flex-wrap gap-2.5" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#6D28D9] hover:shadow-[0_10px_24px_-8px_rgba(109,40,217,0.9)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <Column title="Products">
            {productLinks.map((name) => (
              <li key={name}>
                <Link to="/#products" className={linkClass}>
                  {name}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Industries">
            {industryLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Why us?">
            {whyUsLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Company">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </Column>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10">
          <ContactRow
            href="mailto:bnst17042006@gmail.com"
            icon={
              <svg {...iconProps}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            }
          >
            bnst17042006@gmail.com
          </ContactRow>
          <ContactRow
            href="tel:+919381472064"
            icon={
              <svg {...iconProps}>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            }
          >
            +91 9381472064
          </ContactRow>
          <ContactRow
            icon={
              <svg {...iconProps}>
                <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            }
          >
            Hyderabad, India
          </ContactRow>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm lg:flex-row lg:items-center lg:justify-between">
          <p className="text-white/50">Copyright © 2026 Infortia. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/65">
            {legalLinks.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`mailto:bnst17042006@gmail.com?subject=${item.subject}`}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
            <button type="button" onClick={openCookieSettings} className="transition-colors hover:text-white">
              Cookie settings
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              title="Back to top"
              className="group ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#6D28D9] hover:shadow-[0_10px_24px_-8px_rgba(109,40,217,0.9)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
