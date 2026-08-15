// Alle Angaben stammen direkt vom Kunden oder aus öffentlich zugänglichen,
// verifizierbaren Quellen (u. a. genussmagazin-frankfurt.de). Es wurden
// keine Preise, Gerichte, Öffnungszeiten oder Bewertungen erfunden.

export const restaurant = {
  name: 'SOGUM',
  claim: 'Koreanische Küche',
  tagline: 'Wärme in jeder Schale',
  meaningNote: '„Sogum“ bedeutet Salz auf Koreanisch.',

  phoneDisplay: '069 40791834',
  phoneHref: 'tel:+496940791834',

  address: {
    street: 'Glauburgstraße 34',
    zipCity: '60318 Frankfurt am Main',
    district: 'Nordend',
    mapsQuery: 'Glauburgstraße 34, 60318 Frankfurt am Main',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Glauburgstra%C3%9Fe+34%2C+60318+Frankfurt+am+Main',
  },

  instagram: {
    handle: '@sogum_ffm',
    url: 'https://www.instagram.com/sogum_ffm/',
  },

  hours: [
    { day: 'Montag – Samstag', time: '11:30 – 14:30 Uhr' },
    { day: 'Montag – Samstag', time: '17:30 – 21:00 Uhr' },
    { day: 'Sonntag', time: 'Ruhetag' },
  ],

  owners: 'Jinseok Oh & Daejin Kim',

  priceNote: 'Beilagen ab 2,50 € · Hauptgerichte 12–20 € · Gerichte zum Teilen 12–30 €',
}

// Signature-/Aushängeschilder-Gerichte für die Startseite
export const signatureDishes = [
  {
    id: 'gomtang',
    name: 'Dätschigomtang',
    korean: '돼지곰탕',
    price: '18,00 €',
    description:
      'Klare Schweinebrühe, stundenlang mit Schweinenacken und Gemüse sanft geköchelt. Serviert mit zart aufgeschnittenem Fleisch und Reis — das Signature-Gericht des Hauses.',
    image: 'dish-gomtang',
  },
  {
    id: 'galbi',
    name: 'Galbi',
    korean: '양념갈비',
    price: '30,00 €',
    description:
      'Rinderrippen, 14 Stunden sous-vide gegart, mit koreanischer Sojasaucen-Marinade glasiert und über offenem Feuer gegrillt. Serviert mit Ssam, Kohlrabi-Saengchae und Ssamjang.',
    image: 'dish-galbi-hero',
  },
  {
    id: 'geotjeori',
    name: 'Geotjeori',
    korean: '배추 겉절이',
    price: '6,50 €',
    description:
      'Hausgemachtes Kimchi aus saisonalem Chinakohl, mit gerösteten Nüssen und Schnittlauch verfeinert. Scharf, frisch und jeden Tag neu angesetzt.',
    image: 'dish-kimchi',
  },
  {
    id: 'roteBete',
    name: 'Rote Bete Nängchä',
    korean: '제철 레드비트 냉채',
    price: '12,00 €',
    description:
      'Sous-vide gegarte rote Bete mit blanchierten Prinzessbohnen, Erbsenkresse und Kräutern, dazu ein Doenjang-Zitronen-Aioli — das saisonale Gericht der Karte.',
    image: 'dish-beet',
  },
]

