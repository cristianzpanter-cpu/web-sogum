import { restaurant } from '../data/restaurant.js'

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
      <path d="M10 1.8l2.47 5.13 5.53.62-4.15 3.87 1.1 5.58L10 14.9l-4.95 2.1 1.1-5.58L2 7.55l5.53-.62L10 1.8Z" />
    </svg>
  )
}

// Zeigt bewusst nur die eine echte, verifizierte Google-Rezension aus dem
// Kundenmaterial — mit vollem typografischem Gewicht statt eines Sliders
// mit erfundenen Stimmen. Kein Zitat wird gezeigt, weil uns der
// tatsächliche Bewertungstext nicht vorliegt; nur die belegten Fakten
// (Sterne, Name, dass Fotos beigefügt waren).
export default function Testimonial() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div data-reveal className="reveal flex justify-center gap-1.5 text-terracotta">
          {Array.from({ length: restaurant.googleReview.rating }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <p data-reveal className="reveal font-display mt-6 text-3xl font-light leading-snug text-ink sm:text-4xl">
          Mit {restaurant.googleReview.rating.toFixed(1).replace('.', ',')} von 5 Sternen bewertet
          — verifiziert mit eigenen Fotos von Fassade und Dätschigomtang.
        </p>
        <div data-reveal className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[14px] text-charcoal/70">
          <span>Google-Rezension von <span className="font-medium text-ink">{restaurant.googleReview.author}</span></span>
          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={restaurant.address.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:text-terracotta-dark"
          >
            Auf Google Maps ansehen
          </a>
        </div>
      </div>
    </section>
  )
}
