import Logo from './Logo.jsx'
import OpenBadge from './OpenBadge.jsx'
import { restaurant } from '../data/restaurant.js'

const LINKS = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kueche', label: 'Küche' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#besuch', label: 'Besuch' },
]

export default function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo markClassName="h-6 w-6 text-gold" textClassName="text-lg text-cream" />
            <p className="mt-4 max-w-[24ch] text-[13.5px] leading-relaxed">
              {restaurant.tagline} — koreanische Küche im Frankfurter Nordend.
            </p>
            <OpenBadge tone="dark" className="mt-5" />
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.16em] text-cream/55">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.16em] text-cream/55">
              Öffnungszeiten
            </h4>
            <dl className="mt-4 space-y-2 text-[14px]">
              {restaurant.hours.map((h, i) => (
                <div key={`${h.day}-${i}`} className="flex justify-between gap-4">
                  <dt className="text-cream/60">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.16em] text-cream/55">
              Kontakt
            </h4>
            <p className="mt-4 text-[14px] leading-relaxed">
              {restaurant.address.street}
              <br />
              {restaurant.address.zipCity}
            </p>
            <ul className="mt-3 space-y-2.5 text-[14px]">
              <li>
                <a href={restaurant.phoneHref} className="transition-colors hover:text-gold">
                  {restaurant.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {restaurant.instagram.handle}
                </a>
              </li>
              {restaurant.whatsappUrl && (
                <li>
                  <a href={restaurant.whatsappUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-[12.5px] text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} SOGUM · {restaurant.owners}</p>
          <div className="flex items-center gap-5">
            <a href="#impressum" className="transition-colors hover:text-cream">
              Impressum
            </a>
            <a href="#datenschutz" className="transition-colors hover:text-cream">
              Datenschutz
            </a>
            <span className="hidden sm:inline">Frankfurt am Main</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
