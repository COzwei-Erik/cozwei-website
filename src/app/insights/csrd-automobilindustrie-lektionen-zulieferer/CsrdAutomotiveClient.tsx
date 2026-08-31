"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import { trackEvent, Events } from "../../analytics";
import { content } from "./content";

// Christian Philippens Outlook-Booking-Link (Meeting-Type spezifisch für den CSRD-Artikel).
const CHRISTIAN_BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/3694425c783b44e5bcf0d6e259d842e2@cozwei.de/meetingtype/aAuh5WyYqU2dB7vJWJdHJA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile";

// Design tokens aus dem Visual-Improvements-Brief V1 (07/2026).
// Slate/Sage/Beige führen den Artikel, Amber nur als Fein-Akzent.
const TOKEN = {
  slate: "#3D405B",
  sage: "#81B29A",
  sage50: "#EAF1EC",
  beige: "#F4F1DE",
  beige70: "#FBF9EF",
  ink: "#1A1A1A",
  muted: "#6B6B6B",
  rule: "#E2DDD0",
} as const;

// Section-H2 mit Sage-Underline (Ersatz für die früheren nackten H2 im Artikel).
function ArticleH2({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-extrabold mt-16 mb-3 scroll-mt-24"
      style={{ color: TOKEN.slate }}
    >
      {children}
      <span
        aria-hidden
        className="block mt-3 h-1 rounded-full"
        style={{ width: "56px", backgroundColor: TOKEN.sage }}
      />
    </h2>
  );
}

// Merksatz-Karte pro Lektion (sage-50 Background, sage Border-Left).
function Merksatz({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      className="my-6 rounded-lg px-6 sm:px-7 py-5"
      style={{
        backgroundColor: TOKEN.sage50,
        borderLeft: `6px solid ${TOKEN.sage}`,
      }}
    >
      <div
        className="text-xs font-bold uppercase mb-1"
        style={{ color: TOKEN.slate, letterSpacing: "0.12em" }}
      >
        {label}
      </div>
      <p
        className="text-lg sm:text-xl leading-snug font-semibold m-0"
        style={{ color: TOKEN.slate }}
      >
        {children}
      </p>
    </aside>
  );
}

