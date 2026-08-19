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

const PATH = "/energieeffizienz";

export const metadata: Metadata = {
  title: "Energieeffizienz im Betrieb steigern | COzwei",
  description:
    "Energieeffizienz im Betrieb: Verbräuche analysieren, Maßnahmen priorisieren, Förderung nutzen. Von der Analyse bis zur Umsetzung mit COzwei.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Energieeffizienz im Betrieb steigern | COzwei",
    description:
      "Verbräuche analysieren, Maßnahmen nach Wirtschaftlichkeit priorisieren, Förderung nutzen.",
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
        alt: "Energieeffizienz-Beratung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energieeffizienz im Betrieb steigern | COzwei",
    description: "Verbrauchsanalyse, Priorisierung nach Wirtschaftlichkeit, Förderung.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const HANDLUNGSFELDER = [
  {
    title: "Prozesse & Anlagen",
    body: "Abwärmenutzung, Druckluft, Antriebe, Prozesswärme.",
    href: null as string | null,
  },
  {
    title: "Gebäude",
    body: "Heizung, Lüftung, Dämmung, Beleuchtung.",
    href: null,
  },
  {
    title: "Energieerzeugung",
    body: "Photovoltaik und Wärmepumpen, Umsetzung über unser Partnernetzwerk.",
    href: "/massnahmen",
  },
  {
    title: "Monitoring",
    body: "Lastgänge und Zählerstruktur als Basis für Entscheidungen.",
    href: null,
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Womit starten wir am besten?",
    answer:
      "Mit einer Verbrauchsanalyse: Lastgänge, Abrechnungen und die größten Verbraucher. Daraus entsteht in wenigen Wochen eine belastbare Maßnahmenliste.",
  },
  {
    question: "Brauchen wir ein Energieaudit oder ein Energiemanagementsystem?",
    answer:
      "Das hängt von Unternehmensgröße und gesetzlichen Pflichten ab. Wir prüfen, was für Sie gilt, und richten die Analyse so aus, dass sie anschlussfähig ist, ohne Doppelarbeit.",
  },
  {
    question: "Setzt COzwei die Maßnahmen selbst um?",
    answer:
      "Die Umsetzung erfolgt über unser geprüftes Partnernetzwerk aus Energie-, PV- und Sanierungsspezialisten; wir steuern Qualität und CO₂-Wirkung.",
  },
  {
    question: "Wie schnell rechnen sich Maßnahmen?",
    answer:
      "Das ist maßnahmenspezifisch und hängt von Energiepreisen und Förderquote ab. In der Priorisierung weisen wir Amortisationszeiten je Maßnahme transparent aus.",
  },
];

