// Content for the "KI-Werkstatt" variant – aimed at German Handwerksbetriebe.
// Structure mirrors the C&C journey but the stages are framed by concrete
// time-eating pain points (Angebote, Doku, Personal, …) rather than by
// AI concepts.

export const stages = [
  {
    id: 'start',
    order: 0,
    emoji: '🚀',
    title: 'Erste Schritte',
    subtitle: 'In 20 Minuten startklar – auch ohne IT-Erfahrung',
    summary:
      'Damit du gleich loslegen kannst: ChatGPT auf dem Handy, per Sprache statt Tippen – und was du tun musst, damit du nicht jeden Abend bei Null anfängst.',
    lessons: [
      { id: 'start-1', title: 'ChatGPT auf dem Handy einrichten', duration: '8 Min' },
      { id: 'start-2', title: 'Per Sprache statt Tippen', duration: '10 Min' },
    ],
  },
  {
    id: 'kommunikation',
    order: 1,
    emoji: '💬',
    title: 'Kundenkommunikation',
    subtitle: 'E-Mails, WhatsApp, Anfragen – höflich und schnell',
    summary:
      'Schluss mit „muss ich heute Abend noch beantworten". Souveräne Antworten in Minuten – auch bei schwierigen Kunden.',
    lessons: [
      { id: 'komm-1', title: 'Schwierige Mails diplomatisch beantworten', duration: '12 Min' },
      { id: 'komm-2', title: 'WhatsApp-Texte freundlich verkürzen', duration: '8 Min' },
    ],
  },
  {
    id: 'angebote',
    order: 2,
    emoji: '📄',
    title: 'Angebote & Rechnungen',
    subtitle: 'Kostenvoranschläge, Mahnungen, Nachträge',
    featured: true,
    summary:
      'Der größte Zeitfresser für Inhaber und Meister. Mit einer guten Vorlage und einer Sprachnotiz hast du den Entwurf am Abend, statt vor Mitternacht.',
    lessons: [
      { id: 'angebote-1', title: 'Kostenvoranschlag in 5 Minuten', duration: '18 Min', flagship: true },
      { id: 'angebote-2', title: 'Höfliche, klare Mahnung schreiben', duration: '10 Min' },
    ],
  },
  {
    id: 'doku',
    order: 3,
    emoji: '📸',
    title: 'Baustellen-Doku',
    subtitle: 'Sprachnotiz → Bericht, Foto → Beschreibung',
    summary:
      'Vom Smartphone direkt in saubere Bauberichte. Hände bleiben frei, am Abend ist alles dokumentiert.',
    lessons: [
      { id: 'doku-1', title: 'Sprachnotiz von der Baustelle → Baubericht', duration: '15 Min' },
      { id: 'doku-2', title: 'Foto-Doku in Klartext umwandeln', duration: '10 Min' },
    ],
  },
  {
    id: 'personal',
    order: 4,
    emoji: '👷',
    title: 'Personal & Recruiting',
    subtitle: 'Stellenanzeigen, Onboarding, Mitarbeitergespräche',
    summary:
      'Fachkräfte gewinnen ist 2026 die wichtigste Aufgabe. Bessere Anzeigen, bessere Mitarbeiterkommunikation.',
    lessons: [
      { id: 'personal-1', title: 'Stellenanzeige in 10 Minuten', duration: '12 Min' },
      { id: 'personal-2', title: 'Probearbeit-Feedback strukturieren', duration: '10 Min' },
    ],
  },
  {
    id: 'marketing',
    order: 5,
    emoji: '📣',
    title: 'Marketing & Bewertungen',
    subtitle: 'Google, Social Media, Empfehlungen',
    summary:
      'Aus zufriedenen Kunden werden online sichtbare Empfehlungen. Mit wenigen Minuten Aufwand pro Woche.',
    lessons: [
      { id: 'mkt-1', title: 'Google-Bewertungen souverän beantworten', duration: '12 Min' },
      { id: 'mkt-2', title: 'Drei Social-Media-Posts pro Woche', duration: '14 Min' },
    ],
  },
  {
    id: 'recht',
    order: 6,
    emoji: '🔒',
    title: 'Daten & Recht',
    subtitle: 'DSGVO, was darf rein – und was nicht',
    summary:
      'Klare Regeln, was du ins Chatfenster geben darfst, was nicht – und wie du Kundendaten richtig anonymisierst.',
    lessons: [
      { id: 'recht-1', title: 'DSGVO-Checkliste fürs Chatfenster', duration: '10 Min' },
      { id: 'recht-2', title: 'Kundendaten richtig anonymisieren', duration: '8 Min' },
    ],
  },
]

