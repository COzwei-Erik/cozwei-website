// Die sechs Einträge des Lösungen-Dropdowns, zentral gepflegt, weil Header
// (Desktop) und MobileMenu dieselbe Liste rendern. Reihenfolge und Ziele
// entsprechen den sechs Kacheln der Startseite.
//
// Die Detailseiten (Verifizierung, CDP, ESRS E1, Maßnahmen,
// Transformationsplan, CCF, PCF, VSME, Energieeffizienz, die drei
// Klimaschutzkonzept-Zielgruppen) bleiben über diese Übersichtsseiten und die
// Startseiten-Kacheln erreichbar und stehen bewusst nicht im Dropdown.

export type Language = "de" | "en" | "pt";

export const NAV_LOESUNGEN: {
  href: string;
  label: Record<Language, string>;
}[] = [
  {
    href: "/co2-bilanzierung",
    label: {
      de: "CO₂-Bilanzierung",
      en: "Carbon accounting",
      pt: "Balanço de carbono",
    },
  },
  {
    href: "/dekarbonisierung",
    label: {
      de: "Emissionen reduzieren",
      en: "Reducing emissions",
      pt: "Reduzir emissões",
    },
  },
  {
    href: "/berichterstattung",
    label: {
      de: "Berichterstattung",
      en: "Reporting",
      pt: "Relatórios",
    },
  },
  {
    href: "/foerderung",
    label: {
      de: "Förderung",
      en: "Funding",
      pt: "Financiamento",
    },
  },
  {
    href: "/klimaschutzkonzepte",
    label: {
      de: "Klimaschutzkonzepte",
      en: "Climate action plans",
      pt: "Planos de proteção climática",
    },
  },
  {
    href: "/ki-automatisierung",
    label: {
      de: "KI & Automatisierung",
      en: "AI & automation",
      pt: "IA e automatização",
    },
  },
];
