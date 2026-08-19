import type { Metadata } from "next";
import Link from "next/link";
import Header from "../Header";
import PageHero from "../components/PageHero";
import ContactCTA from "../components/ContactCTA";
import FaqSection from "../components/FaqSection";
import ProcessSteps from "../components/ProcessSteps";
import RelatedSolutions from "../components/RelatedSolutions";
import {
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
  SITE_URL,
  type FaqItem,
} from "../components/schema";

const PATH = "/ki-automatisierung";

export const metadata: Metadata = {
  title: "KI & Automatisierung für Unternehmen | COzwei",
  description:
    "KI-Implementierung, individuelle Softwareentwicklung und automatisierte Nachhaltigkeitsdaten: pragmatische KI-Lösungen aus der Beratungspraxis.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "KI & Automatisierung für Unternehmen | COzwei",
    description:
      "KI-Implementierung, Individualsoftware und automatisierte Nachhaltigkeitsdaten.",
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
        alt: "KI und Automatisierung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI & Automatisierung für Unternehmen | COzwei",
    description: "Pragmatische KI-Lösungen aus der Beratungspraxis.",
    images: [`${SITE_URL}/Pictures/Artboard 1.png`],
  },
  robots: { index: true, follow: true },
};

const EINSATZFELDER = [
  {
    title: "Dokumenten-Workflows",
    body: "Rechnungen, Verträge und Berichte automatisiert erfassen und prüfen.",
  },
  {
    title: "Wissenszugriff",
    body: "Interne Assistenten, die Richtlinien, Projektwissen und Vorlagen auffindbar machen.",
  },
  {
    title: "Prozessautomatisierung",
    body: "Wiederkehrende Abläufe zwischen E-Mail, CRM und Fachsystemen verbinden.",
  },
];

// Signature-Element: Vorher/Nachher-Prozesskette
const MANUELL = [
  "Excel-Abfrage",
  "Nachfassen per Mail",
  "Copy-Paste",
  "Fehlerkorrektur",
];
const AUTOMATISIERT = [
  "Systemanbindung",
  "automatische Plausibilisierung",
  "berichtsfertige Kennzahl",
];

const FAQ: FaqItem[] = [
  {
    question: "Welche KI-Modelle setzen Sie ein?",
    answer:
      "Wir wählen je nach Anwendungsfall und Datenschutzanforderung, von etablierten Sprachmodellen über europäische Anbieter bis zu lokal betriebenen Modellen. Die Auswahl ist Teil des Projekts, nicht Voraussetzung.",
  },
  {
    question: "Wie wird Datenschutz sichergestellt?",
    answer:
      "Vor jeder Umsetzung klären wir Datenklassifizierung, Auftragsverarbeitung und Zugriffskonzepte. Sensible Daten verlassen Ihre Systeme nur, wenn es vertraglich und technisch abgesichert ist.",
  },
  {
    question: "Lohnt sich KI auch für kleine Unternehmen?",
    answer:
      "Ja, gerade dort: Schon die Automatisierung eines einzelnen dokumentenlastigen Prozesses spart oft mehrere Stunden pro Woche. Wir starten bewusst klein und messbar.",
  },
  {
    question: "Was unterscheidet Sie von reinen IT-Dienstleistern?",
    answer:
      "Wir denken vom Fachprozess her, nicht von der Technik. Aus der Beratungspraxis wissen wir, wie Daten in Unternehmen tatsächlich fließen und wo Automatisierung scheitert, wenn man die Fachlichkeit ignoriert.",
  },
  {
    question: "Können bestehende Systeme angebunden werden?",
    answer:
      "In der Regel ja, per Schnittstelle, Export oder robotergestützter Erfassung. Die Systemlandschaft prüfen wir im Prozess-Screening.",
  },
];

