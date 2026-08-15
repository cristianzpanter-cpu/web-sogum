// Zentrales Register aller echten Restaurantfotos.
// Vite bundelt & hasht jede Datei automatisch; hier bauen wir nur eine
// einfache Lookup-Map von Dateiname (ohne Endung) -> finale URL.
const modules = import.meta.glob('../assets/img/*.webp', {
  eager: true,
  import: 'default',
})

const images = {}
for (const path in modules) {
  const key = path.split('/').pop().replace('.webp', '')
  images[key] = modules[path]
}

export default images
