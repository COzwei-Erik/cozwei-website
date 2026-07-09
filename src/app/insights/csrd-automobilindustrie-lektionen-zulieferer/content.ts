type Faq = { q: string; a: string };

type Content = {
  // Hero & meta
  heroKicker: string;
  heroTitle: string;
  metaDate: string;
  metaCategory: string;

  // Lead paragraph (italic in the hero card)
  intro: string;

  // Section 1 — Worum es geht
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s1P3: string;
  s1Footnote: string;

  // Stat highlight (nach Section 1)
  statNumber: string;
  statText: string;
  statSource: string;

  // Regulatorik-Chips (3 EU-Rechtsakte, zwischen Section 2 und Lektionen)
  regChipsAria: string;
  regChip1Code: string;
  regChip1Ref: string;
  regChip1Text: string;
  regChip2Code: string;
  regChip2Ref: string;
  regChip2Text: string;
  regChip3Code: string;
  regChip3Ref: string;
  regChip3Text: string;

  // Section 2 — Was wir aus der Begleitung wissen
  s2Title: string;
  s2P1: string;
  s2P2: string;

  // Pull quote (Slate-Variante mit cite-Zeile)
  pullQuote: string;
  pullQuoteAuthor: string;

  // Section 3 — Intro zur Vier-Lektionen-Sequenz
  s3Title: string;
  s3P1: string;

  // Lessons Grid (2×2 Ankerkarten nach s3P1)
  lessonsGridAria: string;
  l1GridTitle: string;
  l1GridBody: string;
  l2GridTitle: string;
  l2GridBody: string;
  l3GridTitle: string;
  l3GridBody: string;
  l4GridTitle: string;
  l4GridBody: string;

  // Merksatz-Karten (unter jeder Lektions-H2)
  merksatzLabel: string;
  l1Merksatz: string;
  l2Merksatz: string;
  l3Merksatz: string;
  l4Merksatz: string;

  // Zusätzliche Stat-Tiles (2 vor Lektion 2, 3 vor Lektion 3, 4 im Abschluss)
  stat2Number: string;
  stat2Text: string;
  stat2Source: string;
  stat3Number: string;
  stat3Text: string;
  stat3Source: string;
  stat4Number: string;
  stat4Text: string;
  stat4Source: string;

  // Lektion 1
  l1Title: string;
  l1P1: string;
  l1P2: string;
  l1P3: string;

  // Lektion 2
  l2Title: string;
  l2P1: string;
  l2P2: string;
  l2P3: string;

  // Lektion 3
  l3Title: string;
  l3P1: string;
  l3P2: string;
  l3P3: string;

  // Lektion 4 (mit Fett-Leads pro Absatz)
  l4Title: string;
  l4P1Lead: string;
  l4P1: string;
  l4P2Lead: string;
  l4P2: string;
  l4P3Lead: string;
  l4P3: string;

  // Abschluss-Sektion
  cTitle: string;
  cP1: string;
  cP2: string;
  cP3: string;

  // CTA (Long Fall Yellow)
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButtonLabel: string;

  // Author / Ansprechpartner
  authorSectionLabel: string;
  authorSectionTitle: string;
  authorName: string;
  authorRole: string;
  authorBio: string;
  authorCtaLabel: string;
  authorCtaDesc: string;

  // FAQ
  faqIntro: string;
  faqs: Faq[];

  // Sources & disclaimer
  sourcesTitle: string;
  sources: string[];
  disclaimer: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroKicker: "Praxisbeobachtung · CSRD und ESRS",
    heroTitle:
      "CSRD in der Automobilindustrie: Vier Lektionen aus der ersten Berichtssaison für kleinere Zulieferer",
    metaDate: "Juli 2026",
    metaCategory: "Praxisbeobachtung · CSRD und ESRS",

    intro:
      "Volkswagen, Mercedes-Benz, BMW, Daimler Truck, Continental und Schaeffler haben ihre ersten Nachhaltigkeitsberichte nach den ESRS vorgelegt. Wer als Zulieferer ab dem Geschäftsjahr 2027 selbst berichten muss, kann aus diesen ersten Berichten viel lernen und teure Umwege vermeiden.",

    s1Title: "Worum es geht: Die erste Berichtssaison nach den ESRS ist ausgewertet",
    s1P1:
      "Mit den Geschäftsjahren 2024 und 2025 hat die erste Welle erstmals nach den European Sustainability Reporting Standards (ESRS) berichtet. Dazu zählen große kapitalmarktorientierte Unternehmen mit mehr als 500 Beschäftigten. Obwohl die CSRD in Deutschland bis Juli 2026 nicht in nationales Recht umgesetzt ist, haben rund 95 Prozent der börsennotierten Unternehmen freiwillig nach den ESRS oder in Anlehnung daran berichtet.",
    s1P2:
      "Die Automobilindustrie steht dabei besonders im Fokus: Deloitte und das DRSC haben die Berichte der Branche in einem eigenen Benchmark ausgewertet, darunter BMW, Daimler Truck, Mercedes-Benz und Volkswagen. Parallel berichten auch nicht börsennotierte große Zulieferer wie Bosch (doppelte Wesentlichkeitsanalyse nach der Logik der CSRD), ZF (freiwillig in Anlehnung an die ESRS) und Schaeffler (erster Bericht konform zur CSRD im Konzernlagebericht) bereits heute nach den neuen Standards.",
    s1P3:
      "Für kleinere und mittelgroße Unternehmen der Automobilindustrie ist das eine Steilvorlage: Die Berichtspflicht der zweiten Welle soll nach dem Stand von Juli 2026 erst für Geschäftsjahre ab 2027 beginnen. Sie gilt zudem nur für Unternehmen oberhalb der neuen Schwellenwerte aus dem Omnibuspaket (Omnibus I, Richtlinie (EU) 2026/470, in Kraft seit dem 18. März 2026) von mehr als 1.000 Beschäftigten und mehr als 450 Mio. Euro Umsatz. Wer jetzt vorbereitet, profitiert von den teuren Erfahrungen der Ersten.",
    s1Footnote:
      "Alle Angaben zu künftigen Berichtspflichten geben den Stand des Gesetzgebungsverfahrens im Juli 2026 wieder. Die Fristen der CSRD wurden in der Vergangenheit mehrfach verschoben, und die Umsetzung in deutsches Recht steht noch aus (Frist: 19. März 2027). Eine verlässliche Aussage zur künftig geltenden Regulatorik ist deshalb nicht möglich; maßgeblich sind allein die jeweils geltenden Rechtsakte.",

    statNumber: "9/10",
    statText:
      "Themenstandards der ESRS stuften die großen Unternehmen der Automobilbranche im Schnitt als wesentlich ein (Deloitte und DRSC, sechs ausgewertete Berichte). Der Gesamtmarkt liegt bei sechs. Genau hier liegt die erste Lektion für alle, die noch nicht berichten.",
    statSource: "Deloitte und DRSC · Analyse Automobilbranche 2024",

    regChipsAria: "Relevante EU-Rechtsakte",
    regChip1Code: "Quick Fix",
    regChip1Ref: "(EU) 2025/1416",
    regChip1Text: "Sofortmaßnahmen zur Vereinfachung der ESRS.",
    regChip2Code: "Omnibus I",
    regChip2Ref: "2026/470",
    regChip2Text: "Fristverschiebungen und Anwendungsbereich CSRD.",
    regChip3Code: "VS-Standard",
    regChip3Ref: "vormals VSME",
    regChip3Text: "Freiwilliger Standard für nicht berichtspflichtige KMU.",

    s2Title: "Was wir aus der Begleitung von Zulieferern und Herstellern wissen",
    s2P1:
      "Wir begleiten Unternehmen der Automobilindustrie und ihrer Zulieferkette bei der Treibhausgasbilanzierung nach GHG Protocol und ISO 14064, bei Anfragen ihrer Kunden zu EcoVadis und CDP sowie beim Aufbau der Nachhaltigkeitsberichterstattung, von der ersten Wesentlichkeitsanalyse bis zum fertigen Bericht. Die Konzernperspektive kennen wir aus eigener Arbeit: Unser Mitgründer hat in den vergangenen drei Jahren Berichtsprojekte zur CSRD bei Fahrzeugherstellern begleitet und zuvor bei der Porsche AG das Programm zur bilanziellen Neutralität der CO₂-Emissionen mitentwickelt.",
    s2P2:
      "Diese doppelte Perspektive aus Konzernanforderungen und Mittelstandsrealität prägt unsere Lesart der ersten Berichtssaison. Die zentrale Erkenntnis: Die Großen haben mit enormem Aufwand berichtet. Kleinere Unternehmen können und sollten es sich im Rahmen der Möglichkeiten der Regulatorik einfacher machen.",

    pullQuote:
      "Die erste Berichtssaison nach den ESRS zeigt vor allem, wie viel Aufwand entsteht, wenn mit breiter Wesentlichkeitsanalyse und ohne frühe Integration des Wirtschaftsprüfers gestartet wird, und welche Abkürzungen der Regulierer inzwischen selbst eingebaut hat.",
    pullQuoteAuthor: "COzwei · aus der Begleitung von CSRD-Projekten in der Automobilindustrie",

    s3Title: "Die vier Lektionen aus der ersten Berichtssaison",
    s3P1:
      "Aus unserer aktiven Projekterfahrung, den ausgewerteten Berichten und Benchmarkstudien lassen sich vier Lektionen ableiten. Sie entscheiden bei künftig berichtspflichtigen Zulieferern darüber, ob die Berichterstattung ein beherrschbares Projekt bleibt oder zum Ressourcenfresser wird.",

    lessonsGridAria: "Die vier Lektionen im Überblick",
    l1GridTitle: "Wesentlichkeit fokussieren",
    l1GridBody: "Vollbreite ist keine Vorlage. ESRS verlangen Fokus statt Vollständigkeit.",
    l2GridTitle: "Übergangserleichterungen nutzen",
    l2GridBody: "61 % weniger Pflichtdatenpunkte. Jahr 1 gehört der sauberen THG-Bilanz.",
    l3GridTitle: "Prüfer vor Projektstart einbinden",
    l3GridBody: "Über 90 % lassen freiwillig prüfen. Methodik gehört an den Anfang.",
    l4GridTitle: "Kennzahlen zentral bündeln",
    l4GridBody: "CSRD, CDP, EcoVadis und SAQ 5.0 fragen dieselben Daten ab.",

    merksatzLabel: "Merksatz",
    l1Merksatz: "Die überarbeiteten ESRS verlangen ausdrücklich Fokus statt Vollständigkeit um jeden Preis.",
    l2Merksatz: "Jahr 1 gehört einer sauberen Treibhausgasbilanz, nicht dem Vollausbau.",
    l3Merksatz: "Der Prüfer gehört an den Anfang.",
    l4Merksatz: "Erst Datenmodell und Verantwortlichkeiten, dann Software.",

    stat2Number: "–61 %",
    stat2Text: "weniger Pflichtdatenpunkte nach ESRS-Überarbeitung.",
    stat2Source: "Delegierter Rechtsakt vom 3. Juli 2026",
    stat3Number: "90 %+",
    stat3Text: "der Erstanwender ließen freiwillig prüfen. In der Automobilbranche: 100 %.",
    stat3Source: "Deloitte und DRSC · Analyse Automobilbranche 2024",
    stat4Number: "3–6 Monate",
    stat4Text: "Projektzeit lassen sich sparen, wenn Übergangserleichterungen und Prüfer-Abstimmung konsequent von Anfang an mitgedacht werden.",
    stat4Source: "COzwei · Erfahrung aus CSRD-Projekten",

    l1Title: "1. Die Wesentlichkeitsanalyse fokussiert halten: schmal und zugleich gut begründet",
    l1P1:
      "Die großen Unternehmen der Branche haben breit berichtet: Im Benchmark wurden durchschnittlich 9 von 10 Themenstandards als wesentlich eingestuft (Spanne 7 bis 10). Im Schnitt identifizierten die Unternehmen 58 wesentliche Auswirkungen, Risiken und Chancen (IROs), mit einer Spanne von 29 bis 85. Zum Vergleich: Der Gesamtmarkt aller börsennotierten Unternehmen kam auf durchschnittlich 6 wesentliche Themen und 43 IROs.",
    l1P2:
      "Diese Breite ist für globale Konzerne mit komplexen Wertschöpfungsketten nachvollziehbar. Als Vorlage für einen mittelständischen Zulieferer taugt sie wenig, denn jedes zusätzliche wesentliche Thema zieht Angabepflichten, Datenerhebung und Prüfungsaufwand nach sich. Die überarbeiteten ESRS gehen denselben Weg: Sie erlauben ausdrücklich eine Bewertung von oben nach unten, bei der für offensichtlich wesentliche wie offensichtlich unwesentliche Themen eine begründete Schlussfolgerung genügt, und sie verlangen Fokus statt Vollständigkeit um jeden Preis.",
    l1P3:
      "Wichtig ist die Grenze: Eine schmale Themenauswahl muss fachlich sauber begründet sein. Die doppelte Wesentlichkeitsanalyse bleibt methodischer Pflichtkern, jede Auslassung muss nachvollziehbar dokumentiert werden. Wer den Klimawandel (ESRS E1) als unwesentlich einstuft, muss das ausführlich erläutern. Für Zulieferer heißt das in der Praxis: Klimawandel (E1), eigene Belegschaft (S1) und Unternehmensführung (G1) sind faktisch gesetzt. Arbeitskräfte in der Wertschöpfungskette und Kreislaufwirtschaft sind in der Automobilbranche hoch wahrscheinlich wesentlich. Wasser, Biodiversität und betroffene Gemeinschaften gehören je nach Art des Geschäftsbetriebes genau geprüft und im Zweifel begründet ausgeschlossen.",

    l2Title: "2. Kennzahlen phasenweise entwickeln und die Übergangserleichterungen konsequent nutzen",
    l2P1:
      "Niemand sollte im ersten Berichtsjahr den Vollausbau liefern. Die ESRS enthalten in Anhang C von ESRS 1 gestaffelte Übergangsbestimmungen. Der Regulierer hat diese zuletzt deutlich ausgeweitet: Mit dem „Quick Fix\" (Delegierte Verordnung (EU) 2025/1416, veröffentlicht am 10. November 2025) dürfen Unternehmen der ersten Welle für die Geschäftsjahre 2025 und 2026 sogar komplette Angaben zu Biodiversität (E4), Arbeitskräften in der Wertschöpfungskette (S2), betroffenen Gemeinschaften (S3) sowie Verbrauchern und Endnutzern (S4) auslassen, selbst wenn diese Themen als wesentlich eingestuft wurden. Erforderlich ist dann lediglich eine zusammenfassende Angabe nach ESRS 2.17.",
    l2P2:
      "Für künftig berichtspflichtige Unternehmen sind zwei Punkte besonders relevant. Erstens liegen die überarbeiteten ESRS inzwischen vor: Die Europäische Kommission hat den delegierten Rechtsakt am 3. Juli 2026 angenommen; er durchläuft nun die Prüfphase von Europäischem Parlament und Rat. Vorgesehen sind rund 61 Prozent weniger Pflichtdatenpunkte, die verpflichtende Anwendung ab dem Geschäftsjahr 2027 und eine freiwillige Anwendung bereits für 2026. Zweitens knüpfen die Übergangsfristen an das erste Pflichtjahr an. Wer ab dem Geschäftsjahr 2027 berichtet, startet also mit dem vollen Erleichterungspaket.",
    l2P3:
      "Unsere Empfehlung ist ein Kennzahlenfahrplan über drei Berichtsjahre. Jahr 1 konzentriert sich auf das, was ohnehin belastbar vorliegt oder zwingend ist, allen voran eine saubere Treibhausgasbilanz (Scope 1, Scope 2 und die wesentlichen Kategorien in Scope 3). Komplexe Angaben wie erwartete finanzielle Effekte oder vollständige Daten aus der Wertschöpfungskette folgen gestaffelt. Jede genutzte Erleichterung wird transparent dokumentiert. Die ESRS sehen genau dieses Vorgehen vor.",

    l3Title: "3. Den Wirtschaftsprüfer vor Projektstart einbinden",
    l3P1:
      "Die ersten zwei Berichtsjahre unter der CSRD haben gezeigt, wie prüfungsnah die Nachhaltigkeitsberichterstattung geworden ist: Über 90 Prozent der Unternehmen der ersten Welle ließen ihre Berichte freiwillig prüfen, obwohl in Deutschland mangels Umsetzung der CSRD keine Prüfungspflicht bestand. Im Benchmark der Automobilbranche wurden ausnahmslos alle Berichte inhaltlich geprüft, die Hälfte teilweise sogar mit hinreichender Sicherheit (reasonable assurance).",
    l3P2:
      "Gleichzeitig berichten Unternehmen laut dem Wegweiser des Deutschen Aktieninstituts zu den ESRS, dass allein die erste Wesentlichkeitsanalyse drei bis sechs Monate in Anspruch nahm, noch vor der Abstimmung mit dem Wirtschaftsprüfer. Wer die Methodik erst nach Abschluss der Analyse mit dem Prüfer diskutiert, riskiert genau das, was einige Erstanwender erlebt haben: Nacharbeiten an Wesentlichkeitsschwellen, an der Definition der IROs und am Konsolidierungskreis unter Zeitdruck, verbunden mit erheblichen Mehrkosten.",
    l3P3:
      "Der Prüfer gehört deshalb an den Anfang des Projekts. Vor Beginn der eigentlichen Arbeiten sollten abgestimmt werden: die Methodik und Schwellenwerte der Wesentlichkeitsanalyse, die Abgrenzung des Konsolidierungskreises, der Umgang mit Schätzungen und Daten aus der Wertschöpfungskette sowie die geplante Nutzung von Übergangserleichterungen. Das reduziert Prüfungsrisiken, verhindert doppelte Arbeit und sichert den Zeitplan zum geplanten Veröffentlichungsdatum.",

    l4Title: "4. Kennzahlen an einem Punkt sammeln und Synergien mit CDP, EcoVadis und Co. heben",
    l4P1Lead: "Beobachtung.",
    l4P1:
      " Die Erstanwender haben überwiegend mit Excel und Eigenlösungen gestartet, so das Bild aus der Praxiserhebung des Deutschen Aktieninstituts. Die Konzerne ziehen daraus bereits Konsequenzen: Schaeffler hat seine Nachhaltigkeitsdaten aus verschiedenen Systemen in ein zentrales System migriert, Mercedes-Benz spricht von einer „Single Source of Truth\" für Nachhaltigkeitsdaten.",
    l4P2Lead: "Ursache.",
    l4P2:
      " Für Zulieferer ist der Hebel sogar größer, denn die Berichterstattung nach den ESRS ist selten die einzige Anforderung: Dieselben Kennzahlen fragen Kunden bereits heute über Fragebögen von CDP, Assessments von EcoVadis, Product Carbon Footprints und Selbstauskünfte für Lieferanten (SAQ 5.0) ab. Wer jede Anfrage einzeln beantwortet, erhebt dieselben Daten mehrfach und riskiert Inkonsistenzen. Unsere Beratungserfahrung zeigt: Ein zentraler Kennzahlenhaushalt, aus dem die Berichterstattung nach CSRD oder VS, CDP, EcoVadis und Kundenanfragen gleichermaßen bedient werden, senkt den laufenden Aufwand erheblich und verbessert nebenbei die Bewertungsergebnisse.",
    l4P3Lead: "Empfehlung.",
    l4P3:
      " Die Reihenfolge ist dabei entscheidend: erst Datenmodell und Verantwortlichkeiten klären, dann Software auswählen. Ihren Nutzen entfaltet eine Software erst, wenn diese Grundlagen stehen und es auch Mitarbeiter gibt, die damit arbeiten wollen und können.",

    cTitle: "Warum das Zeitfenster bis 2027 jetzt zählt",
    cP1:
      "Die verlängerten Fristen verschaffen einen Planungsvorteil, entbinden aber aus zwei Gründen nicht von der Vorbereitung. Erstens erreichen die Anforderungen viele Zulieferer längst über die Lieferkette statt über die eigene Berichtspflicht: Im Benchmark der Automobilbranche haben ausnahmslos alle Unternehmen Klimawandel, Kreislaufwirtschaft und Arbeitskräfte in der Wertschöpfungskette als wesentlich eingestuft. Die Datenanforderungen der Hersteller und großen Zulieferer (Emissionsdaten, Product Carbon Footprints, Sorgfaltspflichten zu Menschenrechten, Quoten für Sekundärmaterial) landen damit systematisch bei den Lieferanten.",
    cP2:
      "Zweitens gibt es für Unternehmen unterhalb der Berichtsschwellen künftig den freiwilligen Standard VS (Voluntary Sustainability Reporting Standard, vormals VSME). Die Kommission hat ihn am 3. Juli 2026 zusammen mit den überarbeiteten ESRS als delegierten Rechtsakt angenommen. Er kanalisiert Kundenanfragen und verankert den sogenannten Value Chain Cap rechtlich: Berichtspflichtige Unternehmen dürfen von geschützten Unternehmen mit bis zu 1.000 Beschäftigten keine Informationen verlangen, die über den Umfang des VS hinausgehen.",
    cP3:
      "Wer das Zeitfenster nutzt, um Wesentlichkeitsanalyse, Treibhausgasbilanz und Kennzahlenhaushalt in vergleichsweise ruhigem Fahrwasser aufzubauen, kann ab 2027 kostenoptimiert berichten, statt unter Termindruck die Fehler der ersten Welle zu wiederholen und die Profitabilität des gesamten Unternehmens weiter zu belasten.",

    ctaEyebrow: "Ihr nächster Schritt",
    ctaTitle: "Erstgespräch von 30 Minuten. Unverbindlich.",
    ctaBody:
      "Wir gehen gemeinsam durch, wo Ihr Unternehmen bei den vier Lektionen steht: Wesentlichkeit, Kennzahlenfahrplan, Prüfungsvorbereitung und Datenhaushalt. Sie erhalten eine ehrliche Einschätzung, was bis 2027 wirklich zu tun ist und was nicht.",
    ctaButtonLabel: "30 Minuten mit Christian Philippen buchen",

    authorSectionLabel: "Über den Autor",
    authorSectionTitle: "Im Erstgespräch klären wir Ihre CSRD-Ausgangslage",
    authorName: "Christian Philippen",
    authorRole: "Mitgründer · CSRD-Berichtsprojekte in der Automobilindustrie",
    authorBio:
      "Christian Philippen ist Mitgründer der COzwei GmbH und Ihr Ansprechpartner für Nachhaltigkeitsberichterstattung in der Automobilindustrie. In den vergangenen drei Jahren hat er Berichtsprojekte zur CSRD bei Fahrzeugherstellern begleitet, von der ersten Vorbereitung 2022 bis zuletzt zur Berichterstattung in Anlehnung an die CSRD für das Geschäftsjahr 2025. Er baut dabei auf langjähriger Erfahrung auf, unter anderem als Projektleiter der früheren Nachhaltigkeitsberichte nach GRI bei der AUDI AG im Jahr 2014.",
    authorCtaLabel: "Termin mit Christian buchen",
    authorCtaDesc:
      "Kostenlos und unverbindlich. Wir klären Wesentlichkeit, Kennzahlenfahrplan, Prüfungsvorbereitung und Datenhaushalt vor dem eigentlichen Projektstart.",

    faqIntro:
      "Antworten auf die Fragen, die uns in Erstgesprächen mit Zulieferern am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Was ist die doppelte Wesentlichkeitsanalyse?",
        a: "Sie ist das Herzstück der ESRS und bestimmt, worüber berichtet werden muss. Bewertet wird jedes Nachhaltigkeitsthema aus zwei Richtungen: Welche Auswirkungen hat das Unternehmen auf Mensch und Umwelt, und welche finanziellen Risiken und Chancen ergeben sich für das Unternehmen. Ist eine der beiden Perspektiven wesentlich, ist das Thema berichtspflichtig.",
      },
      {
        q: "Welche Erleichterungen gelten im ersten Berichtsjahr?",
        a: "Die geltenden ESRS enthalten in Anhang C gestaffelte Übergangsbestimmungen, die mit dem Quick Fix (Delegierte Verordnung (EU) 2025/1416) für die aktuelle Berichtswelle nochmals ausgeweitet wurden. Auch die überarbeiteten ESRS, deren delegierten Rechtsakt die Kommission am 3. Juli 2026 angenommen hat, sehen Übergangserleichterungen vor; die Fristen knüpfen an das erste Pflichtjahr an. Die doppelte Wesentlichkeitsanalyse selbst bleibt verpflichtend.",
      },
      {
        q: "Müssen wir den Bericht prüfen lassen?",
        a: "Die CSRD sieht eine externe Prüfung mit begrenzter Sicherheit (limited assurance) vor. In den ersten beiden Berichtsjahren ließen über 90 Prozent der Unternehmen freiwillig prüfen, in der Automobilbranche sogar alle Unternehmen im Benchmark. Unabhängig von der formalen Pflichtlage empfehlen wir, die Prüfungsperspektive von Anfang an mitzudenken.",
      },
      {
        q: "Wir liegen unter den Schwellenwerten. Betrifft uns das Thema trotzdem?",
        a: "Unter Umständen ja: Hersteller und große Zulieferer haben Themen der Lieferkette und der Kreislaufwirtschaft flächendeckend als wesentlich eingestuft und fragen entsprechende Daten bei ihren Lieferanten ab. Die EU hat in der neuesten Fassung allerdings einen Schutz gegen das Durchreichen in die Lieferkette verankert: Über den Value Chain Cap dürfen berichtspflichtige Unternehmen von geschützten Unternehmen mit bis zu 1.000 Beschäftigten nur Informationen im Umfang des freiwilligen Standards VS verlangen. Wie wirksam dieser Schutz in der Praxis ist, bleibt fraglich, wenn etwa Anfragen über EcoVadis oder SAQ standardmäßig im Rahmen der Beschaffungsprozesse gestellt werden.",
      },
      {
        q: "Was fordern Hersteller heute schon konkret von Zulieferern?",
        a: "Typisch sind Emissionsdaten (Corporate und Product Carbon Footprint), Klimaziele, die Teilnahme an EcoVadis oder CDP sowie Nachweise zu Sorgfaltspflichten bei Menschenrechten und Umwelt. Eine standardkonforme Treibhausgasbilanz ist dafür die wichtigste Einzelinvestition, denn sie bedient nahezu alle Anfrageformate gleichzeitig.",
      },
    ],

    sourcesTitle: "Quellen",
    sources: [
      "Richtlinie (EU) 2026/470 (Omnibus I), Amtsblatt der EU vom 26.02.2026, in Kraft seit 18.03.2026; Überblick: CSR in Deutschland (BMAS), März 2026",
      "DRSC: Annahme der delegierten Rechtsakte zu den überarbeiteten ESRS und zum freiwilligen Standard VS durch die Europäische Kommission am 3. Juli 2026 (Meldung Juli 2026)",
      "DRSC: Projektseite zum Standard für die freiwillige Nachhaltigkeitsberichterstattung (VS, vormals VSME), Stand Juni 2026",
      "PwC und Rödl: Analysen zu den Konsultationsentwürfen der überarbeiteten ESRS und des VS (Mai 2026)",
      "Delegierte Verordnung (EU) 2025/1416 („Quick Fix\"), Amtsblatt der EU vom 10.11.2025",
      "Deloitte und DRSC: Praxis der Nachhaltigkeitsberichterstattung nach CSRD und ESRS, Analyse der Automobilindustrie für das Geschäftsjahr 2024 (Mai 2025) sowie Abschlussbericht zur Analyse von Unternehmen aus DAX, MDAX und SDAX (November 2025)",
      "EY: CSRD Barometer 2025 (Analyse von 200 Berichten nach den ESRS)",
      "Deutsches Aktieninstitut: Wegweiser zu den ESRS (Praxiserfahrungen zur Wesentlichkeitsanalyse, 2024)",
      "Nachhaltigkeitsberichterstattung 2024 und 2025 von Volkswagen, Mercedes-Benz Group, BMW Group, Daimler Truck, Porsche AG, Continental, Schaeffler, Bosch und ZF",
    ],
    disclaimer:
      "Hinweis: Dieser Beitrag gibt unsere Praxiserfahrung sowie den Regulierungsstand zum Veröffentlichungszeitpunkt (Juli 2026) wieder. Die delegierten Rechtsakte zu den überarbeiteten ESRS und zum VS befinden sich noch in der Prüfphase von Parlament und Rat, die deutsche Umsetzung der CSRD steht aus. Zu künftig geltender Regulatorik sind keine verlässlichen Aussagen möglich; verbindlich sind allein die jeweils geltenden Rechtsakte. Dieser Beitrag ersetzt keine Rechtsberatung.",
  },

  en: {
    heroKicker: "Practice observation · CSRD and ESRS",
    heroTitle:
      "CSRD in the automotive industry: four lessons from the first reporting season for smaller suppliers",
    metaDate: "July 2026",
    metaCategory: "Practice observation · CSRD and ESRS",

    intro:
      "Volkswagen, Mercedes-Benz, BMW, Daimler Truck, Continental and Schaeffler have published their first sustainability reports under the ESRS. Suppliers that will have to report themselves from financial year 2027 onwards can learn a lot from these first reports, and avoid expensive detours.",

    s1Title: "What this is about: the first ESRS reporting season has been evaluated",
    s1P1:
      "With financial years 2024 and 2025, the first wave has reported for the first time under the European Sustainability Reporting Standards (ESRS). This wave covers large capital-market-oriented companies with more than 500 employees. Although the CSRD has not been transposed into German law by July 2026, around 95 percent of listed companies have reported voluntarily under the ESRS or on a basis close to them.",
    s1P2:
      "The automotive industry is a particular focal point: Deloitte and the DRSC evaluated the sector's reports in a dedicated benchmark, including BMW, Daimler Truck, Mercedes-Benz and Volkswagen. In parallel, non-listed large suppliers such as Bosch (double materiality analysis following CSRD logic), ZF (voluntarily aligned with the ESRS) and Schaeffler (first CSRD-compliant report in the group management report) are already reporting under the new standards.",
    s1P3:
      "For smaller and mid-sized companies in the automotive industry, this is a head start: as of July 2026, the reporting obligation for the second wave is scheduled to begin only for financial years from 2027 onwards. It also applies only to companies above the new thresholds introduced by the Omnibus package (Omnibus I, Directive (EU) 2026/470, in force since 18 March 2026) of more than 1,000 employees and more than €450 million in turnover. Those who prepare now benefit from the expensive lessons of the first wave.",
    s1Footnote:
      "All statements on future reporting obligations reflect the state of the legislative process as of July 2026. CSRD deadlines have been postponed several times in the past, and transposition into German law is still outstanding (deadline: 19 March 2027). A reliable statement about future regulation is therefore not possible; only the legal acts in force at any given time are binding.",

    statNumber: "9/10",
    statText:
      "topical standards of the ESRS were classified as material on average by large automotive companies (Deloitte and DRSC, six reports evaluated). The overall market lands at six. This is where the first lesson lies for anyone who does not yet report.",
    statSource: "Deloitte and DRSC · automotive analysis 2024",

    regChipsAria: "Relevant EU legal acts",
    regChip1Code: "Quick Fix",
    regChip1Ref: "(EU) 2025/1416",
    regChip1Text: "Immediate measures to simplify the ESRS.",
    regChip2Code: "Omnibus I",
    regChip2Ref: "2026/470",
    regChip2Text: "Deadline shifts and scope of the CSRD.",
    regChip3Code: "VS standard",
    regChip3Ref: "formerly VSME",
    regChip3Text: "Voluntary standard for SMEs below the reporting thresholds.",

    s2Title: "What we know from supporting suppliers and manufacturers",
    s2P1:
      "We support companies in the automotive industry and their supply chain with greenhouse gas inventories under the GHG Protocol and ISO 14064, with customer requests via EcoVadis and CDP, and with setting up sustainability reporting from the first materiality analysis through to the final report. We know the corporate perspective from our own work: our co-founder has supported CSRD reporting projects at vehicle manufacturers over the past three years and previously helped build the CO₂ neutrality programme at Porsche AG.",
    s2P2:
      "This dual perspective, corporate requirements and mid-market reality, shapes how we read the first reporting season. The central insight: the large companies reported with enormous effort. Smaller companies can and should make it easier for themselves within what the regulation allows.",

    pullQuote:
      "The first ESRS reporting season shows above all how much effort arises when the process starts with a broad materiality analysis and without early integration of the auditor, and how many shortcuts the regulator has since built in.",
    pullQuoteAuthor: "COzwei · from accompanying CSRD projects in the automotive industry",

    s3Title: "The four lessons from the first reporting season",
    s3P1:
      "From our active project experience, the evaluated reports and benchmark studies, four lessons emerge. They decide whether reporting stays a manageable project for suppliers that will report in the future, or turns into a resource sink.",

    lessonsGridAria: "The four lessons at a glance",
    l1GridTitle: "Keep materiality focused",
    l1GridBody: "Full breadth is not a template. The ESRS require focus, not completeness.",
    l2GridTitle: "Use transitional reliefs",
    l2GridBody: "61 % fewer mandatory data points. Year one belongs to a clean GHG inventory.",
    l3GridTitle: "Bring in the auditor early",
    l3GridBody: "Over 90 % audit voluntarily. Methodology belongs at the start.",
    l4GridTitle: "Consolidate metrics centrally",
    l4GridBody: "CSRD, CDP, EcoVadis and SAQ 5.0 ask for the same data.",

    merksatzLabel: "Key point",
    l1Merksatz: "The revised ESRS explicitly require focus, not completeness at any price.",
    l2Merksatz: "Year one belongs to a clean greenhouse gas inventory, not to the full build-out.",
    l3Merksatz: "The auditor belongs at the beginning.",
    l4Merksatz: "Data model and responsibilities first, then software.",

    stat2Number: "–61 %",
    stat2Text: "fewer mandatory data points after the ESRS revision.",
    stat2Source: "Delegated act of 3 July 2026",
    stat3Number: "90 %+",
    stat3Text: "of first-wave companies had their reports voluntarily audited. In the automotive sector: 100 %.",
    stat3Source: "Deloitte and DRSC · automotive analysis 2024",
    stat4Number: "3–6 months",
    stat4Text: "of project time can be saved when transitional reliefs and auditor alignment are consistently factored in from the start.",
    stat4Source: "COzwei · experience from CSRD projects",

    l1Title: "1. Keep the materiality analysis focused: narrow and well justified",
    l1P1:
      "The large companies in the sector reported broadly: the benchmark showed an average of 9 out of 10 topical standards classified as material (range 7 to 10). On average, companies identified 58 material impacts, risks and opportunities (IROs), with a range of 29 to 85. For comparison: the overall market of all listed companies averaged 6 material topics and 43 IROs.",
    l1P2:
      "This breadth is understandable for global corporations with complex value chains. It is a poor template for a mid-sized supplier, because every additional material topic drags disclosure requirements, data collection and audit effort behind it. The revised ESRS take the same direction: they explicitly allow a top-down assessment, in which a substantiated conclusion is sufficient for obviously material and obviously immaterial topics, and they demand focus rather than completeness at any price.",
    l1P3:
      "The important limit: a narrow topic selection must be soundly justified. The double materiality analysis remains the methodological core, and every omission must be documented and traceable. Anyone classifying climate change (ESRS E1) as immaterial must explain that in detail. For suppliers this means in practice: climate change (E1), own workforce (S1) and business conduct (G1) are effectively fixed. Workers in the value chain and circular economy are highly likely to be material in the automotive sector. Water, biodiversity and affected communities need to be examined depending on the type of operations and, where in doubt, excluded with a documented rationale.",

    l2Title: "2. Develop metrics in phases and make full use of the transitional reliefs",
    l2P1:
      "Nobody should deliver the full build-out in the first reporting year. Appendix C to ESRS 1 sets out phased transitional provisions. The regulator has recently expanded these significantly: with the Quick Fix (Delegated Regulation (EU) 2025/1416, published on 10 November 2025), first-wave companies may omit even complete disclosures on biodiversity (E4), workers in the value chain (S2), affected communities (S3) and consumers and end-users (S4) for financial years 2025 and 2026, even if these topics have been classified as material. All that is then required is a summary disclosure under ESRS 2.17.",
    l2P2:
      "For companies that will have to report in the future, two points are particularly relevant. First, the revised ESRS are now available: the European Commission adopted the delegated act on 3 July 2026; it is currently in the scrutiny phase before the European Parliament and Council. Provisions include around 61 percent fewer mandatory data points, mandatory application from financial year 2027 and voluntary application already for 2026. Second, transitional deadlines are tied to the first mandatory year. Anyone reporting from financial year 2027 therefore starts with the full package of reliefs.",
    l2P3:
      "Our recommendation is a metrics roadmap across three reporting years. Year 1 focuses on what is already robust or mandatory, above all a clean greenhouse gas inventory (Scope 1, Scope 2 and the material Scope 3 categories). Complex disclosures such as expected financial effects or full value-chain data follow in phases. Every relief used is documented transparently. The ESRS envisage exactly this approach.",

    l3Title: "3. Involve the auditor before the project starts",
    l3P1:
      "The first two reporting years under the CSRD have shown how audit-adjacent sustainability reporting has become: more than 90 percent of first-wave companies had their reports voluntarily audited, even though there was no audit obligation in Germany due to the lack of transposition. In the automotive benchmark, all reports without exception were substantively audited, half of them partly even with reasonable assurance.",
    l3P2:
      "At the same time, companies report in the Deutsches Aktieninstitut's guide to the ESRS that the first materiality analysis alone took three to six months, still before alignment with the auditor. Anyone discussing methodology with the auditor only after the analysis has been completed risks exactly what some early adopters experienced: rework on materiality thresholds, on the definition of IROs and on the consolidation perimeter under time pressure, with substantial additional cost.",
    l3P3:
      "The auditor therefore belongs at the beginning of the project. Before the actual work starts, the following should be aligned: methodology and thresholds of the materiality analysis, the scope of the consolidation perimeter, the treatment of estimates and value-chain data, and the planned use of transitional reliefs. This reduces audit risk, prevents duplicate work and secures the timeline up to the planned publication date.",

    l4Title: "4. Consolidate metrics in one place and unlock synergies with CDP, EcoVadis and Co.",
    l4P1Lead: "Observation.",
    l4P1:
      " First adopters mostly started with Excel and homegrown solutions, according to the Deutsches Aktieninstitut's practical survey. The corporations are drawing the consequences: Schaeffler has migrated its sustainability data from various systems into a central system, Mercedes-Benz speaks of a single source of truth for sustainability data.",
    l4P2Lead: "Cause.",
    l4P2:
      " For suppliers, the leverage is even greater, because ESRS reporting is rarely the only requirement: the same metrics are already requested today via CDP questionnaires, EcoVadis assessments, Product Carbon Footprints and supplier self-assessments (SAQ 5.0). Answering every request separately means collecting the same data multiple times and risking inconsistencies. Our consulting experience shows: a central metric hub, from which reporting under CSRD or VS, CDP, EcoVadis and customer requests are all served, significantly reduces the ongoing effort and improves the assessment results as a side effect.",
    l4P3Lead: "Recommendation.",
    l4P3:
      " The sequence is decisive here: clarify the data model and responsibilities first, then select software. Software only pays off once these foundations are in place and there are people who want and can work with it.",

    cTitle: "Why the window until 2027 matters now",
    cP1:
      "The extended deadlines create a planning advantage but do not release anyone from preparation, for two reasons. First, the requirements reach many suppliers via the supply chain rather than through their own reporting obligation: in the automotive benchmark, all companies without exception classified climate change, circular economy and workers in the value chain as material. The data requirements from manufacturers and large suppliers (emissions data, Product Carbon Footprints, human-rights due diligence, secondary-material quotas) systematically land with suppliers.",
    cP2:
      "Second, there is a new voluntary standard VS (Voluntary Sustainability Reporting Standard, formerly VSME) for companies below the reporting thresholds. The Commission adopted it as a delegated act on 3 July 2026 together with the revised ESRS. It channels customer requests and legally anchors the so-called Value Chain Cap: reporting companies may not require information from protected companies with up to 1,000 employees that goes beyond the scope of the VS.",
    cP3:
      "Anyone who uses this window to build up the materiality analysis, greenhouse gas inventory and metric hub in comparatively calm waters can report cost-optimised from 2027 onwards, instead of repeating the mistakes of the first wave under time pressure and continuing to weigh on the profitability of the whole company.",

    ctaEyebrow: "Your next step",
    ctaTitle: "30-minute intro call. No obligation.",
    ctaBody:
      "We walk through where your company stands on the four lessons: materiality, metric roadmap, audit preparation and data hub. You get an honest read on what really has to be done by 2027, and what does not.",
    ctaButtonLabel: "Book 30 minutes with Christian Philippen",

    authorSectionLabel: "About the author",
    authorSectionTitle: "In a first call we clarify your CSRD starting point",
    authorName: "Christian Philippen",
    authorRole: "Co-founder · CSRD reporting projects in the automotive industry",
    authorBio:
      "Christian Philippen is co-founder of COzwei GmbH and your contact for sustainability reporting in the automotive industry. Over the past three years he has supported CSRD reporting projects at vehicle manufacturers, from initial preparation in 2022 through to reporting aligned with the CSRD for financial year 2025. He builds on many years of experience, including as project lead for the earlier GRI sustainability reports at AUDI AG in 2014.",
    authorCtaLabel: "Book a slot with Christian",
    authorCtaDesc:
      "Free of charge, no obligation. We clarify materiality, metric roadmap, audit preparation and data hub before the actual project starts.",

    faqIntro:
      "Answers to the questions we are most often asked in intro calls with suppliers.",
    faqs: [
      {
        q: "What is the double materiality analysis?",
        a: "It is the heart of the ESRS and determines what has to be reported. Every sustainability topic is assessed from two directions: what impacts the company has on people and the environment, and what financial risks and opportunities arise for the company. If either perspective is material, the topic must be reported.",
      },
      {
        q: "What reliefs apply in the first reporting year?",
        a: "The applicable ESRS contain phased transitional provisions in Appendix C, which were further expanded for the current reporting wave by the Quick Fix (Delegated Regulation (EU) 2025/1416). The revised ESRS, whose delegated act was adopted by the Commission on 3 July 2026, also provide transitional reliefs; the deadlines are tied to the first mandatory year. The double materiality analysis itself remains mandatory.",
      },
      {
        q: "Do we have to have the report audited?",
        a: "The CSRD requires an external audit with limited assurance. In the first two reporting years, more than 90 percent of companies had their reports voluntarily audited; in the automotive sector, this was true for all companies in the benchmark. Regardless of the formal obligation, we recommend building in the audit perspective from the start.",
      },
      {
        q: "We are below the thresholds. Does the topic still concern us?",
        a: "Possibly yes: manufacturers and large suppliers have classified supply-chain and circular-economy topics as material across the board and request the corresponding data from their suppliers. In its latest version, the EU has enshrined a shield against pass-through into the supply chain: through the Value Chain Cap, reporting companies may only request information from protected companies with up to 1,000 employees in the scope of the voluntary standard VS. How effective this shield is in practice remains questionable if requests are routinely made through procurement processes via EcoVadis or SAQ.",
      },
      {
        q: "What are manufacturers already demanding concretely from suppliers?",
        a: "Typical requests concern emission data (Corporate and Product Carbon Footprint), climate targets, participation in EcoVadis or CDP, and evidence of human-rights and environmental due diligence. A standard-compliant greenhouse gas inventory is the most important single investment, because it serves almost every request format simultaneously.",
      },
    ],

    sourcesTitle: "Sources",
    sources: [
      "Directive (EU) 2026/470 (Omnibus I), Official Journal of the EU of 26.02.2026, in force since 18.03.2026; overview: CSR in Germany (BMAS), March 2026",
      "DRSC: adoption of the delegated acts on the revised ESRS and the voluntary standard VS by the European Commission on 3 July 2026 (news item July 2026)",
      "DRSC: project page on the standard for voluntary sustainability reporting (VS, formerly VSME), status June 2026",
      "PwC and Rödl: analyses of the consultation drafts of the revised ESRS and the VS (May 2026)",
      "Delegated Regulation (EU) 2025/1416 (Quick Fix), Official Journal of the EU of 10.11.2025",
      "Deloitte and DRSC: sustainability reporting practice under CSRD and ESRS, analysis of the automotive industry for financial year 2024 (May 2025) and final report on the analysis of DAX, MDAX and SDAX companies (November 2025)",
      "EY: CSRD Barometer 2025 (analysis of 200 reports under the ESRS)",
      "Deutsches Aktieninstitut: guide to the ESRS (practical experience with the materiality analysis, 2024)",
      "2024 and 2025 sustainability reports of Volkswagen, Mercedes-Benz Group, BMW Group, Daimler Truck, Porsche AG, Continental, Schaeffler, Bosch and ZF",
    ],
    disclaimer:
      "Note: this article reflects our practical experience and the state of regulation at the time of publication (July 2026). The delegated acts on the revised ESRS and the VS are still in the scrutiny phase of the European Parliament and Council; the German transposition of the CSRD is outstanding. No reliable statements can be made about future regulation; only the legal acts in force at any given time are binding. This article does not replace legal advice.",
  },

  pt: {
    heroKicker: "Observação de prática · CSRD e ESRS",
    heroTitle:
      "CSRD na indústria automóvel: quatro lições da primeira temporada de relato para fornecedores mais pequenos",
    metaDate: "Julho de 2026",
    metaCategory: "Observação de prática · CSRD e ESRS",

    intro:
      "Volkswagen, Mercedes-Benz, BMW, Daimler Truck, Continental e Schaeffler publicaram os seus primeiros relatórios de sustentabilidade segundo as ESRS. Os fornecedores que passam a relatar a partir do exercício de 2027 podem aprender muito com estes primeiros relatórios e evitar desvios caros.",

    s1Title: "Do que se trata: a primeira temporada de relato segundo as ESRS foi avaliada",
    s1P1:
      "Com os exercícios de 2024 e 2025, a primeira vaga relatou pela primeira vez segundo as European Sustainability Reporting Standards (ESRS). Fazem parte dela grandes empresas orientadas para o mercado de capitais com mais de 500 colaboradores. Embora até julho de 2026 a CSRD ainda não tenha sido transposta para direito nacional na Alemanha, cerca de 95 por cento das empresas cotadas relataram voluntariamente segundo as ESRS ou por elas orientadas.",
    s1P2:
      "A indústria automóvel está particularmente em foco: a Deloitte e o DRSC avaliaram os relatórios do setor num benchmark próprio, incluindo BMW, Daimler Truck, Mercedes-Benz e Volkswagen. Em paralelo, grandes fornecedores não cotados como Bosch (análise de dupla materialidade segundo a lógica da CSRD), ZF (voluntariamente alinhado com as ESRS) e Schaeffler (primeiro relatório conforme a CSRD no relatório de gestão consolidado) já relatam hoje segundo as novas normas.",
    s1P3:
      "Para as empresas mais pequenas e médias da indústria automóvel, isto é uma vantagem: em julho de 2026, o dever de relatar da segunda vaga está previsto para começar apenas nos exercícios a partir de 2027. Aplica-se ainda apenas a empresas acima dos novos limiares do pacote Omnibus (Omnibus I, Diretiva (UE) 2026/470, em vigor desde 18 de março de 2026) de mais de 1.000 colaboradores e mais de 450 milhões de euros de volume de negócios. Quem se prepara agora aproveita as lições caras dos primeiros.",
    s1Footnote:
      "Todas as indicações sobre futuras obrigações de relato refletem o estado do processo legislativo em julho de 2026. Os prazos da CSRD foram adiados várias vezes no passado e a transposição para direito alemão ainda está pendente (prazo: 19 de março de 2027). Não é possível fazer uma afirmação fiável sobre a regulação futura; apenas os atos legais em vigor em cada momento são vinculativos.",

    statNumber: "9/10",
    statText:
      "normas temáticas das ESRS foram classificadas como materiais em média pelas grandes empresas do setor automóvel (Deloitte e DRSC, seis relatórios analisados). O mercado global situa-se em seis. É aqui que reside a primeira lição para quem ainda não relata.",
    statSource: "Deloitte e DRSC · análise do setor automóvel 2024",

    regChipsAria: "Atos legais da UE relevantes",
    regChip1Code: "Quick Fix",
    regChip1Ref: "(UE) 2025/1416",
    regChip1Text: "Medidas imediatas para simplificar as ESRS.",
    regChip2Code: "Omnibus I",
    regChip2Ref: "2026/470",
    regChip2Text: "Adiamentos de prazos e âmbito da CSRD.",
    regChip3Code: "Padrão VS",
    regChip3Ref: "anteriormente VSME",
    regChip3Text: "Padrão voluntário para PME abaixo dos limiares de relato.",

    s2Title: "O que sabemos por acompanhar fornecedores e fabricantes",
    s2P1:
      "Acompanhamos empresas da indústria automóvel e da sua cadeia de fornecimento na contabilização de gases de efeito estufa segundo o GHG Protocol e a ISO 14064, em pedidos dos seus clientes via EcoVadis e CDP e na construção do relato de sustentabilidade, da primeira análise de materialidade até ao relatório final. Conhecemos a perspetiva de grupo pelo trabalho próprio: o nosso cofundador acompanhou nos últimos três anos projetos de relato CSRD em fabricantes de veículos e, antes disso, ajudou a construir na Porsche AG o programa de neutralidade contabilística de emissões de CO₂.",
    s2P2:
      "Esta dupla perspetiva, entre exigências de grupo e realidade das médias empresas, marca a nossa leitura desta primeira temporada de relato. A ideia central: os grandes relataram com esforço enorme. Empresas mais pequenas podem e devem simplificar dentro do que a regulação permite.",

    pullQuote:
      "A primeira temporada de relato segundo as ESRS mostra sobretudo o esforço que surge quando se começa com uma análise de materialidade larga e sem integrar cedo o auditor, e os atalhos que o regulador entretanto já incorporou.",
    pullQuoteAuthor: "COzwei · a partir do acompanhamento de projetos CSRD na indústria automóvel",

    s3Title: "As quatro lições da primeira temporada de relato",
    s3P1:
      "Da nossa experiência ativa de projeto, dos relatórios analisados e dos estudos de benchmark decorrem quatro lições. Elas decidem, para fornecedores com futura obrigação de relato, se o relato continua um projeto gerível ou se se transforma num consumidor de recursos.",

    lessonsGridAria: "As quatro lições em resumo",
    l1GridTitle: "Focar a materialidade",
    l1GridBody: "Cobrir tudo não é um modelo. As ESRS exigem foco, não completude.",
    l2GridTitle: "Usar os alívios de transição",
    l2GridBody: "61 % menos pontos de dados obrigatórios. O ano 1 pertence a um inventário GEE limpo.",
    l3GridTitle: "Envolver o auditor cedo",
    l3GridBody: "Mais de 90 % submetem voluntariamente a auditoria. A metodologia pertence ao início.",
    l4GridTitle: "Consolidar indicadores num ponto",
    l4GridBody: "CSRD, CDP, EcoVadis e SAQ 5.0 pedem os mesmos dados.",

    merksatzLabel: "Ponto-chave",
    l1Merksatz: "As ESRS revistas exigem expressamente foco, não completude a qualquer preço.",
    l2Merksatz: "O ano 1 pertence a um inventário GEE limpo, não ao pacote completo.",
    l3Merksatz: "O auditor pertence ao início.",
    l4Merksatz: "Primeiro modelo de dados e responsabilidades, depois software.",

    stat2Number: "–61 %",
    stat2Text: "menos pontos de dados obrigatórios após a revisão das ESRS.",
    stat2Source: "Ato delegado de 3 de julho de 2026",
    stat3Number: "90 %+",
    stat3Text: "das empresas da primeira vaga submeteram os seus relatórios voluntariamente a auditoria. No setor automóvel: 100 %.",
    stat3Source: "Deloitte e DRSC · análise do setor automóvel 2024",
    stat4Number: "3–6 meses",
    stat4Text: "de tempo de projeto podem ser poupados se os alívios de transição e o alinhamento com o auditor forem consistentemente considerados desde o início.",
    stat4Source: "COzwei · experiência de projetos CSRD",

    l1Title: "1. Manter a análise de materialidade focada: estreita e bem fundamentada",
    l1P1:
      "As grandes empresas do setor relataram de forma abrangente: no benchmark, 9 em cada 10 normas temáticas foram em média classificadas como materiais (intervalo 7 a 10). Em média, as empresas identificaram 58 impactos, riscos e oportunidades materiais (IROs), com um intervalo de 29 a 85. Para comparar: o mercado global de todas as empresas cotadas ficou em média em 6 temas materiais e 43 IROs.",
    l1P2:
      "Esta amplitude é compreensível em grandes grupos globais com cadeias de valor complexas. Como modelo para um fornecedor médio, serve pouco: cada tema material adicional arrasta obrigações de divulgação, recolha de dados e esforço de auditoria. As ESRS revistas seguem a mesma direção: permitem expressamente uma avaliação de cima para baixo, na qual, para temas obviamente materiais ou obviamente imateriais, basta uma conclusão fundamentada, e exigem foco em vez de completude a qualquer custo.",
    l1P3:
      "O limite importante: uma seleção estreita de temas tem de estar tecnicamente bem fundamentada. A análise de dupla materialidade continua a ser o núcleo metodológico obrigatório e cada omissão tem de ser documentada de forma rastreável. Quem classificar as alterações climáticas (ESRS E1) como imateriais tem de o justificar detalhadamente. Para fornecedores, isto significa na prática: alterações climáticas (E1), colaboradores próprios (S1) e conduta empresarial (G1) estão de facto fixados. Trabalhadores na cadeia de valor e economia circular são altamente prováveis de serem materiais no setor automóvel. Água, biodiversidade e comunidades afetadas devem ser analisadas em função do tipo de atividade e, em caso de dúvida, excluídas com justificação.",

    l2Title: "2. Desenvolver indicadores por fases e usar consequentemente os alívios de transição",
    l2P1:
      "Ninguém deve entregar o pacote completo no primeiro ano de relato. As ESRS contêm no anexo C das ESRS 1 disposições de transição escalonadas. O regulador alargou-as significativamente há pouco: com o Quick Fix (Regulamento Delegado (UE) 2025/1416, publicado a 10 de novembro de 2025), as empresas da primeira vaga podem, para os exercícios de 2025 e 2026, omitir mesmo indicações completas sobre biodiversidade (E4), trabalhadores na cadeia de valor (S2), comunidades afetadas (S3) e consumidores e utilizadores finais (S4), mesmo que estes temas tenham sido classificados como materiais. É apenas necessária uma indicação resumida ao abrigo da ESRS 2.17.",
    l2P2:
      "Para empresas com futura obrigação de relato, dois pontos são particularmente relevantes. Primeiro, as ESRS revistas já estão disponíveis: a Comissão Europeia adotou o ato delegado a 3 de julho de 2026; encontra-se agora em fase de escrutínio pelo Parlamento Europeu e pelo Conselho. Estão previstos cerca de 61 por cento menos pontos de dados obrigatórios, a aplicação obrigatória a partir do exercício de 2027 e a aplicação voluntária já em 2026. Segundo, os prazos de transição estão ligados ao primeiro ano de obrigação. Quem relatar a partir do exercício de 2027 começa portanto com o pacote completo de alívios.",
    l2P3:
      "A nossa recomendação é um roteiro de indicadores ao longo de três anos de relato. O ano 1 concentra-se no que já existe de forma robusta ou é obrigatório, sobretudo um inventário GEE limpo (Escopo 1, Escopo 2 e as categorias materiais do Escopo 3). Indicadores complexos, como efeitos financeiros esperados ou dados completos da cadeia de valor, seguem-se de forma faseada. Todos os alívios utilizados são documentados de forma transparente. As ESRS preveem exatamente este caminho.",

    l3Title: "3. Envolver o auditor antes do início do projeto",
    l3P1:
      "Os primeiros dois anos de relato sob a CSRD mostraram o quanto o relato de sustentabilidade se aproximou da auditoria: mais de 90 por cento das empresas da primeira vaga submeteram os seus relatórios a auditoria voluntária, embora na Alemanha não existisse obrigação legal por falta de transposição da CSRD. No benchmark do setor automóvel, sem exceção, todos os relatórios foram substancialmente auditados; metade parcialmente até com garantia razoável (reasonable assurance).",
    l3P2:
      "Ao mesmo tempo, segundo o guia do Deutsches Aktieninstitut sobre as ESRS, as empresas relatam que só a primeira análise de materialidade demorou entre três e seis meses, ainda antes da articulação com o auditor. Quem discute a metodologia com o auditor apenas depois de concluída a análise arrisca exatamente o que alguns pioneiros viveram: retrabalho nos limiares de materialidade, na definição dos IROs e no perímetro de consolidação sob pressão de tempo, com custos adicionais consideráveis.",
    l3P3:
      "O auditor pertence, por isso, ao início do projeto. Antes do início do trabalho propriamente dito devem ficar alinhados: a metodologia e os limiares da análise de materialidade, a delimitação do perímetro de consolidação, o tratamento de estimativas e de dados da cadeia de valor e a utilização prevista dos alívios de transição. Isto reduz o risco de auditoria, evita trabalho duplicado e assegura o calendário até à publicação prevista.",

    l4Title: "4. Concentrar indicadores num ponto e explorar sinergias com CDP, EcoVadis e afins",
    l4P1Lead: "Observação.",
    l4P1:
      " Segundo o levantamento prático do Deutsches Aktieninstitut, os pioneiros começaram sobretudo com Excel e soluções próprias. Os grandes grupos já estão a tirar consequências: a Schaeffler migrou os seus dados de sustentabilidade de vários sistemas para um sistema central; a Mercedes-Benz fala de uma \"single source of truth\" para os dados de sustentabilidade.",
    l4P2Lead: "Causa.",
    l4P2:
      " Para os fornecedores, a alavanca é ainda maior, porque o relato segundo as ESRS raramente é a única exigência: os mesmos indicadores já são hoje solicitados por clientes via questionários da CDP, avaliações da EcoVadis, Product Carbon Footprints e autodeclarações de fornecedor (SAQ 5.0). Quem responde a cada pedido isoladamente recolhe os mesmos dados várias vezes e arrisca inconsistências. A nossa experiência de consultoria mostra: um repositório central de indicadores, a partir do qual são servidos o relato pela CSRD ou VS, a CDP, a EcoVadis e os pedidos dos clientes, reduz consideravelmente o esforço corrente e melhora, de passagem, os resultados das avaliações.",
    l4P3Lead: "Recomendação.",
    l4P3:
      " A sequência é decisiva: primeiro clarificar o modelo de dados e as responsabilidades, depois selecionar software. O software só rende quando estas bases estão estabelecidas e também existem colaboradores dispostos e capazes de trabalhar com ele.",

    cTitle: "Porque a janela até 2027 conta agora",
    cP1:
      "Os prazos alargados criam uma vantagem de planeamento, mas não dispensam a preparação, por dois motivos. Primeiro, os requisitos chegam a muitos fornecedores há muito através da cadeia de fornecimento, e não do seu próprio dever de relato: no benchmark do setor automóvel, sem exceção, todas as empresas classificaram alterações climáticas, economia circular e trabalhadores na cadeia de valor como materiais. Os requisitos de dados dos fabricantes e dos grandes fornecedores (dados de emissões, Product Carbon Footprints, dever de diligência em matéria de direitos humanos, quotas de material secundário) caem sistematicamente sobre os fornecedores.",
    cP2:
      "Segundo, existe futuramente para empresas abaixo dos limiares de relato o padrão voluntário VS (Voluntary Sustainability Reporting Standard, anteriormente VSME). A Comissão adotou-o a 3 de julho de 2026, juntamente com as ESRS revistas, como ato delegado. Canaliza os pedidos dos clientes e ancora juridicamente o chamado Value Chain Cap: empresas com obrigação de relato não podem exigir de empresas protegidas com até 1.000 colaboradores informações que ultrapassem o âmbito do VS.",
    cP3:
      "Quem usa esta janela para construir a análise de materialidade, o inventário GEE e o repositório de indicadores em águas relativamente calmas pode, a partir de 2027, relatar de forma otimizada em custo, em vez de repetir sob pressão de tempo os erros da primeira vaga e continuar a onerar a rentabilidade de toda a empresa.",

    ctaEyebrow: "O seu próximo passo",
    ctaTitle: "Conversa inicial de 30 minutos. Sem compromisso.",
    ctaBody:
      "Analisamos consigo em que ponto a sua empresa se encontra em cada uma das quatro lições: materialidade, roteiro de indicadores, preparação para auditoria e repositório de dados. Recebe uma avaliação honesta do que é realmente preciso fazer até 2027, e do que não é.",
    ctaButtonLabel: "Marcar 30 minutos com Christian Philippen",

    authorSectionLabel: "Sobre o autor",
    authorSectionTitle: "Numa primeira conversa esclarecemos a sua situação inicial CSRD",
    authorName: "Christian Philippen",
    authorRole: "Cofundador · projetos de relato CSRD na indústria automóvel",
    authorBio:
      "Christian Philippen é cofundador da COzwei GmbH e o seu interlocutor para o relato de sustentabilidade na indústria automóvel. Nos últimos três anos, acompanhou projetos de relato CSRD em fabricantes de veículos, desde a primeira preparação em 2022 até ao relato alinhado com a CSRD para o exercício de 2025. Baseia-se em muitos anos de experiência, entre outros como responsável de projeto dos anteriores relatórios de sustentabilidade segundo a GRI na AUDI AG em 2014.",
    authorCtaLabel: "Marcar horário com Christian",
    authorCtaDesc:
      "Gratuito e sem compromisso. Esclarecemos materialidade, roteiro de indicadores, preparação para auditoria e repositório de dados antes do início efetivo do projeto.",

    faqIntro:
      "Respostas às perguntas que mais nos colocam nas primeiras conversas com fornecedores.",
    faqs: [
      {
        q: "O que é a análise de dupla materialidade?",
        a: "É o coração das ESRS e determina o que tem de ser relatado. Cada tema de sustentabilidade é avaliado em duas direções: que impactos tem a empresa nas pessoas e no ambiente, e que riscos e oportunidades financeiras resultam para a empresa. Se qualquer uma das perspetivas for material, o tema é objeto de relato.",
      },
      {
        q: "Que alívios se aplicam no primeiro ano de relato?",
        a: "As ESRS em vigor contêm no anexo C disposições de transição escalonadas, que foram novamente alargadas para a atual vaga de relato pelo Quick Fix (Regulamento Delegado (UE) 2025/1416). Também as ESRS revistas, cujo ato delegado foi adotado pela Comissão a 3 de julho de 2026, preveem alívios de transição; os prazos estão ligados ao primeiro ano de obrigação. A análise de dupla materialidade continua a ser obrigatória.",
      },
      {
        q: "Temos de submeter o relatório a auditoria?",
        a: "A CSRD prevê uma auditoria externa com garantia limitada (limited assurance). Nos primeiros dois anos de relato, mais de 90 por cento das empresas submeteram os seus relatórios voluntariamente a auditoria; no setor automóvel, todas as empresas do benchmark. Independentemente da obrigação formal, recomendamos incorporar a perspetiva da auditoria desde o início.",
      },
      {
        q: "Estamos abaixo dos limiares. O tema afeta-nos, mesmo assim?",
        a: "Em certos casos, sim: fabricantes e grandes fornecedores classificaram temas da cadeia de fornecimento e da economia circular como materiais de forma generalizada e pedem os respetivos dados aos seus fornecedores. A UE ancorou, na última versão, um escudo contra o repasse para a cadeia de fornecimento: através do Value Chain Cap, empresas com obrigação de relato só podem exigir a empresas protegidas com até 1.000 colaboradores informações no âmbito do padrão voluntário VS. A eficácia deste escudo na prática é questionável se, por exemplo, os pedidos forem feitos de forma padronizada via EcoVadis ou SAQ no âmbito dos processos de compras.",
      },
      {
        q: "O que exigem os fabricantes hoje já concretamente dos fornecedores?",
        a: "Típicos são dados de emissões (Corporate e Product Carbon Footprint), metas climáticas, participação na EcoVadis ou na CDP e comprovativos de deveres de diligência em direitos humanos e ambiente. Um inventário GEE conforme os padrões é o investimento individual mais importante, porque serve quase todos os formatos de pedido em simultâneo.",
      },
    ],

    sourcesTitle: "Fontes",
    sources: [
      "Diretiva (UE) 2026/470 (Omnibus I), Jornal Oficial da UE de 26.02.2026, em vigor desde 18.03.2026; visão geral: CSR na Alemanha (BMAS), março de 2026",
      "DRSC: adoção dos atos delegados sobre as ESRS revistas e sobre o padrão voluntário VS pela Comissão Europeia a 3 de julho de 2026 (notícia de julho de 2026)",
      "DRSC: página de projeto sobre o padrão de relato voluntário de sustentabilidade (VS, anteriormente VSME), estado de junho de 2026",
      "PwC e Rödl: análises dos projetos de consulta das ESRS revistas e do VS (maio de 2026)",
      "Regulamento Delegado (UE) 2025/1416 (Quick Fix), Jornal Oficial da UE de 10.11.2025",
      "Deloitte e DRSC: prática do relato de sustentabilidade segundo a CSRD e as ESRS, análise da indústria automóvel para o exercício de 2024 (maio de 2025) e relatório final da análise de empresas do DAX, MDAX e SDAX (novembro de 2025)",
      "EY: CSRD Barometer 2025 (análise de 200 relatórios segundo as ESRS)",
      "Deutsches Aktieninstitut: guia para as ESRS (experiências práticas sobre a análise de materialidade, 2024)",
      "Relatórios de sustentabilidade de 2024 e 2025 da Volkswagen, Mercedes-Benz Group, BMW Group, Daimler Truck, Porsche AG, Continental, Schaeffler, Bosch e ZF",
    ],
    disclaimer:
      "Nota: este artigo reflete a nossa experiência prática e o estado da regulação no momento da publicação (julho de 2026). Os atos delegados sobre as ESRS revistas e o VS encontram-se ainda em fase de escrutínio pelo Parlamento e pelo Conselho, e a transposição alemã da CSRD ainda está pendente. Não são possíveis afirmações fiáveis sobre a regulação futura; vinculativos são apenas os atos legais em vigor em cada momento. Este artigo não substitui aconselhamento jurídico.",
  },
};