// Vollständige Speisekarte
export const menu = {
  categories: [
    {
      title: 'Gomtang',
      korean: '곰탕',
      items: [
        {
          name: 'Dätschigomtang',
          korean: '돼지곰탕',
          description: 'Klare Schweinebrühe, stundenlang mit Schweinenacken und Gemüse sanft geköchelt. Serviert mit zart aufgeschnittenem Fleisch und Reis.',
          allergens: '4, i',
          price: '18,00 €',
          note: 'Extra Fleisch +3,00 €',
        },
      ],
    },
    {
      title: 'Hauptgerichte',
      items: [
        {
          name: 'Sanchä Bibimbab',
          korean: '산채 비빔밥',
          tag: 'Vegan',
          description: 'Traditionelle koreanische Bibimbab mit Bergkräutern, Waldgemüse und Bärlauch-Doenjang.',
          allergens: 'a, f',
          price: '18,00 €',
        },
      ],
    },
    {
      title: 'Saisonales Gericht',
      items: [
        {
          name: 'Rote Bete Nängchä',
          korean: '제철 레드비트 냉채',
          description: 'Sous-vide gegarte rote Bete, blanchierte Prinzessbohnen, Erbsenkresse und Kräuter, Doenjang-Zitronen-Aioli.',
          allergens: 'c, f, k',
          price: '12,00 €',
        },
      ],
    },
    {
      title: 'Gerichte zum Teilen',
      items: [
        {
          name: 'Sundä',
          korean: '백암 순대',
          description: 'Koreanische Wurst aus Schweinedarm, gefüllt mit Schweinebacken, Weißkohl, Mungobohnensprossen, Zwiebeln, Lauch und Karotten, abgerundet mit Perilla-Samen und sanft gegart nach Baegam-Art.',
          allergens: 'k',
          price: 'Groß 18,00 € · Klein 12,00 €',
        },
        {
          name: 'Säu Jang',
          korean: '새우장',
          description: 'Schwarze Tigergarnelen, roh in koreanischer Sojasauce mariniert, Kapuzinerkresse, Zwiebel, Meerrettichcreme, gerösteter Sesam.',
          allergens: 'a, b, f, k',
          price: '16,00 €',
        },
        {
          name: 'Mäk Jeok',
          korean: '맥적',
          description: 'Koreas älteste Grilltradition: Iberisches Secreto, mariniert in Doenjang und über offenem Feuer gegrillt. Serviert mit Blumenkohlpüree und Lauch-Zwiebeln-Kimchi.',
          allergens: 'a, d, f, k',
          price: '20,00 €',
        },
        {
          name: 'Yuk Höe',
          korean: '육회',
          description: 'Koreanisches Beef Tartare, gewürzt mit Gochujang. Serviert mit knusprigen Gouda-Chips.',
          allergens: 'a, f',
          price: '20,00 €',
        },
        {
          name: 'Galbi',
          korean: '양념갈비',
          description: 'Rinderrippen, 14 Stunden sous-vide gegart, mit koreanischer Sojasaucen-Marinade glasiert und über offenem Feuer gegrillt. Serviert mit Ssam, Kohlrabi-Saengchae und Ssamjang.',
          allergens: 'f, k',
          price: '30,00 €',
        },
      ],
    },
    {
      title: 'Beilagen',
      items: [
        {
          name: 'Hausgemachtes Kimchi',
          korean: '직접 담근 김치',
          description: 'Hausgemachtes Kimchi aus saisonalem Gemüse. Scharf.',
          allergens: 'd, h',
          price: '6,50 €',
        },
        {
          name: 'Reis',
          korean: '공기밥',
          description: '',
          allergens: '',
          price: '2,50 €',
        },
      ],
    },
    {
      title: 'Dessert',
      items: [
        {
          name: 'Yeoreum',
          korean: '여름',
          tag: '„der Sommer“',
          description: 'Schwarzsesam-Käsetarte mit Zitrone, Kompott aus regionalen Saison-Kirschen in Holunderblütensirup, Zitronenabrieb, Dill und Oxalis.',
          allergens: 'a, c, g, k',
          price: '8,00 €',
        },
      ],
    },
  ],
  drinks: [
    {
      title: 'Koreanischer Alkohol',
      items: [
        { name: 'Soju 16,5 %, 350 ml', note: 'Chamisul fresh · Saero', price: '10,00 €' },
        { name: 'OVA Makgeolli 6 %, 750 ml', price: '16,00 €' },
        { name: 'HWAYO 25 %, 375 ml', price: '30,00 €' },
        { name: 'BEKSEJU 13 %, 375 ml', price: '16,00 €' },
      ],
    },
    {
      title: 'Bier',
      items: [
        { name: 'Cass koreanisches Bier 6 %, 0,33 l', price: '4,50 €' },
        { name: 'Krombacher Pils, 0,33 l', price: '3,50 €' },
        { name: 'Starnberger Hell, 0,33 l', price: '3,50 €' },
        { name: 'Krombacher Hefeweizen Hell, 0,5 l', price: '4,50 €' },
      ],
    },
    {
      title: 'Alkoholfreie Getränke',
      items: [
        { name: 'Seoul Breeze — Yuzu Pale Ale, 0,33 l', note: 'Empfehlung', price: '5,00 €' },
        { name: 'Krombacher Pils alkoholfrei, 0,33 l', price: '3,50 €' },
        { name: 'Coca-Cola / Cola Zero, 0,33 l', price: '3,50 €' },
        { name: 'Sprite, 0,33 l', price: '3,50 €' },
        { name: 'Fanta, 0,33 l', price: '3,50 €' },
        { name: 'Apfelschorle', price: '3,50 €' },
        { name: 'Schweppes Ginger Ale / Bitter Lemon, 0,2 l', price: '3,50 €' },
        { name: "Richard's Sun Iced Tea, Peach / Lemon, 0,33 l", price: '3,50 €' },
        { name: 'Vöslauer Mineralwasser, still/prickelnd', note: '0,25 l · 0,75 l', price: '2,80 € · 4,80 €' },
      ],
    },
  ],
  allergenLegend: {
    additives: [
      '1 mit Farbstoff', '2 mit Konservierungsstoff', '3 mit Antioxidationsmittel',
      '4 mit Geschmacksverstärker', '5 geschwefelt', '6 geschwärzt', '7 mit Phosphat',
      '8 mit Milcheiweiß (bei Fleischerzeugnissen)', '9 koffeinhaltig', '10 chininhaltig',
      '11 mit Süßungsmittel', '13 gewachst',
    ],
    allergens: [
      'a Glutenhaltiges Getreide', 'b Krebstiere und daraus gewonnene Erzeugnisse',
      'c Eier und daraus gewonnene Erzeugnisse', 'd Fische und daraus gewonnene Erzeugnisse',
      'e Erdnüsse und daraus gewonnene Erzeugnisse', 'f Soja (Bohnen) und daraus gewonnene Erzeugnisse',
      'g Milch und daraus gewonnene Erzeugnisse', 'h Schalenfrüchte (Mandeln, Haselnüsse, Walnüsse usw.)',
      'i Sellerie und daraus gewonnene Erzeugnisse', 'j Senf und daraus gewonnene Erzeugnisse',
      'k Sesamsamen und daraus gewonnene Erzeugnisse', 'l Schwefeldioxid und Sulfite',
      'm Lupinen und daraus gewonnene Erzeugnisse', 'n Weichtiere und daraus gewonnene Erzeugnisse',
    ],
  },
}

