import type { Metadata } from "next";
import CsrdAutomotiveClient from "./CsrdAutomotiveClient";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/insights/csrd-automobilindustrie-lektionen-zulieferer";

export const metadata: Metadata = {
  title: "CSRD Automobilindustrie: vier Lektionen | COzwei",
  description:
    "Vier Lektionen aus der ersten CSRD-Berichtssaison der Automobilindustrie und was kleinere Zulieferer daraus für die eigene Vorbereitung mitnehmen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "CSRD Automobilindustrie: vier Lektionen | COzwei",
    description:
      "Vier Lektionen aus der ersten CSRD-Berichtssaison der Automobilindustrie und was kleinere Zulieferer daraus für die eigene Vorbereitung mitnehmen.",
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
    title: "CSRD Automobilindustrie: vier Lektionen | COzwei",
    description:
      "Vier Lektionen aus der ersten CSRD-Berichtssaison der Automobilindustrie und was kleinere Zulieferer daraus für die eigene Vorbereitung mitnehmen.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function CsrdAutomotivePage() {
  return (
    <>
      <CsrdAutomotiveClient />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "CSRD Automobilindustrie", path: "/insights/csrd-automobilindustrie-lektionen-zulieferer" },
          ])
        )}
      />
    </>
  );
}
