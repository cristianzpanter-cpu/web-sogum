import { useState } from 'react'
import { menu } from '../data/restaurant.js'

function FoodItem({ item }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-5 first:pt-0 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="sm:max-w-[70%]">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="font-display text-xl text-ink">{item.name}</h4>
          {item.korean && <span className="text-sm text-charcoal/45">{item.korean}</span>}
          {item.tag && (
            <span className="rounded-full border border-terracotta/40 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.1em] text-terracotta">
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-charcoal/70">{item.description}</p>
        )}
        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-charcoal/40">
          {item.allergens && <span>Allergene: {item.allergens}</span>}
          {item.note && <span>{item.note}</span>}
        </div>
      </div>
      <span className="font-display shrink-0 whitespace-nowrap text-lg text-terracotta sm:text-right">
        {item.price}
      </span>
    </div>
  )
}

function DrinkItem({ item }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-line py-3.5 last:border-b-0">
      <div>
        <p className="text-[15px] text-ink">{item.name}</p>
        {item.note && <p className="text-[12.5px] text-charcoal/45">{item.note}</p>}
      </div>
      <span className="shrink-0 whitespace-nowrap font-display text-terracotta">{item.price}</span>
    </div>
  )
}

export default function Menu() {
  const [tab, setTab] = useState('speisen')
  const [legendOpen, setLegendOpen] = useState(false)

  return (
    <section id="speisekarte" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div data-reveal className="reveal text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Speisekarte
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            Was wir servieren
          </h2>
        </div>

        <div data-reveal className="reveal mt-10 flex justify-center gap-2">
          {[
            { id: 'speisen', label: 'Speisen' },
            { id: 'getraenke', label: 'Getränke' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                tab === t.id ? 'bg-terracotta text-cream' : 'bg-transparent text-charcoal/60 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'speisen' && (
          <div className="mt-14 space-y-14">
            {menu.categories.map((category) => (
              <div key={category.title} data-reveal className="reveal">
                <div className="mb-1 flex items-baseline gap-3">
                  <h3 className="font-display text-2xl text-ink">{category.title}</h3>
                  {category.korean && <span className="text-sm text-charcoal/40">{category.korean}</span>}
                </div>
                <div className="hr-hairline mb-2 mt-3" />
                <div>
                  {category.items.map((item) => (
                    <FoodItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'getraenke' && (
          <div className="mt-14 space-y-12">
            {menu.drinks.map((category) => (
              <div key={category.title} data-reveal className="reveal">
                <h3 className="font-display text-2xl text-ink">{category.title}</h3>
                <div className="hr-hairline mb-2 mt-3" />
                <div>
                  {category.items.map((item) => (
                    <DrinkItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div data-reveal className="reveal mt-14 border-t border-line pt-8 text-center">
          <button
            type="button"
            onClick={() => setLegendOpen((v) => !v)}
            className="text-[13px] uppercase tracking-[0.14em] text-charcoal/60 underline decoration-line underline-offset-4 transition-colors hover:text-terracotta"
          >
            {legendOpen ? 'Allergen-Legende ausblenden' : 'Allergen- & Zusatzstoff-Legende anzeigen'}
          </button>

          {legendOpen && (
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 text-left sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                  Deklarationspflichtige Allergene
                </p>
                <ul className="space-y-1 text-[13px] text-charcoal/70">
                  {menu.allergenLegend.allergens.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                  Deklarationspflichtige Zusatzstoffe
                </p>
                <ul className="space-y-1 text-[13px] text-charcoal/70">
                  {menu.allergenLegend.additives.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
