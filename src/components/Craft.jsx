// Drei Qualitätsversprechen, die Vertrauen aufbauen, bevor die Karte
// gezeigt wird — bewusst nur mit Fakten belegt, die bereits an anderer
// Stelle in restaurant.js/den Gerichtbeschreibungen verifiziert sind.
// Keine erfundenen Zahlen, keine "seit XXXX"-Behauptung ohne Beleg.
const PILLARS = [
  {
    stat: '14 Std.',
    title: 'Sous-vide gegart',
    text: 'Unser Galbi gart 14 Stunden bei Niedrigtemperatur, bevor es über offenem Feuer glasiert wird.',
  },
  {
    stat: 'Täglich',
    title: 'Frisch angesetzt',
    text: 'Unser Kimchi kommt nie aus dem Glas — es wird jeden Tag neu aus saisonalem Chinakohl zubereitet.',
  },
  {
    stat: '2 Inhaber',
    title: 'Persönlich geführt',
    text: 'Jinseok Oh und Daejin Kim führen SOGUM selbst — mitten im Frankfurter Nordend.',
  },
]

export default function Craft() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-xl">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Handwerk
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            Zeit und Sorgfalt, die man schmeckt
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              className="reveal border-t border-line pt-7"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <p className="font-display text-4xl font-light text-terracotta sm:text-5xl">{p.stat}</p>
              <h3 className="mt-3 text-[13px] font-medium uppercase tracking-[0.16em] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-charcoal/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
