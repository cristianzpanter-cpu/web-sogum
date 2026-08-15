import images from '../lib/images.js'
import { restaurant } from '../data/restaurant.js'
import { LogoMark } from './Logo.jsx'
import OpenBadge from './OpenBadge.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[680px] w-full items-end overflow-hidden bg-ink">
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
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-cream/80">
              {restaurant.claim} · Frankfurt Nordend
            </p>
            <OpenBadge tone="dark" />
          </div>
          <h1 className="font-display text-balance text-6xl font-light leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            Sogum
          </h1>
          <p className="font-display mt-5 text-2xl italic text-cream/90 sm:text-3xl">
            {restaurant.tagline}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/75">
            Traditionelle koreanische Gerichte, mit regionalen Zutaten neu gedacht — in einem
            Altbau im Herzen des Nordends. Bekannt für das klare Dätschigomtang.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full bg-terracotta px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta-dark"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 5c0-.55.45-1 1-1h2.6c.5 0 .92.36 1 .85l.7 4.1a1 1 0 0 1-.5 1.05l-1.7 1c1 2.2 2.7 3.9 4.9 4.9l1-1.7a1 1 0 0 1 1.05-.5l4.1.7c.5.08.85.5.85 1V18c0 .55-.45 1-1 1h-1.5C9.6 19 5 14.4 5 8.5V7"
                />
              </svg>
              Tisch reservieren
            </a>
            <a
              href="#speisekarte"
              className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Speisekarte ansehen
            </a>
          </div>

          <p className="mt-5 text-[13px] text-cream/60">
            Sofort erreichbar:{' '}
            <a href={restaurant.phoneHref} className="text-cream/90 underline decoration-cream/30 underline-offset-4 hover:text-gold">
              {restaurant.phoneDisplay}
            </a>{' '}
            · oder per{' '}
            <a
              href={restaurant.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-cream/90 underline decoration-cream/30 underline-offset-4 hover:text-gold"
            >
              Instagram-DM
            </a>
            {restaurant.whatsappUrl && (
              <>
                {' '}
                ·{' '}
                <a
                  href={restaurant.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/90 underline decoration-cream/30 underline-offset-4 hover:text-gold"
                >
                  WhatsApp
                </a>
              </>
            )}
          </p>
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
