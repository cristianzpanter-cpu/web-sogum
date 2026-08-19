import { useEffect, useState } from 'react'

// Sehr schlanker Ersatz für einen Router: SOGUM ist eine Ein-Seiten-Site
// mit Anchor-Navigation, daher genügt es, die zwei Rechtsseiten
// (Impressum/Datenschutz) über den Hash zu erkennen. GitHub Pages hat
// keinen Server-seitigen Rewrite auf index.html — ein echter Pfad-Router
// würde bei Direktaufruf/Reload 404en, ein Hash dagegen funktioniert
// überall rein clientseitig.
const LEGAL_HASHES = ['#impressum', '#datenschutz']

export default function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return LEGAL_HASHES.includes(hash) ? hash.slice(1) : null
}
