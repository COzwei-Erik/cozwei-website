import type { Metadata } from "next";
import DekarbonisierungClient from "./DekarbonisierungClient";
import { breadcrumbSchema, jsonLd, serviceSchema, SITE_URL } from "../components/schema";

// Server Component nur fuer metadata und JSON-LD, die Seite selbst bleibt ein
// Client Component wegen der Sprachumschaltung. Muster wie bei
// cdp-klimaberichterstattung und transformationskonzepte.
const PATH = "/dekarbonisierung";

export const metadata: Metadata = {
  title: "Emissionen reduzieren: Dekarbonisierungsplan & SBTi | COzwei",
  description:
    "Dekarbonisierung mit COzwei: Reduktionspfad aus Ihrer CO₂-Bilanz, Klimaziele nach SBTi, Maßnahmenumsetzung und Energieeffizienz. Jetzt Pfad skizzieren.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Emissionen reduzieren: Dekarbonisierungsplan & SBTi | COzwei",
    description:
      "Vom Reduktionspfad über wissenschaftsbasierte Klimaziele bis zur geförderten Umsetzung.",
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
        alt: "Dekarbonisierungsberatung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emissionen reduzieren: Dekarbonisierungsplan & SBTi | COzwei",
    description: "Reduktionspfad, SBTi-Klimaziele und geförderte Umsetzung.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function Dekarbonisierung() {
  return (
    <>
      <DekarbonisierungClient />
      <script
        {...jsonLd(
          serviceSchema({
            name: "Dekarbonisierung und Klimaziele",
            description:
              "Ableitung des Reduktionspfads aus der Treibhausgasbilanz, Klimaziele nach Science Based Targets initiative, Priorisierung und Umsetzung von Reduktionsmaßnahmen.",
            path: PATH,
            serviceType: "Dekarbonisierungsberatung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Emissionen reduzieren", path: PATH },
          ])
        )}
      />
    </>
  );
}
