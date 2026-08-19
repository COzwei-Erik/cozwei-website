import type { Metadata } from "next";
import Header from "../../Header";
import PageHero from "../../components/PageHero";
import ContactCTA from "../../components/ContactCTA";
import FaqSection from "../../components/FaqSection";
import LogoStrip from "../../components/LogoStrip";
import RelatedSolutions from "../../components/RelatedSolutions";
import SolutionCard from "../../components/SolutionCard";
import { OEFFENTLICH_LOGOS } from "../logos";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../../components/schema";

const PATH = "/branchen/oeffentliche-einrichtungen";

export const metadata: Metadata = {
  title: "Klimaschutz für öffentliche Einrichtungen | COzwei",
  description:
    "Klimaschutz für Hochschulen, Kirchen, Kliniken und Kommunen: NKI-geförderte Konzepte mit 70–90 % Zuschuss, von Antrag bis Umsetzung. Jetzt beraten lassen.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Klimaschutz für öffentliche Einrichtungen | COzwei",
    description:
      "NKI-geförderte Klimaschutzkonzepte mit 70 bis 90 Prozent Zuschuss, von der Antragstellung bis zur Umsetzung.",
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
        alt: "Klimaschutz für öffentliche Einrichtungen durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimaschutz für öffentliche Einrichtungen | COzwei",
    description: "NKI-geförderte Klimaschutzkonzepte mit 70 bis 90 Prozent Zuschuss.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const TREIBER = [
  {
    title: "Förderfenster nutzen",
    body: "Die Kommunalrichtlinie fördert Erstvorhaben mit 70 Prozent, Anschlussvorhaben mit 40 Prozent. Seit dem 1. Juni 2026 erfolgt die Antragstellung ausschließlich digital über easy-Online.",
  },
  {
    title: "Altkonzepte blockieren nicht mehr",
    body: "Seit dem 1. Juli 2026 gelten Klimaschutzkonzepte, die vor dem 31. August 2021 fertiggestellt und seitdem nicht grundlegend aktualisiert wurden, nicht mehr als förderschädlich. Einrichtungen mit veralteten Konzepten können erneut ein gefördertes Erstvorhaben beantragen.",
  },
  {
    title: "Klimaziele werden verbindlicher",
    body: "Landesklimaschutzgesetze, kirchliche Klimaschutzbeschlüsse und kommunale Zielbeschlüsse setzen Zieljahre. Ohne Konzept mit Maßnahmenkatalog bleiben sie Absichtserklärungen.",
  },
  {
    title: "Energiekosten zwingen zum Handeln",
    body: "Heterogene, oft sanierungsbedürftige Gebäudebestände treffen auf knappe Haushalte. Ein priorisierter Maßnahmenplan macht Investitionen planbar und förderfähig.",
  },
];

// Signature-Element: Förderpfad als Timeline.
const FOERDERPFAD = [
  {
    label: "Antrag Erstvorhaben",
    body: "Antragstellung digital über easy-Online, wir bereiten die Unterlagen entscheidungsreif vor.",
  },
  {
    label: "Erstvorhaben",
    body: "Klimaschutzmanagement und integriertes Konzept, 70 Prozent Zuschuss, bis zu 90 Prozent in finanzschwachen Kommunen und Braunkohlegebieten.",
  },
  {
    label: "Anschlussvorhaben",
    body: "Klimaschutzmanagement zur Umsetzung des beschlossenen Konzepts, 40 Prozent Zuschuss.",
  },
  {
    label: "Investive Maßnahmen",
    body: "Ausgewählte investive Maßnahmen aus dem beschlossenen Konzept sind zusätzlich förderfähig.",
  },
];

const LEISTUNGEN = [
  {
    title: "Klimaschutzkonzepte für Hochschulen",
    body: "Labore, Campus-Mobilität, heterogene Gebäude: Konzepte, die Hochschulgremien überzeugen.",
    href: "/klimaschutzkonzepte-hochschulen",
  },
  {
    title: "Klimaschutzkonzepte für Kirchen",
    body: "Vom Denkmal bis zur Kita: Maßnahmenpläne für kirchliche Gebäudeportfolios.",
    href: "/klimaschutzkonzepte-kirchen",
  },
  {
    title: "Klimaschutzkonzepte für Krankenhäuser & Soziales",
    body: "Klimaschutz im 24/7-Betrieb, ohne Kompromisse bei der Versorgung.",
    href: "/klimaschutzkonzepte-krankenhaeuser",
  },
  {
    title: "THG-Bilanz & Umsetzung",
    body: "Treibhausgasbilanz nach anerkannter Methodik und Maßnahmenumsetzung über unser Partnernetzwerk.",
    href: "/co2-bilanzierung",
  },
];

const BELEGE = [
  "Über vier Jahre Erfahrung in NKI-geförderten Klimaschutzprojekten öffentlicher Einrichtungen, wir kennen Richtlinie, Projektträger und Prüfpraxis.",
  "Unsere Konzepte sind auf Beschlussfähigkeit angelegt: Gremien erhalten priorisierte Maßnahmen mit Kosten, Einsparung und Zuständigkeit statt Absichtsprosa.",
  "Wir denken die Anschlussförderung von Anfang an mit, damit auf das Konzept nahtlos die Umsetzung folgt.",
];

