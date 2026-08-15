import images from '../lib/images.js'
import { signatureDishes } from '../data/restaurant.js'

export default function SignatureDishes() {
  return (
    <section id="kueche" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-xl">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-gold">
            Aus der Küche
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-cream sm:text-5xl">
            Vier Gerichte, die SOGUM ausmachen
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {signatureDishes.map((dish, i) => (
            <article
              key={dish.id}
              data-reveal
              className="reveal group"
              style={{ transitionDelay: `${(i % 2) * 120}ms` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
                <img
                  src={images[dish.image]}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-normal text-cream">{dish.name}</h3>
                  <p className="mt-0.5 text-sm tracking-wide text-cream/45">{dish.korean}</p>
                </div>
                <span className="font-display shrink-0 text-lg text-gold">{dish.price}</span>
              </div>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-cream/70">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
