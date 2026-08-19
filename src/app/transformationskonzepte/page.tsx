import type { Metadata } from "next";
import TransformationsplanClient from "./TransformationsplanClient";
import { breadcrumbSchema, jsonLd, serviceSchema, SITE_URL } from "../components/schema";

// Server Component nur fuer metadata und JSON-LD, die Seite selbst bleibt ein
// Client Component wegen der Sprachumschaltung. Muster wie bei
// cdp-klimaberichterstattung.
const PATH = "/transformationskonzepte";

export const metadata: Metadata = {
  title: "Transformationsplan (EEW Modul 5) & Modul 4 | COzwei",
  description:
    "BAFA-Transformationsplan nach EEW Modul 5: 40 bis 60 % der Beratungskosten gefördert, max. 60.000 €, mit Netzwerk-Bonus bis 90.000 €. Jetzt prüfen lassen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Transformationsplan (EEW Modul 5) & Modul 4 | COzwei",
    description:
      "Geförderter Fahrplan zur Klimaneutralität, plus Investitionsförderung über Modul 4.",
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
        alt: "BAFA-Transformationsplan durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformationsplan (EEW Modul 5) & Modul 4 | COzwei",
    description: "Geförderter Fahrplan zur Klimaneutralität nach BAFA EEW Modul 5.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function Transformationskonzepte() {
  return (
    <>
      <TransformationsplanClient />
      <script
        {...jsonLd(
          serviceSchema({
            name: "BAFA-Transformationsplan (EEW Modul 5)",
            description:
              "Erstellung eines geförderten Transformationsplans nach BAFA EEW Modul 5, inklusive Treibhausgasbilanz, Maßnahmenplanung und Klimazieldefinition, sowie Begleitung der Investitionsförderung über Modul 4.",
            path: PATH,
            serviceType: "Transformationsplan",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Förderung", path: "/foerderung" },
            { name: "Transformationsplan", path: PATH },
          ])
        )}
      />
      {/* Das FAQPage-Schema rendert FaqSection im Client aus denselben Daten. */}
    </>
  );
}
