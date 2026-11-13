import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductLogo from './ProductLogo.jsx'
import { products } from '../data/products.js'
import { findService } from '../data/serviceCatalog.js'
import { productGuides, serviceGoals, startSteps } from '../data/resources.js'

const glass = 'rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300'

function Arrow({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ServiceFinder() {
  const [active, setActive] = useState(serviceGoals[0].id)
  const goal = serviceGoals.find((g) => g.id === active)
  const services = goal.services.map(findService).filter(Boolean)
  const product = goal.product ? products.find((p) => p.slug === goal.product) : null

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Find the right service</h3>
        <p className="text-sm text-white/60">What are you trying to do? Pick a goal and see where we can help.</p>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a goal">
        {serviceGoals.map((g) => {
          const on = g.id === active
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(g.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                on ? 'border-white bg-white text-[#24113F] shadow-lg' : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {g.label}
            </button>
          )
        })}
      </div>

      <div key={active} className="lead-rise grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className={`${glass} group flex flex-col justify-between gap-5 p-5 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10`}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">{s.category}</p>
              <p className="mt-2 font-bold text-white">{s.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">{s.tagline}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7FEFE6]">
              Learn more <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
        {product && (
          <Link to={`/products#${product.slug}`} className="group flex flex-col justify-between gap-5 rounded-3xl border border-[#00D4C4]/40 bg-[#00D4C4]/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00D4C4]/15">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7FEFE6]">Or start with a product</p>
              <p className="mt-2 flex items-center gap-2 font-bold text-white">
                <ProductLogo name={product.name} className="h-4 w-4" />
                {product.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{productGuides[product.slug]?.bestFor}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white">
              See the product <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}

function GetStarted({ onBook }) {
  return (
    <div className={`${glass} p-6 sm:p-10`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div className="space-y-5">
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">Ready to start? Here is how it goes.</h3>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={onBook}
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-white px-7 text-sm font-bold text-[#24113F] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F3EEFA]"
            >
              Book free consultation
            </button>
            <Link
              to={{ hash: '#checklists', state: { checklist: 'project-brief' } }}
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-7 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Start your brief
            </Link>
          </div>
        </div>

        <ol className="grid gap-5 sm:grid-cols-3">
          {startSteps.map((step, i) => (
            <li key={step.title} className="relative space-y-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00D4C4] text-sm font-bold text-white">{i + 1}</span>
              <p className="font-bold text-white">{step.title}</p>
              <p className="text-sm leading-relaxed text-white/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function ResourceUse({ onBook }) {
  return (
    <div className="space-y-16 md:space-y-20">
      <ServiceFinder />
      <GetStarted onBook={onBook} />
    </div>
  )
}
