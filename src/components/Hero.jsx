import images from '../lib/images.js'
import { restaurant } from '../data/restaurant.js'
import { LogoMark } from './Logo.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <img
        src={images['facade-day']}
        alt="Sandsteinfassade und Eingang von SOGUM in der Glauburgstraße, Frankfurt"
        className="absolute inset-0 h-full w-full object-cover object-[68%_30%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="animate-fade-up max-w-2xl">
          <LogoMark className="mb-6 h-10 w-10 text-gold" />
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.32em] text-cream/80">
            {restaurant.claim} · Frankfurt Nordend
          </p>
          <h1 className="font-display text-balance text-6xl font-light leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            Sogum
          </h1>
          <p className="font-display mt-5 text-2xl italic text-cream/90 sm:text-3xl">
            {restaurant.tagline}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/75">
            Traditionelle koreanische Gerichte, mit regionalen Zutaten neu gedacht — in einem
            Altbau im Herzen des Nordends.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta-dark"
            >
              Tisch reservieren
            </a>
            <a
              href="#speisekarte"
              className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>

      <a
        href="#ueber-uns"
        aria-label="Zur nächsten Sektion scrollen"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.28em]">Entdecken</span>
        <span className="h-9 w-px animate-pulse bg-cream/60" />
      </a>
    </section>
  )
}
