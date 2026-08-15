import { restaurant } from '../data/restaurant.js'
import { MapPinIcon } from './icons.jsx'

function Star({ filled = true }) {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2">
      <path
        strokeLinejoin="round"
        d="M10 1.8l2.47 5.13 5.53.62-4.15 3.87 1.1 5.58L10 14.9l-4.95 2.1 1.1-5.58L2 7.55l5.53-.62L10 1.8Z"
      />
    </svg>
  )
}

// Kurze, wahrheitsgemäße Vertrauensleiste direkt unter dem Hero: eine
// echte Google-Rezension aus dem Kundenmaterial, der Standort und die
// Inhaber — keine erfundenen Kennzahlen oder Gesamtbewertungen.
export default function TrustBar() {
  return (
    <div className="border-y border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-[13px] text-charcoal/75 sm:justify-between lg:px-10">
        <a
          href={restaurant.address.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-terracotta transition-colors hover:text-terracotta-dark"
        >
          <span className="flex gap-0.5">
            {Array.from({ length: restaurant.googleReview.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </span>
          <span className="font-medium">{restaurant.googleReview.rating.toFixed(1).replace('.', ',')}</span>
          <span className="text-charcoal/70">· Google-Rezension von {restaurant.googleReview.author}</span>
        </a>

        <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

        <a
          href={restaurant.address.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-terracotta"
        >
          <MapPinIcon className="h-4 w-4 shrink-0" />
          {restaurant.address.street}, Frankfurt-{restaurant.address.district}
        </a>

        <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

        <span>Geführt von {restaurant.owners}</span>
      </div>
    </div>
  )
}
