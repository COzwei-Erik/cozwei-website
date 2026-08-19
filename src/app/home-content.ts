// Homepage-Relaunch-Content (Branch relaunch, Stufe 1).
// Texte folgen dem Mockup "Homepage.png" vom August 2026; Struktur analog
// zu den per-Page content.ts der Insights-Artikel.

type Solution = {
  title: string;
  description: string;
  items: string[];
};

type Branche = {
  title: string;
  intro: string;
  button: string;
};

type Testimonial = {
  quote: string;
  name: string;
};

type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroArrowAria: string;

  kundenTitle: string;

  loesungenTitle: string;
  solutions: Solution[];

  branchenTitle: string;
  branchen: Branche[];

  testimonialsTitle: string;
  testimonials: Testimonial[];

  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;

  footerLoesungenHead: string;
  footerLoesungen: string[];
  footerBranchenHead: string;
  footerBranchen: string[];
  footerNavReferenzen: string;
  footerNavWissen: string;
  footerNavUeberUns: string;
  footerNavKontakt: string;
};

export const homeContent: Record<"de" | "en" | "pt", HomeContent> = {
  de: {
    heroTitle: "Wir machen Klimaziele möglich",
    heroSubtitle:
      "Unser Ziel ist es, Unternehmen und Institutionen zu befähigen, nachhaltiger zu wirtschaften und Klimaziele zu erreichen.",
    heroArrowAria: "Zum Inhalt scrollen",

    kundenTitle: "Wer auf unsere Beratung setzt",

    loesungenTitle: "Lösungen",
    solutions: [
      {
        title: "Treibhausgase bilanzieren",
        description:
          "Wir berechnen Ihre CO₂-Emissionen nach GHG Protocol und ISO-Normen, als Basis für alle weiteren Schritte.",
        items: [
          "Corporate Carbon Footprint (CO₂-Bilanz)",
          "Product Carbon Footprint",
          "Verifizierung ISO 14064-3",
        ],
      },
      {
        title: "Emissionen reduzieren",
        description:
          "Vom Dekarbonisierungsplan bis zur Umsetzung: Wir bringen Ihre Klimaziele in die Praxis.",
        items: [
          "Dekarbonisierungsplan & Klimaziele (SBTi)",
          "Maßnahmenumsetzung: PV, Sanierung",
          "Energieeffizienz im Betrieb",
        ],
      },
      {
        title: "Nachhaltigkeit berichten",
        description:
          "Wir bereiten Ihre Klimadaten berichtsfertig auf, pflichtgemäß oder freiwillig.",
        items: ["CSRD / ESRS E1", "CDP Klima-Reporting", "VSME & GRI (freiwillig)", "CBAM"],
      },
      {
        title: "Förderung sichern",
        description:
          "Wir identifizieren passende Förderprogramme und begleiten Sie durch die Antragstellung.",
        items: [
          "Förderanalyse für Ihr Vorhaben",
          "EEW / BAFA Modul 4",
          "Transformationskonzept (bis zu 90.000 €)",
          "GRW-Förderung",
        ],
      },
      {
        title: "Klimaschutz für öffentliche Einrichtungen",
        description:
          "NKI-geförderte Klimaschutzkonzepte für Institutionen, von der Antragstellung bis zum Maßnahmenplan.",
        items: [
          "Hochschulen & Universitäten",
          "Kirchen & kirchliche Einrichtungen",
          "Krankenhäuser & soziale Träger",
        ],
      },
      {
        title: "KI & Automatisierung",
        description:
          "Wir entwickeln KI-Lösungen, die Ihre Prozesse beschleunigen, von der Datenerhebung bis zur individuellen Software.",
        items: [
          "KI-Implementierung im Unternehmen",
          "Individuelle Softwareentwicklung",
          "Automatisierte Nachhaltigkeitsdaten",
        ],
      },
    ],

    branchenTitle: "Branchen",
    branchen: [
      {
        title: "Automotive",
        intro: "Eine Erfolgsgeschichte aus der Zusammenarbeit mit drei großen Automobilherstellern.",
        button: "Hier weiterlesen",
      },
      {
        title: "Druck & Verlag",
        intro: "Von der Klimabilanz eines Buches bis zur Dekarbonisierung ganzer Verlagsprogramme.",
        button: "Hier weiterlesen",
      },
      {
        title: "Verbrauchsgüter",
        intro: "Klimabilanzen und Reduktionspfade für Handel und Konsumgüter.",
        button: "Referenzen ansehen",
      },
      {
        title: "Öffentliche Einrichtungen",
        intro: "NKI-geförderte Klimaschutzkonzepte für Kommunen, Hochschulen und Träger.",
        button: "Mehr erfahren",
      },
    ],

    testimonialsTitle: "Kundenstimmen",
    testimonials: [
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
    ],

    ctaTitle: "Beginnen Sie noch heute",
    ctaBody:
      "Ihren Weg zur Nachhaltigkeit: Arbeiten Sie mit unseren Experten zusammen, um Ihre Umweltziele in messbare, vorschriftsmäßige und zukunftsfähige Strategien umzusetzen.",
    ctaButton: "Kontaktieren Sie uns",

    footerLoesungenHead: "Lösungen",
    footerLoesungen: [
      "CO₂-Bilanz (CCF)",
      "Product Carbon Footprint",
      "Verifizierung ISO 14064-3",
      "CSRD / ESRS E1",
      "CDP Klima-Reporting",
      "VSME / GRI freiwillig",
      "Dekarbonisierungsplan, SBTi",
      "Maßnahmen: PV, Sanierung",
    ],
    footerBranchenHead: "Branchen",
    footerBranchen: [
      "Druck und Verlag",
      "Automobilzulieferer",
      "Industrie, Maschinenbau",
      "Öffentlicher Sektor, Kommunen",
    ],
    footerNavReferenzen: "Referenzen",
    footerNavWissen: "Wissen",
    footerNavUeberUns: "Über uns",
    footerNavKontakt: "Kontakt",
  },

  en: {
    heroTitle: "We make climate targets achievable",
    heroSubtitle:
      "Our goal is to enable companies and institutions to operate more sustainably and reach their climate targets.",
    heroArrowAria: "Scroll to content",

    kundenTitle: "Who relies on our advice",

    loesungenTitle: "Solutions",
    solutions: [
      {
        title: "Accounting for greenhouse gases",
        description:
          "We calculate your CO₂ emissions in line with the GHG Protocol and ISO standards, the basis for every further step.",
        items: [
          "Corporate Carbon Footprint (CCF)",
          "Product Carbon Footprint",
          "Verification ISO 14064-3",
        ],
      },
      {
        title: "Reducing emissions",
        description:
          "From the decarbonisation plan through to implementation: we put your climate targets into practice.",
        items: [
          "Decarbonisation plan & climate targets (SBTi)",
          "Implementation: PV, refurbishment",
          "Energy efficiency in operations",
        ],
      },
      {
        title: "Reporting on sustainability",
        description:
          "We prepare your climate data ready for reporting, whether mandatory or voluntary.",
        items: ["CSRD / ESRS E1", "CDP climate reporting", "VSME & GRI (voluntary)", "CBAM"],
      },
      {
        title: "Securing funding",
        description:
          "We identify suitable funding programmes and guide you through the application.",
        items: [
          "Funding analysis for your project",
          "EEW / BAFA module 4",
          "Transformation concept (up to EUR 90,000)",
          "GRW funding",
        ],
      },
      {
        title: "Climate action for public institutions",
        description:
          "NKI-funded climate action plans for institutions, from the application to the roadmap of measures.",
        items: [
          "Universities & higher education",
          "Churches & church institutions",
          "Hospitals & social service providers",
        ],
      },
      {
        title: "AI & automation",
        description:
          "We build AI solutions that speed up your processes, from data collection to custom software.",
        items: [
          "AI implementation in your organisation",
          "Custom software development",
          "Automated sustainability data",
        ],
      },
    ],

    branchenTitle: "Industries",
    branchen: [
      {
        title: "Automotive",
        intro: "A success story from working with three major car manufacturers.",
        button: "Read more",
      },
      {
        title: "Print & publishing",
        intro: "From the climate footprint of a single book to decarbonising entire publishing programmes.",
        button: "Read more",
      },
      {
        title: "Consumer goods",
        intro: "Climate inventories and reduction pathways for retail and consumer goods.",
        button: "View references",
      },
      {
        title: "Public institutions",
        intro: "NKI-funded climate protection concepts for municipalities, universities and public bodies.",
        button: "Learn more",
      },
    ],

    testimonialsTitle: "What clients say",
    testimonials: [
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
    ],

    ctaTitle: "Start today",
    ctaBody:
      "Your path to sustainability: work with our experts to turn your environmental goals into measurable, compliant and future-proof strategies.",
    ctaButton: "Contact us",

    footerLoesungenHead: "Solutions",
    footerLoesungen: [
      "Corporate Carbon Footprint (CCF)",
      "Product Carbon Footprint",
      "Verification ISO 14064-3",
      "CSRD / ESRS E1",
      "CDP climate reporting",
      "VSME / GRI voluntary",
      "Decarbonisation plan, SBTi",
      "Measures: PV, refurbishment",
    ],
    footerBranchenHead: "Industries",
    footerBranchen: [
      "Print and publishing",
      "Automotive suppliers",
      "Industry, machinery",
      "Public sector, municipalities",
    ],
    footerNavReferenzen: "References",
    footerNavWissen: "Insights",
    footerNavUeberUns: "About us",
    footerNavKontakt: "Contact",
  },

  pt: {
    heroTitle: "Tornamos as metas climáticas possíveis",
    heroSubtitle:
      "O nosso objetivo é capacitar empresas e instituições para operar de forma mais sustentável e alcançar as suas metas climáticas.",
    heroArrowAria: "Ir para o conteúdo",

    kundenTitle: "Quem confia na nossa consultoria",

    loesungenTitle: "Soluções",
    solutions: [
      {
        title: "Balanço de gases com efeito de estufa",
        description:
          "Calculamos as suas emissões de CO₂ segundo o GHG Protocol e as normas ISO, a base para todos os passos seguintes.",
        items: [
          "Corporate Carbon Footprint (pegada de carbono)",
          "Product Carbon Footprint",
          "Verificação ISO 14064-3",
        ],
      },
      {
        title: "Reduzir emissões",
        description:
          "Do plano de descarbonização à implementação: colocamos as suas metas climáticas em prática.",
        items: [
          "Plano de descarbonização e metas (SBTi)",
          "Implementação: PV, renovação",
          "Eficiência energética na operação",
        ],
      },
      {
        title: "Relatar sustentabilidade",
        description:
          "Preparamos os seus dados climáticos prontos para relatório, obrigatório ou voluntário.",
        items: ["CSRD / ESRS E1", "Relatório climático CDP", "VSME e GRI (voluntário)", "CBAM"],
      },
      {
        title: "Garantir financiamento",
        description:
          "Identificamos programas de financiamento adequados e acompanhamos a candidatura.",
        items: [
          "Análise de financiamento para o seu projeto",
          "EEW / BAFA módulo 4",
          "Conceito de transformação (até 90.000 €)",
          "Financiamento GRW",
        ],
      },
      {
        title: "Proteção climática para instituições públicas",
        description:
          "Planos de proteção climática financiados pelo NKI para instituições, da candidatura ao plano de medidas.",
        items: [
          "Universidades e ensino superior",
          "Igrejas e instituições religiosas",
          "Hospitais e entidades sociais",
        ],
      },
      {
        title: "IA e automatização",
        description:
          "Desenvolvemos soluções de IA que aceleram os seus processos, da recolha de dados ao software personalizado.",
        items: [
          "Implementação de IA na empresa",
          "Desenvolvimento de software personalizado",
          "Dados de sustentabilidade automatizados",
        ],
      },
    ],

    branchenTitle: "Setores",
    branchen: [
      {
        title: "Automóvel",
        intro: "Uma história de sucesso da colaboração com três grandes fabricantes de automóveis.",
        button: "Ler mais",
      },
      {
        title: "Impressão & edição",
        intro: "Do inventário climático de um livro à descarbonização de programas editoriais inteiros.",
        button: "Ler mais",
      },
      {
        title: "Bens de consumo",
        intro: "Inventários climáticos e trajetórias de redução para comércio e bens de consumo.",
        button: "Ver referências",
      },
      {
        title: "Instituições públicas",
        intro: "Conceitos de proteção climática financiados pela NKI para municípios, universidades e entidades públicas.",
        button: "Saber mais",
      },
    ],

    testimonialsTitle: "O que dizem os clientes",
    testimonials: [
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "",
      },
    ],

    ctaTitle: "Comece hoje mesmo",
    ctaBody:
      "O seu caminho para a sustentabilidade: trabalhe com os nossos especialistas para transformar os seus objetivos ambientais em estratégias mensuráveis, conformes e preparadas para o futuro.",
    ctaButton: "Contacte-nos",

    footerLoesungenHead: "Soluções",
    footerLoesungen: [
      "Inventário CO₂ (CCF)",
      "Product Carbon Footprint",
      "Verificação ISO 14064-3",
      "CSRD / ESRS E1",
      "Relato climático CDP",
      "VSME / GRI voluntário",
      "Plano de descarbonização, SBTi",
      "Medidas: fotovoltaico, renovação",
    ],
    footerBranchenHead: "Setores",
    footerBranchen: [
      "Impressão e edição",
      "Fornecedores automóveis",
      "Indústria, maquinaria",
      "Setor público, municípios",
    ],
    footerNavReferenzen: "Referências",
    footerNavWissen: "Insights",
    footerNavUeberUns: "Sobre nós",
    footerNavKontakt: "Contacto",
  },
};
