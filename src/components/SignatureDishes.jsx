import images from '../lib/images.js'
import { signatureDishes, galleryImages } from '../data/restaurant.js'
import useTilt from '../hooks/useTilt.js'

function DishCard({ dish, delay }) {
  const tiltRef = useTilt()
  const alt = galleryImages.find((g) => g.image === dish.image)?.alt ?? dish.name

  return (
    <article data-reveal className="reveal group" style={{ transitionDelay: `${delay}ms` }}>
      <div
        ref={tiltRef}
        className="tilt-card relative aspect-[5/4] overflow-hidden rounded-sm shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-500 group-hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.45)]"
      >
        <img
          src={images[dish.image]}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-normal text-cream">{dish.name}</h3>
          <p className="mt-0.5 text-sm tracking-wide text-cream/55">{dish.korean}</p>
        </div>
        <span className="font-display shrink-0 text-lg text-gold">{dish.price}</span>
      </div>
      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-cream/70">{dish.description}</p>
    </article>
  )
}

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
            <DishCard key={dish.id} dish={dish} delay={(i % 2) * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
