"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/4e00978e7e7f42e38133622070d543b9@cozwei.de/meetingtype/vbiOdceuK0-As0tl2Bxhvg2?anonymous&ep=mCardFromTile";

type Tier = {
  level: "S" | "M" | "L";
  title: string;
  tagline: string;
  bullets: string[];
  priceDuration: string;
};

const tiers: Tier[] = [
  {
    level: "S",
    title: "Quick Check",
    tagline:
      "Ein erfahrener Blick auf Ihre Bilanz, entlang der fünf Prüfdimensionen der COzwei GmbH.",
    bullets: [
      "90-minütige geführte Durchsicht Ihrer bestehenden CCF-Berechnung mit einem COzwei-Experten.",
      "Ampel-Einschätzung pro Prüfdimension, direkt handlungsleitend, ohne aufwändige Datenübergabe.",
      "Kurz-Memo mit den drei wichtigsten methodischen Befunden und konkreten Empfehlungen für den nächsten Schritt.",
    ],
    priceDuration: "799 € brutto · 90-Min-Termin · Memo innerhalb 5 Werktagen",
  },
  {
    level: "M",
    title: "Verifizierung nach ISO 14064-3",
    tagline:
      "Die strukturierte methodische Prüfung Ihrer abgeschlossenen CO₂-Bilanz, mit klarem Umfang, Festpreis und übergabefähigem Verifizierungsbericht.",
    bullets: [
      "Vollständige Prüfung aller fünf Dimensionen nach ISO 14064-3 (Systemgrenzen, Emissionsfaktoren, Scope-3-Vollständigkeit, Plausibilität, Dokumentation) entlang der Prüfgrundsätze Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz und Transparenz.",
      "Verifizierungsbericht mit priorisierter Liste der identifizierten methodischen Abweichungen, konkreten Korrektur-Empfehlungen und vollständiger Nachweisdokumentation, übergabefähig an Wirtschaftsprüfer und Stakeholder.",
      "Einschätzung zur Anschlussfähigkeit Ihrer Bilanz an CDP, ESRS E1, EcoVadis und gängige Kundenfragebögen entlang der Lieferkette, unabhängig von der eingesetzten ESG-Software.",
    ],
    priceDuration: "Festpreis nach Erstgespräch · 2–3 Wochen",
  },
  {
    level: "L",
    title: "Verifizierung nach ISO 14064-3 + Methoden-Update für das Folgejahr",
    tagline:
      "Verifizierung plus dokumentierte Methoden-Anpassungen, damit Ihr Team die nächste Bilanz auf belastbarer Grundlage erstellt.",
    bullets: [
      "Alle Leistungen aus Paket M: methodische Prüfung nach ISO 14064-3, Verifizierungsbericht und Anschlussfähigkeit-Einschätzung für CDP, ESRS E1 und Kundenfragebögen.",
      "Aktualisiertes Bilanzierungshandbuch mit dokumentierten Methoden-Entscheidungen (Konsolidierungsansatz, Emissionsfaktoren-Logik, Scope-Abgrenzung) als verbindliche Grundlage für die nächste Bilanzperiode.",
      "Überarbeitete Prozessbeschreibungen zur Datenerhebung mit klaren Verantwortlichkeiten an den Standorten. Ihr Team erstellt die Folgejahres-Bilanz konsistent und audit-fest in Eigenregie.",
    ],
    priceDuration: "Festpreis nach Erstgespräch · 2–5 Wochen",
  },
];

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Was ist eine CCF-Verifizierung nach ISO 14064-3?",
    a: "Eine Verifizierung einer CO₂-Bilanz nach ISO 14064-3 ist eine strukturierte methodische Überprüfung eines Corporate Carbon Footprints anhand der Prinzipien Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz und Transparenz. Sie prüft nicht die einzelnen Datenpunkte, sondern die methodischen Entscheidungen dahinter, etwa die Wahl der Emissionsfaktoren, die Systemgrenzen oder die Vollständigkeit der Scope-3-Kategorien.",
  },
  {
    q: "Was ist der Unterschied zwischen Validierung und Verifizierung?",
    a: "Die ISO 14064-3 unterscheidet zwischen Verifizierung (Prüfung historischer Daten eines abgeschlossenen Berichts) und Validierung (Prüfung zukunftsbezogener Annahmen, etwa für geplante Reduktionsprojekte). Im deutschen Sprachgebrauch hat sich „Validierung\" für beides etabliert. Wir verwenden den Begriff hier im Sinne des Prüfprozesses nach ISO 14064-3.",
  },
  {
    q: "Wann ist eine Verifizierung sinnvoll?",
    a: "Sinnvoll ist eine Verifizierung immer dann, wenn die Bilanz extern verwendet wird, also vor der ersten CDP-Antwort, vor einer EcoVadis-Bewertung, vor der ESRS-E1-Berichterstattung oder vor der Auslieferung an Kunden im Rahmen von Lieferkettendaten. Besonders wichtig ist sie im ersten Berichtsjahr, weil dieses die Baseline für alle folgenden Jahre festlegt.",
  },
  {
    q: "Wie lange dauert eine CCF-Verifizierung und was kostet sie?",
    a: "Eine Verifizierung mit klar definiertem Umfang dauert typischerweise eine bis vier Wochen. Der Aufwand richtet sich nach dem Detaillierungsgrad der Bilanz, der Anzahl der Standorte und der Komplexität der Scope-3-Kategorien. Eine Festpreis-Indikation erhalten Sie nach einem unverbindlichen Erstgespräch.",
  },
  {
    q: "Welche Unterlagen muss ich bereitstellen?",
    a: "Wir benötigen die berechnete Bilanz mit Quellangaben (typischerweise als Software-Export oder Excel-Datei), die hinterlegten Emissionsfaktoren mit Jahr und Quelle, eine Übersicht der Standorte mit Konsolidierungsansatz sowie eine Kurzbeschreibung der Datenherkunft pro Scope-3-Kategorie. Mehr ist für den Start nicht erforderlich.",
  },
  {
    q: "Bin ich für die Verifizierung an meine ESG-Software gebunden?",
    a: "Nein. Wir arbeiten unabhängig von der eingesetzten Software und prüfen Bilanzen aus ESG-Plattformen mit Carbon-Accounting-Modul, aus eigenen Excel-Modellen oder aus hybriden Setups. Verifiziert werden die methodische Logik und die getätigten Eingaben dahinter, nicht das Tool.",
  },
  {
    q: "Was bekomme ich am Ende einer Verifizierung?",
    a: "Sie erhalten einen übersichtlichen Verifizierungsbericht mit der Bewertung der fünf Prüfdimensionen, einer Liste der identifizierten methodischen Abweichungen samt Korrektur-Empfehlung und einer Einschätzung zur Anschlussfähigkeit an CDP, ESRS E1 und gängige Kundenfragebögen. Auf Wunsch begleiten wir Sie bei der Umsetzung der Korrekturen und der Dokumentation für das Folgejahr.",
  },
];

