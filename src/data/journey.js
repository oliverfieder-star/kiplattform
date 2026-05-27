export const POINTS_PER_LESSON = 10

// Self-assessment options shown during onboarding. Each maps to a
// recommended entry stage so members don't start "at zero".
export const LEVELS = [
  {
    id: 'curious',
    label: 'Neugierig',
    desc: 'Ich habe KI ein paar Mal ausprobiert, nutze sie aber nicht regelmäßig.',
    startStage: 'foundations',
  },
  {
    id: 'user',
    label: 'Anwender:in',
    desc: 'Ich nutze ChatGPT/Claude regelmäßig, meist mit einfachen Prompts.',
    startStage: 'prompting',
  },
  {
    id: 'power',
    label: 'Power-User',
    desc: 'Ich arbeite täglich mit KI und kenne Projects, Custom Instructions & Co.',
    startStage: 'power-features',
  },
  {
    id: 'builder',
    label: 'Builder',
    desc: 'Ich baue mit Claude Code / Vibe-Coding und denke über Agenten nach.',
    startStage: 'building',
  },
]

// resource.type drives the icon & label: video | doc | article | course | interactive | tool
export const stages = [
  {
    id: 'foundations',
    order: 0,
    emoji: '🧭',
    title: 'Foundations',
    subtitle: 'Was ist (generative) KI wirklich?',
    summary:
      'Bevor wir Tools meistern, klären wir die Grundlagen: Was kann KI heute, was nicht – und warum ist gerade jetzt der richtige Moment, sie zu beherrschen?',
    lessons: [
      {
        id: 'foundations-1',
        title: 'Wie generative KI funktioniert (ohne Mathe)',
        duration: '15 Min',
        context:
          'Ein mentales Modell von Sprachmodellen: Wahrscheinlichkeiten, Tokens, Kontextfenster. Genug, um zu verstehen, warum gute Prompts wirken – und warum Modelle manchmal „halluzinieren".',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Intro to Claude – Anthropic Docs',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://docs.anthropic.com/en/docs/welcome',
          },
        ],
      },
      {
        id: 'foundations-2',
        title: 'Die KI-Landschaft 2026: Claude, ChatGPT, Gemini & Co.',
        duration: '12 Min',
        context:
          'Welches Modell wofür? Stärken, Schwächen und wann sich welches Tool lohnt – mit klarer Empfehlung für den Vereinsalltag.',
        tools: ['Claude', 'ChatGPT', 'Gemini'],
        resources: [
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'prompting',
    order: 1,
    emoji: '✍️',
    title: 'Prompting',
    subtitle: 'Wie hole ich verlässlich gute Ergebnisse?',
    featured: true,
    summary:
      'Der Hebel mit dem größten Sofort-Effekt. Vom Zufallstreffer zum reproduzierbaren Ergebnis – mit Techniken, die in Claude und ChatGPT gleichermaßen funktionieren.',
    lessons: [
      {
        id: 'prompting-1',
        title: 'Anatomie eines guten Prompts',
        duration: '18 Min',
        context:
          'Die meisten schlechten Ergebnisse liegen am Prompt, nicht am Modell. Du lernst die vier Bausteine jedes starken Prompts kennen: Aufgabe, Kontext, Format und Beispiele. Wir vergleichen einen vagen mit einem präzisen Prompt und sehen den Unterschied im Ergebnis.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Prompt Engineering Overview',
            type: 'doc',
            provider: 'Anthropic',
            duration: '10 Min',
            url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview',
          },
          {
            title: 'Prompt engineering – OpenAI Guide',
            type: 'doc',
            provider: 'OpenAI',
            duration: '12 Min',
            url: 'https://platform.openai.com/docs/guides/prompt-engineering',
          },
        ],
        exercise: {
          title: 'Vom vagen zum präzisen Prompt',
          prompt:
            'Nimm eine echte Aufgabe aus deinem Studium (z. B. „Fasse diesen Artikel zusammen"). Schreibe sie zuerst als Ein-Satz-Prompt. Erweitere sie dann um Aufgabe, Kontext, gewünschtes Format und ein Beispiel. Lass beide Varianten in Claude UND ChatGPT laufen.',
          criteria: [
            'Der zweite Prompt enthält alle vier Bausteine',
            'Du kannst benennen, welcher Output besser ist und warum',
            'Du hast denselben Prompt in beiden Tools getestet',
          ],
        },
        quiz: [
          {
            question: 'Welcher Baustein fehlt am häufigsten in schwachen Prompts?',
            options: [
              'Eine höfliche Begrüßung',
              'Konkreter Kontext und gewünschtes Format',
              'Die Modellversion',
              'Ein Zeitlimit',
            ],
            answer: 1,
            explanation:
              'Modelle raten das Format, wenn du es nicht vorgibst. Kontext + Formatvorgabe sind der größte Qualitätshebel.',
          },
          {
            question: 'Warum lohnt es sich, denselben Prompt in Claude und ChatGPT zu testen?',
            options: [
              'Damit man doppelt so lange braucht',
              'Die Modelle haben unterschiedliche Stärken – Vergleich schärft das Gespür',
              'Es ist Pflicht laut Anbieter',
              'Nur ChatGPT versteht deutsche Prompts',
            ],
            answer: 1,
            explanation:
              'Unterschiedliche Modelle reagieren unterschiedlich. Wer vergleicht, lernt, welches Tool wofür stark ist.',
          },
        ],
      },
      {
        id: 'prompting-2',
        title: 'Rollen, Kontext & Formatvorgaben',
        duration: '20 Min',
        context:
          'Eine Rolle zuweisen („Du bist erfahrener Unternehmensberater"), relevanten Kontext mitgeben und das Ausgabeformat erzwingen (Tabelle, JSON, Bulletpoints). Diese drei Stellschrauben machen Outputs verlässlich und direkt weiterverwendbar.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Prompting best practices',
            type: 'doc',
            provider: 'Anthropic',
            duration: '15 Min',
            url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',
          },
          {
            title: 'Prompt engineering best practices for ChatGPT',
            type: 'article',
            provider: 'OpenAI',
            duration: '8 Min',
            url: 'https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt',
          },
        ],
        exercise: {
          title: 'Strukturierten Output erzwingen',
          prompt:
            'Bitte die KI, fünf Beratungs-Tools zu vergleichen – als Markdown-Tabelle mit den Spalten Tool, Einsatzgebiet, Kosten, Empfehlung. Verfeinere die Rolle und das Format, bis die Tabelle ohne Nacharbeit nutzbar ist.',
          criteria: [
            'Output kommt als saubere Tabelle',
            'Du hast eine Rolle und ein Format explizit vorgegeben',
            'Das Ergebnis ist ohne manuelle Nacharbeit verwendbar',
          ],
        },
        quiz: [
          {
            question: 'Wann ist eine Formatvorgabe (z. B. „als Tabelle") besonders wertvoll?',
            options: [
              'Nie, das schränkt die KI ein',
              'Wenn der Output direkt weiterverarbeitet werden soll',
              'Nur bei Bildern',
              'Nur in der Bezahlversion',
            ],
            answer: 1,
            explanation:
              'Strukturierte Ausgaben sparen Nacharbeit und lassen sich kopieren, weiterverwenden oder automatisieren.',
          },
        ],
      },
      {
        id: 'prompting-3',
        title: 'Few-Shot & Schritt-für-Schritt-Denken',
        duration: '22 Min',
        context:
          'Zwei Power-Techniken: Mit Beispielen (Few-Shot) zeigst du dem Modell den gewünschten Stil, statt ihn zu beschreiben. Mit „Denke Schritt für Schritt" (Chain-of-Thought) verbesserst du Ergebnisse bei mehrstufigen Aufgaben deutlich.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Anthropic Interactive Prompt Engineering Tutorial',
            type: 'interactive',
            provider: 'Anthropic',
            duration: '45 Min',
            url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial',
          },
        ],
        exercise: {
          title: 'Few-Shot an einem eigenen Fall',
          prompt:
            'Wähle eine wiederkehrende Aufgabe (z. B. Bewerbungs-Feedback im Vereinsstil). Gib der KI 2–3 Beispiele für gute Antworten und lass sie einen neuen Fall im selben Stil lösen. Vergleiche mit und ohne Beispiele.',
          criteria: [
            'Mindestens zwei Beispiele im Prompt',
            'Erkennbarer Qualitätsunterschied mit vs. ohne Few-Shot',
            'Du kannst erklären, wann sich Few-Shot lohnt',
          ],
        },
        quiz: [
          {
            question: 'Was bewirkt „Few-Shot Prompting"?',
            options: [
              'Es macht Antworten kürzer',
              'Beispiele zeigen dem Modell den gewünschten Stil/Format',
              'Es schaltet ein anderes Modell frei',
              'Es reduziert die Kosten',
            ],
            answer: 1,
            explanation:
              'Beispiele sind oft wirksamer als Beschreibungen – das Modell imitiert das gezeigte Muster.',
          },
          {
            question: 'Wann hilft „Denke Schritt für Schritt" am meisten?',
            options: [
              'Bei einfachen Faktenfragen',
              'Bei mehrstufigen Aufgaben mit Logik oder Rechnung',
              'Bei Bildgenerierung',
              'Es hilft nie',
            ],
            answer: 1,
            explanation:
              'Explizites Zwischendenken verbessert vor allem mehrstufige Reasoning-Aufgaben.',
          },
        ],
      },
      {
        id: 'prompting-4',
        title: 'Wiederverwendbare Prompts & System-Prompts',
        duration: '18 Min',
        context:
          'Gute Prompts entstehen einmal und werden hundertfach genutzt. Du baust dir eine kleine Prompt-Bibliothek auf und lernst, wo Claude (System-Prompt, Projects) und ChatGPT (Custom Instructions) Voreinstellungen dauerhaft speichern.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Prompting (OpenAI Academy)',
            type: 'course',
            provider: 'OpenAI',
            duration: '20 Min',
            url: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting',
          },
        ],
        exercise: {
          title: 'Deine erste Prompt-Bibliothek',
          prompt:
            'Lege ein Dokument mit deinen 3 meistgenutzten Prompts an (z. B. Zusammenfassen, E-Mail-Entwurf, Lernkarten erstellen). Hinterlege jeweils Rolle, Format und ein Beispiel. Speichere einen davon als Custom Instruction / Claude-Projekt.',
          criteria: [
            'Drei wiederverwendbare Prompts dokumentiert',
            'Mindestens einer als dauerhafte Voreinstellung gespeichert',
            'Jeder Prompt ist ohne Anpassung sofort einsetzbar',
          ],
        },
        quiz: [
          {
            question: 'Wo speicherst du dauerhafte Vorgaben in ChatGPT?',
            options: ['In den Custom Instructions', 'Im Browser-Verlauf', 'Gar nicht', 'Nur per API'],
            answer: 0,
            explanation:
              'Custom Instructions (ChatGPT) bzw. Projects/System-Prompts (Claude) speichern Vorgaben über Chats hinweg.',
          },
        ],
      },
    ],
  },
  {
    id: 'alltag',
    order: 2,
    emoji: '⚡',
    title: 'KI im Alltag & Studium',
    subtitle: 'Recherche, Texte, Lernen, Datenschutz',
    summary:
      'Konkrete Routinen, die ab Tag eins Zeit sparen – bei Recherche, Hausarbeiten, Zusammenfassungen und Lernen. Inklusive: Was darf ich (nicht) reingeben?',
    lessons: [
      {
        id: 'alltag-1',
        title: 'Recherchieren & zusammenfassen mit Quellen',
        duration: '15 Min',
        context:
          'Lange Texte, PDFs und Vorlesungen in nutzbares Wissen verwandeln – und warum Quellenangaben und Gegenprüfung Pflicht sind.',
        tools: ['Claude', 'ChatGPT', 'NotebookLM'],
        resources: [
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
      },
      {
        id: 'alltag-2',
        title: 'Datenschutz & verantwortungsvoller Umgang',
        duration: '12 Min',
        context:
          'Welche Daten gehören nicht in ein Chatfenster? Grundregeln für den Umgang mit personenbezogenen und vertraulichen (Kunden-)Daten.',
        tools: ['Claude', 'ChatGPT'],
        resources: [],
      },
    ],
  },
  {
    id: 'power-features',
    order: 3,
    emoji: '🚀',
    title: 'Power-Features',
    subtitle: 'Projects, Skills, Custom Instructions, Files',
    summary:
      'Hier verlassen die meisten das „Free-Niveau": dauerhafte Projekte, hochgeladene Dateien, wiederverwendbare Skills und Custom Instructions – in Claude und ChatGPT.',
    lessons: [
      {
        id: 'power-1',
        title: 'Claude Projects & ChatGPT Projects nutzen',
        duration: '18 Min',
        context:
          'Kontext einmal anlegen, dauerhaft nutzen: Projekte bündeln Dateien, Anweisungen und Chats zu einem Thema.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
      },
      {
        id: 'power-2',
        title: 'Agent Skills verstehen',
        duration: '16 Min',
        context:
          'Skills erweitern Claude um wiederverwendbare Fähigkeiten. Was das ist und wann es sich lohnt.',
        tools: ['Claude'],
        resources: [
          {
            title: 'Claude Code & Skills – Dokumentation',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://code.claude.com/docs/en/overview',
          },
        ],
      },
    ],
  },
  {
    id: 'building',
    order: 4,
    emoji: '🛠️',
    title: 'Building',
    subtitle: 'Claude Code, Artifacts, Vibe-Coding, Lovable',
    summary:
      'Von der Idee zum funktionierenden Prototyp – ohne Informatikstudium. Genau so ist diese Plattform entstanden.',
    lessons: [
      {
        id: 'building-1',
        title: 'Vibe-Coding: Apps bauen ohne Code',
        duration: '20 Min',
        context:
          'Mit Tools wie Lovable und Claude beschreibst du, was du brauchst, und bekommst eine lauffähige App. Möglichkeiten und Grenzen.',
        tools: ['Lovable', 'Claude'],
        resources: [
          {
            title: 'Lovable',
            type: 'tool',
            provider: 'Lovable',
            url: 'https://lovable.dev/',
          },
        ],
      },
      {
        id: 'building-2',
        title: 'Einstieg in Claude Code',
        duration: '25 Min',
        context:
          'Der agentische Coding-Assistent im Terminal/IDE. Was er kann und wie der erste Einstieg gelingt.',
        tools: ['Claude Code'],
        resources: [
          {
            title: 'Claude Code – Overview',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://code.claude.com/docs/en/overview',
          },
        ],
      },
    ],
  },
  {
    id: 'agents',
    order: 5,
    emoji: '🤖',
    title: 'Agenten & Automatisierung',
    subtitle: 'Multi-Agent-Systeme & Workflows',
    summary:
      'Mehrere KI-Schritte zu einem Workflow verketten und Aufgaben weitgehend automatisieren – die Königsklasse.',
    lessons: [
      {
        id: 'agents-1',
        title: 'Was sind KI-Agenten?',
        duration: '15 Min',
        context:
          'Vom einzelnen Prompt zum eigenständig handelnden System mit Werkzeugen. Konzepte und realistische Erwartungen.',
        tools: ['Claude'],
        resources: [
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'consulting',
    order: 6,
    emoji: '💼',
    title: 'KI im Beratungs-Kontext',
    subtitle: 'Vom Skill zum Kunden-Mehrwert',
    summary:
      'Wie sich die gelernten Fähigkeiten in echten Beratungs-Cases auszahlen – plus ein Grundverständnis von Regulatorik (EU AI Act).',
    lessons: [
      {
        id: 'consulting-1',
        title: 'KI-Use-Cases im Consulting',
        duration: '18 Min',
        context:
          'Wo KI in Projekten echten Mehrwert schafft – und wo der Hype an der Realität scheitert.',
        tools: ['Claude', 'ChatGPT'],
        resources: [],
      },
    ],
  },
]

/* ---------- Selectors ---------- */

export const getStage = (id) => stages.find((s) => s.id === id)

export const allLessons = stages.flatMap((s) =>
  s.lessons.map((l) => ({ ...l, stageId: s.id, stageTitle: s.title })),
)

export const getLesson = (id) => allLessons.find((l) => l.id === id)

export const totalLessons = allLessons.length

export const getStageProgress = (stage, progressSet) => {
  const total = stage.lessons.length
  const done = stage.lessons.filter((l) => progressSet.has(l.id)).length
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
}

export const getRecommendedStage = (levelId) => {
  const level = LEVELS.find((l) => l.id === levelId)
  return level ? level.startStage : 'foundations'
}

// Next not-yet-completed lesson. Honours the member's chosen entry level:
// it looks from their start stage onward first, so an advanced member is
// never dragged back to "Stufe 0". Falls back to any remaining lesson.
export const getNextLesson = (progressSet, levelId) => {
  if (levelId) {
    const startOrder = getStage(getRecommendedStage(levelId))?.order ?? 0
    const fromStart = allLessons.find(
      (l) => getStage(l.stageId).order >= startOrder && !progressSet.has(l.id),
    )
    if (fromStart) return fromStart
  }
  return allLessons.find((l) => !progressSet.has(l.id)) || null
}

// A stage is "fully built" when every lesson has a quiz – used for honest
// "komplett" vs "in Aufbau" labelling.
export const isStageFull = (stage) =>
  stage.lessons.length > 0 && stage.lessons.every((l) => l.quiz?.length > 0)
