import { menu, restaurant } from './restaurant.js'

// Antworten leiten sich ausschließlich aus bereits vorhandenen, echten
// Daten ab (Öffnungszeiten, Menü-Tags, Reservierungslink) — nichts davon
// wird hier neu erfunden. Der Öffnungszeiten-Text wird bewusst aus
// restaurant.hours zusammengesetzt statt hart codiert, damit er nie von
// der eigentlichen Datenquelle abweichen kann.
const hoursAnswer = `${restaurant.hours.map((h) => `${h.day} ${h.time}`).join(', ')}.`

export const FAQ_ITEMS = [
  {
    question: 'Muss ich einen Tisch reservieren?',
    answer:
      'Eine Reservierung wird besonders an Wochenenden empfohlen. Sie können bequem online reservieren oder uns direkt anrufen.',
  },
  {
    question: 'Gibt es vegane oder vegetarische Gerichte?',
    answer: `Ja — die ${menu.categories.flatMap((c) => c.items).find((i) => i.tag === 'Vegan')?.name ?? 'Sanchä Bibimbab'} ist vegan. Unser Team berät Sie gerne persönlich zu weiteren Optionen.`,
  },
  {
    question: 'Sind Allergene auf der Karte gekennzeichnet?',
    answer:
      'Ja, jedes Gericht ist mit den gesetzlich vorgeschriebenen Allergenen und Zusatzstoffen gekennzeichnet — einsehbar direkt in der Speisekarte.',
  },
  {
    question: 'Wann hat SOGUM geöffnet?',
    answer: hoursAnswer,
  },
]
