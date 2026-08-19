import { useState } from 'react'
import { menu, restaurant } from '../data/restaurant.js'

const UMLAUT_MAP = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' }
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[äöüß]/g, (ch) => UMLAUT_MAP[ch])
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function FoodItem({ item }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-5 first:pt-0 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="sm:max-w-[70%]">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="font-display text-xl text-ink">{item.name}</h4>
          {item.korean && <span className="text-sm text-charcoal/70">{item.korean}</span>}
          {item.tag && (
            <span className="rounded-full border border-terracotta/40 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.1em] text-terracotta">
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-charcoal/70">{item.description}</p>
        )}
        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-charcoal/70">
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
        {item.note && <p className="text-[12.5px] text-charcoal/70">{item.note}</p>}
      </div>
      <span className="shrink-0 whitespace-nowrap font-display text-terracotta">{item.price}</span>
    </div>
  )
}

export default function Menu() {
  const [tab, setTab] = useState('speisen')
  const [legendOpen, setLegendOpen] = useState(false)

  return (
    <section id="speisekarte" className="bg-paper py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div data-reveal className="reveal text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Speisekarte
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            Was wir servieren
          </h2>
          <p className="mt-4 text-[13.5px] text-charcoal/70">{restaurant.priceNote}</p>
        </div>

        <div data-reveal role="tablist" aria-label="Speisekarte" className="reveal mt-10 flex justify-center gap-2">
          {[
            { id: 'speisen', label: 'Speisen' },
            { id: 'getraenke', label: 'Getränke' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              id={`tab-${t.id}`}
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`min-h-11 rounded-full px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-[color,background-color,transform] duration-150 active:scale-95 ${
                tab === t.id ? 'bg-terracotta text-cream' : 'bg-transparent text-charcoal/70 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'speisen' && (
          <>
            <div
              data-reveal
              className="reveal -mx-6 mt-10 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0 [&::-webkit-scrollbar]:hidden"
              aria-label="Direkt zu einer Kategorie springen"
            >
              {menu.categories.map((category) => (
                <a
                  key={category.title}
                  href={`#${slugify(category.title)}`}
                  className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-line px-4 text-[12.5px] font-medium uppercase tracking-[0.1em] text-charcoal/70 transition-[color,border-color,transform] duration-150 hover:border-terracotta hover:text-terracotta active:scale-95"
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div id="panel-speisen" role="tabpanel" aria-labelledby="tab-speisen" className="mt-10 space-y-14">
              {menu.categories.map((category) => (
                <div key={category.title} id={slugify(category.title)} data-scroll-anchor data-reveal className="reveal">
                  <div className="mb-1 flex items-baseline gap-3">
                    <h3 className="font-display text-2xl text-ink">{category.title}</h3>
                    {category.korean && <span className="text-sm text-charcoal/70">{category.korean}</span>}
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
          </>
        )}

        {tab === 'getraenke' && (
          <div id="panel-getraenke" role="tabpanel" aria-labelledby="tab-getraenke" className="mt-14 space-y-12">
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
            aria-expanded={legendOpen}
            aria-controls="allergen-legend"
            className="inline-block py-2.5 text-[13px] uppercase tracking-[0.14em] text-charcoal/70 underline decoration-line underline-offset-4 transition-colors hover:text-terracotta"
          >
            {legendOpen ? 'Allergen-Legende ausblenden' : 'Allergen- & Zusatzstoff-Legende anzeigen'}
          </button>

          {legendOpen && (
            <div id="allergen-legend" className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 text-left sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal/70">
                  Deklarationspflichtige Allergene
                </p>
                <ul className="space-y-1 text-[13px] text-charcoal/70">
                  {menu.allergenLegend.allergens.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal/70">
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

        <div
          data-reveal
          className="reveal mt-14 flex flex-col items-center gap-5 rounded-sm border border-terracotta/25 bg-cream px-6 py-10 text-center sm:px-10"
        >
          <p className="font-display text-2xl text-ink">Der Tisch ist schnell gedeckt.</p>
          <p className="max-w-sm text-[14.5px] text-charcoal/70">
            Reservieren Sie in wenigen Klicks online oder rufen Sie uns direkt an.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-terracotta px-5 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-cream hover:bg-terracotta-dark sm:px-6 sm:tracking-[0.14em]"
            >
              Online reservieren
            </a>
            <a
              href={restaurant.phoneHref}
              className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-terracotta px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-terracotta hover:bg-terracotta hover:text-cream"
            >
              Anrufen · {restaurant.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
