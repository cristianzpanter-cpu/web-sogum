// Zentrale Sammlung kleiner Inline-Icons, die an mehreren Stellen der
// Seite wiederverwendet werden (Telefon, Instagram, WhatsApp, Standort),
// damit dasselbe SVG-Markup nicht mehrfach dupliziert wird.

export function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5c0-.55.45-1 1-1h2.6c.5 0 .92.36 1 .85l.7 4.1a1 1 0 0 1-.5 1.05l-1.7 1c1 2.2 2.7 3.9 4.9 4.9l1-1.7a1 1 0 0 1 1.05-.5l4.1.7c.5.08.85.5.85 1V18c0 .55-.45 1-1 1h-1.5C9.6 19 5 14.4 5 8.5V7"
      />
    </svg>
  )
}

export function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 20l1.3-3.9A7.9 7.9 0 1 1 8.9 19L4 20Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 9.7c0 3.4 2.9 6.3 6.3 6.3" strokeLinecap="round" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}
