// Navigations-Struktur für das Mega-Menü (Relaunch, Stufe 2).
// Drei Ebenen unter "Lösungen": Kategorie -> Leistung -> Kurzbeschreibung.
// Die Beschreibungen speisen das rechte Slate-Panel des Mega-Menüs.

import { HUBSPOT_FORM_URL } from "./links";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  description: string;
};

export type NavCategory = {
  label: string;
  items: NavItem[];
};

export type BranchenItem = {
  label: string;
  href: string;
};

type NavContent = {
  solutions: string;
  branchen: string;
  references: string;
  wissen: string;
  about: string;
  contact: string;
  categories: NavCategory[];
  branchenItems: BranchenItem[];
};

export const navContent: Record<"de" | "en" | "pt", NavContent> = {
  de: {
    solutions: "Lösungen",
    branchen: "Branchen",
    references: "Referenzen",
    wissen: "Wissen",
    about: "Über uns",
    contact: "Kontakt",
    categories: [
      {
        label: "Transparenz schaffen",
        items: [
          {
            label: "CO₂-Bilanz (CCF)",
            href: "/dekarbonisierung",
            description:
              "Treibhausgasbilanz für das gesamte Unternehmen nach GHG Protocol: Scope 1, Scope 2 und die wesentlichen Scope-3-Kategorien.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/dekarbonisierung",
            description:
              "Produktbezogene Klimabilanz vom Rohstoff bis zum Lebensende, als Grundlage für Kundenanfragen und Produktvergleiche.",
          },
          {
            label: "Verifizierung ISO 14064-3",
            href: "/verifizierung",
            description:
              "Methodische Prüfung Ihres Corporate Carbon Footprints, unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO 14064-3.",
          },
        ],
      },
      {
        label: "Berichten und Offenlegen",
        items: [
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Klimaberichterstattung nach den europäischen Standards: von der Wesentlichkeitsanalyse bis zum prüffähigen Bericht.",
          },
          {
            label: "CDP Klima-Reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Begleitung durch den CDP Climate Change Questionnaire, von der Datenbasis bis zur fristgerechten Einreichung im CDP-Portal.",
          },
          {
            label: "VSME / GRI freiwillig",
            href: "/nachhaltigkeit",
            description:
              "Freiwillige Nachhaltigkeitsberichterstattung für Unternehmen unterhalb der Berichtspflicht, anschlussfähig an Kundenanfragen.",
          },
        ],
      },
      {
        label: "Reduzieren und Umsetzen",
        items: [
          {
            label: "Dekarbonisierungsplan, SBTi",
            href: "/dekarbonisierung",
            description:
              "Wissenschaftsbasierte Reduktionspfade und Übergangspläne, kompatibel zur Science Based Targets initiative.",
          },
          {
            label: "Maßnahmen: PV, Sanierung",
            href: "/massnahmen",
            description:
              "Identifikation, Bewertung und Umsetzungsbegleitung konkreter Effizienz- und Erzeugungsmaßnahmen.",
          },
        ],
      },
      {
        label: "Förderung",
        items: [
          {
            label: "NKI Klimaschutzkonzepte",
            href: "/klimaschutzkonzepte",
            description:
              "Integrierte Klimaschutzkonzepte für Kommunen, Hochschulen und Einrichtungen, gefördert über die Nationale Klimaschutzinitiative.",
          },
          {
            label: "BAFA / Förder-Finder",
            href: "/foerderungen",
            description:
              "Überblick über Bundes- und Landesförderungen mit interaktivem Förder-Finder, inklusive EEW Modul 4 für Maschineninvestitionen.",
          },
        ],
      },
      {
        label: "AI-Automatisierung",
        items: [
          {
            label: "Individuelle Lösungen",
            href: HUBSPOT_FORM_URL,
            external: true,
            description:
              "Automatisierung von Datenerfassung und Reporting-Prozessen rund um Ihre Klimakennzahlen. Sprechen Sie uns an.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Automotive", href: "/insights/csrd-automobilindustrie-lektionen-zulieferer" },
      { label: "Druck & Verlag", href: "/insights/buchverlage-dekarbonisierung" },
      { label: "Verbrauchsgüter", href: "/referenzen" },
      { label: "Öffentliche Einrichtungen", href: "/klimaschutzkonzepte" },
    ],
  },

  en: {
    solutions: "Solutions",
    branchen: "Industries",
    references: "References",
    wissen: "Insights",
    about: "About us",
    contact: "Contact",
    categories: [
      {
        label: "Creating transparency",
        items: [
          {
            label: "Corporate Carbon Footprint (CCF)",
            href: "/dekarbonisierung",
            description:
              "Company-wide greenhouse gas inventory per the GHG Protocol: Scope 1, Scope 2 and the material Scope 3 categories.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/dekarbonisierung",
            description:
              "Product-level climate footprint from raw material to end of life, as the basis for customer requests and product comparisons.",
          },
          {
            label: "Verification ISO 14064-3",
            href: "/verifizierung",
            description:
              "Methodological review of your Corporate Carbon Footprint, independent of the software used, aligned with the GHG Protocol and the audit principles of ISO 14064-3.",
          },
        ],
      },
      {
        label: "Reporting and disclosure",
        items: [
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Climate reporting under the European standards: from the materiality analysis to an audit-ready report.",
          },
          {
            label: "CDP climate reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Support through the CDP Climate Change Questionnaire, from the data baseline to timely submission in the CDP portal.",
          },
          {
            label: "VSME / GRI voluntary",
            href: "/nachhaltigkeit",
            description:
              "Voluntary sustainability reporting for companies below the reporting thresholds, compatible with customer requests.",
          },
        ],
      },
      {
        label: "Reducing and implementing",
        items: [
          {
            label: "Decarbonisation plan, SBTi",
            href: "/dekarbonisierung",
            description:
              "Science-based reduction pathways and transition plans, compatible with the Science Based Targets initiative.",
          },
          {
            label: "Measures: PV, refurbishment",
            href: "/massnahmen",
            description:
              "Identification, assessment and implementation support for concrete efficiency and generation measures.",
          },
        ],
      },
      {
        label: "Funding",
        items: [
          {
            label: "NKI climate protection concepts",
            href: "/klimaschutzkonzepte",
            description:
              "Integrated climate protection concepts for municipalities, universities and institutions, funded through the German NKI.",
          },
          {
            label: "BAFA / funding finder",
            href: "/foerderungen",
            description:
              "Overview of federal and state funding with an interactive funding finder, including EEW Module 4 for machinery investments.",
          },
        ],
      },
      {
        label: "AI automation",
        items: [
          {
            label: "Individual solutions",
            href: HUBSPOT_FORM_URL,
            external: true,
            description:
              "Automation of data collection and reporting processes around your climate metrics. Talk to us.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Automotive", href: "/insights/csrd-automobilindustrie-lektionen-zulieferer" },
      { label: "Print & publishing", href: "/insights/buchverlage-dekarbonisierung" },
      { label: "Consumer goods", href: "/referenzen" },
      { label: "Public institutions", href: "/klimaschutzkonzepte" },
    ],
  },

  pt: {
    solutions: "Soluções",
    branchen: "Setores",
    references: "Referências",
    wissen: "Insights",
    about: "Sobre nós",
    contact: "Contacto",
    categories: [
      {
        label: "Criar transparência",
        items: [
          {
            label: "Inventário CO₂ (CCF)",
            href: "/dekarbonisierung",
            description:
              "Inventário de gases de efeito estufa para toda a empresa segundo o GHG Protocol: Escopo 1, Escopo 2 e as categorias materiais do Escopo 3.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/dekarbonisierung",
            description:
              "Inventário climático ao nível do produto, da matéria-prima ao fim de vida, como base para pedidos de clientes e comparações de produtos.",
          },
          {
            label: "Verificação ISO 14064-3",
            href: "/verifizierung",
            description:
              "Análise metodológica do seu Corporate Carbon Footprint, independente do software utilizado, alinhada com o GHG Protocol e os princípios de auditoria da ISO 14064-3.",
          },
        ],
      },
      {
        label: "Relatar e divulgar",
        items: [
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Relato climático segundo os padrões europeus: da análise de materialidade ao relatório auditável.",
          },
          {
            label: "Relato climático CDP",
            href: "/cdp-klimaberichterstattung",
            description:
              "Acompanhamento no CDP Climate Change Questionnaire, da base de dados à submissão atempada no portal CDP.",
          },
          {
            label: "VSME / GRI voluntário",
            href: "/nachhaltigkeit",
            description:
              "Relato voluntário de sustentabilidade para empresas abaixo dos limiares de relato, compatível com pedidos de clientes.",
          },
        ],
      },
      {
        label: "Reduzir e implementar",
        items: [
          {
            label: "Plano de descarbonização, SBTi",
            href: "/dekarbonisierung",
            description:
              "Trajetórias de redução baseadas na ciência e planos de transição, compatíveis com a Science Based Targets initiative.",
          },
          {
            label: "Medidas: fotovoltaico, renovação",
            href: "/massnahmen",
            description:
              "Identificação, avaliação e acompanhamento da implementação de medidas concretas de eficiência e geração.",
          },
        ],
      },
      {
        label: "Apoios",
        items: [
          {
            label: "Conceitos NKI de proteção climática",
            href: "/klimaschutzkonzepte",
            description:
              "Conceitos integrados de proteção climática para municípios, universidades e instituições, financiados pela NKI alemã.",
          },
          {
            label: "BAFA / localizador de apoios",
            href: "/foerderungen",
            description:
              "Visão geral dos apoios federais e regionais com localizador interativo, incluindo o EEW Módulo 4 para investimentos em maquinaria.",
          },
        ],
      },
      {
        label: "Automação com IA",
        items: [
          {
            label: "Soluções individuais",
            href: HUBSPOT_FORM_URL,
            external: true,
            description:
              "Automação de processos de recolha de dados e de relato em torno dos seus indicadores climáticos. Fale connosco.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Automóvel", href: "/insights/csrd-automobilindustrie-lektionen-zulieferer" },
      { label: "Impressão & edição", href: "/insights/buchverlage-dekarbonisierung" },
      { label: "Bens de consumo", href: "/referenzen" },
      { label: "Instituições públicas", href: "/klimaschutzkonzepte" },
    ],
  },
};
