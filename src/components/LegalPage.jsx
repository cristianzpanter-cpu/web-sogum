import { restaurant } from '../data/restaurant.js'
import Logo from './Logo.jsx'

// Impressum & Datenschutzerklärung — mit ausschließlich verifizierten
// Angaben aus restaurant.js befüllt. Rechtsform, Umsatzsteuer-ID und eine
// dedizierte Datenschutz-Kontaktadresse liegen uns nicht vor und werden
// hier bewusst NICHT erfunden, sondern klar als offen markiert (dieselbe
// Praxis wie die Platzhalter-Domain, siehe README.md).
function TodoNote({ children }) {
  return (
    <p className="mt-2 rounded-sm border border-dashed border-terracotta/40 bg-terracotta/5 px-4 py-3 text-[13px] leading-relaxed text-terracotta-dark">
      {children}
    </p>
  )
}

function Impressum() {
  return (
    <>
      <h1 className="font-display text-4xl font-light text-ink sm:text-5xl">Impressum</h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-charcoal/85">
        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Angaben zum Anbieter
          </h2>
          <p className="mt-3">
            {restaurant.name}
            <br />
            Inhaber: {restaurant.owners}
            <br />
            {restaurant.address.street}
            <br />
            {restaurant.address.zipCity}
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">Kontakt</h2>
          <p className="mt-3">
            Telefon: <a href={restaurant.phoneHref} className="underline decoration-line underline-offset-4 hover:text-terracotta">{restaurant.phoneDisplay}</a>
            <br />
            Instagram:{' '}
            <a href={restaurant.instagram.url} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:text-terracotta">
              {restaurant.instagram.handle}
            </a>
          </p>
          <TodoNote>
            Für eine vollständige Anbieterkennzeichnung fehlt uns aktuell eine
            geschäftliche E-Mail-Adresse — bitte vor Veröffentlichung ergänzen.
          </TodoNote>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Inhaltlich verantwortlich
          </h2>
          <p className="mt-3">{restaurant.owners}, Anschrift wie oben.</p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Weitere Pflichtangaben
          </h2>
          <TodoNote>
            Rechtsform, ein eventueller Handelsregistereintrag und die
            Umsatzsteuer-Identifikationsnummer liegen uns nicht vor und werden
            vor Veröffentlichung ergänzt.
          </TodoNote>
        </section>
      </div>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <h1 className="font-display text-4xl font-light text-ink sm:text-5xl">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-charcoal/85">
        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Verantwortlicher
          </h2>
          <p className="mt-3">
            {restaurant.name}, Inhaber {restaurant.owners}
            <br />
            {restaurant.address.street}, {restaurant.address.zipCity}
            <br />
            Telefon: {restaurant.phoneDisplay}
          </p>
          <TodoNote>
            Für datenschutzrechtliche Anfragen fehlt uns aktuell eine
            dedizierte E-Mail-Adresse — bitte vor Veröffentlichung ergänzen.
          </TodoNote>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Hosting &amp; Server-Logs
          </h2>
          <p className="mt-3">
            Diese Website wird bei einem externen Webhosting-Anbieter gehostet. Beim Aufruf der
            Seite verarbeitet der Anbieter automatisch technische Daten (u. a. IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser) in
            Server-Logdateien. Diese Verarbeitung ist für den technischen Betrieb und die
            Sicherheit der Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Cookies &amp; Tracking
          </h2>
          <p className="mt-3">
            Diese Website selbst setzt keine Cookies und bindet keine Analyse- oder
            Tracking-Dienste ein.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Google Maps
          </h2>
          <p className="mt-3">
            Im Bereich „Besuchen Sie uns" ist eine Karte von Google Maps eingebunden. Beim
            Laden dieses Kartenausschnitts stellt Ihr Browser eine Verbindung zu Servern von
            Google Ireland Limited her; dabei kann Ihre IP-Adresse an Google übertragen werden.
            Dies geschieht unabhängig davon, ob Sie mit der Karte interagieren.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            Externe Links: Reservierung, Instagram
          </h2>
          <p className="mt-3">
            Die Schaltflächen „Online reservieren" führen zu einem externen
            Reservierungsanbieter (Dish.co), die Instagram-Links zu instagram.com. Sobald Sie
            diese Seiten aufrufen, gilt deren jeweilige Datenschutzerklärung — wir haben
            keinen Einfluss auf die dortige Datenverarbeitung.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/55">Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde, für Hessen beim Hessischen Beauftragten für
            Datenschutz und Informationsfreiheit.
          </p>
        </section>
      </div>
    </>
  )
}

export default function LegalPage({ type }) {
  const homeHref = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10 lg:py-24">
        <a
          href={homeHref}
          className="link-underline inline-flex items-center gap-2 pb-1 text-[13px] font-medium uppercase tracking-[0.14em] text-charcoal/70 hover:text-terracotta"
        >
          ← Zurück zu SOGUM
        </a>

        <div className="mt-10">{type === 'impressum' ? <Impressum /> : <Datenschutz />}</div>

        <div className="mt-16 border-t border-line pt-8">
          <Logo markClassName="h-6 w-6 text-terracotta" textClassName="text-lg text-ink" />
        </div>
      </div>
    </div>
  )
}
