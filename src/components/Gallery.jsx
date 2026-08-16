import { useCallback, useEffect, useState } from 'react'
import images from '../lib/images.js'
import { galleryImages } from '../data/restaurant.js'

// Bewusst unregelmäßiges Rasterlayout, damit die Galerie nicht wie ein
// generisches Foto-Grid wirkt.
const SPANS = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % galleryImages.length),
    []
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, next, prev])

  return (
    <section id="galerie" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="reveal max-w-xl">
          <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-terracotta">
            Galerie
          </span>
          <h2 className="font-display text-balance mt-4 text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            Einblicke ins Haus
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:auto-rows-[260px]">
          {galleryImages.map((item, i) => (
            <button
              key={item.id}
              type="button"
              data-reveal
              onClick={() => setActiveIndex(i)}
              className={`reveal group relative overflow-hidden rounded-sm shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-500 hover:z-10 hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,0.4)] ${SPANS[i % SPANS.length]}`}
              style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              aria-label={`${item.alt} — vergrößern`}
            >
              <img
                src={images[item.image]}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-4 py-10 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[galleryImages[activeIndex].image]}
              alt={galleryImages[activeIndex].alt}
              className="max-h-[80vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">
              {galleryImages[activeIndex].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Nächstes Bild"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
