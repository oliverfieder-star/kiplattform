export const courses = [
  {
    id: 'ki-grundlagen',
    title: 'KI-Grundlagen für Unternehmen',
    level: 'Einsteiger',
    duration: '4 Wochen',
    lessons: 18,
    category: 'Strategie',
    color: 'from-indigo-500 to-violet-600',
    summary:
      'Verstehe, was künstliche Intelligenz heute kann – und was nicht. Ohne Mathe-Overkill, dafür mit echten Beispielen aus dem Arbeitsalltag.',
    outcomes: [
      'KI-Begriffe sicher einordnen und mitreden',
      'Sinnvolle Einsatzfelder im eigenen Team erkennen',
      'Chancen und Risiken realistisch bewerten',
    ],
    modules: [
      'Was ist KI wirklich?',
      'Machine Learning in 30 Minuten',
      'Large Language Models verstehen',
      'KI-Projekte richtig starten',
    ],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Masterclass',
    level: 'Fortgeschritten',
    duration: '3 Wochen',
    lessons: 24,
    category: 'Praxis',
    color: 'from-fuchsia-500 to-pink-600',
    summary:
      'Hol das Maximum aus Sprachmodellen heraus. Von strukturierten Prompts über Tool-Use bis zu wiederverwendbaren Workflows.',
    outcomes: [
      'Zuverlässige, reproduzierbare Prompts schreiben',
      'Komplexe Aufgaben in Schritte zerlegen',
      'Eigene Prompt-Bibliothek aufbauen',
    ],
    modules: [
      'Anatomie eines guten Prompts',
      'Few-Shot & Chain-of-Thought',
      'Strukturierte Ausgaben & JSON',
      'Prompt-Vorlagen für Teams',
    ],
  },
  {
    id: 'ki-im-arbeitsalltag',
    title: 'KI im Arbeitsalltag',
    level: 'Einsteiger',
    duration: '2 Wochen',
    lessons: 12,
    category: 'Produktivität',
    color: 'from-emerald-500 to-teal-600',
    summary:
      'Konkrete Werkzeuge und Routinen, mit denen du ab Tag eins Zeit sparst – bei E-Mails, Recherche, Texten und Meetings.',
    outcomes: [
      'Tägliche Aufgaben mit KI beschleunigen',
      'Die richtigen Tools für den Job wählen',
      'Datenschutz im Blick behalten',
    ],
    modules: [
      'KI-Assistenten effektiv nutzen',
      'Recherche & Zusammenfassungen',
      'Texte schreiben & überarbeiten',
      'Meetings automatisch protokollieren',
    ],
  },
  {
    id: 'ki-governance',
    title: 'KI-Governance & EU AI Act',
    level: 'Profi',
    duration: '5 Wochen',
    lessons: 20,
    category: 'Compliance',
    color: 'from-amber-500 to-orange-600',
    summary:
      'Setze KI verantwortungsvoll und rechtssicher ein. Der EU AI Act, Risikoklassen und praktische Governance für Organisationen.',
    outcomes: [
      'Regulatorische Anforderungen verstehen',
      'KI-Risiken klassifizieren und dokumentieren',
      'Interne Richtlinien aufsetzen',
    ],
    modules: [
      'Der EU AI Act im Überblick',
      'Risikoklassen & Pflichten',
      'Dokumentation & Transparenz',
      'KI-Richtlinien für Teams',
    ],
  },
  {
    id: 'daten-fuer-ki',
    title: 'Daten verstehen & nutzen',
    level: 'Fortgeschritten',
    duration: '4 Wochen',
    lessons: 16,
    category: 'Daten',
    color: 'from-sky-500 to-blue-600',
    summary:
      'Gute KI braucht gute Daten. Lerne, Datenquellen zu bewerten, aufzubereiten und für KI-Anwendungen nutzbar zu machen.',
    outcomes: [
      'Datenqualität einschätzen',
      'Daten sauber aufbereiten',
      'Datengetriebene Entscheidungen treffen',
    ],
    modules: [
      'Datenquellen & Qualität',
      'Aufbereitung & Bereinigung',
      'Datenschutz & Anonymisierung',
      'Von Daten zur Entscheidung',
    ],
  },
  {
    id: 'ki-automatisierung',
    title: 'Workflows mit KI automatisieren',
    level: 'Profi',
    duration: '6 Wochen',
    lessons: 28,
    category: 'Automatisierung',
    color: 'from-rose-500 to-red-600',
    summary:
      'Baue end-to-end Automatisierungen mit KI im Zentrum. Von der Idee über Tools bis zum messbaren Ergebnis im Team.',
    outcomes: [
      'Automatisierungspotenziale identifizieren',
      'KI mit bestehenden Tools verbinden',
      'ROI von Automatisierungen messen',
    ],
    modules: [
      'Prozesse analysieren',
      'KI-Bausteine verbinden',
      'Agenten & mehrstufige Abläufe',
      'Monitoring & Optimierung',
    ],
  },
]

export const getCourse = (id) => courses.find((c) => c.id === id)
