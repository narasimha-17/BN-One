import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductLogo from './ProductLogo.jsx'

const NAV_LINKS = [
  { label: 'Products', to: '/#products' },
  { label: 'Customers', to: '/customers' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Industry', to: '/industry' },
  { label: 'Services', to: '/services' },
]

const PRODUCT_LINKS = [
  { name: 'PowerLens', type: 'Intelligence / Analytics', description: 'See the signal inside your operations.', accent: 'text-volcanoCrimson' },
  { name: 'VIBE', type: 'Experience / Engagement', description: 'Make every interaction feel alive.', accent: 'text-volcanoCrimson' },
  { name: 'Code Check', type: 'Engineering / Quality', description: 'Ship with confidence, every time.', accent: 'text-volcanoPeach' },
  { name: 'Exam+', type: 'Learning / Performance', description: 'Turn preparation into progress.', accent: 'text-volcanoCrimson' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Mobile Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-volcanoBlack/95 backdrop-blur-2xl z-40 transition-opacity duration-300 flex flex-col items-center justify-center gap-8 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wider uppercase text-volcanoWhite hover:text-volcanoOrange transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Floating Ultra-Glass Navbar */}
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-300">
        <nav className="border border-black/10 bg-white/85 backdrop-blur-xl rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-[0_12px_40px_-12px_rgba(109,40,217,0.18)]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="flex flex-col justify-center select-none font-sans">
                <div className="flex items-center leading-none h-9 sm:h-12">
                  <Link to="/" className="flex items-center h-full">
                    <img
                      src="/logo.png"
                      alt="INFOLCON Logo"
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-zinc-400">
            <div className="relative group">
              <Link to="/#products" className="inline-flex items-center gap-2 py-4 hover:text-volcanoOrange transition-colors duration-200">
                Products
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(760px,calc(100vw-2rem))] -translate-x-[38%] translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid overflow-hidden rounded-2xl border border-[#24113F]/10 bg-white normal-case tracking-normal shadow-[0_30px_70px_-20px_rgba(36,17,63,0.30)] md:grid-cols-[15rem_1fr]">
                  <div className="flex flex-col justify-between gap-8 bg-[#F3EEFA] p-6">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-volcanoCrimson">Products</p>
                      <h3 className="text-lg font-bold leading-snug text-volcanoWhite">One platform, four focused products</h3>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        Pick one product or run them together. Each is built to solve a real operational problem.
                      </p>
                    </div>
                    <Link
                      to="/#products"
                      className="neon-btn inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold"
                    >
                      Explore all products <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  <div className="p-3">
                    <p className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Our products</p>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {PRODUCT_LINKS.map((product) => (
                        <Link
                          key={product.name}
                          to="/#products"
                          className="group/product flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-[#F3EEFA]"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3EEFA] text-volcanoCrimson transition-colors duration-200 group-hover/product:bg-volcanoCrimson group-hover/product:text-white">
                            <ProductLogo name={product.name} className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-volcanoWhite">{product.name}</span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-zinc-400">{product.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-[#24113F]/10 px-3 pb-1 pt-3 text-xs">
                      <span className="text-zinc-500">Looking for something else?</span>
                      <Link to="/services" className="font-semibold text-volcanoCrimson hover:underline">
                        Browse all services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {NAV_LINKS.slice(1).map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-volcanoOrange transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              className="hidden sm:inline-flex relative items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-wider uppercase rounded-full group bg-gradient-to-br from-volcanoCrimson to-volcanoOrange text-volcanoWhite focus:ring-2 focus:outline-none focus:ring-volcanoCrimson/60"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-700 bg-volcanoBlack rounded-full group-hover:bg-opacity-0">
                Get Started
              </span>
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center gap-[5px] p-1.5 text-volcanoWhite z-50 relative"
            >
              <span
                className="w-5 h-0.5 bg-current transition-all duration-300 origin-center"
                style={open ? { transform: 'translateY(7px) rotate(45deg)' } : undefined}
              />
              <span
                className="w-5 h-0.5 bg-current transition-all duration-300 origin-center"
                style={open ? { opacity: 0 } : undefined}
              />
              <span
                className="w-5 h-0.5 bg-current transition-all duration-300 origin-center"
                style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : undefined}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
