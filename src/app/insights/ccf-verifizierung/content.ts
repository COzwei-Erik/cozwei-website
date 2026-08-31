type Faq = { q: string; a: string };
type Bullet = { strong: string; rest: string };
type Pattern = { title: string; body: string };

type Content = {
  heroKicker: string;
  heroTitle: string;
  intro: string;

  section1Title: string;
  section1P1: string;
  section1P2: string;

  statNumber: string;
  statText: string;

  section2Title: string;
  section2P: string;
  section2Bullets: Bullet[];

  pullQuote: string;
  pullQuoteAuthor: string;

  section3Title: string;
  section3P1: string;
  section3P2: string;

  section4Title: string;
  section4P: string;
  section4Items: Bullet[];

  section5Title: string;
  section5P: string;
  patterns: Pattern[];

  section6Title: string;
  section6P1: string;
  section6P2: string;

  section7Title: string;
  section7P: string;

  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButtonLabel: string;

  authorBio: string;
  authorSectionLabel: string;
  authorSectionTitle: string;
  authorRole: string;
  authorCtaLabel: string;
  authorCtaDesc: string;

  faqIntro: string;
  faqs: Faq[];

  disclaimer: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroKicker: "Praxisbeobachtung · CCF-Verifizierung nach ISO 14064",
    heroTitle: "Was 50 verifizierte CO₂-Bilanzen über die Grenzen von Software verraten",
    intro:
      "Im letzten Jahr habe ich als Bilanzierungsexperte mehr CO₂-Bilanzen verifiziert als selbst erstellt. Über 50 Bilanzen in 12 Monaten, aus etlichen Sektoren wie Konsumgüter, Bildung und öffentlicher Sektor. Die Abweichungen folgen fast immer demselben Muster.",

    section1Title: "Eine Beobachtung aus der Praxis",
    section1P1:
      "Immer mehr Unternehmen berechnen ihren Corporate Carbon Footprint selbst, gestützt auf spezialisierte ESG-Software, eigene Excel-Modelle oder eine Kombination aus beidem. Eine begrüßenswerte Entwicklung, denn nur wer die eigene CO₂-Bilanz versteht, kann beginnen, Maßnahmen abzuleiten.",
    section1P2:
      "Was mir in den letzten zwölf Monaten bei der Verifizierung von Bilanzen auffällt: Die Software macht ihren Job. Die Daten sind in der Regel sauber erfasst. Probleme verursachen die methodischen Entscheidungen, die unmittelbar davor getroffen werden. Meist als unscheinbare Auswahlfeld-Klicks in der Software-Oberfläche (z. B. durch die Wahl von Emissionsfaktoren). Die Auswirkungen auf den CCF liegen häufig bei mehr als 30 %. In Einzelfällen haben sich die Treibhausgasbilanzen auch verdreifacht.",

    statNumber: "50+",
    statText:
      "verifizierte CCFs in 12 Monaten, aus Sektoren wie Industrie, Konsumgüter, Bildung und öffentlicher Sektor. In nahezu jeder Bilanz habe ich methodische Abweichungen mit Auswirkung auf das Bilanzergebnis gefunden.",

    section2Title: "Warum diese Schwächen jetzt sichtbar werden",
    section2P:
      "Ein CCF ist heute kein internes Dokument mehr. Er fließt in CDP-Antworten, EcoVadis-Bewertungen, ESRS-E1-Berichterstattung und Kundenfragebögen entlang der Lieferkette. Mit der CSRD wird die Nachhaltigkeitsberichterstattung schrittweise prüfungspflichtig. Genau dort werden methodische Entscheidungen aus dem ersten Bilanzjahr zur Herausforderung.",
    section2Bullets: [
      {
        strong: "Vergleichbarkeit über die Jahre:",
        rest: " Wenn sich Berechnungsansätze unbemerkt zwischen Berichtsjahren verschieben, wird Trendanalyse unmöglich. Reduktionsziele lassen sich gegen eine instabile Baseline nicht messen.",
      },
      {
        strong: "Belastbarkeit gegenüber Prüfung:",
        rest: " Im ersten Jahr nicht dokumentierte Entscheidungen lassen sich später nur mit erheblichem Aufwand rekonstruieren.",
      },
      {
        strong: "Glaubwürdigkeit gegenüber Stakeholdern:",
        rest: " Ein im Nachhinein korrigierter Corporate Carbon Footprint ist erklärungsbedürftig, auch wenn die Korrektur fachlich richtig ist.",
      },
      {
        strong: "Tragfähigkeit der Dekarbonisierungsstrategie:",
        rest: " Eine fehlerhafte Verteilung zwischen Scopes oder Kategorien kann dazu führen, dass Investitionen an der falschen Stelle ansetzen.",
      },
    ],

    pullQuote:
      "Bereits eine Abweichung von über 10–20 Prozent in einer materiellen Bilanzposition ist kein Rundungsfehler. Sie verändert die Grundlage, auf der ein Unternehmen seine Klimastrategie aufbaut.",
    pullQuoteAuthor: "Erik Jakob",

    section3Title: "Das Muster: Software ersetzt nicht die methodische Entscheidung",
    section3P1:
      "ESG-Software mit integrierten Carbon-Accounting-Modulen hat in den vergangenen Jahren erhebliche Fortschritte gemacht. Strukturierte Datenerfassung, hinterlegte Emissionsfaktordatenbanken, automatisierte Berichtsformate: ein klarer Gewinn gegenüber einem internen Excel-Modell oder kostenintensiver externer Dienstleister.",
    section3P2:
      "Was Software jedoch nicht leisten kann, ist die fachliche Beurteilung des spezifischen Unternehmenskontextes zur Treibhausgasbilanzierung. Genau dort entstehen die Fehler, die mir am häufigsten begegnen. Quer durch alle Branchen, vom industriellen Mittelständler bis zur Bildungseinrichtung. Es sind selten Tippfehler. Es sind methodische Entscheidungen des Softwarenutzers.",

    section4Title: "Der COzwei 5-Punkte-Selbst-Verifizierungs-Check",
    section4P:
      "Aus über 50 Verifizierungen von CO₂-Bilanzen habe ich fünf Prüfdimensionen abgeleitet, an denen sich nahezu jede methodische Schwäche zeigt. Sie folgen den Prüfgrundsätzen der ISO 14064-3 (Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz, Transparenz) und sind unabhängig von der eingesetzten Software anwendbar.",
    section4Items: [
      {
        strong: "Systemgrenzen:",
        rest: " Einheitlicher Konsolidierungsansatz (Operational Control, Financial Control oder Equity Share), konsistent über alle Standorte, auch bei dezentraler Datenerfassung.",
      },
      {
        strong: "Emissionsfaktoren:",
        rest: " Aktualität, Strommix-Logik (marktbasiert vs. standortbasiert nach GHG Protocol Scope 2 Guidance), korrekte Anwendung des Residual Mix bei vorliegenden Herkunftsnachweisen.",
      },
      {
        strong: "Scope-3-Vollständigkeit:",
        rest: " Saubere Abgrenzung zwischen Purchased Goods (3.1) und Capital Goods (3.2), nachvollziehbare Begründung für ausgeschlossene Kategorien, CDP- und CSRD-tauglich.",
      },
      {
        strong: "Plausibilität:",
        rest: " Auffällige Werte (z. B. Stromverbrauch pro Quadratmeter, Reisedaten pro Mitarbeitenden) im Abgleich mit Branchen-Benchmarks.",
      },
      {
        strong: "Dokumentation:",
        rest: " Audit-Trail aller methodischen Entscheidungen, sodass die Bilanz im Folgejahr und unter Prüfung nachvollziehbar bleibt.",
      },
    ],

    section5Title: "Drei wiederkehrende Fehler-Muster aus dem Portfolio",
    section5P:
      "Aus den über 50 Verifizierungen lassen sich drei methodische Schwächen herausarbeiten, die unabhängig von Branche und eingesetzter Software regelmäßig auftreten.",
    patterns: [
      {
        title: "Fehlerhafte Dateneintragung beim Gasverbrauch (Scope 1)",
        body:
          "Mit steigender Anzahl an Standorten und dezentralen Dateninputgebern häufen sich klassische Übertragungsfehler beim Gasverbrauch: falsche Mengenangaben, verschobene Dezimalstellen, vertauschte Einheiten (etwa kWh statt MWh oder Kubikmeter ohne Brennwert-Umrechnung). Ein einzelner solcher Fehler kann eine Bilanzposition um Größenordnungen verschieben. Ohne strukturierte Plausibilitätsprüfung bleibt das in der Software unsichtbar, bis die Bilanz extern geprüft wird.",
      },
      {
        title: "Grünstrom marktbasiert vs. standortbasiert (Scope 2)",
        body:
          "In rund einem Drittel der verifizierten Bilanzen wurde Scope 2 ausschließlich marktbasiert ausgewiesen, mit pauschal angesetztem Grünstrom-Bezug auch für Standorte, deren Herkunftsnachweise nicht im Geltungsjahr lagen oder nicht eindeutig zuordenbar waren. Die parallel erforderliche standortbasierte Sicht (location-based) fehlte vollständig oder war unsauber ermittelt; der Residual-Mix für Standorte ohne Nachweise blieb unberücksichtigt. Die Position lag häufig im zweistelligen Prozentbereich zu niedrig, und mit ihr die Belastbarkeit.",
      },
      {
        title: "Pauschale Spend-Based-Methodik (Scope 3.1)",
        body:
          "Wiederkehrend wurde Scope 3.1 vollständig spend-based berechnet, auch für Kategorien, in denen physische Daten verfügbar gewesen wären. Die Position war damit für CDP nicht „A-tauglich\" und Reduktionsmaßnahmen ließen sich daraus kaum ableiten. Eine Hybrid-Methodik schafft hier sofort Klarheit.",
      },
    ],

    section6Title: "Was eine unabhängige Verifizierung leistet",
    section6P1:
      "Eine Verifizierung ist keine Neuberechnung. Sie ist eine strukturierte methodische Überprüfung der bestehenden Bilanz entlang der genannten Prüfdimensionen, unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO 14064-3.",
    section6P2:
      "Zur Begriffsabgrenzung: Die Norm unterscheidet zwischen Verifizierung (historische Daten, also der Anwendungsfall für einen abgeschlossenen CCF) und Validierung (zukunftsbezogene Annahmen). Im deutschen Sprachgebrauch hat sich „Verifizierung\" für beides etabliert; gemeint ist hier der Prüfprozess nach ISO 14064-3. Eine methodische Verifizierung als Beratungsleistung, wie wir sie bei COzwei anbieten, hält sich an das inhaltliche Vorgehen der Norm.",

    section7Title: "Fazit",
    section7P:
      "Die CO₂-Bilanz des ersten Berichtsjahres ist methodisch der wichtigste, denn er definiert die Grundlage für alle folgenden Jahre. Software ist bei der Erstellung ein wertvolles Werkzeug, sie ersetzt aber nicht vollständig das nötige Fachwissen des Anwenders zur Treibhausgasbilanzierung. In den meisten Fällen lohnt sich ein zweiter, erfahrener Blick, bevor die Zahlen in offizielle Berichte fließen und darauf basierend jährlich weitergearbeitet wird.",

    ctaEyebrow: "Prüfen Sie Ihre Bilanz",
    ctaTitle: "Der einfache Weg zum nächsten Schritt",
    ctaBody:
      "30-Min-Erstgespräch, wenn Sie Ihre Bilanz konkret prüfen lassen möchten oder eine Orientierung benötigen. Strukturierte Verifizierung mit klarem Umfang, typischerweise zwei bis vier Wochen, Festpreis-Indikation und Ergebnisbericht.",
    ctaButtonLabel: "30-Minuten-Erstgespräch buchen",

    authorBio:
      "Erik Jakob ist Geschäftsführer der COzwei GmbH, einer auf Klimaschutzthemen spezialisierten Nachhaltigkeitsberatung. Er hat in den letzten sieben Jahren Treibhausgasbilanzen für DAX-Konzerne, Mittelständler, Kleinstunternehmen und kommunale Einrichtungen in ganz Europa erstellt oder verifiziert.",
    authorSectionLabel: "Ihr Ansprechpartner",
    authorSectionTitle: "Im Erstgespräch klären wir Ihre CCF-Ausgangslage",
    authorRole: "Geschäftsführer · CCF-Verifizierung nach ISO 14064-3",
    authorCtaLabel: "30-Minuten-Erstgespräch buchen",
    authorCtaDesc: "Kostenlos und unverbindlich. Wir prüfen Ihre Bilanz auf typische Schwachstellen und skizzieren den nächsten sinnvollen Schritt, Verifizierung oder gezielte Vor-Arbeit.",

    faqIntro: "Antworten auf die Fragen, die uns in Erstgesprächen am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Was ist eine CCF-Verifizierung nach ISO 14064-3?",
        a: "Eine Verifizierung einer CO₂-Bilanz nach ISO 14064-3 ist eine strukturierte methodische Überprüfung eines Corporate Carbon Footprints anhand der Prinzipien Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz und Transparenz. Sie prüft nicht die einzelnen Datenpunkte, sondern die methodischen Entscheidungen dahinter, etwa die Wahl der Emissionsfaktoren, die Systemgrenzen oder die Vollständigkeit der Scope-3-Kategorien.",
      },
      {
        q: "Was ist der Unterschied zwischen Validierung und Verifizierung?",
        a: "Die ISO 14064-3 unterscheidet zwischen Verifizierung (Prüfung historischer Daten eines abgeschlossenen Berichts) und Validierung (Prüfung zukunftsbezogener Annahmen, etwa für geplante Reduktionsprojekte). Im deutschen Sprachgebrauch hat sich „Validierung\" für beides etabliert. Wir verwenden den Begriff hier im Sinne des Prüfprozesses nach ISO 14064-3.",
      },
      {
        q: "Wann ist eine Verifizierung sinnvoll?",
        a: "Sinnvoll ist eine Verifizierung immer dann, wenn die Bilanz extern verwendet wird, also vor der ersten CDP-Antwort, vor einer EcoVadis-Bewertung, vor der ESRS-E1-Berichterstattung oder vor der Auslieferung an Kunden im Rahmen von Lieferkettendaten. Besonders wichtig ist sie im ersten Berichtsjahr, weil dieses die Baseline für alle folgenden Jahre festlegt.",
      },
      {
        q: "Wie lange dauert eine CCF-Verifizierung und was kostet sie?",
        a: "Eine Verifizierung mit klar definiertem Umfang dauert typischerweise eine bis vier Wochen. Der Aufwand richtet sich nach dem Detaillierungsgrad der Bilanz, der Anzahl der Standorte und der Komplexität der Scope-3-Kategorien. Eine Festpreis-Indikation erhalten Sie nach einem unverbindlichen Erstgespräch.",
      },
      {
        q: "Welche Unterlagen muss ich bereitstellen?",
        a: "Wir benötigen die berechnete Bilanz mit Quellangaben (typischerweise als Software-Export oder Excel-Datei), die hinterlegten Emissionsfaktoren mit Jahr und Quelle, eine Übersicht der Standorte mit Konsolidierungsansatz sowie eine Kurzbeschreibung der Datenherkunft pro Scope-3-Kategorie. Mehr ist für den Start nicht erforderlich.",
      },
      {
        q: "Bin ich für die Verifizierung an meine ESG-Software gebunden?",
        a: "Nein. Wir arbeiten unabhängig von der eingesetzten Software und prüfen Bilanzen aus ESG-Plattformen mit Carbon-Accounting-Modul, aus eigenen Excel-Modellen oder aus hybriden Setups. Verifiziert werden die methodische Logik und die getätigten Eingaben dahinter, nicht das Tool.",
      },
      {
        q: "Was bekomme ich am Ende einer Verifizierung?",
        a: "Sie erhalten einen übersichtlichen Verifizierungsbericht mit der Bewertung der fünf Prüfdimensionen, einer Liste der identifizierten methodischen Abweichungen samt Korrektur-Empfehlung und einer Einschätzung zur Anschlussfähigkeit an CDP, ESRS E1 und gängige Kundenfragebögen. Auf Wunsch begleiten wir Sie bei der Umsetzung der Korrekturen und der Dokumentation für das Folgejahr.",
      },
    ],

    disclaimer:
      "Hinweis: Dieser Beitrag gibt mein methodisches Verständnis nach Stand der genannten Standards und Leitlinien zum Zeitpunkt der Veröffentlichung wieder. Regulatorische Rahmenbedingungen, insbesondere im Kontext der CSRD, entwickeln sich dynamisch weiter. Ich empfehle, die jeweils aktuellen Veröffentlichungen von EFRAG und der Europäischen Kommission zu konsultieren.",
  },

  en: {
    heroKicker: "Practice observation · CCF verification per ISO 14064",
    heroTitle: "What 50 verified CO₂ inventories reveal about the limits of software",
    intro:
      "Over the past year, I have verified more CO₂ inventories as a subject-matter expert than I have built myself. More than 50 inventories in 12 months, across sectors such as consumer goods, education and the public sector. The deviations almost always follow the same pattern.",

    section1Title: "An observation from practice",
    section1P1:
      "More and more companies calculate their Corporate Carbon Footprint themselves, supported by specialised ESG software, their own Excel models or a combination of both. This is a welcome development: only those who understand their own CO₂ inventory can begin to derive measures.",
    section1P2:
      "What strikes me over the past twelve months when verifying inventories: the software does its job. The data is generally captured cleanly. What causes problems are the methodological decisions made just before that, usually as inconspicuous drop-down clicks in the software interface (e.g. through the choice of emission factors). The impact on the CCF is often more than 30 percent. In individual cases, inventories have even tripled.",

    statNumber: "50+",
    statText:
      "verified CCFs in 12 months across sectors such as industry, consumer goods, education and the public sector. In nearly every inventory I found methodological deviations with an impact on the result.",

    section2Title: "Why these weaknesses are surfacing now",
    section2P:
      "A CCF today is no longer an internal document. It feeds into CDP responses, EcoVadis assessments, ESRS E1 reporting and customer questionnaires along the supply chain. With the CSRD, sustainability reporting is gradually becoming subject to mandatory audits. That is where methodological decisions from the first reporting year become a challenge.",
    section2Bullets: [
      {
        strong: "Comparability over the years:",
        rest: " If calculation approaches shift unnoticed between reporting years, trend analysis becomes impossible. Reduction targets cannot be measured against an unstable baseline.",
      },
      {
        strong: "Audit robustness:",
        rest: " Decisions not documented in the first year can later only be reconstructed with significant effort.",
      },
      {
        strong: "Credibility with stakeholders:",
        rest: " A retroactively corrected Corporate Carbon Footprint requires explanation, even if the correction is technically right.",
      },
      {
        strong: "Robustness of the decarbonization strategy:",
        rest: " A faulty distribution across scopes or categories can lead to investments being placed in the wrong area.",
      },
    ],

    pullQuote:
      "A deviation of more than 10–20 percent in a material inventory item is not a rounding error. It changes the foundation on which a company builds its climate strategy.",
    pullQuoteAuthor: "Erik Jakob",

    section3Title: "The pattern: software does not replace methodological judgement",
    section3P1:
      "ESG software with integrated carbon accounting modules has made significant progress in recent years. Structured data capture, embedded emission factor databases, automated reporting formats: a clear gain over an internal Excel model or cost-intensive external service providers.",
    section3P2:
      "What software cannot deliver, however, is the expert assessment of the specific company context for greenhouse gas accounting. That is where the mistakes I see most often arise. Across all industries, from industrial mid-cap to educational institution. They are rarely typos. They are methodological decisions by the software user.",

    section4Title: "The COzwei 5-point self-verification check",
    section4P:
      "From more than 50 verifications of CO₂ inventories, I have derived five audit dimensions that reveal almost any methodological weakness. They follow the audit principles of ISO 14064-3 (materiality, completeness, accuracy, consistency, transparency) and can be applied regardless of the software used.",
    section4Items: [
      {
        strong: "System boundaries:",
        rest: " Uniform consolidation approach (Operational Control, Financial Control or Equity Share), consistent across all locations, even with decentralised data capture.",
      },
      {
        strong: "Emission factors:",
        rest: " Timeliness, electricity-mix logic (market-based vs. location-based per GHG Protocol Scope 2 Guidance), correct application of the residual mix when guarantees of origin exist.",
      },
      {
        strong: "Scope 3 completeness:",
        rest: " Clean separation between Purchased Goods (3.1) and Capital Goods (3.2), traceable justification for excluded categories, CDP- and CSRD-compatible.",
      },
      {
        strong: "Plausibility:",
        rest: " Outlier values (e.g. electricity use per square meter, travel data per employee) cross-checked against industry benchmarks.",
      },
      {
        strong: "Documentation:",
        rest: " Audit trail of all methodological decisions, so the inventory remains traceable in the following year and under audit.",
      },
    ],

    section5Title: "Three recurring error patterns from the portfolio",
    section5P:
      "From the more than 50 verifications, three methodological weaknesses can be distilled that appear regularly, regardless of industry and software used.",
    patterns: [
      {
        title: "Erroneous data entry on gas consumption (Scope 1)",
        body:
          "With an increasing number of locations and decentralised data input contributors, classic transcription errors on gas consumption pile up: wrong quantities, shifted decimal points, swapped units (e.g. kWh instead of MWh or cubic metres without calorific-value conversion). A single such error can shift an inventory item by orders of magnitude. Without a structured plausibility check, this remains invisible in the software until the inventory is reviewed externally.",
      },
      {
        title: "Green electricity market-based vs. location-based (Scope 2)",
        body:
          "In roughly one third of the verified inventories, Scope 2 was reported exclusively market-based, with green electricity assumed across the board, even for locations whose guarantees of origin were not within the reporting year or not clearly attributable. The parallel required location-based view was missing entirely or determined inaccurately; the residual mix for locations without guarantees was not applied. The item was often understated by a double-digit percentage, and with it the robustness.",
      },
      {
        title: "Blanket spend-based methodology (Scope 3.1)",
        body:
          "Recurrently, Scope 3.1 was calculated entirely spend-based, even for categories where physical data would have been available. The item was therefore not „A-grade\" for CDP and reduction measures could hardly be derived from it. A hybrid methodology brings clarity here immediately.",
      },
    ],

    section6Title: "What an independent verification delivers",
    section6P1:
      "A verification is not a recalculation. It is a structured methodological review of the existing inventory along the audit dimensions mentioned, independent of the software used, in line with the GHG Protocol and the audit principles of ISO 14064-3.",
    section6P2:
      "On terminology: the norm distinguishes between verification (historical data, i.e. the use case for a completed CCF) and validation (forward-looking assumptions). In German usage, „Verifizierung\" has become established for both; what is meant here is the audit process per ISO 14064-3. A methodological verification as an advisory service, as we offer at COzwei, follows the substantive procedure of the norm.",

    section7Title: "Conclusion",
    section7P:
      "Methodologically, the CO₂ inventory of the first reporting year is the most important one, because it defines the basis for all following years. Software is a valuable tool for compiling it, but does not fully replace the expertise the user needs in greenhouse gas accounting. In most cases, a second, experienced look is worth it before the numbers flow into official reports and continued work in subsequent years.",

    ctaEyebrow: "Have your inventory reviewed",
    ctaTitle: "The simple way to the next step",
    ctaBody:
      "A 30-minute intro call if you would like your inventory specifically reviewed or need orientation. Structured verification with clear scope, typically two to four weeks, fixed-price indication and a results report.",
    ctaButtonLabel: "Book 30-minute intro call",

    authorBio:
      "Erik Jakob is managing director of COzwei GmbH, a sustainability consultancy specialised in climate protection topics. Over the past seven years, he has built or verified greenhouse gas inventories for DAX corporations, mid-sized companies, micro-businesses and municipal institutions across Europe.",
    authorSectionLabel: "Your contact",
    authorSectionTitle: "In a first call we clarify your CCF starting point",
    authorRole: "Managing Director · CCF verification per ISO 14064-3",
    authorCtaLabel: "Book a 30-minute intro call",
    authorCtaDesc: "Free of charge, no obligation. We screen your inventory for the typical weak spots and outline the sensible next step, verification or targeted preparation.",

    faqIntro: "Answers to the questions we are most often asked in intro calls.",
    faqs: [
      {
        q: "What is a CCF verification per ISO 14064-3?",
        a: "A verification of a CO₂ inventory per ISO 14064-3 is a structured methodological review of a Corporate Carbon Footprint along the principles of materiality, completeness, accuracy, consistency and transparency. It does not check individual data points but the methodological decisions behind them, such as the choice of emission factors, the system boundaries or the completeness of the Scope 3 categories.",
      },
      {
        q: "What is the difference between validation and verification?",
        a: "ISO 14064-3 distinguishes between verification (review of historical data of a completed report) and validation (review of forward-looking assumptions, e.g. for planned reduction projects). In German usage, „Validierung\" has become established for both. We use the term here in the sense of the audit process per ISO 14064-3.",
      },
      {
        q: "When does a verification make sense?",
        a: "A verification is sensible whenever the inventory is used externally, before the first CDP response, before an EcoVadis assessment, before ESRS E1 reporting or before delivery to customers as part of supply chain data. It is particularly important in the first reporting year, because that year sets the baseline for all following years.",
      },
      {
        q: "How long does a CCF verification take and what does it cost?",
        a: "A verification with a clearly defined scope typically takes one to four weeks. The effort depends on the level of detail of the inventory, the number of locations and the complexity of the Scope 3 categories. You receive a fixed-price indication after a non-binding intro call.",
      },
      {
        q: "Which documents do I need to provide?",
        a: "We need the calculated inventory with source information (typically as a software export or Excel file), the emission factors used with year and source, an overview of the locations with consolidation approach, and a short description of the data origin per Scope 3 category. Nothing more is required to start.",
      },
      {
        q: "Am I tied to my ESG software for the verification?",
        a: "No. We work independently of the software used and review inventories from ESG platforms with carbon accounting modules, from in-house Excel models or from hybrid setups. What is verified is the methodological logic and the entries behind it, not the tool.",
      },
      {
        q: "What do I get at the end of a verification?",
        a: "You receive a clear verification report with the assessment of the five audit dimensions, a list of identified methodological deviations with correction recommendations, and an assessment of compatibility with CDP, ESRS E1 and common customer questionnaires. On request, we also accompany you in implementing the corrections and preparing the documentation for the following year.",
      },
    ],

    disclaimer:
      "Note: this article reflects my methodological understanding based on the standards and guidelines mentioned at the time of publication. Regulatory frameworks, in particular in the context of the CSRD, continue to evolve. I recommend consulting the most recent publications from EFRAG and the European Commission.",
  },

  pt: {
    heroKicker: "Observação de prática · Verificação CCF conforme a ISO 14064",
    heroTitle: "O que 50 inventários de CO₂ verificados revelam sobre os limites do software",
    intro:
      "No último ano verifiquei, como especialista em contabilidade de carbono, mais inventários de CO₂ do que elaborei eu próprio. Mais de 50 inventários em 12 meses, em setores como bens de consumo, educação e setor público. Os desvios seguem quase sempre o mesmo padrão.",

    section1Title: "Uma observação da prática",
    section1P1:
      "Cada vez mais empresas calculam o seu Corporate Carbon Footprint internamente, com base em software ESG especializado, modelos próprios em Excel ou uma combinação dos dois. Um desenvolvimento positivo, pois apenas quem compreende o seu próprio inventário de CO₂ pode começar a derivar medidas.",
    section1P2:
      "O que me chamou a atenção nos últimos doze meses ao verificar inventários: o software faz o seu trabalho. Os dados são, em regra, registados corretamente. Os problemas resultam das decisões metodológicas tomadas imediatamente antes, em geral como cliques discretos em campos de seleção da interface do software (por exemplo, na escolha de fatores de emissão). O impacto no CCF situa-se com frequência acima de 30 %. Em casos isolados, os inventários até triplicaram.",

    statNumber: "50+",
    statText:
      "CCFs verificados em 12 meses, em setores como indústria, bens de consumo, educação e setor público. Em praticamente todos os inventários encontrei desvios metodológicos com impacto no resultado.",

    section2Title: "Por que estas fragilidades se tornam visíveis agora",
    section2P:
      "Hoje, um CCF já não é um documento interno. Alimenta respostas ao CDP, avaliações EcoVadis, relato ESRS E1 e questionários de clientes ao longo da cadeia de fornecimento. Com a CSRD, o relato de sustentabilidade torna-se gradualmente sujeito a auditoria obrigatória. É aí que as decisões metodológicas do primeiro ano de relato se tornam um desafio.",
    section2Bullets: [
      {
        strong: "Comparabilidade ao longo dos anos:",
        rest: " Se as abordagens de cálculo mudarem despercebidamente entre anos de relato, a análise de tendência torna-se impossível. As metas de redução não se podem medir contra uma baseline instável.",
      },
      {
        strong: "Robustez perante auditoria:",
        rest: " Decisões não documentadas no primeiro ano só podem ser reconstruídas mais tarde com um esforço considerável.",
      },
      {
        strong: "Credibilidade perante os stakeholders:",
        rest: " Um Corporate Carbon Footprint corrigido a posteriori exige explicação, mesmo que a correção esteja tecnicamente correta.",
      },
      {
        strong: "Solidez da estratégia de descarbonização:",
        rest: " Uma distribuição incorreta entre âmbitos ou categorias pode levar a que os investimentos sejam colocados no local errado.",
      },
    ],

    pullQuote:
      "Um desvio superior a 10–20 por cento numa posição material do inventário não é um erro de arredondamento. Altera a base sobre a qual uma empresa constrói a sua estratégia climática.",
    pullQuoteAuthor: "Erik Jakob",

    section3Title: "O padrão: o software não substitui a decisão metodológica",
    section3P1:
      "O software ESG com módulos integrados de carbon accounting avançou consideravelmente nos últimos anos. Captura estruturada de dados, bases de fatores de emissão integradas, formatos automatizados de relato: um claro ganho face a um modelo interno em Excel ou a prestadores externos onerosos.",
    section3P2:
      "O que o software não consegue fornecer é a avaliação técnica do contexto específico da empresa em matéria de contabilidade de gases de efeito estufa. É aí que surgem os erros que encontro com mais frequência. Transversalmente a todos os setores, da média empresa industrial à instituição educativa. Raramente são lapsos de escrita. São decisões metodológicas do utilizador do software.",

    section4Title: "O check de auto-verificação em 5 pontos da COzwei",
    section4P:
      "A partir de mais de 50 verificações de inventários de CO₂ derivei cinco dimensões de auditoria nas quais se manifesta quase toda fragilidade metodológica. Seguem os princípios de auditoria da ISO 14064-3 (materialidade, completude, exatidão, consistência, transparência) e são aplicáveis independentemente do software utilizado.",
    section4Items: [
      {
        strong: "Fronteiras do sistema:",
        rest: " Abordagem de consolidação uniforme (Operational Control, Financial Control ou Equity Share), consistente em todos os locais, mesmo com captura descentralizada de dados.",
      },
      {
        strong: "Fatores de emissão:",
        rest: " Atualidade, lógica de mix elétrico (market-based vs. location-based segundo a Scope 2 Guidance do GHG Protocol), aplicação correta do residual mix quando existem garantias de origem.",
      },
      {
        strong: "Completude do Escopo 3:",
        rest: " Distinção clara entre Purchased Goods (3.1) e Capital Goods (3.2), justificação rastreável para categorias excluídas, compatível com CDP e CSRD.",
      },
      {
        strong: "Plausibilidade:",
        rest: " Valores destoantes (por exemplo, consumo elétrico por metro quadrado, dados de viagem por colaborador) confrontados com benchmarks setoriais.",
      },
      {
        strong: "Documentação:",
        rest: " Audit trail de todas as decisões metodológicas, para que o inventário continue rastreável no ano seguinte e em auditoria.",
      },
    ],

    section5Title: "Três padrões de erro recorrentes do portefólio",
    section5P:
      "A partir das mais de 50 verificações destacam-se três fragilidades metodológicas que ocorrem regularmente, independentemente do setor e do software utilizado.",
    patterns: [
      {
        title: "Registo incorreto do consumo de gás (Escopo 1)",
        body:
          "Com o aumento do número de locais e de contribuidores de dados descentralizados acumulam-se os clássicos erros de transcrição no consumo de gás: quantidades erradas, vírgulas decimais deslocadas, unidades trocadas (por exemplo, kWh em vez de MWh ou metros cúbicos sem conversão pelo poder calorífico). Um único erro destes pode deslocar uma posição do inventário em ordens de grandeza. Sem uma verificação de plausibilidade estruturada, isso permanece invisível no software até o inventário ser auditado externamente.",
      },
      {
        title: "Eletricidade verde market-based vs. location-based (Escopo 2)",
        body:
          "Em cerca de um terço dos inventários verificados, o Escopo 2 foi reportado exclusivamente em market-based, com aquisição de eletricidade verde assumida de forma global, mesmo para locais cujas garantias de origem não se situavam no ano de relato ou não eram claramente atribuíveis. A perspetiva location-based, paralelamente exigida, faltava totalmente ou estava mal apurada; o residual mix para locais sem garantias ficava por considerar. A posição estava frequentemente subavaliada em dois dígitos percentuais, e com ela a robustez.",
      },
      {
        title: "Metodologia spend-based generalizada (Escopo 3.1)",
        body:
          "Recorrentemente, o Escopo 3.1 foi calculado integralmente em spend-based, mesmo para categorias em que estariam disponíveis dados físicos. A posição não era assim „classificável como A\" para o CDP e dela mal se podiam derivar medidas de redução. Uma metodologia híbrida traz aqui clareza imediata.",
      },
    ],

    section6Title: "O que uma verificação independente oferece",
    section6P1:
      "Uma verificação não é um novo cálculo. É uma revisão metodológica estruturada do inventário existente ao longo das dimensões de auditoria referidas, independente do software utilizado, em conformidade com o GHG Protocol e os princípios de auditoria da ISO 14064-3.",
    section6P2:
      "Quanto à terminologia: a norma distingue entre verificação (dados históricos, ou seja, o caso de uso para um CCF concluído) e validação (premissas prospetivas). No uso alemão, „Verifizierung\" estabeleceu-se para ambas; aqui refere-se ao processo de auditoria conforme a ISO 14064-3. Uma verificação metodológica como serviço de consultoria, tal como a oferecemos na COzwei, segue o procedimento substantivo da norma.",

    section7Title: "Conclusão",
    section7P:
      "Em termos metodológicos, o inventário de CO₂ do primeiro ano de relato é o mais importante, porque define a base para todos os anos seguintes. O software é uma ferramenta valiosa na elaboração, mas não substitui totalmente o conhecimento técnico do utilizador em contabilidade de gases de efeito estufa. Na maioria dos casos vale a pena um segundo olhar experiente antes de os números fluírem para relatos oficiais e servirem de base para o trabalho continuado nos anos seguintes.",

    ctaEyebrow: "Faça verificar o seu inventário",
    ctaTitle: "O caminho simples para o próximo passo",
    ctaBody:
      "Conversa inicial de 30 min se desejar que o seu inventário seja efetivamente verificado ou precisar de orientação. Verificação estruturada com âmbito claro, tipicamente duas a quatro semanas, indicação de preço fixo e relatório de resultados.",
    ctaButtonLabel: "Agendar conversa inicial de 30 min",

    authorBio:
      "Erik Jakob é administrador da COzwei GmbH, uma consultoria de sustentabilidade especializada em temas de proteção climática. Nos últimos sete anos elaborou ou verificou inventários de gases de efeito estufa para empresas do DAX, médias empresas, microempresas e instituições municipais em toda a Europa.",
    authorSectionLabel: "O seu interlocutor",
    authorSectionTitle: "Numa primeira conversa esclarecemos a sua situação inicial CCF",
    authorRole: "Administrador · verificação CCF segundo a ISO 14064-3",
    authorCtaLabel: "Agendar conversa inicial de 30 minutos",
    authorCtaDesc: "Gratuito e sem compromisso. Analisamos o seu inventário em busca dos pontos fracos típicos e definimos o próximo passo razoável, verificação ou preparação direcionada.",

    faqIntro: "Respostas às perguntas que mais nos colocam em conversas iniciais.",
    faqs: [
      {
        q: "O que é uma verificação CCF conforme a ISO 14064-3?",
        a: "Uma verificação de um inventário de CO₂ conforme a ISO 14064-3 é uma análise metodológica estruturada de um Corporate Carbon Footprint segundo os princípios de materialidade, completude, exatidão, consistência e transparência. Não verifica pontos de dados individuais, mas as decisões metodológicas por trás deles, como a escolha dos fatores de emissão, as fronteiras do sistema ou a completude das categorias de Escopo 3.",
      },
      {
        q: "Qual é a diferença entre validação e verificação?",
        a: "A ISO 14064-3 distingue verificação (análise de dados históricos de um relato concluído) e validação (análise de premissas prospetivas, por exemplo, para projetos de redução planeados). No uso alemão, „Validierung\" estabeleceu-se para ambas. Usamos o termo aqui no sentido do processo de auditoria conforme a ISO 14064-3.",
      },
      {
        q: "Quando faz sentido uma verificação?",
        a: "Uma verificação faz sentido sempre que o inventário é usado externamente, antes da primeira resposta ao CDP, antes de uma avaliação EcoVadis, antes do relato ESRS E1 ou antes da entrega a clientes no âmbito de dados de cadeia de fornecimento. É particularmente importante no primeiro ano de relato, porque esse ano define a baseline para todos os anos seguintes.",
      },
      {
        q: "Quanto tempo demora uma verificação CCF e quanto custa?",
        a: "Uma verificação com âmbito claramente definido demora tipicamente uma a quatro semanas. O esforço depende do nível de detalhe do inventário, do número de locais e da complexidade das categorias de Escopo 3. Receberá uma indicação de preço fixo após uma conversa inicial sem compromisso.",
      },
      {
        q: "Que documentos preciso fornecer?",
        a: "Precisamos do inventário calculado com indicação de fontes (tipicamente como exportação de software ou ficheiro Excel), os fatores de emissão usados com ano e fonte, uma visão geral dos locais com a abordagem de consolidação, bem como uma breve descrição da origem dos dados por categoria de Escopo 3. Nada mais é necessário para começar.",
      },
      {
        q: "Fico vinculado ao meu software ESG para a verificação?",
        a: "Não. Trabalhamos independentemente do software utilizado e verificamos inventários de plataformas ESG com módulo de carbon accounting, de modelos Excel próprios ou de configurações híbridas. O que é verificado é a lógica metodológica e as entradas por trás dela, não a ferramenta.",
      },
      {
        q: "O que recebo no final de uma verificação?",
        a: "Recebe um relatório de verificação claro com a avaliação das cinco dimensões de auditoria, uma lista dos desvios metodológicos identificados com recomendações de correção e uma avaliação da compatibilidade com CDP, ESRS E1 e questionários de clientes habituais. A pedido, acompanhamos também a implementação das correções e a preparação da documentação para o ano seguinte.",
      },
    ],

    disclaimer:
      "Nota: este artigo reflete a minha compreensão metodológica com base nas normas e diretrizes mencionadas no momento da publicação. O enquadramento regulatório, em particular no contexto da CSRD, continua a evoluir. Recomendo a consulta das publicações mais recentes da EFRAG e da Comissão Europeia.",
  },
};
