// Navigations-Struktur für das Mega-Menü (Relaunch, Stufe 2).
// Drei Ebenen unter "Lösungen": Kategorie -> Leistung -> Kurzbeschreibung.
// Die Beschreibungen speisen das rechte Slate-Panel des Mega-Menüs.
// Link-Ziele entsprechen der neuen Seitenstruktur des Lösungen-Umbaus
// (Hub-Seiten + Detailseiten) und den vier Branchen-Landingpages.

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
            label: "CO₂-Bilanzierung",
            href: "/co2-bilanzierung",
            description:
              "Corporate und Product Carbon Footprint nach GHG Protocol und ISO-Normen, auditierungsfähig dokumentiert.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Vollständige Treibhausgasbilanz eines Unternehmens über Scope 1, 2 und 3, inklusive Scope-2-Dual-Reporting.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Produkt-CO₂-Bilanzen cradle-to-gate oder cradle-to-grave nach ISO 14067 und GHG Protocol Product Standard.",
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
            label: "Berichterstattung",
            href: "/berichterstattung",
            description:
              "CSRD/ESRS E1, CDP, VSME, GRI und CBAM, pflichtgemäß oder freiwillig, immer datenbasiert.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Klimabezogene Datenpunkte des europäischen Berichtsstandards, von der Bilanz bis zum Übergangsplan.",
          },
          {
            label: "CDP Klima-Reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Begleitung durch den CDP Climate Change Questionnaire, von der Datenbasis bis zur fristgerechten Einreichung.",
          },
          {
            label: "VSME & Voluntary Standard",
            href: "/vsme",
            description:
              "Freiwilliger Nachhaltigkeitsbericht für KMU, der ESG-Anfragen von Banken und Kunden gebündelt beantwortet.",
          },
        ],
      },
      {
        label: "Reduzieren und Umsetzen",
        items: [
          {
            label: "Emissionen reduzieren",
            href: "/dekarbonisierung",
            description:
              "Dekarbonisierungsplan, wissenschaftsbasierte Klimaziele nach SBTi und Begleitung der Umsetzung.",
          },
          {
            label: "Maßnahmen: PV, Sanierung",
            href: "/massnahmen",
            description:
              "Umsetzung von Photovoltaik, Sanierung und Anlagentechnik über ein geprüftes Partnernetzwerk.",
          },
          {
            label: "Energieeffizienz",
            href: "/energieeffizienz",
            description:
              "Verbrauchsanalyse und Priorisierung von Effizienzmaßnahmen nach Wirtschaftlichkeit und CO₂-Wirkung.",
          },
        ],
      },
      {
        label: "Förderung",
        items: [
          {
            label: "Förderanalyse & Anträge",
            href: "/foerderung",
            description:
              "Förderanalyse und Antragsbegleitung für BAFA EEW Modul 4 und 5, GRW und NKI.",
          },
          {
            label: "Transformationsplan (EEW Modul 5)",
            href: "/transformationskonzepte",
            description:
              "Geförderter Fahrplan zur Klimaneutralität, 40 bis 60 Prozent der Beratungskosten werden übernommen.",
          },
          {
            label: "Klimaschutzkonzepte (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "NKI-geförderte Klimaschutzkonzepte für öffentliche und gemeinnützige Einrichtungen, mit 70 bis 90 Prozent Zuschuss.",
          },
          {
            label: "Förder-Finder",
            href: "/foerderungen",
            description:
              "Interaktives Dashboard aller Bundes- und Landesförderungen rund um Klima, Energie und Effizienz.",
          },
        ],
      },
      {
        label: "KI & Automatisierung",
        items: [
          {
            label: "KI & Automatisierung",
            href: "/ki-automatisierung",
            description:
              "KI-Implementierung, individuelle Softwareentwicklung und automatisierte Nachhaltigkeitsdaten.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Branchen im Überblick", href: "/branchen" },
      { label: "Automotive", href: "/branchen/automotive" },
      { label: "Druck & Verlag", href: "/branchen/druck-verlag" },
      { label: "Verbrauchsgüter", href: "/branchen/verbrauchsgueter" },
      { label: "Öffentliche Einrichtungen", href: "/branchen/oeffentliche-einrichtungen" },
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
            label: "Carbon accounting",
            href: "/co2-bilanzierung",
            description:
              "Corporate and Product Carbon Footprint per the GHG Protocol and ISO standards, documented audit-ready.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Complete company greenhouse gas inventory across Scope 1, 2 and 3, including Scope 2 dual reporting.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Product carbon footprints cradle-to-gate or cradle-to-grave per ISO 14067 and the GHG Protocol Product Standard.",
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
            label: "Reporting",
            href: "/berichterstattung",
            description:
              "CSRD/ESRS E1, CDP, VSME, GRI and CBAM, mandatory or voluntary, always data-based.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Climate data points of the European reporting standard, from the inventory to the transition plan.",
          },
          {
            label: "CDP climate reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Support through the CDP Climate Change Questionnaire, from the data baseline to timely submission.",
          },
          {
            label: "VSME & voluntary standard",
            href: "/vsme",
            description:
              "Voluntary sustainability report for SMEs that answers ESG requests from banks and customers in one place.",
          },
        ],
      },
      {
        label: "Reducing and implementing",
        items: [
          {
            label: "Reducing emissions",
            href: "/dekarbonisierung",
            description:
              "Decarbonisation plan, science-based climate targets per SBTi and implementation support.",
          },
          {
            label: "Measures: PV, refurbishment",
            href: "/massnahmen",
            description:
              "Implementation of photovoltaics, refurbishment and plant technology through a vetted partner network.",
          },
          {
            label: "Energy efficiency",
            href: "/energieeffizienz",
            description:
              "Consumption analysis and prioritisation of efficiency measures by cost-effectiveness and CO₂ impact.",
          },
        ],
      },
      {
        label: "Funding",
        items: [
          {
            label: "Funding analysis & applications",
            href: "/foerderung",
            description:
              "Funding analysis and application support for BAFA EEW Module 4 and 5, GRW and NKI.",
          },
          {
            label: "Transformation plan (EEW Module 5)",
            href: "/transformationskonzepte",
            description:
              "Funded roadmap to climate neutrality; 40 to 60 percent of the consulting costs are covered.",
          },
          {
            label: "Climate action plans (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "NKI-funded climate protection concepts for public and non-profit institutions, with 70 to 90 percent grants.",
          },
          {
            label: "Funding finder",
            href: "/foerderungen",
            description:
              "Interactive dashboard of all federal and state funding around climate, energy and efficiency.",
          },
        ],
      },
      {
        label: "AI & automation",
        items: [
          {
            label: "AI & automation",
            href: "/ki-automatisierung",
            description:
              "AI implementation, custom software development and automated sustainability data.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Industries overview", href: "/branchen" },
      { label: "Automotive", href: "/branchen/automotive" },
      { label: "Print & publishing", href: "/branchen/druck-verlag" },
      { label: "Consumer goods", href: "/branchen/verbrauchsgueter" },
      { label: "Public institutions", href: "/branchen/oeffentliche-einrichtungen" },
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
            label: "Balanço de carbono",
            href: "/co2-bilanzierung",
            description:
              "Corporate e Product Carbon Footprint segundo o GHG Protocol e as normas ISO, documentado pronto para auditoria.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Inventário completo de gases de efeito estufa da empresa nos Escopos 1, 2 e 3, incluindo dual reporting do Escopo 2.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Inventários de CO₂ de produtos cradle-to-gate ou cradle-to-grave segundo a ISO 14067 e o GHG Protocol Product Standard.",
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
            label: "Relatórios",
            href: "/berichterstattung",
            description:
              "CSRD/ESRS E1, CDP, VSME, GRI e CBAM, obrigatório ou voluntário, sempre com base em dados.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Pontos de dados climáticos do padrão europeu de relato, do inventário ao plano de transição.",
          },
          {
            label: "Relato climático CDP",
            href: "/cdp-klimaberichterstattung",
            description:
              "Acompanhamento no CDP Climate Change Questionnaire, da base de dados à submissão atempada.",
          },
          {
            label: "VSME & padrão voluntário",
            href: "/vsme",
            description:
              "Relatório voluntário de sustentabilidade para PME que responde de forma agregada aos pedidos ESG de bancos e clientes.",
          },
        ],
      },
      {
        label: "Reduzir e implementar",
        items: [
          {
            label: "Reduzir emissões",
            href: "/dekarbonisierung",
            description:
              "Plano de descarbonização, metas climáticas baseadas na ciência segundo a SBTi e acompanhamento da implementação.",
          },
          {
            label: "Medidas: fotovoltaico, renovação",
            href: "/massnahmen",
            description:
              "Implementação de fotovoltaico, renovação e tecnologia de instalações através de uma rede de parceiros verificada.",
          },
          {
            label: "Eficiência energética",
            href: "/energieeffizienz",
            description:
              "Análise de consumos e priorização de medidas de eficiência por rentabilidade e impacto de CO₂.",
          },
        ],
      },
      {
        label: "Apoios",
        items: [
          {
            label: "Análise de apoios & candidaturas",
            href: "/foerderung",
            description:
              "Análise de apoios e acompanhamento de candidaturas para BAFA EEW Módulos 4 e 5, GRW e NKI.",
          },
          {
            label: "Plano de transformação (EEW Módulo 5)",
            href: "/transformationskonzepte",
            description:
              "Roteiro financiado para a neutralidade climática; 40 a 60 por cento dos custos de consultoria são cobertos.",
          },
          {
            label: "Conceitos de proteção climática (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "Conceitos de proteção climática financiados pela NKI para instituições públicas e sem fins lucrativos, com 70 a 90 por cento de subsídio.",
          },
          {
            label: "Localizador de apoios",
            href: "/foerderungen",
            description:
              "Dashboard interativo de todos os apoios federais e regionais em torno de clima, energia e eficiência.",
          },
        ],
      },
      {
        label: "IA & automatização",
        items: [
          {
            label: "IA & automatização",
            href: "/ki-automatisierung",
            description:
              "Implementação de IA, desenvolvimento de software individual e dados de sustentabilidade automatizados.",
          },
        ],
      },
    ],
    branchenItems: [
      { label: "Setores em resumo", href: "/branchen" },
      { label: "Automóvel", href: "/branchen/automotive" },
      { label: "Impressão & edição", href: "/branchen/druck-verlag" },
      { label: "Bens de consumo", href: "/branchen/verbrauchsgueter" },
      { label: "Instituições públicas", href: "/branchen/oeffentliche-einrichtungen" },
    ],
  },
};
