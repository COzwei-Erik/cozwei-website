import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../Header";
import PageHero from "../../components/PageHero";
import GreenClaimsCheck from "./GreenClaimsCheck";
import ContactCTA from "../../components/ContactCTA";
import FaqSection from "../../components/FaqSection";
import LogoStrip from "../../components/LogoStrip";
import RelatedSolutions from "../../components/RelatedSolutions";
import SolutionCard from "../../components/SolutionCard";
import { VERBRAUCHSGUETER_LOGOS } from "../logos";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../../components/schema";

const PATH = "/branchen/verbrauchsgueter";

export const metadata: Metadata = {
  title: "Dekarbonisierung Verbrauchsgüter & Handel | COzwei",
  description:
    "Klimadaten für Verbrauchsgüterhersteller: PCF je Produkt, Handels- und Bankenanfragen nach VSME, Green Claims EmpCo-konform ab 27.09.2026.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Dekarbonisierung Verbrauchsgüter & Handel | COzwei",
    description:
      "PCF je Produkt, VSME-Bericht für Handel und Banken, Datenbasis für zulässige Umweltaussagen.",
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
        alt: "Dekarbonisierung für Verbrauchsgüterhersteller durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekarbonisierung Verbrauchsgüter & Handel | COzwei",
    description: "PCF je Produkt, VSME-Bericht und Datenbasis für Green Claims.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const TREIBER = [
  {
    title: "Green Claims werden reguliert",
    body: "Ab dem 27. September 2026 sind pauschale Umweltaussagen wie umweltfreundlich, grün oder klimaneutral ohne anerkannten Nachweis unzulässig; Klimaneutralitätswerbung allein auf Kompensationsbasis ist verboten, und die Aussage muss klar benennen, worauf sie sich bezieht: Produkt, Rezeptur oder Verpackung. Verstöße gegen die neuen Per-se-Verbote sind ohne Einzelfallprüfung abmahnfähig.",
  },
  {
    title: "Der Handel fragt strukturiert ab",
    body: "Handelsketten und Plattformen verlangen zunehmend standardisierte Nachhaltigkeitsdaten von ihren Lieferanten, von PCF-Werten bis zu ESG-Scorecards. Ohne belastbare Daten drohen schlechtere Listungsbedingungen.",
  },
  {
    title: "Banken und Versicherer ziehen nach",
    body: "Auch Finanzierungspartner fragen ESG-Daten ab. Der freiwillige EU-Standard VSME/VS bündelt diese Anfragen: Die EU-Kommission empfiehlt ausdrücklich, Informationsanfragen an KMU daran auszurichten, und der neue Value-Chain-Cap begrenzt, was Großunternehmen von kleineren Partnern verlangen dürfen.",
    href: "/vsme",
    linkLabel: "Mehr zum VSME-Bericht",
  },
  {
    title: "Verpackung und Produktdesign im Fokus",
    body: "Verpackungsanteile, Rezyklateinsatz und Kreislauffähigkeit werden zu Standardfragen in Ausschreibungen. Der PCF macht die Effekte von Design-Entscheidungen quantifizierbar.",
  },
];

const LEISTUNGEN = [
  {
    title: "PCF je Produkt & Verpackung",
    body: "Cradle-to-grave-Bilanzen inklusive Verpackungsvarianten, als Entscheidungsgrundlage für Design und als Antwort auf Handelsanfragen.",
    href: "/product-carbon-footprint",
  },
  {
    title: "CCF & Klimaziele",
    body: "Unternehmensbilanz und SBTi-Zielpfad als Rückgrat der Nachhaltigkeitskommunikation.",
    href: "/corporate-carbon-footprint",
  },
  {
    title: "VSME/VS-Bericht",
    body: "Ein Bericht für Handel, Bank und Versicherer statt zehn Fragebögen.",
    href: "/vsme",
  },
  {
    title: "Datenbasis für Green Claims",
    body: "Belastbare Zahlen und Methodennachweise für spezifische, zulässige Umweltaussagen.",
    href: "/co2-bilanzierung",
  },
  {
    title: "Automatisierte Datenerhebung",
    body: "Wiederkehrende Handels- und Lieferantenabfragen automatisieren statt jährlich neu sammeln.",
    href: "/ki-automatisierung",
  },
];

const BELEGE = [
  "Wir rechnen PCFs mit Verpackungs- und Rezepturvarianten, sodass Produktentwicklung und Vertrieb mit denselben Zahlen arbeiten.",
  "Wir kennen die Fragenkataloge von Handel, Banken und Ratings und strukturieren Ihre Daten einmal so, dass alle Anfragen daraus beantwortbar sind.",
  "Wir trennen sauber zwischen Datenlage und Werbeaussage und sagen klar, welche Aussage die Daten tragen und welche nicht.",
];

