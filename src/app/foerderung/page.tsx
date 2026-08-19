import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import FaqSection from "../components/FaqSection";
import InfoBox from "../components/InfoBox";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/foerderung";

export const metadata: Metadata = {
  title: "Förderung für Klimaschutz & Dekarbonisierung | COzwei",
  description:
    "Förderprogramme für Dekarbonisierung: BAFA/EEW Modul 4 & 5, GRW, NKI. Wir finden das passende Programm und begleiten die Antragstellung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Förderung für Klimaschutz & Dekarbonisierung | COzwei",
    description:
      "BAFA/EEW Modul 4 & 5, GRW und NKI: passendes Programm finden und Antrag stellen.",
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
        alt: "Förderberatung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Förderung für Klimaschutz & Dekarbonisierung | COzwei",
    description: "BAFA/EEW Modul 4 & 5, GRW und NKI: Analyse und Antragsbegleitung.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Vergleichstabelle. Alle Zahlen sind recherchiert
// (Stand 08/2026) und duerfen nicht ohne Quelle veraendert werden.
const PROGRAMME = [
  {
    programm: "EEW Modul 5: Transformationsplan (BAFA)",
    was: "Erstellung eines Dekarbonisierungsfahrplans inkl. CO₂-Bilanz",
    hoehe: "40 bis 60 % der Beratungskosten, max. 60.000 €; mit Netzwerk-Bonus bis 90.000 €",
    fuerWen: "Unternehmen aller Größen mit Standort in Deutschland",
  },
  {
    programm: "EEW Modul 4 (BAFA)",
    was: "Investitionen in energie- und ressourcenbezogene Optimierung von Anlagen und Prozessen",
    hoehe: "Basis- und Premiumförderung, prozentualer Investitionszuschuss",
    fuerWen: "Produzierende Unternehmen und Gewerbe",
  },
  {
    programm: "GRW",
    was: "Betriebliche Investitionen inkl. CO₂-einsparender Zusatzinvestitionen in Fördergebieten",
    hoehe: "15 bis 45 % je nach Region und Unternehmensgröße; Klimaschutz- und Energieeffizienzinvestitionen bis 45 % unabhängig von der Größe",
    fuerWen: "Unternehmen in ausgewiesenen GRW-Fördergebieten",
  },
  {
    programm: "NKI-Kommunalrichtlinie",
    was: "Klimaschutzkonzepte und Klimaschutzmanagement",
    hoehe: "70 % Zuschuss (Erstvorhaben), bis 90 % für finanzschwache Kommunen und Braunkohlegebiete",
    fuerWen: "Kommunen, Hochschulen, Kirchen, Träger im Gesundheits- und Sozialwesen",
  },
];

const ANALYSE_ERGEBNIS = [
  "Programm-Shortlist mit Förderquoten",
  "Kombinierbarkeit (Kumulierungsprüfung)",
  "Zeitplan mit Antragsfristen",
  "Aufwandsschätzung",
];

const FAQ: FaqItem[] = [
  {
    question: "Wann muss der Förderantrag gestellt werden?",
    answer:
      "Grundsätzlich vor Vorhabenbeginn. Ein vorzeitiger Maßnahmenstart ist in den meisten Programmen förderschädlich, planen Sie die Antragstellung deshalb an den Anfang Ihres Projekts.",
  },
  {
    question: "Können Programme kombiniert werden?",
    answer:
      "Teilweise. Für dieselben Kosten dürfen in der Regel keine zwei Zuschüsse fließen, unterschiedliche Kostenblöcke lassen sich aber oft getrennt fördern. Wir prüfen die Kumulierungsregeln im Einzelfall.",
  },
  {
    question: "Übernimmt COzwei die komplette Antragstellung?",
    answer:
      "Wir bereiten Anträge entscheidungsreif vor, erstellen die fachlichen Inhalte und begleiten Rückfragen des Fördergebers bis zum Bescheid und auf Wunsch bis zum Verwendungsnachweis.",
  },
  {
    question: "Was kostet die Förderanalyse?",
    answer:
      "Das Erstgespräch ist kostenlos. Die strukturierte Förderanalyse bieten wir zum Festpreis an; bei anschließender Projektbeauftragung rechnen wir sie an.",
  },
  {
    question: "Was passiert, wenn ein Programm ausläuft?",
    answer:
      "Förderprogramme haben Budgets und Fristen. Genau deshalb lohnt die Analyse früh: Wir priorisieren Anträge nach Fristen und Bewilligungschancen.",
  },
];

export default function Foerderung() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/pexels-fauxels-3184292.jpg"
        alt="Team am Tisch mit Auswertungen, Symbolbild für Förderanalyse und Antragstellung"
        title="Förderung sichern: Zuschüsse für Ihre Dekarbonisierung"
        subtitle="Bund und Länder fördern Klimaschutzberatung und -investitionen mit Zuschüssen von bis zu 90 Prozent, je nach Programm und Antragsteller. COzwei identifiziert die passenden Programme für Ihr Vorhaben, prüft die Voraussetzungen und begleitet Sie durch Antragstellung und Verwendungsnachweis."
        scrollTargetId="inhalt"
      />

      <section id="foerderanalyse" className="w-full py-16 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Förderanalyse: Welches Programm passt zu Ihrem Vorhaben?
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#23243a" }}>
            Die Förderlandschaft ändert sich laufend: Programme öffnen und schließen, Quoten
            und Bedingungen werden angepasst. Unsere Förderanalyse prüft Ihr konkretes
            Vorhaben gegen die aktuell offenen Programme von BAFA, KfW, NKI, GRW und
            Landesprogrammen, mit klarer Empfehlung, welcher Antrag sich lohnt und in
            welcher Reihenfolge.
          </p>
          <h3 className="text-lg font-extrabold mb-4" style={{ color: "#3D405B" }}>
            Das Ergebnis
          </h3>
          <ul className="space-y-3">
            {ANALYSE_ERGEBNIS.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed" style={{ color: "#23243a" }}>
                <span aria-hidden="true" className="font-extrabold" style={{ color: "#81B29A" }}>
                  &rarr;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="inhalt" className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Die wichtigsten Programme im Überblick
          </h2>

          {/* Desktop: Tabelle. Answer Engines extrahieren Tabellen und Fliesstext
              unterschiedlich, deshalb stehen die Kernzahlen zusaetzlich in den
              Abschnitten darunter. */}
          <div className="hidden md:block overflow-x-auto rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ backgroundColor: "#3D405B" }}>
                  <th className="p-4 font-extrabold text-white">Programm</th>
                  <th className="p-4 font-extrabold text-white">Was wird gefördert</th>
                  <th className="p-4 font-extrabold text-white">Förderhöhe</th>
                  <th className="p-4 font-extrabold text-white">Für wen</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMME.map((p) => (
                  <tr key={p.programm} className="border-t align-top" style={{ borderColor: "#E2DDD0" }}>
                    <th scope="row" className="p-4 font-extrabold" style={{ color: "#3D405B" }}>
                      {p.programm}
                    </th>
                    <td className="p-4" style={{ color: "#23243a" }}>{p.was}</td>
                    <td className="p-4" style={{ color: "#23243a" }}>{p.hoehe}</td>
                    <td className="p-4" style={{ color: "#23243a" }}>{p.fuerWen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobil: dieselben Daten als Karten */}
          <div className="md:hidden space-y-4">
            {PROGRAMME.map((p) => (
              <div key={p.programm} className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-5">
                <h3 className="font-extrabold mb-3" style={{ color: "#3D405B" }}>
                  {p.programm}
                </h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-bold" style={{ color: "#6B6B6B" }}>Was wird gefördert</dt>
                    <dd style={{ color: "#23243a" }}>{p.was}</dd>
                  </div>
                  <div>
                    <dt className="font-bold" style={{ color: "#6B6B6B" }}>Förderhöhe</dt>
                    <dd style={{ color: "#23243a" }}>{p.hoehe}</dd>
                  </div>
                  <div>
                    <dt className="font-bold" style={{ color: "#6B6B6B" }}>Für wen</dt>
                    <dd style={{ color: "#23243a" }}>{p.fuerWen}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <InfoBox label="Hinweis">
              Förderbedingungen ändern sich regelmäßig. Die Angaben entsprechen dem Stand
              August 2026. Im Erstgespräch prüfen wir die tagesaktuellen Konditionen für Ihr
              Vorhaben.
            </InfoBox>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            EEW Modul 4 &amp; 5: Beratung und Investition kombinieren
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Der Transformationsplan (Modul 5) liefert den geförderten Fahrplan, Modul 4
            bezuschusst anschließend die Umsetzung einzelner Maßnahmen. Wie beides
            zusammenspielt, lesen Sie auf unserer{" "}
            <Link href="/transformationskonzepte" className="font-bold underline" style={{ color: "#3D405B" }}>
              Detailseite zum BAFA-Transformationsplan
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="grw" className="w-full py-16 scroll-mt-24 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            GRW: Investitionsförderung in strukturschwachen Regionen
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Die Gemeinschaftsaufgabe „Verbesserung der regionalen Wirtschaftsstruktur"
            (GRW) fördert betriebliche Investitionen in ausgewiesenen Fördergebieten, seit
            der Reform 2022 ausdrücklich auch Investitionen in Klimaschutz, Energieeinsparung
            und Energieeffizienz mit bis zu 45 Prozent Zuschuss, unabhängig von der
            Unternehmensgröße. Ob Ihr Standort im Fördergebiet liegt und welche Fördersätze
            gelten, klären wir in der Förderanalyse. Die Umsetzung erfolgt über die Programme
            der Bundesländer; Antragstellung und Bedingungen unterscheiden sich je nach Land.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Für öffentliche Einrichtungen: NKI-Förderung
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Hochschulen, Kirchen und soziale Träger erhalten über die Kommunalrichtlinie
            Zuschüsse von 70 bis 90 Prozent für Klimaschutzkonzepte und
            Klimaschutzmanagement.{" "}
            <Link href="/klimaschutzkonzepte" className="font-bold underline" style={{ color: "#3D405B" }}>
              Mehr zu NKI-geförderten Klimaschutzkonzepten
            </Link>
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Transformationsplan",
            body: "Der geförderte Fahrplan zur Klimaneutralität nach EEW Modul 5.",
            href: "/transformationskonzepte",
          },
          {
            title: "Klimaschutzkonzepte",
            body: "NKI-Förderung für Hochschulen, Kirchen und soziale Träger.",
            href: "/klimaschutzkonzepte",
          },
          {
            title: "Maßnahmen",
            body: "Umsetzung von PV, Sanierung und Effizienzmaßnahmen.",
            href: "/massnahmen",
          },
        ]}
      />

      <ContactCTA
        location="foerderung"
        context="Schildern Sie uns Ihr Vorhaben, wir sagen Ihnen, welche Förderung realistisch ist."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Förderberatung Klimaschutz",
            description:
              "Förderanalyse und Antragsbegleitung für Dekarbonisierungsvorhaben, unter anderem BAFA EEW Modul 4 und 5, GRW und NKI-Kommunalrichtlinie.",
            path: PATH,
            serviceType: "Förderberatung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Förderung", path: PATH },
          ])
        )}
      />
    </div>
  );
}
