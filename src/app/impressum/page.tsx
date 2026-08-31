import type { Metadata } from "next";
import ImpressumClient from "./ImpressumClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/impressum";

export const metadata: Metadata = {
  title: "Impressum | COzwei GmbH",
  description:
    "Impressum der COzwei GmbH, Gutenbergstr. 16A in 70176 Stuttgart: Pflichtangaben, Registergericht, Umsatzsteuer-Identifikationsnummer und Kontaktdaten.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Impressum | COzwei GmbH",
    description:
      "Impressum der COzwei GmbH, Gutenbergstr. 16A in 70176 Stuttgart: Pflichtangaben, Registergericht, Umsatzsteuer-Identifikationsnummer und Kontaktdaten.",
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
    title: "Impressum | COzwei GmbH",
    description:
      "Impressum der COzwei GmbH, Gutenbergstr. 16A in 70176 Stuttgart: Pflichtangaben, Registergericht, Umsatzsteuer-Identifikationsnummer und Kontaktdaten.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <ImpressumClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Impressum", path: "/impressum" },
          ])
        )}
      />
    </>
  );
}