// Stat-Tile mit optionaler Quelle. Ersetzt den früheren generischen StatCallout.
function StatTile({
  number,
  text,
  source,
}: {
  number: string;
  text: string;
  source?: string;
}) {
  return (
    <figure
      className="my-10 rounded-lg grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-[auto_1fr] items-center px-6 sm:px-10 py-6 sm:py-8"
      style={{
        backgroundColor: "#FFFFFF",
        border: `1px solid ${TOKEN.rule}`,
        borderLeft: `6px solid ${TOKEN.sage}`,
      }}
    >
      <div
        className="text-5xl sm:text-6xl font-extrabold leading-none whitespace-nowrap"
        style={{ color: TOKEN.slate, letterSpacing: "-0.02em" }}
      >
        {number}
      </div>
      <figcaption
        className="text-base sm:text-lg leading-snug"
        style={{ color: TOKEN.ink }}
      >
        {text}
        {source && (
          <span
            className="block mt-2 text-sm italic"
            style={{ color: TOKEN.muted }}
          >
            {source}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

export default function CsrdAutomotiveClient() {
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
            src="/Pictures/csrd-automotive-hero.png"
            alt="Cover-Collage der Nachhaltigkeitsberichte 2025 von VW, Porsche, Continental, Mercedes-Benz und Schaeffler, Symbolbild für CSRD-Berichterstattung in der Automobilindustrie"
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
              <span
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider"
                style={{
                  backgroundColor: `${TOKEN.sage}33`,
                  color: TOKEN.slate,
                }}
              >
                {c.heroKicker}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: TOKEN.slate }}
            >
              {c.heroTitle}
            </h1>
            <div
              className="flex items-center justify-center gap-4 text-sm flex-wrap"
              style={{ color: TOKEN.slate, opacity: 0.75 }}
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
            className="font-semibold hover:underline inline-flex items-center"
            style={{ color: TOKEN.sage }}
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
            style={{ color: TOKEN.slate }}
          >
            {c.intro}
          </p>

          {/* Section 1, Worum es geht */}
          <ArticleH2>{c.s1Title}</ArticleH2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.s1P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.s1P2}
          </p>
          <p className="text-lg leading-relaxed mb-3" style={{ color: TOKEN.ink }}>
            {c.s1P3}
          </p>
          <p
            className="text-xs italic leading-relaxed mb-6"
            style={{ color: TOKEN.ink, opacity: 0.7 }}
          >
            {c.s1Footnote}
          </p>

          {/* Stat 1 — 9/10 */}
          <StatTile
            number={c.statNumber}
            text={c.statText}
            source={c.statSource}
          />

          {/* Section 2, Was wir aus der Begleitung wissen */}
          <ArticleH2>{c.s2Title}</ArticleH2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.s2P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.s2P2}
          </p>

          {/* Regulatorik-Chips (drei EU-Rechtsakte) */}
          <section
            className="grid gap-4 my-10 grid-cols-1 md:grid-cols-3"
            aria-label={c.regChipsAria}
          >
            {[
              { code: c.regChip1Code, ref: c.regChip1Ref, text: c.regChip1Text },
              { code: c.regChip2Code, ref: c.regChip2Ref, text: c.regChip2Text },
              { code: c.regChip3Code, ref: c.regChip3Ref, text: c.regChip3Text },
            ].map((chip, i) => (
              <div
                key={i}
                className="rounded-lg bg-white px-5 py-4"
                style={{
                  border: `1px solid ${TOKEN.rule}`,
                  borderTop: `3px solid ${TOKEN.sage}`,
                }}
              >
                <span
                  className="block font-bold text-[15px]"
                  style={{ color: TOKEN.slate }}
                >
                  {chip.code}
                </span>
                <span
                  className="block text-xs italic mb-2"
                  style={{ color: TOKEN.muted }}
                >
                  {chip.ref}
                </span>
                <p className="text-sm leading-snug m-0" style={{ color: TOKEN.ink }}>
                  {chip.text}
                </p>
              </div>
            ))}
          </section>

          {/* Slate Pull-Quote (ersetzt die frühere Ice-Beige-Zitatbox) */}
          <blockquote
            className="my-12 rounded-xl px-8 sm:px-14 py-10 sm:py-12 relative"
            style={{ backgroundColor: TOKEN.slate, color: "#FFFFFF" }}
          >
            <span
              aria-hidden
              className="absolute leading-none select-none"
              style={{
                top: "8px",
                left: "20px",
                fontFamily: "Georgia, serif",
                fontSize: "96px",
                color: TOKEN.sage,
                opacity: 0.75,
              }}
            >
              „
            </span>
            <p
              className="text-lg sm:text-xl italic leading-snug m-0 mb-4"
              style={{ color: "#FFFFFF" }}
            >
              {c.pullQuote}
            </p>
            <cite
              className="block text-xs sm:text-sm uppercase not-italic"
              style={{ color: TOKEN.sage, letterSpacing: "0.04em" }}
            >
              {c.pullQuoteAuthor}
            </cite>
          </blockquote>

          {/* Section 3, Intro zur Lektionen-Sequenz */}
          <ArticleH2>{c.s3Title}</ArticleH2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.s3P1}
          </p>

          {/* Lessons-Grid (2×2, mit Anker-Links zu #lektion-1..4) */}
          <section
            className="grid gap-4 my-10 grid-cols-1 md:grid-cols-2"
            aria-label={c.lessonsGridAria}
          >
            {[
              { num: "01", href: "#lektion-1", title: c.l1GridTitle, body: c.l1GridBody },
              { num: "02", href: "#lektion-2", title: c.l2GridTitle, body: c.l2GridBody },
              { num: "03", href: "#lektion-3", title: c.l3GridTitle, body: c.l3GridBody },
              { num: "04", href: "#lektion-4", title: c.l4GridTitle, body: c.l4GridBody },
            ].map((card) => (
              <a
                key={card.num}
                href={card.href}
                className="block rounded-lg px-7 py-6 no-underline transition-transform"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${TOKEN.rule}`,
                  borderTop: `4px solid ${TOKEN.sage}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(61, 64, 91, 0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  className="block font-extrabold text-2xl mb-1"
                  style={{ color: TOKEN.sage, letterSpacing: "-0.02em" }}
                >
                  {card.num}
                </span>
                <h3
                  className="text-lg sm:text-xl font-extrabold mb-2"
                  style={{ color: TOKEN.slate }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-snug m-0" style={{ color: TOKEN.ink }}>
                  {card.body}
                </p>
              </a>
            ))}
          </section>

          {/* Lektion 1 */}
          <ArticleH2 id="lektion-1">{c.l1Title}</ArticleH2>
          <Merksatz label={c.merksatzLabel}>{c.l1Merksatz}</Merksatz>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l1P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l1P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l1P3}
          </p>

          {/* Stat 2 — –61 % Pflichtdatenpunkte (vor Lektion 2) */}
          <StatTile
            number={c.stat2Number}
            text={c.stat2Text}
            source={c.stat2Source}
          />

          {/* Lektion 2 */}
          <ArticleH2 id="lektion-2">{c.l2Title}</ArticleH2>
          <Merksatz label={c.merksatzLabel}>{c.l2Merksatz}</Merksatz>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l2P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l2P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l2P3}
          </p>

          {/* Stat 3 — 90 %+ Assurance (vor Lektion 3) */}
          <StatTile
            number={c.stat3Number}
            text={c.stat3Text}
            source={c.stat3Source}
          />

          {/* Lektion 3 */}
          <ArticleH2 id="lektion-3">{c.l3Title}</ArticleH2>
          <Merksatz label={c.merksatzLabel}>{c.l3Merksatz}</Merksatz>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l3P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l3P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.l3P3}
          </p>

          {/* Lektion 4 (mit Fett-Leads pro Absatz) */}
          <ArticleH2 id="lektion-4">{c.l4Title}</ArticleH2>
          <Merksatz label={c.merksatzLabel}>{c.l4Merksatz}</Merksatz>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            <strong style={{ color: TOKEN.slate, fontWeight: 700 }}>
              {c.l4P1Lead}
            </strong>
            {c.l4P1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            <strong style={{ color: TOKEN.slate, fontWeight: 700 }}>
              {c.l4P2Lead}
            </strong>
            {c.l4P2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            <strong style={{ color: TOKEN.slate, fontWeight: 700 }}>
              {c.l4P3Lead}
            </strong>
            {c.l4P3}
          </p>

          {/* Abschluss-Sektion */}
          <ArticleH2>{c.cTitle}</ArticleH2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.cP1}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.cP2}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: TOKEN.ink }}>
            {c.cP3}
          </p>

          {/* Stat 4 — 3–6 Monate Projektzeit (vor der Ansprechpartner-Karte) */}
          <StatTile
            number={c.stat4Number}
            text={c.stat4Text}
            source={c.stat4Source}
          />

          {/* Ihr Ansprechpartner, Christian (kombinierte CTA + Author-Karte, Beige-Variante) */}
          <section id="kontakt" className="mt-16 mb-12">
            <div className="text-center mb-8">
              <p
                className="text-xs font-semibold uppercase mb-3"
                style={{ color: TOKEN.sage, letterSpacing: "0.2em" }}
              >
                {c.authorSectionLabel}
              </p>
              <h2
                className="text-2xl sm:text-3xl font-extrabold"
                style={{ color: TOKEN.slate }}
              >
                {c.authorSectionTitle}
              </h2>
            </div>

            <div
              className="rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${TOKEN.rule}`,
                borderLeft: `8px solid ${TOKEN.sage}`,
              }}
            >
              <div
                className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded-full overflow-hidden mx-auto md:mx-0"
                style={{ border: `2px solid ${TOKEN.sage}33` }}
              >
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
                  style={{ color: TOKEN.slate }}
                >
                  {c.authorName}
                </h3>
                <p
                  className="text-sm font-semibold mb-3 uppercase"
                  style={{ color: TOKEN.sage, letterSpacing: "0.08em" }}
                >
                  {c.authorRole}
                </p>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: TOKEN.ink }}
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
                    backgroundColor: TOKEN.sage,
                    color: "#FFFFFF",
                    boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = TOKEN.sage)}
                >
                  {c.authorCtaLabel} →
                </a>
                <p
                  className="text-sm mt-3 italic"
                  style={{ color: TOKEN.ink, opacity: 0.7 }}
                >
                  {c.authorCtaDesc}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ (Akkordeon in Beige-70-Karten mit sage-linker Border) */}
          <ArticleH2>{t.insightsFaqTitle}</ArticleH2>
          <p
            className="text-base mb-6"
            style={{ color: TOKEN.ink, opacity: 0.8 }}
          >
            {c.faqIntro}
          </p>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <details
                key={i}
                open={i === 0}
                className="group rounded-lg px-6 py-5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${TOKEN.rule}`,
                  borderLeft: `4px solid ${TOKEN.sage}`,
                }}
              >
                <summary
                  className="cursor-pointer font-bold flex items-center justify-between text-base sm:text-lg"
                  style={{ color: TOKEN.slate, listStyle: "none" }}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    style={{ color: TOKEN.sage }}
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
                  style={{ color: TOKEN.ink }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <p
            className="text-sm italic mt-16"
            style={{ color: TOKEN.ink, opacity: 0.7 }}
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
