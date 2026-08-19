import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import StandardPfad from "./StandardPfad";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
import FaqSection from "../components/FaqSection";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/berichterstattung";

export const metadata: Metadata = {
  title: "Nachhaltigkeitsberichterstattung: CSRD, CDP, VSME | COzwei",
  description:
    "Nachhaltigkeitsberichterstattung: CSRD/ESRS E1, CDP, VSME/VS, GRI und CBAM, pflichtgemäß oder freiwillig, immer datenbasiert. Jetzt einordnen lassen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Nachhaltigkeitsberichterstattung: CSRD, CDP, VSME | COzwei",
    description:
      "CSRD/ESRS E1, CDP, VSME/VS, GRI und CBAM: der passende Standard, datenbasiert umgesetzt.",
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
        alt: "Nachhaltigkeitsberichterstattung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nachhaltigkeitsberichterstattung: CSRD, CDP, VSME | COzwei",
    description: "CSRD, CDP, VSME und CBAM, pflichtgemäß oder freiwillig.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const LEISTUNGEN = [
  {
    title: "CSRD / ESRS E1",
    body: "Klimabezogene Datenpunkte des europäischen Berichtsstandards, von der THG-Bilanz bis zu Zielen und Übergangsplan.",
    href: "/esrs-e1",
  },
  {
    title: "CDP Klima-Reporting",
    body: "Begleitung durch den Climate Change Questionnaire, von der Datenbasis bis zur Einreichung.",
    href: "/cdp-klimaberichterstattung",
  },
  {
    title: "VSME/VS & GRI",
    body: "Freiwilliger Bericht für KMU, der ESG-Anfragen von Banken und Kunden gebündelt beantwortet.",
    href: "/vsme",
  },
  {
    title: "CBAM",
    body: "Berichtspflichten und Zertifikate für Importeure emissionsintensiver Waren.",
    href: "#cbam",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Wer ist ab wann CSRD-pflichtig?",
    answer:
      "Nach Omnibus-I: Unternehmen mit mehr als 1.000 Mitarbeitenden und über 450 Mio. € Nettoumsatz; die Umsetzung in deutsches Recht läuft, Stichtage hängen von der finalen nationalen Umsetzung ab.",
  },
  {
    question: "Was ist, wenn wir aus der Pflicht fallen?",
    answer:
      "Dann ist der freiwillige VSME/VS-Bericht meist der effizienteste Weg, Anfragen von Banken und Kunden zu bedienen.",
  },
  {
    question: "Erstellt COzwei den kompletten Bericht?",
    answer:
      "Wir fokussieren die klimabezogenen Inhalte, also E1, THG-Bilanz, Ziele und Maßnahmen, und arbeiten für weitere ESRS-Themen mit Ihren Teams oder Partnern zusammen.",
  },
  {
    question: "Was hat CBAM mit Berichterstattung zu tun?",
    answer:
      "CBAM verpflichtet Importeure emissionsintensiver Waren zu eigenen Emissionsberichten und Zertifikaten, ein eigenständiges Pflichtthema neben CSRD und Co.",
  },
];

