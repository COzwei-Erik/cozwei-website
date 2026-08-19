import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../Header";
import PageHero from "../../components/PageHero";
import ContactCTA from "../../components/ContactCTA";
import SiteFooter from "../../components/SiteFooter";
import FaqSection from "../../components/FaqSection";
import InfoBox from "../../components/InfoBox";
import LogoStrip from "../../components/LogoStrip";
import RelatedSolutions from "../../components/RelatedSolutions";
import SolutionCard from "../../components/SolutionCard";
import { DRUCK_VERLAG_LOGOS } from "../logos";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../../components/schema";

const PATH = "/branchen/druck-verlag";

export const metadata: Metadata = {
  title: "Dekarbonisierung für Druck & Verlage | COzwei",
  description:
    "CO₂-Bilanz und PCF für Verlage und Druckereien: Papier, Druck, Logistik korrekt bilanziert; Klimaaussagen EmpCo-konform. Mit Verlagserfahrung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Dekarbonisierung für Druck & Verlage | COzwei",
    description:
      "Papier, Druck und Logistik korrekt bilanziert, Klimaaussagen EmpCo-konform ab 27. September 2026.",
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
        alt: "Dekarbonisierung für Druck und Verlage durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekarbonisierung für Druck & Verlage | COzwei",
    description: "CO₂-Bilanz und PCF für Verlage und Druckereien.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const TREIBER = [
  {
    title: "EmpCo macht Klimawerbung zum Rechtsrisiko",
    body: "Ab dem 27. September 2026 gelten die neuen UWG-Regeln aus der EmpCo-Richtlinie (EU 2024/825): Pauschale Aussagen wie „klimaneutral“ oder „umweltfreundlich“ sind ohne belastbaren Nachweis verboten, Klimaneutralität allein durch Kompensation darf nicht mehr beworben werden, und eigene Siegel brauchen ein anerkanntes Zertifizierungssystem. Bereits produzierte Bestandsware ist nicht ausgenommen. Für eine Branche, die jahrelang mit „klimaneutral gedruckt“ geworben hat, ist das eine Zäsur: Der BGH hatte die Richtung mit seinem Urteil zur Klimaneutral-Werbung schon 2024 vorgezeichnet.",
  },
  {
    title: "Papier dominiert die Bilanz",
    body: "Papier und Vorstufe sind bei Druckerzeugnissen regelmäßig der größte Emissionsposten. Entsprechend hängt die Aussagekraft der Bilanz an belastbaren Papierdaten und sauberer Allokation zwischen Auflagen und Titeln.",
  },
  {
    title: "Scope-3-Methodik bei Lizenz- und Druckmodellen",
    body: "Wer Inhalte lizenziert oder extern drucken lässt, muss nachgelagerte Druckemissionen der richtigen Scope-3-Kategorie zuordnen, eine Methodenfrage, die über Vergleichbarkeit und Prüffestigkeit der Bilanz entscheidet. Wir dokumentieren solche Zuordnungsentscheidungen GHG-Protocol-konform.",
  },
  {
    title: "Handels- und Bildungsmarkt fragen nach",
    body: "Buchhandel, Bildungsträger und öffentliche Beschaffung fragen zunehmend Klimadaten und Umweltkennzeichen ab, vom PCF je Titel bis zu anerkannten Siegeln wie dem Blauen Engel für Druckerzeugnisse.",
  },
];

// Signature-Element: Emissionsprofil eines Druckerzeugnisses, qualitativ.
// Bewusst ohne Prozentwerte, weil dafür keine belastbare Quelle vorliegt.
const LEBENSWEG = [
  { station: "Papierherstellung", gewicht: 100, note: "größter Posten" },
  { station: "Druck & Verarbeitung", gewicht: 62 },
  { station: "Logistik", gewicht: 40 },
  { station: "Handel", gewicht: 24 },
  { station: "Nutzung / Entsorgung", gewicht: 16 },
];

