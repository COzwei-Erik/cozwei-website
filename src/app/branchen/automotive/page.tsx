import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../Header";
import PageHero from "../../components/PageHero";
import ContactCTA from "../../components/ContactCTA";
import FaqSection from "../../components/FaqSection";
import LogoStrip from "../../components/LogoStrip";
import RelatedSolutions from "../../components/RelatedSolutions";
import SolutionCard from "../../components/SolutionCard";
import { AUTOMOTIVE_LOGOS } from "../logos";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../../components/schema";

const PATH = "/branchen/automotive";

export const metadata: Metadata = {
  title: "Dekarbonisierung Automotive & Zulieferer | COzwei",
  description:
    "Dekarbonisierung für Automobilzulieferer: PCF-Anfragen der OEMs, SAQ 5.0, CDP und SBTi, methodensicher beantwortet. Mit Automotive-Erfahrung.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Dekarbonisierung Automotive & Zulieferer | COzwei",
    description:
      "PCF je Bauteil, SAQ 5.0, CDP und SBTi: OEM-Anforderungen effizient und methodensicher erfüllen.",
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
        alt: "Dekarbonisierung für Automobilzulieferer durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekarbonisierung Automotive & Zulieferer | COzwei",
    description: "PCF je Bauteil, SAQ 5.0, CDP und SBTi methodensicher erfüllen.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const TREIBER = [
  {
    title: "PCF als Vergabekriterium",
    body: "OEMs fragen zunehmend bauteilbezogene Product Carbon Footprints ab, mit vorgegebenen Systemgrenzen und Datenformaten. Wer nicht liefern kann, riskiert Nachteile in der Vergabe. Die Methodik ist dabei nicht trivial: Gerade bei Energie, Allokation und Recycling bestehen zwischen den gängigen Standards erhebliche methodische Unterschiede, die das Ergebnis spürbar verändern.",
  },
  {
    title: "SAQ 5.0 und ESG-Ratings",
    body: "Die Selbstauskunft über den Supplier Assurance Questionnaire (SAQ 5.0) ist bei vielen OEMs Voraussetzung für die Listung; hinzu kommen Ratings wie EcoVadis und CDP-Supply-Chain-Anfragen. Die Fragenkataloge überschneiden sich stark: Wer seine Klimadaten einmal sauber strukturiert, beantwortet alle drei effizient.",
  },
  {
    title: "Datenaustausch wird standardisiert",
    body: "Mit Initiativen wie Catena-X entsteht ein standardisierter PCF-Datenaustausch entlang der automobilen Lieferkette. Zulieferer sollten ihre Berechnungsmethodik heute schon so aufsetzen, dass die Werte in solche Formate überführbar sind.",
  },
  {
    title: "CBAM bei Importen",
    body: "Wer Stahl, Aluminium oder daraus gefertigte Vorprodukte aus Drittländern importiert, fällt unter den CO₂-Grenzausgleich CBAM, mit eigenen Berichts- und Zertifikatspflichten.",
    href: "/berichterstattung#cbam",
    linkLabel: "Kurzüberblick zu CBAM",
  },
];

// Signature-Element: OEM-Anforderungsradar als Scan-Überblick.
const RADAR = [
  {
    anforderung: "PCF je Bauteil",
    wer: "OEM-Einkauf, Vergabeverfahren",
    cozwei: "Parametrisierte PCF-Modelle nach ISO 14067",
    href: "/product-carbon-footprint",
  },
  {
    anforderung: "SAQ 5.0",
    wer: "OEM-Lieferantenmanagement",
    cozwei: "Beantwortung aus konsistentem Datenmodell",
    href: "/berichterstattung",
  },
  {
    anforderung: "CDP",
    wer: "OEMs über CDP Supply Chain, Investoren",
    cozwei: "Erstbericht und Score-Verbesserung",
    href: "/cdp-klimaberichterstattung",
  },
  {
    anforderung: "SBTi-Ziele",
    wer: "OEM-Lieferantenbewertung",
    cozwei: "Zielarchitektur und Validierungsbegleitung",
    href: "/dekarbonisierung",
  },
  {
    anforderung: "CO₂-Reduktionspfad",
    wer: "OEM-Zielvereinbarungen",
    cozwei: "Maßnahmenplan mit Förderung",
    href: "/foerderung",
  },
];