function Kette({ items, tone }: { items: string[]; tone: string }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item}>
          <div
            className="rounded-xl px-4 py-3 text-sm font-bold"
            style={{ backgroundColor: tone, color: "#3D405B" }}
          >
            {item}
          </div>
          {i < items.length - 1 && (
            <div aria-hidden="true" className="text-center text-lg leading-none py-1" style={{ color: "#81B29A" }}>
              &darr;
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function KiAutomatisierung() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      <PageHero
        image="/Pictures/Homepage/loesung-ai.jpg"
        alt="KI-Visualisierung über einem Laptop, Symbolbild für KI und Automatisierung"
        title="KI & Automatisierung: Prozesse beschleunigen, Daten nutzbar machen"
        subtitle="COzwei entwickelt KI-gestützte Lösungen für wiederkehrende Unternehmensprozesse, von der automatisierten Datenerhebung über Dokumenten-Workflows bis zu individueller Software. Wir kommen aus der Beratungspraxis: Jede Lösung entsteht aus einem realen Prozess, nicht aus einer Technologie-Idee."
        scrollTargetId="implementierung"
      />

      <section id="implementierung" className="w-full py-16 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            KI-Implementierung im Unternehmen
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl" style={{ color: "#23243a" }}>
            Wir identifizieren mit Ihnen die Prozesse, in denen KI messbar Zeit spart,
            typischerweise dort, wo Mitarbeitende Informationen aus Dokumenten, E-Mails oder
            Tabellen manuell übertragen, prüfen oder zusammenfassen. Dann setzen wir um: von
            der Auswahl geeigneter Modelle und Tools über Datenschutz- und Zugriffskonzepte
            bis zur Schulung Ihrer Teams. Sie erhalten funktionierende Arbeitsabläufe statt
            Pilotprojekte, die nach dem Workshop enden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EINSATZFELDER.map((f) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="software" className="w-full py-16 scroll-mt-24 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#3D405B" }}>
            Individuelle Softwareentwicklung
          </h2>
          {/* Referenzprojekte und Technologie-Nennungen stehen noch aus und werden
              bewusst nicht erfunden. Sobald COzwei sie freigibt, hier ergaenzen. */}
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            Wo Standardsoftware nicht passt, entwickeln wir schlanke Individuallösungen:
            interne Tools, Datenpipelines, Berechnungsmodule und Schnittstellen zwischen
            Ihren Systemen. Wir arbeiten iterativ, erste nutzbare Version in Wochen, nicht
            Monaten, und übergeben dokumentierten, wartbaren Code.
          </p>
        </div>
      </section>

      <section id="datenautomatisierung" className="w-full py-16 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Automatisierte Nachhaltigkeitsdaten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-6">
              <h3 className="text-base font-extrabold uppercase tracking-wide mb-4" style={{ color: "#6B6B6B" }}>
                Manuell
              </h3>
              <Kette items={MANUELL} tone="#EFEFEF" />
            </div>
            <div className="rounded-3xl bg-white/60 backdrop-blur-xl border-2 p-6" style={{ borderColor: "#81B29A" }}>
              <h3 className="text-base font-extrabold uppercase tracking-wide mb-4" style={{ color: "#81B29A" }}>
                Automatisiert
              </h3>
              <Kette items={AUTOMATISIERT} tone="rgba(129,178,154,0.18)" />
            </div>
          </div>

          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "#23243a" }}>
            Unsere Wurzeln liegen in der Klimabilanzierung, deshalb automatisieren wir
            besonders häufig Nachhaltigkeitsdaten: Energieverbräuche aus Rechnungen auslesen,
            Lieferantendaten strukturiert einsammeln, Emissionskennzahlen automatisch
            fortschreiben und berichtsfertig für CSRD, CDP oder VSME aufbereiten. So wird aus
            der jährlichen Datensammel-Aktion ein laufender Prozess. Mehr zur{" "}
            <Link href="/co2-bilanzierung" className="font-bold underline" style={{ color: "#3D405B" }}>
              CO₂-Bilanzierung
            </Link>{" "}
            und zur{" "}
            <Link href="/berichterstattung" className="font-bold underline" style={{ color: "#3D405B" }}>
              Nachhaltigkeitsberichterstattung
            </Link>
            .
          </p>
        </div>
      </section>

      <ProcessSteps
        heading="So starten wir"
        steps={[
          {
            title: "Prozess-Screening",
            body: "Wir analysieren zwei bis drei Kandidaten-Prozesse und schätzen Einsparpotenzial und Aufwand.",
          },
          {
            title: "Pilot in Wochen",
            body: "Der vielversprechendste Prozess wird als nutzbarer Prototyp umgesetzt.",
          },
          {
            title: "Rollout und Befähigung",
            body: "Ausweitung, Dokumentation, Schulung. Ihr Team betreibt die Lösung selbst.",
          },
        ]}
      />

      <FaqSection items={FAQ} />

      <RelatedSolutions
        items={[
          {
            title: "CO₂-Bilanzierung",
            body: "Die Datenbasis, die wir am häufigsten automatisieren.",
            href: "/co2-bilanzierung",
          },
          {
            title: "Berichterstattung",
            body: "Berichtsfertige Kennzahlen für CSRD, CDP und VSME.",
            href: "/berichterstattung",
          },
          {
            title: "Förderung",
            body: "Zuschüsse für Digitalisierungs- und Effizienzvorhaben prüfen.",
            href: "/foerderung",
          },
        ]}
      />

      <ContactCTA
        location="ki_automatisierung"
        context="Nennen Sie uns einen Prozess, der Sie Zeit kostet, wir sagen Ihnen, ob sich Automatisierung lohnt."
      />

      <script
        {...jsonLd(
          serviceSchema({
            name: "KI und Automatisierung",
            description:
              "KI-Implementierung, individuelle Softwareentwicklung und Automatisierung von Nachhaltigkeitsdaten für wiederkehrende Unternehmensprozesse.",
            path: PATH,
            serviceType: "KI-Beratung und Automatisierung",
          })
        )}
      />
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "KI & Automatisierung", path: PATH },
          ])
        )}
      />
    </div>
  );
}
