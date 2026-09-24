import { Link } from 'react-router-dom'
import { clients } from '../data/clients.js'

function ClientItem({ client }) {
  if (client.showName) {
    // Brand name in the site font, with the brand's icon beside it when there is one.
    return (
      <span className="flex items-center gap-3">
        {client.logo && <img src={client.logo} alt="" className={`${client.iconClass ?? 'h-11'} w-auto object-contain`} />}
        <span className="whitespace-nowrap text-lg font-bold tracking-tight text-volcanoWhite">{client.name}</span>
      </span>
    )
  }
  if (client.logo) {
    return (
      <img
        src={client.logo}
        alt={client.name}
        className={`${client.logoClass ?? 'h-12'} w-auto max-w-[11rem] rounded-lg object-contain`}
      />
    )
  }
  return (
    <span className="flex h-14 w-44 items-center justify-center rounded-xl border border-dashed border-[#6D28D9]/30 bg-white/60 text-sm font-semibold text-[#6B6472]">
      Your logo here
    </span>
  )
}

export default function TrustedBrands() {
  if (!clients.length) return null
  const loop = [...clients, ...clients]

  return (
    <section className="py-12 md:py-16" aria-label="Brands that trust us">
      <div className="mb-10 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-volcanoWhite sm:text-base">
          Brands that trust us
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-volcanoCrimson" />
      </div>

      <div className="marquee-mask group overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 sm:gap-20">
          {loop.map((client, i) => (
            <div key={`${client.name}-${i}`} className="shrink-0" aria-hidden={i >= clients.length}>
              <ClientItem client={client} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/customers"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-volcanoCrimson transition-colors hover:text-volcanoWhite"
        >
          Customer stories
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