const LEISTUNGEN = [
  {
    title: "CCF für Verlagsgruppen",
    body: "Konzern- und Gesellschaftsstruktur sauber abgebildet, Scope 3 mit Fokus Papier, Druck, Logistik.",
    href: "/corporate-carbon-footprint",
  },
  {
    title: "PCF je Titel oder Produktlinie",
    body: "Parametrisierte Modelle: einmal aufgebaut, für das ganze Programm skalierbar.",
    href: "/product-carbon-footprint",
  },
  {
    title: "Rechtssichere Klimaaussagen",
    body: "EmpCo-Check Ihrer Claims und Siegel vor dem 27. September 2026; wir liefern die Datenbasis, Ihre Rechtsabteilung die Freigabe.",
    href: "/berichterstattung",
  },
  {
    title: "CDP & Kundenanfragen",
    body: "Klimadaten berichtsfertig für CDP, Handelsanfragen und Ausschreibungen.",
    href: "/cdp-klimaberichterstattung",
  },
  {
    title: "Reduktion & Förderung",
    body: "Vom Dekarbonisierungsplan bis zur geförderten Umsetzung über EEW Modul 4 und 5.",
    href: "/dekarbonisierung",
  },
];

const BELEGE = [
  "Wir arbeiten seit Jahren für Verlage und kennen die Bilanzierungsfragen der Branche, von der Papierallokation bis zur Zuordnung nachgelagerter Druckemissionen.",
  "Wir bilanzieren so, dass die Werte sowohl für die Unternehmensbilanz als auch für titelbezogene Kundenanfragen tragen.",
  "Wir sagen auch, was nicht geht: Klimaaussagen ohne belastbaren Nachweis raten wir ab, bevor es die Wettbewerbszentrale tut.",
];

const FAQ: FaqItem[] = [
  {
    question: "Dürfen wir ab September 2026 noch „klimaneutral gedruckt“ schreiben?",
    answer:
      "Nur mit belastbarem Nachweis realer Emissionsminderung. Werbung mit Klimaneutralität allein auf Basis von Kompensationszertifikaten ist nach den neuen UWG-Regeln unzulässig. Wir liefern die Datengrundlage für zulässige, spezifische Aussagen; die rechtliche Freigabe gehört in Ihre Rechtsprüfung.",
  },
  {
    question: "Was kostet ein PCF für einen Buchtitel?",
    answer:
      "Der erste Titel trägt den Modellaufbau; jeder weitere Titel derselben Produktfamilie ist deutlich günstiger, weil wir parametrisiert rechnen (Format, Umfang, Papier, Auflage).",
  },
  {
    question: "Unsere Druckerei liefert schon CO₂-Werte, reicht das?",
    answer:
      "Als Baustein ja, als Bilanz nein: Druckereiwerte decken meist nur den Druckprozess ab. Papierherstellung, Logistik und weitere Kategorien müssen ergänzt und methodisch konsistent zusammengeführt werden.",
  },
  {
    question: "Sind wir überhaupt noch CSRD-pflichtig?",
    answer:
      "Nach Omnibus-I nur bei mehr als 1.000 Mitarbeitenden und über 450 Mio. € Umsatz. Für alle anderen ist der freiwillige VSME/VS-Bericht meist der effizienteste Rahmen für Handels- und Bankenanfragen.",
  },
  {
    question: "Welche Siegel sind für Druckerzeugnisse anerkannt?",
    answer:
      "Etablierte Drittzertifizierungen wie der Blaue Engel erfüllen die neuen Anforderungen an Siegel; hauseigene Öko-Logos ohne unabhängige Zertifizierung sind künftig unzulässig. Wir beraten zur passenden Nachweisstrategie.",
  },
];

