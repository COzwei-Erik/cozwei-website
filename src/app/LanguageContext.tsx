'use client';

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "de" | "en" | "pt";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "de",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    // On mount, check localStorage or browser language
    const stored = typeof window !== 'undefined' ? localStorage.getItem("lang") : null;
    if (stored === "de" || stored === "en" || stored === "pt") {
      setLanguageState(stored);
    } else {
      const browserLang = (navigator.language || navigator.languages[0] || "de").slice(0,2).toLowerCase();
      if (["de","en","pt"].includes(browserLang)) {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("lang", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Centralized translations for the whole app
export const translations = {
  de: {
    // Example keys, to be expanded for all pages
    heroTitle: "Wir machen Klimaziele möglich",
    heroSubtitle: "Unser Ziel ist es Unternehmen und Institutionen zu befähigen nachhaltiger zu wirtschaften und Klimaziele zu erreichen",
    learnMore: "Mehr erfahren",
    solutions: "Lösungen",
    solutionsDesc: "Wir als Umweltdienstleister, bieten unseren Kunden diverse Beratungs- und Implementierungslösungen an, um Nachhaltigkeits- und Klimastrategien erfolgreich umzusetzen.",
    sustainability: "Nachhaltigkeit",
    sustainabilityDesc: "Implementierung von Nachhaltigkeitsstrategien auf Unternehmensebene",
    decarbonization: "Dekarbonisierung",
    decarbonizationDesc: "Ermöglichung von CO₂-Reduktion entlang der gesamten Wertschöpfungskette",
    measures: "Maßnahmen",
    measuresDesc: "Umsetzung von Dekarbonisierungszielen von PV-Anlagen bis hin zu Gebäudesanierungen",
    about: "Über uns",
    contact: "Kontakt",
    customers: "Unsere Kunden",
    andManyMore: "...und viele mehr!",
    contactUs: "Kontaktieren Sie uns",
    name: "Name",
    namePlaceholder: "Ihr Name",
    email: "E-Mail",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    company: "Unternehmen (optional)",
    companyPlaceholder: "Ihr Unternehmen",
    message: "Nachricht",
    messagePlaceholder: "Ihre Nachricht",
    send: "Absenden",
    privacy: "Datenschutz",
    imprint: "Impressum",
    linkedin: "LinkedIn",
    sustainabilityHeroTitle: "Nachhaltigkeit",
    sustainabilityHeroSubtitle: "Wir unterstützen bei der Implementierung des Nachhaltigkeitsmanagements von Strategieentwicklung über Nachhaltigkeitsinitiativen bis zu Reporting und ESG-Ratings.",
    sustainabilitySectionTitle: "Zukunftsgerichtet und nachhaltig",
    sustainabilitySectionSubtitle: "Von Sustainable Development Goals bis zur ESG-Strategie helfen wir Ihnen Ihr Unternehmen nachhaltig, glaubhaft und transparent auszurichten.",
    sdgCardTitle: "Sustainable Development Goals",
    sdgCardDesc: "Wir identifizieren mit Ihnen, welche der 17 Ziele für nachhaltige Entwicklung der UN am besten zu Ihrem Unternehmen passen und unterstützen bei der Implementierung in Ihr Tagesgeschäft.",
    esgCardTitle: "ESG-Ratings",
    esgCardDesc: "Die Implementierung einer ESG-Strategie in eines der Werkzeuge, Ihr Unternehmen nachhaltig auszurichten. Wir identifizieren Ihre Stärken in den Bereichen Environmental, Social und Governance und bauen diese weiter aus.",
    decarbonHeroTitle: "Dekarbonisierung",
    decarbonHeroSubtitle: "Wir ermöglichen die CO₂-Reduktion von Unternehmen & Institutionen zur Erreichung der globalen 1,5-Grad-Klimaziele. Dazu zählt die Berechnung, Planung, Reduktion und das Reporting.",
    decarbonSectionTitle: "Klimaziele erreichen",
    decarbonSectionSubtitle: "Durch unserem bewährten und zertifizierbaren vier Schritte Plan, erreichen Sie Ihre Klimaziele. Von der Berechnung der Ist-Emissionen bis hin zum Produktionsplan und Kommunikation decken wir alles ab.",
    decarbonCard1Title: "Transformationskonzept",
    decarbonCard1Desc: "Je deutschen Standort bis zu 90.000€ Förderung zur Erstellung eines Transformationskonzeptes zur erreichung der Klimaneutralität",
    decarbonCard2Title: "Klimaschutzkonzept",
    decarbonCard2Desc: "Unterstützung für Institutionen zur Erstellung eines durch die nationale Klimaschutzinitiative gefördertes Klimaschutzkonzept",
    decarbonCard3Title: "ESRS E1",
    decarbonCard3Desc: "Wir unterstützen bei der Erhebung, Berechnung und Vorbereitung der Berichterstattung",
    decarbonStepsTitle: "In 4 Schritten zur Klimaneutralität",
    decarbonStep1Title: "Gesamtunternehmensklimabilanz (CCF THG-Bilanz)",
    decarbonStep1Desc: "Die Berechnung der Emissionen bildet die Basis aller Dekarbonisierungsvorhaben. Wir berechnen Ihnen nach der wissenschaftlich anerkannten Methoden des GHG-Protokolls Ihre direkten und indirekten Emissionen (Scope 1, 2 & 3). Von einzelnen Produkten bis zu Ihrem Gesamtunternehmen decken wir alle Emissionsbilanzierungen ab.",
    decarbonStep2Title: "Dekarbonisierungsmaßnahmen ableiten",
    decarbonStep2Desc: "Auf Basis der Bilanz können unternehmens- oder produktspezifische Dekarbonisierungsmaßnahmen abgeleitet werden. Dies kann Maßnahmen in Bezug auf Gebäude, Fuhrparks, Produktionen oder Produkte umfassen. Dabei wird nach Kosten, Emissionshebel und Umsetzungszeitraum unterschieden. Dieses Vorgehen erlaubt Ihnen, Ihre Entscheidungen nachhaltig und kostenorientiert zu treffen.",
    decarbonStep3Title: "Zieljahr zur Klimaneutralität",
    decarbonStep3Desc: "Aus der Summe aller realistisch umsetzbaren Maßnahmen kann ein Zieljahr zur Klimaneutralität abgeleitet werden. Dabei werden die Gesamtkosten, die Emissionsreduzierung und die Kompensationskosten herausgestellt.",
    decarbonStep4Title: "Ziele kommunizieren und reporten",
    decarbonStep4Desc: "Wir unterstützen Sie bei der Zertifizierung und Kommunikation Ihrer Erfolge. Beispielsweise bei der Aufbereitung von Klimadaten für ESG-Ratings oder Nachhaltigkeitsberichte, beim jährlichen CDP-Reporting und der Einreichung von SBTi Zielen oder bei der Beantwortung von Kundenanfragen (B2B) zum Klimaschutz.",
    measuresHeroTitle: "Implementierung von Maßnahmen",
    measuresHeroSubtitle: "Bei uns gilt das Motto: Wir sind erst fertig, wenn die Handwerker das Gelände verlassen.",
    measuresSectionTitle: "Maßnahmen",
    measuresSectionSubtitle: "Wir sind Experten in der Ableitung von Dekarbonisierungsmaßnahmen, aber wir wollen auch weiter denken. Die weltweiten Klimaziele können nur erreicht werden, wenn Theorie und Praxis Hand in Hand gehen. Deshalb betreuen wir mit unserem starken Netzwerk von Partner Ihre Vorhaben bis zur finalen Umsetzung.",
    measuresCard1Title: "Förderungen",
    measuresCard1Desc: "Förderungen sind essenziell, um Investitionen in klimafreundliche Technologien wirtschaftlich attraktiv zu machen. Sie helfen insbesondere kleinen und mittleren Unternehmen, notwendige Maßnahmen schneller umzusetzen.",
    measuresCard2Title: "Unsere Partner",
    measuresCard2Desc: "Mit unseren Partnern setzen wir Klimaschutzmaßnahmen europaweit erfolgreich um. So ermöglichen wir es unseren Kunden, ihre Klimaziele effizient und nachhaltig zu erreichen.",
    measuresLearnMore: "Mehr erfahren",
    climateFundingTitle: "Klima-Förderungen",
    climateFundingSubtitle: "Gemeinsam mit unseren Umsetzungspartnern haben wir einen Klima-Förderkatalog entwickelt, welcher die deutsche Förderlandschaft für Klimaförderungen aufzeigt und die Umsetzung kostengünstiger gestaltet.",
    acceptPrivacy: "Ich akzeptiere die ",
    privacyPolicy: "Datenschutzerklärung",
    partnersSectionTitle: "Unsere Partner",
    partnerSoleraTitle: "Solera Stuttgart GmbH",
    partnerSoleraDesc: "Unsere Partner von Solera Stuttgart GmbH planen und installieren schlüsselfertige Photovoltaikanlagen mit einem klaren Fokus auf Wirtschaftlichkeit und nachhaltiger Wertschöpfung, mit dem Ziel, die Energiewende voranzutreiben.",
    partnerEffizienzTitle: "Effizienzpioniere",
    partnerEffizienzDesc: "Mit ihrem Expertenteam zertifizierter KfW Energieberater helfen die Effizienzpioniere dabei, Immobilien klimaeffizient zu sanieren – maximale Förderung inklusive. Gemeinsam treten wir an, einen messbaren Beitrag zum Klimawandel zu leisten.",
    partnerGrundsteineTitle: "Grundsteine GmbH",
    partnerGrundsteineDesc: "Die Grundsteine GmbH ist als Softwareunternehmen auf die Digitalisierung von Förderprozessen spezialisiert. Mit ihren Softwareprodukten digitalisieren und beschleunigen sie die Energiewende. Ob Energieberatung oder digitale Förderanträge – mit ihren Werkzeugen werden Prozesse effizienter und einfacher.",
    partnerEnvoriaTitle: "Envoria",
    partnerEnvoriaDesc: "Envoria ist ein Softwareanbieter für die Vereinfachung von ESG-Reportings. Von vorkonfigurierten Reporting-KPIs und Vorlagen bis hin zur Verwaltung von Benutzerfunktionen, Rechten und Aufgaben – Envoria bietet die Funktionen, die Sie brauchen.",
    partnerFinmatchTitle: "Finmatch",
    partnerFinmatchDesc: "Als Finanzierungsunternehmen unterstützt Finmatch Unternehmen bei der Finanzierung und Verwirklichung von Klimazielen. Mit mehr als 800 Finanzierungspartnern haben sie das größte Finanzierungsnetzwerk für Mittelständler in der DACH-Region.",
    partnerRemzeroTitle: "REM ZERO GmbH",
    partnerRemzeroDesc: "Die REM ZERO GmbH ist unser Joint-Venture, das die Welt der Finanzen und Nachhaltigkeit zusammenbringt, um die Transformation real werden zu lassen.",
    partnerMicrosoftTitle: "Microsoft",
    partnerMicrosoftDesc: "Als Teil des Microsoft Startup Founder Hubs, können wir mit Hilfe von Microsoft, deren Anwendungen und dem Netzwerk Software aufbauen, welches das Ableiten von realistischen Klimamaßnahmen und die Dekarbonisierung bei unseren Kunden vereinfacht und automatisiert.",
    aboutHeroTitle: "Wer sind wir",
    aboutHeroDesc: "Bei COzwei fokussieren wir uns auf Lösungen und die Umsetzung von Klimastrategien, denn es mangelt aktuell weniger an Klimazielen, sondern eher an der konkreten und vermeidungskostenoptimierten Reduktion von Emissionen bei Unternehmen und Institutionen.",
    aboutHeroButton: "Mehr erfahren",
    aboutMapTitle: "Mit uns Klimaziele möglich machen",
    aboutMapSubtitle: "Zwei Standorte in Stuttgart und Lissabon - ein Team für mehr unternehmerische Nachhaltigkeit",
    aboutTeamTitle: "Ein starkes Team für mehr Klimaschutz",
    teamRoleChristian: "GESCHÄFTSFÜHRER",
    teamRoleErik: "GESCHÄFTSFÜHRER",
    teamRoleAlina: "VERWALTUNG",
    teamRoleDominik: "PROJEKTLEITER KLIMAMANAGEMENT",
    teamRoleLouis: "KLIMAMANAGEMENT",
    teamRoleRonan: "ENERGIEBERATUNG",
    aboutBenefitsTitle: "Mit uns Klimaziele möglich machen",
    aboutBenefit1: "Start-up-Atmosphäre",
    aboutBenefit2: "Urban Sports Club",
    aboutBenefit3: "Kostenlose Snacks und Getränke",
    aboutBenefit4: "Flexible und mobile Arbeit",
    aboutBenefit5: "Teamevents",
    aboutBenefit6: "Internationales Umfeld",
    aboutApplyButton: "JETZT BEWERBEN",
    transfHeroTitle: "Klima Transformationspläne – BAFA Modul 5",
    transfHeroDesc: "Je deutschen Standort bis zu 90.000€ Förderung für Dienstleistungen zur Unterstützung bei der Planung und Umsetzung einer Transformation hin zur Treibhausgasneutralität von Unternehmen.",
    transfInfoTitle: "Mit geförderten Klima-Transformationsplänen Kosten senken",
    transfInfoDesc: "Transparenzanforderungen zum Corporate Carbon Footprint (THG-Bilanz) von Kunden oder künftig auch zunehmend von Gesetzgebern in Europa (CSRD Nachhaltigkeitsberichtserstattung) werden steigen.\n\nDas Förderprogram der BAFA (Modul 5) zur Energie- und Ressourceneffizienz in der Wirtschaft setzt hier an und fördert bis zu 70% der Dienstleistungskosten für einen standortbezogenen Transformationsplan hin zur Treibhausgasneutralität.\n\nFür unsere Dienstleistungen können Sie die Förderung erhalten und erreichen damit Ihre Klimaziele.",
    transfStepsTitle: "Vier Schritte zur nachhaltigen Transformation",
    transfStep1Title: "BAFA 5 Antragstellung",
    transfStep1Desc: "Aufbereitung aller Unterlagen und Unterstützung bei der Antragseinreichung, für den Erhalt der gesamten Fördersumme. Die Umsetzung erfolgt nach der Förderungsbewilligung, für die optimale Erkennbarkeit der realen Kosten.",
    transfStep2Title: "Erstellung CO₂-Bilanz",
    transfStep2Desc: "Die Basis aller Transformation zur CO₂-Neutralität ist die Erstellung der CO₂-Bilanz (CCF). Alle CO₂-Emissionen, welche im Unternehmen entlang der Wertschöpfungskette entstehen, werden erfasst und gemäß international Standards (ISO 14064) bilanziert.",
    transfStep3Title: "Maßnahmenableitung",
    transfStep3Desc: "Auf Basis der CO₂-Bilanz werden die größten Emissionstreiber identifiziert und Reduktionsmaßnahmen abgeleitet. Diese weisen auf, wie viele Emissionen eingespart werden, was die Kosten zur Umsetzung sein werden, welche Finanzierungen und Förderungen möglich sind und wann eine realistische Umsetzung an geplant werden kann.",
    transfStep4Title: "Zielsetzung und Strategie",
    transfStep4Desc: "Durch die Summe aller umsetzbarer Maßnahmen kann ein Zieljahr zur Klimaneutralität abgeleitet werden und verschiedenste Szenarien zur Erreichung aufgezeigt werden. Diese Szenarien können je nach Ambitionslevel zur Maßnahmenumsetzung unterschiedlich ausfallen und befähigen dazu die wirtschaftlichste Option zu wählen.",
    transfEligTitle: "Welche Unternehmen können gefördert werden?",
    transfEligDesc: "Unternehmen mit Produktionsstandorten in Deutschland sind förderfähig je Standort nach der Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW). Die Förderhöhe ist abhängig von der Unternehmensgröße. Gerne führen wir unverbindlich einen Schnellcheck zur möglichen Fördersumme durch. Generell gilt:",
    transfEligList1: "Unternehmen ohne KMU-Status: 40-50 Prozent",
    transfEligList2: "Mittlere Unternehmen (MU): 50-60 Prozent",
    transfEligList3: "Kleine Unternehmen (KU): 60-70 Prozent",
    transfEligMax: "Bis zu einer Höhe von maximal 90.000€",
    transfEligSource: "Quelle: BAFA (Stand 04.06.2024)",
    // ... add more keys as needed
    klimaHeroTitle: "Jetzt integriertes Klimakonzept erstellen",
    klimaHeroDesc: "Wir unterstützen Institutionen ihr von der nationalen Klimaschutzinitiative (NKI) gefördertes Klimaschutzkonzept zu erstellen und realistische Klimaziele zu erreichen.",
    klimaTags: [
      "Bildungseinrichtungen",
      "Gemeinnützige Vereine",
      "Kommunale Unternehmen",
      "Gesundheits-, Pflege- und Sozialeinrichtungen",
      "Kinder- und Jugendhilfe",
      "Kommunen/ Kommunale Zusammenschlüsse",
      "Kultreinrichtung",
      "Religionsgemeinschaft"
    ],
    klimaInfoTitle: "In 6 Schritten zum Klimaneutralitätsplan",
    klimaInfoDesc: "Wir begleiten Sie von der ersten Analyse bis zur Verstetigungsstrategie – für ein nachhaltiges und gefördertes Klimaschutzkonzept.",
    klimaStep1Title: "IST-Analyse sowie Energie und THG-Bilanz",
    klimaStep1Desc: "Die Berechnung der Emissionen bildet die Basis aller Dekarbonisierungsvorhaben. Wir berechnen nach GHG-Protokoll Ihre direkten und indirekten Emissionen (Scope 1, 2 & 3).",
    klimaStep2Title: "Maßnahmenkatalog",
    klimaStep2Desc: "Auf Basis der Bilanz werden Maßnahmen abgeleitet und nach Kosten, Emissionshebel und Umsetzungszeitraum priorisiert.",
    klimaStep3Title: "Beteiligung aller relevanten Akteure",
    klimaStep3Desc: "Durch Workshops werden alle relevanten Parteien eingebunden, um das maximale Maßnahmenpotential auszuschöpfen.",
    klimaStep4Title: "Potentialanalyse und priorisierte Handlungsfelder",
    klimaStep4Desc: "Maßnahmen werden nach Umsetzbarkeit und Emissionshebel bewertet und in Handlungsfelder wie Mobilität, Infrastruktur, Beschaffung, etc. gruppiert.",
    klimaStep5Title: "THG-Minderungsziele und Szenarien",
    klimaStep5Desc: "Maßnahmen werden in Szenarien abgebildet (z.B. Referenz- und Klimaschutzszenario) zur Identifikation von Restemissionen und Kompensationskosten.",
    klimaStep6Title: "Verstetigungsstrategie",
    klimaStep6Desc: "Alle erarbeiteten Materialien werden übergeben und Schulungspakete angeboten, um die Inhalte nachhaltig zu verankern.",
    esrsHeroTitle: "ESRS E1: Berichtsfähigkeit zum Klimawandel",
    esrsHeroDesc: "Wir unterstützen bei der Erhebung, Berechnung und Vorbereitung der Berichterstattung der quantitativen Angaben zum Klimaschutz und Anpassung an den Klimawandel (ESRS E1-1 bis E1-9) nach den sektorunabhängigen Kernstandards der EFRAG.",
    esrsInfoTitle: "Offenlegungspflichten zu Klimaschutz gemäß CSRD",
    esrsInfoDesc: "Wir befähigen Ihr Unternehmen zur Berichterstattung der klimabezogenen Offenlegungspflichten nach CSRD für die Indikatoren ESRS E1-1 bis E1-9.",
    esrsServicesTitle: "Unsere Leistungen",
    esrsService1Title: "Datenerhebung",
    esrsService1Desc: "Wir berechnen Unternehmensklimabilanzen (THG-Bilanz), Maßnahmenpläne zur Reduktion und Zieljahre",
    esrsService2Title: "Aufbereiten",
    esrsService2Desc: "Wir bereiten Ihre Klimadaten für ESG-Ratings oder Nachhaltigkeitsberichte auf",
    esrsService3Title: "Beraten",
    esrsService3Desc: "Wir beraten Sie vollumfänglich zum Thema Dekarbonisierung und Erreichung von Klimazielen",
    esrsStepsTitle: "In 4 Schritten zum Klima-Transitionsplan nach CSRD ESRS E1-1",
    esrsStep1Title: "THG-Bilanz",
    esrsStep1Desc: "Zur Ermittlung der Emissionen bedarf es einer THG-Bilanz, welche die Umweltauswirkungen eines Unternehmens in Scope 1,2,3 erfasst. Auf ihrer Basis werden Maßnahmen abgeleitet.",
    esrsStep2Title: "Ziele",
    esrsStep2Desc: "Auf Basis der THG-Bilanz können wissenschaftlich basierte Klimaziele abgeleitet werden.",
    esrsStep3Title: "Maßnahmen",
    esrsStep3Desc: "Basierend auf der THG-Bilanz und den Zielen werden Maßnahmen zur Reduktion von Scope 1, 2, 3 Emissionen abgeleitet und monetär bewertet.",
    esrsStep4Title: "Implementierung & Kommunikation",
    esrsStep4Desc: "Entwicklung von Fortschritts-KPIs und Kommunikation der Aktivitäten an Stakeholder.",
    privacyPageTitle: "Datenschutzerklärung",
    privacyPageSections: [
      {
        title: "1. Verantwortlicher für die Datenverarbeitung",
        content: [
          "Verantwortlicher gemäß Art. 4 Abs. 7 DSGVO ist:",
          "COzwei GmbH\nGutenbergstraße 16a 70176 Stuttgart\nDeutschland\nE-Mail: datenschutz@cozwei.de\nTelefon: 0711 12171034"
        ]
      },
      {
        title: "2. Datenschutzbeauftragter",
        content: [
          "Sie erreichen den Datenschutzbeauftragten der COzwei GmbH unter datenschutz@cozwei.de oder per Post unter der oben angegebenen Adresse mit dem Zusatz \"Datenschutzbeauftragter\"."
        ]
      },
      {
        title: "3. Welche Daten werden verarbeitet?",
        content: [
          "Wir verarbeiten personenbezogene Daten, die Sie uns bei der Nutzung unserer Website oder bei der Kommunikation mit uns übermitteln. Dazu gehören:",
          "• Name und Kontaktdaten (z.B. E-Mail-Adresse, Telefonnummer)",
          "• Daten zur Kommunikation (z.B. Nachrichten, E-Mails)",
          "• Daten zur Nutzung unserer Website (z.B. IP-Adresse, Browser-Informationen, Zugriffszeiten)",
          "• Daten zur Durchführung von Verträgen (z.B. Name, Adresse, Rechnungsnummer)",
          "• Daten zur Zahlung (z.B. Zahlungsdaten, Bankverbindungsinformationen)"
        ]
      },
      {
        title: "4. Zwecke der Datenverarbeitung",
        content: [
          "Die Verarbeitung der Daten erfolgt ausschließlich für die folgenden Zwecke:",
          "• Durchführung von Verträgen und Kundenbetreuung",
          "• Kommunikation mit Kunden und Interessenten",
          "• Verbesserung unserer Website und Online-Angebote",
          "• Analyse des Nutzerverhaltens auf unserer Website",
          "• Sicherstellung der Sicherheit unserer IT-Systeme"
        ]
      },
      {
        title: "5. Rechte der betroffenen Personen",
        content: [
          "Sie haben das Recht:",
          "• Auskunft über die von uns verarbeiteten Daten zu verlangen",
          "• Die Berichtigung unrichtiger Daten zu verlangen",
          "• Die Löschung Ihrer Daten zu verlangen (sofern nicht weitere gesetzliche Aufbewahrungsfristen bestehen)",
          "• Die Einschränkung der Verarbeitung zu verlangen",
          "• Die Daten einem anderen Verantwortlichen zu übertragen",
          "• Widerspruch gegen die Verarbeitung einzulegen"
        ]
      },
      {
        title: "6. Datensicherheit",
        content: [
          "Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen unbefugte Zugriffe, Verlust, Zerstörung oder gegen unbefugte Änderung zu schützen. Diese umfassen:",
          "• Verschlüsselung der übertragenen Daten",
          "• Sichere Speicherung von Passwörtern",
          "• Regelmäßige Sicherheitsaudits"
        ]
      },
      {
        title: "7. Löschung von Daten",
        content: [
          "Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt oder die Aufbewahrungsfrist abläuft. Nach Ablauf der Aufbewahrungsfristen werden die Daten durch technische und organisatorische Maßnahmen unkenntlich gemacht.",
          "• Daten zur Kommunikation (z.B. E-Mails) werden nach spätestens 30 Tagen gelöscht.",
          "• Daten zur Durchführung von Verträgen (z.B. Rechnungen) werden nach spätestens 10 Jahren gelöscht.",
          "• Daten zur Zahlung (z.B. Bankverbindungsinformationen) werden nach spätestens 7 Jahren gelöscht."
        ]
      },
      {
        title: "8. Änderungen dieser Datenschutzerklärung",
        content: [
          "Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an technische oder rechtliche Entwicklungen anzupassen. Die aktuelle Version finden Sie immer auf unserer Website."
        ]
      }
    ],
    impressumPageTitle: "Impressum",
    impressumPageSections: [
      {
        title: "Angaben gemäß § 5 TMG",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Kontakt",
        content: [
          "Telefon: 0711 12171034",
          "E-Mail: info@cozwei.de"
        ]
      },
      {
        title: "Umsatzsteuer-ID",
        content: [
          "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 000 000 00000"
        ]
      },
      {
        title: "Verantwortlicher für journalistische Inhalte",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Haftungsausschluss",
        content: [
          "Die Inhalte dieser Website werden sorgfältig geprüft. Wir übernehmen jedoch keine Gewähr für deren Vollständigkeit, Richtigkeit und Aktualität. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          "Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.",
          "Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
        ]
      },
      {
        title: "Urheberrecht",
        content: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
          "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, sind die Urheberrechte Dritter zu beachten. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.",
          "Unsere Website enthält Links zu externen Webseiten Dritter. Auf diese sind die §§ 8 bis 10 TMG ohne besondere Hinweise nicht anwendbar. Wir haben keinen Einfluss auf die Zulassung und den Inhalt der verlinkten Seiten. Deshalb distanzieren wir uns ausdrücklich von allen Inhalten Dritter, die nach diesen Links oder Verknüpfungen gefunden werden. Diese Erklärung gilt für alle auf dieser Website angebotenen Links und Verknüpfungen."
        ]
      },
      {
        title: "Datenschutz",
        content: [
          "Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (wie Name, Anschrift, E-Mail-Adresse, etc.) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
          "Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloses Schützen der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzer übernimmt daher das Risiko, dass seine Daten durch Dritte unbeabsichtigt oder absichtlich verändert, zufällig gelöscht oder unter Umständen nicht zugänglich gemacht werden.",
          "Wir behalten uns vor, die Nutzungsbedingungen zu ändern, zu ergänzen oder zu aktualisieren, auch ohne vorherige Ankündigung. Die Nutzungsbedingungen gelten ab dem Zeitpunkt der erstmaligen Nutzung der Website. Es empfiehlt sich, die Nutzungsbedingungen regelmäßig zu überprüfen."
        ]
      }
    ],
  },
  en: {
    heroTitle: "We make climate goals possible",
    heroSubtitle: "Our goal is to enable companies and institutions to operate more sustainably and achieve climate goals",
    learnMore: "Learn more",
    solutions: "Solutions",
    solutionsDesc: "As an environmental service provider, we offer our clients a range of consulting and implementation solutions to successfully realize sustainability and climate strategies.",
    sustainability: "Sustainability",
    sustainabilityDesc: "Implementation of sustainability strategies at company level",
    decarbonization: "Decarbonization",
    decarbonizationDesc: "Enabling CO₂ reduction along the entire value chain",
    measures: "Measures",
    measuresDesc: "Implementation of decarbonization targets from PV systems to building renovations",
    about: "About us",
    contact: "Contact",
    customers: "Our Customers",
    andManyMore: "...and many more!",
    contactUs: "Contact us",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "Your email address",
    company: "Company (optional)",
    companyPlaceholder: "Your company",
    message: "Message",
    messagePlaceholder: "Your message",
    send: "Send",
    privacy: "Privacy Policy",
    imprint: "Imprint",
    linkedin: "LinkedIn",
    sustainabilityHeroTitle: "Sustainability",
    sustainabilityHeroSubtitle: "We support the implementation of sustainability management from strategy development through sustainability initiatives to reporting and ESG ratings.",
    sustainabilitySectionTitle: "Forward-looking and sustainable",
    sustainabilitySectionSubtitle: "From Sustainable Development Goals to ESG strategy, we help you align your company sustainably, credibly and transparently.",
    sdgCardTitle: "Sustainable Development Goals",
    sdgCardDesc: "We identify with you which of the 17 UN Sustainable Development Goals best fit your company and support you in implementing them into your day-to-day business.",
    esgCardTitle: "ESG Ratings",
    esgCardDesc: "Implementing an ESG strategy is one of the tools to align your company sustainably. We identify your strengths in the areas of Environmental, Social and Governance and further develop them.",
    decarbonHeroTitle: "Decarbonization",
    decarbonHeroSubtitle: "We enable CO₂ reduction for companies & institutions to achieve the global 1.5-degree climate targets. This includes calculation, planning, reduction, and reporting.",
    decarbonSectionTitle: "Achieving climate goals",
    decarbonSectionSubtitle: "With our proven and certifiable four-step plan, you will achieve your climate goals. From calculating actual emissions to the production plan and communication, we cover everything.",
    decarbonCard1Title: "Transformation concept",
    decarbonCard1Desc: "Up to €90,000 funding per German site for creating a transformation concept to achieve climate neutrality",
    decarbonCard2Title: "Climate protection concept",
    decarbonCard2Desc: "Support for institutions in creating a climate protection concept funded by the national climate protection initiative",
    decarbonCard3Title: "ESRS E1",
    decarbonCard3Desc: "We support data collection, calculation, and preparation for reporting",
    decarbonStepsTitle: "In 4 steps to climate neutrality",
    decarbonStep1Title: "Corporate carbon footprint (CCF GHG balance)",
    decarbonStep1Desc: "The calculation of emissions forms the basis of all decarbonization projects. We calculate your direct and indirect emissions (Scope 1, 2 & 3) according to the scientifically recognized GHG Protocol. From individual products to your entire company, we cover all emission balances.",
    decarbonStep2Title: "Deriving decarbonization measures",
    decarbonStep2Desc: "Based on the balance, company- or product-specific decarbonization measures can be derived. This may include measures relating to buildings, fleets, production, or products. Costs, emission leverage, and implementation period are differentiated. This approach allows you to make sustainable and cost-oriented decisions.",
    decarbonStep3Title: "Target year for climate neutrality",
    decarbonStep3Desc: "From the sum of all realistically feasible measures, a target year for climate neutrality can be derived. The total costs, emission reduction, and compensation costs are highlighted.",
    decarbonStep4Title: "Communicate and report goals",
    decarbonStep4Desc: "We support you in certifying and communicating your achievements. For example, in preparing climate data for ESG ratings or sustainability reports, annual CDP reporting, submitting SBTi targets, or answering customer (B2B) climate protection inquiries.",
    measuresHeroTitle: "Implementation of measures",
    measuresHeroSubtitle: "Our motto: We are only finished when the craftsmen leave the site.",
    measuresSectionTitle: "Measures",
    measuresSectionSubtitle: "We are experts in deriving decarbonization measures, but we also want to think further. Global climate goals can only be achieved if theory and practice go hand in hand. That is why we support your projects with our strong network of partners until final implementation.",
    measuresCard1Title: "Funding",
    measuresCard1Desc: "Funding is essential to make investments in climate-friendly technologies economically attractive. They help especially small and medium-sized enterprises to implement necessary measures more quickly.",
    measuresCard2Title: "Our partners",
    measuresCard2Desc: "With our partners, we successfully implement climate protection measures throughout Europe. This enables our customers to achieve their climate goals efficiently and sustainably.",
    measuresLearnMore: "Learn more",
    climateFundingTitle: "Climate funding",
    climateFundingSubtitle: "Together with our implementation partners, we have developed a climate funding catalog that shows the German funding landscape for climate funding and makes implementation more cost-effective.",
    acceptPrivacy: "I accept the ",
    privacyPolicy: "privacy policy",
    partnersSectionTitle: "Our Partners",
    partnerSoleraTitle: "Solera Stuttgart GmbH",
    partnerSoleraDesc: "Our partners at Solera Stuttgart GmbH plan and install turnkey photovoltaic systems with a clear focus on economic efficiency and sustainable value creation, with the aim of advancing the energy transition.",
    partnerEffizienzTitle: "Effizienzpioniere",
    partnerEffizienzDesc: "With their team of certified KfW energy consultants, Effizienzpioniere help to renovate buildings in a climate-efficient manner – maximum funding included. Together, we aim to make a measurable contribution to combating climate change.",
    partnerGrundsteineTitle: "Grundsteine GmbH",
    partnerGrundsteineDesc: "Grundsteine GmbH is a software company specializing in the digitalization of funding processes. With their software products, they digitalize and accelerate the energy transition. Whether energy consulting or digital funding applications – their tools make processes more efficient and easier.",
    partnerEnvoriaTitle: "Envoria",
    partnerEnvoriaDesc: "Envoria is a software provider for simplifying ESG reporting. From preconfigured reporting KPIs and templates to user function, rights, and task management – Envoria offers the features you need.",
    partnerFinmatchTitle: "Finmatch",
    partnerFinmatchDesc: "As a financing company, Finmatch supports companies in financing and realizing climate goals. With more than 800 financing partners, they have the largest financing network for medium-sized companies in the DACH region.",
    partnerRemzeroTitle: "REM ZERO GmbH",
    partnerRemzeroDesc: "REM ZERO GmbH is our joint venture that brings together the worlds of finance and sustainability to make transformation a reality.",
    partnerMicrosoftTitle: "Microsoft",
    partnerMicrosoftDesc: "As part of the Microsoft Startup Founder Hub, we can use Microsoft, their applications, and network to build software that makes deriving realistic climate actions and decarbonization for our clients easier and more automated.",
    aboutHeroTitle: "Who we are",
    aboutHeroDesc: "At COzwei, we focus on solutions and the implementation of climate strategies, because the current challenge is less about setting climate targets and more about the concrete and cost-effective reduction of emissions for companies and institutions.",
    aboutHeroButton: "Learn more",
    aboutMapTitle: "Achieve climate goals with us",
    aboutMapSubtitle: "Two locations in Stuttgart and Lisbon – one team for greater corporate sustainability",
    aboutTeamTitle: "A strong team for more climate protection",
    teamRoleChristian: "Managing Director",
    teamRoleErik: "Managing Director",
    teamRoleAlina: "Administration",
    teamRoleDominik: "Project Manager Climate Management",
    teamRoleLouis: "Climate Management",
    teamRoleRonan: "Energy Consulting",
    aboutBenefitsTitle: "Achieve climate goals with us",
    aboutBenefit1: "Start-up atmosphere",
    aboutBenefit2: "Urban Sports Club",
    aboutBenefit3: "Free snacks and drinks",
    aboutBenefit4: "Flexible and remote work",
    aboutBenefit5: "Team events",
    aboutBenefit6: "International environment",
    aboutApplyButton: "APPLY NOW",
    transfHeroTitle: "Climate transformation plans – BAFA Module 5",
    transfHeroDesc: "Up to €90,000 funding per German site for services supporting the planning and implementation of a transformation towards greenhouse gas neutrality for companies.",
    transfInfoTitle: "Reduce costs with subsidized climate transformation plans",
    transfInfoDesc: "Transparency requirements for the corporate carbon footprint (GHG balance) from customers or, increasingly, from legislators in Europe (CSRD sustainability reporting) will rise.\n\nThe BAFA (Module 5) funding program for energy and resource efficiency in business addresses this and funds up to 70% of service costs for a site-specific transformation plan towards greenhouse gas neutrality.\n\nYou can receive funding for our services and thus achieve your climate goals.",
    transfStepsTitle: "Four steps to sustainable transformation",
    transfStep1Title: "BAFA 5 application",
    transfStep1Desc: "Preparation of all documents and support with the application submission to receive the full funding amount. Implementation takes place after funding approval for optimal transparency of actual costs.",
    transfStep2Title: "Preparation of CO₂ balance",
    transfStep2Desc: "The basis of all transformation towards CO₂ neutrality is the preparation of the CO₂ balance (CCF). All CO₂ emissions generated in the company along the value chain are recorded and accounted for in accordance with international standards (ISO 14064).",
    transfStep3Title: "Derivation of measures",
    transfStep3Desc: "Based on the CO₂ balance, the main emission drivers are identified and reduction measures are derived. These show how many emissions can be saved, what the implementation costs will be, what financing and funding are possible, and when realistic implementation can be planned.",
    transfStep4Title: "Target setting and strategy",
    transfStep4Desc: "By summing all feasible measures, a target year for climate neutrality can be derived and various scenarios for achieving it can be shown. These scenarios may differ depending on the level of ambition for implementing measures and enable you to choose the most economical option.",
    transfEligTitle: "Which companies are eligible for funding?",
    transfEligDesc: "Companies with production sites in Germany are eligible for funding per site under the Federal Funding for Energy and Resource Efficiency in Business (EEW). The amount of funding depends on the size of the company. We are happy to carry out a quick check for the possible funding amount without obligation. In general:",
    transfEligList1: "Companies without SME status: 40-50 percent",
    transfEligList2: "Medium-sized companies (MU): 50-60 percent",
    transfEligList3: "Small companies (KU): 60-70 percent",
    transfEligMax: "Up to a maximum of €90,000",
    transfEligSource: "Source: BAFA (as of 04.06.2024)",
    // ... add more keys as needed
    klimaHeroTitle: "Create an integrated climate concept now",
    klimaHeroDesc: "We support institutions in creating their climate protection concept funded by the National Climate Initiative (NKI) and achieving realistic climate goals.",
    klimaTags: [
      "Educational institutions",
      "Non-profit associations",
      "Municipal companies",
      "Health, care and social institutions",
      "Child and youth welfare",
      "Municípios/municipal associations",
      "Cultural institution",
      "Religious community"
    ],
    klimaInfoTitle: "6 steps to a climate neutrality plan",
    klimaInfoDesc: "We accompany you from the first analysis to the consolidation strategy – for a sustainable and subsidized climate protection concept.",
    klimaStep1Title: "Status analysis as well as energy and GHG balance",
    klimaStep1Desc: "The calculation of emissions forms the basis of all decarbonization projects. We calculate your direct and indirect emissions (Scope 1, 2 & 3) according to the GHG Protocol.",
    klimaStep2Title: "Catalogue of measures",
    klimaStep2Desc: "Based on the balance, measures are derived and prioritized according to cost, emission leverage and implementation period.",
    klimaStep3Title: "Involvement of all relevant stakeholders",
    klimaStep3Desc: "Through workshops, all relevant parties are involved to exploit the maximum potential of measures.",
    klimaStep4Title: "Potential analysis and prioritized fields of action",
    klimaStep4Desc: "Measures are evaluated according to feasibility and emission leverage and grouped into fields of action such as mobility, infrastructure, procurement, etc.",
    klimaStep5Title: "GHG reduction targets and scenarios",
    klimaStep5Desc: "Measures are mapped in scenarios (e.g. reference and climate protection scenario) to identify residual emissions and compensation costs.",
    klimaStep6Title: "Consolidation strategy",
    klimaStep6Desc: "All developed materials are handed over and training packages are offered to anchor the content sustainably.",
    esrsHeroTitle: "ESRS E1: Climate Change Reporting Capability",
    esrsHeroDesc: "We support the collection, calculation, and preparation of reporting quantitative information on climate protection and adaptation to climate change (ESRS E1-1 to E1-9) according to the sector-agnostic core standards of EFRAG.",
    esrsInfoTitle: "Disclosure requirements for climate protection under CSRD",
    esrsInfoDesc: "We enable your company to report on climate-related disclosure requirements under CSRD for the ESRS E1-1 to E1-9 indicators.",
    esrsServicesTitle: "Our Services",
    esrsService1Title: "Data Collection",
    esrsService1Desc: "We calculate corporate climate balances (GHG balance), reduction action plans, and target years",
    esrsService2Title: "Preparation",
    esrsService2Desc: "We prepare your climate data for ESG ratings or sustainability reports",
    esrsService3Title: "Consulting",
    esrsService3Desc: "We provide comprehensive advice on decarbonization and achieving climate goals",
    esrsStepsTitle: "In 4 steps to a climate transition plan according to CSRD ESRS E1-1",
    esrsStep1Title: "GHG Balance",
    esrsStep1Desc: "To determine emissions, a GHG balance is required, which records a company's environmental impact in Scope 1, 2, 3. Measures are derived based on this.",
    esrsStep2Title: "Targets",
    esrsStep2Desc: "Based on the GHG balance, science-based climate targets can be derived.",
    esrsStep3Title: "Measures",
    esrsStep3Desc: "Based on the GHG balance and the targets, measures to reduce Scope 1, 2, 3 emissions are derived and monetarily evaluated.",
    esrsStep4Title: "Implementation & Communication",
    esrsStep4Desc: "Development of progress KPIs and communication of activities to stakeholders.",
    privacyPageTitle: "Privacy Policy",
    privacyPageSections: [
      {
        title: "1. Controller for Data Processing",
        content: [
          "Controller according to Art. 4 para. 7 GDPR:",
          "COzwei GmbH\nGutenbergstraße 16a 70176 Stuttgart\nGermany\nE-Mail: datenschutz@cozwei.de\nPhone: 0711 12171034"
        ]
      },
      {
        title: "2. Data Protection Officer",
        content: [
          "You can reach the data protection officer of COzwei GmbH at datenschutz@cozwei.de or by post at the above address with the addition 'Data Protection Officer'."
        ]
      },
      {
        title: "3. What data are processed?",
        content: [
          "We process personal data that you provide to us when using our website or when communicating with us. This includes:",
          "• Name and contact details (e.g., email address, telephone number)",
          "• Communication data (e.g., messages, emails)",
          "• Data relating to the use of our website (e.g., IP address, browser information, access times)",
          "• Data relating to the performance of contracts (e.g., name, address, invoice number)",
          "• Data relating to payment (e.g., payment data, bank connection information)"
        ]
      },
      {
        title: "4. Purposes of data processing",
        content: [
          "The processing of data is carried out exclusively for the following purposes:",
          "• Performance of contracts and customer service",
          "• Communication with customers and interested parties",
          "• Improvement of our website and online offerings",
          "• Analysis of user behavior on our website",
          "• Ensuring the security of our IT systems"
        ]
      },
      {
        title: "5. Rights of the data subject",
        content: [
          "You have the right to:",
          "• Request information about the personal data processed by us",
          "• Request correction of incorrect data",
          "• Request deletion of your data (unless further statutory retention periods apply)",
          "• Request restriction of processing",
          "• Request transfer to another controller",
          "• Lodge a complaint"
        ]
      },
      {
        title: "6. Data security",
        content: [
          "We take technical and organizational measures to protect your data against unauthorized access, loss, destruction, or against unauthorized modification. These include:",
          "• Encryption of transmitted data",
          "• Secure storage of passwords",
          "• Regular security audits"
        ]
      },
      {
        title: "7. Deletion of data",
        content: [
          "Data will be deleted as soon as the purpose of processing ceases or the retention period expires. After the retention periods, the data are anonymized by technical and organizational measures.",
          "• Communication data (e.g., emails) will be deleted after a maximum of 30 days.",
          "• Data relating to contract performance (e.g., invoices) will be deleted after a maximum of 10 years.",
          "• Payment data (e.g., bank connection information) will be deleted after a maximum of 7 years."
        ]
      },
      {
        title: "8. Changes to this privacy policy",
        content: [
          "We reserve the right to change this privacy policy to adapt it to technical or legal developments. The current version is always available on our website."
        ]
      }
    ],
    impressumPageTitle: "Legal Notice",
    impressumPageSections: [
      {
        title: "Information according to § 5 TMG",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Contact",
        content: [
          "Phone: 0711 12171034",
          "E-Mail: info@cozwei.de"
        ]
      },
      {
        title: "Sales tax identification number",
        content: [
          "Sales tax identification number according to § 27 a UStG: 000 000 00000"
        ]
      },
      {
        title: "Responsible for journalistic content",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Disclaimer",
        content: [
          "The content of this website is carefully checked. However, we do not guarantee its completeness, accuracy, and currency. As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG. According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate a criminal offense.",
          "Our obligations to remove information or to block the use of information under general laws remain unaffected by this. However, liability for such violations is only possible from the point in time at which the violation became known. Upon becoming aware of such violations, we will immediately remove such content.",
          "We assume no liability for the accuracy, completeness, and currency of the information provided. The use of any information on this website is at your own risk."
        ]
      },
      {
        title: "Copyright",
        content: [
          "The content created by the website operators on these pages is subject to German copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.",
          "Insofar as the content on this page was not created by the operator, copyrights of third parties must be observed. In particular, the content of third parties is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of violations of copyright, we will immediately remove such content.",
          "Our website contains links to external websites of third parties. To these, §§ 8 to 10 TMG are not applicable without special notice. We have no influence on the admission and content of the linked pages. Therefore, we expressly distance ourselves from all content of third parties found via these links or links.",
          "This declaration applies to all links and links offered on this website."
        ]
      },
      {
        title: "Data protection",
        content: [
          "The use of our website is generally possible without providing personal data. Where personal data (e.g., name, address, email address, etc.) is collected, this is done as far as possible on a voluntary basis. This data will not be passed on to third parties without your explicit consent.",
          "We would like to point out that the data transmission over the Internet (e.g., when communicating by email) may have security gaps. A complete protection of the data against unauthorized access by third parties is not possible. The user assumes the risk that his data may be changed, deleted, or made inaccessible by third parties unintentionally or intentionally.",
          "We reserve the right to change the terms of use, to supplement or update them, even without prior notice. The terms of use apply from the point in time of the first use of the website. It is recommended to check the terms of use regularly."
        ]
      }
    ],
  },
  pt: {
    heroTitle: "Tornamos possíveis as metas climáticas",
    heroSubtitle: "Nosso objetivo é capacitar empresas e instituições a operar de forma mais sustentável e alcançar metas climáticas",
    learnMore: "Saiba mais",
    solutions: "Soluções",
    solutionsDesc: "Como prestador de serviços ambientais, oferecemos aos nossos clientes diversas soluções de consultoria e implementação para implementar com sucesso estratégias de sustentabilidade e clima.",
    sustainability: "Sustentabilidade",
    sustainabilityDesc: "Implementação de estratégias de sustentabilidade a nível empresarial",
    decarbonization: "Descarbonização",
    decarbonizationDesc: "Possibilitar a redução de CO₂ ao longo de toda a cadeia de valor",
    measures: "Medidas",
    measuresDesc: "Implementação de metas de descarbonização desde sistemas fotovoltaicos até reformas de edifícios",
    about: "Sobre nós",
    contact: "Contato",
    customers: "Nossos Clientes",
    andManyMore: "...e muitos mais!",
    contactUs: "Contate-nos",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "Seu endereço de e-mail",
    company: "Empresa (opcional)",
    companyPlaceholder: "Sua empresa",
    message: "Mensagem",
    messagePlaceholder: "Sua mensagem",
    send: "Enviar",
    privacy: "Política de Privacidade",
    imprint: "Impressum",
    linkedin: "LinkedIn",
    sustainabilityHeroTitle: "Sustentabilidade",
    sustainabilityHeroSubtitle: "Apoiamos a implementação da gestão da sustentabilidade desde o desenvolvimento da estratégia até iniciativas de sustentabilidade, relatórios e classificações ESG.",
    sustainabilitySectionTitle: "Orientado para o futuro e sustentável",
    sustainabilitySectionSubtitle: "Dos Objetivos de Desenvolvimento Sustentável à estratégia ESG, ajudamos a alinhar a sua empresa de forma sustentável, credível e transparente.",
    sdgCardTitle: "Objetivos de Desenvolvimento Sustentável",
    sdgCardDesc: "Identificamos consigo quais dos 17 Objetivos de Desenvolvimento Sustentável da ONU melhor se adequam à sua empresa e apoiamos a sua implementação no seu dia a dia.",
    esgCardTitle: "Classificações ESG",
    esgCardDesc: "A implementação de uma estratégia ESG é uma das ferramentas para alinhar a sua empresa de forma sustentável. Identificamos os seus pontos fortes nas áreas de Ambiental, Social e Governança e desenvolvemo-los ainda mais.",
    decarbonHeroTitle: "Descarbonização",
    decarbonHeroSubtitle: "Possibilitamos a redução de CO₂ para empresas e instituições para atingir as metas climáticas globais de 1,5 grau. Isso inclui cálculo, planejamento, redução e relatórios.",
    decarbonSectionTitle: "Alcançando metas climáticas",
    decarbonSectionSubtitle: "Com nosso plano comprovado e certificável de quatro etapas, você alcançará suas metas climáticas. Desde o cálculo das emissões reais até o plano de produção e comunicação, cobrimos tudo.",
    decarbonCard1Title: "Conceito de transformação",
    decarbonCard1Desc: "Até €90,000 de financiamento por local na Alemanha para criar um conceito de transformação para alcançar a neutralidade climática",
    decarbonCard2Title: "Conceito de proteção climática",
    decarbonCard2Desc: "Apoio a instituições na criação de um conceito de proteção climática financiado pela iniciativa nacional de proteção climática",
    decarbonCard3Title: "ESRS E1",
    decarbonCard3Desc: "Apoiamos a coleta de dados, cálculo e preparação para relatórios",
    decarbonStepsTitle: "Em 4 etapas para a neutralidade climática",
    decarbonStep1Title: "Balanço de carbono corporativo (CCF GEE)",
    decarbonStep1Desc: "O cálculo das emissões é a base de todos os projetos de descarbonização. Calculamos suas emissões diretas e indiretas (Escopo 1, 2 e 3) de acordo com o Protocolo GEE reconhecido cientificamente. De produtos individuais à sua empresa como um todo, cobrimos todos os balanços de emissões.",
    decarbonStep2Title: "Derivação de medidas de descarbonização",
    decarbonStep2Desc: "Com base no balanço, podem ser derivadas medidas de descarbonização específicas da empresa ou do produto. Isso pode incluir medidas relacionadas a edifícios, frotas, produção ou produtos. Custos, alavancagem de emissões e período de implementação são diferenciados. Essa abordagem permite que você tome decisões sustentáveis e orientadas para custos.",
    decarbonStep3Title: "Ano-alvo para neutralidade climática",
    decarbonStep3Desc: "A partir da soma de todas as medidas realisticamente viáveis, pode-se derivar um ano-alvo para a neutralidade climática. Os custos totais, a redução de emissões e os custos de compensação são destacados.",
    decarbonStep4Title: "Comunicar e relatar metas",
    decarbonStep4Desc: "Apoiamos você na certificação e comunicação de suas conquistas. Por exemplo, na preparação de dados climáticos para classificações ESG ou relatórios de sustentabilidade, relatórios anuais do CDP, envio de metas SBTi ou resposta a consultas de clientes (B2B) sobre proteção climática.",
    measuresHeroTitle: "Implementação de medidas",
    measuresHeroSubtitle: "Nosso lema: Só terminamos quando os trabalhadores deixam o local.",
    measuresSectionTitle: "Medidas",
    measuresSectionSubtitle: "Somos especialistas na definição de medidas de descarbonização, mas também queremos ir além. As metas climáticas globais só podem ser alcançadas se teoria e prática andarem de mãos dadas. Por isso, acompanhamos seus projetos com nossa forte rede de parceiros até a implementação final.",
    measuresCard1Title: "Incentivos",
    measuresCard1Desc: "Os incentivos são essenciais para tornar os investimentos em tecnologias amigas do clima economicamente atrativos. Eles ajudam especialmente pequenas e médias empresas a implementar as medidas necessárias mais rapidamente.",
    measuresCard2Title: "Nossos parceiros",
    measuresCard2Desc: "Com nossos parceiros, implementamos com sucesso medidas de proteção climática em toda a Europa. Isso permite que nossos clientes atinjam suas metas climáticas de forma eficiente e sustentável.",
    measuresLearnMore: "Saiba mais",
    climateFundingTitle: "Financiamento climático",
    climateFundingSubtitle: "Juntamente com nossos parceiros de implementação, desenvolvemos um catálogo de financiamento climático que mostra o panorama alemão de financiamento climático e torna a implementação mais econômica.",
    acceptPrivacy: "Eu aceito a ",
    privacyPolicy: "política de privacidade",
    partnersSectionTitle: "Nossos Parceiros",
    partnerSoleraTitle: "Solera Stuttgart GmbH",
    partnerSoleraDesc: "Nossos parceiros da Solera Stuttgart GmbH planejam e instalam sistemas fotovoltaicos turnkey com foco claro em eficiência econômica e criação de valor sustentável, com o objetivo de impulsionar a transição energética.",
    partnerEffizienzTitle: "Effizienzpioniere",
    partnerEffizienzDesc: "Com sua equipe de especialistas certificados em energia KfW, a Effizienzpioniere ajuda a renovar edifícios de forma eficiente em termos climáticos – com financiamento máximo incluído. Juntos, pretendemos dar uma contribuição mensurável para combater as mudanças climáticas.",
    partnerGrundsteineTitle: "Grundsteine GmbH",
    partnerGrundsteineDesc: "A Grundsteine GmbH é uma empresa de software especializada na digitalização de processos de financiamento. Com seus produtos de software, digitalizam e aceleram a transição energética. Seja consultoria energética ou pedidos de financiamento digital – suas ferramentas tornam os processos mais eficientes e fáceis.",
    partnerEnvoriaTitle: "Envoria",
    partnerEnvoriaDesc: "A Envoria é uma fornecedora de software para simplificar relatórios ESG. De KPIs de relatórios pré-configurados e modelos até a gestão de funções de usuários, direitos e tarefas – a Envoria oferece os recursos de que você precisa.",
    partnerFinmatchTitle: "Finmatch",
    partnerFinmatchDesc: "Como empresa de financiamento, a Finmatch apoia empresas no financiamento e na realização de metas climáticas. Com mais de 800 parceiros de financiamento, eles têm a maior rede de financiamento para empresas de médio porte na região DACH.",
    partnerRemzeroTitle: "REM ZERO GmbH",
    partnerRemzeroDesc: "A REM ZERO GmbH é nossa joint venture que une o mundo das finanças e da sustentabilidade para tornar a transformação uma realidade.",
    partnerMicrosoftTitle: "Microsoft",
    partnerMicrosoftDesc: "Como parte do Microsoft Startup Founder Hub, podemos usar a Microsoft, suas aplicações e rede para construir software que facilita e automatiza a definição de ações climáticas realistas e a descarbonização para nossos clientes.",
    aboutHeroTitle: "Quem somos",
    aboutHeroDesc: "Na COzwei, focamo-nos em soluções e na implementação de estratégias climáticas, pois atualmente o desafio não é tanto definir metas climáticas, mas sim a redução concreta e otimizada de emissões para empresas e instituições.",
    aboutHeroButton: "Saiba mais",
    aboutMapTitle: "Conosco, metas climáticas são possíveis",
    aboutMapSubtitle: "Dois locais em Stuttgart e Lisboa – uma equipa para mais sustentabilidade empresarial",
    aboutTeamTitle: "Uma equipa forte para mais proteção climática",
    teamRoleChristian: "DIRETOR GERAL",
    teamRoleErik: "DIRETOR GERAL",
    teamRoleAlina: "Administração",
    teamRoleDominik: "Gestor de Projeto Gestão Climática",
    teamRoleLouis: "Gestão Climática",
    teamRoleRonan: "Consultoria Energética",
    aboutBenefitsTitle: "Conosco, metas climáticas são possíveis",
    aboutBenefit1: "Ambiente de start-up",
    aboutBenefit2: "Urban Sports Club",
    aboutBenefit3: "Snacks e bebidas gratuitos",
    aboutBenefit4: "Trabalho flexível e remoto",
    aboutBenefit5: "Eventos de equipa",
    aboutBenefit6: "Ambiente internacional",
    aboutApplyButton: "CANDIDATAR AGORA",
    transfHeroTitle: "Planos de transformação climática – BAFA Módulo 5",
    transfHeroDesc: "Até 90.000€ de financiamento por local na Alemanha para serviços de apoio ao planeamento e implementação de uma transformação para a neutralidade dos gases com efeito de estufa das empresas.",
    transfInfoTitle: "Reduza custos com planos de transformação climática subsidiados",
    transfInfoDesc: "Os requisitos de transparência para a pegada de carbono corporativa (balanço de GEE) de clientes ou, cada vez mais, de legisladores na Europa (relatórios de sustentabilidade CSRD) vão aumentar.\n\nO programa de financiamento BAFA (Módulo 5) para eficiência energética e de recursos nas empresas aborda esta questão e financia até 70% dos custos dos serviços para um plano de transformação específico do local para a neutralidade dos gases com efeito de estufa.\n\nPode receber financiamento para os nossos serviços e assim atingir os seus objetivos climáticos.",
    transfStepsTitle: "Quatro passos para uma transformação sustentável",
    transfStep1Title: "Candidatura BAFA 5",
    transfStep1Desc: "Preparação de todos os documentos e apoio na submissão da candidatura para receber o valor total do financiamento. A implementação ocorre após a aprovação do financiamento, para a máxima transparência dos custos reais.",
    transfStep2Title: "Elaboração do balanço de CO₂",
    transfStep2Desc: "A base de toda a transformação para a neutralidade de CO₂ é a elaboração do balanço de CO₂ (CCF). Todas as emissões de CO₂ geradas na empresa ao longo da cadeia de valor são registadas e contabilizadas de acordo com as normas internacionais (ISO 14064).",
    transfStep3Title: "Derivação de medidas",
    transfStep3Desc: "Com base no balanço de CO₂, são identificados os principais emissores e definidas medidas de redução. Estas mostram quantas emissões podem ser poupadas, quais serão os custos de implementação, que financiamentos e subsídios são possíveis e quando a implementação realista pode ser planeada.",
    transfStep4Title: "Definição de metas e estratégia",
    transfStep4Desc: "A soma de todas as medidas exequíveis permite definir um ano-alvo para a neutralidade climática e apresentar vários cenários para a sua concretização. Estes cenários podem variar consoante o nível de ambição na implementação das medidas e permitem escolher a opção mais económica.",
    transfEligTitle: "Que empresas podem ser financiadas?",
    transfEligDesc: "Empresas com unidades de produção na Alemanha são elegíveis para financiamento por unidade ao abrigo do Financiamento Federal para Eficiência Energética e de Recursos nas Empresas (EEW). O montante do financiamento depende do tamanho da empresa. Teremos todo o gosto em realizar uma verificação rápida do montante de financiamento possível, sem compromisso. Em geral:",
    transfEligList1: "Empresas sem estatuto de PME: 40-50 por cento",
    transfEligList2: "Empresas de média dimensão (MU): 50-60 por cento",
    transfEligList3: "Pequenas empresas (KU): 60-70 por cento",
    transfEligMax: "Até um máximo de 90.000€",
    transfEligSource: "Fonte: BAFA (em 04.06.2024)",
    // ... add more keys as needed
    klimaHeroTitle: "Elabore agora um conceito climático integrado",
    klimaHeroDesc: "Apoiamos instituições na elaboração do seu conceito de proteção climática financiado pela Iniciativa Nacional de Proteção Climática (NKI) e na consecução de metas climáticas realistas.",
    klimaTags: [
      "Instituições de ensino",
      "Associações sem fins lucrativos",
      "Empresas municipais",
      "Instituições de saúde, assistência e sociais",
      "Apoio à infância e juventude",
      "Municípios/associações municipais",
      "Instituição cultural",
      "Comunidade religiosa"
    ],
    klimaInfoTitle: "6 passos para o plano de neutralidade climática",
    klimaInfoDesc: "Acompanhamos você desde a primeira análise até a estratégia de consolidação – para um conceito de proteção climática sustentável e financiado.",
    klimaStep1Title: "Análise de status, energia e balanço de GEE",
    klimaStep1Desc: "O cálculo das emissões é a base de todos os projetos de descarbonização. Calculamos suas emissões diretas e indiretas (Escopo 1, 2 e 3) de acordo com o Protocolo GEE.",
    klimaStep2Title: "Catálogo de medidas",
    klimaStep2Desc: "Com base no balanço, as medidas são derivadas e priorizadas de acordo com o custo, potencial de redução de emissões e período de implementação.",
    klimaStep3Title: "Envolvimento de todas as partes interessadas relevantes",
    klimaStep3Desc: "Por meio de workshops, todas as partes relevantes são envolvidas para explorar o máximo potencial das medidas.",
    klimaStep4Title: "Análise de potencial e campos de ação priorizados",
    klimaStep4Desc: "As medidas são avaliadas quanto à viabilidade e potencial de redução de emissões e agrupadas em campos de ação como mobilidade, infraestrutura, compras, etc.",
    klimaStep5Title: "Metas de redução de GEE e cenários",
    klimaStep5Desc: "As medidas são mapeadas em cenários (por exemplo, cenário de referência e de proteção climática) para identificar emissões residuais e custos de compensação.",
    klimaStep6Title: "Estratégia de consolidação",
    klimaStep6Desc: "Todo o material desenvolvido é entregue e pacotes de treinamento são oferecidos para ancorar o conteúdo de forma sustentável.",
    esrsHeroTitle: "ESRS E1: Capacidade de Relato sobre Alterações Climáticas",
    esrsHeroDesc: "Apoiamos a recolha, cálculo e preparação do relatório de informações quantitativas sobre proteção climática e adaptação às alterações climáticas (ESRS E1-1 a E1-9) de acordo com as normas principais setoriais da EFRAG.",
    esrsInfoTitle: "Requisitos de divulgação para proteção climática segundo a CSRD",
    esrsInfoDesc: "Capacitamos a sua empresa para relatar os requisitos de divulgação relacionados ao clima segundo a CSRD para os indicadores ESRS E1-1 a E1-9.",
    esrsServicesTitle: "Nossos Serviços",
    esrsService1Title: "Coleta de Dados",
    esrsService1Desc: "Calculamos balanços climáticos corporativos (balanço de GEE), planos de ação de redução e anos-alvo",
    esrsService2Title: "Preparação",
    esrsService2Desc: "Preparamos seus dados climáticos para classificações ESG ou relatórios de sustentabilidade",
    esrsService3Title: "Consultoria",
    esrsService3Desc: "Aconselhamos de forma abrangente sobre descarbonização e alcance de metas climáticas",
    esrsStepsTitle: "Em 4 passos para o plano de transição climática segundo CSRD ESRS E1-1",
    esrsStep1Title: "Balanço de GEE",
    esrsStep1Desc: "Para determinar as emissões, é necessário um balanço de GEE, que regista o impacto ambiental de uma empresa nos Escopos 1, 2, 3. As medidas são derivadas com base nisso.",
    esrsStep2Title: "Metas",
    esrsStep2Desc: "Com base no balanço de GEE, podem ser definidas metas climáticas baseadas na ciência.",
    esrsStep3Title: "Medidas",
    esrsStep3Desc: "Com base no balanço de GEE e nas metas, são definidas medidas para reduzir as emissões dos Escopos 1, 2, 3 e avaliadas monetariamente.",
    esrsStep4Title: "Implementação & Comunicação",
    esrsStep4Desc: "Desenvolvimento de KPIs de progresso e comunicação das atividades às partes interessadas.",
    privacyPageTitle: "Política de Privacidade",
    privacyPageSections: [
      {
        title: "1. Responsável pelo tratamento de dados",
        content: [
          "Responsável nos termos do Art. 4º, nº 7 do RGPD:",
          "COzwei GmbH\nGutenbergstraße 16a 70176 Stuttgart\nAlemanha\nE-Mail: datenschutz@cozwei.de\nTelefone: 0711 12171034"
        ]
      },
      {
        title: "2. Encarregado de Proteção de Dados",
        content: [
          "Pode contactar o encarregado de proteção de dados da COzwei GmbH através do e-mail datenschutz@cozwei.de ou por correio para o endereço acima indicado com a menção 'Encarregado de Proteção de Dados'."
        ]
      },
      {
        title: "3. What data are processed?",
        content: [
          "We process personal data that you provide to us when using our website or when communicating with us. This includes:",
          "• Name and contact details (e.g., email address, telephone number)",
          "• Communication data (e.g., messages, emails)",
          "• Data relating to the use of our website (e.g., IP address, browser information, access times)",
          "• Data relating to the performance of contracts (e.g., name, address, invoice number)",
          "• Data relating to payment (e.g., payment data, bank connection information)"
        ]
      },
      {
        title: "4. Purposes of data processing",
        content: [
          "The processing of data is carried out exclusively for the following purposes:",
          "• Performance of contracts and customer service",
          "• Communication with customers and interested parties",
          "• Improvement of our website and online offerings",
          "• Analysis of user behavior on our website",
          "• Ensuring the security of our IT systems"
        ]
      },
      {
        title: "5. Rights of the data subject",
        content: [
          "You have the right to:",
          "• Request information about the personal data processed by us",
          "• Request correction of incorrect data",
          "• Request deletion of your data (unless further statutory retention periods apply)",
          "• Request restriction of processing",
          "• Request transfer to another controller",
          "• Lodge a complaint"
        ]
      },
      {
        title: "6. Data security",
        content: [
          "We take technical and organizational measures to protect your data against unauthorized access, loss, destruction, or against unauthorized modification. These include:",
          "• Encryption of transmitted data",
          "• Secure storage of passwords",
          "• Regular security audits"
        ]
      },
      {
        title: "7. Deletion of data",
        content: [
          "Data will be deleted as soon as the purpose of processing ceases or the retention period expires. After the retention periods, the data are anonymized by technical and organizational measures.",
          "• Communication data (e.g., emails) will be deleted after a maximum of 30 days.",
          "• Data relating to contract performance (e.g., invoices) will be deleted after a maximum of 10 years.",
          "• Payment data (e.g., bank connection information) will be deleted after a maximum of 7 years."
        ]
      },
      {
        title: "8. Changes to this privacy policy",
        content: [
          "We reserve the right to change this privacy policy to adapt it to technical or legal developments. The current version is always available on our website."
        ]
      }
    ],
    impressumPageTitle: "Impressum (Nota Legal)",
    impressumPageSections: [
      {
        title: "Informações de acordo com § 5 TMG",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Contact",
        content: [
          "Phone: 0711 12171034",
          "E-Mail: info@cozwei.de"
        ]
      },
      {
        title: "Sales tax identification number",
        content: [
          "Sales tax identification number according to § 27 a UStG: 000 000 00000"
        ]
      },
      {
        title: "Responsible for journalistic content",
        content: [
          "COzwei GmbH\nGutenbergstraße 16a\n70176 Stuttgart"
        ]
      },
      {
        title: "Disclaimer",
        content: [
          "The content of this website is carefully checked. However, we do not guarantee its completeness, accuracy, and currency. As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG. According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate a criminal offense.",
          "Our obligations to remove information or to block the use of information under general laws remain unaffected by this. However, liability for such violations is only possible from the point in time at which the violation became known. Upon becoming aware of such violations, we will immediately remove such content.",
          "We assume no liability for the accuracy, completeness, and currency of the information provided. The use of any information on this website is at your own risk."
        ]
      },
      {
        title: "Copyright",
        content: [
          "The content created by the website operators on these pages is subject to German copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.",
          "Insofar as the content on this page was not created by the operator, copyrights of third parties must be observed. In particular, the content of third parties is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of violations of copyright, we will immediately remove such content.",
          "Our website contains links to external websites of third parties. To these, §§ 8 to 10 TMG are not applicable without special notice. We have no influence on the admission and content of the linked pages. Therefore, we expressly distance ourselves from all content of third parties found via these links or links.",
          "This declaration applies to all links and links offered on this website."
        ]
      },
      {
        title: "Data protection",
        content: [
          "The use of our website is generally possible without providing personal data. Where personal data (e.g., name, address, email address, etc.) is collected, this is done as far as possible on a voluntary basis. This data will not be passed on to third parties without your explicit consent.",
          "We would like to point out that the data transmission over the Internet (e.g., when communicating by email) may have security gaps. A complete protection of the data against unauthorized access by third parties is not possible. The user assumes the risk that his data may be changed, deleted, or made inaccessible by third parties unintentionally or intentionally.",
          "We reserve the right to change the terms of use, to supplement or update them, even without prior notice. The terms of use apply from the point in time of the first use of the website. It is recommended to check the terms of use regularly."
        ]
      }
    ],
  },
}; 