import { useEffect, useRef } from 'react'

// Sehr sanftes Scroll-Parallax für das Hero-Bild: das Bild bewegt sich
// einen Bruchteil der Scrollgeschwindigkeit, was der Fläche Tiefe gibt.
// rAF-gedrosselt und nur transform (keine Layout-Eigenschaften), damit es
// auch auf mobilen Geräten ruckelfrei bleibt. Deaktiviert sich komplett
// bei reduzierter Bewegung.
export default function useParallax(speed = 0.12, max = 36) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false

    const apply = () => {
      ticking = false
      const rect = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      // Nur berechnen/anwenden, während der Hero überhaupt im Blickfeld ist.
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const offset = Math.max(-max, Math.min(max, rect.top * speed * -1))
      el.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, max])

  return ref
}
