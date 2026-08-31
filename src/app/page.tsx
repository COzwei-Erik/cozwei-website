import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_URL } from "./components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/";

export const metadata: Metadata = {
  title: "Nachhaltigkeit und Dekarbonisierung | COzwei",
  description:
    "COzwei macht Klimaziele möglich: CO₂-Bilanzen, Dekarbonisierung, Berichterstattung und Förderung für Mittelstand, Industrie und den öffentlichen Sektor.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Nachhaltigkeit und Dekarbonisierung | COzwei",
    description:
      "COzwei macht Klimaziele möglich: CO₂-Bilanzen, Dekarbonisierung, Berichterstattung und Förderung für Mittelstand, Industrie und den öffentlichen Sektor.",
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
    title: "Nachhaltigkeit und Dekarbonisierung | COzwei",
    description:
      "COzwei macht Klimaziele möglich: CO₂-Bilanzen, Dekarbonisierung, Berichterstattung und Förderung für Mittelstand, Industrie und den öffentlichen Sektor.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />
    </>
  );
}
