import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Reveal from '../components/Reveal.jsx'
import ProductLogo from '../components/ProductLogo.jsx'
import ProductPreview from '../components/ProductPreview.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { products } from '../data/products.js'

export default function Products() {
  usePageTitle('Products — Agentosys')

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-44">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Products</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Six products, one <span className="neon-text">Agentosys.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Each product solves one real operational problem. Use one on its own, or run them together.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {products.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-400 transition-colors hover:border-volcanoCrimson/40 hover:text-volcanoWhite"
              >
                <ProductLogo name={p.name} className="h-4 w-4" />
                {p.name}
              </a>
            ))}
          </div>
        </section>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {products.map((product, i) => (
            <Reveal key={product.slug}>
              <section id={product.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={`space-y-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3EEFA] text-volcanoCrimson">
                    <ProductLogo name={product.name} className="h-6 w-6" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{product.category}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-volcanoWhite sm:text-4xl">{product.name}</h2>
                  <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{product.body}</p>
                  <ul className="space-y-3">
                    {product.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-3 text-sm font-medium text-volcanoWhite">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-volcanoCrimson/10 text-volcanoCrimson">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                            <path d="M5 12l4.5 4.5L19 7" />
                          </svg>
                        </span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {product.href ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
                    >
                      Visit {product.name}
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link to="/#contact" className="neon-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold">
                      Talk to us about {product.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>

                <div className={i % 2 ? 'lg:order-1' : ''}>
                  <ProductPreview name={product.name} />
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
