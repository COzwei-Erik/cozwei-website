"use client";
import Header from "../Header";
import React from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function ImpressumClient() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#81B29A]/15 via-white to-[#81B29A]/5 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#81B29A" }}
          >
            Rechtliche Angaben
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "#3D405B" }}
          >
            Impressum
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#23243a", opacity: 0.75 }}
          >
            Angaben gemäß § 5 Telemediengesetz (TMG) sowie Hinweise zu Haftung, Urheberrecht und Streitbeilegung.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 sm:py-16">
        {/* Quick info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <InfoCard label="Anschrift">
            <p className="font-semibold mb-1" style={{ color: "#3D405B" }}>
              COzwei GmbH
            </p>
            <p style={{ color: "#23243a" }}>
              Gutenbergstraße 16a
              <br />
              70176 Stuttgart
            </p>
          </InfoCard>

          <InfoCard label="Kontakt">
            <p style={{ color: "#23243a" }}>
              Telefon:{" "}
              <a
                href="tel:+4971112171034"
                className="font-semibold hover:underline"
                style={{ color: "#3D405B" }}
              >
                +49 711 12171034
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:mail@cozwei.de"
                className="font-semibold hover:underline"
                style={{ color: "#3D405B" }}
              >
                mail@cozwei.de
              </a>
            </p>
          </InfoCard>

          <InfoCard label="Vertreten durch">
            <p style={{ color: "#23243a" }}>
              Christian Philippen
              <br />
              Erik Jakob
            </p>
          </InfoCard>

          <InfoCard label="Registereintrag">
            <p style={{ color: "#23243a" }}>
              Handelsregister Stuttgart
              <br />
              HRB 787112
            </p>
          </InfoCard>

          <InfoCard label="Umsatzsteuer-ID">
            <p style={{ color: "#23243a" }}>
              Gemäß § 27 a Umsatzsteuergesetz:{" "}
              <span className="font-semibold" style={{ color: "#3D405B" }}>
                DE358028300
              </span>
            </p>
          </InfoCard>

          <InfoCard label="Verantwortlich nach § 18 Abs. 2 MStV">
            <p style={{ color: "#23243a" }}>
              Erik Jakob
              <br />
              COzwei GmbH
              <br />
              Gutenbergstraße 16a, 70176 Stuttgart
            </p>
          </InfoCard>
        </div>

        {/* Legal text sections */}
        <article className="space-y-8">
          <LegalSection title="Online-Streitbeilegung & Verbraucherschlichtungsstelle">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: "#81B29A" }}
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              erreichen. Unsere E-Mail-Adresse finden Sie oben in diesem Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </LegalSection>

          <LegalSection title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </LegalSection>
        </article>
      </main>

      <footer className="bg-gray-100 py-8 px-4 mt-8 text-center text-sm text-gray-600">
        <div className="mb-2">
          COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull;
          Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de
        </div>
        <div className="flex justify-center gap-4 mb-2">
          <a href="/datenschutz" className="hover:underline">
            {t.privacy}
          </a>
          <a href="/impressum" className="hover:underline">
            {t.imprint}
          </a>
          <a
            href="https://www.linkedin.com/company/cozwei"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t.linkedin}
          </a>
        </div>
        <div>© {new Date().getFullYear()} COzwei GmbH</div>
      </footer>
    </div>
  );
}

function InfoCard({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#81B29A]/30 bg-white/80 backdrop-blur-sm p-6 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <p
        className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
        style={{ color: "#81B29A" }}
      >
        {label}
      </p>
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className="text-xl sm:text-2xl font-extrabold mb-3 pb-3 border-b border-[#81B29A]/30"
        style={{ color: "#3D405B" }}
      >
        {title}
      </h2>
      <div
        className="space-y-4 text-base leading-relaxed"
        style={{ color: "#23243a" }}
      >
        {children}
      </div>
    </section>
  );
}
