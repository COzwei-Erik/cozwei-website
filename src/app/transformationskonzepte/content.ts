// Ergänzende Inhalte des Umbaus 2026: Modul-4-Sektion, Begriffshinweis und FAQ.
// Die bestehenden Sektionen der Seite ziehen ihre Texte weiterhin aus
// LanguageContext.tsx; nur die neuen Blöcke liegen hier, analog zum Muster der
// per-Page content.ts der Insights-Artikel.

export type TransfContent = {
  begriffHinweis: string;

  modul4Title: string;
  modul4Body: string;
  modul4LinkLabel: string;

  faqTitle: string;
  faq: { question: string; answer: string }[];

  relatedTitle: string;
  related: { title: string; body: string }[];

  ctaContext: string;
};

export const transfContent: Record<"de" | "en" | "pt", TransfContent> = {
  de: {
    begriffHinweis:
      "Das BAFA führt das Programm inzwischen unter „Modul 5: Transformationspläne“. Früher war die Bezeichnung Transformationskonzept gebräuchlich, gemeint ist dasselbe Vorhaben.",

    modul4Title: "Modul 4: die Umsetzung fördern lassen",
    modul4Body:
      "Nach dem Plan folgt die Umsetzung: EEW Modul 4 bezuschusst Investitionen in die energie- und ressourcenbezogene Optimierung von Anlagen und Prozessen (Basis- und Premiumförderung). Wir verbinden beides: Der Transformationsplan priorisiert, Modul 4 finanziert mit.",
    modul4LinkLabel: "Zur Übersicht aller Förderprogramme",

    faqTitle: "Häufige Fragen",
    faq: [
      {
        question: "Wie hoch ist die Förderquote und was bringt der Netzwerkbonus?",
        answer:
          "Gefördert werden 40 bis 60 Prozent der Beratungskosten, maximal 60.000 Euro je Plan. Mit Mitgliedschaft in einem Netzwerk der Initiative Energieeffizienz- und Klimaschutz-Netzwerke (IEEKN) steigt die Quote um 10 Prozentpunkte und die Maximalsumme auf 90.000 Euro.",
      },
      {
        question: "Reichen reine Gebäudemaßnahmen?",
        answer:
          "Nein. Mindestens eine Maßnahme muss einen direkten Bezug zu einem Produktions- oder Dienstleistungsprozess haben.",
      },
      {
        question: "Wie werden mehrere Standorte behandelt?",
        answer:
          "Mehrere Standorte können einzeln oder gebündelt beplant werden. Bei Einzelplänen gilt die Maximalsumme je Standort, bei einem gebündelten Plan gilt sie für das Gesamtvorhaben. Was günstiger ist, prüfen wir vor der Antragstellung.",
      },
    ],

    relatedTitle: "Passende Lösungen",
    related: [
      {
        title: "Förderung",
        body: "Alle Programme im Überblick, von BAFA über GRW bis NKI.",
      },
      {
        title: "CO₂-Bilanzierung",
        body: "Die Treibhausgasbilanz ist förderfähiger Bestandteil des Plans.",
      },
      {
        title: "Emissionen reduzieren",
        body: "Vom Fahrplan zur Umsetzung mit Maßnahmen und Klimazielen.",
      },
    ],

    ctaContext:
      "Wir prüfen kostenlos, ob Ihr Vorhaben förderfähig ist und welche Quote für Sie gilt.",
  },

  en: {
    begriffHinweis:
      "BAFA now runs the programme as “Module 5: transformation plans”. The earlier term was transformation concept; it refers to the same undertaking.",

    modul4Title: "Module 4: getting the implementation funded",
    modul4Body:
      "Implementation follows the plan: EEW Module 4 subsidises investments in the energy- and resource-related optimisation of plants and processes (basic and premium funding). We connect the two: the transformation plan sets priorities, Module 4 helps finance them.",
    modul4LinkLabel: "See all funding programmes",

    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "How high is the funding rate and what does the network bonus add?",
        answer:
          "Funding covers 40 to 60 percent of consulting costs, up to EUR 60,000 per plan. With membership in a network of the German energy efficiency and climate protection networks initiative (IEEKN), the rate rises by 10 percentage points and the cap to EUR 90,000.",
      },
      {
        question: "Are building measures alone sufficient?",
        answer:
          "No. At least one measure must relate directly to a production or service process.",
      },
      {
        question: "How are multiple sites handled?",
        answer:
          "Multiple sites can be planned individually or bundled. With individual plans the cap applies per site, with a bundled plan it applies to the overall project. We check which is more favourable before the application.",
      },
    ],

    relatedTitle: "Related solutions",
    related: [
      {
        title: "Funding",
        body: "All programmes at a glance, from BAFA through GRW to NKI.",
      },
      {
        title: "Carbon accounting",
        body: "The greenhouse gas inventory is an eligible part of the plan.",
      },
      {
        title: "Reducing emissions",
        body: "From roadmap to implementation with measures and climate targets.",
      },
    ],

    ctaContext:
      "We check free of charge whether your project is eligible and which rate applies to you.",
  },

  pt: {
    begriffHinweis:
      "O BAFA designa agora o programa como “Módulo 5: planos de transformação”. Anteriormente usava-se o termo conceito de transformação; trata-se do mesmo projeto.",

    modul4Title: "Módulo 4: financiar a implementação",
    modul4Body:
      "Depois do plano vem a implementação: o EEW Módulo 4 subsidia investimentos na otimização energética e de recursos de instalações e processos (financiamento base e premium). Combinamos ambos: o plano de transformação define prioridades, o Módulo 4 ajuda a financiar.",
    modul4LinkLabel: "Ver todos os programas de financiamento",

    faqTitle: "Perguntas frequentes",
    faq: [
      {
        question: "Qual é a taxa de financiamento e o que traz o bónus de rede?",
        answer:
          "São financiados 40 a 60 por cento dos custos de consultoria, no máximo 60.000 euros por plano. Com adesão a uma rede da iniciativa alemã de redes de eficiência energética e proteção climática (IEEKN), a taxa aumenta 10 pontos percentuais e o limite passa a 90.000 euros.",
      },
      {
        question: "Bastam medidas apenas no edifício?",
        answer:
          "Não. Pelo menos uma medida tem de estar diretamente relacionada com um processo de produção ou de serviço.",
      },
      {
        question: "Como são tratados vários locais?",
        answer:
          "Vários locais podem ser planeados individualmente ou em conjunto. Em planos individuais o limite aplica-se por local, num plano conjunto aplica-se ao projeto global. Verificamos o que é mais vantajoso antes da candidatura.",
      },
    ],

    relatedTitle: "Soluções relacionadas",
    related: [
      {
        title: "Financiamento",
        body: "Todos os programas em resumo, do BAFA ao GRW e NKI.",
      },
      {
        title: "Balanço de carbono",
        body: "O inventário de gases é parte elegível do plano.",
      },
      {
        title: "Reduzir emissões",
        body: "Do roteiro à implementação, com medidas e metas climáticas.",
      },
    ],

    ctaContext:
      "Verificamos gratuitamente se o seu projeto é elegível e qual a taxa aplicável.",
  },
};
