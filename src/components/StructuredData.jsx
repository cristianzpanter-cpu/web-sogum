import { useEffect } from 'react'
import { restaurant, menu } from '../data/restaurant.js'
import images from '../lib/images.js'
import { FAQ_ITEMS } from '../data/faq.js'

// Baut aus derselben Speisekarten-Datenquelle, die auch Menu.jsx
// rendert, ein schema.org/Menu-Objekt — keine zweite Abschrift der
// Gerichte, die aus dem Ruder laufen könnte. Preise werden bewusst NICHT
// als strukturiertes Offer/price übernommen: mehrere Gerichte haben
// zusammengesetzte Preisangaben (z. B. "Groß 18,00 € · Klein 12,00 €"),
// die kein gültiges schema.org-Preisformat ergäben.
function buildMenuSchema() {
  return {
    '@type': 'Menu',
    hasMenuSection: menu.categories.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
      })),
    })),
  }
}

// Injiziert Schema.org-Restaurant-Markup (JSON-LD) zur Laufzeit, damit
// Bild-URLs korrekt auf die von Vite gehashten Asset-Pfade zeigen und alle
// Angaben aus derselben Datenquelle wie der Rest der Seite stammen.
export default function StructuredData() {
  useEffect(() => {
    const origin = window.location.origin
    const absolute = (path) => new URL(path, origin).toString()

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: restaurant.name,
      description:
        'Koreanisches Restaurant im Frankfurter Nordend — traditionelle koreanische Küche, neu gedacht mit regionalen Zutaten.',
      image: [
        absolute(images['facade-day']),
        absolute(images['dish-galbi-hero']),
        absolute(images['dish-gomtang']),
      ],
      servesCuisine: 'Korean',
      priceRange: '€€',
      telephone: restaurant.phoneDisplay,
      url: origin,
      address: {
        '@type': 'PostalAddress',
        streetAddress: restaurant.address.street,
        postalCode: '60318',
        addressLocality: 'Frankfurt am Main',
        addressRegion: 'Hessen',
        addressCountry: 'DE',
      },
      sameAs: [restaurant.instagram.url],
      acceptsReservations: true,
      hasMenu: buildMenuSchema(),
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: restaurant.reservationUrl,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Tischreservierung bei SOGUM',
        },
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '11:30',
          closes: '14:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '17:30',
          closes: '21:00',
        },
      ],
    }

    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.dataset.sogumSeo = 'restaurant'
    document.head.appendChild(script)

    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.text = JSON.stringify(faqData)
    faqScript.dataset.sogumSeo = 'faq'
    document.head.appendChild(faqScript)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(faqScript)
    }
  }, [])

  return null
}
