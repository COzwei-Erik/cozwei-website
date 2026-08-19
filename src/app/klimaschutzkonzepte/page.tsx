import type { Metadata } from "next";
import KlimaschutzkonzepteClient from "./KlimaschutzkonzepteClient";
import { breadcrumbSchema, jsonLd, serviceSchema, SITE_URL } from "../components/schema";

// Server Component nur fuer metadata und JSON-LD, die Seite selbst bleibt ein
// Client Component wegen der Sprachumschaltung.
const PATH = "/klimaschutzkonzepte";

export const metadata: Metadata = {
  title: "Klimaschutzkonzepte mit NKI-Förderung | COzwei",
  description:
    "NKI-geförderte Klimaschutzkonzepte für Hochschulen, Kirchen, Kliniken und soziale Träger: 70 bis 90 Prozent Zuschuss, von der Antragstellung bis zum Maßnahmenplan.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Klimaschutzkonzepte mit NKI-Förderung | COzwei",
    description:
      "70 bis 90 Prozent Zuschuss über die Kommunalrichtlinie, von der Antragstellung bis zum Maßnahmenplan.",
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
        alt: "NKI-geförderte Klimaschutzkonzepte durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimaschutzkonzepte mit NKI-Förderung | COzwei",
    description: "NKI-geförderte Klimaschutzkonzepte mit 70 bis 90 Prozent Zuschuss.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function Klimaschutzkonzepte() {
  return (
    <>
      <KlimaschutzkonzepteClient />
      <script
        {...jsonLd(
          serviceSchema({
            name: "NKI-geförderte Klimaschutzkonzepte",
            description:
              "Integrierte Klimaschutzkonzepte und Klimaschutzmanagement nach der Kommunalrichtlinie der Nationalen Klimaschutzinitiative für öffentliche und gemeinnützige Einrichtungen.",
            path: PATH,
            serviceType: "Klimaschutzkonzept",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Klimaschutzkonzepte", path: PATH },
          ])
        )}
      />
    </>
  );
}
