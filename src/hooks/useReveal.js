import { useEffect, useRef } from 'react'

// Fügt Elementen mit [data-reveal] die Klasse "is-visible" hinzu, sobald sie
// in den Viewport scrollen. Leichtgewichtige Alternative zu Animations-Libs.
// Ein MutationObserver ergänzt Elemente, die erst später dazukommen (z. B.
// nach einem Tab-Wechsel), damit sie nicht dauerhaft unsichtbar bleiben.
export default function useReveal() {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    const collect = (root) => {
      if (root.nodeType !== 1) return
      if (root.matches?.('[data-reveal]')) io.observe(root)
      root.querySelectorAll?.('[data-reveal]').forEach((el) => io.observe(el))
    }

    collect(scope)

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => collect(node))
      }
    })
    mo.observe(scope, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return scopeRef
}