const LEISTUNGEN = [
  {
    title: "Product Carbon Footprint je Bauteil",
    body: "Parametrisierte PCF-Modelle für Produktfamilien: einmal aufgebaut, für jede Kundenanfrage wiederverwendbar.",
    href: "/product-carbon-footprint",
  },
  {
    title: "Corporate Carbon Footprint & SBTi",
    body: "CCF nach GHG Protocol als Basis für Klimaziele, die OEMs und CDP anerkennen.",
    href: "/corporate-carbon-footprint",
  },
  {
    title: "SAQ 5.0 & ESG-Ratings",
    body: "Wir beantworten Lieferantenanfragen und Ratings mit konsistenten Daten: SAQ, EcoVadis, CDP aus einem Guss.",
    href: "/berichterstattung",
  },
  {
    title: "CDP Klima-Reporting",
    body: "Vom Erstbericht bis zur Score-Verbesserung, abgestimmt auf Kundenanforderungen.",
    href: "/cdp-klimaberichterstattung",
  },
  {
    title: "Dekarbonisierung & Förderung",
    body: "Reduktionsmaßnahmen in Produktion und Prozesswärme, gefördert über EEW Modul 4 und 5 sowie GRW.",
    href: "/foerderung",
  },
];

const BELEGE = [
  "Unsere Nachhaltigkeitsstrategie-Beratung ist historisch auf die Automobil- und Zulieferindustrie fokussiert; wir kennen die Fragenkataloge von SAQ 5.0, EcoVadis und CDP im Detail.",
  "Wir rechnen PCFs so, dass Methodenentscheidungen (Allokation, Recycling, Strommodellierung) dokumentiert und gegenüber OEM-Prüfern verteidigbar sind.",
  "Wir denken Vergabe mit: Ergebnisse werden im Format geliefert, das Ihr Kunde verlangt, nicht im Format, das uns am leichtesten fällt.",
];

const FAQ: FaqItem[] = [
  {
    question: "Ein OEM fordert einen PCF mit kurzer Frist, wie schnell geht das?",
    answer:
      "Für ein einzelnes Bauteil mit vorhandener Stückliste sind belastbare Ergebnisse oft innerhalb weniger Wochen möglich. Anfragen mit Deadline priorisieren wir.",
  },
  {
    question: "Welchen Standard verlangen die OEMs?",
    answer:
      "Das variiert: GHG Protocol Product Standard, ISO 14067 und OEM-eigene Leitfäden mit spezifischen Vorgaben zu Systemgrenzen und Sekundärdaten. Wir prüfen die konkrete Anforderung Ihres Kunden und rechnen konform dazu.",
  },
  {
    question: "Lohnt sich ein SBTi-Ziel für Zulieferer?",
    answer:
      "Zunehmend ja: Mehrere OEMs bewerten wissenschaftsbasierte Ziele positiv in der Lieferantenbewertung, und ein validiertes Ziel beantwortet viele Einzelfragen in Ratings gleich mit.",
  },
  {
    question:
      "Wir haben mehrere Kundenanfragen mit unterschiedlichen Formaten, müssen wir alles mehrfach rechnen?",
    answer:
      "Nein. Wir bauen ein konsistentes Datenmodell, aus dem sich SAQ, CDP, EcoVadis und PCF-Anfragen ableiten lassen. Das ist der eigentliche Effizienzhebel.",
  },
  {
    question: "Werden Reduktionsmaßnahmen in der Produktion gefördert?",
    answer:
      "Ja, über EEW Modul 4 (Anlagen- und Prozessoptimierung) und in Fördergebieten über die GRW mit bis zu 45 Prozent Zuschuss für Klimaschutzinvestitionen.",
  },
];

