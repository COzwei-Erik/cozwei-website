import type { Metadata } from "next";
import ESRSE1Client from "./ESRSE1Client";
import { breadcrumbSchema, jsonLd, SITE_URL } from "../components/schema";

// Server Component nur fuer die Metadaten, die Seite selbst bleibt ein Client
// Component wegen der Sprachumschaltung. Muster wie cdp-klimaberichterstattung.
const PATH = "/esrs-e1";

export const metadata: Metadata = {
  title: "CSRD und ESRS E1: Klimaberichterstattung | COzwei",
  description:
    "ESRS E1 umsetzen: THG-Bilanz, Klimaziele, Übergangsplan und die klimabezogenen Datenpunkte der CSRD, berichtsfertig aufbereitet durch COzwei.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "CSRD und ESRS E1: Klimaberichterstattung | COzwei",
    description:
      "ESRS E1 umsetzen: THG-Bilanz, Klimaziele, Übergangsplan und die klimabezogenen Datenpunkte der CSRD, berichtsfertig aufbereitet durch COzwei.",
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
    title: "CSRD und ESRS E1: Klimaberichterstattung | COzwei",
    description:
      "ESRS E1 umsetzen: THG-Bilanz, Klimaziele, Übergangsplan und die klimabezogenen Datenpunkte der CSRD, berichtsfertig aufbereitet durch COzwei.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export default function ESRSE1Page() {
  return (
    <>
      <ESRSE1Client />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "CSRD / ESRS E1", path: "/esrs-e1" },
          ])
        )}
      />
    </>
  );
}
