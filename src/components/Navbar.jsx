import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { restaurant } from '../data/restaurant.js'

const LINKS = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kueche', label: 'Küche' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#besuch', label: 'Besuch' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-cream/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-sm' : 'bg-transparent'
      }`}
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
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative pb-1 transition-colors hover:text-terracotta">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={restaurant.phoneHref}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
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
          className={`grid h-9 w-9 place-items-center lg:hidden ${solid ? 'text-ink' : 'text-cream'}`}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
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
        className={`grid overflow-hidden bg-cream transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 pb-8 pt-2 text-base">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 uppercase tracking-[0.1em] text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-8">
            <a
              href={restaurant.phoneHref}
              className="block rounded-full bg-terracotta py-3.5 text-center text-sm font-medium uppercase tracking-[0.14em] text-cream"
            >
              Tisch reservieren
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
