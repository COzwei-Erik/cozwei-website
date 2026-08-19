import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights";

export const metadata: Metadata = {
  title: "Insights: Fachartikel zu CSRD, CDP und Förderung | COzwei",
  description:
    "Fachartikel von COzwei zu CSRD, CDP, BAFA-Förderung, NKI und CO₂-Verifizierung, geschrieben aus abgeschlossenen Projekten statt aus der Theorie.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Insights: Fachartikel zu CSRD, CDP und Förderung | COzwei",
    description:
      "Fachartikel von COzwei zu CSRD, CDP, BAFA-Förderung, NKI und CO₂-Verifizierung, geschrieben aus abgeschlossenen Projekten statt aus der Theorie.",
    url: `${SITE_URL}${PATH}`,
    siteName: "COzwei",
    locale: "de_DE",
    type: "website",
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
    title: "Insights: Fachartikel zu CSRD, CDP und Förderung | COzwei",
    description:
      "Fachartikel von COzwei zu CSRD, CDP, BAFA-Förderung, NKI und CO₂-Verifizierung, geschrieben aus abgeschlossenen Projekten statt aus der Theorie.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
          ])
        )}
      />
    </>
  );
}
