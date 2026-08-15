import { useEffect, useState } from 'react'
import { restaurant } from '../data/restaurant.js'
import useOpenStatus from '../hooks/useOpenStatus.js'
import { InstagramIcon, WhatsAppIcon } from './icons.jsx'

// Fixe Reservierungsleiste für kleine Bildschirme: die wichtigste
// Conversion-Aktion (anrufen) bleibt jederzeit in Daumenreichweite, ohne
// den Hero-CTA zu duplizieren — sie erscheint erst, sobald der Hero
// verlassen wurde.
export default function MobileReserveBar() {
  const [visible, setVisible] = useState(false)
  const { open } = useOpenStatus()

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-1px 0px 0px 0px' }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <a
          href={restaurant.phoneHref}
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-terracotta py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-terracotta-dark"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            {open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />}
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${open ? 'bg-emerald-300' : 'bg-cream/50'}`} />
          </span>
          Anrufen · {restaurant.phoneDisplay}
        </a>
        {restaurant.whatsappUrl && (
          <a
            href={restaurant.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={visible ? 0 : -1}
            aria-label="SOGUM auf WhatsApp"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        )}
        <a
          href={`${restaurant.instagram.url}`}
          target="_blank"
          rel="noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label="SOGUM auf Instagram"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
