import type { Metadata } from "next";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
import RelatedSolutions from "../components/RelatedSolutions";
import SolutionCard from "../components/SolutionCard";
import { breadcrumbSchema, jsonLd, serviceSchema, SITE_URL } from "../components/schema";

const PATH = "/branchen";

export const metadata: Metadata = {
  title: "Branchen: Dekarbonisierung nach Sektor | COzwei",
  description:
    "Branchenlösungen von COzwei: Automotive, Druck & Verlag, Verbrauchsgüter und öffentliche Einrichtungen mit ihren konkreten Anforderungen und Fristen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Branchen: Dekarbonisierung nach Sektor | COzwei",
    description:
      "Automotive, Druck & Verlag, Verbrauchsgüter und öffentliche Einrichtungen im Überblick.",
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
        alt: "Branchenlösungen von COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branchen: Dekarbonisierung nach Sektor | COzwei",
    description: "Vier Branchen, jeweils mit konkreten Anforderungen und Fristen.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

export const BRANCHEN = [
  {
    title: "Automotive",
    body: "PCF je Bauteil, SAQ 5.0, CDP und SBTi: die Klimaanforderungen der OEMs methodensicher erfüllen.",
    href: "/branchen/automotive",
    image: "/Pictures/Homepage/branche-automotive.jpg",
    imageAlt: "Getriebe eines Fahrzeugs in Nahaufnahme, Symbolbild für die Automobilindustrie",
  },
  {
    title: "Druck & Verlag",
    body: "Papier, Druck und Logistik korrekt bilanziert, Klimaaussagen zulässig formuliert.",
    href: "/branchen/druck-verlag",
    image: "/Pictures/Homepage/branche-druck-verlag.jpg",
    imageAlt: "Stapel gedruckter Zeitungen, Symbolbild für die Druck- und Verlagsbranche",
  },
  {
    title: "Verbrauchsgüter",
    body: "PCF je Produkt, Handels- und Bankenanfragen nach VSME, Green Claims mit Nachweis.",
    href: "/branchen/verbrauchsgueter",
    image: "/Pictures/Homepage/branche-verbrauchsgueter.jpg",
    imageAlt: "Mitarbeiterin mit Tablet im Einzelhandel, Symbolbild für Verbrauchsgüter",
  },
  {
    title: "Öffentliche Einrichtungen",
    body: "NKI-geförderte Klimaschutzkonzepte mit 70 bis 90 Prozent Zuschuss, von Antrag bis Umsetzung.",
    href: "/branchen/oeffentliche-einrichtungen",
    image: "/Pictures/Homepage/branche-oeffentlich.jpg",
    imageAlt: "Skyline einer Stadt, Symbolbild für öffentliche Einrichtungen",
  },
];

export default function BranchenHub() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-automotive.jpg"
        alt="Getriebe eines Fahrzeugs in Nahaufnahme, Symbolbild für Branchenlösungen"
        title="Branchen: dieselben Standards, andere Anforderungen"
        subtitle="Welche Klimadaten ein Unternehmen braucht, entscheidet weniger die Regulatorik als der Kunde, der fragt. Ein Automobilzulieferer beantwortet PCF-Anfragen und SAQ 5.0, ein Verlag rechnet papierdominierte Bilanzen und prüft seine Klimaaussagen, eine Hochschule beantragt NKI-Förderung. Auf diesen Seiten steht, was in Ihrer Branche gefordert wird, von wem und mit welcher Frist."
        scrollTargetId="branchen"
      />

      <section id="branchen" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Branchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRANCHEN.map((b) => (
              <SolutionCard
                key={b.href}
                title={b.title}
                body={b.body}
                image={b.image}
                imageAlt={b.imageAlt}
                href={b.href}
                linkLabel="Zur Branchenseite"
              />
            ))}
          </div>
        </div>
      </section>

      <RelatedSolutions
        items={[
          {
            title: "CO₂-Bilanzierung",
            body: "Die Datengrundlage, mit der jede Branchenanforderung beginnt.",
            href: "/co2-bilanzierung",
          },
          {
            title: "Berichterstattung",
            body: "CSRD, CDP, VSME und CBAM, je nachdem wer fragt.",
            href: "/berichterstattung",
          },
          {
            title: "Förderung",
            body: "Zuschüsse für Beratung und Investitionen in allen Branchen.",
            href: "/foerderung",
          },
        ]}
      />

      <ContactCTA
        location="branchen_hub"
        context="Sagen Sie uns, wer bei Ihnen Klimadaten anfragt, wir ordnen es der passenden Anforderung zu."
      />

      <SiteFooter />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Branchenspezifische Dekarbonisierungsberatung",
            description:
              "Dekarbonisierungs- und Nachhaltigkeitsberatung für Automotive, Druck und Verlag, Verbrauchsgüter sowie öffentliche Einrichtungen.",
            path: PATH,
            serviceType: "Branchenberatung Dekarbonisierung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: PATH },
          ])
        )}
      />
    </div>
  );
}
