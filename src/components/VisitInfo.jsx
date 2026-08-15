import { restaurant } from '../data/restaurant.js'
import OpenBadge from './OpenBadge.jsx'

export default function VisitInfo() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.address.mapsQuery
  )}&output=embed`

  return (
    <section id="besuch" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-xl">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-gold">
            Praktische Informationen
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-cream sm:text-5xl">
            Besuchen Sie uns
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-terracotta-dark"
            >
              Anrufen · {restaurant.phoneDisplay}
            </a>
            <OpenBadge tone="dark" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="reveal space-y-10 lg:col-span-5">
            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-cream/55">
                Öffnungszeiten
              </h3>
              <dl className="mt-4 space-y-2.5">
                {restaurant.hours.map((h, i) => (
                  <div
                    key={`${h.day}-${i}`}
                    className="flex items-baseline justify-between border-b border-cream/10 pb-2.5 text-[15px]"
                  >
                    <dt className="text-cream/70">{h.day}</dt>
                    <dd className="font-display text-cream">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-cream/55">
                Adresse
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/85">
                {restaurant.address.street}
                <br />
                {restaurant.address.zipCity}
                <br />
                Frankfurt-{restaurant.address.district}
              </p>
              <a
                href={restaurant.address.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[13px] uppercase tracking-[0.12em] text-gold underline decoration-gold/40 underline-offset-4 hover:text-cream"
              >
                Route planen
              </a>
            </div>

            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-cream/55">
                Kontakt
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={restaurant.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-[14px] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 5c0-.55.45-1 1-1h2.6c.5 0 .92.36 1 .85l.7 4.1a1 1 0 0 1-.5 1.05l-1.7 1c1 2.2 2.7 3.9 4.9 4.9l1-1.7a1 1 0 0 1 1.05-.5l4.1.7c.5.08.85.5.85 1V18c0 .55-.45 1-1 1h-1.5C9.6 19 5 14.4 5 8.5V7"
                    />
                  </svg>
                  {restaurant.phoneDisplay}
                </a>
                <a
                  href={restaurant.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-[14px] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                  {restaurant.instagram.handle}
                </a>
                {restaurant.whatsappUrl && (
                  <a
                    href={restaurant.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-[14px] text-cream transition-colors hover:border-gold hover:text-gold"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-cream/55">
                Online-Reservierung folgt in Kürze — aktuell nehmen wir Tischreservierungen
                telefonisch oder per Instagram-Nachricht entgegen.
              </p>
            </div>

            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-cream/55">
                Preisrahmen
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/85">{restaurant.priceNote}</p>
            </div>
          </div>

          <div data-reveal className="reveal lg:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-cream/10 sm:aspect-[16/10]">
              <iframe
                title="SOGUM auf der Karte — Glauburgstraße 34, Frankfurt am Main"
                src={mapSrc}
                className="h-full w-full grayscale-[15%]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
