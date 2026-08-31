import type { Metadata } from "next";
import BuchverlageDekarbonisierungClient from "./BuchverlageDekarbonisierungClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights/buchverlage-dekarbonisierung";

export const metadata: Metadata = {
  title: "Dekarbonisierung von Buchverlagen: Papier im Fokus | COzwei",
  description:
    "Eine Tonne Frischfaserpapier verbraucht so viel Energie wie eine Tonne Primärstahl. Was das für die Klimabilanz von Verlagen und Druckerzeugnissen heißt.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Dekarbonisierung von Buchverlagen: Papier im Fokus | COzwei",
    description:
      "Eine Tonne Frischfaserpapier verbraucht so viel Energie wie eine Tonne Primärstahl. Was das für die Klimabilanz von Verlagen und Druckerzeugnissen heißt.",
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
    title: "Dekarbonisierung von Buchverlagen: Papier im Fokus | COzwei",
    description:
      "Eine Tonne Frischfaserpapier verbraucht so viel Energie wie eine Tonne Primärstahl. Was das für die Klimabilanz von Verlagen und Druckerzeugnissen heißt.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function BuchverlageDekarbonisierungPage() {
  return (
    <>
      <BuchverlageDekarbonisierungClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "Buchverlage", path: "/insights/buchverlage-dekarbonisierung" },
          ])
        )}
      />
    </>
  );
}
