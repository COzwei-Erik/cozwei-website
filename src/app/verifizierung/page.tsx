import type { Metadata } from "next";
import VerifizierungClient from "./VerifizierungClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/verifizierung";

export const metadata: Metadata = {
  title: "Verifizierung der CO₂-Bilanz nach ISO 14064-3 | COzwei",
  description:
    "Prüffähige Vorbereitung und Begleitung der Verifizierung Ihrer Treibhausgasbilanz nach ISO 14064-3, in drei Paketen je nach Reifegrad Ihrer Daten.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Verifizierung der CO₂-Bilanz nach ISO 14064-3 | COzwei",
    description:
      "Prüffähige Vorbereitung und Begleitung der Verifizierung Ihrer Treibhausgasbilanz nach ISO 14064-3, in drei Paketen je nach Reifegrad Ihrer Daten.",
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
    title: "Verifizierung der CO₂-Bilanz nach ISO 14064-3 | COzwei",
    description:
      "Prüffähige Vorbereitung und Begleitung der Verifizierung Ihrer Treibhausgasbilanz nach ISO 14064-3, in drei Paketen je nach Reifegrad Ihrer Daten.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function VerifizierungPage() {
  return (
    <>
      <VerifizierungClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Verifizierung", path: "/verifizierung" },
          ])
        )}
      />
    </>
  );
}
