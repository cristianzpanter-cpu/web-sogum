import { useEffect } from 'react'
import { restaurant } from '../data/restaurant.js'
import images from '../lib/images.js'

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

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.dataset.sogumSeo = 'restaurant'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
