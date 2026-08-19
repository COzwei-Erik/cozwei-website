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

const PATH = "/klimaschutzkonzepte-hochschulen";

export const metadata: Metadata = {
  title: "Klimaschutzkonzepte für Hochschulen (NKI) | COzwei",
  description:
    "NKI-gefördertes Klimaschutzkonzept für Hochschulen und Universitäten: 70–90 % Zuschuss, von Antrag bis Maßnahmenplan. Mit Hochschul-Erfahrung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Klimaschutzkonzepte für Hochschulen (NKI) | COzwei",
    description:
      "70 bis 90 Prozent Zuschuss über die Kommunalrichtlinie, von der Antragstellung bis zum Maßnahmenplan.",
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
        alt: "Klimaschutzkonzepte für Hochschulen durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimaschutzkonzepte für Hochschulen (NKI) | COzwei",
    description: "NKI-gefördertes Klimaschutzkonzept für Hochschulen und Universitäten.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Handlungsfelder im Hochschulbetrieb
const HANDLUNGSFELDER = [
  { title: "Gebäude & Energie", body: "Heterogene Bestände, Sanierungsstand, Wärmeversorgung." },
  { title: "Labore", body: "Hoher spezifischer Energiebedarf, Lüftung, Geräteparks." },
  { title: "Mobilität", body: "Pendelverkehr von Studierenden und Beschäftigten, Dienstreisen." },
  { title: "Beschaffung", body: "Vergabekriterien, IT-Ausstattung, Verbrauchsmaterial." },
  { title: "Mensa & Campus", body: "Speisenangebot, Küchentechnik, Außenanlagen." },
  { title: "IT", body: "Rechenzentren, Serverräume, Endgeräte." },
];

const FAQ: FaqItem[] = [
  {
    question: "Sind Hochschulen wirklich antragsberechtigt?",
    answer:
      "Ja. Die Kommunalrichtlinie nennt ausdrücklich öffentliche und gemeinnützige Träger von Einrichtungen der hochschulischen Bildung als Antragsberechtigte.",
  },
  {
    question: "Wie hoch ist der Zuschuss?",
    answer:
      "70 Prozent der förderfähigen Ausgaben im Erstvorhaben; für Antragsteller in finanzschwachen Kommunen und Braunkohlegebieten bis zu 90 Prozent. Anschlussvorhaben werden mit 40 Prozent gefördert.",
  },
  {
    question: "Wie lange dauert das Gesamtvorhaben?",
    answer:
      "Das Erstvorhaben ist auf die Konzepterstellung mit Klimaschutzmanagement angelegt; die Konzepterstellung selbst dauert erfahrungsgemäß zehn bis zwölf Monate zuzüglich Antrags- und Bewilligungszeit.",
  },
  {
    question: "Was ist mit unserem alten Klimaschutzkonzept?",
    answer:
      "Konzepte von vor dem 31. August 2021 ohne grundlegende Aktualisierung stehen einem neuen Erstvorhaben seit Juli 2026 nicht mehr entgegen, ein guter Zeitpunkt für die Aktualisierung auf die aktuellen Klimaziele.",
  },
  {
    question: "Übernimmt COzwei auch die THG-Bilanz der Hochschule?",
    answer:
      "Ja, die Treibhausgasbilanz ist Kernbestandteil des Konzepts und wird von uns nach anerkannter Methodik erstellt.",
  },
];

export default function KlimaschutzkonzepteHochschulen() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/loesung-foerderung.jpg"
        alt="Studierende mit Tablet in einem hellen Hochschulgebäude"
        title="Klimaschutzkonzepte für Hochschulen und Universitäten"
        subtitle="Hochschulen sind über die Kommunalrichtlinie der Nationalen Klimaschutzinitiative (NKI) antragsberechtigt: Der Bund bezuschusst Erstvorhaben aus Klimaschutzkonzept und Klimaschutzmanagement mit 70 Prozent der förderfähigen Ausgaben, in finanzschwachen Kommunen und Braunkohlegebieten mit bis zu 90 Prozent. COzwei begleitet Hochschulen von der Antragstellung bis zum beschlussfähigen Maßnahmenplan, mit mehrjähriger Erfahrung aus NKI-Projekten an deutschen Hochschulen."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Was ein Hochschul-Klimaschutzkonzept leisten muss
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Ein integriertes Klimaschutzkonzept nach Kommunalrichtlinie umfasst
            Treibhausgasbilanz, Potenzialanalyse, Szenarien, Maßnahmenkatalog mit
            Priorisierung, Verstetigungsstrategie und Controlling-Konzept, zugeschnitten auf
            die Besonderheiten des Hochschulbetriebs: heterogene Gebäudebestände, Labore mit
            hohem Energiebedarf, Pendelverkehr von Studierenden und Beschäftigten sowie
            Beschaffung und Mensen. Wir kennen diese Handlungsfelder aus der Praxis und
            liefern Konzepte, die Gremien überzeugen und förderkonform sind.
          </p>
        </div>
      </section>

      <ProcessSteps
        heading="Der Weg zum geförderten Konzept"
        steps={[
          {
            title: "Förderantrag",
            body: "Wir bereiten den Antrag über easy-Online vor; seit 1. Juni 2026 erfolgt die Antragstellung ausschließlich digital.",
          },
          {
            title: "Klimaschutzmanagement und Konzept",
            body: "Bilanz, Potenziale, Szenarien und Maßnahmenkatalog, erarbeitet mit Verwaltung, Fakultäten und Studierendenvertretung.",
          },
          {
            title: "Beschluss und Anschluss",
            body: "Beschlussvorlage für die Hochschulleitung und Vorbereitung des Anschlussvorhabens zur Umsetzung.",
          },
        ]}
      />

      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Handlungsfelder im Hochschulbetrieb
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HANDLUNGSFELDER.map((f) => (
              <div key={f.title} className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-5">
                <h3 className="text-base font-extrabold uppercase tracking-wide mb-2" style={{ color: "#81B29A" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <InfoBox label="Förderhinweis">
            Auch Hochschulen mit einem älteren Konzept können wieder antragsberechtigt sein:
            Seit dem 1. Juli 2026 gelten Klimaschutzkonzepte, die vor dem 31. August 2021
            fertiggestellt und seitdem nicht grundlegend aktualisiert wurden, nicht mehr als
            förderschädlich für ein Erstvorhaben.
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
            title: "Förderung",
            body: "Weitere Programme für Investitionen und Beratung.",
            href: "/foerderung",
          },
          {
            title: "CO₂-Bilanzierung",
            body: "Die Treibhausgasbilanz als Kern des Konzepts.",
            href: "/co2-bilanzierung",
          },
        ]}
      />

      <ContactCTA
        location="klimaschutzkonzepte_hochschulen"
        context="Sprechen Sie mit uns über Ihren Antrag, wir prüfen Antragsberechtigung und Förderquote Ihrer Hochschule kostenlos."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Klimaschutzkonzepte für Hochschulen",
            description:
              "NKI-gefördertes integriertes Klimaschutzkonzept für Hochschulen und Universitäten, von der Antragstellung über Treibhausgasbilanz und Potenzialanalyse bis zum beschlussfähigen Maßnahmenplan.",
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
            { name: "Hochschulen", path: PATH },
          ])
        )}
      />
    </div>
  );
}
