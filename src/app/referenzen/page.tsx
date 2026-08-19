import type { Metadata } from "next";
import ReferenzenClient from "./ReferenzenClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/referenzen";

export const metadata: Metadata = {
  title: "Referenzen und Kundenprojekte | COzwei",
  description:
    "Kundenprojekte von COzwei aus Industrie, Verlagswesen, Handel und öffentlichem Sektor: CO₂-Bilanzen, Klimaschutzkonzepte und geförderte Vorhaben.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Referenzen und Kundenprojekte | COzwei",
    description:
      "Kundenprojekte von COzwei aus Industrie, Verlagswesen, Handel und öffentlichem Sektor: CO₂-Bilanzen, Klimaschutzkonzepte und geförderte Vorhaben.",
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
    title: "Referenzen und Kundenprojekte | COzwei",
    description:
      "Kundenprojekte von COzwei aus Industrie, Verlagswesen, Handel und öffentlichem Sektor: CO₂-Bilanzen, Klimaschutzkonzepte und geförderte Vorhaben.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function ReferenzenPage() {
  return (
    <>
      <ReferenzenClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Referenzen", path: "/referenzen" },
          ])
        )}
      />
    </>
  );
}
