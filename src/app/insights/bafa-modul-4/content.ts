type Faq = { q: string; a: string };
type TableRow = string[];
type Table = { headers: string[]; rows: TableRow[] };

type Content = {
  // Hero & meta
  heroKicker: string;
  heroTitle: string;
  metaDate: string;
  metaCategory: string;

  // Lead
  intro: string;

  // Section 1, Ausgangslage
  s1Title: string;
  s1P1: string;
  s1P2: string;

  // Section 2, Modul 4 Premium
  s2Title: string;
  s2P1: string;
  s2BulletBasisLabel: string;
  s2BulletBasis: string;
  s2BulletPremiumLabel: string;
  s2BulletPremium: string;
  s2TableTitle: string;
  s2Table: Table;
  s2TableFooter: string;

  // Section 3, Referenzmaschine
  s3Title: string;
  s3P1: string;
  s3WegALabel: string;
  s3WegA: string;
  s3WegBLabel: string;
  s3WegB: string;
  s3P2: string;

  // Section 4, Beispielrechnung im Detail
  s4Title: string;
  s4Step1Label: string;
  s4Step1Table: Table;
  s4Step1After: string;
  s4Step2Label: string;
  s4Step2P: string;
  s4Step2Table: Table;
  s4Step3Label: string;
  s4Step3P: string;
  s4Step4Label: string;
  s4Step4P: string;

  // Stat highlight
  statNumber: string;
  statText: string;

  // Section 5, Fehlerquellen
  s5Title: string;
  s5Intro: string;
  s5E1Label: string;
  s5E1: string;
  s5E2Label: string;
  s5E2: string;
  s5E3Label: string;
  s5E3: string;

  // Section 6, Voranfrage
  s6Title: string;
  s6P: string;

  // Section 7, Zeitablauf
  s7Title: string;
  s7P1: string;
  s7Table: Table;
  s7P2: string;

  // Pull quote
  pullQuote: string;

  // Section 8, Fazit
  s8Title: string;
  s8P: string;

  // CTA block
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;

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

  // Disclaimer
  disclaimer: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroKicker: "Praxisbeobachtung · BAFA EEW Modul 4 / Förderung",
    heroTitle:
      "Wenn der Mehrkostenansatz entscheidet: Was eine BAFA-Modul-4-Förderung für eine Druckmaschine wirklich bringt",
    metaDate: "Juni 2026",
    metaCategory: "Förderung",

    intro:
      "Bei großen Maschineninvestitionen ist die Bundesförderung für Energie- und Ressourceneffizienz (EEW) oft die zentrale bundesweite Förderoption. Über Erfolg oder Ablehnung entscheidet bei Modul 4 Premium aber selten die Investitionssumme, sondern eine einzige methodische Frage: Welche Maschine wird als Referenz angesetzt? Diese Beispielrechnung anhand einer UV-Flachbettdruckanlage zeigt, warum der Mehrkostenansatz der wichtigste Hebel ist und wie ein sauberer Antrag den Unterschied zwischen Nachforderungsschleife und sechsstelliger Förderung ausmacht.",

    s1Title: "Ausgangslage: Investition in eine Flachbettdruckanlage",
    s1P1:
      "Eine Druckerei in Bayern plant den Austausch ihrer bestehenden UV-Flachbettdruckanlage. Die neue Maschine ist deutlich produktiver, bietet bessere Druckqualität und mehr Automatisierung und ist zugleich energieeffizienter. Die Eckdaten: Bruttoinvestition 500.000 €, Standort Bayern, kleines Unternehmen (KU), erwartete CO₂-Reduktion rund 35 %, Amortisationszeit über drei Jahre. Eine direkt vergleichbare Bestandsanlage existiert zwar, ist aber nicht sauber vergleichbar.",
    s1P2:
      "Die zentrale Frage lautet: Welche Maschine setzen wir als Referenz an, damit der Antrag bewilligt wird und nicht in der Nachforderungsschleife landet?",

    s2Title: "Warum Modul 4 Premium für Druckmaschinen relevant ist",
    s2P1:
      "Die EEW ist das größte bundesweite Programm für Investitionen in energieeffiziente Anlagen. Modul 4 adressiert energie- und ressourcenbezogene Optimierungen, also genau das Modul, in das große Druckmaschineninvestitionen fallen. Es gibt zwei Varianten:",
    s2BulletBasisLabel: "Modul 4 Basis",
    s2BulletBasis:
      ": pauschale Förderung von 10 bis 15 % auf die förderfähigen Mehrkosten, mindestens 15 % Endenergieeinsparung gegenüber Referenz. Schnellerer Antragsweg, kein detailliertes Einsparkonzept nötig.",
    s2BulletPremiumLabel: "Modul 4 Premium",
    s2BulletPremium:
      ": höhere Förderquote durch ein detailliertes Einsparkonzept eines zugelassenen Energieberaters. Hier liegen die eigentlichen Förderhebel, aber auch die methodische Komplexität.",
    s2TableTitle: "Förderquoten Modul 4 Premium",
    s2Table: {
      headers: ["Unternehmensgröße", "De-Minimis", "AGVO", "Förderdeckel"],
      rows: [
        ["Kleines Unternehmen (KU)", "45 %", "20 %", "2.600 €/tCO₂e"],
        ["Mittleres Unternehmen (MU)", "35 %", "15 %", "2.200 €/tCO₂e"],
        ["Großes Unternehmen (GU)", "25 %", "10 %", "1.600 €/tCO₂e"],
      ],
    },
    s2TableFooter: "Maximaler Förderbetrag: 20 Mio. € pro Vorhaben.",

    s3Title: "Die methodische Kernfrage: Was ist die Referenzmaschine?",
    s3P1:
      "Modul 4 fördert nicht die absoluten Investitionskosten, sondern die Investitionsmehrkosten gegenüber einer Referenz. Dafür gibt es zwei Wege.",
    s3WegALabel: "Weg A, Bestandsvergleich:",
    s3WegA:
      " Existiert eine direkt vergleichbare Bestandsanlage, kann sie als Referenz dienen. Bei großformatigen UV-Flachbettdruckern ist ein sauberer 1:1-Vergleich in der Praxis aber oft nicht möglich, weil die neue Maschine anderer Bauart ist, andere Materialien verarbeitet oder eine breitere Anwendung abdeckt.",
    s3WegBLabel: "Weg B, Referenzmaschine am Markt (Mehrkostenansatz):",
    s3WegB:
      " Verglichen wird gegen eine am Markt etablierte Standardmaschine derselben Funktion mit geringerer Effizienz. Die Differenz der Investitionskosten sind die förderfähigen Mehrkosten. Fehlt ein Angebot für die Referenzanlage, können alternativ die Investitionsgesamtkosten (IGK) angesetzt werden, dann wird die Förderquote jedoch um 50 % reduziert.",
    s3P2:
      "Die Wahl der Vergleichsmaschine ist methodisch entscheidend. Sie muss funktional vergleichbar (gleiche Anwendungsfälle), marktrepräsentativ (weder das billigste noch das hochwertigste Modell), energetisch sauber dokumentiert (Herstellerangaben, Datenblätter) und methodisch begründbar sein. Die BAFA kann eine nicht tragfähig begründete Referenz zurückweisen, einer der häufigsten Gründe für Nachforderungen.",

    s4Title: "Die Beispielrechnung im Detail",
    s4Step1Label: "Schritt 1, Referenzmaschine festlegen",
    s4Step1Table: {
      headers: ["Position", "Wert"],
      rows: [
        ["Bruttokosten neue Maschine", "500.000 €"],
        ["Vergleichbare Referenzmaschine (Marktstandard)", "200.000 €"],
        ["Investitionsmehrkosten", "300.000 €"],
      ],
    },
    s4Step1After: "Förderfähig sind nicht 500.000 €, sondern die 300.000 € Mehrkosten.",
    s4Step2Label: "Schritt 2, Förderquote ansetzen",
    s4Step2P:
      "KU + Modul 4 Premium + De-Minimis = 45 % auf die Mehrkosten (IMK). Bei Nutzung der IGK-Option für die Vergleichsanlage liegt der Satz bei 22,5 %.",
    s4Step2Table: {
      headers: ["Position", "Wert"],
      rows: [
        ["Förderfähige Mehrkosten", "300.000 €"],
        ["Förderquote (KU, De-Minimis)", "45 % (IMK) / 22,5 % (IGK)"],
        ["Rechnerisch maximale Förderung", "135.000 € / 112.500 €"],
      ],
    },
    s4Step3Label: "Schritt 3, CO₂-Deckel prüfen",
    s4Step3P:
      "Bei angenommen 30 t CO₂-Einsparung/Jahr und 2.600 €/t für KU ergibt der Deckel 78.000 €. Der niedrigere Wert ist bindend, hier also der CO₂-Deckel, nicht die Förderquote. Die Fördersumme kann in keinem Szenario über 135.000 € bzw. 112.500 € hinausgehen.",
    s4Step4Label: "Schritt 4, De-Minimis vs. AGVO",
    s4Step4P:
      "Bei 78.000 € liegt das Vorhaben deutlich unter der De-Minimis-Grenze von 300.000 €. De-Minimis ist hier die einfachere und attraktivere Variante, sofern im Unternehmensverbund über drei Jahre genügend Budget frei ist.",

    statNumber: "78.000 €",
    statText:
      "erreichbare BAFA-Förderung im Beispiel einer 500.000-€-Investition in eine UV-Flachbettdruckanlage (Modul 4 Premium), entspricht rund 15,6 % der Bruttoinvestition.",

    s5Title: "Was am Mehrkostenansatz schiefgehen kann",
    s5Intro:
      "Aus der Begleitung von Antragsverfahren lassen sich drei wiederkehrende Fehlerquellen ableiten:",
    s5E1Label: "1. Maschine ist nicht vergleichbar.",
    s5E1:
      " Die günstigste Maschine als Referenz zu wählen, um die Mehrkosten zu maximieren, ist bei Druckmaschinen meist nicht zielführend, da die Höchstförderquoten ohnehin selten erreichbar sind. Entscheidend ist die Vergleichbarkeit: Liegt die maximale Ausbringungsmenge der Referenz innerhalb der 10-%-Vorgabe der BAFA? Sind Abmessungen, Produktvielfalt und Typ vergleichbar?",
    s5E2Label: "2. Fehlende technische Nachweise.",
    s5E2:
      " Für die Referenzanlage müssen Datenblätter und Herstellerangaben vorliegen, mit denen die Einsparung belastbar nachgewiesen wird. Schätz- oder Anschlusswerte sind nur in enger Abstimmung mit der BAFA und der prüfenden Stelle eine Notlösung. Herstellerangaben sind verlässlich und beschleunigen die Prüfung deutlich.",
    s5E3Label: "3. Fehlendes oder fehlerhaftes Angebot.",
    s5E3:
      " Ein gültiges Angebot, ob in deutscher oder englischer Sprache, muss sich zwingend auf die als Referenz genutzte Maschine beziehen. Gerade bei Anbietern aus dem asiatischen Raum kommt häufig eine abweichende Variante zurück, was mindestens Nachfragen der BAFA auslöst.",

    s6Title: "Wann sich eine Voranfrage bei der BAFA lohnt",
    s6P:
      "In methodisch komplexen Fällen, etwa bei fehlender Bestandsanlage, ungewöhnlicher Bilanzgrenze oder unklarer Referenzmaschine, kann eine formelle Voranfrage sinnvoll sein. Damit lassen sich vorab klären: Ist die gewählte Referenzmaschine grundsätzlich akzeptabel? Welche Investitionsbestandteile fallen in die förderfähige Bilanzgrenze? Reicht die geplante Datengrundlage? Eine Voranfrage kostet kaum Vorlaufzeit und senkt das Ablehnungsrisiko erheblich.",

    s7Title: "Typischer Zeitablauf",
    s7P1:
      "Für eine sauber aufgesetzte Antragstellung über Modul 4 Premium sind realistisch:",
    s7Table: {
      headers: ["Phase", "Dauer"],
      rows: [
        ["Erstprüfung Förderfähigkeit", "1 Woche"],
        ["Einsparkonzept (zugelassener Energieberater)", "1 bis 2 Wochen"],
        ["Antragstellung", "1 bis 2 Tage"],
        ["BAFA-Prüfung", "8 bis 12 Wochen, ggf. mit Nachforderungen"],
        ["Förderbescheid", "nach Prüfung"],
        ["Auszahlung nach Verwendungsnachweis", "nach Umsetzung"],
      ],
    },
    s7P2:
      "Vom Erstkontakt bis zum Förderbescheid sind etwa drei bis vier Monate einzuplanen. Wichtig: Eine Bestellung darf erst nach Förderbescheid ausgelöst werden. Ein vorzeitiger Maßnahmenbeginn ist im Rahmen des KfW-295-Programms möglich, jedoch auf eigenes Risiko. Wird vor Förderbescheid bestellt, ist eine Förderung der Maschine ausgeschlossen.",

    pullQuote:
      "Die methodische Sauberkeit des Mehrkostenansatzes ist der wichtigste Hebel. Eine schlecht begründete Referenzmaschine kann eine sechsstellige Fördersumme kosten, eine sauber begründete sichert sie ab.",

    s8Title: "Was diese Beispielrechnung zeigt",
    s8P:
      "Mit einer Investition von 500.000 € lassen sich bei sauberer Antragstellung rund 78.000 € Förderung über Modul 4 Premium erreichen. Das wirkt zunächst weniger spektakulär als regionale Programme wie GRW, EFRE oder die SAB-Förderquoten in Sachsen. Entscheidend ist aber: Modul 4 ist bundesweit verfügbar und damit für Unternehmen außerhalb solcher Regionen die zentrale Förderoption. Über alle Fälle hinweg gilt, dass die Begründung der Referenzmaschine den Ausschlag gibt.",

    ctaEyebrow: "Ihr nächster Schritt",
    ctaTitle: "30-Minuten-Erstgespräch. Unverbindlich.",
    ctaBody:
      "Wir gehen Ihre geplante Investition gemeinsam durch und klären, welches Förderprogramm passt, ob ein Mehrkostenansatz trägt und worauf bei der Referenzmaschine zu achten ist, bevor der Antrag gestellt wird.",
    ctaPrimaryLabel: "30-Minuten-Erstgespräch buchen",
    ctaSecondaryLabel: "Lieber schreiben? Kontaktformular öffnen",

    authorSectionLabel: "Ihr Ansprechpartner",
    authorSectionTitle: "Im Erstgespräch klären wir Ihre BAFA-Ausgangslage",
    authorName: "Dominik Enger",
    authorRole: "Projektleiter Klimamanagement · EEW / BAFA-Anträge",
    authorBio:
      "Dominik Enger ist Projektleiter Klimamanagement bei der COzwei GmbH und begleitet Industrie- und Produktionsunternehmen bei der Beantragung von Effizienzförderungen, insbesondere der Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW). Sein Schwerpunkt liegt auf der methodisch sauberen Herleitung von Mehrkostenansätzen und Referenzmaschinen, dem häufigsten Knackpunkt im BAFA-Antragsverfahren.",
    authorCtaLabel: "Termin mit Dominik buchen",
    authorCtaDesc:
      "Kostenlos und unverbindlich. Wir klären den Mehrkostenansatz, die Wahl der Referenzmaschine und mögliche nächste Schritte vor der Antragstellung.",

    faqIntro:
      "Antworten auf die Fragen, die uns in BAFA-Erstgesprächen am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Modul 4 Basis und Premium?",
        a: "Basis bietet eine pauschale Förderung von 10 bis 15 % auf die förderfähigen Mehrkosten ohne detailliertes Einsparkonzept und mit schnellerem Antragsweg. Premium erfordert ein Einsparkonzept eines zugelassenen Energieberaters, ermöglicht dafür aber deutlich höhere Förderquoten (für KU bis 45 % im De-Minimis-Rahmen). Welche Variante sinnvoll ist, hängt von Investitionshöhe, Einsparpotenzial und Aufwandstoleranz ab.",
      },
      {
        q: "Was sind förderfähige Investitionsmehrkosten?",
        a: "Gefördert werden nicht die Gesamtkosten der neuen Anlage, sondern die Differenz zu einer funktional vergleichbaren Referenzmaschine mit geringerer Effizienz (Mehrkostenansatz). Bei 500.000 € Bruttoinvestition und einer Referenz von 200.000 € sind das 300.000 € förderfähige Mehrkosten.",
      },
      {
        q: "Wie wird die Referenzmaschine gewählt?",
        a: "Sie muss funktional vergleichbar, marktrepräsentativ, energetisch sauber dokumentiert und methodisch begründbar sein. Insbesondere muss die maximale Ausbringungsmenge innerhalb der 10-%-Vorgabe der BAFA liegen und Abmessungen, Produktvielfalt und Typ müssen vergleichbar sein. Die BAFA kann eine nicht tragfähig begründete Referenz zurückweisen.",
      },
      {
        q: "Was bedeutet der CO₂-Deckel?",
        a: "Die Förderung ist je eingesparter Tonne CO₂-Äquivalent gedeckelt (für KU 2.600 €/t, MU 2.200 €/t, GU 1.600 €/t). Maßgeblich ist immer der niedrigere Wert aus Förderquote und CO₂-Deckel. Im Beispiel ist der Deckel mit 78.000 € der bindende Faktor.",
      },
      {
        q: "Wann darf ich die Maschine bestellen?",
        a: "Erst nach Erhalt des Förderbescheids. Ein vorzeitiger Maßnahmenbeginn ist nur im Rahmen des KfW-295-Programms und auf eigenes Risiko möglich. Wird vor dem Bescheid bestellt, entfällt die Förderfähigkeit.",
      },
      {
        q: "Lohnt sich eine Voranfrage bei der BAFA?",
        a: "In methodisch komplexen Fällen ja. Sie klärt vorab, ob die Referenzmaschine akzeptabel ist, welche Bestandteile in die förderfähige Bilanzgrenze fallen und ob die Datengrundlage ausreicht, bei geringem Zeitaufwand und deutlich reduziertem Ablehnungsrisiko.",
      },
    ],

    disclaimer:
      "Hinweis: Diese Beispielrechnung dient der Illustration des BAFA EEW Modul 4 Premium. Tatsächliche Förderquoten, Investitionsmehrkosten und Bewilligungssummen sind im Einzelfall zu prüfen und können abweichen. Maßgeblich sind die jeweils gültigen Förderrichtlinien der BAFA sowie die individuelle Konstellation des Antragstellers.",
  },

  en: {
    heroKicker: "Practice observation · BAFA EEW Module 4 / funding",
    heroTitle:
      "When the incremental-cost approach decides: what a BAFA Module 4 grant really delivers for a printing press",
    metaDate: "June 2026",
    metaCategory: "Funding",

    intro:
      "For large machinery investments, the federal funding for energy and resource efficiency (EEW) is often the central nationwide option in Germany. With Module 4 Premium, however, the deciding factor is rarely the investment amount, but a single methodological question: which machine is set as the reference? This worked example for a UV flatbed printing press shows why the incremental-cost approach is the most important lever, and how a clean application makes the difference between a six-figure grant and a back-and-forth with the agency.",

    s1Title: "Starting point: investment in a flatbed printing press",
    s1P1:
      "A printing house in Bavaria plans to replace its existing UV flatbed printing press. The new machine is significantly more productive, delivers better print quality and more automation, and is at the same time more energy-efficient. The basics: gross investment 500,000 €, location Bavaria, small enterprise (SME), expected CO₂ reduction around 35 %, payback period over three years. A directly comparable existing asset does exist, but it is not cleanly comparable.",
    s1P2:
      "The central question: which machine do we set as the reference so that the application is approved and does not get stuck in a chain of follow-up requests?",

    s2Title: "Why Module 4 Premium is relevant for printing presses",
    s2P1:
      "EEW is the largest nationwide programme for investments in energy-efficient installations in Germany. Module 4 addresses energy- and resource-related optimisations, which is exactly the module that large printing-press investments fall into. There are two variants:",
    s2BulletBasisLabel: "Module 4 Basic",
    s2BulletBasis:
      ": flat-rate funding of 10 to 15 % on the eligible incremental costs, with at least a 15 % final-energy saving versus the reference. Faster application route, no detailed energy savings concept required.",
    s2BulletPremiumLabel: "Module 4 Premium",
    s2BulletPremium:
      ": higher funding rate through a detailed energy savings concept by a certified energy consultant. This is where the real funding leverage sits, but also the methodological complexity.",
    s2TableTitle: "Funding rates Module 4 Premium",
    s2Table: {
      headers: ["Company size", "De-minimis", "AGVO", "Funding cap"],
      rows: [
        ["Small enterprise (SME)", "45 %", "20 %", "2,600 €/tCO₂e"],
        ["Medium-sized enterprise", "35 %", "15 %", "2,200 €/tCO₂e"],
        ["Large enterprise", "25 %", "10 %", "1,600 €/tCO₂e"],
      ],
    },
    s2TableFooter: "Maximum grant amount: 20 million € per project.",

    s3Title: "The methodological core question: what is the reference machine?",
    s3P1:
      "Module 4 does not fund the absolute investment costs, but the incremental investment costs against a reference. There are two paths.",
    s3WegALabel: "Path A, existing-asset comparison:",
    s3WegA:
      " If a directly comparable existing asset exists, it can serve as the reference. For large-format UV flatbed printers a clean 1:1 comparison is often not possible in practice, because the new machine has a different design, processes different materials or covers a broader range of applications.",
    s3WegBLabel: "Path B, market reference machine (incremental-cost approach):",
    s3WegB:
      " The new machine is compared against an established market-standard machine of the same function with lower efficiency. The difference in investment costs is the eligible incremental cost. If no quote is available for the reference machine, the total investment cost (IGK) can be used instead, but the funding rate is then reduced by 50 %.",
    s3P2:
      "Choosing the comparison machine is methodologically decisive. It must be functionally comparable (same use cases), market-representative (neither the cheapest nor the highest-end model), cleanly documented from an energy perspective (manufacturer data, datasheets), and methodologically defensible. The BAFA can reject a poorly justified reference, one of the most frequent triggers for follow-up requests.",

    s4Title: "The worked example in detail",
    s4Step1Label: "Step 1, define the reference machine",
    s4Step1Table: {
      headers: ["Position", "Value"],
      rows: [
        ["Gross cost of the new machine", "500,000 €"],
        ["Comparable reference machine (market standard)", "200,000 €"],
        ["Incremental investment cost", "300,000 €"],
      ],
    },
    s4Step1After: "Eligible are not 500,000 € but the 300,000 € of incremental costs.",
    s4Step2Label: "Step 2, apply the funding rate",
    s4Step2P:
      "SME + Module 4 Premium + de-minimis = 45 % on the incremental costs (IMK). Using the IGK option for the comparison machine, the rate is 22.5 %.",
    s4Step2Table: {
      headers: ["Position", "Value"],
      rows: [
        ["Eligible incremental costs", "300,000 €"],
        ["Funding rate (SME, de-minimis)", "45 % (IMK) / 22.5 % (IGK)"],
        ["Maximum funding on paper", "135,000 € / 112,500 €"],
      ],
    },
    s4Step3Label: "Step 3, check the CO₂ cap",
    s4Step3P:
      "Assuming 30 t CO₂ savings per year and 2,600 €/t for SMEs, the cap is 78,000 €. The lower of the two values is binding, so the CO₂ cap, not the funding rate. The grant cannot exceed 135,000 € or 112,500 € in any scenario.",
    s4Step4Label: "Step 4, de-minimis vs. AGVO",
    s4Step4P:
      "At 78,000 €, the project sits well below the de-minimis ceiling of 300,000 €. De-minimis is the simpler and more attractive option here, provided enough headroom is available within the group of companies over three years.",

    statNumber: "78,000 €",
    statText:
      "achievable BAFA grant in the example of a 500,000 € investment in a UV flatbed printing press (Module 4 Premium), about 15.6 % of the gross investment.",

    s5Title: "What can go wrong with the incremental-cost approach",
    s5Intro:
      "From accompanying many applications, three recurring sources of error stand out:",
    s5E1Label: "1. The reference machine is not comparable.",
    s5E1:
      " Picking the cheapest machine as the reference in order to maximise incremental costs rarely works with printing presses, because the maximum funding rates are seldom reachable anyway. What matters is comparability: is the reference machine's maximum throughput within the BAFA's 10 % margin? Are dimensions, product range and type comparable?",
    s5E2Label: "2. Missing technical evidence.",
    s5E2:
      " For the reference machine, datasheets and manufacturer data must be available so the savings can be substantiated. Estimates or rule-of-thumb values are only a last-resort solution, agreed in close coordination with the BAFA and the reviewing body. Manufacturer data is reliable and accelerates review noticeably.",
    s5E3Label: "3. Missing or incorrect quote.",
    s5E3:
      " A valid quote, whether in German or English, must refer to the machine used as the reference. With suppliers from Asia in particular, a different variant often comes back, which at minimum triggers follow-up questions from the BAFA.",

    s6Title: "When a BAFA pre-enquiry is worth it",
    s6P:
      "In methodologically complex cases (missing existing asset, unusual system boundary, unclear reference machine) a formal pre-enquiry can be useful. It clarifies up front whether the chosen reference machine is acceptable in principle, which investment components fall within the eligible boundary, and whether the planned data foundation is sufficient. A pre-enquiry takes little lead time and substantially reduces the risk of rejection.",

    s7Title: "Typical timeline",
    s7P1: "For a properly set up Module 4 Premium application, realistic timings are:",
    s7Table: {
      headers: ["Phase", "Duration"],
      rows: [
        ["Initial eligibility check", "1 week"],
        ["Energy savings concept (certified energy consultant)", "1 to 2 weeks"],
        ["Submission of the application", "1 to 2 days"],
        ["BAFA review", "8 to 12 weeks, possibly with follow-up requests"],
        ["Funding decision", "after review"],
        ["Payout after proof of use", "after implementation"],
      ],
    },
    s7P2:
      "From first contact to funding decision, plan for about three to four months. Important: the order may only be placed after the funding decision has been received. An early start is possible under the KfW 295 programme, but at your own risk. If an order is placed before the decision, funding for the machine is excluded.",

    pullQuote:
      "Methodological cleanliness in the incremental-cost approach is the most important lever. A poorly justified reference machine can cost a six-figure grant; a cleanly justified one secures it.",

    s8Title: "What this worked example shows",
    s8P:
      "With an investment of 500,000 €, a clean application can secure roughly 78,000 € in funding via Module 4 Premium. At first glance this looks less spectacular than regional programmes such as GRW, EFRE or the SAB rates in Saxony. The key point is: Module 4 is available nationwide, which makes it the central funding option for companies outside such regions. Across all cases, the justification of the reference machine tips the balance.",

    ctaEyebrow: "Your next step",
    ctaTitle: "30-minute intro call. No obligation.",
    ctaBody:
      "We walk through your planned investment together and clarify which funding programme fits, whether an incremental-cost approach holds, and what to watch out for with the reference machine, before the application is submitted.",
    ctaPrimaryLabel: "Book a 30-minute intro call",
    ctaSecondaryLabel: "Prefer to write? Open the contact form",

    authorSectionLabel: "Your contact",
    authorSectionTitle: "In a first call we clarify your BAFA starting point",
    authorName: "Dominik Enger",
    authorRole: "Project Lead Climate Management · EEW / BAFA applications",
    authorBio:
      "Dominik Enger is project lead climate management at COzwei GmbH and supports industrial and manufacturing companies in applying for efficiency funding, in particular the federal funding for energy and resource efficiency in industry (EEW). His focus is the methodologically clean derivation of incremental-cost approaches and reference machines, the most frequent sticking point in the BAFA application process.",
    authorCtaLabel: "Book a slot with Dominik",
    authorCtaDesc:
      "Free of charge, no obligation. We clarify the incremental-cost approach, the choice of reference machine and possible next steps before the application is submitted.",

    faqIntro:
      "Answers to the questions we are most often asked in BAFA intro calls.",
    faqs: [
      {
        q: "What is the difference between Module 4 Basic and Premium?",
        a: "Basic offers flat-rate funding of 10 to 15 % on the eligible incremental costs without a detailed energy savings concept and with a faster application route. Premium requires an energy savings concept from a certified energy consultant, but allows significantly higher funding rates (up to 45 % for SMEs in the de-minimis regime). Which variant is sensible depends on the investment size, the savings potential and the tolerance for paperwork.",
      },
      {
        q: "What are eligible incremental investment costs?",
        a: "It is not the total cost of the new machine that is funded, but the difference to a functionally comparable reference machine with lower efficiency (incremental-cost approach). With a 500,000 € gross investment and a 200,000 € reference, this gives 300,000 € of eligible incremental costs.",
      },
      {
        q: "How is the reference machine chosen?",
        a: "It must be functionally comparable, market-representative, cleanly documented in energetic terms and methodologically defensible. In particular, the maximum throughput must sit within the BAFA's 10 % margin and dimensions, product range and type must be comparable. The BAFA can reject a poorly justified reference.",
      },
      {
        q: "What does the CO₂ cap mean?",
        a: "The grant is capped per tonne of CO₂ equivalent saved (2,600 €/t for SMEs, 2,200 €/t for medium-sized companies, 1,600 €/t for large companies). The lower of the two values from funding rate and CO₂ cap is binding. In the example the cap of 78,000 € is the binding factor.",
      },
      {
        q: "When can I order the machine?",
        a: "Only after the funding decision has been received. An early start is possible under the KfW 295 programme, at your own risk. If the order is placed before the decision, eligibility is lost.",
      },
      {
        q: "Is a BAFA pre-enquiry worth it?",
        a: "In methodologically complex cases, yes. It clarifies in advance whether the reference machine is acceptable, which components fall within the eligible boundary and whether the data foundation is sufficient, with little lead time and a markedly reduced rejection risk.",
      },
    ],

    disclaimer:
      "Note: This worked example illustrates BAFA EEW Module 4 Premium. Actual funding rates, incremental costs and grant sums must be assessed case by case and may differ. The applicable BAFA funding guidelines and the individual setup of the applicant prevail.",
  },

  pt: {
    heroKicker: "Observação de prática · BAFA EEW Módulo 4 / apoio",
    heroTitle:
      "Quando o método de custos incrementais decide: o que um apoio BAFA Módulo 4 realmente dá para uma máquina de impressão",
    metaDate: "Junho de 2026",
    metaCategory: "Apoios",

    intro:
      "Em investimentos de grande porte em maquinaria, o apoio federal alemão para eficiência energética e de recursos (EEW) é, muitas vezes, a opção nacional central. No Módulo 4 Premium, porém, o que decide raramente é o montante investido, mas uma única questão metodológica: qual a máquina considerada como referência? Este exemplo prático, com uma impressora flatbed UV, mostra por que o método dos custos incrementais é a alavanca mais importante e como uma candidatura bem feita marca a diferença entre um ciclo de pedidos adicionais e um apoio de seis dígitos.",

    s1Title: "Ponto de partida: investimento numa impressora flatbed",
    s1P1:
      "Uma tipografia na Baviera planeia substituir a sua impressora flatbed UV existente. A nova máquina é significativamente mais produtiva, oferece melhor qualidade de impressão e mais automação e é ao mesmo tempo mais eficiente em termos energéticos. Dados essenciais: investimento bruto 500.000 €, localização Baviera, pequena empresa (PME), redução de CO₂ esperada cerca de 35 %, retorno em mais de três anos. Existe um equipamento existente diretamente comparável, mas não de forma limpa.",
    s1P2:
      "A pergunta central: qual a máquina que definimos como referência para que a candidatura seja aprovada e não entre num ciclo de pedidos adicionais?",

    s2Title: "Por que o Módulo 4 Premium é relevante para máquinas de impressão",
    s2P1:
      "O EEW é o maior programa nacional para investimentos em instalações eficientes em termos energéticos. O Módulo 4 cobre otimizações ligadas a energia e recursos, ou seja, exatamente o módulo onde se enquadram os grandes investimentos em máquinas de impressão. Existem duas variantes:",
    s2BulletBasisLabel: "Módulo 4 Base",
    s2BulletBasis:
      ": apoio fixo de 10 a 15 % sobre os custos incrementais elegíveis, com pelo menos 15 % de poupança de energia final face à referência. Via de candidatura mais rápida, sem exigência de um plano detalhado de poupança.",
    s2BulletPremiumLabel: "Módulo 4 Premium",
    s2BulletPremium:
      ": taxa de apoio mais elevada com um plano de poupança detalhado de um consultor energético habilitado. É aqui que estão as alavancas reais de apoio, mas também a complexidade metodológica.",
    s2TableTitle: "Taxas de apoio Módulo 4 Premium",
    s2Table: {
      headers: ["Dimensão da empresa", "De-minimis", "AGVO", "Limite de apoio"],
      rows: [
        ["Pequena empresa (PME)", "45 %", "20 %", "2.600 €/tCO₂e"],
        ["Média empresa", "35 %", "15 %", "2.200 €/tCO₂e"],
        ["Grande empresa", "25 %", "10 %", "1.600 €/tCO₂e"],
      ],
    },
    s2TableFooter: "Montante máximo de apoio: 20 milhões € por projeto.",

    s3Title: "A questão metodológica central: qual é a máquina de referência?",
    s3P1:
      "O Módulo 4 não apoia os custos totais de investimento, mas sim os custos incrementais face a uma referência. Existem dois caminhos.",
    s3WegALabel: "Caminho A, comparação com o equipamento existente:",
    s3WegA:
      " Se houver um equipamento existente diretamente comparável, pode servir como referência. Em impressoras flatbed UV de grande formato, uma comparação 1:1 limpa é, na prática, muitas vezes impossível, porque a nova máquina tem outra construção, processa outros materiais ou cobre uma aplicação mais ampla.",
    s3WegBLabel: "Caminho B, máquina de referência no mercado (método de custos incrementais):",
    s3WegB:
      " A comparação é feita contra uma máquina padrão consolidada no mercado, com a mesma função e eficiência inferior. A diferença nos custos de investimento são os custos incrementais elegíveis. Se não houver proposta para a máquina de referência, podem usar-se em alternativa os custos totais de investimento (IGK), mas a taxa de apoio é então reduzida em 50 %.",
    s3P2:
      "A escolha da máquina de comparação é metodologicamente decisiva. Ela deve ser funcionalmente comparável (mesmos casos de uso), representativa do mercado (nem o modelo mais barato nem o de gama mais alta), bem documentada do ponto de vista energético (dados do fabricante, fichas técnicas) e metodologicamente defensável. A BAFA pode rejeitar uma referência mal fundamentada, uma das causas mais frequentes de pedidos adicionais.",

    s4Title: "O exemplo prático em detalhe",
    s4Step1Label: "Passo 1, definir a máquina de referência",
    s4Step1Table: {
      headers: ["Item", "Valor"],
      rows: [
        ["Custo bruto da nova máquina", "500.000 €"],
        ["Máquina de referência comparável (padrão de mercado)", "200.000 €"],
        ["Custos incrementais de investimento", "300.000 €"],
      ],
    },
    s4Step1After: "Elegíveis não são 500.000 €, mas sim os 300.000 € de custos incrementais.",
    s4Step2Label: "Passo 2, aplicar a taxa de apoio",
    s4Step2P:
      "PME + Módulo 4 Premium + de-minimis = 45 % sobre os custos incrementais (IMK). Usando a opção IGK para a máquina de comparação, a taxa é de 22,5 %.",
    s4Step2Table: {
      headers: ["Item", "Valor"],
      rows: [
        ["Custos incrementais elegíveis", "300.000 €"],
        ["Taxa de apoio (PME, de-minimis)", "45 % (IMK) / 22,5 % (IGK)"],
        ["Apoio máximo no papel", "135.000 € / 112.500 €"],
      ],
    },
    s4Step3Label: "Passo 3, verificar o limite de CO₂",
    s4Step3P:
      "Assumindo 30 t de CO₂ poupadas por ano e 2.600 €/t para PME, o limite é de 78.000 €. O valor mais baixo é o que vincula, ou seja, o limite de CO₂ e não a taxa de apoio. Em nenhum cenário o apoio pode ultrapassar 135.000 € ou 112.500 €.",
    s4Step4Label: "Passo 4, de-minimis vs. AGVO",
    s4Step4P:
      "Com 78.000 €, o projeto fica bem abaixo do limite de de-minimis de 300.000 €. A via de-minimis é aqui a opção mais simples e mais atrativa, desde que haja margem suficiente no grupo de empresas ao longo de três anos.",

    statNumber: "78.000 €",
    statText:
      "apoio BAFA alcançável no exemplo de um investimento de 500.000 € numa impressora flatbed UV (Módulo 4 Premium), cerca de 15,6 % do investimento bruto.",

    s5Title: "O que pode correr mal no método dos custos incrementais",
    s5Intro:
      "Do acompanhamento de candidaturas resultam três fontes de erro recorrentes:",
    s5E1Label: "1. A máquina não é comparável.",
    s5E1:
      " Escolher a máquina mais barata como referência para maximizar os custos incrementais raramente funciona em máquinas de impressão, porque as taxas máximas de apoio dificilmente são atingíveis. O que conta é a comparabilidade: o débito máximo da referência está dentro da margem de 10 % da BAFA? As dimensões, a variedade de produtos e o tipo são comparáveis?",
    s5E2Label: "2. Falta de provas técnicas.",
    s5E2:
      " Para a máquina de referência têm de existir fichas técnicas e dados do fabricante que sustentem a poupança. Estimativas ou valores de ligação só são uma solução de recurso em estreita articulação com a BAFA e a entidade verificadora. Os dados do fabricante são fiáveis e aceleram visivelmente a análise.",
    s5E3Label: "3. Proposta em falta ou incorreta.",
    s5E3:
      " Uma proposta válida, em alemão ou inglês, tem obrigatoriamente de se referir à máquina usada como referência. Sobretudo com fornecedores asiáticos, é frequente vir de volta uma variante diferente, o que desencadeia no mínimo pedidos adicionais da BAFA.",

    s6Title: "Quando vale a pena um pedido prévio à BAFA",
    s6P:
      "Em casos metodologicamente complexos (sem equipamento existente, fronteira de balanço invulgar, máquina de referência pouco clara) um pedido prévio formal pode fazer sentido. Permite esclarecer antecipadamente: a máquina de referência escolhida é, em princípio, aceitável? Que componentes do investimento entram na fronteira elegível? A base de dados prevista é suficiente? Um pedido prévio quase não atrasa o cronograma e reduz consideravelmente o risco de rejeição.",

    s7Title: "Cronograma típico",
    s7P1: "Para uma candidatura ao Módulo 4 Premium bem montada são realistas:",
    s7Table: {
      headers: ["Fase", "Duração"],
      rows: [
        ["Análise inicial de elegibilidade", "1 semana"],
        ["Plano de poupança (consultor energético habilitado)", "1 a 2 semanas"],
        ["Submissão da candidatura", "1 a 2 dias"],
        ["Análise da BAFA", "8 a 12 semanas, eventualmente com pedidos adicionais"],
        ["Decisão de apoio", "após análise"],
        ["Pagamento após prova de utilização", "após execução"],
      ],
    },
    s7P2:
      "Do primeiro contacto até à decisão de apoio, conte com cerca de três a quatro meses. Importante: a encomenda só pode ser efetuada após a receção da decisão. Um início antecipado é possível ao abrigo do programa KfW 295, mas por conta e risco. Se a encomenda for feita antes da decisão, fica excluída do apoio.",

    pullQuote:
      "O rigor metodológico do método de custos incrementais é a alavanca mais importante. Uma máquina de referência mal fundamentada pode custar um apoio de seis dígitos; uma bem fundamentada assegura-o.",

    s8Title: "O que este exemplo prático mostra",
    s8P:
      "Com um investimento de 500.000 €, uma candidatura bem feita consegue cerca de 78.000 € de apoio pelo Módulo 4 Premium. À primeira vista parece menos espetacular do que programas regionais como GRW, EFRE ou as taxas SAB na Saxónia. Mas o ponto decisivo: o Módulo 4 está disponível em todo o país, sendo por isso a opção de apoio central para empresas fora dessas regiões. Em todos os casos, é a justificação da máquina de referência que pesa.",

    ctaEyebrow: "O seu próximo passo",
    ctaTitle: "Conversa inicial de 30 minutos. Sem compromisso.",
    ctaBody:
      "Analisamos consigo o investimento planeado e esclarecemos qual o programa de apoio adequado, se um método de custos incrementais é viável e o que ter em conta na máquina de referência antes de submeter a candidatura.",
    ctaPrimaryLabel: "Agendar conversa inicial de 30 minutos",
    ctaSecondaryLabel: "Prefere escrever? Abrir o formulário de contacto",

    authorSectionLabel: "O seu interlocutor",
    authorSectionTitle: "Numa primeira conversa esclarecemos a sua situação BAFA",
    authorName: "Dominik Enger",
    authorRole: "Project Lead Climate Management · candidaturas EEW / BAFA",
    authorBio:
      "Dominik Enger é Project Lead Climate Management na COzwei GmbH e acompanha empresas industriais e de produção na candidatura a apoios à eficiência, em particular ao apoio federal para eficiência energética e de recursos na indústria (EEW). O seu foco é a derivação metodologicamente limpa do método de custos incrementais e da máquina de referência, o ponto mais sensível no procedimento de candidatura à BAFA.",
    authorCtaLabel: "Marcar um horário com Dominik",
    authorCtaDesc:
      "Gratuito e sem compromisso. Esclarecemos o método de custos incrementais, a escolha da máquina de referência e os próximos passos possíveis antes da submissão da candidatura.",

    faqIntro:
      "Respostas às perguntas que mais nos colocam nas primeiras conversas BAFA.",
    faqs: [
      {
        q: "Qual é a diferença entre o Módulo 4 Base e o Premium?",
        a: "O Base oferece um apoio fixo de 10 a 15 % sobre os custos incrementais elegíveis sem plano detalhado de poupança e com uma via de candidatura mais rápida. O Premium exige um plano de poupança elaborado por um consultor energético habilitado, mas permite taxas de apoio claramente mais elevadas (até 45 % para PME no regime de-minimis). A variante adequada depende do montante de investimento, do potencial de poupança e da tolerância ao esforço administrativo.",
      },
      {
        q: "O que são custos incrementais de investimento elegíveis?",
        a: "Não é apoiado o custo total da nova instalação, mas a diferença para uma máquina de referência funcionalmente comparável com menor eficiência (método dos custos incrementais). Com um investimento bruto de 500.000 € e uma referência de 200.000 €, isto resulta em 300.000 € de custos incrementais elegíveis.",
      },
      {
        q: "Como se escolhe a máquina de referência?",
        a: "Tem de ser funcionalmente comparável, representativa do mercado, energeticamente bem documentada e metodologicamente defensável. Em particular, o débito máximo tem de estar dentro da margem de 10 % da BAFA e as dimensões, a variedade de produtos e o tipo têm de ser comparáveis. A BAFA pode rejeitar uma referência mal fundamentada.",
      },
      {
        q: "O que significa o limite de CO₂?",
        a: "O apoio está limitado por tonelada de CO₂ equivalente poupada (2.600 €/t para PME, 2.200 €/t para médias e 1.600 €/t para grandes). Vale sempre o menor de dois valores entre taxa de apoio e limite de CO₂. No exemplo, o limite de 78.000 € é o fator vinculativo.",
      },
      {
        q: "Quando posso encomendar a máquina?",
        a: "Só após a receção da decisão de apoio. Um início antecipado é possível ao abrigo do programa KfW 295, por conta e risco. Se a encomenda for feita antes da decisão, perde-se a elegibilidade.",
      },
      {
        q: "Vale a pena um pedido prévio à BAFA?",
        a: "Em casos metodologicamente complexos, sim. Permite esclarecer antecipadamente se a máquina de referência é aceitável, que componentes entram na fronteira elegível e se a base de dados é suficiente, com pouco esforço temporal e risco de rejeição claramente reduzido.",
      },
    ],

    disclaimer:
      "Nota: este exemplo prático serve para ilustrar o BAFA EEW Módulo 4 Premium. As taxas de apoio, os custos incrementais e os montantes aprovados reais devem ser verificados caso a caso e podem divergir. Prevalecem as orientações de apoio da BAFA em vigor a cada momento e a configuração individual do candidato.",
  },
};
