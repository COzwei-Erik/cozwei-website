"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import { StatCallout, PullQuote } from "../../components/InsightCallouts";
import { trackEvent, Events } from "../../analytics";
import { content } from "./content";

// Dominik Engers Microsoft-Bookings-Link für 30-Min-Erstgespräche zu BAFA/EEW.
const DOMINIK_BOOKING_URL =
  "https://bookings.cloud.microsoft/bookwithme/user/3dc8933450b14711a1e4e196969c5122%40cozwei.de/meetingtype/A4h2jsF2HUqE1ZvWKTxYOQ2?anonymous&ismsaljsauthenabled";

// Kleine, CI-konforme Inline-Tabelle.
function InsightsTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-[#81B29A]/20 bg-white/70">
      <table className="min-w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-[#81B29A]/10">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold"
                style={{ color: "#3D405B" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-[#81B29A]/15 align-top">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 leading-relaxed${
                    ci === 0 ? " font-semibold" : ""
                  }`}
                  style={{ color: "#23243a" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BafaModul4Client() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const c = content[language] || content.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/bafa-modul-4-hero.png"
            alt="Druckereimitarbeiter vor einer industriellen Bogenoffset-Druckmaschine, Symbolbild für BAFA Modul 4 Förderung"
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
                {c.heroKicker}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: "#3D405B" }}
            >
              {c.heroTitle}
            </h1>
            <div
              className="flex items-center justify-center gap-4 text-sm flex-wrap"
              style={{ color: "#3D405B", opacity: 0.75 }}
            >
              <span>{c.metaDate}</span>
              <span>·</span>
              <span>{c.metaCategory}</span>
              <span>·</span>
              <span>{c.authorName}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <Link
            href="/insights"
            className="text-[#81B29A] font-semibold hover:underline inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.insightsBackToOverview}
          </Link>
        </div>

        <article className="prose-article">
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.intro}
          </p>

          {/* Section 1, Ausgangslage */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s1Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s1P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s1P2}
          </p>

          {/* Section 2, Modul 4 Premium */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s2Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s2P1}
          </p>
          <ul
            className="list-disc list-outside ml-6 space-y-3 text-lg mb-6"
            style={{ color: "#23243a" }}
          >
            <li>
              <strong>{c.s2BulletBasisLabel}</strong>
              {c.s2BulletBasis}
            </li>
            <li>
              <strong>{c.s2BulletPremiumLabel}</strong>
              {c.s2BulletPremium}
            </li>
          </ul>
          <h3
            className="text-xl sm:text-2xl font-bold mt-8 mb-3"
            style={{ color: "#3D405B" }}
          >
            {c.s2TableTitle}
          </h3>
          <InsightsTable headers={c.s2Table.headers} rows={c.s2Table.rows} />
          <p
            className="text-base italic leading-relaxed mb-6"
            style={{ color: "#23243a", opacity: 0.8 }}
          >
            {c.s2TableFooter}
          </p>

          {/* Section 3, Referenzmaschine */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s3Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s3P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            <strong>{c.s3WegALabel}</strong>
            {c.s3WegA}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            <strong>{c.s3WegBLabel}</strong>
            {c.s3WegB}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s3P2}
          </p>

          {/* Section 4, Beispielrechnung im Detail */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s4Title}
          </h2>
          <h3
            className="text-xl font-bold mt-8 mb-3"
            style={{ color: "#3D405B" }}
          >
            {c.s4Step1Label}
          </h3>
          <InsightsTable headers={c.s4Step1Table.headers} rows={c.s4Step1Table.rows} />
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s4Step1After}
          </p>

          <h3
            className="text-xl font-bold mt-8 mb-3"
            style={{ color: "#3D405B" }}
          >
            {c.s4Step2Label}
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s4Step2P}
          </p>
          <InsightsTable headers={c.s4Step2Table.headers} rows={c.s4Step2Table.rows} />

          <h3
            className="text-xl font-bold mt-8 mb-3"
            style={{ color: "#3D405B" }}
          >
            {c.s4Step3Label}
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s4Step3P}
          </p>

          <h3
            className="text-xl font-bold mt-8 mb-3"
            style={{ color: "#3D405B" }}
          >
            {c.s4Step4Label}
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s4Step4P}
          </p>

          {/* Stat callout */}
          <StatCallout number={c.statNumber}>{c.statText}</StatCallout>

          {/* Section 5, Fehlerquellen */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s5Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s5Intro}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            <strong>{c.s5E1Label}</strong>
            {c.s5E1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            <strong>{c.s5E2Label}</strong>
            {c.s5E2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            <strong>{c.s5E3Label}</strong>
            {c.s5E3}
          </p>

          {/* Section 6, Voranfrage */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s6Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s6P}
          </p>

          {/* Section 7, Zeitablauf */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s7Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s7P1}
          </p>
          <InsightsTable headers={c.s7Table.headers} rows={c.s7Table.rows} />
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s7P2}
          </p>

          {/* Pull quote */}
          <PullQuote>{c.pullQuote}</PullQuote>

          {/* Section 8, Fazit */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s8Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s8P}
          </p>

          {/* Ihr Ansprechpartner, Dominik (kombinierte CTA + Author-Karte, analog CCF-Post) */}
          <section id="kontakt" className="mt-16 mb-12">
            <div className="text-center mb-8">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#81B29A" }}
              >
                {c.authorSectionLabel}
              </p>
              <h2
                className="text-2xl sm:text-3xl font-extrabold"
                style={{ color: "#3D405B" }}
              >
                {c.authorSectionTitle}
              </h2>
            </div>

            <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/5 p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#81B29A]/30 mx-auto md:mx-0">
                <Image
                  src="/Pictures/Dominik_V2.png"
                  alt={`${c.authorName}, ${c.authorRole} bei COzwei`}
                  fill
                  sizes="144px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-1"
                  style={{ color: "#3D405B" }}
                >
                  {c.authorName}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#81B29A" }}
                >
                  {c.authorRole}
                </p>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: "#23243a" }}
                >
                  {c.authorBio}
                </p>
                <a
                  href={DOMINIK_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(Events.BookingClick, {
                      location: "blog_bafa_author",
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition text-base"
                  style={{
                    backgroundColor: "#81B29A",
                    color: "white",
                    boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#6fa18a")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#81B29A")
                  }
                >
                  {c.authorCtaLabel} →
                </a>
                <p
                  className="text-sm mt-3 italic"
                  style={{ color: "#23243a", opacity: 0.7 }}
                >
                  {c.authorCtaDesc}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-16 mb-2"
            style={{ color: "#3D405B" }}
          >
            {t.insightsFaqTitle}
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "#23243a", opacity: 0.8 }}
          >
            {c.faqIntro}
          </p>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4"
              >
                <summary
                  className="cursor-pointer font-bold flex items-center justify-between"
                  style={{ color: "#3D405B" }}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p
                  className="text-base leading-relaxed mt-3"
                  style={{ color: "#23243a" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <p
            className="text-sm italic mt-12"
            style={{ color: "#23243a", opacity: 0.7 }}
          >
            {c.disclaimer}
          </p>
        </article>
      </main>

      <footer className="bg-gray-100 py-8 px-4 mt-8 text-center text-sm text-gray-600">
        <div className="mb-2">
          COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull; Telefon:
          +49 711 12171034 &bull; E-Mail: mail@cozwei.de
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
