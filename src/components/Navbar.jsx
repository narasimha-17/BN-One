import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Sprinto', to: '/#features' },
  { label: 'Investment', to: '/#pricing' },
  { label: 'About', to: '/about' },
  { label: 'Industry', to: '/industry' },
  { label: 'Services', to: '/services' },
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-volcanoOrange transition-colors duration-200"
              >
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
