import images from '../lib/images.js'
import { restaurant } from '../data/restaurant.js'
import OpenBadge from './OpenBadge.jsx'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <img
        src={images['dish-galbi-table']}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />

      <div data-reveal className="reveal relative mx-auto max-w-2xl px-6 text-center">
        <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-gold">
          Ein Tisch bei SOGUM
        </span>
        <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-cream sm:text-5xl">
          Reservieren Sie Ihren Platz für ein Stück Korea im Nordend
        </h2>
        <p className="mt-5 text-[15.5px] text-cream/70">
          Wir freuen uns auf Ihren Besuch — reservieren Sie online oder rufen Sie uns direkt
          an.
        </p>
        <div className="mt-5 flex justify-center">
          <OpenBadge tone="dark" />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={restaurant.reservationUrl}
            target="_blank"
            rel="noreferrer"
            className="lift-on-hover inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream hover:bg-terracotta-dark"
          >
            Online reservieren
          </a>
          <a
            href={restaurant.phoneHref}
            className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-cream/40 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream hover:border-cream hover:bg-cream/10"
          >
            {restaurant.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
