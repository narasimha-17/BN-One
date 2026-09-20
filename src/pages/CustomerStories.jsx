import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import StoryCard from '../components/StoryCard.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { customerStories, industries, products } from '../data/customerStories.js'

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <fieldset className="space-y-3">
      <legend className="mb-3 text-lg font-bold text-volcanoWhite">{title}</legend>
      {options.map((option) => {
        const checked = selected.includes(option)
        return (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-volcanoWhite">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(option)}
              className="h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-700 accent-[#6D28D9]"
            />
            <span className={checked ? 'font-semibold text-volcanoCrimson' : ''}>{option}</span>
          </label>
        )
      })}
    </fieldset>
  )
}

export default function CustomerStories() {
  usePageTitle('Customer Stories — Infortia')
  const [industry, setIndustry] = useState([])
  const [product, setProduct] = useState([])

  const toggle = (setter) => (value) =>
    setter((list) => (list.includes(value) ? list.filter((v) => v !== value) : [...list, value]))

  const visible = useMemo(
    () =>
      customerStories.filter(
        (s) => (!industry.length || industry.includes(s.industry)) && (!product.length || product.includes(s.product)),
      ),
    [industry, product],
  )
  const filtering = industry.length + product.length > 0

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-transparent font-sans text-volcanoWhite antialiased selection:bg-volcanoCrimson/30">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 md:pb-32 md:pt-44">
        <section className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-volcanoCrimson">Customer stories</p>
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">What our customers say</h1>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Real feedback from the teams we build with. Filter by industry or product to find stories like yours.
          </p>
        </section>

        <div className="mt-14 grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Filters</span>
              {filtering && (
                <button
                  type="button"
                  onClick={() => {
                    setIndustry([])
                    setProduct([])
                  }}
                  className="text-sm font-semibold text-volcanoCrimson underline underline-offset-4"
                >
                  Clear all
                </button>
              )}
            </div>
            <FilterGroup title="Industry" options={industries} selected={industry} onToggle={toggle(setIndustry)} />
            <FilterGroup title="Product" options={products} selected={product} onToggle={toggle(setProduct)} />
          </aside>

          <section aria-live="polite">
            <p className="mb-6 text-sm text-zinc-500">
              Showing {visible.length} of {customerStories.length} stories
            </p>
            {visible.length ? (
              <div className="columns-1 gap-6 md:columns-2">
                {visible.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="hud-card rounded-2xl p-10 text-center">
                <p className="font-semibold text-volcanoWhite">No stories match these filters yet.</p>
                <p className="mt-1 text-sm text-zinc-400">Try removing a filter to see more.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
