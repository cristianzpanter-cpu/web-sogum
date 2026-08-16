import { restaurant } from '../data/restaurant.js'
import OpenBadge from './OpenBadge.jsx'
import { PhoneIcon, InstagramIcon, WhatsAppIcon } from './icons.jsx'

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
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-cream hover:bg-terracotta-dark"
            >
              Online reservieren
            </a>
            <a
              href={restaurant.phoneHref}
              className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-terracotta px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-terracotta hover:bg-terracotta hover:text-cream"
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
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  {restaurant.phoneDisplay}
                </a>
                <a
                  href={restaurant.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-[14px] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0" />
                  {restaurant.instagram.handle}
                </a>
                {restaurant.whatsappUrl && (
                  <a
                    href={restaurant.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-[14px] text-cream transition-colors hover:border-gold hover:text-gold"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    WhatsApp
                  </a>
                )}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-cream/55">
                Reservieren Sie{' '}
                <a
                  href={restaurant.reservationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-cream"
                >
                  bequem online
                </a>{' '}
                oder rufen Sie uns direkt an — wir bestätigen umgehend.
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
