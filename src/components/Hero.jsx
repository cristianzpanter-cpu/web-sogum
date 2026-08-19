import images from '../lib/images.js'
import { restaurant } from '../data/restaurant.js'
import { LogoMark } from './Logo.jsx'
import OpenBadge from './OpenBadge.jsx'
import { CalendarCheckIcon, MapPinIcon } from './icons.jsx'
import useParallax from '../hooks/useParallax.js'

export default function Hero() {
  const parallaxRef = useParallax(0.12, 36)

  return (
    <section id="top" className="relative flex h-[94svh] min-h-[560px] w-full items-end overflow-hidden bg-ink sm:h-[100svh] sm:min-h-[680px]">
      <div ref={parallaxRef} className="absolute inset-x-0 -top-[8%] h-[116%] will-change-transform">
        <img
          src={images['facade-day']}
          srcSet={`${images['facade-day-750']} 750w, ${images['facade-day']} 1080w`}
          sizes="100vw"
          alt="Sandsteinfassade und Eingang von SOGUM in der Glauburgstraße, Frankfurt"
          className="animate-kenburns h-full w-full object-cover object-[68%_30%]"
          fetchPriority="high"
        />
      </div>
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
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/75 sm:mt-6">
            Traditionelle koreanische Gerichte, neu gedacht mit regionalen Zutaten — in einem
            historischen Altbau im Herzen des Nordends. Bekannt für das klare Dätschigomtang,
            unser Signature-Gericht.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-3.5">
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2.5 rounded-full bg-terracotta px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream hover:bg-terracotta-dark"
            >
              <CalendarCheckIcon className="h-4 w-4 shrink-0" />
              Tisch reservieren
            </a>
            <a
              href="#speisekarte"
              className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-cream/50 px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream hover:border-cream hover:bg-cream/10"
            >
              Speisekarte
            </a>
            <a
              href={restaurant.address.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-cream/50 px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-cream hover:border-cream hover:bg-cream/10"
            >
              <MapPinIcon className="h-4 w-4 shrink-0" />
              Anfahrt
            </a>
          </div>

          <p className="mt-4 text-[13px] text-cream/60 sm:mt-5">
            Lieber anrufen? Sofort erreichbar:{' '}
            <a href={restaurant.phoneHref} className="text-cream/90 underline decoration-cream/30 underline-offset-4 hover:text-gold">
              {restaurant.phoneDisplay}
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
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.28em]">Entdecken</span>
        <span className="h-9 w-px animate-pulse bg-cream/60" />
      </a>
    </section>
  )
}
