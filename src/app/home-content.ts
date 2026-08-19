// Homepage-Relaunch-Content (Branch relaunch, Stufe 1).
// Texte folgen dem Mockup "Homepage.png" vom August 2026; Struktur analog
// zu den per-Page content.ts der Insights-Artikel.

type Solution = {
  title: string;
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
        title: "Transparenz schaffen",
        items: ["CO₂-Bilanz (CCF)", "Product Carbon Footprint", "Verifizierung ISO 14064-3"],
      },
      {
        title: "Berichten und Offenlegen",
        items: ["CSRD / ESRS E1", "CDP Klima-Reporting", "VSME / GRI freiwillig"],
      },
      {
        title: "Reduzieren und Umsetzen",
        items: ["Dekarbonisierungsplan, SBTi", "Maßnahmen: PV, Sanierung"],
      },
      {
        title: "Förderung",
        items: ["NKI", "BAFA"],
      },
      {
        title: "AI-Automatisierung",
        items: [],
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
        title: "Creating transparency",
        items: ["Corporate Carbon Footprint (CCF)", "Product Carbon Footprint", "Verification ISO 14064-3"],
      },
      {
        title: "Reporting and disclosure",
        items: ["CSRD / ESRS E1", "CDP climate reporting", "VSME / GRI voluntary"],
      },
      {
        title: "Reducing and implementing",
        items: ["Decarbonisation plan, SBTi", "Measures: PV, refurbishment"],
      },
      {
        title: "Funding",
        items: ["NKI", "BAFA"],
      },
      {
        title: "AI automation",
        items: [],
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
        title: "Criar transparência",
        items: ["Inventário CO₂ (CCF)", "Product Carbon Footprint", "Verificação ISO 14064-3"],
      },
      {
        title: "Relatar e divulgar",
        items: ["CSRD / ESRS E1", "Relato climático CDP", "VSME / GRI voluntário"],
      },
      {
        title: "Reduzir e implementar",
        items: ["Plano de descarbonização, SBTi", "Medidas: fotovoltaico, renovação"],
      },
      {
        title: "Apoios",
        items: ["NKI", "BAFA"],
      },
      {
        title: "Automação com IA",
        items: [],
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
