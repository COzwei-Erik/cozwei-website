"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import ContactForm from "../../components/ContactForm";
import { StatCallout, PullQuote, CtaBox } from "../../components/InsightCallouts";

export default function NkiFoerderung() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/image copy 6.png"
            alt="Klimaschutzkonzept Hochschule"
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
                Praxisbeobachtung · NKI-Förderung / Klimaschutzkonzepte
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              NKI-Förderungen erfolgreich umsetzen: Unsere Erfahrungen aus abgeschlossenen Klimaschutzprojekten
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#3D405B", opacity: 0.75 }}>
              <span>{t.insightsPost2Date}</span>
              <span>·</span>
              <span>{t.insightsPost2Category}</span>
              <span>·</span>
              <span>Marie Bruns</span>
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
            Ein Klimaschutzkonzept kann der Startpunkt einer echten Transformation sein. Oder es kann im Aktenordner enden. Den Unterschied machen drei organisatorische Themen, die wir aus der erfolgreichen Umsetzung von über zehn geförderten NKI-Projekten kennen.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Worum es bei geförderten Klimaschutzkonzepten der NKI geht
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Die Anforderungen an den Klimaschutz steigen, gleichzeitig wächst der Druck auf öffentliche und gemeinnützige Einrichtungen, konkrete Maßnahmen umzusetzen und Fördermittel sinnvoll einzusetzen. Genau hier setzt die Nationale Klimaschutzinitiative (NKI) des Bundes an: Sie unterstützt Kommunen sowie zahlreiche Einrichtungen aus Bildung, Gesundheit, Pflege, Kultur und Religionsgemeinschaften bei der Erstellung integrierter Klimaschutzkonzepte.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Verwaltet werden die NKI-Förderprogramme durch die Zukunft&nbsp;– Umwelt&nbsp;– Gesellschaft (ZUG)&nbsp;gGmbH. Die zentrale Förderlinie für unsere Zielgruppen ist die Kommunalrichtlinie des BMUV.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Besonders spannend: Viele Einrichtungen wissen gar nicht, dass sie grundsätzlich antragsberechtigt sind. Dazu zählen unter anderem kommunale Betriebe, Schulen, Hochschulen, Krankenhäuser, kirchliche Träger, soziale Einrichtungen sowie Religionsgemeinschaften mit Körperschaftsstatus. Gerade diese Vielfalt macht die Projekte anspruchsvoll, und genau darin liegt unsere Stärke.
          </p>

          <StatCallout number="10+">
            abgeschlossene NKI-Klimaschutzkonzepte in den letzten zwei Jahren, mit Schwerpunkt im Hochschulbereich.
          </StatCallout>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Erfahrung, die über klassische Fördermittelberatung hinausgeht
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Wir begleiten NKI-Projekte nicht nur inhaltlich, sondern unterstützen Einrichtungen auch strategisch und operativ bei der Entwicklung tragfähiger Klimaschutzmaßnahmen. Besonders umfangreiche Erfahrungen konnten wir dabei im Hochschulbereich sammeln, wo komplexe Entscheidungswege, unterschiedliche Stakeholder und anspruchsvolle Verwaltungsstrukturen zum Alltag gehören.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Gerade diese Erfahrungen sind für die Umsetzung von Klimaschutzkonzepten besonders wertvoll, denn viele Herausforderungen ähneln sich in anderen Organisationsformen wie Schulen, Krankenhäusern oder kirchlichen Einrichtungen. Unterschiedliche Zuständigkeiten, dezentrale Strukturen, Mittelengpässe und vielfältige Interessen müssen frühzeitig berücksichtigt werden, damit Maßnahmen später tatsächlich umgesetzt werden können, oder zumindest eine Chance darauf haben.
          </p>

          <PullQuote>
            Erfolgreiche Klimaschutzkonzepte scheitern selten an der Technik. Sie scheitern an fehlender Abstimmung, unklaren Verantwortlichkeiten oder unrealistischen Maßnahmenplanungen.
          </PullQuote>

          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Deshalb legen wir besonderen Wert darauf, organisatorische Rahmenbedingungen von Beginn an mitzudenken und daraus praxisnahe, förderfähige und umsetzbare Lösungen zu entwickeln. Durch unsere Erfahrung im Hochschulumfeld bringen wir das notwendige Verständnis für komplexe Organisationsstrukturen mit. Diese Grundlage lässt sich auch erfolgreich auf Schulen, Krankenhäuser, Kirchen und andere öffentliche oder gemeinnützige Einrichtungen übertragen.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Die drei NKI-Erfolgsfaktoren
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Aus unseren abgeschlossenen NKI-Projekten lassen sich drei Erfolgsfaktoren ableiten, die in der Praxis immer wieder den Unterschied machen, unabhängig davon, ob es sich um eine Hochschule, eine kirchliche Einrichtung oder ein Krankenhaus handelt.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>
            1. Excel, BISKO oder Landes-Tool stoßen immer an Grenzen
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Viele Einrichtungen starten mit vorhandenen Energie- oder Verbrauchstabellen der Länder oder Trägerorganisationen. In der Praxis zeigt sich jedoch schnell: Für eine belastbare BISKO-konforme Treibhausgasbilanz sind die Daten häufig nicht ausreichend strukturiert oder nicht konsistent genug.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            BISKO (Bilanzierungs-Systematik Kommunal) ist das in der Umsetzung von NKI-Projekten etablierte Excel-Tool für Kommunen und vergleichbare Einrichtungen. Es wurde vom ifeu (Institut für Energie- und Umweltforschung Heidelberg) gemeinsam mit dem Klima-Bündnis im Rahmen eines NKI-Projekts entwickelt und legt fest, welche Energieträger zu erfassen sind, welche Emissionsfaktoren anzusetzen sind und wie die Bilanz zu konsolidieren ist. Für leitungsgebundene Energieträger ist die Verwendung von Primärdaten verbindlich.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Wir wissen aus Erfahrung, welche Daten als Eingabe wirklich in welcher Form benötigt werden, wie sie sinnvoll aufbereitet werden und wie sich daraus eine förderfähige Bilanz entwickeln lässt, ohne monatelange Datennachforderungen.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>
            2. Die Maßnahmen ähneln sich, die Umsetzung aber nie
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            LED-Umrüstung, Heizungsoptimierung, PV-Ausbau, Mobilitätskonzepte oder Sensibilisierung der Nutzerinnen und Nutzer: Die Maßnahmenkataloge vieler Einrichtungen ähneln sich stark. Der Unterschied liegt jedoch in der praktischen Umsetzbarkeit.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Eine Maßnahme, die in einer Hochschule problemlos funktioniert, kann in einer anderen Einrichtung völlig unmöglich sein oder in einem Krankenhaus aufgrund regulatorischer Anforderungen deutlich komplexer werden. In kirchlichen Strukturen wiederum sind Abstimmungen oft dezentral organisiert. Deshalb entwickeln wir keine Standardkonzepte, sondern Lösungen, die zur jeweiligen Organisation passen. Unser Spektrum reicht von Treibhausgasbilanzen mit 800&nbsp;t CO₂e bis hin zu 130.000&nbsp;t CO₂e pro Jahr — und wir haben bereits Maßnahmen in jedem Feld entwickelt und ihre Umsetzung begleitet.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>
            3. Die Umsetzungshoheit liegt oft nicht bei der Einrichtung selbst
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Ein entscheidender Punkt, der in vielen Förderprojekten unterschätzt wird: Die Einrichtung selbst entscheidet häufig gar nicht selbstständig über Gebäude, Investitionen oder technische Maßnahmen.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Gerade bei Schulen, Hochschulen oder Krankenhäusern liegen Zuständigkeiten häufig bei Trägern, Bauämtern oder externen Betreibergesellschaften. Wer diese Strukturen nicht versteht, plant Maßnahmen, die später nicht umgesetzt werden können. Unsere Erfahrung hilft dabei, diese Stakeholder frühzeitig einzubinden und realistische Umsetzungswege zu entwickeln — auch wenn das bei dem ein oder anderen Klimaschutzmanager regelmäßig für Frustrationen sorgt.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>
            Warum Klimaschutzkonzepte für Einrichtungen heute entscheidend sind
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Die NKI-Förderung bietet enormes Potenzial, nicht nur finanziell, sondern auch strategisch. Ein professionelles Klimaschutzkonzept schafft Transparenz, priorisiert Investitionen, ermöglicht langfristige Transformationsprozesse und kann zur Reputationssteigerung beitragen. Gleichzeitig steigen die Anforderungen an Nachweisführung, Datenqualität und Umsetzbarkeit kontinuierlich.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Deshalb braucht es Partner, die sowohl die Anforderungen der Fördermittelgeber als auch die Realität öffentlicher und gemeinnütziger Einrichtungen verstehen. Genau diese Verbindung aus Förderkompetenz, Praxiserfahrung und sektorenspezifischem Know-how bringen wir mit.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            Ob Hochschule, kirchlicher Träger, Krankenhaus oder Schule: Wir wissen, wie NKI-Projekte erfolgreich beantragt, strukturiert und umgesetzt werden — und worauf es in der Praxis wirklich ankommt.
          </p>

          <CtaBox title="30-Minuten-Erstgespräch. Unverbindlich.">
            Wir gehen Ihr NKI-Vorhaben gemeinsam durch und identifizieren, an welchen der drei Erfolgsfaktoren Sie bereits stehen und wo Nachholbedarf besteht — bevor der Antrag gestellt wird. Auf Wunsch nehmen wir auch an Ihren Ausschreibungen teil.
          </CtaBox>

          {/* Author Box */}
          <aside className="mt-16 p-6 sm:p-8 rounded-2xl border border-[#81B29A]/30 bg-[#81B29A]/5 flex flex-col sm:flex-row items-start gap-6">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#81B29A]/30">
              <Image
                src="/Pictures/Marie_Bruns.png"
                alt="Marie Bruns"
                fill
                sizes="96px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#81B29A" }}>
                {t.insightsAuthorBoxLabelF}
              </div>
              <h3 className="text-xl font-extrabold mb-2" style={{ color: "#3D405B" }}>Marie Bruns</h3>
              <p className="text-base leading-relaxed" style={{ color: "#23243a" }}>
                Marie Bruns ist Energieberaterin und betreut bei der COzwei&nbsp;GmbH neben Unternehmenskunden schwerpunktmäßig Klimaschutzkonzepte der NKI. Sie trägt als Umweltingenieurin der RWTH Aachen zudem maßgeblich zur Bewertung von Maßnahmen zur CO₂-Reduktion bei.
              </p>
            </div>
          </aside>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-2" style={{ color: "#3D405B" }}>
            {t.insightsFaqTitle}
          </h2>
          <p className="text-base mb-6" style={{ color: "#23243a", opacity: 0.8 }}>
            Antworten auf die Fragen, die uns in NKI-Erstgesprächen am häufigsten gestellt werden.
          </p>
          <div className="space-y-3">
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Wer ist für die NKI-Kommunalrichtlinie antragsberechtigt?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Antragsberechtigt sind Kommunen, kommunale Betriebe sowie öffentliche, gemeinnützige, kirchliche und religiöse Einrichtungen, darunter Schulen, Hochschulen, Krankenhäuser, kirchliche Träger, soziale Einrichtungen und Religionsgemeinschaften mit Körperschaftsstatus. Die jeweils aktuelle Kommunalrichtlinie des BMUV definiert die zugelassenen Antragsteller pro Förderaufruf.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Was bedeutet „BISKO-konform"?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                BISKO steht für Bilanzierungs-Systematik Kommunal, das vom ifeu (Institut für Energie- und Umweltforschung Heidelberg) gemeinsam mit dem Klima-Bündnis im Rahmen eines NKI-Projekts entwickelte territoriale Bilanzierungssystem. Es legt fest, welche Energieträger zu erfassen sind, welche Emissionsfaktoren anzusetzen sind und wie konsolidiert wird. Für leitungsgebundene Energieträger ist die Verwendung von Primärdaten verbindlich; für nicht-leitungsgebundene Energieträger sind Hochrechnungen zulässig.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Wer verwaltet die NKI-Förderung?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Die NKI-Förderprogramme werden weitgehend durch die Zukunft&nbsp;– Umwelt&nbsp;– Gesellschaft (ZUG)&nbsp;gGmbH als Projektträger umgesetzt. Förderaufrufe und Richtlinien werden auf klimaschutz.de und z-u-g.org veröffentlicht. Die jeweils aktuelle Kommunalrichtlinie und die ergänzenden Förderaufrufe sind verbindlich.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Welche Maßnahmen werden über die Kommunalrichtlinie typischerweise gefördert?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Die Kommunalrichtlinie deckt ein breites Spektrum ab: von der Erstellung von Klimaschutzkonzepten und der Förderung von Klimaschutzmanagement-Personalstellen über investive Maßnahmen in Mobilität, Abfall- und Abwasserwirtschaft sowie Trinkwasserversorgung. Die konkrete Förderfähigkeit hängt vom jeweiligen Förderaufruf ab.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Welche Unterlagen brauchen wir für den Start?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Für die Vorprüfung benötigen wir eine Übersicht der relevanten Liegenschaften und Einheiten, vorhandene Energie- und Verbrauchsdaten (Strom, Wärme, Mobilität), eine grobe Skizze der Trägerstruktur und Zuständigkeiten (Bauamt, Betreibergesellschaften, Trägerorganisation) sowie, sofern vorhanden, die aktuelle Strategie- oder Leitbilddokumentation.
              </p>
            </details>
            <details className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                <span>Sind private gemeinnützige Hochschulen und kirchliche Träger antragsberechtigt?</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>
                Öffentliche, gemeinnützige und religiöse Bildungseinrichtungen sowie Hochschulen und ihre Träger sind in der Regel antragsberechtigt. Religionsgemeinschaften mit Körperschaftsstatus und kirchliche Träger fallen ebenfalls in den Kreis der Antragsberechtigten. Die jeweils aktuelle Förderrichtlinie ist verbindlich; wir prüfen die Antragsberechtigung im Erstgespräch konkret für Ihren Fall.
              </p>
            </details>
          </div>

          <p className="text-sm italic mt-12" style={{ color: "#23243a", opacity: 0.7 }}>
            Hinweis: Dieser Beitrag gibt unsere Praxiserfahrung sowie den Stand der genannten Förderprogramme wieder. Die jeweils aktuelle NKI-Kommunalrichtlinie und ergänzende Förderaufrufe sind verbindlich. Vor Antragstellung empfehlen wir, den aktuellen Stand bei BMUV&nbsp;/&nbsp;ZUG&nbsp;gGmbH zu prüfen.
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
