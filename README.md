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

## Offene Punkte für den Kunden

- Online-Reservierungssystem ist noch nicht angebunden (aktuell Anruf /
  Instagram-DM) — Platzhalter-Hinweis in `VisitInfo.jsx`.
- Kein offizielles Logo-Bild vorhanden — das Emblem in `Logo.jsx` ist als
  SVG nachgebaut. Bei Erhalt einer Vektor-/Original-Datei einfach
  `LogoMark` ersetzen.
