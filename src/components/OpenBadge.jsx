import useOpenStatus from '../hooks/useOpenStatus.js'

// Live-Indikator "Geöffnet / Geschlossen" auf Basis der echten
// Öffnungszeiten — beantwortet sofort eine der wichtigsten Fragen vor
// einer Reservierung, ohne dass Besucher erst zur Öffnungszeiten-Tabelle
// scrollen müssen.
export default function OpenBadge({ tone = 'dark', className = '' }) {
  const { open, label } = useOpenStatus()

  const toneClasses =
    tone === 'dark'
      ? 'border-cream/25 text-cream/90'
      : 'border-line text-charcoal/80'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.1em] ${toneClasses} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            open ? 'bg-emerald-500' : tone === 'dark' ? 'bg-cream/40' : 'bg-charcoal/35'
          }`}
        />
      </span>
      {label}
    </span>
  )
}