export default function Berichterstattung() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/loesung-berichten.jpg"
        alt="Laptop und Tablet mit Diagrammen, Symbolbild für Nachhaltigkeitsberichterstattung"
        title="Nachhaltigkeit berichten: pflichtgemäß oder freiwillig"
        subtitle="Ob CSRD-Pflichtbericht, CDP-Fragebogen oder freiwilliger VSME-Bericht: Gute Berichterstattung beginnt mit belastbaren Klimadaten. COzwei bereitet Ihre Daten berichtsfertig auf und begleitet Sie durch die passenden Standards, ohne Overhead, orientiert an dem, was Ihre Stakeholder tatsächlich anfragen."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Welcher Standard für wen?
          </h2>
          <StandardPfad />
          <p className="mt-6 leading-relaxed" style={{ color: "#23243a" }}>
            Seit dem Omnibus-I-Paket gilt die CSRD-Berichtspflicht nur noch oberhalb dieser
            Schwellen; der Rechtsakt wurde im Februar 2026 im EU-Amtsblatt veröffentlicht und
            ist bis März 2027 in nationales Recht umzusetzen.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEISTUNGEN.map((l) => (
              <Link
                key={l.title}
                href={l.href}
                className="block rounded-2xl bg-white border p-6 transition hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30"
                style={{ borderColor: "#E2DDD0" }}
              >
                <h3
                  className="text-base font-extrabold uppercase tracking-wide mb-2"
                  style={{ color: "#81B29A" }}
                >
                  {l.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#23243a" }}>
                  {l.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            ESG-Anfragen und Ratings
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Die Beantwortung von Lieferantenanfragen, etwa SAQ 5.0, oder von ESG-Ratings wie
            EcoVadis erfordert Expertenwissen und bindet Zeit. Wir entlasten Unternehmen bei
            der Rückmeldung auf Nachhaltigkeitsanfragen ihrer Kunden und sorgen dafür, dass
            die Antworten zu den Zahlen im Bericht passen.
          </p>
          <p className="text-lg leading-relaxed mt-4" style={{ color: "#23243a" }}>
            Wie SAQ 5.0, CDP und Ratings in der Automobilindustrie zusammenspielen: <Link href="/branchen/automotive" className="font-bold underline" style={{ color: "#3D405B" }}>Branchenseite Automotive</Link>
          </p>
        </div>
      </section>

      {/* Anker fuer die CBAM-Verweise aus /vsme und der Leistungs-Karte oben.
          TODO: durch eine eigene Seite /cbam ersetzen, sobald sie beauftragt ist. */}
      <section id="cbam" className="w-full py-16 scroll-mt-24 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            CBAM: CO₂-Grenzausgleich beim Import
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            CBAM verpflichtet Importeure emissionsintensiver Waren zu eigenen
            Emissionsberichten und Zertifikaten. Das ist ein eigenständiges Pflichtthema
            neben CSRD und CDP, mit eigener Datenlogik entlang der importierten Warenmengen.
            Wenn Sie betroffen sind, klären wir im Erstgespräch Umfang und Fristen für Ihre
            Warengruppen.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Software und Automatisierung
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Die Steuerung und Sammlung von Daten kann durch geeignete Software erleichtert
            werden. Wir unterstützen Sie bei der Auswahl und Implementierung geeigneter
            Lösungen, zum Beispiel von Envoria oder Code Gaia. Wiederkehrende Datenerhebung
            automatisieren wir auf Wunsch direkt.{" "}
            <Link href="/ki-automatisierung" className="font-bold underline" style={{ color: "#3D405B" }}>
              Mehr zu KI und Automatisierung
            </Link>
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "CO₂-Bilanzierung",
            body: "Die Datengrundlage jedes Berichts, nach GHG Protocol und ISO-Normen.",
            href: "/co2-bilanzierung",
          },
          {
            title: "VSME & Voluntary Standard",
            body: "Freiwillig berichten und ESG-Anfragen gebündelt beantworten.",
            href: "/vsme",
          },
          {
            title: "CSRD / ESRS E1",
            body: "Der Klimastandard der europäischen Berichtspflicht im Detail.",
            href: "/esrs-e1",
          },
        ]}
      />

      <ContactCTA
        location="berichterstattung"
        context="Sie wissen nicht, welcher Standard für Sie gilt? Wir ordnen es im Erstgespräch ein."
      />

      <SiteFooter />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Nachhaltigkeitsberichterstattung",
            description:
              "Aufbereitung klimabezogener Daten und Begleitung der Berichterstattung nach CSRD/ESRS E1, CDP, VSME/Voluntary Standard, GRI und CBAM.",
            path: PATH,
            serviceType: "Nachhaltigkeitsberichterstattung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Berichterstattung", path: PATH },
          ])
        )}
      />
    </div>
  );
}
