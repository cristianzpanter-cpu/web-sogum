import images from '../lib/images.js'

export default function Experience() {
  return (
    <section id="erlebnis" className="bg-cream py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div data-reveal className="reveal order-2 grid grid-cols-2 gap-4 lg:order-1 lg:col-span-6">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={images['facade-street']}
                alt="Historische Sandsteinfassade des Gebäudes in der Glauburgstraße"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={images['dish-galbi-close']}
                alt="Tisch bei SOGUM, gedeckt für ein gemeinsames Essen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div data-reveal className="reveal order-1 lg:order-2 lg:col-span-6">
            <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
              Erlebnis &amp; Ambiente
            </span>
            <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
              Hell, warm — und ganz auf das Essen konzentriert
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-[15.5px] leading-relaxed text-charcoal/85 lg:max-w-none">
              <p>
                Hinter der denkmalgeschützten Sandsteinfassade im Nordend liegt ein Innenraum,
                der bewusst zurückhaltend gestaltet ist: helles Holz, klare Linien, warmes Licht —
                Raum für das, was auf dem Tisch steht.
              </p>
              <p>
                Unser Team begleitet durch die Karte, erklärt Gerichte und Zutaten und nimmt sich
                Zeit für Empfehlungen — aufmerksam und persönlich, ohne Eile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
