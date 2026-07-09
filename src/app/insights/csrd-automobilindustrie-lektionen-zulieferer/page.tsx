"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import { StatCallout } from "../../components/InsightCallouts";
import { trackEvent, Events } from "../../analytics";
import { content } from "./content";

// Christian Philippens Outlook-Booking-Link (Meeting-Type spezifisch für den CSRD-Artikel).
const CHRISTIAN_BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/3694425c783b44e5bcf0d6e259d842e2@cozwei.de/meetingtype/aAuh5WyYqU2dB7vJWJdHJA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile";

export default function CsrdAutomotive() {
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
            src="/Pictures/pexels-goumbik-590020.jpg"
            alt="Analyse von Nachhaltigkeits-Kennzahlen am Laptop, Symbolbild für CSRD-Berichterstattung in der Automobilindustrie"
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
          <p
            className="text-lg leading-relaxed mb-6 italic"
            style={{ color: "#3D405B" }}
          >
            {c.intro}
          </p>

          {/* Section 1, Worum es geht */}
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
          <p className="text-lg leading-relaxed mb-3" style={{ color: "#23243a" }}>
            {c.s1P3}
          </p>
          <p
            className="text-xs italic leading-relaxed mb-6"
            style={{ color: "#23243a", opacity: 0.7 }}
          >
            {c.s1Footnote}
          </p>

          {/* Stat callout */}
          <StatCallout number={c.statNumber}>{c.statText}</StatCallout>

          {/* Section 2, Was wir aus der Begleitung wissen */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s2Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s2P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s2P2}
          </p>

          {/* Pull quote (Ice Beige box, per Briefing) */}
          <blockquote
            className="my-10 rounded-2xl p-6 sm:p-8 border-l-4 border-[#F2CC8F]"
            style={{ backgroundColor: "#F4F1DE" }}
          >
            <p
              className="text-lg sm:text-xl italic leading-relaxed"
              style={{ color: "#3D405B" }}
            >
              {c.pullQuote}
            </p>
          </blockquote>

          {/* Section 3, Intro zur Lektionen-Sequenz */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.s3Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.s3P1}
          </p>

          {/* Lektion 1 */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.l1Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l1P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l1P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l1P3}
          </p>

          {/* Lektion 2 */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.l2Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l2P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l2P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l2P3}
          </p>

          {/* Lektion 3 */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.l3Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l3P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l3P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l3P3}
          </p>

          {/* Lektion 4 */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.l4Title}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l4P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l4P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.l4P3}
          </p>

          {/* Abschluss-Sektion */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4"
            style={{ color: "#3D405B" }}
          >
            {c.cTitle}
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.cP1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.cP2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>
            {c.cP3}
          </p>

          {/* Ihr Ansprechpartner, Christian Philippen (kombinierte CTA + Author-Karte, analog CCF-Post) */}
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
                  src="/Pictures/Christian.png"
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
                  href={CHRISTIAN_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(Events.BookingClick, {
                      location: "blog_csrd_author",
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
            className="text-sm italic mt-16"
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
