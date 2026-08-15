import images from '../lib/images.js'
import { restaurant } from '../data/restaurant.js'

export default function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div data-reveal className="reveal lg:col-span-5 lg:col-start-1">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Über uns
          </span>
          <h2 className="font-display mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            {restaurant.meaningNote}
          </h2>
          <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-charcoal/85">
            <p>
              Bei SOGUM verfeinern und entwickeln wir traditionelle koreanische Gerichte mit
              regionalen Zutaten weiter — ohne dabei ihre Authentizität und koreanischen Wurzeln
              zu verlieren. Besonders die Qualität des heimischen Schweinefleischs hat uns bei der
              Ankunft in Deutschland überzeugt und ist bis heute Ausgangspunkt unserer Küche.
            </p>
            <p>
              Geführt wird das Restaurant von {restaurant.owners} in der Glauburgstraße im
              Frankfurter Nordend — in einem historischen Altbau, dessen Sandsteinfassade und
              schlichtes, warmes Interieur den Rahmen für unser Signature-Gericht bilden: das
              klare Dätschigomtang.
            </p>
          </div>
        </div>

        <div data-reveal className="reveal lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src={images['dish-jokpyeon']}
              alt="Fein aufgeschnittenes Jokpyeon mit Rucola, angerichtet im Restaurant SOGUM"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-[13px] uppercase tracking-[0.18em] text-charcoal/50">
            Jokpyeon — koreanische Schweinesülze, fein aufgeschnitten
          </p>
        </div>
      </div>
    </section>
  )
}