// The single fully-built example lesson. The other lessons exist in the
// stage overview but are honest stubs in this prototype.
export const flagshipLesson = {
  id: 'angebote-1',
  stageId: 'angebote',
  stageTitle: 'Angebote & Rechnungen',
  title: 'Kostenvoranschlag in 5 Minuten',
  duration: '18 Min',
  tools: ['ChatGPT', 'Wispr Flow', 'Claude'],
  context:
    'Für viele Inhaber und Meister sind Kostenvoranschläge der Abend-Killer: nach Feierabend Positionen tippen, Materialpreise schätzen, höflich formulieren. Mit einer einmal gebauten Vorlage und einer kurzen Sprachnotiz unterwegs hast du den Entwurf in fünf Minuten – und musst am Schreibtisch nur noch prüfen.',
  resources: [
    {
      title: 'Prompt engineering – OpenAI Guide',
      type: 'doc',
      provider: 'OpenAI',
      duration: '12 Min',
      url: 'https://platform.openai.com/docs/guides/prompt-engineering',
    },
    {
      title: 'Prompting (OpenAI Academy)',
      type: 'course',
      provider: 'OpenAI',
      duration: '20 Min',
      url: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting',
    },
    {
      title: 'Wispr Flow – Sprache statt Tippen',
      type: 'tool',
      provider: 'Wispr Flow',
      url: 'https://wisprflow.ai/',
    },
  ],
  exercise: {
    title: 'Bau dir deine Master-Vorlage',
    prompt:
      'Wähle einen echten Auftrag der letzten zwei Wochen. Bau diesen Prompt: (1) Rolle: „Du bist erfahrener Handwerksmeister im Gewerk X". (2) Aufgabe: „Erstelle einen Kostenvoranschlag-Entwurf für …". (3) Format: Tabelle mit Spalten Position / Beschreibung / Menge / Einheit / Material / Stunden / Stundensatz / Summe, plus freundlicher Anschreibetext oben. (4) Vorgaben: Materialpreise als Annahme, keine Kundennamen oder Adressen. Diktiere die Auftragsdetails per Sprache (Wispr Flow oder Handy-Diktat) und lass die KI 1× iterieren („Position 3 ausführlicher").',
    criteria: [
      'Prompt enthält Rolle, Aufgabe, Format und Vorgaben',
      'Der Entwurf ist zu mindestens 80 % übernehmbar',
      'Keine Klarnamen oder Adressen im Prompt',
    ],
  },
  quiz: [
    {
      question: 'Was gehört NICHT in den Prompt für einen Kostenvoranschlag?',
      options: [
        'Beschreibung des Auftrags',
        'Klarname und Adresse des Kunden',
        'Gewünschte Format-Vorgaben (Tabelle, Spalten)',
        'Annahmen zu Materialpreisen',
      ],
      answer: 1,
      explanation:
        'Personenbezogene Daten gehören nicht in ein Standard-Chatfenster. Anonymisieren – Klarnamen setzt du erst zu Hause in deinem KV-Programm ein.',
    },
    {
      question: 'Welcher Baustein hebt die Qualität des Entwurfs am meisten?',
      options: [
        'Höfliche Begrüßung im Prompt',
        'Klare Rolle und Format-Vorgabe (Tabelle mit Spalten)',
        'Möglichst kurze Eingabe',
        'Mehrere KI-Modelle gleichzeitig',
      ],
      answer: 1,
      explanation:
        'Rolle + Format ist der größte Hebel. So bekommst du sofort eine Tabelle, die du nur noch prüfen musst.',
    },
    {
      question: 'Warum lohnt sich Diktieren statt Tippen?',
      options: [
        'Es ist günstiger',
        'Auf der Baustelle hast du selten Hand frei, und Sprache ist meist schneller',
        'Die KI versteht nur Sprache',
        'Damit sieht der Output besser aus',
      ],
      answer: 1,
      explanation:
        'Sprache ist 3–4× schneller als Tippen. Genau deshalb ist sie der entscheidende Trick für Handwerk im Alltag.',
    },
  ],
}

export const getStage = (id) => stages.find((s) => s.id === id)
export const allLessons = stages.flatMap((s) =>
  s.lessons.map((l) => ({ ...l, stageId: s.id, stageTitle: s.title })),
)
export const getLesson = (id) =>
  id === flagshipLesson.id ? flagshipLesson : allLessons.find((l) => l.id === id)
