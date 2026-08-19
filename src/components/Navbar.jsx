import { useEffect, useRef, useState } from 'react'
import Logo from './Logo.jsx'
import { restaurant } from '../data/restaurant.js'

// Reihenfolge entspricht bewusst der tatsächlichen Reihenfolge der
// Sektionen auf der Seite (Über uns → Küche → Galerie → Speisekarte →
// Besuch), damit die Navigation vorhersagbar bleibt.
const LINKS = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kueche', label: 'Küche' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#besuch', label: 'Besuch' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const firstLinkRef = useRef(null)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      // Dynamischer Header nur auf Mobil/Tablet (< lg): beim Runterscrollen
      // aus dem Weg, beim Hochscrollen sofort wieder da — maximiert die
      // sichtbare Fläche für Fotos auf kleinen Bildschirmen, ohne die
      // Desktop-Nav (immer sichtbar) zu verändern.
      if (window.innerWidth < 1024) {
        const delta = y - lastY.current
        if (y < 80) {
          setHidden(false)
        } else if (delta > 6) {
          setHidden(true)
        } else if (delta < -6) {
          setHidden(false)
        }
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hebt in der Navigation die Sektion hervor, die gerade im Sichtbereich
  // ist — ein Detail, das viele Restaurant-Websites auslassen, aber sofort
  // Orientierung beim Scrollen gibt.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActiveHash(`#${topMost.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) firstLinkRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,transform] duration-500 ${
        solid ? 'bg-cream/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-sm' : 'bg-transparent'
      } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className={`transition-colors duration-500 ${solid ? 'text-ink' : 'text-cream'}`}
          aria-label="SOGUM — Startseite"
        >
          <Logo markClassName="h-6 w-6" textClassName="text-lg" />
        </a>

        <ul className={`hidden items-center gap-9 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 lg:flex ${solid ? 'text-charcoal' : 'text-cream/90'}`}>
          {LINKS.map((link) => {
            const isActive = activeHash === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`link-underline pb-1 ${isActive ? 'link-underline-active' : ''} ${
                    solid ? 'hover:text-terracotta' : 'hover:text-gold'
                  } ${isActive && solid ? 'text-terracotta' : ''} ${isActive && !solid ? 'text-gold' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href={restaurant.reservationUrl}
            target="_blank"
            rel="noreferrer"
            className={`lift-on-hover inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] ${
              solid
                ? 'border-terracotta text-terracotta hover:bg-terracotta hover:text-cream'
                : 'border-cream/60 text-cream hover:bg-cream hover:text-ink'
            }`}
          >
            Tisch reservieren
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-10 -mr-2.5 grid h-11 w-11 place-items-center transition-transform duration-150 active:scale-90 lg:hidden ${solid ? 'text-ink' : 'text-cream'}`}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition-all duration-300 ${open ? 'top-1/2 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-all duration-300 ${open ? 'bottom-1/2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Hauptmenü"
        className={`fixed inset-0 top-0 h-[100dvh] bg-cream transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-[1.02] opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pb-20">
          <ul className="flex flex-col gap-1 font-display text-3xl">
            {LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${i * 55 + 90}ms` : '0ms' }}
              >
                <a
                  ref={i === 0 ? firstLinkRef : null}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block border-b border-line py-4 text-charcoal transition-[color,transform] duration-150 hover:text-terracotta active:scale-[0.98]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`mt-10 space-y-4 transition-all duration-500 ease-out ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: open ? `${LINKS.length * 55 + 90}ms` : '0ms' }}
          >
            <a
              href={restaurant.reservationUrl}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              className="lift-on-hover block rounded-full bg-terracotta py-4 text-center text-sm font-medium uppercase tracking-[0.14em] text-cream"
            >
              Online reservieren
            </a>
            <a
              href={restaurant.phoneHref}
              tabIndex={open ? 0 : -1}
              className="lift-on-hover block rounded-full border border-terracotta py-4 text-center text-sm font-medium uppercase tracking-[0.14em] text-terracotta"
            >
              Anrufen · {restaurant.phoneDisplay}
            </a>
            <a
              href={restaurant.instagram.url}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              className="block text-center text-[13px] uppercase tracking-[0.14em] text-charcoal/70"
            >
              {restaurant.instagram.handle}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
