import { useEffect, useState } from 'react'
import { restaurant } from '../data/restaurant.js'

const DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

function formatMinutes(mins) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} Uhr`
}

// Aktuelle Uhrzeit in Frankfurt (Europe/Berlin), unabhängig von der
// Zeitzone des Besuchers — die Öffnungszeiten gelten vor Ort.
function frankfurtNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date())

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]))
  const weekdayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[map.weekday]
  const hour = map.hour === '24' ? 0 : Number(map.hour)
  return { day: weekdayIndex, minutes: hour * 60 + Number(map.minute) }
}

function rangesForDay(day) {
  return restaurant.openingHours
    .filter((block) => block.days.includes(day))
    .flatMap((block) => block.ranges)
    .sort((a, b) => a[0] - b[0])
}

function computeStatus() {
  const { day, minutes } = frankfurtNow()

  const today = rangesForDay(day)
  const activeRange = today.find(([start, end]) => minutes >= start && minutes < end)
  if (activeRange) {
    return { open: true, label: `Geöffnet · schließt um ${formatMinutes(activeRange[1])}` }
  }

  const laterToday = today.find(([start]) => start > minutes)
  if (laterToday) {
    return { open: false, label: `Geschlossen · öffnet heute um ${formatMinutes(laterToday[0])}` }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7
    const ranges = rangesForDay(nextDay)
    if (ranges.length > 0) {
      const when = offset === 1 ? 'morgen' : `am ${DAY_NAMES[nextDay]}`
      return { open: false, label: `Geschlossen · öffnet ${when} um ${formatMinutes(ranges[0][0])}` }
    }
  }

  return { open: false, label: 'Geschlossen' }
}

// Live-Öffnungsstatus auf Basis der echten Öffnungszeiten aus
// restaurant.js — aktualisiert sich jede Minute, ohne dass die Seite neu
// geladen werden muss.
export default function useOpenStatus() {
  const [status, setStatus] = useState(computeStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(computeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}
