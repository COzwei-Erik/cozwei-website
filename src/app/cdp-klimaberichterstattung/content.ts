type TrustCard = { title: string; body: string; tag: string };
type ProcessStep = { number: number; title: string; body: string; tags: string };
type ServiceTier = {
  level: "S" | "M" | "L";
  title: string;
  subtitle: string;
  audience: string;
  services: string[];
  prerequisite: string;
  addon: string;
  duration: string;
  ctaLabel: string;
};

type Content = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;

  trustBadges: string[];

  whySectionLabel: string;
  whySectionTitle: string;
  whySectionIntro: string;
  trustCards: TrustCard[];

  processSectionTitle: string;
  processSectionIntro: string;
  processSteps: ProcessStep[];

  integrationBannerEyebrow: string;
  integrationBannerBody: string;

  tiersSectionLabel: string;
  tiersSectionTitle: string;
  tiersSectionIntro: string;
  serviceTiers: ServiceTier[];
  audienceLabel: string;
  servicesLabel: string;
  prerequisiteLabel: string;
  addonLabel: string;
  durationLabel: string;

  authorSectionLabel: string;
  authorSectionTitle: string;
  authorName: string;
  authorRole: string;
  authorBio: string;
  authorCtaLabel: string;
  authorCtaDesc: string;

  insightsSectionLabel: string;
  insightsSectionTitle: string;
  insightsTeaser: string;
  insightsTeaserNote: string;

  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalCtaPrimary: string;
  finalCtaSecondaryEmailLabel: string;
  finalCtaSecondaryEmail: string;
  finalCtaSecondaryPhoneLabel: string;
  finalCtaSecondaryPhone: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroEyebrow: "Nachhaltigkeit · CDP Climate Change",
    heroTitle: "CDP Klima-Reporting: von der Datenbasis bis zum A-Score",
    heroSubtitle:
      "Sie wurden von einem Kunden zur Offenlegung Ihrer Klimadaten über CDP aufgefordert oder wollen das Thema proaktiv angehen? Wir begleiten Sie durch den gesamten Klimafragebogen: von der THG-Bilanz über die Modul-Redaktion bis zur fristgerechten Einreichung im CDP-Portal.",
    heroPrimaryCta: "20-Minuten-Erstgespräch buchen",
    heroSecondaryCta: "Unser Vorgehen",

    trustBadges: [
      "GHG Protocol",
      "ISO 14064",
      "ESG-Ratings",
      "CSRD / ESRS",
      "Science Based Targets",
      "GRI-Synergie",
    ],

    whySectionLabel: "Warum am freiwilligen CDP für Klima teilnehmen?",
    whySectionTitle: "Klimadaten, die Investoren und Einkäufer verlangen",
    whySectionIntro:
      "Über 24.000 Unternehmen weltweit melden ihre Klimadaten an CDP, das macht den Klimafragebogen zum De-facto-Standard für eine externe Offenlegung. Immer mehr Kunden machen ihn zur Voraussetzung für die Aufnahme oder den Verbleib im Lieferantenpool oder ESG-Ratings vergeben zusätzliche Punkte, wenn ein CDP-Rating vorliegt.",
    trustCards: [
      {
        title: "Lieferkettenanfragen",
        body:
          "Über 280 Großunternehmen fordern ihre Lieferanten über das CDP Supply Chain Modul zur Offenlegung von Klimadaten auf. Wer nicht antwortet, riskiert Punktabzüge in Lieferantenbewertungen oder den Verlust des Auftrags.",
        tag: "Supply Chain · Großkundenanfrage",
      },
      {
        title: "Investor Relations",
        body:
          "Institutionelle Investoren mit über 130 Billionen USD verwaltetem Vermögen nutzen CDP-Daten zur Portfoliobewertung. Ein belastbarer Klima-Score stärkt Ihre Position bei Banken, Kapitalgebern und Ratingagenturen.",
        tag: "Kapitalmarkt · ESG-Rating",
      },
      {
        title: "CSRD-Synergie",
        body:
          "Das CDP-Klimamodul ist auf ESRS E1, ISSB, TCFD und das GHG Protocol abgestimmt. Eine sauber aufbereitete CDP-Antwort liefert gleichzeitig den Großteil der Klimaangaben für Ihren Nachhaltigkeitsbericht.",
        tag: "ESRS E1 · TCFD · ISSB",
      },
      {
        title: "Strukturierter Jahresprozess",
        body:
          "Das CDP-Portal öffnet jährlich von Mitte Juni bis Mitte September. Wir sorgen für eine fristgerechte und vollständige Einreichung, mit klaren Meilensteinen und einem Sanity-Check vor Abgabe.",
        tag: "Jahreszyklus · Termintreue",
      },
    ],

    processSectionTitle: "In vier Schritten zum belastbaren Klima-Score",
    processSectionIntro:
      "Unser Prozess orientiert sich am CDP-Bewertungsrahmen für den Klimafragebogen und baut direkt auf der THG-Bilanzierung auf, die wir im Rahmen unserer Dekarbonisierungsberatung ohnehin erheben. Liegen einzelne Vorleistungen, etwa eine belastbare CO₂-Bilanz oder ein Dekarbonisierungsplan, noch nicht vor, können wir diese als vorgelagertes Modul übernehmen.",
    processSteps: [
      {
        number: 1,
        title: "Gap-Analyse & Statusaufnahme",
        body:
          "Wir prüfen Ihre Ausgangslage: Welche Klimadaten liegen vor, welcher Fragebogen ist relevant (SME oder Full Corporate Questionnaire), welche konkrete Anfrage müssen Sie bedienen, etwa von einem Großkunden über das Supply Chain Modul. Bestehende Vorjahresantworten fließen in die Lückenanalyse ein.",
        tags: "Datenaudit · Fragebogen-Auswahl · Anfragen-Check",
      },
      {
        number: 2,
        title: "THG-Bilanz & Datenvorbereitung",
        body:
          "Wir nutzen Ihre vorhandene CCF oder erstellen sie nach GHG Protocol (Scope 1, Scope 2 markt- und ortsbasiert sowie die relevanten Scope-3-Kategorien). Datenlücken schließen wir, wenn nötig in Abstimmung mit Ihrer Lieferkette. Auf Wunsch bereiten wir die Daten so auf, dass sie auch eine spätere Verifizierung nach ISO 14064-3 erlauben.",
        tags: "Scope 1 / 2 / 3 · GHG Protocol · ISO 14064",
      },
      {
        number: 3,
        title: "Fragebogen-Begleitung & Redaktion",
        body:
          "Wir beantworten den Klimafragebogen vollständig, von Governance und Klimarisiken über Strategie und Übergangsplan bis zu Emissionsdaten, Reduktionszielen und Maßnahmen. Vor der finalen Einreichung führen wir einen Response Check auf Konsistenz, Vollständigkeit und Score-Relevanz durch.",
        tags: "Klimamodul · Risiken & Chancen · Übergangsplan · Response Check",
      },
      {
        number: 4,
        title: "Score-Auswertung & Folgejahre",
        body:
          "Nach Veröffentlichung des Scores werten wir Ihre Bewertung systematisch aus, identifizieren konkrete Hebel für das Folgejahr und verankern CDP fest in Ihrem Klima-Reporting-Zyklus. Auf Wunsch begleiten wir die Einreichung von Science Based Targets als zentralen Hebel für Leadership-Niveau.",
        tags: "Score-Analyse · Jahresplanung · SBTi-Vorbereitung",
      },
    ],

    integrationBannerEyebrow: "CDP als Teil Ihrer Klimastrategie",
    integrationBannerBody:
      "Bei COzwei ist das CDP Klima-Reporting kein isoliertes Pflicht-Projekt. Wir integrieren die Anforderungen direkt in unseren bewährten 4-Schritte-Plan zur Klimaneutralität, sodass die Daten, die Sie ohnehin für Ihre THG-Bilanz, den Übergangsplan und Ihren CSRD-Bericht erheben, ohne Doppelarbeit auch im CDP-Fragebogen landen. Das spart Zeit, reduziert Aufwand und sorgt für eine konsistente Außendarstellung gegenüber Investoren, Kunden und Behörden.",

    tiersSectionLabel: "Leistungsangebote",
    tiersSectionTitle: "Drei Stufen, abgestimmt auf Ihre Ausgangslage",
    tiersSectionIntro:
      "Wir passen Umfang und Tiefe der Begleitung an Ihre Ausgangslage an: ob Sie erstmals als KMU teilnehmen, einen vollständigen Bericht einreichen oder einen bestehenden Score gezielt verbessern wollen. Fehlende Datengrundlagen, etwa eine CO₂-Bilanz oder ein Dekarbonisierungsplan, können wir als vorgelagertes Modul ebenfalls anbieten.",
    serviceTiers: [
      {
        level: "S",
        title: "SME-Fragebogen Klima",
        subtitle: "Erstteilnahme für KMU",
        audience:
          "Kleine und mittlere Unternehmen mit erstmaliger CDP-Teilnahme, typischerweise < 500 Mitarbeitende, die das vereinfachte SME-Modul nutzen können.",
        services: [
          "Befüllung des SME Climate Change Questionnaire",
          "Aufbereitung vorhandener Klimadaten (CCF)",
          "Response Check vor Einreichung",
          "Begleitete Einreichung im CDP-Portal",
        ],
        prerequisite:
          "Belastbarer Corporate Carbon Footprint (CCF) für das Berichtsjahr, mindestens Scope 1 und Scope 2.",
        addon:
          "Vorgelagerte Erstellung der CO₂-Bilanz nach GHG Protocol durch uns ist als separates Modul beauftragbar.",
        duration: "ca. 2 – 3 Wochen",
        ctaLabel: "Erstgespräch zum SME-Pfad buchen",
      },
      {
        level: "M",
        title: "Full-Fragebogen Klima",
        subtitle: "Erstbericht für mittlere & große Unternehmen",
        audience:
          "Mittelständische und große Unternehmen, die erstmals den vollständigen Corporate Climate Change Questionnaire einreichen, auch bei kurzfristiger Lieferkettenanfrage.",
        services: [
          "Befüllung des Full Corporate Climate Change Questionnaire",
          "Redaktion aller Pflichtmodule (Governance, Risiken, Strategie, Übergangsplan, Ziele, Maßnahmen, Emissionen)",
          "Workshop zur Datenerhebung",
          "Response Check und Score-Forecast",
          "Begleitete Einreichung im CDP-Portal",
        ],
        prerequisite:
          "CCF inkl. wesentlicher Scope-3-Kategorien sowie idealerweise ein Dekarbonisierungsplan mit Reduktionspfad.",
        addon:
          "Vorgelagerte CO₂-Bilanz-Erstellung und / oder Entwicklung eines wissenschaftsbasierten Dekarbonisierungsplans (z. B. SBTi-kompatibel).",
        duration: "ca. 2 – 8 Wochen",
        ctaLabel: "Erstgespräch zum Full-Fragebogen buchen",
      },
      {
        level: "L",
        title: "Optimierung bestehender Fragebogen Klima",
        subtitle: "Score-Verbesserung für Wiederholungstäter",
        audience:
          "Unternehmen mit bestehender CDP-Submission, die ihren Score gezielt verbessern wollen (z. B. von C/D auf B/A−) oder den Folgejahres-Prozess effizienter aufsetzen möchten.",
        services: [
          "Review der Vorjahres-Submission inkl. Scoring-Feedback",
          "Gap-Analyse gegen aktuelle CDP-Scoring-Methodik",
          "Redaktionelle Überarbeitung scorerelevanter Antworten",
          "Score-Improvement-Plan",
          "Begleitete Einreichung im Folgejahr",
        ],
        prerequisite:
          "Eingereichte CDP-Antwort des Vorjahres und veröffentlichter Score.",
        addon:
          "Auffrischung der CCF-Datenbasis oder Erweiterung um zusätzliche Scope-3-Kategorien zur Score-Hebelung.",
        duration: "ca. 1 – 8 Wochen",
        ctaLabel: "Score-Review anfragen",
      },
    ],
    audienceLabel: "Zielgruppe",
    servicesLabel: "Leistungsumfang",
    prerequisiteLabel: "Voraussetzung",
    addonLabel: "Add-on bei fehlender Datengrundlage",
    durationLabel: "Typische Projektdauer",

    authorSectionLabel: "Ihr Ansprechpartner",
    authorSectionTitle: "Im Erstgespräch klären wir Ihre Ausgangslage",
    authorName: "Christian Philippen",
    authorRole: "Lead Consultant CDP & Klimaberichterstattung",
    authorBio:
      "Christian begleitet Unternehmen durch das gesamte CDP Climate Change Questionnaire, von der Datenerhebung über die Modulredaktion bis zur Score-Auswertung. Sein Fokus: pragmatische Lösungen für Erstteilnehmer und gezielte Score-Hebelung für etablierte CDP-Reporter.",
    authorCtaLabel: "20-Minuten-Erstgespräch buchen",
    authorCtaDesc:
      "Kostenlos und unverbindlich. Wir klären Ihre Ausgangslage, das passende Paket (S / M / L) und mögliche Vorleistungen.",

    insightsSectionLabel: "Industry Insights",
    insightsSectionTitle: "Mehr zum Thema CDP im COzwei Insights Blog",
    insightsTeaser:
      "Hintergrund, Praxisbeispiele und konkrete Stolperfallen. Unser ausführlicher Blogbeitrag begleitet Sie durch den CDP-Klimafragebogen 2026 und zeigt, welche Antworten den Score am stärksten heben.",
    insightsTeaserNote: "Beitrag in Vorbereitung. Veröffentlichung folgt in Kürze.",

    finalCtaTitle: "Bereit für Ihren CDP Klima-Score?",
    finalCtaSubtitle:
      "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir analysieren Ihre Ausgangssituation, klären welcher Fragebogen für Sie relevant ist und zeigen Ihnen den effizientesten Weg zur fristgerechten Einreichung.",
    finalCtaPrimary: "20-Minuten-Erstgespräch buchen",
    finalCtaSecondaryEmailLabel: "E-Mail",
    finalCtaSecondaryEmail: "christian.philippen@cozwei.de",
    finalCtaSecondaryPhoneLabel: "Telefon",
    finalCtaSecondaryPhone: "+49 711 12171034",
  },

  en: {
    heroEyebrow: "Sustainability · CDP Climate Change",
    heroTitle: "CDP climate reporting: from data baseline to A score",
    heroSubtitle:
      "Has a customer asked you to disclose climate data through CDP, or do you want to address the topic proactively? We guide you through the entire climate questionnaire: from the GHG inventory through module drafting to the timely submission in the CDP portal.",
    heroPrimaryCta: "Book a 20-minute intro call",
    heroSecondaryCta: "Our approach",

    trustBadges: [
      "GHG Protocol",
      "ISO 14064",
      "ESG ratings",
      "CSRD / ESRS",
      "Science Based Targets",
      "GRI synergy",
    ],

    whySectionLabel: "Why take part in the voluntary CDP climate questionnaire?",
    whySectionTitle: "Climate data that investors and buyers expect",
    whySectionIntro:
      "More than 24,000 companies worldwide disclose climate data through CDP, which makes the climate questionnaire the de-facto standard for external disclosure. More and more customers make it a precondition for entry into or staying in their supplier pool, and ESG ratings award additional points where a CDP rating exists.",
    trustCards: [
      {
        title: "Supply chain requests",
        body:
          "More than 280 large corporations request climate disclosure from their suppliers via the CDP Supply Chain module. Anyone who does not respond risks point deductions in supplier ratings or losing the contract.",
        tag: "Supply Chain · large-customer request",
      },
      {
        title: "Investor relations",
        body:
          "Institutional investors managing over 130 trillion USD use CDP data for portfolio assessments. A robust climate score strengthens your position with banks, capital providers and rating agencies.",
        tag: "Capital markets · ESG rating",
      },
      {
        title: "CSRD synergy",
        body:
          "The CDP climate module is aligned with ESRS E1, ISSB, TCFD and the GHG Protocol. A well-prepared CDP response simultaneously delivers most of the climate disclosures for your sustainability report.",
        tag: "ESRS E1 · TCFD · ISSB",
      },
      {
        title: "Structured annual process",
        body:
          "The CDP portal opens annually from mid-June to mid-September. We ensure a timely and complete submission, with clear milestones and a sanity check before filing.",
        tag: "Annual cycle · on-time delivery",
      },
    ],

    processSectionTitle: "Four steps to a robust climate score",
    processSectionIntro:
      "Our process follows the CDP scoring framework for the climate questionnaire and builds directly on the GHG inventory we collect anyway as part of our decarbonisation advisory. If individual prerequisites such as a robust carbon inventory or a decarbonisation plan are not yet in place, we can deliver them as a preceding module.",
    processSteps: [
      {
        number: 1,
        title: "Gap analysis & status assessment",
        body:
          "We review your starting position: which climate data is available, which questionnaire is relevant (SME or Full Corporate Questionnaire), which concrete request you need to serve, e.g. from a large customer via the Supply Chain module. Existing prior-year responses feed into the gap analysis.",
        tags: "Data audit · Questionnaire selection · Request check",
      },
      {
        number: 2,
        title: "GHG inventory & data preparation",
        body:
          "We use your existing CCF or build it per the GHG Protocol (Scope 1, Scope 2 market-based and location-based, and the relevant Scope 3 categories). Data gaps are closed, where necessary in coordination with your supply chain. On request we prepare the data so that a later verification per ISO 14064-3 is feasible.",
        tags: "Scope 1 / 2 / 3 · GHG Protocol · ISO 14064",
      },
      {
        number: 3,
        title: "Questionnaire guidance & drafting",
        body:
          "We answer the climate questionnaire in full, from governance and climate risks through strategy and transition plan to emissions data, reduction targets and measures. Before the final submission we run a response check on consistency, completeness and score relevance.",
        tags: "Climate module · Risks & opportunities · Transition plan · Response check",
      },
      {
        number: 4,
        title: "Score evaluation & follow-up years",
        body:
          "Once the score is published we evaluate your rating systematically, identify concrete levers for the following year and anchor CDP firmly in your climate-reporting cycle. On request we also support the submission of Science Based Targets as a central lever towards leadership level.",
        tags: "Score analysis · Annual planning · SBTi preparation",
      },
    ],

    integrationBannerEyebrow: "CDP as part of your climate strategy",
    integrationBannerBody:
      "At COzwei, CDP climate reporting is not an isolated compliance project. We integrate the requirements directly into our proven 4-step plan towards climate neutrality, so that the data you collect anyway for your GHG inventory, the transition plan and your CSRD report also lands in the CDP questionnaire without duplicated work. That saves time, reduces effort and ensures a consistent external presentation to investors, customers and authorities.",

    tiersSectionLabel: "Service packages",
    tiersSectionTitle: "Three levels, matched to your starting position",
    tiersSectionIntro:
      "We adapt the scope and depth of our support to your starting position: whether you are a first-time SME participant, submitting a full report, or aiming to improve an existing score. Missing data foundations, e.g. a carbon inventory or a decarbonisation plan, can also be delivered as a preceding module.",
    serviceTiers: [
      {
        level: "S",
        title: "SME climate questionnaire",
        subtitle: "First participation for SMEs",
        audience:
          "Small and medium-sized enterprises participating in CDP for the first time, typically with fewer than 500 employees, eligible for the simplified SME module.",
        services: [
          "Filling in the SME Climate Change Questionnaire",
          "Preparation of existing climate data (CCF)",
          "Response check before submission",
          "Guided submission in the CDP portal",
        ],
        prerequisite:
          "Robust Corporate Carbon Footprint (CCF) for the reporting year, covering at least Scope 1 and Scope 2.",
        addon:
          "We can deliver the preceding CCF per the GHG Protocol as a separate module.",
        duration: "approx. 2 – 3 weeks",
        ctaLabel: "Book intro call on the SME path",
      },
      {
        level: "M",
        title: "Full climate questionnaire",
        subtitle: "First report for mid-sized and large companies",
        audience:
          "Mid-sized and large companies submitting the full Corporate Climate Change Questionnaire for the first time, also in the case of a short-notice supply chain request.",
        services: [
          "Filling in the Full Corporate Climate Change Questionnaire",
          "Drafting of all mandatory modules (governance, risks, strategy, transition plan, targets, measures, emissions)",
          "Data collection workshop",
          "Response check and score forecast",
          "Guided submission in the CDP portal",
        ],
        prerequisite:
          "CCF including the material Scope 3 categories, and ideally a decarbonisation plan with reduction path.",
        addon:
          "Preceding CCF creation and / or development of a science-based decarbonisation plan (e.g. SBTi-aligned).",
        duration: "approx. 2 – 8 weeks",
        ctaLabel: "Book intro call on the full questionnaire",
      },
      {
        level: "L",
        title: "Optimisation of existing climate questionnaire",
        subtitle: "Score improvement for repeat reporters",
        audience:
          "Companies with an existing CDP submission who want to improve their score in a targeted way (e.g. from C/D to B/A−) or set up the follow-up year process more efficiently.",
        services: [
          "Review of prior-year submission including scoring feedback",
          "Gap analysis against the current CDP scoring methodology",
          "Editorial revision of score-relevant answers",
          "Score improvement plan",
          "Guided submission in the following year",
        ],
        prerequisite: "Submitted prior-year CDP response and published score.",
        addon:
          "Refresh of the CCF data base or extension by further Scope 3 categories as score leverage.",
        duration: "approx. 1 – 8 weeks",
        ctaLabel: "Request a score review",
      },
    ],
    audienceLabel: "Target group",
    servicesLabel: "Scope of services",
    prerequisiteLabel: "Prerequisite",
    addonLabel: "Add-on if data foundation is missing",
    durationLabel: "Typical project duration",

    authorSectionLabel: "Your contact",
    authorSectionTitle: "We clarify your starting position in the intro call",
    authorName: "Christian Philippen",
    authorRole: "Lead Consultant CDP & climate reporting",
    authorBio:
      "Christian guides companies through the entire CDP Climate Change Questionnaire, from data collection through module drafting to score evaluation. His focus: pragmatic solutions for first-time participants and targeted score improvement for established CDP reporters.",
    authorCtaLabel: "Book a 20-minute intro call",
    authorCtaDesc:
      "Free and non-binding. We clarify your starting position, the right package (S / M / L) and possible prerequisites.",

    insightsSectionLabel: "Industry insights",
    insightsSectionTitle: "More on CDP in the COzwei Insights blog",
    insightsTeaser:
      "Background, practical examples and concrete pitfalls. Our in-depth blog post walks you through the CDP climate questionnaire 2026 and shows which answers move the score most.",
    insightsTeaserNote: "Post in preparation. Publication follows shortly.",

    finalCtaTitle: "Ready for your CDP climate score?",
    finalCtaSubtitle:
      "Contact us for a non-binding intro call. We analyse your starting position, clarify which questionnaire is relevant for you and show you the most efficient path to a timely submission.",
    finalCtaPrimary: "Book a 20-minute intro call",
    finalCtaSecondaryEmailLabel: "Email",
    finalCtaSecondaryEmail: "christian.philippen@cozwei.de",
    finalCtaSecondaryPhoneLabel: "Phone",
    finalCtaSecondaryPhone: "+49 711 12171034",
  },

  pt: {
    heroEyebrow: "Sustentabilidade · CDP Climate Change",
    heroTitle: "Relato climático CDP: da base de dados ao A-score",
    heroSubtitle:
      "Um cliente solicitou-lhe a divulgação dos seus dados climáticos via CDP, ou pretende abordar o tema de forma proativa? Acompanhamo-lo ao longo de todo o questionário climático: do inventário GEE à redação dos módulos e à submissão atempada no portal CDP.",
    heroPrimaryCta: "Agendar conversa inicial de 20 min",
    heroSecondaryCta: "A nossa abordagem",

    trustBadges: [
      "GHG Protocol",
      "ISO 14064",
      "Ratings ESG",
      "CSRD / ESRS",
      "Science Based Targets",
      "Sinergia com GRI",
    ],

    whySectionLabel: "Por que participar no CDP voluntário para o clima?",
    whySectionTitle: "Dados climáticos que investidores e compradores exigem",
    whySectionIntro:
      "Mais de 24.000 empresas em todo o mundo reportam os seus dados climáticos ao CDP, o que torna o questionário climático no padrão de facto para divulgação externa. Cada vez mais clientes fazem dele um requisito para entrar ou permanecer no seu pool de fornecedores, e os ratings ESG atribuem pontos adicionais quando existe um rating CDP.",
    trustCards: [
      {
        title: "Pedidos da cadeia de fornecimento",
        body:
          "Mais de 280 grandes empresas pedem aos seus fornecedores a divulgação de dados climáticos via módulo CDP Supply Chain. Quem não responde arrisca dedução de pontos nas avaliações de fornecedores ou a perda do contrato.",
        tag: "Cadeia de fornecimento · pedido de grande cliente",
      },
      {
        title: "Relações com investidores",
        body:
          "Investidores institucionais com mais de 130 biliões USD sob gestão usam dados CDP para avaliar carteiras. Um score climático sólido reforça a sua posição junto de bancos, financiadores e agências de rating.",
        tag: "Mercado de capitais · rating ESG",
      },
      {
        title: "Sinergia com a CSRD",
        body:
          "O módulo climático do CDP está alinhado com ESRS E1, ISSB, TCFD e o GHG Protocol. Uma resposta CDP bem preparada fornece simultaneamente a maior parte das divulgações climáticas para o seu relatório de sustentabilidade.",
        tag: "ESRS E1 · TCFD · ISSB",
      },
      {
        title: "Processo anual estruturado",
        body:
          "O portal CDP abre anualmente entre meados de junho e meados de setembro. Garantimos uma submissão atempada e completa, com marcos claros e uma verificação de sanidade antes da entrega.",
        tag: "Ciclo anual · cumprimento de prazos",
      },
    ],

    processSectionTitle: "Em quatro passos para um score climático sólido",
    processSectionIntro:
      "O nosso processo segue o quadro de avaliação CDP para o questionário climático e assenta diretamente no inventário GEE que já recolhemos no âmbito da nossa consultoria de descarbonização. Se alguns pré-requisitos, como um inventário robusto de CO₂ ou um plano de descarbonização, ainda não existirem, podemos entregá-los como módulo prévio.",
    processSteps: [
      {
        number: 1,
        title: "Análise de lacunas & avaliação inicial",
        body:
          "Verificamos a sua situação inicial: que dados climáticos existem, que questionário é relevante (SME ou Full Corporate Questionnaire), que pedido concreto tem de atender, por exemplo, de um grande cliente via módulo Supply Chain. As respostas do ano anterior alimentam a análise de lacunas.",
        tags: "Auditoria de dados · Escolha do questionário · Análise de pedidos",
      },
      {
        number: 2,
        title: "Inventário GEE & preparação dos dados",
        body:
          "Usamos o seu CCF existente ou criamo-lo segundo o GHG Protocol (Escopo 1, Escopo 2 market-based e location-based, e as categorias relevantes do Escopo 3). Lacunas de dados são preenchidas, se necessário em coordenação com a sua cadeia de fornecimento. Mediante pedido, preparamos os dados de modo a permitir também uma posterior verificação conforme a ISO 14064-3.",
        tags: "Escopo 1 / 2 / 3 · GHG Protocol · ISO 14064",
      },
      {
        number: 3,
        title: "Acompanhamento do questionário & redação",
        body:
          "Respondemos integralmente ao questionário climático, da governança e riscos climáticos à estratégia e ao plano de transição, até aos dados de emissões, metas de redução e medidas. Antes da submissão final realizamos um Response Check de consistência, completude e relevância para o score.",
        tags: "Módulo climático · Riscos & oportunidades · Plano de transição · Response Check",
      },
      {
        number: 4,
        title: "Avaliação do score & anos seguintes",
        body:
          "Após a publicação do score, avaliamos a sua classificação de forma sistemática, identificamos alavancas concretas para o ano seguinte e ancoramos o CDP no seu ciclo de relato climático. A pedido, apoiamos também a submissão de Science Based Targets como alavanca central para o nível Leadership.",
        tags: "Análise do score · Planeamento anual · Preparação SBTi",
      },
    ],

    integrationBannerEyebrow: "O CDP como parte da sua estratégia climática",
    integrationBannerBody:
      "Na COzwei, o relato climático CDP não é um projeto de compliance isolado. Integramos os requisitos diretamente no nosso comprovado plano de 4 passos para a neutralidade climática, de modo que os dados que já recolhe para o inventário GEE, para o plano de transição e para o relatório CSRD vão também, sem duplicação de trabalho, para o questionário CDP. Isso poupa tempo, reduz esforço e assegura uma apresentação externa consistente para investidores, clientes e autoridades.",

    tiersSectionLabel: "Pacotes de serviço",
    tiersSectionTitle: "Três níveis, ajustados à sua situação de partida",
    tiersSectionIntro:
      "Adaptamos o âmbito e a profundidade do acompanhamento à sua situação de partida: seja na primeira participação como PME, na submissão de um relatório completo ou na melhoria orientada de um score já existente. Falta de bases de dados, como um inventário de CO₂ ou um plano de descarbonização, pode também ser entregue como módulo prévio.",
    serviceTiers: [
      {
        level: "S",
        title: "Questionário SME Clima",
        subtitle: "Primeira participação para PME",
        audience:
          "Pequenas e médias empresas com primeira participação no CDP, tipicamente com menos de 500 colaboradores, elegíveis para o módulo SME simplificado.",
        services: [
          "Preenchimento do SME Climate Change Questionnaire",
          "Preparação dos dados climáticos existentes (CCF)",
          "Response Check antes da submissão",
          "Submissão acompanhada no portal CDP",
        ],
        prerequisite:
          "Corporate Carbon Footprint (CCF) robusto para o ano de relato, no mínimo Escopo 1 e Escopo 2.",
        addon:
          "A elaboração prévia do CCF segundo o GHG Protocol é adjudicável como módulo separado.",
        duration: "aprox. 2 – 3 semanas",
        ctaLabel: "Agendar conversa inicial sobre o caminho SME",
      },
      {
        level: "M",
        title: "Questionário completo Clima",
        subtitle: "Primeiro relatório para médias e grandes empresas",
        audience:
          "Médias e grandes empresas que submetem pela primeira vez o Full Corporate Climate Change Questionnaire, também em caso de pedido urgente da cadeia de fornecimento.",
        services: [
          "Preenchimento do Full Corporate Climate Change Questionnaire",
          "Redação de todos os módulos obrigatórios (governança, riscos, estratégia, plano de transição, metas, medidas, emissões)",
          "Workshop para recolha de dados",
          "Response Check e Score-Forecast",
          "Submissão acompanhada no portal CDP",
        ],
        prerequisite:
          "CCF incluindo as categorias materiais do Escopo 3 e, idealmente, um plano de descarbonização com trajetória de redução.",
        addon:
          "Elaboração prévia do CCF e/ou desenvolvimento de um plano de descarbonização baseado na ciência (por exemplo, alinhado com SBTi).",
        duration: "aprox. 2 – 8 semanas",
        ctaLabel: "Agendar conversa inicial sobre o questionário completo",
      },
      {
        level: "L",
        title: "Otimização de questionário Clima existente",
        subtitle: "Melhoria de score para reportadores recorrentes",
        audience:
          "Empresas com uma submissão CDP existente que pretendem melhorar o seu score de forma direcionada (por exemplo, de C/D para B/A−) ou estruturar o processo do ano seguinte de forma mais eficiente.",
        services: [
          "Revisão da submissão do ano anterior, incluindo feedback de scoring",
          "Análise de lacunas face à metodologia de scoring CDP atual",
          "Revisão editorial das respostas relevantes para o score",
          "Plano de melhoria de score",
          "Submissão acompanhada no ano seguinte",
        ],
        prerequisite: "Resposta CDP submetida no ano anterior e score publicado.",
        addon:
          "Atualização da base de dados CCF ou extensão a categorias adicionais do Escopo 3 como alavanca de score.",
        duration: "aprox. 1 – 8 semanas",
        ctaLabel: "Solicitar revisão do score",
      },
    ],
    audienceLabel: "Público-alvo",
    servicesLabel: "Âmbito dos serviços",
    prerequisiteLabel: "Pré-requisito",
    addonLabel: "Add-on em caso de base de dados ausente",
    durationLabel: "Duração típica do projeto",

    authorSectionLabel: "O seu contacto",
    authorSectionTitle: "Na conversa inicial clarificamos a sua situação de partida",
    authorName: "Christian Philippen",
    authorRole: "Lead Consultant CDP & relato climático",
    authorBio:
      "O Christian acompanha empresas ao longo de todo o CDP Climate Change Questionnaire, da recolha de dados à redação dos módulos e à avaliação do score. O seu foco: soluções pragmáticas para os primeiros participantes e melhoria orientada de score para reportadores CDP estabelecidos.",
    authorCtaLabel: "Agendar conversa inicial de 20 min",
    authorCtaDesc:
      "Gratuita e sem compromisso. Clarificamos a sua situação de partida, o pacote adequado (S / M / L) e eventuais pré-requisitos.",

    insightsSectionLabel: "Industry Insights",
    insightsSectionTitle: "Mais sobre CDP no blog COzwei Insights",
    insightsTeaser:
      "Enquadramento, exemplos práticos e armadilhas concretas. O nosso artigo aprofundado acompanha-o pelo questionário climático CDP 2026 e mostra que respostas mais influenciam o score.",
    insightsTeaserNote: "Artigo em preparação. Publicação em breve.",

    finalCtaTitle: "Pronto para o seu score climático CDP?",
    finalCtaSubtitle:
      "Contacte-nos para uma conversa inicial sem compromisso. Analisamos a sua situação de partida, esclarecemos qual o questionário relevante para si e mostramos-lhe o caminho mais eficiente para uma submissão atempada.",
    finalCtaPrimary: "Agendar conversa inicial de 20 min",
    finalCtaSecondaryEmailLabel: "E-mail",
    finalCtaSecondaryEmail: "christian.philippen@cozwei.de",
    finalCtaSecondaryPhoneLabel: "Telefone",
    finalCtaSecondaryPhone: "+49 711 12171034",
  },
};
