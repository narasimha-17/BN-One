import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductLogo from './ProductLogo.jsx'
import ProductPreview from './ProductPreview.jsx'

export default function ProductShowcase({ products }) {
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <div className="space-y-10">
      <div
        role="tablist"
        aria-label="Products"
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {products.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              i === active
                ? 'border-volcanoCrimson bg-volcanoCrimson text-white shadow-[0_10px_24px_-10px_rgba(109,40,217,0.7)]'
                : 'border-black/10 bg-white text-zinc-400 hover:border-volcanoCrimson/40 hover:text-volcanoWhite'
            }`}
          >
            <ProductLogo name={p.name} className="h-4 w-4" />
            {p.name}
          </button>
        ))}
      </div>

      <div key={product.name} role="tabpanel" className="word-in grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">{product.category}</p>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-volcanoWhite">{product.name}</h3>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-400">{product.body}</p>
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
          <Link to="/services" className="neon-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold">
            Explore {product.name}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ProductPreview name={product.name} />
      </div>
    </div>
  )
}
