import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import FaqSection from "../components/FaqSection";
import InfoBox from "../components/InfoBox";
import ProcessSteps from "../components/ProcessSteps";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/klimaschutzkonzepte-krankenhaeuser";

export const metadata: Metadata = {
  title: "Klimaschutzkonzepte für Krankenhäuser (NKI) | COzwei",
  description:
    "NKI-gefördertes Klimaschutzkonzept für Krankenhäuser und soziale Träger: 70–90 % Zuschuss. Klimaschutz im 24/7-Betrieb, förderkonform geplant.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Klimaschutzkonzepte für Krankenhäuser (NKI) | COzwei",
    description:
      "70 bis 90 Prozent Zuschuss über die Kommunalrichtlinie, Maßnahmen für den 24/7-Betrieb.",
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
        alt: "Klimaschutzkonzepte für Krankenhäuser durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimaschutzkonzepte für Krankenhäuser (NKI) | COzwei",
    description: "NKI-gefördertes Klimaschutzkonzept für Kliniken und soziale Träger.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: qualitatives Energieprofil, absichtlich ohne Prozentwerte.
const ENERGIEPROFIL = [
  { bereich: "Lüftung und Klima", anteil: 100 },
  { bereich: "Wärme und Warmwasser", anteil: 78 },
  { bereich: "Medizintechnik", anteil: 58 },
  { bereich: "Beleuchtung", anteil: 38 },
  { bereich: "Küche", anteil: 24 },
];

const FAQ: FaqItem[] = [
  {
    question: "Sind auch private Klinikträger antragsberechtigt?",
    answer:
      "Antragsberechtigt sind öffentliche, gemeinnützige und mildtätige Träger. Für privatwirtschaftliche Träger prüfen wir alternative Programme, etwa den BAFA-Transformationsplan.",
  },
  {
    question: "Stört die Konzepterstellung den Klinikbetrieb?",
    answer:
      "Nein. Datenerhebung und Begehungen planen wir mit Technik- und Hygieneverantwortlichen; Messungen erfolgen ohne Eingriff in kritische Bereiche.",
  },
  {
    question: "Wie hoch ist die Förderung?",
    answer:
      "70 Prozent der förderfähigen Ausgaben im Erstvorhaben, bis zu 90 Prozent in finanzschwachen Kommunen und Braunkohlegebieten; Anschlussvorhaben 40 Prozent.",
  },
  {
    question: "Welche Maßnahmen bringen in Kliniken am meisten?",
    answer:
      "Das zeigt die Potenzialanalyse im Einzelfall; erfahrungsgemäß liegen große Hebel in Lüftungsoptimierung, Wärmerückgewinnung und der Erneuerung der Energiezentrale. Wir priorisieren nach CO₂-Wirkung und Wirtschaftlichkeit.",
  },
  {
    question: "Können mehrere Häuser eines Verbunds gemeinsam beantragen?",
    answer:
      "Ja, ein Konzept kann mehrere Einrichtungen eines Trägers umfassen. Die sinnvolle Struktur klären wir vor Antragstellung.",
  },
];

export default function KlimaschutzkonzepteKrankenhaeuser() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-oeffentlich.jpg"
        alt="Skyline einer Stadt, Interimsbild für Krankenhäuser und soziale Träger"
        title="Klimaschutzkonzepte für Krankenhäuser und soziale Träger"
        subtitle="Öffentliche, gemeinnützige und mildtätige Träger des Gesundheitswesens, der Pflege und der sozialen Hilfe sind über die Kommunalrichtlinie der NKI antragsberechtigt: 70 Prozent Zuschuss für Klimaschutzkonzept und Klimaschutzmanagement, bis zu 90 Prozent in finanzschwachen Kommunen und Braunkohlegebieten. COzwei entwickelt Konzepte, die im 24/7-Betrieb eines Krankenhauses funktionieren."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Klimaschutz unter Versorgungsauflagen
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Krankenhäuser gehören zu den energieintensivsten Gebäudetypen: Lüftung und
            Klimatisierung von OP- und Funktionsbereichen, Medizintechnik, Warmwasser und
            Küche laufen rund um die Uhr, bei strengen Hygiene- und
            Versorgungsanforderungen. Ein Klimaschutzkonzept für Kliniken muss deshalb
            Maßnahmen liefern, die Versorgungssicherheit und Wirtschaftlichkeit nicht
            gefährden: von der Optimierung der Lüftungsbetriebszeiten über
            Wärmerückgewinnung bis zur Umstellung der Energieerzeugung. Genau darauf richten
            wir Bilanz, Potenzialanalyse und Maßnahmenkatalog aus.
          </p>
        </div>
      </section>

      <ProcessSteps
        heading="Vom Antrag zum Maßnahmenplan"
        steps={[
          {
            title: "Antrag und Trägerstruktur",
            body: "Klärung der Antragsberechtigung (Träger, Verbund, Einzelhaus), digitale Antragstellung über easy-Online.",
          },
          {
            title: "Bilanz und Technikbestand",
            body: "THG-Bilanz inklusive Analyse von Energiezentrale, Lüftung und Großverbrauchern.",
          },
          {
            title: "Maßnahmen und Wirtschaftlichkeit",
            body: "Priorisierter Katalog mit Kosten, Einsparungen und Umsetzbarkeit im laufenden Betrieb, als Entscheidungsvorlage für Geschäftsführung und Träger.",
          },
        ]}
      />

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Energieprofil einer Klinik
          </h2>
          <div className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-6">
            <ul className="space-y-4">
              {ENERGIEPROFIL.map((e) => (
                <li key={e.bereich}>
                  <p className="text-sm font-bold mb-1" style={{ color: "#3D405B" }}>
                    {e.bereich}
                  </p>
                  <div className="h-4 rounded-full" style={{ backgroundColor: "rgba(129,178,154,0.10)" }}>
                    <div
                      className="h-4 rounded-full"
                      style={{ width: `${e.anteil}%`, backgroundColor: "#81B29A" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-5" style={{ color: "#6B6B6B" }}>
              Typische Größenordnung, qualitativ von groß nach klein. Die konkreten Anteile
              ermittelt die Potenzialanalyse für Ihr Haus.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <InfoBox label="Gut zu wissen">
            Auch Pflegeeinrichtungen, Einrichtungen der Kinder- und Jugendhilfe und weitere
            soziale Träger sind nach der Kommunalrichtlinie antragsberechtigt. Das Konzept
            kann mehrere Einrichtungen eines Trägers bündeln.
          </InfoBox>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Klimaschutzkonzepte",
            body: "Übersicht über NKI-Förderung und Zielgruppen.",
            href: "/klimaschutzkonzepte",
          },
          {
            title: "Öffentliche Einrichtungen",
            body: "Alle Angebote für den öffentlichen Sektor im Überblick.",
            href: "/branchen/oeffentliche-einrichtungen",
          },
          {
            title: "Förderung",
            body: "Weitere Programme, auch für privatwirtschaftliche Träger.",
            href: "/foerderung",
          },
          {
            title: "Energieeffizienz",
            body: "Lüftung, Wärmerückgewinnung und Anlagentechnik im Detail.",
            href: "/energieeffizienz",
          },
        ]}
      />

      <ContactCTA
        location="klimaschutzkonzepte_krankenhaeuser"
        context="Lassen Sie uns über Ihr Haus sprechen, wir prüfen Antragsberechtigung und Förderweg kostenlos."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Klimaschutzkonzepte für Krankenhäuser und soziale Träger",
            description:
              "NKI-gefördertes Klimaschutzkonzept für Kliniken, Pflegeeinrichtungen und soziale Träger, mit Maßnahmen für den laufenden 24/7-Betrieb.",
            path: PATH,
            serviceType: "Klimaschutzkonzept",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Klimaschutzkonzepte", path: "/klimaschutzkonzepte" },
            { name: "Krankenhäuser", path: PATH },
          ])
        )}
      />
    </div>
  );
}
