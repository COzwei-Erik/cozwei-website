import type { Metadata } from "next";
import NkiFoerderungClient from "./NkiFoerderungClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights/nki-foerderung";

export const metadata: Metadata = {
  title: "NKI-Förderung: Erfahrungen aus der Umsetzung | COzwei",
  description:
    "Erfahrungen aus abgeschlossenen NKI-Klimaschutzprojekten: was Anträge tragfähig macht, wo Vorhaben klemmen und wie Konzepte beschlussfähig werden.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "NKI-Förderung: Erfahrungen aus der Umsetzung | COzwei",
    description:
      "Erfahrungen aus abgeschlossenen NKI-Klimaschutzprojekten: was Anträge tragfähig macht, wo Vorhaben klemmen und wie Konzepte beschlussfähig werden.",
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
    title: "NKI-Förderung: Erfahrungen aus der Umsetzung | COzwei",
    description:
      "Erfahrungen aus abgeschlossenen NKI-Klimaschutzprojekten: was Anträge tragfähig macht, wo Vorhaben klemmen und wie Konzepte beschlussfähig werden.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function NkiFoerderungPage() {
  return (
    <>
      <NkiFoerderungClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "NKI-Förderung", path: "/insights/nki-foerderung" },
          ])
        )}
      />
    </>
  );
}
