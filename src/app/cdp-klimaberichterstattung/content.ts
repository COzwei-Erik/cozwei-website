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
  scoreFocus: string;
  ctaLabel: string;
};
export type FaqItem = { q: string; a: string };
export type TimelineStep = { period: string; title: string; description: string };
export type GlossaryEntry = { term: string; definition: string };
export type TrustSignal = { value: string; label: string };

type Content = {
  breadcrumbHome: string;
  breadcrumbSolutions: string;
  breadcrumbCurrent: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  glanceLabel: string;
  glanceBody: string;
  whatIsCdpTitle: string;
  whatIsCdpBody: string;
  whatIsCdpLinkPrefix: string;
  statSourceLabel: string;
  internalLinkCcfLabel: string;
  internalLinkVerifLabel: string;
  internalLinkKlimaLabel: string;
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqSectionIntro: string;
  faqs: FaqItem[];

  comparisonTitle: string;
  comparisonIntro: string;
  compareLabelAudience: string;
  compareLabelQuestionnaire: string;
  compareLabelPrerequisite: string;
  compareLabelDuration: string;
  compareLabelScoreFocus: string;
  compareLabelAddon: string;

  timelineSectionLabel: string;
  timelineSectionTitle: string;
  timelineSectionIntro: string;
  timelineSteps: TimelineStep[];

  caseSectionLabel: string;
  caseSectionTitle: string;
  caseClientType: string;
  caseScoreBefore: string;
  caseScoreAfter: string;
  caseScoreBeforeLabel: string;
  caseScoreAfterLabel: string;
  caseHighlights: string[];
  caseDisclaimer: string;

  trustSignals: TrustSignal[];
  trustSignalsNote: string;

  glossarySectionLabel: string;
  glossarySectionTitle: string;
  glossarySectionIntro: string;
  glossary: GlossaryEntry[];

  stickyCtaLabel: string;

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
    breadcrumbHome: "Start",
    breadcrumbSolutions: "Lösungen",
    breadcrumbCurrent: "CDP Klima-Reporting",
    lastUpdatedLabel: "Stand",
    lastUpdatedDate: "Mai 2026",
    glanceLabel: "Auf einen Blick",
    glanceBody:
      "CDP Klima-Reporting bedeutet die jährliche, standardisierte Offenlegung von Klimadaten über das Climate Change Questionnaire der Non-Profit-Organisation CDP. COzwei begleitet Unternehmen vollständig, von der THG-Bilanz nach GHG Protocol über die Beantwortung aller Module bis zur fristgerechten Einreichung und Score-Auswertung. Wir bieten drei Pakete für KMU, Konzerne und Wiederholungsteilnehmer.",
    whatIsCdpTitle: "Was ist CDP?",
    whatIsCdpBody:
      "CDP ist eine 2000 in London gegründete Non-Profit-Organisation, die das weltweit größte System zur Offenlegung von Umweltdaten betreibt. Der CDP-Klimafragebogen ist auf das GHG Protocol, TCFD und ISSB abgestimmt und gilt als De-facto-Standard für externe Klimaberichterstattung im B2B-Kontext.",
    whatIsCdpLinkPrefix: "Mehr Informationen auf",
    statSourceLabel: "Quelle",
    internalLinkCcfLabel: "unsere Dekarbonisierungsberatung",
    internalLinkVerifLabel: "ISO-14064-3-Verifizierung",
    internalLinkKlimaLabel: "Klimaschutzkonzepte",
    faqSectionLabel: "FAQ",
    faqSectionTitle: "Häufige Fragen zum CDP Klima-Reporting",
    faqSectionIntro:
      "Antworten auf die Fragen, die uns in CDP-Erstgesprächen am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Was ist das CDP Climate Change Questionnaire?",
        a: "Das CDP Climate Change Questionnaire ist ein jährlicher Klimafragebogen der Non-Profit-Organisation CDP (ehemals Carbon Disclosure Project). Unternehmen offenlegen darin standardisiert ihre Klimadaten, Strategie, Risiken und Reduktionsziele. Im Reporting-Zyklus 2025 nutzten rund 22.100 Unternehmen den Fragebogen, auf Anforderung von Investoren, Großkunden oder freiwillig.",
      },
      {
        q: "Wann öffnet und schließt das CDP-Portal jährlich?",
        a: "Das CDP-Portal öffnet typischerweise Mitte Juni und schließt Mitte September. Die genauen Termine veröffentlicht CDP jährlich auf cdp.net. Für eine sorgfältige Beantwortung des Full Corporate Questionnaire sollten Sie 2 bis 8 Wochen Bearbeitungszeit einplanen, idealerweise mit Projektstart im April oder Mai.",
      },
      {
        q: "Welcher CDP-Fragebogen ist für mein Unternehmen relevant, SME oder Full?",
        a: "Kleine und mittlere Unternehmen mit weniger als 500 Mitarbeitenden können den vereinfachten SME Climate Change Questionnaire nutzen. Mittelständische und große Unternehmen sowie Unternehmen mit konkreter Anfrage über das CDP Supply Chain Modul beantworten den Full Corporate Climate Change Questionnaire.",
      },
      {
        q: "Wie funktioniert das CDP-Scoring?",
        a: "CDP bewertet die eingereichten Antworten auf einer Skala von D− bis A. Das Scoring umfasst vier Stufen: Disclosure (D), Awareness (C), Management (B) und Leadership (A). Höhere Scores erfordern unter anderem belastbare Scope-3-Daten, einen wissenschaftsbasierten Reduktionspfad (z. B. SBTi-validiert) und Drittparteien-Verifizierung der Emissionen.",
      },
      {
        q: "Was ist das CDP Supply Chain Modul?",
        a: "Das CDP Supply Chain Programm ist ein Programm, über das über 270 Großeinkäufer (kombiniertes Beschaffungsvolumen rund 6,4 Billionen US-Dollar) ihre Lieferanten zur Offenlegung umweltbezogener Daten auffordern. Wer als Lieferant angefragt wird, riskiert bei Nicht-Antwort Punktabzüge in Lieferantenbewertungen oder den Verlust von Aufträgen. Die Anfrage erfolgt typischerweise per E-Mail mit individuellem Link zum CDP-Portal.",
      },
      {
        q: "Wie verhalten sich CDP und CSRD zueinander?",
        a: "Das CDP-Klimamodul ist methodisch auf ESRS E1 (CSRD), IFRS S2 des ISSB und das GHG Protocol abgestimmt; die Empfehlungen der TCFD wurden mit deren Auflösung im Oktober 2023 vollständig in IFRS S2 überführt. Eine sauber aufbereitete CDP-Antwort liefert daher den Großteil der Klimaangaben für den CSRD-Nachhaltigkeitsbericht. Doppelarbeit lässt sich vermeiden, wenn beide Reportings auf derselben THG-Bilanz und demselben Übergangsplan aufsetzen.",
      },
      {
        q: "Was kostet eine CDP-Beratung bei COzwei?",
        a: "Die Kosten hängen von Fragebogen-Typ (SME oder Full), vorhandener Datengrundlage und gewünschter Tiefe ab. SME-Erstteilnahmen sind in 2 bis 3 Wochen umsetzbar, Full-Fragebögen in 2 bis 8 Wochen. Im kostenlosen 20-Minuten-Erstgespräch klären wir Umfang und Aufwand auf Basis Ihrer konkreten Ausgangslage.",
      },
      {
        q: "Brauche ich eine CO₂-Bilanz, bevor ich CDP beantworten kann?",
        a: "Ja, ein belastbarer Corporate Carbon Footprint nach GHG Protocol ist die Grundvoraussetzung. Für den SME-Fragebogen genügen Scope 1 und Scope 2, für den Full-Fragebogen werden auch die wesentlichen Scope-3-Kategorien benötigt. Falls noch keine CCF vorliegt, übernimmt COzwei diese als vorgelagertes Modul.",
      },
    ],
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
      "Im Reporting-Zyklus 2025 haben rund 22.100 Unternehmen ihre Klimadaten über CDP offengelegt, gemeinsam mit über 1.000 Städten, Bundesstaaten und Regionen. Damit hat sich der CDP-Klimafragebogen als faktischer Marktstandard für die externe Offenlegung klima- und nachhaltigkeitsbezogener Daten etabliert. Zunehmend setzen Großkunden eine CDP-Offenlegung als Voraussetzung für die Aufnahme oder den Verbleib im Lieferantenpool, gängige ESG-Ratings honorieren ein vorliegendes CDP-Rating mit zusätzlichen Punkten.",
    trustCards: [
      {
        title: "Lieferkettenanfragen",
        body:
          "Über 270 Großeinkäufer mit einem kombinierten Beschaffungsvolumen von rund 6,4 Billionen US-Dollar fordern ihre Lieferanten über das CDP Supply Chain Programm zur Offenlegung umweltbezogener Daten auf. Eine ausbleibende oder unvollständige Antwort führt regelmäßig zu Punktabzügen in Lieferantenbewertungen und kann mittelfristig die Lieferanten-Beziehung selbst gefährden.",
        tag: "Supply Chain · Großkundenanfrage",
      },
      {
        title: "Investor Relations",
        body:
          "Im Reporting-Zyklus 2025 haben 640 institutionelle Investoren mit kombinierten Assets under Management von rund 127 Billionen US-Dollar Unternehmen über CDP zur Offenlegung aufgefordert. Eine belastbare CDP-Offenlegung und ein nachvollziehbarer Klima-Score stärken die Position des Unternehmens gegenüber Banken, Kapitalgebern und Ratingagenturen.",
        tag: "Kapitalmarkt · ESG-Rating",
      },
      {
        title: "CSRD-Synergie",
        body:
          "Das CDP-Klimamodul ist auf die einschlägigen Rahmenwerke abgestimmt: ESRS E1 unter der CSRD, IFRS S2 des ISSB (in das die Empfehlungen der TCFD seit deren Auflösung im Oktober 2023 vollständig überführt wurden) sowie das GHG Protocol. Eine sauber aufbereitete CDP-Antwort liefert damit den Großteil der Klimaangaben für den Nachhaltigkeitsbericht und reduziert Doppelarbeit zwischen den Reporting-Strängen.",
        tag: "ESRS E1 · IFRS S2 · GHG Protocol",
      },
      {
        title: "Strukturierter Jahresprozess",
        body:
          "Das CDP-Response-Fenster öffnet jährlich Mitte Juni. Die Scoring-Deadline liegt Mitte September; bis Ende Oktober können unscored Antworten und Korrekturen nachgereicht werden. Wir steuern Ihren Prozess entlang dieser Fristen, mit klaren Meilensteinen für Datenerhebung, Modulredaktion und Response Check vor der finalen Abgabe.",
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
          "Nach Veröffentlichung des Scores werten wir Ihre Bewertung systematisch aus, identifizieren konkrete Hebel für das Folgejahr und verankern CDP fest in Ihrem Klima-Reporting-Zyklus. Auf Wunsch begleiten wir die Entwicklung und Validierung wissenschaftsbasierter Klimaziele gemäß SBTi-Standard als zentralen Hebel für die Leadership-Stufe im CDP-Scoring.",
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
          "Kleine und mittlere Unternehmen, die die offiziellen CDP-SME-Schwellenwerte erfüllen (bis 1.000 Mitarbeitende und bis 250 Millionen US-Dollar Jahresumsatz) und das vereinfachte SME-Modul nutzen wollen. Erfahrungsgemäß profitieren insbesondere Erstteilnehmer und Unternehmen mit überschaubarer Scope-3-Komplexität von diesem Pfad. Liegt eines der Kriterien über der Schwelle, ist nur der Full Corporate Questionnaire möglich.",
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
        scoreFocus: "Disclosure (D / D−)",
        ctaLabel: "Erstgespräch vereinbaren",
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
        scoreFocus: "Awareness / Management (C / B)",
        ctaLabel: "Erstgespräch vereinbaren",
      },
      {
        level: "L",
        title: "Optimierung bestehender Fragebogen Klima",
        subtitle: "Score-Verbesserung für Wiederholungstäter",
        audience:
          "Unternehmen mit bestehender CDP-Submission, die ihren Score in einem oder mehreren Folgezyklen systematisch verbessern wollen (typische realistische Größenordnung: ein bis zwei Stufen pro Zyklus, etwa von D auf C oder von C auf B) und den Folgejahres-Prozess effizienter aufsetzen möchten.",
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
        scoreFocus: "Management / Leadership (B / A−)",
        ctaLabel: "Erstgespräch vereinbaren",
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
    authorRole: "Ihr Ansprechpartner für CDP",
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

    comparisonTitle: "Pakete im direkten Vergleich",
    comparisonIntro: "Alle Attribute auf einen Blick, um die passende Stufe für Ihre Ausgangslage zu finden.",
    compareLabelAudience: "Zielgruppe",
    compareLabelQuestionnaire: "Fragebogen",
    compareLabelPrerequisite: "Voraussetzung",
    compareLabelDuration: "Typische Dauer",
    compareLabelScoreFocus: "Score-Fokus",
    compareLabelAddon: "Add-on möglich",

    timelineSectionLabel: "Jahreszyklus",
    timelineSectionTitle: "Das CDP-Jahr im Überblick",
    timelineSectionIntro: "Wer das Portal-Fenster im Sommer halten will, startet früh. Unsere typische Projektplanung an den CDP-Jahreszyklus angelehnt.",
    timelineSteps: [
      { period: "Februar – März", title: "Erstgespräch & Setup", description: "Gap-Analyse, Fragebogen-Wahl, Projektplan und Datenquellen-Mapping." },
      { period: "April – Mai", title: "Datenaufbereitung", description: "CCF aktualisieren, Scope-3-Datenlücken schließen, Strategie- und Risiko-Inputs sammeln." },
      { period: "Mitte Juni", title: "CDP-Portal öffnet", description: "Antworten werden im Portal erfasst, parallel laufen die Modul-Redaktionen." },
      { period: "Juli – August", title: "Beantwortung & Review", description: "Vollständige Modul-Redaktion, Plausibilitäts- und Konsistenz-Checks, Score-Forecast." },
      { period: "Mitte September", title: "Einreichung & Portal-Schluss", description: "Fristgerechte Submission im CDP-Portal mit dokumentiertem Audit-Trail." },
      { period: "Q4 / Folgejahr", title: "Score-Auswertung", description: "Ergebnis-Review, Score-Improvement-Plan und Ableitung der Hebel für die nächste Submission." },
    ],

    caseSectionLabel: "Praxisbeispiel",
    caseSectionTitle: "Wie ein Score von C auf B gehoben wird",
    caseClientType: "Mittelständisches Industrieunternehmen, ca. 300 Mitarbeitende, erstmalige CDP-Teilnahme als Lieferant eines DAX-Kunden.",
    caseScoreBefore: "C",
    caseScoreAfter: "B",
    caseScoreBeforeLabel: "Vorjahres-Score",
    caseScoreAfterLabel: "Nach Optimierung",
    caseHighlights: [
      "Scope-3-Kategorien 3.1 und 3.4 von spend-based auf physisch / hybrid umgestellt.",
      "Übergangsplan mit SBTi-kompatiblen Zielen ergänzt und dokumentiert.",
      "Governance-Modul mit klaren Verantwortlichkeiten auf Vorstands-Ebene geschärft.",
    ],
    caseDisclaimer: "Anonymisiertes Beispiel auf Basis unserer Projekterfahrung. Konkrete Score-Verläufe variieren je nach Branche, Datengrundlage und Methodik.",

    trustSignals: [
      { value: "10+", label: "CDP-Reportings begleitet" },
      { value: "4+", label: "Branchen abgedeckt" },
      { value: "100 %", label: "fristgerechte Einreichung" },
    ],
    trustSignalsNote: "Stand Mai 2026, auf Basis unserer abgeschlossenen CDP-Projekte. Konkrete Referenzen auf Anfrage.",

    glossarySectionLabel: "Glossar",
    glossarySectionTitle: "Kurz erklärt: die wichtigsten Begriffe rund um CDP",
    glossarySectionIntro: "Wir nutzen auf dieser Seite einige Fachbegriffe, die in der CDP- und Klima-Berichterstattung Standard sind. Hier kurz erklärt.",
    glossary: [
      { term: "CCF (Corporate Carbon Footprint)", definition: "Die unternehmensweite Treibhausgasbilanz nach GHG Protocol, üblicherweise unterteilt in Scope 1, 2 und 3." },
      { term: "PCF (Product Carbon Footprint)", definition: "Produktbezogene Treibhausgasbilanz über den gesamten Lebenszyklus eines Produkts." },
      { term: "Scope 1", definition: "Direkte Emissionen aus eigenen Quellen, z. B. Verbrennung von Gas, Diesel, betriebliche Fahrzeuge." },
      { term: "Scope 2", definition: "Indirekte Emissionen aus dem Bezug von Strom, Wärme oder Dampf. Markt- und ortsbasiert getrennt zu ermitteln." },
      { term: "Scope 3", definition: "Sonstige indirekte Emissionen entlang der Wertschöpfungskette, von eingekauften Gütern bis zur Nutzung der Produkte." },
      { term: "SBTi (Science Based Targets initiative)", definition: "Initiative, die Reduktionsziele anhand wissenschaftsbasierter Kriterien (Paris-Pfad) validiert." },
      { term: "TCFD", definition: "Task Force on Climate-related Financial Disclosures. Internationaler Rahmen für die klimabezogene Berichterstattung, mittlerweile in ISSB überführt." },
      { term: "ISSB", definition: "International Sustainability Standards Board. Globaler Standard für Nachhaltigkeitsberichterstattung, integriert TCFD." },
      { term: "ESRS E1", definition: "Europäischer Berichtsstandard zum Thema Klimawandel im Rahmen der CSRD." },
    ],

    stickyCtaLabel: "Erstgespräch buchen",
  },

  en: {
    breadcrumbHome: "Home",
    breadcrumbSolutions: "Solutions",
    breadcrumbCurrent: "CDP climate reporting",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "May 2026",
    glanceLabel: "At a glance",
    glanceBody:
      "CDP climate reporting means the annual, standardised disclosure of climate data via the Climate Change Questionnaire of the non-profit organisation CDP. COzwei guides companies end to end, from the GHG inventory per GHG Protocol through all questionnaire modules to a timely submission and score evaluation. We offer three packages for SMEs, corporates and repeat reporters.",
    whatIsCdpTitle: "What is CDP?",
    whatIsCdpBody:
      "CDP is a non-profit organisation founded in London in 2000, operating the world's largest environmental disclosure system. The CDP climate questionnaire is aligned with the GHG Protocol, TCFD and ISSB and is considered the de-facto standard for external climate disclosure in B2B contexts.",
    whatIsCdpLinkPrefix: "More information at",
    statSourceLabel: "Source",
    internalLinkCcfLabel: "our decarbonisation advisory",
    internalLinkVerifLabel: "ISO 14064-3 verification",
    internalLinkKlimaLabel: "climate protection concepts",
    faqSectionLabel: "FAQ",
    faqSectionTitle: "Frequently asked questions about CDP climate reporting",
    faqSectionIntro:
      "Answers to the questions we are most often asked in CDP intro calls.",
    faqs: [
      {
        q: "What is the CDP Climate Change Questionnaire?",
        a: "The CDP Climate Change Questionnaire is an annual climate questionnaire of the non-profit organisation CDP (formerly Carbon Disclosure Project). Companies use it to disclose their climate data, strategy, risks and reduction targets in a standardised way. In the 2025 reporting cycle around 22,100 companies used the questionnaire, at the request of investors, large customers or on a voluntary basis.",
      },
      {
        q: "When does the CDP portal open and close each year?",
        a: "The CDP portal typically opens in mid-June and closes in mid-September. CDP publishes the exact dates annually on cdp.net. For a thorough response to the Full Corporate Questionnaire you should plan two to eight weeks of work, ideally with a project start in April or May.",
      },
      {
        q: "Which CDP questionnaire is relevant for my company, SME or Full?",
        a: "Small and medium-sized enterprises that meet the official CDP SME thresholds (up to 1,000 employees and up to 250 million US dollars in annual revenue) can use the simplified SME Climate Change Questionnaire. Mid-sized and large companies, as well as companies with a concrete request via the CDP Supply Chain programme, answer the Full Corporate Climate Change Questionnaire.",
      },
      {
        q: "How does the CDP scoring work?",
        a: "CDP rates submitted responses on a scale from D− to A. The scoring covers four levels: Disclosure (D), Awareness (C), Management (B) and Leadership (A). Higher scores require, among other things, robust Scope 3 data, a science-based reduction pathway (e.g. SBTi-validated) and third-party verification of emissions.",
      },
      {
        q: "What is the CDP Supply Chain module?",
        a: "The CDP Supply Chain programme is a scheme through which more than 270 large purchasers (combined procurement spending of around 6.4 trillion US dollars) request environmental disclosure from their suppliers. Suppliers who do not respond risk point deductions in supplier ratings or losing contracts. The request typically arrives by email with an individual link to the CDP portal.",
      },
      {
        q: "How do CDP and CSRD relate to each other?",
        a: "The CDP climate module is methodologically aligned with ESRS E1 (CSRD), IFRS S2 from the ISSB and the GHG Protocol; the TCFD recommendations have been fully absorbed into IFRS S2 since the TCFD's disbandment in October 2023. A well-prepared CDP response therefore delivers most of the climate disclosures for your CSRD sustainability report. Duplicate work can be avoided when both reports build on the same GHG inventory and transition plan.",
      },
      {
        q: "How much does a CDP advisory engagement at COzwei cost?",
        a: "Costs depend on the questionnaire type (SME or Full), the existing data foundation and the desired depth. SME first-time submissions can be delivered in two to three weeks, Full questionnaires in two to eight weeks. In a free 20-minute intro call we clarify scope and effort based on your specific situation.",
      },
      {
        q: "Do I need a CO₂ inventory before I can answer CDP?",
        a: "Yes, a robust Corporate Carbon Footprint per the GHG Protocol is the basic prerequisite. For the SME questionnaire, Scope 1 and Scope 2 are sufficient; for the Full questionnaire the material Scope 3 categories are also needed. If there is no CCF yet, COzwei delivers it as a preceding module.",
      },
    ],
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
      "In the 2025 reporting cycle around 22,100 companies disclosed their climate data through CDP, together with more than 1,000 cities, states and regions. The CDP climate questionnaire has thus established itself as the de-facto market standard for the external disclosure of climate- and sustainability-related data. Large customers increasingly require a CDP disclosure as a precondition for inclusion in or retention in their supplier pool, and established ESG ratings reward an existing CDP rating with additional points.",
    trustCards: [
      {
        title: "Supply chain requests",
        body:
          "More than 270 large purchasers, with combined procurement spending of around 6.4 trillion US dollars, request environmental disclosure from their suppliers through the CDP Supply Chain programme. A missing or incomplete response regularly leads to point deductions in supplier ratings and can put the supplier relationship itself at risk over the medium term.",
        tag: "Supply Chain · large-customer request",
      },
      {
        title: "Investor relations",
        body:
          "In the 2025 reporting cycle, 640 institutional investors with combined assets under management of around 127 trillion US dollars requested companies to disclose through CDP. A robust CDP disclosure and a credible climate score strengthen the company's position with banks, capital providers and rating agencies.",
        tag: "Capital markets · ESG rating",
      },
      {
        title: "CSRD synergy",
        body:
          "The CDP climate module is aligned with the relevant frameworks: ESRS E1 under the CSRD, IFRS S2 from the ISSB (which has fully absorbed the TCFD recommendations since the TCFD's disbandment in October 2023) and the GHG Protocol. A well-prepared CDP response therefore delivers most of the climate disclosures for the sustainability report and reduces duplicate work between reporting tracks.",
        tag: "ESRS E1 · IFRS S2 · GHG Protocol",
      },
      {
        title: "Structured annual process",
        body:
          "The CDP response window opens each year in mid-June. The scoring deadline is in mid-September; unscored responses and amendments can be filed until the end of October. We steer your process along these deadlines, with clear milestones for data collection, module drafting and response check before the final submission.",
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
          "Once the score is published we evaluate your rating systematically, identify concrete levers for the following year and anchor CDP firmly in your climate-reporting cycle. On request we also support the development and validation of science-based climate targets per the SBTi standard as a central lever towards the leadership level in the CDP scoring.",
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
          "Small and medium-sized enterprises that meet the official CDP SME thresholds (up to 1,000 employees and up to 250 million US dollars in annual revenue) and want to use the simplified SME module. First-time reporters and companies with manageable Scope 3 complexity benefit most from this path. If either criterion is exceeded, only the Full Corporate Questionnaire is available.",
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
        scoreFocus: "Disclosure (D / D−)",
        ctaLabel: "Book intro call",
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
        scoreFocus: "Awareness / Management (C / B)",
        ctaLabel: "Book intro call",
      },
      {
        level: "L",
        title: "Optimisation of existing climate questionnaire",
        subtitle: "Score improvement for repeat reporters",
        audience:
          "Companies with an existing CDP submission that want to improve their score systematically over one or several follow-up cycles (a typical realistic increment is one to two levels per cycle, e.g. from D to C or from C to B) and want to set up the follow-up year process more efficiently.",
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
        scoreFocus: "Management / Leadership (B / A−)",
        ctaLabel: "Book intro call",
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
    authorRole: "Your CDP contact",
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

    comparisonTitle: "Packages at a glance",
    comparisonIntro: "All attributes side by side to help you find the right tier for your starting position.",
    compareLabelAudience: "Target group",
    compareLabelQuestionnaire: "Questionnaire",
    compareLabelPrerequisite: "Prerequisite",
    compareLabelDuration: "Typical duration",
    compareLabelScoreFocus: "Score focus",
    compareLabelAddon: "Add-on available",

    timelineSectionLabel: "Annual cycle",
    timelineSectionTitle: "The CDP year at a glance",
    timelineSectionIntro: "If you want to hit the summer submission window, start early. Our typical project plan is aligned with the CDP annual cycle.",
    timelineSteps: [
      { period: "February – March", title: "Intro call & setup", description: "Gap analysis, questionnaire choice, project plan and data source mapping." },
      { period: "April – May", title: "Data preparation", description: "Refresh the CCF, close Scope 3 gaps, gather strategy and risk inputs." },
      { period: "Mid-June", title: "CDP portal opens", description: "Responses are captured in the portal while module drafting runs in parallel." },
      { period: "July – August", title: "Drafting & review", description: "Full module drafting, plausibility and consistency checks, score forecast." },
      { period: "Mid-September", title: "Submission & portal close", description: "Timely submission in the CDP portal with documented audit trail." },
      { period: "Q4 / following year", title: "Score evaluation", description: "Result review, score improvement plan and levers for the next submission." },
    ],

    caseSectionLabel: "Practice example",
    caseSectionTitle: "How a score moves from C to B",
    caseClientType: "Mid-sized industrial company, ca. 300 employees, first CDP submission as a supplier of a DAX customer.",
    caseScoreBefore: "C",
    caseScoreAfter: "B",
    caseScoreBeforeLabel: "Prior-year score",
    caseScoreAfterLabel: "After optimisation",
    caseHighlights: [
      "Scope 3 categories 3.1 and 3.4 moved from spend-based to physical / hybrid.",
      "Transition plan extended with SBTi-aligned targets and documented.",
      "Governance module sharpened with clear board-level responsibilities.",
    ],
    caseDisclaimer: "Anonymised example based on our project experience. Actual score trajectories vary by industry, data base and methodology.",

    trustSignals: [
      { value: "10+", label: "CDP reportings delivered" },
      { value: "4+", label: "industries covered" },
      { value: "100 %", label: "timely submission rate" },
    ],
    trustSignalsNote: "As of May 2026, based on our completed CDP projects. References available on request.",

    glossarySectionLabel: "Glossary",
    glossarySectionTitle: "In short: the key terms around CDP",
    glossarySectionIntro: "We use a few standard terms on this page that are common in CDP and climate reporting. Briefly explained.",
    glossary: [
      { term: "CCF (Corporate Carbon Footprint)", definition: "Company-wide greenhouse gas inventory per GHG Protocol, usually broken down into Scope 1, 2 and 3." },
      { term: "PCF (Product Carbon Footprint)", definition: "Product-specific greenhouse gas inventory over the full life cycle of a product." },
      { term: "Scope 1", definition: "Direct emissions from owned sources, e.g. gas, diesel, operational vehicles." },
      { term: "Scope 2", definition: "Indirect emissions from purchased electricity, heat or steam. To be reported both market-based and location-based." },
      { term: "Scope 3", definition: "Other indirect emissions along the value chain, from purchased goods to product use." },
      { term: "SBTi (Science Based Targets initiative)", definition: "Initiative that validates reduction targets against science-based criteria (Paris pathway)." },
      { term: "TCFD", definition: "Task Force on Climate-related Financial Disclosures. International framework for climate-related reporting, now transitioned into ISSB." },
      { term: "ISSB", definition: "International Sustainability Standards Board. Global standard for sustainability reporting, integrates TCFD." },
      { term: "ESRS E1", definition: "European reporting standard on climate change as part of CSRD." },
    ],

    stickyCtaLabel: "Book intro call",
  },

  pt: {
    breadcrumbHome: "Início",
    breadcrumbSolutions: "Soluções",
    breadcrumbCurrent: "Relato climático CDP",
    lastUpdatedLabel: "Atualizado em",
    lastUpdatedDate: "Maio de 2026",
    glanceLabel: "Em resumo",
    glanceBody:
      "Relato climático CDP significa a divulgação anual e padronizada de dados climáticos através do Climate Change Questionnaire da organização sem fins lucrativos CDP. A COzwei acompanha as empresas de ponta a ponta, desde o inventário GEE segundo o GHG Protocol, passando pelos módulos do questionário, até à submissão atempada e à avaliação do score. Oferecemos três pacotes para PME, grandes empresas e participantes recorrentes.",
    whatIsCdpTitle: "O que é o CDP?",
    whatIsCdpBody:
      "O CDP é uma organização sem fins lucrativos fundada em Londres em 2000, que opera o maior sistema mundial de divulgação de dados ambientais. O questionário climático do CDP está alinhado com o GHG Protocol, TCFD e ISSB e é considerado o padrão de facto para divulgação climática externa em contextos B2B.",
    whatIsCdpLinkPrefix: "Mais informações em",
    statSourceLabel: "Fonte",
    internalLinkCcfLabel: "a nossa consultoria de descarbonização",
    internalLinkVerifLabel: "verificação ISO 14064-3",
    internalLinkKlimaLabel: "conceitos de proteção climática",
    faqSectionLabel: "FAQ",
    faqSectionTitle: "Perguntas frequentes sobre o relato climático CDP",
    faqSectionIntro:
      "Respostas às perguntas que mais nos colocam nas conversas iniciais sobre CDP.",
    faqs: [
      {
        q: "O que é o CDP Climate Change Questionnaire?",
        a: "O CDP Climate Change Questionnaire é um questionário climático anual da organização sem fins lucrativos CDP (anteriormente Carbon Disclosure Project). As empresas divulgam nele, de forma padronizada, os seus dados climáticos, estratégia, riscos e metas de redução. No ciclo de relato de 2025, cerca de 22.100 empresas utilizaram o questionário, a pedido de investidores, grandes clientes ou voluntariamente.",
      },
      {
        q: "Quando abre e fecha o portal CDP todos os anos?",
        a: "O portal CDP abre tipicamente em meados de junho e fecha em meados de setembro. O CDP publica as datas exatas anualmente em cdp.net. Para uma resposta cuidadosa ao Full Corporate Questionnaire, deve planear entre duas a oito semanas de trabalho, idealmente com início do projeto em abril ou maio.",
      },
      {
        q: "Qual o questionário CDP relevante para a minha empresa, SME ou Full?",
        a: "Pequenas e médias empresas que cumprem os limites oficiais CDP SME (até 1.000 colaboradores e até 250 milhões de dólares americanos de volume de negócios anual) podem utilizar o SME Climate Change Questionnaire simplificado. Médias e grandes empresas, bem como empresas com um pedido concreto via programa CDP Supply Chain, respondem ao Full Corporate Climate Change Questionnaire.",
      },
      {
        q: "Como funciona o scoring do CDP?",
        a: "O CDP avalia as respostas submetidas numa escala de D− até A. O scoring abrange quatro níveis: Disclosure (D), Awareness (C), Management (B) e Leadership (A). Scores mais elevados exigem, entre outros, dados robustos de Escopo 3, uma trajetória de redução baseada na ciência (por exemplo, validada SBTi) e verificação de emissões por terceiros.",
      },
      {
        q: "O que é o módulo CDP Supply Chain?",
        a: "O programa CDP Supply Chain é um esquema através do qual mais de 270 grandes compradores (volume de compras combinado de cerca de 6,4 biliões de dólares americanos) pedem aos seus fornecedores a divulgação de dados ambientais. Fornecedores que não respondam arriscam-se a deduções de pontos nas avaliações de fornecedor ou à perda de contratos. O pedido chega tipicamente por e-mail com um link individual para o portal CDP.",
      },
      {
        q: "Como se relacionam o CDP e a CSRD?",
        a: "O módulo climático do CDP está metodologicamente alinhado com ESRS E1 (CSRD), IFRS S2 do ISSB e o GHG Protocol; as recomendações da TCFD foram integralmente integradas no IFRS S2 desde a dissolução da TCFD em outubro de 2023. Uma resposta CDP bem preparada fornece, portanto, a maior parte das divulgações climáticas para o seu relatório de sustentabilidade CSRD. Pode evitar trabalho duplo quando ambos os relatos assentam no mesmo inventário GEE e plano de transição.",
      },
      {
        q: "Quanto custa uma consultoria CDP da COzwei?",
        a: "Os custos dependem do tipo de questionário (SME ou Full), da base de dados existente e da profundidade desejada. Primeiras participações SME podem ser entregues em duas a três semanas, questionários Full em duas a oito semanas. Na conversa inicial gratuita de 20 minutos clarificamos o âmbito e o esforço com base na sua situação concreta.",
      },
      {
        q: "Preciso de um inventário de CO₂ antes de poder responder ao CDP?",
        a: "Sim, um Corporate Carbon Footprint robusto segundo o GHG Protocol é o pré-requisito básico. Para o questionário SME bastam Escopo 1 e Escopo 2; para o questionário Full são também necessárias as categorias materiais do Escopo 3. Se ainda não existir um CCF, a COzwei entrega-o como módulo prévio.",
      },
    ],
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
      "No ciclo de relato de 2025, cerca de 22.100 empresas divulgaram os seus dados climáticos através do CDP, juntamente com mais de 1.000 cidades, estados e regiões. Desta forma, o questionário climático do CDP afirmou-se como o padrão de facto do mercado para a divulgação externa de dados climáticos e de sustentabilidade. Cada vez mais grandes clientes exigem uma divulgação CDP como pré-condição para entrar ou permanecer no seu pool de fornecedores, e os ratings ESG estabelecidos atribuem pontos adicionais quando existe um rating CDP.",
    trustCards: [
      {
        title: "Pedidos da cadeia de fornecimento",
        body:
          "Mais de 270 grandes compradores, com um volume de compras combinado de cerca de 6,4 biliões de dólares americanos, pedem aos seus fornecedores a divulgação de dados ambientais através do programa CDP Supply Chain. Uma resposta em falta ou incompleta conduz regularmente a deduções de pontos nas avaliações de fornecedores e pode, a médio prazo, comprometer a própria relação comercial.",
        tag: "Cadeia de fornecimento · pedido de grande cliente",
      },
      {
        title: "Relações com investidores",
        body:
          "No ciclo de relato de 2025, 640 investidores institucionais com ativos sob gestão combinados de cerca de 127 biliões de dólares americanos pediram a empresas a divulgação através do CDP. Uma divulgação CDP sólida e um score climático credível reforçam a posição da empresa junto de bancos, financiadores e agências de rating.",
        tag: "Mercado de capitais · rating ESG",
      },
      {
        title: "Sinergia com a CSRD",
        body:
          "O módulo climático do CDP está alinhado com os quadros relevantes: ESRS E1 no âmbito da CSRD, IFRS S2 do ISSB (no qual as recomendações da TCFD foram integralmente integradas desde a sua dissolução em outubro de 2023) e o GHG Protocol. Uma resposta CDP bem preparada fornece assim a maior parte das divulgações climáticas para o relatório de sustentabilidade e reduz o trabalho duplo entre os diferentes relatos.",
        tag: "ESRS E1 · IFRS S2 · GHG Protocol",
      },
      {
        title: "Processo anual estruturado",
        body:
          "A janela de resposta do CDP abre anualmente em meados de junho. O prazo de scoring é em meados de setembro; até ao final de outubro podem ser submetidas respostas não scored e correções. Conduzimos o seu processo ao longo destes prazos, com marcos claros para recolha de dados, redação dos módulos e response check antes da submissão final.",
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
          "Após a publicação do score, avaliamos a sua classificação de forma sistemática, identificamos alavancas concretas para o ano seguinte e ancoramos o CDP no seu ciclo de relato climático. A pedido, apoiamos também o desenvolvimento e a validação de metas climáticas baseadas na ciência segundo o padrão SBTi como alavanca central para o nível Leadership no scoring CDP.",
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
          "Pequenas e médias empresas que cumprem os limites oficiais CDP SME (até 1.000 colaboradores e até 250 milhões de dólares americanos de volume de negócios anual) e que pretendem utilizar o módulo SME simplificado. Beneficiam particularmente os primeiros participantes e empresas com complexidade Scope 3 limitada. Se qualquer um dos critérios for excedido, apenas o Full Corporate Questionnaire está disponível.",
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
        scoreFocus: "Disclosure (D / D−)",
        ctaLabel: "Agendar conversa inicial",
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
        scoreFocus: "Awareness / Management (C / B)",
        ctaLabel: "Agendar conversa inicial",
      },
      {
        level: "L",
        title: "Otimização de questionário Clima existente",
        subtitle: "Melhoria de score para reportadores recorrentes",
        audience:
          "Empresas com uma submissão CDP existente que pretendem melhorar o seu score de forma sistemática ao longo de um ou vários ciclos seguintes (uma ordem de grandeza realista típica é de um a dois níveis por ciclo, por exemplo de D para C ou de C para B) e estruturar o processo do ano seguinte de forma mais eficiente.",
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
        scoreFocus: "Management / Leadership (B / A−)",
        ctaLabel: "Agendar conversa inicial",
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
    authorRole: "O seu ponto de contacto CDP",
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

    comparisonTitle: "Pacotes em comparação direta",
    comparisonIntro: "Todos os atributos numa vista única, para encontrar o nível adequado à sua situação de partida.",
    compareLabelAudience: "Público-alvo",
    compareLabelQuestionnaire: "Questionário",
    compareLabelPrerequisite: "Pré-requisito",
    compareLabelDuration: "Duração típica",
    compareLabelScoreFocus: "Foco do score",
    compareLabelAddon: "Add-on disponível",

    timelineSectionLabel: "Ciclo anual",
    timelineSectionTitle: "O ano CDP numa vista",
    timelineSectionIntro: "Quem quer apanhar a janela de submissão do verão começa cedo. O nosso planeamento típico segue o ciclo anual do CDP.",
    timelineSteps: [
      { period: "Fevereiro – Março", title: "Conversa inicial & setup", description: "Análise de lacunas, escolha do questionário, plano de projeto e mapeamento de fontes de dados." },
      { period: "Abril – Maio", title: "Preparação de dados", description: "Atualizar o CCF, fechar lacunas no Escopo 3, recolher dados de estratégia e risco." },
      { period: "Meados de junho", title: "Portal CDP abre", description: "As respostas são introduzidas no portal enquanto a redação dos módulos decorre em paralelo." },
      { period: "Julho – Agosto", title: "Redação & revisão", description: "Redação completa dos módulos, verificações de plausibilidade e consistência, previsão do score." },
      { period: "Meados de setembro", title: "Submissão & encerramento do portal", description: "Submissão atempada no portal CDP com audit trail documentado." },
      { period: "T4 / ano seguinte", title: "Avaliação do score", description: "Revisão do resultado, plano de melhoria do score e alavancas para a próxima submissão." },
    ],

    caseSectionLabel: "Exemplo prático",
    caseSectionTitle: "Como um score passa de C para B",
    caseClientType: "Empresa industrial de média dimensão, cerca de 300 colaboradores, primeira submissão CDP como fornecedor de um cliente DAX.",
    caseScoreBefore: "C",
    caseScoreAfter: "B",
    caseScoreBeforeLabel: "Score do ano anterior",
    caseScoreAfterLabel: "Após otimização",
    caseHighlights: [
      "Categorias 3.1 e 3.4 do Escopo 3 passaram de spend-based para físico / híbrido.",
      "Plano de transição alargado com metas alinhadas com SBTi e documentado.",
      "Módulo de governança refinado com responsabilidades claras ao nível do conselho.",
    ],
    caseDisclaimer: "Exemplo anonimizado com base na nossa experiência de projeto. As trajetórias reais de score variam consoante setor, base de dados e metodologia.",

    trustSignals: [
      { value: "10+", label: "relatos CDP entregues" },
      { value: "4+", label: "setores cobertos" },
      { value: "100 %", label: "submissões dentro do prazo" },
    ],
    trustSignalsNote: "Estado em maio de 2026, com base nos nossos projetos CDP concluídos. Referências disponíveis a pedido.",

    glossarySectionLabel: "Glossário",
    glossarySectionTitle: "Em breve: os termos-chave em torno do CDP",
    glossarySectionIntro: "Usamos nesta página alguns termos técnicos comuns no relato CDP e climático. Explicados em breve.",
    glossary: [
      { term: "CCF (Corporate Carbon Footprint)", definition: "Inventário de gases de efeito estufa à escala da empresa segundo o GHG Protocol, normalmente desdobrado em Escopo 1, 2 e 3." },
      { term: "PCF (Product Carbon Footprint)", definition: "Inventário de gases de efeito estufa específico de um produto ao longo de todo o seu ciclo de vida." },
      { term: "Escopo 1", definition: "Emissões diretas de fontes próprias, por exemplo, gás, gasóleo, frotas operacionais." },
      { term: "Escopo 2", definition: "Emissões indiretas da compra de eletricidade, calor ou vapor. A reportar em market-based e location-based." },
      { term: "Escopo 3", definition: "Outras emissões indiretas ao longo da cadeia de valor, de bens adquiridos à utilização dos produtos." },
      { term: "SBTi (Science Based Targets initiative)", definition: "Iniciativa que valida metas de redução face a critérios baseados na ciência (trajetória Paris)." },
      { term: "TCFD", definition: "Task Force on Climate-related Financial Disclosures. Quadro internacional para relato climático, agora integrado no ISSB." },
      { term: "ISSB", definition: "International Sustainability Standards Board. Padrão global para relato de sustentabilidade, integra o TCFD." },
      { term: "ESRS E1", definition: "Padrão europeu de relato sobre alterações climáticas no âmbito da CSRD." },
    ],

    stickyCtaLabel: "Agendar conversa inicial",
  },
};
