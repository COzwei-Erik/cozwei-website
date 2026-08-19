import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/datenschutz";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | COzwei GmbH",
  description:
    "Datenschutzerklärung der COzwei GmbH: welche Daten wir erheben, auf welcher Rechtsgrundlage, wie lange wir sie speichern und welche Rechte Sie haben.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Datenschutzerklärung | COzwei GmbH",
    description:
      "Datenschutzerklärung der COzwei GmbH: welche Daten wir erheben, auf welcher Rechtsgrundlage, wie lange wir sie speichern und welche Rechte Sie haben.",
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
    title: "Datenschutzerklärung | COzwei GmbH",
    description:
      "Datenschutzerklärung der COzwei GmbH: welche Daten wir erheben, auf welcher Rechtsgrundlage, wie lange wir sie speichern und welche Rechte Sie haben.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <DatenschutzClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Datenschutz", path: "/datenschutz" },
          ])
        )}
      />
    </>
  );
}
