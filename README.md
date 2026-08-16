# SOGUM — Restaurant-Website

Website für **SOGUM**, koreanisches Restaurant in Frankfurt-Nordend
(Glauburgstraße 34). Gebaut mit React, Vite und Tailwind CSS auf Basis
echter Fotos, der echten Speisekarte und öffentlich verifizierbarer
Angaben zum Restaurant (Adresse, Telefon, Öffnungszeiten, Instagram).

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first `@theme`-Konfiguration in `src/index.css`)
- Selbst gehostete Fonts (`@fontsource/fraunces`, `@fontsource/inter`) —
  kein Aufruf externer Google-Fonts-Server

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Projektstruktur

```
src/
  assets/img/       Optimierte Fotos (WebP), die tatsächlich verwendet werden
  components/       Eine Komponente je Sektion
  data/restaurant.js  Alle Fakten: Adresse, Öffnungszeiten, Speisekarte, Preise
  lib/images.js      Zentrale Bild-Registry (Dateiname -> Vite-URL)
  hooks/useReveal.js Scroll-Reveal-Hook (IntersectionObserver + MutationObserver)
assets-original/    Unbearbeitete Originalfotos vom Kunden (nicht Teil des Builds)
```

## Inhalte pflegen

Alle Texte, Preise und Kontaktdaten liegen zentral in
`src/data/restaurant.js` — dort ändern, nicht in den Komponenten.
Neue Fotos: als `.webp` in `src/assets/img/` ablegen und in
`src/data/restaurant.js` (z. B. `galleryImages`) referenzieren.

## SEO, Performance & Barrierefreiheit

- **Strukturierte Daten**: `StructuredData.jsx` injiziert Schema.org
  `Restaurant`-JSON-LD zur Laufzeit (Adresse, Telefon, Öffnungszeiten,
  Preisklasse, Bilder) direkt aus `restaurant.js`.
- **Social-Vorschau**: Open-Graph-/Twitter-Card-Tags in `index.html`,
  eigens gerendertes `public/og-image.jpg` (1200×630) im Corporate Design.
- **Icons/Manifest**: `favicon.svg`, `icon-180/192/512.png`,
  `site.webmanifest` — installierbar als Web-App.
- **robots.txt** / **sitemap.xml** in `public/`.
- **Barrierefreiheit**: "Zum Inhalt springen"-Link, sichtbarer
  Fokusring, `prefers-reduced-motion` respektiert, Tabs/Legende mit
  korrekten ARIA-Rollen, alle Textfarben auf WCAG-AA-Kontrast geprüft.
- **Conversion**: fixe Reservierungsleiste auf Mobilgeräten (erscheint
  nach dem Hero), großzügiges Vollbild-Mobilmenü.

## Offene Punkte für den Kunden

- **Domain**: `index.html`, `public/robots.txt` und `public/sitemap.xml`
  enthalten aktuell die Platzhalter-Domain `https://example.com` (klar
  markiert). Vor dem Go-Live an drei Stellen durch die echte Domain
  ersetzen, sonst zeigen Suchmaschinen- und Social-Vorschauen falsche
  Adressen.
- Online-Reservierung läuft über Dish.co (`reservationUrl` in
  `restaurant.js`); Instagram-DM wird nirgends mehr als
  Reservierungsweg beworben, nur noch als Social-Media-Kontakt.
- Kein offizielles Logo-Bild vorhanden — das Emblem in `Logo.jsx` ist als
  SVG nachgebaut. Bei Erhalt einer Vektor-/Original-Datei einfach
  `LogoMark` ersetzen.
- `priceRange: "€€"` im JSON-LD (`StructuredData.jsx`) ist aus den
  Kartenpreisen abgeleitet, keine offizielle Einstufung — bei Bedarf
  anpassen.
