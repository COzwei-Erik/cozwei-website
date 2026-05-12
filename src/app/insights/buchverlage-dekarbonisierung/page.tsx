"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import ContactForm from "../../components/ContactForm";
import { StatCallout, PullQuote, CtaBox } from "../../components/InsightCallouts";

export default function BuchverlageDekarbonisierung() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/pexels-marcin-jozwiak-199600-3641377.jpg"
            alt="Industrieanlage Papierproduktion"
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
                Praxisbeobachtung · Buchverlage / Dekarbonisierung
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              Eine Tonne Papier aus Frischfasern, eine Tonne Primärstahl: gleicher Energieverbrauch, ganz andere Geschichte
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#3D405B", opacity: 0.75 }}>
              <span>{t.insightsPost1Date}</span>
              <span>·</span>
              <span>{t.insightsPost1Category}</span>
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
            Wenn die meisten an energieintensive Industrien denken, kommen ihnen Stahl- und Chemiewerke in den Sinn. Nur wenige würden vermuten, dass das Papier auf ihrem Schreibtisch oder das Buch in ihrem Regal eine ähnliche Energiebilanz aufweist. Für Verlage, die Nachhaltigkeitsvorschriften und Kundenerwartungen ernst nehmen, ist das mehr als eine Randnotiz. Es ist ein strategischer Weckruf.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Eine Branche, die sich vor aller Augen verbirgt
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Deutschland ist mit einer Jahresproduktion von rund 21,6&nbsp;Millionen Tonnen der viertgrößte Papierproduzent der Welt. Hinter dieser Produktionsleistung verbirgt sich ein erheblicher ökologischer Fußabdruck. Die deutsche Papier- und Zellstoffindustrie verursachte 2022 etwa 11,8&nbsp;Millionen Tonnen CO₂-Äquivalente. Das entspricht rund 7&nbsp;Prozent der Emissionen des Industriesektors, der wiederum etwa 22&nbsp;Prozent der gesamten Treibhausgasemissionen Deutschlands ausmacht.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Was den Energieverbrauch angeht, rangiert die Papierindustrie als fünftgrößter industrieller Energieverbraucher weltweit. Damit gehört Papier neben Stahl, Zement und Chemie eindeutig zur Kategorie der energieintensiven Grundstoffindustrien.
          </p>

          <StatCallout number="45 %">
            Emissionsreduktion bei einem unserer Verlagskunden zwischen 2022 und 2025. Erreicht durch konsequent angewandte Dekarbonisierungs-Hebel und Bilanzierung Jahr für Jahr.
          </StatCallout>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Die Dekarbonisierung ist in greifbarer Nähe
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Die gute Nachricht: Die Verlags- und Druckindustrie verfügt über praktikable und bewährte Wege, ihren CO₂-Fußabdruck zu verringern, ohne Abstriche bei Qualität oder Produktionsmenge. Zwei Hebel stechen dabei besonders hervor.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Die Umstellung von Frischfaser auf Recyclingpapier ist die Maßnahme mit der größten Wirkung. Die Verwendung von 100&nbsp;Prozent Recyclingpapier spart im Vergleich zur Frischfaserproduktion 78&nbsp;Prozent Wasser, 68&nbsp;Prozent Energie und 15&nbsp;Prozent CO₂-Emissionen ein. Für Verlage, die große Druckauflagen verwalten, bedeutet das eine direkte und messbare Reduzierung der Emissionen im Scope&nbsp;3.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Auch die Investitionen in energieeffiziente Druckmaschinen senken den Energiebedarf in jeder Produktionsphase und reduzieren somit die Scope-1- und Scope-2-Emissionen auf Druckereiebene.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Von Tonnen zum Bücherregal
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Abstrakte Tonnenzahlen sind oft schwer zu begreifen. Laut Öko-Institut entstehen bei der Produktion eines 200-Seiten-Buchs aus Frischfaserpapier rund 1,1&nbsp;Kilogramm CO₂-Äquivalente. Wird stattdessen Recyclingpapier eingesetzt, sind es nur noch etwa 0,9&nbsp;Kilogramm CO₂-Äquivalente pro Buch.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Auch unsere eigenen Berechnungen bestätigen diesen Bereich. Für einen Verlagskunden haben wir auf Basis der Gesamtemissionen (market-based) und der Gesamtanzahl der verkauften Bücher gerechnet. Das Ergebnis: 1,32&nbsp;Kilogramm CO₂-Äquivalente pro durchschnittliches Buch im ersten bilanzierten Jahr. Durch die Umsetzung gezielter Dekarbonisierungs-Maßnahmen liegen die aktuellen Emissionen bei 0,97&nbsp;Kilogramm CO₂-Äquivalenten pro Buch.
          </p>

          <PullQuote>
            Aus 1,32&nbsp;Kilogramm CO₂ pro Buch wurden in drei Jahren 0,97&nbsp;Kilogramm. Das sind 26&nbsp;Prozent weniger pro Buch und 45&nbsp;Prozent weniger an Gesamtemissionen.
          </PullQuote>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Gemeinsam dekarbonisieren für eine zukunftsfähige Verlagsbranche
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Wir unterstützen Buchverlage dabei, ihre Emissionen systematisch und nachhaltig zu reduzieren. Bei einem unserer Kunden konnten wir eine Emissionsreduktion von 45&nbsp;Prozent zwischen der ersten Bilanz für das Jahr 2022 und der aktuellsten Bilanz für 2025 erreichen. Möglich war das, weil wir die Bilanz nicht als Pflicht, sondern als strategisches Steuerungsinstrument verstehen.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Unsere Ergebnisse zeigen: Wir haben das Know-how, um die Verlagsdekarbonisierung praktisch und messbar voranzubringen. Sprechen Sie uns an. Wir zeigen Ihnen, was in Ihrem Unternehmen möglich ist.
          </p>

          <CtaBox title="30-Minuten-Erstgespräch. Unverbindlich.">
            Wir gehen Ihre Verlags-Klimabilanz gemeinsam durch und identifizieren, wo die größten Hebel für Reduktion in Ihrem Fall liegen.
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
                Erik Jakob ist einer der beiden Geschäftsführer der COzwei GmbH, einer auf Klimaschutzthemen spezialisierten Unternehmensberatung. Er begleitet Buchverlage seit mehreren Jahren bei der Erstellung von Klimabilanzen und der konkreten Umsetzung von Dekarbonisierungs-Maßnahmen.
              </p>
            </div>
          </aside>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-2" style={{ color: "#3D405B" }}>
            {t.insightsFaqTitle}
          </h2>
          <p className="text-base mb-6" style={{ color: "#23243a", opacity: 0.8 }}>
            Antworten auf die Fragen, die uns in Verlagsgesprächen am häufigsten gestellt werden.
          </p>
          <div className="space-y-3">
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Wie viel CO₂ verursacht ein einzelnes Buch wirklich?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Die Größenordnung liegt bei rund 1&nbsp;Kilogramm CO₂-Äquivalenten pro 200-Seiten-Buch aus Frischfaserpapier (Öko-Institut). Mit Recyclingpapier sinkt der Wert auf etwa 0,9&nbsp;Kilogramm. In unseren eigenen Berechnungen für einen Verlagskunden lagen die Werte zwischen 1,32&nbsp;Kilogramm (Ausgangsbilanz) und 0,97&nbsp;Kilogramm (aktuelle Bilanz) pro Buch. Die exakte Zahl hängt von Papierqualität, Druckverfahren, Auflagenhöhe und Vertriebsweg ab.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Welche Hebel haben den größten Effekt für Buchverlage?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Den größten Effekt hat die Umstellung von Frischfaser- auf Recyclingpapier (Scope&nbsp;3.1). Sie spart rund 78&nbsp;Prozent Wasser, 68&nbsp;Prozent Energie und 15&nbsp;Prozent CO₂-Emissionen pro Tonne. An zweiter Stelle stehen energieeffiziente Druckmaschinen und Prozessoptimierungen auf Druckereiebene (Scope&nbsp;1 und 2). Weitere Hebel ergeben sich aus Auflagen-, Lager- und Logistikoptimierung.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Lohnt sich ein Klimabilanz-Aufbau auch für mittelgroße Verlage?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Ja. Auch wenn ein Verlag nicht direkt CSRD-pflichtig ist, fordern Vertriebspartner, Buchhandelsketten und institutionelle Kunden zunehmend belastbare Emissionsangaben entlang der Lieferkette. Eine saubere Klimabilanz schafft die Grundlage, um diese Anforderungen zu bedienen und die eigene Marktposition gegenüber nachhaltigkeitsorientierten Kunden zu stärken.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Was sind realistische Reduktionspfade in den ersten Jahren?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Bei unserem oben genannten Verlagskunden konnten wir innerhalb von drei Jahren rund 45&nbsp;Prozent Reduktion bei den Gesamtemissionen erreichen. Solche Werte sind kein Selbstläufer, aber bei konsequenter Umsetzung der zwei Haupthebel realistisch. Eine Festpreis-Indikation und einen Vorschlag für den Reduktionspfad in Ihrem Unternehmen erhalten Sie nach dem 30-Minuten-Erstgespräch.
              </p>
            </details>
          </div>

          <p className="text-sm italic mt-12" style={{ color: "#23243a", opacity: 0.7 }}>
            Hinweis: Die Kunden-Werte (1,32&nbsp;/&nbsp;0,97&nbsp;Kilogramm CO₂ pro Buch, 45&nbsp;Prozent Reduktion) stammen aus unseren eigenen Berechnungen auf Basis market-based Scope-2-Emissionen und gelten projektspezifisch.
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