export default function Energieeffizienz() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/pexels-tomfisk-9893729.jpg"
        alt="Solarpark aus der Vogelperspektive, Symbolbild für Energieeffizienz"
        title="Energieeffizienz im Betrieb: weniger Verbrauch, weniger Kosten, weniger Emissionen"
        subtitle="Energieeffizienz ist der schnellste Hebel der Dekarbonisierung: Jede eingesparte Kilowattstunde senkt Kosten und Emissionen zugleich. COzwei analysiert Ihre Verbräuche, priorisiert Maßnahmen nach Wirtschaftlichkeit und begleitet die Umsetzung, inklusive der passenden Förderung."
        scrollTargetId="inhalt"
      />

      <section id="inhalt" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Wo wir ansetzen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HANDLUNGSFELDER.map((f) => (
              <div key={f.title} className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-6">
                <h3
                  className="text-base font-extrabold uppercase tracking-wide mb-2"
                  style={{ color: "#81B29A" }}
                >
                  {f.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#23243a" }}>
                  {f.body}
                </p>
                {f.href && (
                  <Link
                    href={f.href}
                    className="inline-block mt-3 text-sm font-bold hover:underline"
                    style={{ color: "#3D405B" }}
                  >
                    Zur Maßnahmenumsetzung
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature-Element: Wirtschaftlichkeits-Matrix als reines SVG */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Priorisieren statt Gießkanne
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#23243a" }}>
            Wir bewerten jede Maßnahme nach Investition, Einsparung, CO₂-Wirkung und
            Umsetzungszeitraum. Daraus entsteht eine Umsetzungsreihenfolge, die zu Budget und
            Betrieb passt.
          </p>

          <figure className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-6">
            <svg
              viewBox="0 0 460 320"
              className="w-full h-auto"
              role="img"
              aria-label="Matrix mit den Achsen Investition und CO2- beziehungsweise Kostenwirkung. Beispielhaft eingeordnet sind LED-Umruestung bei niedriger Investition und mittlerer Wirkung sowie Abwaermenutzung bei mittlerer Investition und hoher Wirkung."
            >
              <line x1="60" y1="270" x2="430" y2="270" stroke="#3D405B" strokeWidth="2" />
              <line x1="60" y1="270" x2="60" y2="30" stroke="#3D405B" strokeWidth="2" />
              <line x1="245" y1="270" x2="245" y2="30" stroke="#E2DDD0" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="60" y1="150" x2="430" y2="150" stroke="#E2DDD0" strokeWidth="1" strokeDasharray="4 4" />
              <text x="245" y="300" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D405B">
                Investition
              </text>
              <text x="22" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D405B" transform="rotate(-90 22 150)">
                CO₂- und Kostenwirkung
              </text>
              <circle cx="130" cy="175" r="11" fill="#81B29A" />
              <text x="148" y="180" fontSize="13" fill="#23243a">LED-Umrüstung</text>
              <circle cx="250" cy="80" r="11" fill="#81B29A" />
              <text x="268" y="85" fontSize="13" fill="#23243a">Abwärmenutzung</text>
              <circle cx="115" cy="240" r="9" fill="#C3C9CF" />
              <text x="132" y="245" fontSize="12" fill="#6B6B6B">Regelungsoptimierung</text>
              <circle cx="360" cy="120" r="9" fill="#C3C9CF" />
              <text x="270" y="150" fontSize="12" fill="#6B6B6B">Hüllensanierung</text>
            </svg>
            <figcaption className="text-sm mt-4" style={{ color: "#6B6B6B" }}>
              Beispielhafte Einordnung. Die konkrete Bewertung erfolgt anlagenspezifisch.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Förderung mitdenken
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Investitionen in die energie- und ressourcenbezogene Optimierung von Anlagen und
            Prozessen werden über EEW Modul 4 bezuschusst; der geförderte{" "}
            <Link href="/transformationskonzepte" className="font-bold underline" style={{ color: "#3D405B" }}>
              Transformationsplan (Modul 5)
            </Link>{" "}
            liefert den strategischen Rahmen. In GRW-Fördergebieten sind für Klimaschutz- und
            Effizienzinvestitionen bis zu 45 Prozent Zuschuss möglich.{" "}
            <Link href="/foerderung" className="font-bold underline" style={{ color: "#3D405B" }}>
              Zur Förderübersicht
            </Link>
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Maßnahmen",
            body: "Umsetzung von PV, Sanierung und Anlagentechnik über unser Partnernetzwerk.",
            href: "/massnahmen",
          },
          {
            title: "Förderung",
            body: "Passende Programme finden und Anträge stellen.",
            href: "/foerderung",
          },
          {
            title: "Dekarbonisierung",
            body: "Effizienzmaßnahmen im Gesamtpfad zu Ihren Klimazielen.",
            href: "/dekarbonisierung",
          },
        ]}
      />

      <ContactCTA
        location="energieeffizienz"
        context="Senden Sie uns Ihre letzten Energieabrechnungen, wir nennen Ihnen die drei größten Hebel."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Energieeffizienz-Beratung",
            description:
              "Analyse der betrieblichen Energieverbräuche, Priorisierung von Effizienzmaßnahmen nach Wirtschaftlichkeit und CO₂-Wirkung sowie Begleitung der Umsetzung.",
            path: PATH,
            serviceType: "Energieeffizienz-Beratung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Energieeffizienz", path: PATH },
          ])
        )}
      />
    </div>
  );
}
