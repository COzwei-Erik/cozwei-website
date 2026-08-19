import type { Metadata } from "next";
import MassnahmenClient from "./MassnahmenClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/massnahmen";

export const metadata: Metadata = {
  title: "Maßnahmen: PV, Sanierung und Anlagentechnik | COzwei",
  description:
    "Umsetzung von Reduktionsmaßnahmen über unser geprüftes Partnernetzwerk: Photovoltaik, Gebäudesanierung und Anlagentechnik, inklusive Förderung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Maßnahmen: PV, Sanierung und Anlagentechnik | COzwei",
    description:
      "Umsetzung von Reduktionsmaßnahmen über unser geprüftes Partnernetzwerk: Photovoltaik, Gebäudesanierung und Anlagentechnik, inklusive Förderung.",
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
    title: "Maßnahmen: PV, Sanierung und Anlagentechnik | COzwei",
    description:
      "Umsetzung von Reduktionsmaßnahmen über unser geprüftes Partnernetzwerk: Photovoltaik, Gebäudesanierung und Anlagentechnik, inklusive Förderung.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function MassnahmenPage() {
  return (
    <>
      <MassnahmenClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Maßnahmen", path: "/massnahmen" },
          ])
        )}
      />
    </>
  );
}
