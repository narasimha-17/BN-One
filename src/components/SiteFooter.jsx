import { Link } from 'react-router-dom'

const footerNav = [
  { label: 'Products', to: '/#products' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industry' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/#contact' },
  { label: 'Our Work', to: '/services' },
  { label: 'Locations', to: '/industry' },
  { label: 'Partners', to: '/#contact' },
  { label: 'Glossary', to: '/#faq' },
  { label: 'Pricing', to: '/#pricing' },
]

const socialLinks = [
  { label: 'in', name: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'f', name: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'X', name: 'X', href: 'https://x.com' },
  { label: 'ig', name: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'yt', name: 'YouTube', href: 'https://www.youtube.com' },
]

export default function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-zinc-800 bg-[#1b1b1b]">
      <div className="h-1 bg-gradient-to-r from-volcanoCrimson via-indigo-400 to-teal-400" />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[220px_1fr_280px] lg:gap-16">
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center">
              <img src="/logo.png" alt="BN ONE" className="h-10 w-auto object-contain" />
            </Link>
            <p className="max-w-[190px] text-sm leading-relaxed text-zinc-500">
              One vision. Limitless possibilities.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-7 text-sm sm:grid-cols-3" aria-label="Footer navigation">
            {footerNav.map((link) => (
              <Link key={link.label} to={link.to} className="text-zinc-300 transition-colors hover:text-volcanoOrange">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-7 lg:items-end">
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-500 text-sm font-black text-[#1b1b1b] transition-all hover:bg-volcanoOrange hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm lg:text-right">
              <a href="mailto:bnst17042006@gmail.com" className="block text-zinc-400 transition-colors hover:text-volcanoOrange">
                bnst17042006@gmail.com
              </a>
              <a href="tel:+919381472064" className="block text-zinc-400 transition-colors hover:text-volcanoCrimson">
                +91 9381472064
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-700 pt-7">
          <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-zinc-300">
              <a href="mailto:bnst17042006@gmail.com?subject=Sitemap%20request" className="transition-colors hover:text-volcanoOrange">Sitemap</a>
              <a href="mailto:bnst17042006@gmail.com?subject=Terms%20question" className="transition-colors hover:text-volcanoOrange">Terms of Use</a>
              <a href="mailto:bnst17042006@gmail.com?subject=Cookie%20question" className="transition-colors hover:text-volcanoOrange">Cookie Policy</a>
              <a href="mailto:bnst17042006@gmail.com?subject=Privacy%20request" className="transition-colors hover:text-volcanoOrange">Privacy Policy</a>
              <a href="mailto:bnst17042006@gmail.com?subject=AI%20usage%20question" className="transition-colors hover:text-volcanoOrange">AI Usage Policy</a>
            </div>
            <div className="text-zinc-500">Copyright © 2026 BN ONE. All rights reserved.</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
          className="absolute bottom-24 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-2xl font-light text-white transition-transform hover:-translate-y-1 sm:right-10"
        >
          ^
        </button>
      </div>
    </footer>
  )
}