const FAQ: FaqItem[] = [
  {
    question: "Bis wann müssen unsere Werbeaussagen umgestellt sein?",
    answer:
      "Die neuen UWG-Regeln gelten ab dem 27. September 2026, auch für bereits produzierte Verpackungen und Werbemittel. Eine Claim-Inventur mit Nachweis-Zuordnung sollte deshalb jetzt starten.",
  },
  {
    question: "Der Handel verlangt einen PCF in einem bestimmten Format, machen Sie das?",
    answer:
      "Ja. Wir rechnen standardkonform (ISO 14067, GHG Protocol) und liefern im geforderten Format des Abnehmers, inklusive Methodendokumentation für Rückfragen.",
  },
  {
    question: "Wir sind KMU, müssen wir überhaupt berichten?",
    answer:
      "Eine gesetzliche Pflicht besteht unterhalb der CSRD-Schwellen (mehr als 1.000 Mitarbeitende, über 450 Mio. € Umsatz) nicht. Faktisch verlangen aber Handel und Banken Daten, der VSME/VS ist dafür der effizienteste Rahmen.",
  },
  {
    question: "Was bringt der PCF der Produktentwicklung?",
    answer:
      "Er quantifiziert die Effekte von Rezeptur-, Material- und Verpackungsentscheidungen. So wird ein nachhaltigeres Produkt von der Behauptung zur belegbaren Eigenschaft.",
  },
  {
    question: "Können Sie unsere jährliche Datensammlung automatisieren?",
    answer:
      "Ja: Energie-, Einkaufs- und Lieferantendaten lassen sich systemgestützt erheben und fortschreiben. Aus der Jahresaktion wird ein laufender Prozess.",
  },
];

export default function BranchenVerbrauchsgueter() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-verbrauchsgueter.jpg"
        alt="Mitarbeiterin mit Tablet im Einzelhandel, Symbolbild für Verbrauchsgüter"
        title="Verbrauchsgüter: Klimadaten, die Handel und Verbraucher verlangen"
        subtitle="Hersteller von Verbrauchsgütern stehen von zwei Seiten unter Druck: Der Handel fragt Klimadaten und Nachhaltigkeitskennzahlen strukturiert ab, und gegenüber Verbrauchern gelten ab dem 27. September 2026 strenge neue Regeln für Umweltaussagen. COzwei liefert beides: belastbare Produkt- und Unternehmensbilanzen für die Handelsanfrage und die Datenbasis für Werbeaussagen, die der neuen Rechtslage standhalten."
        scrollTargetId="treiber"
      />

      <section id="treiber" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Was die Branche jetzt bewegt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TREIBER.map((t) => (
              <SolutionCard key={t.title} title={t.title} body={t.body}>
                {t.href && (
                  <Link
                    href={t.href}
                    className="text-sm font-bold hover:underline"
                    style={{ color: "#3D405B" }}
                  >
                    {t.linkLabel}
                  </Link>
                )}
              </SolutionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Green-Claims-Selbstcheck
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#23243a" }}>
            Vier Fragen zu einer konkreten Umweltaussage. Wenn Sie eine davon mit Nein
            beantworten, sollten Sie die Aussage vor dem 27. September 2026 überarbeiten.
          </p>
          <GreenClaimsCheck />
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Leistungen für Verbrauchsgüter
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

      <LogoStrip logos={VERBRAUCHSGUETER_LOGOS} />

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Product Carbon Footprint",
            body: "Produkt- und Verpackungsvarianten cradle-to-grave bilanziert.",
            href: "/product-carbon-footprint",
          },
          {
            title: "VSME & Voluntary Standard",
            body: "Ein Bericht für Handel, Bank und Versicherer.",
            href: "/vsme",
          },
          {
            title: "KI & Automatisierung",
            body: "Wiederkehrende Abfragen automatisiert beantworten.",
            href: "/ki-automatisierung",
          },
        ]}
      />

      <ContactCTA
        location="branche_verbrauchsgueter"
        context="Senden Sie uns eine konkrete Handelsanfrage oder einen Ihrer Claims, wir sagen Ihnen, welche Daten dafür nötig sind."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Dekarbonisierung für Verbrauchsgüter und Handel",
            description:
              "Product und Corporate Carbon Footprints, VSME-Berichte für Handels- und Bankenanfragen sowie Datenbasis für zulässige Umweltaussagen nach den ab 27. September 2026 geltenden UWG-Regeln.",
            path: PATH,
            serviceType: "Dekarbonisierungsberatung Verbrauchsgüter",
            audience: "Verbrauchsgüterhersteller und Handel",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: "/branchen/verbrauchsgueter" },
            { name: "Verbrauchsgüter", path: PATH },
          ])
        )}
      />
    </div>
  );
}