export default function BranchenDruckVerlag() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-druck-verlag.jpg"
        alt="Stapel gedruckter Zeitungen, Symbolbild für die Druck- und Verlagsbranche"
        title="Druck & Verlag: Klimadaten für Papier, Druck und Programm"
        subtitle="Bei Verlagen und Druckbetrieben liegt der Großteil der Emissionen in der Lieferkette: Papier, Druckprozesse und Logistik dominieren die Bilanz, während die eigene Verwaltung nur einen kleinen Teil ausmacht. COzwei bilanziert Verlagsprogramme und Druckerzeugnisse methodisch sauber, vom Corporate Carbon Footprint über den PCF je Titel bis zur Frage, welche Klimaaussagen ab dem 27. September 2026 überhaupt noch zulässig sind."
        scrollTargetId="treiber"
      />

      <section id="treiber" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Was die Branche jetzt bewegt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TREIBER.map((t) => (
              <SolutionCard key={t.title} title={t.title} body={t.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Emissionsprofil eines Druckerzeugnisses
          </h2>
          <div className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-6">
            <ol className="space-y-4">
              {LEBENSWEG.map((l, i) => (
                <li key={l.station}>
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="text-sm font-bold" style={{ color: "#3D405B" }}>
                      {i + 1}. {l.station}
                    </p>
                    {l.note && (
                      <span className="text-xs font-bold" style={{ color: "#81B29A" }}>
                        {l.note}
                      </span>
                    )}
                  </div>
                  <div className="h-4 rounded-full" style={{ backgroundColor: "rgba(129,178,154,0.12)" }}>
                    <div
                      className="h-4 rounded-full"
                      style={{ width: `${l.gewicht}%`, backgroundColor: "#81B29A" }}
                    />
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm mt-5" style={{ color: "#6B6B6B" }}>
              Typische Größenordnung, titelabhängig. Die konkreten Anteile ermittelt die
              Bilanz für Ihr Programm.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Leistungen für Druck &amp; Verlag
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEISTUNGEN.map((l) => (
              <SolutionCard
                key={l.title}
                title={l.title}
                body={l.body}
                href={l.href}
                linkLabel="Mehr erfahren"
              />
            ))}
          </div>
          <div className="mt-8">
            <InfoBox label="Frist">
              Der 27. September 2026 gilt auch für bereits produzierte Bestandsware. Eine
              Bestandsaufnahme Ihrer Claims sollte deshalb vor diesem Datum abgeschlossen
              sein. Mehr zur{" "}
              <Link href="/co2-bilanzierung" className="font-bold underline" style={{ color: "#3D405B" }}>
                Datengrundlage für Klimaaussagen
              </Link>
              .
            </InfoBox>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Warum COzwei
          </h2>
          <ul className="space-y-5">
            {BELEGE.map((b) => (
              <li key={b} className="flex gap-4">
                <span aria-hidden="true" className="font-extrabold shrink-0" style={{ color: "#81B29A" }}>
                  &rarr;
                </span>
                <p className="leading-relaxed" style={{ color: "#23243a" }}>
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LogoStrip logos={DRUCK_VERLAG_LOGOS} />

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Corporate Carbon Footprint",
            body: "Verlagsstruktur und papierdominierte Lieferkette sauber abgebildet.",
            href: "/corporate-carbon-footprint",
          },
          {
            title: "Product Carbon Footprint",
            body: "PCF je Titel, parametrisiert für das ganze Programm.",
            href: "/product-carbon-footprint",
          },
          {
            title: "VSME & Voluntary Standard",
            body: "Freiwillig berichten für Handels- und Bankenanfragen.",
            href: "/vsme",
          },
        ]}
      />

      <ContactCTA
        location="branche_druck_verlag"
        context="Prüfen Sie Ihre Klimaaussagen vor dem 27. September 2026, wir starten mit einer Bestandsaufnahme Ihrer Claims und Daten."
      />

      <SiteFooter />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Dekarbonisierung für Druck und Verlage",
            description:
              "Corporate und Product Carbon Footprints für Verlagsprogramme und Druckerzeugnisse, Datenbasis für zulässige Klimaaussagen nach den ab 27. September 2026 geltenden UWG-Regeln.",
            path: PATH,
            serviceType: "Dekarbonisierungsberatung Druck und Verlag",
            audience: "Verlage, Druckereien und Medienunternehmen",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: "/branchen/druck-verlag" },
            { name: "Druck & Verlag", path: PATH },
          ])
        )}
      />
    </div>
  );
}
