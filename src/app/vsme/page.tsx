import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import FaqSection from "../components/FaqSection";
import ProcessSteps from "../components/ProcessSteps";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/vsme";

export const metadata: Metadata = {
  title: "VSME & Voluntary Standard (VS): Bericht für KMU | COzwei",
  description:
    "Freiwilliger Nachhaltigkeitsbericht nach VSME/VS: Bankenanfragen und Kundenfragebögen mit einem Bericht beantworten. Pragmatisch umgesetzt mit COzwei.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "VSME & Voluntary Standard (VS): Bericht für KMU | COzwei",
    description:
      "Ein Bericht für alle ESG-Anfragen von Banken, Kunden und Versicherern.",
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
        alt: "VSME-Berichterstattung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VSME & Voluntary Standard (VS): Bericht für KMU | COzwei",
    description: "Freiwillig berichten und ESG-Anfragen gebündelt beantworten.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Modul-Vergleich
const MODULE = [
  {
    name: "Basis-Modul",
    tagline: "Der schnelle Einstieg",
    body: "Kernkennzahlen zu Umwelt, Sozialem und Governance. Deckt die häufigsten Anfragen von Kunden und Hausbanken ab.",
    accent: false,
  },
  {
    name: "Comprehensive-Modul",
    tagline: "Für anspruchsvollere Adressaten",
    body: "Zusätzliche Angaben für Adressaten mit höherem Detailbedarf, etwa Banken im Kreditprozess und Konzernkunden mit eigener CSRD-Pflicht.",
    accent: true,
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Ist der VSME/VS verpflichtend?",
    answer:
      "Nein, die Anwendung ist freiwillig. Faktisch wird der Standard aber zur Referenz, weil Banken und Großkunden ihre Anfragen daran ausrichten und der Value-Chain-Cap weitergehende Anfragen begrenzt.",
  },
  {
    question: "VSME oder VS, wonach sollen wir berichten?",
    answer:
      "Der VS löst den VSME als weiterentwickelte Fassung ab; die Inhalte sind weitgehend aufwärtskompatibel. Wir richten Ihren Bericht am jeweils aktuellen Stand aus und kennzeichnen die verwendete Fassung transparent. Die Auslegung einzelner Übergangsfragen ist noch nicht final.",
  },
  {
    question: "Wie lange dauert der erste Bericht?",
    answer:
      "Mit vorhandener CO₂-Bilanz typischerweise sechs bis zehn Wochen; ohne Bilanz entsprechend länger, da die Klimadaten der aufwendigste Teil sind.",
  },
  {
    question: "Brauchen wir dafür eine Software?",
    answer:
      "Nicht zwingend. Für den Einstieg genügen strukturierte Vorlagen; bei jährlicher Fortschreibung kann Automatisierung den Aufwand deutlich senken.",
  },
  {
    question: "Hilft der Bericht bei der Bank?",
    answer:
      "Ja. Kreditinstitute fragen ESG-Daten zunehmend standardisiert ab; die EU-Kommission empfiehlt ausdrücklich, solche Anfragen am freiwilligen Standard auszurichten.",
  },
];

export default function Vsme() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/pexels-goumbik-590020.jpg"
        alt="Diagramme auf Papier mit Stift, Symbolbild für freiwillige Berichterstattung"
        title="VSME & Voluntary Standard: freiwillig berichten, Anfragen bündeln"
        subtitle="Der VSME ist der von der EFRAG entwickelte freiwillige EU-Standard für die Nachhaltigkeitsberichterstattung kleiner und mittlerer Unternehmen. Sein Nachfolger, der Voluntary Standard (VS), wurde von der EU-Kommission am 3. Juli 2026 angenommen. Mit einem Bericht nach diesem Standard beantworten Unternehmen die ESG-Anfragen von Banken, Kunden und Versicherern gebündelt, statt jeden Fragebogen einzeln."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Warum jetzt: Der Standard wird zum Schutzschild
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Mit dem Omnibus-I-Paket gilt die CSRD-Berichtspflicht nur noch für Unternehmen
            mit mehr als 1.000 Mitarbeitenden und über 450 Millionen Euro Umsatz. Für alle
            anderen wird der freiwillige Standard zum zentralen Rahmen, aus zwei Gründen:
            Erstens richten berichtspflichtige Großunternehmen ihre Lieferantenanfragen
            zunehmend daran aus. Zweitens sieht der neue Rechtsrahmen einen Value-Chain-Cap
            vor: Große Unternehmen dürfen von kleineren Geschäftspartnern grundsätzlich keine
            Nachhaltigkeitsinformationen verlangen, die über den freiwilligen Standard
            hinausgehen. Wer nach VSME/VS berichtet, hat damit eine belastbare Obergrenze für
            das, was gefragt werden darf.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Basis- oder Comprehensive-Modul?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {MODULE.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl bg-white p-7"
                style={
                  m.accent
                    ? { border: "2px solid #81B29A" }
                    : { border: "1px solid #E2DDD0" }
                }
              >
                <p className="text-xs font-extrabold uppercase tracking-wide mb-2" style={{ color: "#81B29A" }}>
                  {m.tagline}
                </p>
                <h3 className="text-xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
                  {m.name}
                </h3>
                <p className="leading-relaxed" style={{ color: "#23243a" }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
          <p className="leading-relaxed" style={{ color: "#23243a" }}>
            Wir empfehlen das Modul anhand der tatsächlich vorliegenden Anfragen, nicht auf
            Vorrat.
          </p>
        </div>
      </section>

      <ProcessSteps
        heading="Unser Vorgehen"
        steps={[
          {
            title: "Anfragen sichten",
            body: "Welche Banken-, Kunden- und Ratingfragen liegen vor? Daraus leiten wir Modul und Umfang ab.",
          },
          {
            title: "Daten erheben",
            body: "Vorlagenbasiert; die CO₂-Bilanz liefern wir bei Bedarf gleich mit.",
          },
          {
            title: "Bericht erstellen",
            body: "Standardkonform, mit klarer Kennzeichnung von Pflicht- und freiwilligen Angaben.",
          },
          {
            title: "Wiederverwenden",
            body: "Der Bericht beantwortet künftige Anfragen; jährliche Fortschreibung mit reduziertem Aufwand.",
          },
        ]}
      />

      <section className="w-full pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            GRI: wenn international berichtet wird
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "#23243a" }}>
            Für Unternehmen mit internationalen Stakeholdern unterstützen wir zusätzlich
            ausgewählte GRI-Angaben mit Umweltfokus, anschlussfähig an bestehende
            VSME/VS-Daten.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Importieren Sie emissionsintensive Waren in die EU? Dann betrifft Sie zusätzlich
            der CO₂-Grenzausgleich CBAM.{" "}
            {/* TODO: auf /cbam verlinken, sobald die Seite existiert. Sie ist im
                Briefing verlinkt, aber nicht unter den zehn neuen Seiten. */}
            <Link href="/berichterstattung#cbam" className="font-bold underline" style={{ color: "#3D405B" }}>
              Kurzüberblick zu CBAM
            </Link>
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Berichterstattung",
            body: "Übersicht über CSRD, CDP, VSME und CBAM.",
            href: "/berichterstattung",
          },
          {
            title: "CO₂-Bilanzierung",
            body: "Die Klimadaten, die den Kern jedes Berichts bilden.",
            href: "/co2-bilanzierung",
          },
          {
            title: "KI & Automatisierung",
            body: "Jährliche Fortschreibung automatisieren statt neu sammeln.",
            href: "/ki-automatisierung",
          },
        ]}
      />

      <ContactCTA
        location="vsme"
        context="Leiten Sie uns eine konkrete ESG-Anfrage weiter, wir sagen Ihnen, welches Modul sie abdeckt."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "VSME und Voluntary Standard Berichterstattung",
            description:
              "Erstellung freiwilliger Nachhaltigkeitsberichte nach VSME und Voluntary Standard, um ESG-Anfragen von Banken, Kunden und Versicherern gebündelt zu beantworten.",
            path: PATH,
            serviceType: "Freiwillige Nachhaltigkeitsberichterstattung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Berichterstattung", path: "/berichterstattung" },
            { name: "VSME & Voluntary Standard", path: PATH },
          ])
        )}
      />
    </div>
  );
}
