// Nachgebildetes SOGUM-Emblem (Schale mit Dampfschwung) im Stil des
// Original-Signets von der Fassade und der Speisekarte — als sauberes SVG,
// damit es in jeder Größe scharf bleibt.
export function LogoMark({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 44 36"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 15c3-1.5 4.5-4 3-7.5C7.7 3.8 10 1.3 13 2.2c2.4.7 2.6 3 1 4.6" />
      <path d="M4 17.5c0-1 .8-1.8 1.8-1.8h30.4c1 0 1.8.8 1.8 1.8 0 8-7.6 14.5-17 14.5S4 25.5 4 17.5Z" />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`font-display uppercase tracking-[0.32em] ${className}`}>
      Sogum
    </span>
  )
}

export default function Logo({ markClassName, textClassName, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName ?? 'h-6 w-6'} />
      <Wordmark className={textClassName ?? 'text-xl'} />
    </span>
  )
}
