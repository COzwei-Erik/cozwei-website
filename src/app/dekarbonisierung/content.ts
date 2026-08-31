// Ergänzende Inhalte des Umbaus 2026: die drei Teaser-Karten passend zur
// Startseiten-Kachel "Emissionen reduzieren", der SBTi-Absatz sowie die
// Bausteine am Seitenende. Die bestehenden Sektionen ziehen ihre Texte
// weiterhin aus LanguageContext.tsx.

export type DekarbContent = {
  cards: { title: string; body: string; linkLabel: string }[];

  sbtiTitle: string;
  sbtiBody: string;

  relatedTitle: string;
  related: { title: string; body: string }[];

  ctaContext: string;
};

export const dekarbContent: Record<"de" | "en" | "pt", DekarbContent> = {
  de: {
    cards: [
      {
        title: "Dekarbonisierungsplan & SBTi",
        body: "Reduktionspfad, Zwischenziele und wissenschaftsbasierte Klimaziele, abgeleitet aus Ihrer Treibhausgasbilanz.",
        linkLabel: "Zu den vier Schritten",
      },
      {
        title: "Maßnahmenumsetzung",
        body: "Von Photovoltaik über Sanierung bis Anlagentechnik, umgesetzt über unser geprüftes Partnernetzwerk.",
        linkLabel: "Zur Maßnahmenumsetzung",
      },
      {
        title: "Energieeffizienz im Betrieb",
        body: "Verbräuche analysieren, Maßnahmen nach Wirtschaftlichkeit priorisieren, Förderung mitnehmen.",
        linkLabel: "Zur Energieeffizienz",
      },
    ],

    sbtiTitle: "Klimaziele nach SBTi",
    sbtiBody:
      "Wir bereiten die Einreichung wissenschaftsbasierter Klimaziele bei der Science Based Targets initiative vor: Zielarchitektur (near-term, optional net-zero), Berechnung der Reduktionspfade und Begleitung des Validierungsprozesses.",

    relatedTitle: "Passende Lösungen",
    related: [
      {
        title: "CO₂-Bilanzierung",
        body: "Die Datengrundlage für jeden Reduktionspfad.",
      },
      {
        title: "Maßnahmen",
        body: "Umsetzung über das geprüfte Partnernetzwerk.",
      },
      {
        title: "Förderung",
        body: "Zuschüsse für Beratung und Investitionen sichern.",
      },
    ],

    ctaContext:
      "Sie haben eine Bilanz und brauchen den nächsten Schritt? Wir skizzieren den Reduktionspfad im Erstgespräch.",
  },

  en: {
    cards: [
      {
        title: "Decarbonisation plan & SBTi",
        body: "Reduction pathway, interim targets and science-based climate targets, derived from your greenhouse gas inventory.",
        linkLabel: "See the four steps",
      },
      {
        title: "Implementing measures",
        body: "From photovoltaics through refurbishment to plant engineering, delivered via our vetted partner network.",
        linkLabel: "See implementation",
      },
      {
        title: "Energy efficiency in operations",
        body: "Analyse consumption, prioritise measures by economics, use the available funding.",
        linkLabel: "See energy efficiency",
      },
    ],

    sbtiTitle: "Climate targets with SBTi",
    sbtiBody:
      "We prepare the submission of science-based climate targets to the Science Based Targets initiative: target architecture (near-term, optionally net-zero), calculation of the reduction pathways and support through the validation process.",

    relatedTitle: "Related solutions",
    related: [
      {
        title: "Carbon accounting",
        body: "The data basis for every reduction pathway.",
      },
      {
        title: "Measures",
        body: "Implementation via the vetted partner network.",
      },
      {
        title: "Funding",
        body: "Secure grants for consulting and investment.",
      },
    ],

    ctaContext:
      "You have an inventory and need the next step? We outline the reduction pathway in a first call.",
  },

  pt: {
    cards: [
      {
        title: "Plano de descarbonização e SBTi",
        body: "Trajetória de redução, metas intermédias e metas climáticas com base científica, derivadas do seu inventário de emissões.",
        linkLabel: "Ver os quatro passos",
      },
      {
        title: "Implementação de medidas",
        body: "De fotovoltaico a renovação e tecnologia de instalações, através da nossa rede de parceiros verificados.",
        linkLabel: "Ver implementação",
      },
      {
        title: "Eficiência energética na operação",
        body: "Analisar consumos, priorizar medidas por rentabilidade e aproveitar o financiamento.",
        linkLabel: "Ver eficiência energética",
      },
    ],

    sbtiTitle: "Metas climáticas segundo a SBTi",
    sbtiBody:
      "Preparamos a submissão de metas climáticas com base científica à Science Based Targets initiative: arquitetura das metas (near-term, opcionalmente net-zero), cálculo das trajetórias de redução e acompanhamento do processo de validação.",

    relatedTitle: "Soluções relacionadas",
    related: [
      {
        title: "Balanço de carbono",
        body: "A base de dados para qualquer trajetória de redução.",
      },
      {
        title: "Medidas",
        body: "Implementação através da rede de parceiros verificados.",
      },
      {
        title: "Financiamento",
        body: "Garantir apoios para consultoria e investimento.",
      },
    ],

    ctaContext:
      "Já tem um inventário e precisa do passo seguinte? Delineamos a trajetória de redução numa primeira conversa.",
  },
};