export default function BranchenAutomotive() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/branche-automotive.jpg"
        alt="Getriebe eines Fahrzeugs in Nahaufnahme, Symbolbild für die Automobilindustrie"
        title="Automotive: Klimaanforderungen der OEMs methodensicher erfüllen"
        subtitle="Kaum eine Branche gibt Klimaanforderungen so systematisch an ihre Lieferkette weiter wie die Automobilindustrie: OEMs fordern Product Carbon Footprints je Bauteil, ESG-Selbstauskünfte über SAQ 5.0, CDP-Teilnahme und wissenschaftsbasierte Klimaziele, teils als Vergabekriterium. COzwei unterstützt Zulieferer dabei, diese Anforderungen effizient und methodensicher zu erfüllen, statt jede Anfrage einzeln zu improvisieren."
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            OEM-Anforderungsradar
          </h2>

          <div className="hidden md:block overflow-x-auto rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ backgroundColor: "#3D405B" }}>
                  <th className="p-4 font-extrabold text-white">Anforderung</th>
                  <th className="p-4 font-extrabold text-white">Wer fordert es</th>
                  <th className="p-4 font-extrabold text-white">Was COzwei liefert</th>
                </tr>
              </thead>
              <tbody>
                {RADAR.map((r) => (
                  <tr key={r.anforderung} className="border-t border-[#81B29A]/20 align-top">
                    <th scope="row" className="p-4 font-extrabold" style={{ color: "#3D405B" }}>
                      {r.anforderung}
                    </th>
                    <td className="p-4" style={{ color: "#23243a" }}>
                      {r.wer}
                    </td>
                    <td className="p-4">
                      <Link href={r.href} className="font-bold hover:underline" style={{ color: "#81B29A" }}>
                        {r.cozwei}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {RADAR.map((r) => (
              <div
                key={r.anforderung}
                className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-5"
              >
                <h3 className="font-extrabold mb-3" style={{ color: "#3D405B" }}>
                  {r.anforderung}
                </h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-bold" style={{ color: "#6B6B6B" }}>
                      Wer fordert es
                    </dt>
                    <dd style={{ color: "#23243a" }}>{r.wer}</dd>
                  </div>
                  <div>
                    <dt className="font-bold" style={{ color: "#6B6B6B" }}>
                      Was COzwei liefert
                    </dt>
                    <dd>
                      <Link href={r.href} className="font-bold hover:underline" style={{ color: "#81B29A" }}>
                        {r.cozwei}
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Unsere Leistungen für Automotive
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

      <LogoStrip logos={AUTOMOTIVE_LOGOS} />

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "Product Carbon Footprint",
            body: "Bauteilbezogene Bilanzen nach ISO 14067, parametrisiert für Produktfamilien.",
            href: "/product-carbon-footprint",
          },
          {
            title: "Berichterstattung",
            body: "SAQ 5.0, CDP und Ratings aus einem konsistenten Datenmodell.",
            href: "/berichterstattung",
          },
          {
            title: "Förderung",
            body: "EEW Modul 4 und 5 sowie GRW für Reduktionsmaßnahmen.",
            href: "/foerderung",
          },
        ]}
      />

      <ContactCTA
        location="branche_automotive"
        context="Leiten Sie uns die OEM-Anfrage weiter, wir sagen Ihnen binnen zwei Werktagen, was zu tun ist."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "Dekarbonisierung für die Automobilindustrie",
            description:
              "Product Carbon Footprints je Bauteil, SAQ 5.0, CDP, SBTi-Klimaziele und geförderte Reduktionsmaßnahmen für Automobilzulieferer.",
            path: PATH,
            serviceType: "Dekarbonisierungsberatung Automotive",
            audience: "Automobilzulieferer und Automobilindustrie",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: "/branchen/automotive" },
            { name: "Automotive", path: PATH },
          ])
        )}
      />
    </div>
  );
}
