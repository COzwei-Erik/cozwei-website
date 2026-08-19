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

const PATH = "/product-carbon-footprint";

export const metadata: Metadata = {
  title: "Product Carbon Footprint (PCF) nach ISO 14067 | COzwei",
  description:
    "Product Carbon Footprint cradle-to-grave nach ISO 14067 und GHG Protocol: belastbare Produkt-CO₂-Bilanzen für Kundenanfragen und Produktentwicklung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Product Carbon Footprint (PCF) nach ISO 14067 | COzwei",
    description:
      "Produkt-CO₂-Bilanzen cradle-to-gate oder cradle-to-grave, belastbar für Kundenanfragen.",
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
        alt: "Product Carbon Footprint durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Carbon Footprint (PCF) nach ISO 14067 | COzwei",
    description: "Produkt-CO₂-Bilanzen nach ISO 14067 und GHG Protocol Product Standard.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Lebenszyklus-Leiste. Hervorhebung per CSS-Hover, kein JS.
const STATIONEN = [
  { label: "Rohstoffe", hint: "Gewinnung und Aufbereitung" },
  { label: "Vorprodukte", hint: "Zulieferteile und Halbzeuge" },
  { label: "Produktion", hint: "Fertigung im eigenen Werk" },
  { label: "Nutzung", hint: "Energiebedarf beim Kunden" },
  { label: "End-of-Life", hint: "Recycling und Entsorgung" },
];

const FAQ: FaqItem[] = [
  {
    question: "Was kostet ein PCF?",
    answer:
      "Abhängig von Produktkomplexität, Stücklistentiefe und Datenlage. Bei Produktfamilien mit ähnlicher Struktur sinken die Kosten pro Produkt deutlich, da wir mit skalierbaren Berechnungsmodellen arbeiten.",
  },
  {
    question: "PCF oder LCA, was brauchen wir?",
    answer:
      "Der PCF betrachtet ausschließlich Treibhausgase, eine LCA (Ökobilanz) zusätzliche Umweltwirkungen wie Wasser oder Ressourcen. Für Klimaanfragen von Kunden genügt in der Regel der PCF; er ist der schnellere und günstigere Einstieg.",
  },
  {
    question: "Können mehrere Produkte gleichzeitig bilanziert werden?",
    answer:
      "Ja. Wir bauen parametrisierte Modelle, mit denen ganze Produktfamilien effizient berechnet und bei Änderungen aktualisiert werden können.",
  },
  {
    question: "Welche Daten brauchen Sie von uns?",
    answer:
      "Stückliste, Materialgewichte, Energieverbräuche der Fertigung, Transportwege und, falls verfügbar, Lieferantendaten. Fehlende Werte ergänzen wir dokumentiert über Sekundärdaten.",
  },
  {
    question: "Ist der PCF verifizierbar?",
    answer:
      "Ja, nach ISO 14064-3 bzw. ISO 14067. Wir bereiten die Dokumentation prüffähig vor.",
  },
];

export default function ProductCarbonFootprint() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-verbrauchsgueter.jpg"
        alt="Mitarbeiterin mit Tablet vor Produktregalen, Symbolbild für Produktbilanzen"
        title="Product Carbon Footprint: die CO₂-Bilanz Ihres Produkts"
        subtitle="Der Product Carbon Footprint (PCF) beziffert die Treibhausgasemissionen eines Produkts über seinen Lebensweg, von der Rohstoffgewinnung über Produktion und Nutzung bis zur Entsorgung. COzwei berechnet PCFs nach ISO 14067 und GHG Protocol Product Standard, belastbar für Kundenanfragen, Ausschreibungen und Produktentwicklung."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Vom Rohstoff bis zur Entsorgung
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {STATIONEN.map((station, i) => (
              <li
                key={station.label}
                className="group rounded-2xl border p-5 transition-all duration-300 hover:border-[#81B29A] hover:shadow-md"
                style={{ borderColor: "#E2DDD0" }}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-extrabold mb-3 transition-colors"
                  style={{ backgroundColor: "rgba(129,178,154,0.18)", color: "#3D405B" }}
                >
                  {i + 1}
                </span>
                <p className="font-extrabold mb-1" style={{ color: "#3D405B" }}>
                  {station.label}
                </p>
                <p className="text-sm leading-snug" style={{ color: "#6B6B6B" }}>
                  {station.hint}
                </p>
              </li>
            ))}
          </ol>

          <p className="leading-relaxed max-w-3xl" style={{ color: "#23243a" }}>
            Je nach Anforderung Ihres Kunden berechnen wir cradle-to-gate (bis Werkstor)
            oder cradle-to-grave (kompletter Lebensweg). Beide Systemgrenzen weisen wir
            transparent aus.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Typische Anlässe
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: "#3D405B" }}>
                B2B-Kundenanfragen
              </h3>
              <p className="leading-relaxed" style={{ color: "#23243a" }}>
                Immer mehr Konzerne fordern PCFs von ihren Lieferanten, oft mit kurzer
                Frist und festem Datenformat. Wir liefern anschlussfähige Werte inklusive
                Methodennachweis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: "#3D405B" }}>
                Produktentwicklung
              </h3>
              <p className="leading-relaxed" style={{ color: "#23243a" }}>
                Der PCF zeigt, welche Materialien und Prozessschritte den Fußabdruck
                treiben, die Grundlage für emissionsärmere Produktvarianten.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: "#3D405B" }}>
                Kommunikation
              </h3>
              <p className="leading-relaxed" style={{ color: "#23243a" }}>
                Für Klimaaussagen am Produkt gelten strenge rechtliche Anforderungen. Wir
                liefern die belastbare Datenbasis und beraten zur rechtssicheren
                Formulierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Datenqualität entscheidet
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Wo Primärdaten fehlen, arbeiten wir mit anerkannten Sekundärdatenbanken und
            weisen Datenqualität und Unsicherheiten transparent aus. So bleibt Ihr PCF auch
            bei Rückfragen von Kunden oder Prüfern belastbar.
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Corporate Carbon Footprint",
            body: "Die Klimabilanz des gesamten Unternehmens über alle Scopes.",
            href: "/corporate-carbon-footprint",
          },
          {
            title: "Verifizierung",
            body: "Prüffähige Dokumentation nach ISO 14064-3 und ISO 14067.",
            href: "/verifizierung",
          },
          {
            title: "KI & Automatisierung",
            body: "Produktfamilien effizient berechnen und automatisch fortschreiben.",
            href: "/ki-automatisierung",
          },
        ]}
      />

      <ContactCTA
        location="product_carbon_footprint"
        context="Kundenanfrage mit Frist erhalten? Schreiben Sie uns, wir priorisieren PCF-Anfragen mit Deadline."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Product Carbon Footprint",
            description:
              "Berechnung des Product Carbon Footprint nach ISO 14067 und GHG Protocol Product Standard, cradle-to-gate oder cradle-to-grave.",
            path: PATH,
            serviceType: "Product Carbon Footprint",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "CO₂-Bilanzierung", path: "/co2-bilanzierung" },
            { name: "Product Carbon Footprint", path: PATH },
          ])
        )}
      />
    </div>
  );
}