const FAQ: FaqItem[] = [
  {
    question: "Wer ist antragsberechtigt?",
    answer:
      "Kommunen und ihre Zusammenschlüsse sowie öffentliche, gemeinnützige, mildtätige und religionsgemeinschaftliche Träger von Einrichtungen der Bildung, des Gesundheitswesens, der Pflege und der sozialen Hilfe, darunter Hochschulen, Kirchen mit Körperschaftsstatus und Klinikträger.",
  },
  {
    question: "Wie hoch ist die Förderung genau?",
    answer:
      "Erstvorhaben Klimaschutzkonzept und Klimaschutzmanagement: 70 Prozent der förderfähigen Ausgaben, bis zu 90 Prozent für finanzschwache Kommunen und Antragsteller aus Braunkohlegebieten. Anschlussvorhaben: 40 Prozent.",
  },
  {
    question: "Wie lange dauert der Weg vom Antrag zum Konzept?",
    answer:
      "Rechnen Sie mit Antrags- und Bewilligungszeit plus rund zehn bis zwölf Monaten Konzepterstellung. Wir übernehmen die Antragsvorbereitung, damit keine Zeit im Verfahren verloren geht.",
  },
  {
    question: "Unser Konzept ist von 2019, sind wir raus?",
    answer:
      "Nein: Seit Juli 2026 stehen Konzepte von vor dem 31. August 2021 ohne grundlegende Aktualisierung einem neuen geförderten Erstvorhaben nicht mehr entgegen.",
  },
  {
    question: "Was passiert nach dem Konzept?",
    answer:
      "Das Anschlussvorhaben fördert ein Klimaschutzmanagement zur Umsetzung mit 40 Prozent; zusätzlich sind ausgewählte investive Maßnahmen aus dem beschlossenen Konzept förderfähig.",
  },
];

export default function BranchenOeffentlicheEinrichtungen() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-oeffentlich.jpg"
        alt="Skyline einer Stadt, Symbolbild für öffentliche Einrichtungen"
        title="Öffentliche Einrichtungen: Klimaschutz mit 70 bis 90 Prozent Förderung"
        subtitle="Hochschulen, Kirchen, Krankenhäuser, soziale Träger und Kommunen können Klimaschutzkonzept und Klimaschutzmanagement über die Kommunalrichtlinie der Nationalen Klimaschutzinitiative (NKI) fördern lassen: 70 Prozent Zuschuss im Erstvorhaben, bis zu 90 Prozent in finanzschwachen Kommunen und Braunkohlegebieten. COzwei begleitet öffentliche Einrichtungen seit Jahren durch diesen Förderweg, von der Antragstellung über das Konzept bis zur Umsetzung."
        scrollTargetId="treiber"
      />

      <section id="treiber" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Was öffentliche Einrichtungen jetzt bewegt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TREIBER.map((t) => (
              <SolutionCard key={t.title} title={t.title} body={t.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Der Förderpfad
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {FOERDERPFAD.map((s, i) => (
              <li
                key={s.label}
                className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-6 transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex w-10 h-10 rounded-full items-center justify-center font-extrabold mb-3 text-white"
                  style={{ backgroundColor: "#81B29A" }}
                >
                  {i + 1}
                </span>
                <h3 className="font-extrabold mb-2" style={{ color: "#3D405B" }}>
                  {s.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Leistungen für öffentliche Einrichtungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <LogoStrip logos={OEFFENTLICH_LOGOS} />

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Klimaschutzkonzepte",
            body: "Übersicht über NKI-Förderung, Ablauf und Zielgruppen.",
            href: "/klimaschutzkonzepte",
          },
          {
            title: "Förderung",
            body: "Alle Programme im Überblick, auch für privatwirtschaftliche Träger.",
            href: "/foerderung",
          },
          {
            title: "CO₂-Bilanzierung",
            body: "Die Treibhausgasbilanz als Kern jedes Konzepts.",
            href: "/co2-bilanzierung",
          },
        ]}
      />

      <ContactCTA
        location="branche_oeffentliche_einrichtungen"
        context="Wir prüfen kostenlos, ob Ihre Einrichtung antragsberechtigt ist und welche Förderquote gilt."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Klimaschutz für öffentliche Einrichtungen",
            description:
              "NKI-geförderte Klimaschutzkonzepte und Klimaschutzmanagement für Hochschulen, Kirchen, Krankenhäuser, soziale Träger und Kommunen, von der Antragstellung bis zur Umsetzung.",
            path: PATH,
            serviceType: "Klimaschutzberatung öffentlicher Sektor",
            audience: "Hochschulen, Kirchen, Krankenhäuser, soziale Träger und Kommunen",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: "/branchen/oeffentliche-einrichtungen" },
            { name: "Öffentliche Einrichtungen", path: PATH },
          ])
        )}
      />
    </div>
  );
}
