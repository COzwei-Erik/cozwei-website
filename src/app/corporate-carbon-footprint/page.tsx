import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import FaqSection from "../components/FaqSection";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/corporate-carbon-footprint";

export const metadata: Metadata = {
  title: "Corporate Carbon Footprint (CCF) erstellen | COzwei",
  description:
    "Corporate Carbon Footprint nach GHG Protocol: Scope 1, 2 und 3 vollständig bilanziert, auditierungsfähig dokumentiert. Angebot in 48 h anfragen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Corporate Carbon Footprint (CCF) erstellen | COzwei",
    description:
      "Scope 1, 2 und 3 vollständig bilanziert und auditierungsfähig dokumentiert.",
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
        alt: "Corporate Carbon Footprint durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Carbon Footprint (CCF) erstellen | COzwei",
    description: "Scope 1, 2 und 3 vollständig bilanziert, auditierungsfähig.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Scope-Diagramm, drei verbundene Segmente, reines CSS.
const SCOPES = [
  {
    label: "Scope 1",
    sub: "Direkte Emissionen",
    chips: ["Fuhrpark", "Heizung", "Prozesse"],
    tone: "#3D405B",
  },
  {
    label: "Scope 2",
    sub: "Eingekaufte Energie",
    chips: ["Strom", "Fernwärme"],
    tone: "#6E7391",
  },
  {
    label: "Scope 3",
    sub: "Vor- und nachgelagert",
    chips: ["Einkauf", "Logistik", "Pendeln", "Produktnutzung"],
    tone: "#81B29A",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Welche Daten müssen wir liefern?",
    answer:
      "Im Kern: Energieverbräuche, Fuhrparkdaten, Einkaufsvolumina, Reise- und Pendeldaten. Wir liefern strukturierte Erhebungsvorlagen und priorisieren nach Wesentlichkeit, nicht jede Scope-3-Kategorie ist für jedes Unternehmen relevant.",
  },
  {
    question: "Müssen wir alle 15 Scope-3-Kategorien bilanzieren?",
    answer:
      "Nein. Das GHG Protocol verlangt eine Wesentlichkeitsbewertung. Wir screenen alle 15 Kategorien und bilanzieren die relevanten vollständig; die übrigen werden begründet ausgeschlossen.",
  },
  {
    question: "Ist der CCF CSRD-tauglich?",
    answer:
      "Ja. Wir rechnen so, dass die Ergebnisse direkt in die ESRS-E1-Datenpunkte überführbar sind, inklusive Scope-2-Dual-Reporting und Intensitätskennzahlen.",
  },
  {
    question: "Was unterscheidet COzwei von Software-Tools?",
    answer:
      "Software erfasst, was Sie eingeben. Wir prüfen Systemgrenzen, wählen passende Emissionsfaktoren, hinterfragen Ausreißer und dokumentieren auditierungsfähig. Auf Wunsch implementieren wir zusätzlich eine Software für die Folgejahre.",
  },
  {
    question: "Wird die Erstellung gefördert?",
    answer:
      "Im Rahmen eines BAFA-Transformationsplans (EEW Modul 5) ist die CO₂-Bilanz förderfähiger Bestandteil, mit Zuschüssen von 40 bis 60 Prozent.",
  },
];

export default function CorporateCarbonFootprint() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/pexels-marcin-jozwiak-199600-3641377.jpg"
        alt="Industrieanlage bei Nacht, Symbolbild für die Unternehmensbilanz"
        title="Corporate Carbon Footprint: die CO₂-Bilanz Ihres Unternehmens"
        subtitle="Der Corporate Carbon Footprint (CCF) ist die vollständige Treibhausgasbilanz eines Unternehmens über die Scopes 1, 2 und 3 nach dem GHG Protocol. Er zeigt, wo Emissionen entstehen, und ist die Pflichtgrundlage für Klimaziele, CSRD-Berichte, CDP und Förderanträge."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Die drei Scopes im Überblick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {SCOPES.map((scope) => (
              <div key={scope.label} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2DDD0" }}>
                <div className="px-5 py-4" style={{ backgroundColor: scope.tone }}>
                  <p className="font-extrabold text-white text-lg">{scope.label}</p>
                  <p className="text-white/90 text-sm">{scope.sub}</p>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {scope.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: "rgba(129,178,154,0.18)", color: "#3D405B" }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="leading-relaxed max-w-3xl" style={{ color: "#23243a" }}>
            Erfahrungsgemäß liegen bei den meisten Unternehmen über 80 Prozent der
            Emissionen in Scope 3. Deshalb legen wir besonderen Wert auf eine belastbare
            Erhebung der Lieferketten- und Mobilitätsdaten, mit strukturierten Abfragen,
            die Ihre Fachabteilungen nicht überlasten.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Was Sie von uns bekommen
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Vollständige Bilanz mit Methodendokumentation",
              "Hotspot-Analyse der größten Emissionsquellen",
              "Management-Präsentation der Ergebnisse",
              "Datenmodell zur jährlichen Fortschreibung",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed" style={{ color: "#23243a" }}>
                <span aria-hidden="true" style={{ color: "#81B29A" }} className="font-extrabold">
                  &rarr;
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed" style={{ color: "#23243a" }}>
            Auf dieser Basis leiten wir auf Wunsch direkt Ihren{" "}
            <Link href="/dekarbonisierung" className="font-bold underline" style={{ color: "#3D405B" }}>
              Dekarbonisierungsplan
            </Link>{" "}
            ab.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Dual Reporting bei Scope 2
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Wir weisen Scope-2-Emissionen standardkonform doppelt aus: location-based auf
            Basis des nationalen Strommix und market-based auf Basis Ihrer Lieferverträge
            und Herkunftsnachweise. So sind Ihre Zahlen für CDP, SBTi und ESRS E1
            anschlussfähig.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Product Carbon Footprint",
            body: "Die CO₂-Bilanz einzelner Produkte nach ISO 14067.",
            href: "/product-carbon-footprint",
          },
          {
            title: "Verifizierung",
            body: "Unabhängige Prüfung Ihrer Bilanz nach ISO 14064-3.",
            href: "/verifizierung",
          },
          {
            title: "Dekarbonisierung",
            body: "Aus der Bilanz wird ein Reduktionspfad mit Klimazielen.",
            href: "/dekarbonisierung",
          },
        ]}
      />

      <ContactCTA
        location="corporate_carbon_footprint"
        context="Fordern Sie ein Festpreisangebot für Ihren CCF an, Antwort innerhalb von zwei Werktagen."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Corporate Carbon Footprint",
            description:
              "Erstellung der vollständigen Treibhausgasbilanz eines Unternehmens über Scope 1, 2 und 3 nach GHG Protocol und ISO 14064-1.",
            path: PATH,
            serviceType: "Corporate Carbon Footprint",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "CO₂-Bilanzierung", path: "/co2-bilanzierung" },
            { name: "Corporate Carbon Footprint", path: PATH },
          ])
        )}
      />
    </div>
  );
}