export default function Verifizierung() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/pexels-goumbik-590020.jpg"
            alt="Verifizierung Hero Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <div className="bg-white/85 rounded-2xl shadow-xl px-8 py-10 max-w-3xl mx-auto border border-white/60 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#81B29A" }}>
              Beratungsleistung gemäß ISO 14064-3
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              Verifizierung von Treibhausgasbilanzen
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6" style={{ color: "#3D405B" }}>
              Methodische Prüfung Ihres Corporate Carbon Footprints, unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO 14064-3.
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
              style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              onClick={() => {
                const target = document.getElementById("intro-section");
                if (target) {
                  const header = document.querySelector("nav");
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {t.learnMore}
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro-section" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12" style={{ color: "#3D405B" }}>
            Jede Bilanz braucht einen zweiten Blick.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="md:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              <p>
                Ein Corporate Carbon Footprint (CCF) ist heute kein internes Dokument mehr. Er fließt in CDP-Antworten, EcoVadis-Bewertungen, ESRS-E1-Berichterstattung und Kundenfragebögen entlang der Lieferkette. Mit der CSRD wird die Nachhaltigkeitsberichterstattung schrittweise prüfungspflichtig, und genau dort werden methodische Entscheidungen aus dem ersten Bilanzjahr zur Herausforderung.
              </p>
              <p>
                Spezialisierte ESG-Software unterstützt bei der Datenerfassung. Was Software jedoch nicht leisten kann, ist die fachliche Beurteilung des spezifischen Unternehmenskontextes zur Treibhausgasbilanzierung. Genau dort entstehen Abweichungen, die im Schnitt mehr als 30&nbsp;% der Bilanz ausmachen können. In Einzelfällen führen sie zu Verdreifachungen der Treibhausgasbilanz.
              </p>
              <p>
                COzwei verifiziert Ihre Bilanz methodisch und unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO 14064-3, basierend auf der Erfahrung aus über 50 verifizierten Bilanzen.
              </p>
            </div>
            <aside className="md:col-span-1">
              <div className="rounded-2xl border border-[#81B29A]/40 bg-[#81B29A]/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: "#81B29A" }}>
                  Erfahrungswerte
                </p>
                <div className="font-extrabold text-5xl leading-none" style={{ color: "#3D405B" }}>50+</div>
                <p className="mt-2 text-sm leading-snug" style={{ color: "#23243a" }}>
                  verifizierte CO₂-Bilanzen aus fünf Sektoren in den vergangenen 12&nbsp;Monaten.
                </p>
                <div className="my-5 h-px w-full bg-[#81B29A]/30" />
                <div className="font-extrabold text-5xl leading-none" style={{ color: "#3D405B" }}>bis 300&nbsp;%</div>
                <p className="mt-2 text-sm leading-snug" style={{ color: "#23243a" }}>
                  methodisch bedingte Abweichung im Einzelfall, entdeckt während der Verifizierung.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              Drei Wege zur belastbaren CO₂-Bilanz.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              Je nach Reifegrad und Berichtspflicht bieten wir drei Verifizierungs-Tiefen an, alle methodisch nach den Prüfgrundsätzen der ISO 14064-3.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <article
                key={tier.level}
                className="flex flex-col rounded-3xl bg-white/80 border border-[#81B29A]/30 backdrop-blur-sm overflow-hidden p-8 transition-all duration-300 hover:shadow-lg hover:border-[#81B29A]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold"
                    style={{ backgroundColor: "#81B29A", color: "white" }}
                  >
                    {tier.level}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#81B29A" }}>
                    Paket {tier.level}
                  </span>
                </div>

                <h3 className="min-h-[3.5rem] text-xl font-extrabold leading-snug" style={{ color: "#3D405B" }}>
                  {tier.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#23243a", opacity: 0.85 }}>
                  {tier.tagline}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[#81B29A]/20 pt-6 text-sm leading-relaxed" style={{ color: "#23243a" }}>
                  {tier.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#81B29A" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-[#81B29A]/20 pt-6">
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "#3D405B", opacity: 0.7 }}>
                    Preis &amp; Dauer
                  </div>
                  <div className="text-sm leading-relaxed font-semibold" style={{ color: "#3D405B" }}>
                    {tier.priceDuration}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg px-5 py-3 text-center text-sm font-bold transition"
                    style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.18)" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
                  >
                    Erstgespräch buchen →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic leading-relaxed" style={{ color: "#3D405B", opacity: 0.7 }}>
            Paket M und L sind methodische Verifizierungen als Beratungsleistung gemäß ISO 14064-3, keine akkreditierte Zertifizierung mit formellem Prüfsiegel.
          </p>
        </div>
      </section>

      {/* Insights CTA */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/10 p-8 md:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
                  Industry Insights · Praxisbeobachtung
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3" style={{ color: "#3D405B" }}>
                  Was aus 50 verifizierten CO₂-Bilanzen gelernt werden kann.
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#23243a" }}>
                  Über 50 Verifizierungen von Treibhausgasbilanzen, fünf Sektoren, und drei wiederkehrende Fehlermuster, die sich unabhängig von Branche und eingesetzter Software zeigen.
                </p>
              </div>
              <a
                href="/insights/ccf-verifizierung"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border-2 border-[#81B29A] bg-white px-6 py-3 text-sm font-bold transition"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                Industry Insights lesen
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              Häufige Fragen
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#23243a", opacity: 0.8 }}>
              Antworten auf die Fragen, die uns in Erstgesprächen am häufigsten gestellt werden.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
                <summary className="cursor-pointer font-bold flex items-center justify-between gap-3" style={{ color: "#3D405B" }}>
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 bg-[#81B29A]/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#23243a" }}>
            Im 30-Minuten-Erstgespräch klären wir Ihren konkreten Bedarf, schätzen Umfang und Dauer der Verifizierung und nennen eine Festpreis-Indikation. Unverbindlich und ohne Vorbereitung.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold transition"
              style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
            >
              30-Min-Erstgespräch buchen
              <span aria-hidden>→</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-4 text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: "#3D405B" }}
            >
              Anfrage per Formular
            </a>
          </div>
          <p className="mt-10 text-xs italic leading-relaxed max-w-3xl mx-auto" style={{ color: "#3D405B", opacity: 0.7 }}>
            Die Inhalte dieser Seite geben unser methodisches Verständnis nach Stand der genannten Standards und Leitlinien zum Zeitpunkt der Veröffentlichung wieder. Regulatorische Rahmenbedingungen, insbesondere im Kontext der CSRD, entwickeln sich dynamisch weiter. Wir empfehlen, die jeweils aktuellen Veröffentlichungen von EFRAG und der Europäischen Kommission zu konsultieren.
          </p>
        </div>
      </section>

      <ContactForm />

      <footer className="bg-gray-100 py-8 px-4 mt-8 text-center text-sm text-gray-600">
        <div className="mb-2">COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull; Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de</div>
        <div className="flex justify-center gap-4 mb-2">
          <a href="/datenschutz" className="hover:underline">{t.privacy}</a>
          <a href="/impressum" className="hover:underline">{t.imprint}</a>
          <a href="https://www.linkedin.com/company/cozwei" target="_blank" rel="noopener noreferrer" className="hover:underline">{t.linkedin}</a>
        </div>
        <div>© {new Date().getFullYear()} COzwei GmbH</div>
      </footer>
    </div>
  );
}