// Galerie — alle Fotos, unabhängig von der Verwendung in anderen Sektionen
export const galleryImages = [
  { id: 'facade-day', image: 'facade-day', alt: 'Fassade von SOGUM in der Glauburgstraße, Frankfurt' },
  { id: 'dish-galbi-hero', image: 'dish-galbi-hero', alt: 'Galbi — geschmorte Rinderrippen in würziger Sauce' },
  { id: 'dish-croquettes', image: 'dish-croquettes', alt: 'Knusprige Garnelen-Küchlein mit Rucola' },
  { id: 'dish-galbi-table', image: 'dish-galbi-table', alt: 'Galbi, serviert mit Süßkartoffel am Tisch' },
  { id: 'dish-shrimp-cakes', image: 'dish-shrimp-cakes', alt: 'Gebratene Garnelen-Küchlein mit Salat' },
  { id: 'dish-beet', image: 'dish-beet', alt: 'Rote Bete Nängchä auf der Restaurant-Terrasse' },
  { id: 'dish-kimchi', image: 'dish-kimchi', alt: 'Hausgemachtes Kimchi mit gerösteten Nüssen' },
  { id: 'dish-jokpyeon', image: 'dish-jokpyeon', alt: 'Fein aufgeschnittenes Jokpyeon mit Rucola' },
  { id: 'dish-galbi-close', image: 'dish-galbi-close', alt: 'Galbi in Nahaufnahme, mit Frühlingszwiebeln' },
  { id: 'dish-gomtang', image: 'dish-gomtang', alt: 'Dätschigomtang — klare Schweinebrühe mit Fleisch' },
  { id: 'facade-street', image: 'facade-street', alt: 'Straßenansicht der Sandsteinfassade in Frankfurt-Nordend' },
]
