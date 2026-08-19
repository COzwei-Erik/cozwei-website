import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
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

const PATH = "/klimaschutzkonzepte-kirchen";

export const metadata: Metadata = {
  title: "Klimaschutzkonzepte für Kirchen (NKI) | COzwei",
  description:
    "NKI-gefördertes Klimaschutzkonzept für Kirchen, Bistümer und kirchliche Träger: 70–90 % Zuschuss. Von Gebäudebestand bis Schöpfungsverantwortung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Klimaschutzkonzepte für Kirchen (NKI) | COzwei",
    description:
      "70 bis 90 Prozent Zuschuss über die Kommunalrichtlinie für Landeskirchen, Bistümer und kirchliche Träger.",
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
        alt: "Klimaschutzkonzepte für Kirchen durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimaschutzkonzepte für Kirchen (NKI) | COzwei",
    description: "NKI-gefördertes Klimaschutzkonzept für kirchliche Träger.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

// Signature-Element: Gebaeudetypen mit typischem Hebel
const GEBAEUDETYPEN = [
  { typ: "Kirche", hebel: "Temperierung statt Vollbeheizung" },
  { typ: "Gemeindehaus", hebel: "Nutzungszeiten und Regelungstechnik" },
  { typ: "Kita", hebel: "Lüftung und Warmwasserbereitung" },
  { typ: "Pfarrhaus", hebel: "Hüllensanierung und Heizungstausch" },
  { typ: "Verwaltung", hebel: "Beleuchtung, IT, Beschaffung" },
];

const FAQ: FaqItem[] = [
  {
    question: "Wer stellt den Antrag, Gemeinde, Kirchenkreis oder Landeskirche?",
    answer:
      "Antragsberechtigt sind Religionsgemeinschaften mit Körperschaftsstatus sowie deren Stiftungen. Die sinnvolle Ebene hängt vom Gebäudebestand und den Verwaltungsstrukturen ab; oft ist der Kirchenkreis oder das Bistum die effizienteste Antragsebene.",
  },
  {
    question: "Wie gehen wir mit Denkmalschutz um?",
    answer:
      "Denkmalgeschützte Gebäude werden nicht ausgeklammert, sondern mit angepassten Maßnahmen geplant, von Regelungstechnik über Temperierungskonzepte bis zur behutsamen Hüllensanierung.",
  },
  {
    question: "Wie hoch ist die Förderung?",
    answer:
      "70 Prozent der förderfähigen Ausgaben im Erstvorhaben, bis zu 90 Prozent in finanzschwachen Kommunen und Braunkohlegebieten; Anschlussvorhaben 40 Prozent.",
  },
  {
    question: "Was passiert nach dem Konzept?",
    answer:
      "Über das Anschlussvorhaben wird ein Klimaschutzmanagement zur Umsetzung gefördert; zusätzlich sind ausgewählte investive Maßnahmen aus dem beschlossenen Konzept förderfähig.",
  },
  {
    question: "Berücksichtigt das Konzept unsere kirchlichen Klimaziele?",
    answer:
      "Ja. Bestehende Beschlüsse zu Zieljahren und Standards Ihrer Landeskirche oder Diözese werden als Zielrahmen im Konzept verankert.",
  },
];

export default function KlimaschutzkonzepteKirchen() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <section className="w-full pt-16 pb-12" style={{ backgroundColor: "#F4F1DE" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-extrabold uppercase tracking-wide mb-4" style={{ color: "#81B29A" }}>
            <Link href="/klimaschutzkonzepte" className="hover:underline">
              Klimaschutzkonzepte
            </Link>
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: "#3D405B" }}
          >
            Klimaschutzkonzepte für Kirchen und kirchliche Einrichtungen
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Religionsgemeinschaften mit Körperschaftsstatus sowie deren Stiftungen und
            Einrichtungen sind über die Kommunalrichtlinie der NKI antragsberechtigt: 70
            Prozent Zuschuss für Klimaschutzkonzept und Klimaschutzmanagement, bis zu 90
            Prozent in finanzschwachen Kommunen und Braunkohlegebieten. COzwei begleitet
            Landeskirchen, Bistümer, Kirchenkreise und kirchliche Träger von der
            Antragstellung bis zum beschlussfähigen Konzept.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Die kirchliche Ausgangslage ist besonders
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Kirchliche Träger verantworten große, heterogene Gebäudebestände, von der
            denkmalgeschützten Kirche über Gemeindehäuser bis zu Kitas und
            Verwaltungsgebäuden, bei knappen Haushalten und ehrenamtlichen Strukturen. Viele
            Landeskirchen und Bistümer haben zudem eigene Klimaschutzgesetze und Zieljahre
            beschlossen. Ein NKI-gefördertes Klimaschutzkonzept übersetzt diese Beschlüsse in
            einen priorisierten, finanzierbaren Maßnahmenplan je Gebäude und Handlungsfeld.
          </p>
        </div>
      </section>

      <ProcessSteps
        heading="Unser Vorgehen für kirchliche Träger"
        steps={[
          {
            title: "Antrag und Struktur",
            body: "Klärung der antragsberechtigten Körperschaft, Antragstellung digital über easy-Online.",
          },
          {
            title: "Bilanz und Gebäudeportfolio",
            body: "THG-Bilanz und Priorisierung des Gebäudebestands nach Verbrauch, Nutzung und Sanierungsstand.",
          },
          {
            title: "Maßnahmenkatalog und Beschluss",
            body: "Umsetzungsfahrplan mit Kosten, Einsparung und Verantwortlichkeiten; Beschlussvorlage für Synode, Kirchenvorstand oder Verwaltungsrat.",
          },
        ]}
      />

      <section className="w-full py-16" style={{ backgroundColor: "#F4F1DE" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Gebäudetypen und typische Hebel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GEBAEUDETYPEN.map((g) => (
              <div key={g.typ} className="rounded-2xl bg-white border p-5" style={{ borderColor: "#E2DDD0" }}>
                <h3 className="text-base font-extrabold mb-2" style={{ color: "#3D405B" }}>
                  {g.typ}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                  {g.hebel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <InfoBox label="Gut zu wissen">
            Auch rechtlich selbständige kirchliche Einrichtungen, etwa Träger von Kitas,
            Pflege- oder Bildungseinrichtungen, können eigenständig antragsberechtigt sein.
            Wir prüfen die passende Antragskonstellation vorab.
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
            title: "Maßnahmen",
            body: "Umsetzung von Sanierung und Anlagentechnik.",
            href: "/massnahmen",
          },
        ]}
      />

      <ContactCTA
        location="klimaschutzkonzepte_kirchen"
        context="Wir prüfen kostenlos, welche Ihrer Körperschaften antragsberechtigt ist, schreiben Sie uns."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Klimaschutzkonzepte für Kirchen",
            description:
              "NKI-gefördertes Klimaschutzkonzept für Landeskirchen, Bistümer, Kirchenkreise und kirchliche Träger, inklusive Treibhausgasbilanz und Gebäudepriorisierung.",
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
            { name: "Kirchen", path: PATH },
          ])
        )}
      />
    </div>
  );
}
