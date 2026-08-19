import type { Metadata } from "next";
import FoerderungenClient from "./FoerderungenClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/foerderungen";

export const metadata: Metadata = {
  title: "Förderkatalog Klimaschutz: interaktives Dashboard | COzwei",
  description:
    "Interaktives Dashboard mit Förderprogrammen für Klimaschutz und Energieeffizienz in Deutschland, filterbar nach Vorhaben, Region und Antragsteller.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Förderkatalog Klimaschutz: interaktives Dashboard | COzwei",
    description:
      "Interaktives Dashboard mit Förderprogrammen für Klimaschutz und Energieeffizienz in Deutschland, filterbar nach Vorhaben, Region und Antragsteller.",
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
    title: "Förderkatalog Klimaschutz: interaktives Dashboard | COzwei",
    description:
      "Interaktives Dashboard mit Förderprogrammen für Klimaschutz und Energieeffizienz in Deutschland, filterbar nach Vorhaben, Region und Antragsteller.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function FoerderungenPage() {
  return (
    <>
      <FoerderungenClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Förderkatalog", path: "/foerderungen" },
          ])
        )}
      />
    </>
  );
}
