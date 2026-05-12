"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import ContactForm from "../../components/ContactForm";
import { StatCallout, PullQuote, PatternBox, CtaBox } from "../../components/InsightCallouts";

export default function CcfVerifizierung() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/pexels-rdne-7948058.jpg"
            alt="Datenanalyse am Schreibtisch"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-20 px-4">
          <div className="bg-white/85 rounded-2xl shadow-xl px-8 py-10 max-w-4xl mx-auto border border-white/60 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full uppercase tracking-wider">
                Praxisbeobachtung · CCF-Verifizierung nach ISO 14064
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              Was 50 verifizierte CO₂-Bilanzen über die Grenzen von Software verraten
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#3D405B", opacity: 0.75 }}>
              <span>{t.insightsPost3Date}</span>
              <span>·</span>
              <span>{t.insightsPost3Category}</span>
              <span>·</span>
              <span>Erik Jakob</span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <Link href="/insights" className="text-[#81B29A] font-semibold hover:underline inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t.insightsBackToOverview}
          </Link>
        </div>

        <article className="prose-article">
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Im letzten Jahr habe ich als Bilanzierungsexperte mehr CO₂-Bilanzen validiert als selbst erstellt. Über 50&nbsp;Bilanzen in 12&nbsp;Monaten, aus etlichen Sektoren wie Konsumgüter, Bildung und öffentlicher Sektor. Die Abweichungen folgen fast immer demselben Muster.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Eine Beobachtung aus der Praxis
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Immer mehr Unternehmen berechnen ihren Corporate Carbon Footprint selbst, gestützt auf spezialisierte ESG-Software, eigene Excel-Modelle oder eine Kombination aus beidem. Eine begrüßenswerte Entwicklung, denn nur wer die eigene CO₂-Bilanz versteht, kann beginnen, Maßnahmen abzuleiten.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Was mir in den letzten zwölf Monaten bei der Verifizierung von Bilanzen auffällt: Die Software macht ihren Job. Die Daten sind in der Regel sauber erfasst. Probleme verursachen die methodischen Entscheidungen, die unmittelbar davor getroffen werden. Meist als unscheinbare Auswahlfeld-Klicks in der Software-Oberfläche (z.&nbsp;B. durch die Wahl von Emissionsfaktoren). Die Auswirkungen auf den CCF liegen häufig bei mehr als 30&nbsp;%. In Einzelfällen haben sich die Treibhausgasbilanzen auch verdreifacht.
          </p>

          <StatCallout number="50+">
            validierte CCFs in 12&nbsp;Monaten, aus Sektoren wie Industrie, Konsumgüter, Bildung und öffentlicher Sektor. In nahezu jeder Bilanz habe ich methodische Abweichungen mit Auswirkung auf das Bilanzergebnis gefunden.
          </StatCallout>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Warum diese Schwächen jetzt sichtbar werden
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Ein CCF ist heute kein internes Dokument mehr. Er fließt in CDP-Antworten, EcoVadis-Bewertungen, ESRS-E1-Berichterstattung und Kundenfragebögen entlang der Lieferkette. Mit der CSRD wird die Nachhaltigkeitsberichterstattung schrittweise prüfungspflichtig — und genau dort werden methodische Entscheidungen aus dem ersten Bilanzjahr zur Herausforderung.
          </p>
          <ul className="list-disc list-outside ml-6 space-y-3 text-lg mb-6" style={{ color: "#23243a" }}>
            <li><strong>Vergleichbarkeit über die Jahre:</strong> Wenn sich Berechnungsansätze unbemerkt zwischen Berichtsjahren verschieben, wird Trendanalyse unmöglich. Reduktionsziele lassen sich gegen eine instabile Baseline nicht messen.</li>
            <li><strong>Belastbarkeit gegenüber Prüfung:</strong> Im ersten Jahr nicht dokumentierte Entscheidungen lassen sich später nur mit erheblichem Aufwand rekonstruieren.</li>
            <li><strong>Glaubwürdigkeit gegenüber Stakeholdern:</strong> Ein im Nachhinein korrigierter Corporate Carbon Footprint ist erklärungsbedürftig — auch wenn die Korrektur fachlich richtig ist.</li>
            <li><strong>Tragfähigkeit der Dekarbonisierungsstrategie:</strong> Eine fehlerhafte Verteilung zwischen Scopes oder Kategorien kann dazu führen, dass Investitionen an der falschen Stelle ansetzen.</li>
          </ul>

          <PullQuote author="Erik Jakob">
            Bereits eine Abweichung von über 10–20&nbsp;Prozent in einer materiellen Bilanzposition ist kein Rundungsfehler. Sie verändert die Grundlage, auf der ein Unternehmen seine Klimastrategie aufbaut.
          </PullQuote>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Das Muster: Software ersetzt nicht die methodische Entscheidung
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            ESG-Software mit integrierten Carbon-Accounting-Modulen hat in den vergangenen Jahren erhebliche Fortschritte gemacht. Strukturierte Datenerfassung, hinterlegte Emissionsfaktordatenbanken, automatisierte Berichtsformate: ein klarer Gewinn gegenüber einem internen Excel-Modell oder kostenintensiver externer Dienstleister.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Was Software jedoch nicht leisten kann, ist die fachliche Beurteilung des spezifischen Unternehmenskontextes zur Treibhausgasbilanzierung. Genau dort entstehen die Fehler, die mir am häufigsten begegnen. Quer durch alle Branchen, vom industriellen Mittelständler bis zur Bildungseinrichtung. Es sind selten Tippfehler. Es sind methodische Entscheidungen des Softwarenutzers.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Der COzwei 5-Punkte-Selbst-Verifizierungs-Check
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Aus über 50 Verifizierungen von CO₂-Bilanzen habe ich fünf Prüfdimensionen abgeleitet, an denen sich nahezu jede methodische Schwäche zeigt. Sie folgen den Prüfgrundsätzen der ISO&nbsp;14064-3 (Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz, Transparenz) und sind unabhängig von der eingesetzten Software anwendbar.
          </p>
          <ol className="list-decimal list-outside ml-6 space-y-3 text-lg mb-6" style={{ color: "#23243a" }}>
            <li><strong>Systemgrenzen:</strong> Einheitlicher Konsolidierungsansatz (Operational Control, Financial Control oder Equity Share), konsistent über alle Standorte, auch bei dezentraler Datenerfassung.</li>
            <li><strong>Emissionsfaktoren:</strong> Aktualität, Strommix-Logik (marktbasiert vs. standortbasiert nach GHG Protocol Scope&nbsp;2 Guidance), korrekte Anwendung des Residual Mix bei vorliegenden Herkunftsnachweisen.</li>
            <li><strong>Scope-3-Vollständigkeit:</strong> Saubere Abgrenzung zwischen Purchased Goods (3.1) und Capital Goods (3.2), nachvollziehbare Begründung für ausgeschlossene Kategorien, CDP- und CSRD-tauglich.</li>
            <li><strong>Plausibilität:</strong> Auffällige Werte (z.&nbsp;B. Stromverbrauch pro Quadratmeter, Reisedaten pro Mitarbeitenden) im Abgleich mit Branchen-Benchmarks.</li>
            <li><strong>Dokumentation:</strong> Audit-Trail aller methodischen Entscheidungen, sodass die Bilanz im Folgejahr und unter Prüfung nachvollziehbar bleibt.</li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Drei wiederkehrende Fehler-Muster aus dem Portfolio
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Aus den über 50&nbsp;Verifizierungen lassen sich drei methodische Schwächen herausarbeiten, die unabhängig von Branche und eingesetzter Software regelmäßig auftreten.
          </p>

          <PatternBox number={1} title="Fehlerhafte Dateneintragung beim Gasverbrauch (Scope 1)">
            Mit steigender Anzahl an Standorten und dezentralen Dateninputgebern häufen sich klassische Übertragungsfehler beim Gasverbrauch: falsche Mengenangaben, verschobene Dezimalstellen, vertauschte Einheiten (etwa kWh statt MWh oder Kubikmeter ohne Brennwert-Umrechnung). Ein einzelner solcher Fehler kann eine Bilanzposition um Größenordnungen verschieben. Ohne strukturierte Plausibilitätsprüfung bleibt das in der Software unsichtbar, bis die Bilanz extern geprüft wird.
          </PatternBox>

          <PatternBox number={2} title="Grünstrom marktbasiert vs. standortbasiert (Scope 2)">
            In rund einem Drittel der validierten Bilanzen wurde Scope&nbsp;2 ausschließlich marktbasiert ausgewiesen, mit pauschal angesetztem Grünstrom-Bezug auch für Standorte, deren Herkunftsnachweise nicht im Geltungsjahr lagen oder nicht eindeutig zuordenbar waren. Die parallel erforderliche standortbasierte Sicht (location-based) fehlte vollständig oder war unsauber ermittelt; der Residual-Mix für Standorte ohne Nachweise blieb unberücksichtigt. Die Position lag häufig im zweistelligen Prozentbereich zu niedrig — und mit ihr die Belastbarkeit.
          </PatternBox>

          <PatternBox number={3} title="Pauschale Spend-Based-Methodik (Scope 3.1)">
            Wiederkehrend wurde Scope&nbsp;3.1 vollständig spend-based berechnet, auch für Kategorien, in denen physische Daten verfügbar gewesen wären. Die Position war damit für CDP nicht „A-tauglich" und Reduktionsmaßnahmen ließen sich daraus kaum ableiten. Eine Hybrid-Methodik schafft hier sofort Klarheit.
          </PatternBox>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Was eine unabhängige Verifizierung leistet
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Eine Verifizierung ist keine Neuberechnung. Sie ist eine strukturierte methodische Überprüfung der bestehenden Bilanz entlang der genannten Prüfdimensionen — unabhängig von der eingesetzten Software, orientiert am GHG Protocol und an den Prüfgrundsätzen der ISO&nbsp;14064-3.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Zur Begriffsabgrenzung: Die Norm unterscheidet zwischen Verifizierung (historische Daten, also der Anwendungsfall für einen abgeschlossenen CCF) und Validierung (zukunftsbezogene Annahmen). Im deutschen Sprachgebrauch hat sich „Verifizierung" für beides etabliert; gemeint ist hier der Prüfprozess nach ISO&nbsp;14064-3. Eine methodische Verifizierung als Beratungsleistung, wie wir sie bei COzwei anbieten, hält sich an das inhaltliche Vorgehen der Norm.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Fazit
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Die CO₂-Bilanz des ersten Berichtsjahres ist methodisch der wichtigste, denn er definiert die Grundlage für alle folgenden Jahre. Software ist bei der Erstellung ein wertvolles Werkzeug, sie ersetzt aber nicht vollständig das nötige Fachwissen des Anwenders zur Treibhausgasbilanzierung. In den meisten Fällen lohnt sich ein zweiter, erfahrener Blick, bevor die Zahlen in offizielle Berichte fließen und darauf basierend jährlich weitergearbeitet wird.
          </p>

          <CtaBox eyebrow="Prüfen Sie Ihre Bilanz" title="Der einfache Weg zum nächsten Schritt">
            30-Min-Erstgespräch, wenn Sie Ihre Bilanz konkret prüfen lassen möchten oder eine Orientierung benötigen. Strukturierte Verifizierung mit klarem Umfang, typischerweise zwei bis vier Wochen, Festpreis-Indikation und Ergebnisbericht.
          </CtaBox>

          {/* Author Box */}
          <aside className="mt-16 p-6 sm:p-8 rounded-2xl border border-[#81B29A]/30 bg-[#81B29A]/5 flex flex-col sm:flex-row items-start gap-6">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#81B29A]/30">
              <Image
                src="/Pictures/Erik.png"
                alt="Erik Jakob"
                fill
                sizes="96px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#81B29A" }}>
                {t.insightsAuthorBoxLabel}
              </div>
              <h3 className="text-xl font-extrabold mb-2" style={{ color: "#3D405B" }}>Erik Jakob</h3>
              <p className="text-base leading-relaxed" style={{ color: "#23243a" }}>
                Erik Jakob ist Geschäftsführer der COzwei&nbsp;GmbH, einer auf Klimaschutzthemen spezialisierten Nachhaltigkeitsberatung. Er hat in den letzten sieben Jahren Treibhausgasbilanzen für DAX-Konzerne, Mittelständler, Kleinstunternehmen und kommunale Einrichtungen in ganz Europa erstellt oder verifiziert.
              </p>
            </div>
          </aside>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-2" style={{ color: "#3D405B" }}>
            {t.insightsFaqTitle}
          </h2>
          <p className="text-base mb-6" style={{ color: "#23243a", opacity: 0.8 }}>
            Antworten auf die Fragen, die uns in Erstgesprächen am häufigsten gestellt werden.
          </p>
          <div className="space-y-3">
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Was ist eine CCF-Verifizierung nach ISO&nbsp;14064-3?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Eine Verifizierung einer CO₂-Bilanz nach ISO&nbsp;14064-3 ist eine strukturierte methodische Überprüfung eines Corporate Carbon Footprints anhand der Prinzipien Wesentlichkeit, Vollständigkeit, Genauigkeit, Konsistenz und Transparenz. Sie prüft nicht die einzelnen Datenpunkte, sondern die methodischen Entscheidungen dahinter — etwa die Wahl der Emissionsfaktoren, die Systemgrenzen oder die Vollständigkeit der Scope-3-Kategorien.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Was ist der Unterschied zwischen Validierung und Verifizierung?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Die ISO&nbsp;14064-3 unterscheidet zwischen Verifizierung (Prüfung historischer Daten eines abgeschlossenen Berichts) und Validierung (Prüfung zukunftsbezogener Annahmen, etwa für geplante Reduktionsprojekte). Im deutschen Sprachgebrauch hat sich „Validierung" für beides etabliert. Wir verwenden den Begriff hier im Sinne des Prüfprozesses nach ISO&nbsp;14064-3.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Wann ist eine Verifizierung sinnvoll?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Sinnvoll ist eine Verifizierung immer dann, wenn die Bilanz extern verwendet wird — also vor der ersten CDP-Antwort, vor einer EcoVadis-Bewertung, vor der ESRS-E1-Berichterstattung oder vor der Auslieferung an Kunden im Rahmen von Lieferkettendaten. Besonders wichtig ist sie im ersten Berichtsjahr, weil dieses die Baseline für alle folgenden Jahre festlegt.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Wie lange dauert eine CCF-Verifizierung und was kostet sie?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Eine Verifizierung mit klar definiertem Umfang dauert typischerweise eine bis vier Wochen. Der Aufwand richtet sich nach dem Detaillierungsgrad der Bilanz, der Anzahl der Standorte und der Komplexität der Scope-3-Kategorien. Eine Festpreis-Indikation erhalten Sie nach einem unverbindlichen Erstgespräch.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Welche Unterlagen muss ich bereitstellen?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Wir benötigen die berechnete Bilanz mit Quellangaben (typischerweise als Software-Export oder Excel-Datei), die hinterlegten Emissionsfaktoren mit Jahr und Quelle, eine Übersicht der Standorte mit Konsolidierungsansatz sowie eine Kurzbeschreibung der Datenherkunft pro Scope-3-Kategorie. Mehr ist für den Start nicht erforderlich.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Bin ich für die Verifizierung an meine ESG-Software gebunden?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Nein. Wir arbeiten unabhängig von der eingesetzten Software und prüfen Bilanzen aus ESG-Plattformen mit Carbon-Accounting-Modul, aus eigenen Excel-Modellen oder aus hybriden Setups. Verifiziert werden die methodische Logik und die getätigten Eingaben dahinter, nicht das Tool.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Was bekomme ich am Ende einer Verifizierung?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Sie erhalten einen übersichtlichen Verifizierungsbericht mit der Bewertung der fünf Prüfdimensionen, einer Liste der identifizierten methodischen Abweichungen samt Korrektur-Empfehlung und einer Einschätzung zur Anschlussfähigkeit an CDP, ESRS&nbsp;E1 und gängige Kundenfragebögen. Auf Wunsch begleiten wir Sie bei der Umsetzung der Korrekturen und der Dokumentation für das Folgejahr.
              </p>
            </details>
          </div>

          <p className="text-sm italic mt-12" style={{ color: "#23243a", opacity: 0.7 }}>
            Hinweis: Dieser Beitrag gibt mein methodisches Verständnis nach Stand der genannten Standards und Leitlinien zum Zeitpunkt der Veröffentlichung wieder. Regulatorische Rahmenbedingungen, insbesondere im Kontext der CSRD, entwickeln sich dynamisch weiter. Ich empfehle, die jeweils aktuellen Veröffentlichungen von EFRAG und der Europäischen Kommission zu konsultieren.
          </p>
        </article>
      </main>

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
