import type { Metadata } from "next";
import UeberUnsClient from "./UeberUnsClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/ueber-uns";

export const metadata: Metadata = {
  title: "Über uns: Team und Standorte | COzwei",
  description:
    "Das Team von COzwei mit Standorten in Stuttgart und Lissabon: wie wir arbeiten und warum wir Dekarbonisierung konsequent von der Umsetzung her denken.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Über uns: Team und Standorte | COzwei",
    description:
      "Das Team von COzwei mit Standorten in Stuttgart und Lissabon: wie wir arbeiten und warum wir Dekarbonisierung konsequent von der Umsetzung her denken.",
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
    title: "Über uns: Team und Standorte | COzwei",
    description:
      "Das Team von COzwei mit Standorten in Stuttgart und Lissabon: wie wir arbeiten und warum wir Dekarbonisierung konsequent von der Umsetzung her denken.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function UeberUnsPage() {
  return (
    <>
      <UeberUnsClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Über uns", path: "/ueber-uns" },
          ])
        )}
      />
    </>
  );
}
