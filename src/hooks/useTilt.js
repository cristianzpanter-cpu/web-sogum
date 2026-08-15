import { useEffect, useRef } from 'react'

const MAX_TILT = 6

// Sehr dezente, maus-getriebene 3D-Neigung für Karten. Reine CSS-Custom-
// Properties + transform, daher GPU-beschleunigt. Wirkt ausschließlich auf
// Geräten mit echtem Hover (Maus/Trackpad) — auf Touch-Geräten feuert
// "mousemove" gar nicht erst, das ist also von Haus aus kostenlos.
export default function useTilt() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--tilt-x', `${(-py * MAX_TILT).toFixed(2)}deg`)
      el.style.setProperty('--tilt-y', `${(px * MAX_TILT).toFixed(2)}deg`)
    }
    const onLeave = () => {
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}
