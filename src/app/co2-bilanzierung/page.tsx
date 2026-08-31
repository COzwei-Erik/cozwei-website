import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import BilanzSwitch from "./BilanzSwitch";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
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

const PATH = "/co2-bilanzierung";

export const metadata: Metadata = {
  title: "CO₂-Bilanzierung nach GHG Protocol | COzwei",
  description:
    "CO₂-Bilanz erstellen lassen: Corporate & Product Carbon Footprint nach GHG Protocol und ISO-Normen, auditierungsfähig. Jetzt Erstgespräch anfragen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "CO₂-Bilanzierung nach GHG Protocol | COzwei",
    description:
      "Corporate und Product Carbon Footprint nach GHG Protocol und ISO-Normen, auditierungsfähig dokumentiert.",
    url: `${SITE_URL}${PATH}`,
    siteName: "COzwei",
    locale: "de_DE",
    type: "website",
    images: [
      {
        // TODO: dediziertes 1200x630-OG-Bild. Aktuell COzwei-Standardbild.
        url: `${SITE_URL}/Pictures/Artboard 1.png`,
        width: 1200,
        height: 630,
        alt: "CO₂-Bilanzierung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CO₂-Bilanzierung nach GHG Protocol | COzwei",
    description:
      "Corporate und Product Carbon Footprint nach GHG Protocol und ISO-Normen.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    question: "Was kostet eine CO₂-Bilanz?",
    answer:
      "Der Aufwand hängt von Unternehmensgröße, Standortzahl und Scope-3-Tiefe ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein Festpreisangebot. Für die Erstellung im Rahmen eines geförderten Transformationsplans übernimmt das BAFA einen erheblichen Teil der Kosten.",
  },
  {
    question: "Was ist der Unterschied zwischen Scope 1, 2 und 3?",
    answer:
      "Scope 1 umfasst direkte Emissionen aus eigenen Anlagen und Fahrzeugen, Scope 2 Emissionen aus eingekaufter Energie, Scope 3 alle vor- und nachgelagerten Emissionen der Wertschöpfungskette, vom Einkauf bis zur Produktnutzung.",
  },
  {
    question: "Wie lange dauert die Erstellung?",
    answer:
      "Ein CCF für ein mittelständisches Unternehmen dauert je nach Datenlage typischerweise sechs bis zwölf Wochen.",
  },
  {
    question: "Nach welchen Standards wird gerechnet?",
    answer:
      "Nach dem GHG Protocol Corporate Standard bzw. Product Standard sowie ISO 14064-1 und ISO 14067. Die Ergebnisse sind auditierungs- und berichtsfähig.",
  },
  {
    question: "Brauchen wir jedes Jahr eine neue Bilanz?",
    answer:
      "Für Klimaziele, CDP und CSRD ist eine jährliche Fortschreibung Standard. Nach der Erstbilanz sinkt der Aufwand deutlich, da Systemgrenzen und Datenprozesse stehen.",
  },
];

// Sektion 3: Verwendungszwecke, jeder mit kontextuellem internen Link.
const ZWECKE = [
  {
    title: "Basis für Ziele",
    body: "Ohne Bilanz kein belastbares Reduktionsziel. Die Bilanz ist die Ausgangsgröße für Dekarbonisierungsplan und SBTi-Klimaziele.",
    href: "/dekarbonisierung",
    linkLabel: "Dekarbonisierungsplan und SBTi",
  },
  {
    title: "Pflichtangaben",
    body: "CSRD, ESRS E1 und CDP verlangen Treibhausgasdaten in definierter Struktur. Wir rechnen so, dass die Werte direkt überführbar sind.",
    href: "/berichterstattung",
    linkLabel: "Nachhaltigkeitsberichterstattung",
  },
  {
    title: "Kundenanfragen und Ratings",
    body: "Kunden, Banken und ESG-Ratings fragen Emissionsdaten ab. Ein Bericht beantwortet viele Fragebögen zugleich.",
    href: "/vsme",
    linkLabel: "Freiwillige Berichterstattung nach VSME",
  },
  {
    title: "Förderanträge",
    body: "Für Programme wie den BAFA-Transformationsplan ist die CO₂-Bilanz förderfähiger Bestandteil und inhaltliche Voraussetzung.",
    href: "/transformationskonzepte",
    linkLabel: "BAFA-Transformationsplan",
  },
];

export default function Co2Bilanzierung() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero mit H1 und Definitionsabsatz, direkt extrahierbar für Answer Engines */}
      <PageHero
        image="/Pictures/Homepage/loesung-transparenz.jpg"
        alt="Industrieschornstein in der Abenddämmerung, Symbolbild für CO₂-Bilanzierung"
        title="CO₂-Bilanzierung: Treibhausgase messbar machen"
        subtitle="Eine CO₂-Bilanz erfasst alle Treibhausgasemissionen eines Unternehmens oder Produkts nach anerkannten Standards wie dem GHG Protocol und den ISO-Normen 14064 und 14067. Sie ist die Datengrundlage für Klimaziele, Berichtspflichten und Förderanträge. COzwei erstellt auditierungsfähige Bilanzen für Unternehmen jeder Größe."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Zwei Bilanzen, ein System
          </h2>
          <BilanzSwitch />
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Wofür Sie die Bilanz brauchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ZWECKE.map((z) => (
              <div
                key={z.title}
                className="rounded-2xl bg-white border p-6"
                style={{ borderColor: "#E2DDD0" }}
              >
                <h3
                  className="text-base font-extrabold uppercase tracking-wide mb-2"
                  style={{ color: "#81B29A" }}
                >
                  {z.title}
                </h3>
                <p className="leading-relaxed mb-3" style={{ color: "#23243a" }}>
                  {z.body}
                </p>
                <Link
                  href={z.href}
                  className="text-sm font-bold hover:underline"
                  style={{ color: "#3D405B" }}
                >
                  {z.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        heading="So läuft die Bilanzierung ab"
        steps={[
          {
            title: "Systemgrenzen festlegen",
            body: "Standorte, Beteiligungen, Berichtsjahr, Scope-3-Kategorien.",
          },
          {
            title: "Daten erheben",
            body: "Strukturierte Abfrage von Energie-, Einkaufs- und Mobilitätsdaten; wir arbeiten mit Ihren vorhandenen Systemen.",
          },
          {
            title: "Berechnen und dokumentieren",
            body: "Emissionsfaktoren aus anerkannten Datenbanken, transparente Methodendokumentation.",
          },
          {
            title: "Ergebnisse nutzen",
            body: "Management-Report, Hotspot-Analyse und Empfehlung der nächsten Schritte.",
          },
        ]}
      />

      <section className="w-full pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Prüffähig durch Verifizierung
          </h2>
          <InfoBox label="Verifizierung">
            Auf Wunsch lassen Sie Ihre Bilanz nach ISO 14064-3 durch unabhängige Stellen
            verifizieren. Wir bereiten die Unterlagen prüffähig vor und begleiten das
            Verfahren.{" "}
            <Link href="/verifizierung" className="font-bold underline" style={{ color: "#3D405B" }}>
              Mehr zur Verifizierung nach ISO 14064-3
            </Link>
          </InfoBox>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Dekarbonisierung",
            body: "Aus der Bilanz wird ein Reduktionspfad mit Maßnahmen und Klimazielen.",
            href: "/dekarbonisierung",
          },
          {
            title: "Verifizierung",
            body: "Unabhängige Prüfung Ihrer Bilanz nach ISO 14064-3.",
            href: "/verifizierung",
          },
          {
            title: "Berichterstattung",
            body: "CSRD, CDP und freiwillige Berichte auf Basis derselben Daten.",
            href: "/berichterstattung",
          },
        ]}
      />

      <ContactCTA
        location="co2_bilanzierung"
        context="Sie möchten wissen, welche Bilanz Ihr Unternehmen braucht? Wir klären es in einem Erstgespräch."
      />

      <SiteFooter />

      <script
        {...jsonLd(
          serviceSchema({
            name: "CO₂-Bilanzierung",
            description:
              "Erstellung von Corporate und Product Carbon Footprints nach GHG Protocol, ISO 14064-1 und ISO 14067.",
            path: PATH,
            serviceType: "CO₂-Bilanzierung",
          })
        )}
      />
      {/* Das FAQPage-Schema rendert FaqSection selbst, hier bewusst nicht doppelt. */}
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "CO₂-Bilanzierung", path: PATH },
          ])
        )}
      />
    </div>
  );
}
