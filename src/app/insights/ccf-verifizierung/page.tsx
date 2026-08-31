import type { Metadata } from "next";
import CcfVerifizierungClient from "./CcfVerifizierungClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights/ccf-verifizierung";

export const metadata: Metadata = {
  title: "50 verifizierte CO₂-Bilanzen: Grenzen der Software | COzwei",
  description:
    "Was 50 verifizierte Treibhausgasbilanzen über die Grenzen von ESG-Software verraten und welche Fehler Prüfer nach ISO 14064-3 regelmäßig finden.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "50 verifizierte CO₂-Bilanzen: Grenzen der Software | COzwei",
    description:
      "Was 50 verifizierte Treibhausgasbilanzen über die Grenzen von ESG-Software verraten und welche Fehler Prüfer nach ISO 14064-3 regelmäßig finden.",
    url: `${SITE_URL}${PATH}`,
    siteName: "COzwei",
    locale: "de_DE",
    type: "article",
    images: [
      {
        // TODO: dediziertes 1200x630-OG-Bild.
        url: `${SITE_URL}/Pictures/Artboard 1.png`,
        width: 1200,
        height: 630,
        alt: "COzwei GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50 verifizierte CO₂-Bilanzen: Grenzen der Software | COzwei",
    description:
      "Was 50 verifizierte Treibhausgasbilanzen über die Grenzen von ESG-Software verraten und welche Fehler Prüfer nach ISO 14064-3 regelmäßig finden.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function CcfVerifizierungPage() {
  return (
    <>
      <CcfVerifizierungClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "CCF-Verifizierung", path: "/insights/ccf-verifizierung" },
          ])
        )}
      />
    </>
  );
}
