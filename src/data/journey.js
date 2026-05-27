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
            title: 'But what is a GPT? Visual intro to transformers',
            type: 'video',
            provider: '3Blue1Brown',
            duration: '27 Min',
            url: 'https://www.youtube.com/watch?v=wjZofJX0v4M',
          },
          {
            title: 'Intro to Claude – Anthropic Docs',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://docs.anthropic.com/en/docs/welcome',
          },
        ],
        exercise: {
          title: 'Halluzinationen selbst aufspüren',
          prompt:
            'Bitte Claude oder ChatGPT, ein Konzept aus deinem Studium zu erklären. Frage anschließend: „Wo könntest du dir bei dieser Antwort unsicher sein?" Prüfe eine konkrete Faktenaussage gegen eine vertrauenswürdige Quelle.',
          criteria: [
            'Du kannst das mentale Modell in eigenen Worten erklären',
            'Du hast mindestens eine Unsicherheit/Grenze identifiziert',
            'Du hast eine Faktenaussage gegengeprüft',
          ],
        },
        quiz: [
          {
            question: 'Was beschreibt am besten, wie ein Sprachmodell Text erzeugt?',
            options: [
              'Es schlägt Wort für Wort das wahrscheinlichste nächste Token vor',
              'Es schlägt die Antwort in einer festen Datenbank nach',
              'Es denkt exakt wie ein Mensch',
              'Es kopiert ganze Webseiten',
            ],
            answer: 0,
            explanation:
              'Sprachmodelle sagen auf Basis von Wahrscheinlichkeiten das nächste Token voraus – kein Datenbank-Lookup, kein menschliches Denken.',
          },
          {
            question: 'Warum „halluzinieren" Modelle gelegentlich?',
            options: [
              'Weil sie absichtlich lügen',
              'Weil sie plausibel klingende, aber nicht verifizierte Vorhersagen treffen',
              'Weil das Internet zu langsam ist',
              'Weil die Frage zu höflich war',
            ],
            answer: 1,
            explanation:
              'Modelle erzeugen plausibel klingenden Text – das kann auch dann passieren, wenn die Aussage faktisch falsch ist. Deshalb: gegenprüfen.',
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
          {
            title: 'Large Language Models explained briefly',
            type: 'article',
            provider: '3Blue1Brown',
            url: 'https://www.3blue1brown.com/lessons/gpt',
          },
        ],
        exercise: {
          title: 'Modelle im Direktvergleich',
          prompt:
            'Stelle dieselbe Aufgabe (z. B. „Erstelle eine Gliederung für eine Präsentation über X") an Claude und ChatGPT, optional zusätzlich an Gemini. Vergleiche Stil, Struktur und Brauchbarkeit der Ergebnisse.',
          criteria: [
            'Gleiche Aufgabe in mindestens zwei Tools getestet',
            'Du kannst benennen, welches Tool wofür stärker war',
            'Du hast eine Empfehlung für deinen eigenen Use-Case',
          ],
        },
        quiz: [
          {
            question: 'Welche Aussage trifft für die KI-Landschaft 2026 zu?',
            options: [
              'Es gibt genau ein nützliches Modell für alles',
              'Verschiedene Modelle haben unterschiedliche Stärken – Tool-Wahl lohnt sich',
              'Alle Modelle liefern identische Ergebnisse',
              'Bezahlmodelle sind immer die einzige Option',
            ],
            answer: 1,
            explanation:
              'Modelle unterscheiden sich in Stärken, Stil und Funktionsumfang. Wer vergleicht, wählt bewusster.',
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
          'Lange Texte, PDFs und Vorlesungen in nutzbares Wissen verwandeln. NotebookLM antwortet ausschließlich aus deinen hochgeladenen Quellen – ideal für belegbare Zusammenfassungen. Wichtig bleibt: Quellen prüfen und gegenlesen.',
        tools: ['Claude', 'ChatGPT', 'NotebookLM'],
        resources: [
          {
            title: 'Learn about NotebookLM',
            type: 'doc',
            provider: 'Google',
            url: 'https://support.google.com/notebooklm/answer/16164461',
          },
          {
            title: 'Create a notebook in NotebookLM',
            type: 'doc',
            provider: 'Google',
            url: 'https://support.google.com/notebooklm/answer/16206563',
          },
        ],
        exercise: {
          title: 'Belegbare Zusammenfassung erstellen',
          prompt:
            'Lade ein Skript oder einen Fachartikel in NotebookLM (oder als Datei in Claude). Lass eine strukturierte Zusammenfassung mit Quellenverweisen erstellen und prüfe zwei Kernaussagen gegen das Original.',
          criteria: [
            'Quelle hochgeladen und genutzt',
            'Zusammenfassung enthält nachvollziehbare Belege',
            'Zwei Aussagen gegen das Original geprüft',
          ],
        },
        quiz: [
          {
            question: 'Warum solltest du KI-Zusammenfassungen gegenprüfen?',
            options: [
              'Weil KI nie Quellen nennt',
              'Weil auch plausible Aussagen faktisch falsch sein können',
              'Das ist nicht nötig',
              'Nur bei Bildern',
            ],
            answer: 1,
            explanation:
              'Selbst quellenbasierte Tools können Aussagen verzerren. Gegenprüfen sichert wissenschaftliche Sauberkeit.',
          },
        ],
      },
      {
        id: 'alltag-2',
        title: 'Datenschutz & verantwortungsvoller Umgang',
        duration: '12 Min',
        context:
          'Welche Daten gehören nicht in ein Chatfenster? Grundregeln für personenbezogene und vertrauliche (Kunden-)Daten – und warum Enterprise-Tarife anders behandelt werden als kostenlose Accounts.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Managing data, sharing & privacy in ChatGPT Business',
            type: 'doc',
            provider: 'OpenAI',
            url: 'https://help.openai.com/en/articles/8798634-managing-data-sharing-and-privacy-in-chatgpt-business',
          },
          {
            title: 'Enterprise privacy at OpenAI',
            type: 'article',
            provider: 'OpenAI',
            url: 'https://openai.com/enterprise-privacy/',
          },
        ],
        exercise: {
          title: 'Deine „Was darf rein?"-Checkliste',
          prompt:
            'Erstelle eine kurze Checkliste für deinen Studien- und Vereinsalltag: Welche Datenkategorien dürfen in ein KI-Chatfenster, welche niemals? Begründe jede Tabu-Kategorie in einem Satz.',
          criteria: [
            'Mindestens drei Tabu-Kategorien (z. B. PII, Kundendaten, Zugangsdaten)',
            'Jede Kategorie kurz begründet',
            'Du kennst den Unterschied zwischen Free- und Enterprise-Datennutzung',
          ],
        },
        quiz: [
          {
            question: 'Was gehört NICHT in ein gewöhnliches Chatfenster?',
            options: [
              'Allgemeine Lernfragen',
              'Öffentlich verfügbare Texte',
              'Personenbezogene oder vertrauliche (Kunden-)Daten',
              'Beispielhafte, anonymisierte Fälle',
            ],
            answer: 2,
            explanation:
              'PII und vertrauliche Daten gehören nicht in Standard-Chats. Anonymisieren oder Enterprise-Tarife mit Datenschutz nutzen.',
          },
        ],
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
          'Kontext einmal anlegen, dauerhaft nutzen: Projekte bündeln Dateien, Anweisungen und Chats zu einem Thema. So musst du Hintergrund nicht in jedem Chat neu erklären.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'How can I create and manage projects? (Claude)',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects',
          },
          {
            title: 'Projects in ChatGPT',
            type: 'doc',
            provider: 'OpenAI',
            url: 'https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt',
          },
        ],
        exercise: {
          title: 'Ein Projekt für ein wiederkehrendes Thema',
          prompt:
            'Lege in Claude ODER ChatGPT ein Projekt für ein Thema an, das dich länger begleitet (z. B. eine Hausarbeit oder ein Vereinsprojekt). Hinterlege Custom Instructions und mindestens eine Datei. Führe darin einen ersten Chat.',
          criteria: [
            'Projekt erstellt und benannt',
            'Custom Instructions / Projekt-Anweisungen gesetzt',
            'Mindestens eine Datei oder Kontext hinterlegt',
          ],
        },
        quiz: [
          {
            question: 'Wozu dienen Projects in Claude/ChatGPT?',
            options: [
              'Nur zur Bildgenerierung',
              'Sie bündeln wiederverwendbaren Kontext über mehrere Chats hinweg',
              'Sie ersetzen das Modell',
              'Sie sind nur für Entwickler:innen',
            ],
            answer: 1,
            explanation:
              'Projekte halten Dateien, Anweisungen und Chats zusammen – du musst Hintergrund nicht ständig wiederholen.',
          },
        ],
      },
      {
        id: 'power-2',
        title: 'Agent Skills verstehen & nutzen',
        duration: '16 Min',
        context:
          'Skills sind organisierte Anleitungen, Skripte und Ressourcen, die Claude dynamisch laden kann, um bestimmte Aufgaben besser zu lösen (z. B. PowerPoint, Excel, Word, PDF). Du lernst, wann sie sich lohnen.',
        tools: ['Claude'],
        resources: [
          {
            title: 'Agent Skills – Overview',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview',
          },
          {
            title: 'Equipping agents for the real world with Agent Skills',
            type: 'article',
            provider: 'Anthropic',
            url: 'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',
          },
        ],
        exercise: {
          title: 'Eine vorgefertigte Skill ausprobieren',
          prompt:
            'Nutze in Claude eine vorgefertigte Skill (z. B. zum Erstellen eines Word- oder PowerPoint-Dokuments). Beschreibe, was die Skill automatisiert hat und für welchen eigenen wiederkehrenden Anwendungsfall sich eine Skill lohnen würde.',
          criteria: [
            'Eine Skill genutzt',
            'Ergebnis und Mehrwert beschrieben',
            'Eine eigene Idee für einen Skill-Use-Case formuliert',
          ],
        },
        quiz: [
          {
            question: 'Was sind Agent Skills?',
            options: [
              'Ein anderes Sprachmodell',
              'Organisierte Anleitungen/Skripte, die ein Agent dynamisch laden kann',
              'Ein kostenpflichtiges Abo',
              'Eine Suchmaschine',
            ],
            answer: 1,
            explanation:
              'Skills bündeln Instruktionen, Skripte und Ressourcen, die der Agent bei Bedarf lädt, um Aufgaben besser zu erledigen.',
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
          'Beim Vibe-Coding beschreibst du in natürlicher Sprache, was du brauchst, und die KI baut es. Mit Lovable entstehen so in Minuten lauffähige Prototypen – stark für MVPs und Landingpages, mit klaren Grenzen bei komplexer Logik.',
        tools: ['Lovable', 'Claude'],
        resources: [
          {
            title: 'Welcome to Lovable – Dokumentation',
            type: 'doc',
            provider: 'Lovable',
            url: 'https://docs.lovable.dev/introduction/welcome',
          },
          {
            title: 'Lovable – AI App Builder',
            type: 'tool',
            provider: 'Lovable',
            url: 'https://lovable.dev/',
          },
        ],
        exercise: {
          title: 'Dein erster Prototyp in 30 Minuten',
          prompt:
            'Baue mit Lovable einen einfachen Prototyp (z. B. eine Landingpage für ein Vereinsprojekt). Iteriere mindestens einmal per Prompt und notiere eine konkrete Grenze des Vibe-Coding-Ansatzes.',
          criteria: [
            'Ein lauffähiger Prototyp entstanden',
            'Mindestens eine Iteration per Prompt',
            'Eine Grenze des Ansatzes benannt',
          ],
        },
        quiz: [
          {
            question: 'Was bedeutet „Vibe-Coding"?',
            options: [
              'Code Zeile für Zeile selbst schreiben',
              'Eine App per natürlicher Sprache beschreiben und von KI bauen lassen',
              'Nur Designs erstellen',
              'Ausschließlich bestehende Apps kopieren',
            ],
            answer: 1,
            explanation:
              'Statt klassischem Programmieren beschreibst du das Ziel; die KI generiert und iteriert den Code.',
          },
        ],
      },
      {
        id: 'building-2',
        title: 'Einstieg in Claude Code',
        duration: '25 Min',
        context:
          'Claude Code ist ein agentischer Coding-Assistent im Terminal/IDE: Er versteht ganze Codebasen, schlägt Änderungen vor und fragt vor jeder Dateiänderung um Erlaubnis. Wir folgen dem offiziellen Quickstart.',
        tools: ['Claude Code'],
        resources: [
          {
            title: 'Claude Code – Quickstart',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://code.claude.com/docs/en/quickstart',
          },
          {
            title: 'Claude Code – Overview',
            type: 'doc',
            provider: 'Anthropic',
            url: 'https://code.claude.com/docs/en/overview',
          },
        ],
        exercise: {
          title: 'Erste Aufgabe mit Claude Code',
          prompt:
            'Folge dem Quickstart und lass Claude Code eine bestehende (oder neue) kleine Codebasis zusammenfassen oder eine kleine Änderung vornehmen. Achte bewusst auf den Genehmigungs-Flow vor Dateiänderungen.',
          criteria: [
            'Claude Code gestartet',
            'Eine Aufgabe (Zusammenfassung oder Änderung) ausgeführt',
            'Du verstehst, wie der Genehmigungs-Flow funktioniert',
          ],
        },
        quiz: [
          {
            question: 'Was zeichnet Claude Code aus?',
            options: [
              'Es ist nur ein Autocomplete im Editor',
              'Ein agentisches Tool, das Codebasen versteht und Aufgaben ausführt – mit Genehmigung',
              'Es funktioniert nur mit Python',
              'Es ersetzt das Terminal vollständig',
            ],
            answer: 1,
            explanation:
              'Claude Code arbeitet agentisch über ganze Projekte und fragt vor Änderungen um Erlaubnis.',
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
        duration: '18 Min',
        context:
          'Vom einzelnen Prompt zum eigenständig handelnden System mit Werkzeugen. Anthropics Leitfaden unterscheidet klar zwischen festen Workflows und echten Agenten – und nennt realistische Einsatzgrenzen.',
        tools: ['Claude'],
        resources: [
          {
            title: 'Building Effective Agents',
            type: 'article',
            provider: 'Anthropic',
            url: 'https://www.anthropic.com/research/building-effective-agents',
          },
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
        exercise: {
          title: 'Einen einfachen Agenten-Workflow skizzieren',
          prompt:
            'Lies „Building Effective Agents" und skizziere für eine Vereinsaufgabe (z. B. Bewerbungen vorsortieren) einen einfachen Agenten-Workflow mit mindestens zwei Schritten. Markiere, wo externe Werkzeuge nötig wären.',
          criteria: [
            'Workflow mit mindestens zwei Schritten',
            'Benannt, wo Werkzeuge/Tools nötig sind',
            'Realistische Grenzen des Ansatzes benannt',
          ],
        },
        quiz: [
          {
            question: 'Was unterscheidet einen Agenten von einem einzelnen Prompt?',
            options: [
              'Nichts, es ist dasselbe',
              'Ein Agent handelt mehrstufig mit Werkzeugen Richtung eines Ziels',
              'Ein Agent ist nur ein längerer Prompt',
              'Ein Agent funktioniert offline',
            ],
            answer: 1,
            explanation:
              'Agenten planen und handeln mehrstufig, nutzen Werkzeuge und steuern selbst auf ein Ziel zu.',
          },
        ],
      },
      {
        id: 'agents-2',
        title: 'Workflows automatisieren',
        duration: '16 Min',
        context:
          'Nicht jede Aufgabe braucht einen autonomen Agenten. Oft ist ein fest verketteter Workflow zuverlässiger und günstiger. Du lernst, wann was passt – und wie du eine wiederkehrende Aufgabe zerlegst.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Building Effective Agents (Workflows vs. Agents)',
            type: 'article',
            provider: 'Anthropic',
            url: 'https://www.anthropic.com/research/building-effective-agents',
          },
        ],
        exercise: {
          title: 'Eine Aufgabe in einen Workflow zerlegen',
          prompt:
            'Wähle eine wiederkehrende Aufgabe aus deinem Alltag und zerlege sie in klar definierte, automatisierbare Schritte. Entscheide begründet: fester Workflow oder autonomer Agent?',
          criteria: [
            'Aufgabe in nummerierte Schritte zerlegt',
            'Begründete Entscheidung Workflow vs. Agent',
            'Mögliche Fehlerquellen identifiziert',
          ],
        },
        quiz: [
          {
            question: 'Wann ist ein fester Workflow besser als ein autonomer Agent?',
            options: [
              'Niemals',
              'Bei klar definierten, wiederholbaren Schritten',
              'Nur bei kreativen Aufgaben',
              'Nur wenn kein Internet da ist',
            ],
            answer: 1,
            explanation:
              'Für vorhersehbare, wiederholbare Abläufe sind feste Workflows oft zuverlässiger und günstiger als autonome Agenten.',
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
          'Wo KI in Projekten echten Mehrwert schafft – und wo der Hype an der Realität scheitert. Gute Use-Cases sind wiederkehrend, datennah und haben einen messbaren Nutzen.',
        tools: ['Claude', 'ChatGPT'],
        resources: [
          {
            title: 'Anthropic Academy (kostenlose Kurse)',
            type: 'course',
            provider: 'Anthropic',
            url: 'https://anthropic.skilljar.com/',
          },
        ],
        exercise: {
          title: 'Drei Use-Cases für einen echten Case',
          prompt:
            'Wähle einen (fiktiven oder realen) Beratungs-Case und liste drei konkrete KI-Use-Cases mit jeweils erwartetem Mehrwert und nötigen Daten. Markiere den vielversprechendsten.',
          criteria: [
            'Drei konkrete Use-Cases',
            'Je erwarteter Mehrwert benannt',
            'Priorisierung mit Begründung',
          ],
        },
        quiz: [
          {
            question: 'Woran erkennt man einen guten KI-Use-Case?',
            options: [
              'Er ist gerade im Hype',
              'Er ist wiederkehrend, datennah und hat klaren, messbaren Mehrwert',
              'Er ist möglichst kompliziert',
              'Er braucht keine Daten',
            ],
            answer: 1,
            explanation:
              'Tragfähige Use-Cases sind wiederholbar, gut mit Daten unterfüttert und schaffen messbaren Nutzen.',
          },
        ],
      },
      {
        id: 'consulting-2',
        title: 'Regulatorik: EU AI Act Grundlagen',
        duration: '16 Min',
        context:
          'Der EU AI Act (Verordnung 2024/1689) folgt einem risikobasierten Ansatz: von verbotenen Praktiken über Hochrisiko-Anwendungen bis zu Transparenzpflichten. Beratende sollten die Grundzüge kennen.',
        tools: ['Claude'],
        resources: [
          {
            title: 'The AI Act Explorer',
            type: 'doc',
            provider: 'EU AI Act',
            url: 'https://artificialintelligenceact.eu/ai-act-explorer/',
          },
          {
            title: 'Official AI Act Explorer (Europäische Kommission)',
            type: 'doc',
            provider: 'Europäische Kommission',
            url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act-explorer',
          },
        ],
        exercise: {
          title: 'Risikoklassen zuordnen',
          prompt:
            'Wähle drei KI-Anwendungen (z. B. Chatbot, Lebenslauf-Screening, Spam-Filter) und ordne sie mithilfe des AI Act Explorers den passenden Risikoklassen zu. Begründe deine Einordnung kurz.',
          criteria: [
            'Drei Anwendungen einer Risikoklasse zugeordnet',
            'Jede Einordnung kurz begründet',
            'Du kennst den Unterschied zwischen verboten, Hochrisiko und begrenztem Risiko',
          ],
        },
        quiz: [
          {
            question: 'Worauf basiert der EU AI Act?',
            options: [
              'Auf einem generellen Verbot aller KI',
              'Auf einem risikobasierten Ansatz mit abgestuften Pflichten',
              'Ausschließlich auf Datenschutz',
              'Auf freiwilliger Selbstverpflichtung ohne Regeln',
            ],
            answer: 1,
            explanation:
              'Der AI Act stuft Anwendungen nach Risiko ein (verboten, hochriskant, begrenzt, minimal) und knüpft daran unterschiedliche Pflichten.',
          },
        ],
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
