import type { Metadata } from "next";
import BafaModul4Client from "./BafaModul4Client";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights/bafa-modul-4";

export const metadata: Metadata = {
  title: "BAFA Modul 4: Mehrkostenansatz in der Praxis | COzwei",
  description:
    "Wie der Mehrkostenansatz über die Förderhöhe entscheidet, gezeigt an einer Druckmaschine: Rechenweg, Fallstricke und was das für Ihren Antrag bedeutet.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "BAFA Modul 4: Mehrkostenansatz in der Praxis | COzwei",
    description:
      "Wie der Mehrkostenansatz über die Förderhöhe entscheidet, gezeigt an einer Druckmaschine: Rechenweg, Fallstricke und was das für Ihren Antrag bedeutet.",
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
    title: "BAFA Modul 4: Mehrkostenansatz in der Praxis | COzwei",
    description:
      "Wie der Mehrkostenansatz über die Förderhöhe entscheidet, gezeigt an einer Druckmaschine: Rechenweg, Fallstricke und was das für Ihren Antrag bedeutet.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function BafaModul4Page() {
  return (
    <>
      <BafaModul4Client />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "BAFA Modul 4", path: "/insights/bafa-modul-4" },
          ])
        )}
      />
    </>
  );
}
