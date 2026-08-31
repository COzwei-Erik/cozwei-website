// Navigations-Struktur für die Mega-Menüs (Relaunch, Stufe 2).
// "Lösungen": Kategorie -> Leistung -> Beschreibung (rechtes Slate-Panel).
// "Branchen": eine Kategorie ("Branchenerfahrung") -> Branche -> Summary.
// Die Beschreibungen sind bewusst 2-3 Sätze lang und speisen sich aus den
// Texten der jeweiligen Landingpages und Insights-Artikel.

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

type NavContent = {
  solutions: string;
  branchen: string;
  references: string;
  wissen: string;
  about: string;
  contact: string;
  categories: NavCategory[];
  branchenCategoryLabel: string;
  branchenItems: NavItem[];
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
              "Corporate und Product Carbon Footprint nach GHG Protocol und ISO-Normen, auditierungsfähig dokumentiert. Von der Datenerhebung über die Emissionsfaktor-Logik bis zum fertigen Bilanzbericht, als Grundlage für Reporting, Kundenanfragen und Reduktionspfade.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Vollständige Treibhausgasbilanz eines Unternehmens über Scope 1, 2 und 3, inklusive Scope-2-Dual-Reporting. Wir strukturieren die Datenerhebung, wählen belastbare Emissionsfaktoren und dokumentieren jede methodische Entscheidung nachvollziehbar.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Produkt-CO₂-Bilanzen cradle-to-gate oder cradle-to-grave nach ISO 14067 und GHG Protocol Product Standard. Damit beantworten Sie Kundenanfragen entlang der Lieferkette und schaffen die Basis für belastbare Produktvergleiche.",
          },
          {
            label: "Verifizierung ISO 14064-3",
            href: "/verifizierung",
            description:
              "Methodische Prüfung Ihres Corporate Carbon Footprints, unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO 14064-3. Über 50 verifizierte Bilanzen in zwölf Monaten zeigen: Die häufigsten Abweichungen stecken in methodischen Entscheidungen, nicht in der Software.",
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
              "CSRD/ESRS E1, CDP, VSME, GRI und CBAM, pflichtgemäß oder freiwillig, immer datenbasiert. Ein zentraler Kennzahlenhaushalt bedient alle Berichtsformate gleichzeitig und senkt den laufenden Aufwand erheblich.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Klimabezogene Datenpunkte des europäischen Berichtsstandards, von der Bilanz bis zum Übergangsplan. Wir halten die Wesentlichkeitsanalyse fokussiert und nutzen die Übergangserleichterungen der ESRS konsequent.",
          },
          {
            label: "CDP Klima-Reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Begleitung durch den CDP Climate Change Questionnaire, von der Datenbasis bis zur fristgerechten Einreichung im CDP-Portal. Drei Pakete: für Erstteilnehmer mit SME-Fragebogen, Full-Reporter und gezielte Score-Optimierung.",
          },
          {
            label: "VSME & Voluntary Standard",
            href: "/vsme",
            description:
              "Freiwilliger Nachhaltigkeitsbericht für KMU, der ESG-Anfragen von Banken und Kunden gebündelt beantwortet. Der Value Chain Cap begrenzt künftig, welche Informationen berichtspflichtige Kunden von Ihnen verlangen dürfen.",
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
              "Dekarbonisierungsplan, wissenschaftsbasierte Klimaziele nach SBTi und Begleitung der Umsetzung. Vermeidungskostenoptimiert: Investitionen setzen dort an, wo sie pro Euro am meisten CO₂ vermeiden.",
          },
          {
            label: "Maßnahmen: PV, Sanierung",
            href: "/massnahmen",
            description:
              "Umsetzung von Photovoltaik, Sanierung und Anlagentechnik über ein geprüftes Partnernetzwerk. Von der Wirtschaftlichkeitsrechnung bis zur Inbetriebnahme aus einer Hand.",
          },
          {
            label: "Energieeffizienz",
            href: "/energieeffizienz",
            description:
              "Verbrauchsanalyse und Priorisierung von Effizienzmaßnahmen nach Wirtschaftlichkeit und CO₂-Wirkung. Das Ergebnis ist ein umsetzbarer Maßnahmenplan statt einer Studie für den Aktenordner.",
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
              "Förderanalyse und Antragsbegleitung für BAFA EEW Modul 4 und 5, GRW und NKI. Der Mehrkostenansatz und die Wahl der Referenzmaschine entscheiden dabei regelmäßig über sechsstellige Fördersummen.",
          },
          {
            label: "Transformationsplan (EEW Modul 5)",
            href: "/transformationskonzepte",
            description:
              "Geförderter Fahrplan zur Klimaneutralität über EEW Modul 5, 40 bis 60 Prozent der Beratungskosten werden übernommen. Zugleich die ideale Vorstufe für geförderte Investitionen über Modul 4.",
          },
          {
            label: "Klimaschutzkonzepte (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "NKI-geförderte Klimaschutzkonzepte für öffentliche und gemeinnützige Einrichtungen, mit 70 bis 90 Prozent Zuschuss. Über zehn abgeschlossene Konzepte, mit Schwerpunkt im Hochschulbereich.",
          },
          {
            label: "Förder-Finder",
            href: "/foerderungen",
            description:
              "Interaktives Dashboard aller Bundes- und Landesförderungen rund um Klima, Energie und Effizienz. In wenigen Fragen zu den passenden Programmen für Ihr Unternehmen.",
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
              "KI-Implementierung, individuelle Softwareentwicklung und automatisierte Nachhaltigkeitsdaten. Dieselben Kennzahlen fließen in CSRD, CDP, EcoVadis und Kundenanfragen, ohne Mehrfacherfassung und ohne Inkonsistenzen.",
          },
        ],
      },
    ],
    branchenCategoryLabel: "Branchenerfahrung",
    branchenItems: [
      {
        label: "Branchen im Überblick",
        href: "/branchen",
        description:
          "Vier Branchen mit ihren jeweiligen Anforderungen, Anforderern und Fristen im Überblick. Von OEM-Anfragen über Handelskunden bis zu NKI-Förderfenstern.",
      },
      {
        label: "Automotive",
        href: "/branchen/automotive",
        description:
          "Eine Erfolgsgeschichte aus der Zusammenarbeit mit drei großen Automobilherstellern. PCF je Bauteil, SAQ 5.0, CDP und SBTi: Wir erfüllen die Klimaanforderungen der OEMs methodensicher.",
      },
      {
        label: "Druck & Verlag",
        href: "/branchen/druck-verlag",
        description:
          "Von der Klimabilanz eines Buches bis zur Dekarbonisierung ganzer Verlagsprogramme. Papier, Druck und Logistik korrekt bilanziert, Klimaaussagen rechtssicher formuliert.",
      },
      {
        label: "Verbrauchsgüter",
        href: "/branchen/verbrauchsgueter",
        description:
          "Klimabilanzen und Reduktionspfade für Handel und Konsumgüter. PCF je Produkt und Verpackung, VSME-Bericht für Handel und Banken als belastbare Datenbasis für Umweltaussagen.",
      },
      {
        label: "Öffentliche Einrichtungen",
        href: "/branchen/oeffentliche-einrichtungen",
        description:
          "NKI-geförderte Klimaschutzkonzepte für Kommunen, Hochschulen und Träger, mit 70 bis 90 Prozent Zuschuss für Hochschulen, Kirchen und Kliniken.",
      },
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
              "Corporate and Product Carbon Footprint per the GHG Protocol and ISO standards, documented audit-ready. From data collection and emission-factor logic to the finished inventory report, as the basis for reporting, customer requests and reduction pathways.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Complete company greenhouse gas inventory across Scope 1, 2 and 3, including Scope 2 dual reporting. We structure the data collection, select robust emission factors and document every methodological decision traceably.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Product carbon footprints cradle-to-gate or cradle-to-grave per ISO 14067 and the GHG Protocol Product Standard. They answer customer requests along the supply chain and create the basis for robust product comparisons.",
          },
          {
            label: "Verification ISO 14064-3",
            href: "/verifizierung",
            description:
              "Methodological review of your Corporate Carbon Footprint, independent of the software used, aligned with the GHG Protocol and the audit principles of ISO 14064-3. Fifty-plus verified inventories in twelve months show: the most frequent deviations sit in methodological decisions, not in the software.",
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
              "CSRD/ESRS E1, CDP, VSME, GRI and CBAM, mandatory or voluntary, always data-based. One central metric hub serves all reporting formats simultaneously and cuts the ongoing effort substantially.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Climate data points of the European reporting standard, from the inventory to the transition plan. We keep the materiality analysis focused and make full use of the ESRS transitional reliefs.",
          },
          {
            label: "CDP climate reporting",
            href: "/cdp-klimaberichterstattung",
            description:
              "Support through the CDP Climate Change Questionnaire, from the data baseline to timely submission in the CDP portal. Three packages: first-time reporters on the SME questionnaire, full reporters, and targeted score optimisation.",
          },
          {
            label: "VSME & voluntary standard",
            href: "/vsme",
            description:
              "Voluntary sustainability report for SMEs that answers ESG requests from banks and customers in one place. The Value Chain Cap will limit what reporting-obliged customers may demand from you.",
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
              "Decarbonisation plan, science-based climate targets per SBTi and implementation support. Abatement-cost optimised: investments go where they avoid the most CO₂ per euro.",
          },
          {
            label: "Measures: PV, refurbishment",
            href: "/massnahmen",
            description:
              "Implementation of photovoltaics, refurbishment and plant technology through a vetted partner network. From the profitability calculation to commissioning, from a single source.",
          },
          {
            label: "Energy efficiency",
            href: "/energieeffizienz",
            description:
              "Consumption analysis and prioritisation of efficiency measures by cost-effectiveness and CO₂ impact. The result is an actionable measure plan instead of a study for the filing cabinet.",
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
              "Funding analysis and application support for BAFA EEW Module 4 and 5, GRW and NKI. The incremental-cost approach and the choice of reference machine regularly decide six-figure grant sums.",
          },
          {
            label: "Transformation plan (EEW Module 5)",
            href: "/transformationskonzepte",
            description:
              "Funded roadmap to climate neutrality via EEW Module 5; 40 to 60 percent of the consulting costs are covered. At the same time the ideal precursor for funded investments via Module 4.",
          },
          {
            label: "Climate action plans (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "NKI-funded climate protection concepts for public and non-profit institutions, with 70 to 90 percent grants. More than ten completed concepts, with a focus on higher education.",
          },
          {
            label: "Funding finder",
            href: "/foerderungen",
            description:
              "Interactive dashboard of all federal and state funding around climate, energy and efficiency. A few questions lead you to the programmes that fit your company.",
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
              "AI implementation, custom software development and automated sustainability data. The same metrics feed CSRD, CDP, EcoVadis and customer requests, without duplicate collection or inconsistencies.",
          },
        ],
      },
    ],
    branchenCategoryLabel: "Industry experience",
    branchenItems: [
      {
        label: "Industries overview",
        href: "/branchen",
        description:
          "Four industries with their specific requirements, requesters and deadlines at a glance. From OEM requests and retail customers to NKI funding windows.",
      },
      {
        label: "Automotive",
        href: "/branchen/automotive",
        description:
          "A success story from working with three major car manufacturers. PCF per component, SAQ 5.0, CDP and SBTi: we meet the OEMs' climate requirements with methodological confidence.",
      },
      {
        label: "Print & publishing",
        href: "/branchen/druck-verlag",
        description:
          "From the climate footprint of a single book to decarbonising entire publishing programmes. Paper, print and logistics correctly accounted for, climate claims phrased with legal certainty.",
      },
      {
        label: "Consumer goods",
        href: "/branchen/verbrauchsgueter",
        description:
          "Climate inventories and reduction pathways for retail and consumer goods. PCF per product and packaging, VSME report for retailers and banks as a robust data basis for environmental claims.",
      },
      {
        label: "Public institutions",
        href: "/branchen/oeffentliche-einrichtungen",
        description:
          "NKI-funded climate protection concepts for municipalities, universities and public bodies, with 70 to 90 percent grants for universities, churches and hospitals.",
      },
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
              "Corporate e Product Carbon Footprint segundo o GHG Protocol e as normas ISO, documentado pronto para auditoria. Da recolha de dados e da lógica dos fatores de emissão até ao relatório final, como base para relato, pedidos de clientes e trajetórias de redução.",
          },
          {
            label: "Corporate Carbon Footprint",
            href: "/corporate-carbon-footprint",
            description:
              "Inventário completo de gases de efeito estufa nos Escopos 1, 2 e 3, incluindo dual reporting do Escopo 2. Estruturamos a recolha de dados, escolhemos fatores de emissão robustos e documentamos cada decisão metodológica de forma rastreável.",
          },
          {
            label: "Product Carbon Footprint",
            href: "/product-carbon-footprint",
            description:
              "Inventários de CO₂ de produtos cradle-to-gate ou cradle-to-grave segundo a ISO 14067 e o GHG Protocol Product Standard. Respondem a pedidos de clientes ao longo da cadeia e criam a base para comparações de produtos fiáveis.",
          },
          {
            label: "Verificação ISO 14064-3",
            href: "/verifizierung",
            description:
              "Análise metodológica do seu Corporate Carbon Footprint, independente do software utilizado, alinhada com o GHG Protocol e os princípios de auditoria da ISO 14064-3. Mais de 50 inventários verificados em doze meses mostram: os desvios mais frequentes estão nas decisões metodológicas, não no software.",
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
              "CSRD/ESRS E1, CDP, VSME, GRI e CBAM, obrigatório ou voluntário, sempre com base em dados. Um repositório central de indicadores serve todos os formatos de relato em simultâneo e reduz consideravelmente o esforço corrente.",
          },
          {
            label: "CSRD / ESRS E1",
            href: "/esrs-e1",
            description:
              "Pontos de dados climáticos do padrão europeu de relato, do inventário ao plano de transição. Mantemos a análise de materialidade focada e usamos consequentemente os alívios de transição das ESRS.",
          },
          {
            label: "Relato climático CDP",
            href: "/cdp-klimaberichterstattung",
            description:
              "Acompanhamento no CDP Climate Change Questionnaire, da base de dados à submissão atempada no portal CDP. Três pacotes: primeiros participantes com o questionário SME, full reporters e otimização direcionada do score.",
          },
          {
            label: "VSME & padrão voluntário",
            href: "/vsme",
            description:
              "Relatório voluntário de sustentabilidade para PME que responde de forma agregada aos pedidos ESG de bancos e clientes. O Value Chain Cap limitará o que os clientes com obrigação de relato podem exigir de si.",
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
              "Plano de descarbonização, metas climáticas baseadas na ciência segundo a SBTi e acompanhamento da implementação. Otimizado em custos de redução: os investimentos vão para onde evitam mais CO₂ por euro.",
          },
          {
            label: "Medidas: fotovoltaico, renovação",
            href: "/massnahmen",
            description:
              "Implementação de fotovoltaico, renovação e tecnologia de instalações através de uma rede de parceiros verificada. Do cálculo de rentabilidade à colocação em serviço, de uma só fonte.",
          },
          {
            label: "Eficiência energética",
            href: "/energieeffizienz",
            description:
              "Análise de consumos e priorização de medidas de eficiência por rentabilidade e impacto de CO₂. O resultado é um plano de medidas acionável, não um estudo para a gaveta.",
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
              "Análise de apoios e acompanhamento de candidaturas para BAFA EEW Módulos 4 e 5, GRW e NKI. O método dos custos incrementais e a escolha da máquina de referência decidem regularmente montantes de seis dígitos.",
          },
          {
            label: "Plano de transformação (EEW Módulo 5)",
            href: "/transformationskonzepte",
            description:
              "Roteiro financiado para a neutralidade climática via EEW Módulo 5; 40 a 60 por cento dos custos de consultoria são cobertos. Ao mesmo tempo, o precursor ideal para investimentos financiados via Módulo 4.",
          },
          {
            label: "Conceitos de proteção climática (NKI)",
            href: "/klimaschutzkonzepte",
            description:
              "Conceitos de proteção climática financiados pela NKI para instituições públicas e sem fins lucrativos, com 70 a 90 por cento de subsídio. Mais de dez conceitos concluídos, com foco no ensino superior.",
          },
          {
            label: "Localizador de apoios",
            href: "/foerderungen",
            description:
              "Dashboard interativo de todos os apoios federais e regionais em torno de clima, energia e eficiência. Poucas perguntas levam aos programas certos para a sua empresa.",
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
              "Implementação de IA, desenvolvimento de software individual e dados de sustentabilidade automatizados. Os mesmos indicadores alimentam CSRD, CDP, EcoVadis e pedidos de clientes, sem recolha duplicada nem inconsistências.",
          },
        ],
      },
    ],
    branchenCategoryLabel: "Experiência setorial",
    branchenItems: [
      {
        label: "Setores em resumo",
        href: "/branchen",
        description:
          "Quatro setores com os seus requisitos, requerentes e prazos específicos em resumo. De pedidos de OEMs e clientes de retalho a janelas de financiamento NKI.",
      },
      {
        label: "Automóvel",
        href: "/branchen/automotive",
        description:
          "Uma história de sucesso da colaboração com três grandes fabricantes de automóveis. PCF por componente, SAQ 5.0, CDP e SBTi: cumprimos os requisitos climáticos dos OEMs com segurança metodológica.",
      },
      {
        label: "Impressão & edição",
        href: "/branchen/druck-verlag",
        description:
          "Do inventário climático de um livro à descarbonização de programas editoriais inteiros. Papel, impressão e logística corretamente contabilizados, alegações climáticas formuladas com segurança jurídica.",
      },
      {
        label: "Bens de consumo",
        href: "/branchen/verbrauchsgueter",
        description:
          "Inventários climáticos e trajetórias de redução para comércio e bens de consumo. PCF por produto e embalagem, relatório VSME para retalho e bancos como base de dados fiável para alegações ambientais.",
      },
      {
        label: "Instituições públicas",
        href: "/branchen/oeffentliche-einrichtungen",
        description:
          "Conceitos de proteção climática financiados pela NKI para municípios, universidades e entidades públicas, com 70 a 90 por cento de subsídio para universidades, igrejas e hospitais.",
      },
    ],
  },
};
