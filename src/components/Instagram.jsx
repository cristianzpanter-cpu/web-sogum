import images from '../lib/images.js'
import { restaurant, galleryImages } from '../data/restaurant.js'
import { InstagramIcon } from './icons.jsx'

const THUMB_KEYS = ['dish-croquettes', 'dish-galbi-table', 'dish-shrimp-cakes', 'dish-galbi-close', 'dish-kimchi']

export default function InstagramBand() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div data-reveal className="reveal">
          <InstagramIcon className="mx-auto h-7 w-7 text-terracotta" />
          <h2 className="font-display mt-4 text-3xl font-light text-ink sm:text-4xl">
            Folgen Sie uns {restaurant.instagram.handle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-charcoal/70">
            Neue Gerichte, saisonale Karten und Eindrücke aus der Küche — auf Instagram.
          </p>
          <a
            href={restaurant.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-terracotta px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
          >
            Auf Instagram öffnen
          </a>
        </div>

        <div data-reveal className="reveal mt-12 grid grid-cols-5 gap-2.5 sm:gap-4">
          {THUMB_KEYS.map((key) => {
            const alt = galleryImages.find((g) => g.image === key)?.alt ?? 'Foto aus dem SOGUM-Feed'
            return (
              <a
                key={key}
                href={restaurant.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={images[key]}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
