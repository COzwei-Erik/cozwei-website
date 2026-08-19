import type { MetadataRoute } from "next";
import { SITE_URL } from "./components/schema";

// Statische Sitemap. Wenn eine neue Route dazukommt, hier ergänzen.
// /nachhaltigkeit steht bewusst nicht mehr drin, die URL wird per 301 auf
// /berichterstattung umgeleitet (siehe next.config.ts).
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },

  // Lösungen: die sechs Übersichtsseiten der Startseiten-Kacheln
  { path: "/co2-bilanzierung", priority: 0.9 },
  { path: "/dekarbonisierung", priority: 0.9 },
  { path: "/berichterstattung", priority: 0.9 },
  { path: "/foerderung", priority: 0.9 },
  { path: "/klimaschutzkonzepte", priority: 0.9 },
  { path: "/ki-automatisierung", priority: 0.9 },

  // Detailseiten
  { path: "/corporate-carbon-footprint", priority: 0.8 },
  { path: "/product-carbon-footprint", priority: 0.8 },
  { path: "/verifizierung", priority: 0.8 },
  { path: "/massnahmen", priority: 0.8 },
  { path: "/energieeffizienz", priority: 0.8 },
  { path: "/esrs-e1", priority: 0.8 },
  { path: "/cdp-klimaberichterstattung", priority: 0.8 },
  { path: "/vsme", priority: 0.8 },
  { path: "/transformationskonzepte", priority: 0.8 },
  { path: "/klimaschutzkonzepte-hochschulen", priority: 0.8 },
  { path: "/klimaschutzkonzepte-kirchen", priority: 0.8 },
  { path: "/klimaschutzkonzepte-krankenhaeuser", priority: 0.8 },
  { path: "/foerderungen", priority: 0.6 },

  // Unternehmen und Inhalte
  { path: "/referenzen", priority: 0.7 },
  { path: "/ueber-uns", priority: 0.7 },
  { path: "/insights", priority: 0.7 },
  { path: "/insights/bafa-modul-4", priority: 0.6 },
  { path: "/insights/buchverlage-dekarbonisierung", priority: 0.6 },
  { path: "/insights/ccf-verifizierung", priority: 0.6 },
  { path: "/insights/csrd-automobilindustrie-lektionen-zulieferer", priority: 0.6 },
  { path: "/insights/nki-foerderung", priority: 0.6 },

  // Pflichtseiten
  { path: "/impressum", priority: 0.3 },
  { path: "/datenschutz", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
