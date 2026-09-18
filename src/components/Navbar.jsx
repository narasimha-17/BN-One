import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Products', to: '/#products' },
  { label: 'Investment', to: '/#pricing' },
  { label: 'About', to: '/about' },
  { label: 'Industry', to: '/industry' },
  { label: 'Services', to: '/services' },
]

const PRODUCT_LINKS = [
  { name: 'PowerLens', type: 'Intelligence / Analytics', description: 'See the signal inside your operations.', accent: 'text-volcanoCrimson' },
  { name: 'VIBE', type: 'Experience / Engagement', description: 'Make every interaction feel alive.', accent: 'text-volcanoOrange' },
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
        <nav className="border border-white/5 bg-volcanoBlack/40 backdrop-blur-xl rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="flex flex-col justify-center select-none font-sans">
                <div className="flex items-baseline font-black tracking-tight leading-none h-4 sm:h-6">
                  <Link to="/" className="flex items-center h-full">
                    <img
                      src="/logo.png"
                      alt="BN ONE Logo"
                      className="h-full w-auto max-w-18 sm:max-w-none sm:h-6 object-contain transition-all duration-300"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block text-[7px] font-mono tracking-[0.18em] text-zinc-500 uppercase mt-1 whitespace-nowrap border-t border-zinc-900 pt-0.5">
                  One Vision. Limitless Possibilities.
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-zinc-400">
            <div className="relative group">
              <Link to="/#products" className="inline-flex items-center gap-2 py-4 hover:text-volcanoOrange transition-colors duration-200">
                Products
                <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180" aria-hidden="true">⌄</span>
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-px shadow-2xl shadow-black/60 backdrop-blur-2xl">
                  {PRODUCT_LINKS.map((product) => (
                    <Link
                      key={product.name}
                      to="/#products"
                      className="group/product min-h-36 bg-[#141414] p-5 transition-colors hover:bg-[#1b1b1b]"
                    >
                      <span className={`font-mono text-[9px] tracking-widest ${product.accent}`}>{product.type}</span>
                      <span className="mt-5 block text-base font-black tracking-tight text-volcanoWhite group-hover/product:text-volcanoOrange transition-colors">
                        {product.name}
                      </span>
                      <span className="mt-2 block text-[10px] normal-case leading-relaxed tracking-normal text-zinc-500">
                        {product.description}
                      </span>
                    </Link>
                  ))}
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
