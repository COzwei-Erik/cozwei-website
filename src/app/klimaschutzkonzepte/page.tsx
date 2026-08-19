"use client";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../LanguageContext";
import { trackEvent, Events } from "../analytics";
import ContactCTA from "../components/ContactCTA";
import InfoBox from "../components/InfoBox";

// Maries Microsoft-Bookings-Link für 30-Min-Erstgespräche zu NKI-Klimaschutzkonzepten.
const MARIE_BOOKING_URL =
  "https://bookings.cloud.microsoft/bookwithme/user/8e5fcd9b00414e37ac068ba0cb79aa5e%40cozwei.de/meetingtype/e5_NXh7LX0C0o52_Nt2ChA2?anonymous&ismsaljsauthenabled";

export default function Klimaschutzkonzepte() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/klimaschutzkonzepte-hero.png"
            alt="Berliner Skyline mit Fernsehturm, Berliner Dom und Spree, Symbolbild für kommunale Klimaschutzkonzepte"
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-[#81B29A]/20 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.klimaHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-8" style={{ color: '#3D405B' }}>
              {t.klimaHeroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={MARIE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(Events.BookingClick, { location: "klima_hero" })}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg"
                style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#6fa18a')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#81B29A')}
              >
                {t.klimaHeroPrimaryCta}
              </a>
              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById('steps');
                  if (!target) return;
                  const header = document.querySelector('nav');
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg border-2 border-[#81B29A] bg-white"
                style={{ color: '#3D405B' }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#81B29A'; e.currentTarget.style.color = 'white'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#3D405B'; }}
              >
                {t.klimaHeroSecondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full">
        {/* Zielgruppen Tags */}
        <section className="w-full py-6">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {t.klimaTags.map((tag) => (
              <span key={tag} className="border border-[#81B29A] text-[#81B29A] bg-white/80 px-6 py-2 rounded-full text-lg font-bold" style={{letterSpacing: '0.01em'}}>{tag}</span>
            ))}
          </div>
        </section>
        {/* Info Section */}
        <section className="w-full py-12">
          <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl border border-[#81B29A]/20 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-extrabold mb-4 text-center" style={{ color: '#3D405B' }}>{t.klimaInfoTitle}</h2>
            <p className="text-lg mb-4 text-center" style={{ color: '#3D405B' }}>
              {t.klimaInfoDesc}
            </p>
          </div>
        </section>
        {/* 6 Steps Section */}
        <section id="steps" className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">01</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep1Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep1Desc}</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">02</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep2Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep2Desc}</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">03</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep3Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep3Desc}</p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">04</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep4Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep4Desc}</p>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">05</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep5Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep5Desc}</p>
              </div>
              {/* Step 6 */}
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">06</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.klimaStep6Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.klimaStep6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* References: drei geförderte und veröffentlichte Klimaschutzkonzepte */}
        <section id="references" className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#81B29A' }}>
                {t.klimaRefsEyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: '#3D405B' }}>
                {t.klimaRefsTitle}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#23243a' }}>
                {t.klimaRefsIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {([
                {
                  logo: '/Pictures/References/htwg-konstanz.png',
                  name: t.klimaRefHtwgName,
                  subtitle: t.klimaRefHtwgSubtitle,
                  href: 'https://www.htwg-konstanz.de/fileadmin/pub/ou/nachhaltigkeit/Klimaschutzkonzept/241220_Integriertes_Klimaschutzkonzept_HTWG_Konstanz.pdf',
                  buttonLabel: t.klimaRefsButtonReport,
                },
                {
                  logo: '/Pictures/References/hfu.webp',
                  name: t.klimaRefHfuName,
                  subtitle: t.klimaRefHfuSubtitle,
                  href: 'https://www.hs-furtwangen.de/fileadmin/Redaktion/Dokumente/2026/HFU_Energie-_und_Klimaschutzkonzept_2025.pdf',
                  buttonLabel: t.klimaRefsButtonReport,
                },
                {
                  logo: '/Pictures/References/rwth-aachen.png',
                  name: t.klimaRefRwthName,
                  subtitle: t.klimaRefRwthSubtitle,
                  href: 'https://www.rwth-aachen.de/cms/root/wir/nachhaltigkeit/wirkungsbereiche/nachhaltigkeit-im-betrieb/~blikep/erstellung-eines-integrierten-klimaschut/',
                  buttonLabel: t.klimaRefsButtonPage,
                },
              ]).map((ref) => (
                <article
                  key={ref.name}
                  className="flex flex-col rounded-3xl bg-white border border-[#81B29A]/30 p-6 sm:p-8 transition-all duration-300 hover:border-[#81B29A] hover:shadow-lg"
                >
                  <div className="flex items-center justify-center h-20 sm:h-24 mb-6">
                    <Image
                      src={ref.logo}
                      alt={`${ref.name} Logo`}
                      width={240}
                      height={96}
                      className="max-h-16 sm:max-h-20 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-center" style={{ color: '#3D405B' }}>
                    {ref.name}
                  </h3>
                  <p className="text-sm font-semibold text-center mt-1 mb-8 flex-1" style={{ color: '#81B29A' }}>
                    {ref.subtitle}
                  </p>
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#81B29A] bg-white px-5 py-3 text-sm font-bold transition"
                    style={{ color: '#3D405B' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#81B29A'; e.currentTarget.style.color = 'white'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#3D405B'; }}
                  >
                    {ref.buttonLabel}
                    <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Ihre Ansprechpartnerin — Marie Bruns (ersetzt die frühere ContactForm) */}
      <section id="kontakt" className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {t.klimaAuthorLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#3D405B" }}>
              {t.klimaAuthorTitle}
            </h2>
          </div>

          <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/5 p-8 sm:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#81B29A]/30 mx-auto md:mx-0">
              <Image
                src="/Pictures/Marie_Bruns.png"
                alt={`${t.klimaAuthorName}, ${t.klimaAuthorRole} bei COzwei`}
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold mb-1" style={{ color: "#3D405B" }}>{t.klimaAuthorName}</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "#81B29A" }}>{t.klimaAuthorRole}</p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#23243a" }}>{t.klimaAuthorBio}</p>
              <a
                href={MARIE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(Events.BookingClick, { location: "klima_author" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition text-base"
                style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              >
                {t.klimaAuthorCtaLabel} →
              </a>
              <p className="text-sm mt-3 italic" style={{ color: "#23243a", opacity: 0.7 }}>{t.klimaAuthorCtaDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights cross-link — Verweis auf den NKI-Blogbeitrag */}
      <section className="w-full pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/10 p-8 md:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
                  {t.klimaInsightsEyebrow}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3" style={{ color: "#3D405B" }}>
                  {t.klimaInsightsTitle}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#23243a" }}>
                  {t.klimaInsightsDesc}
                </p>
              </div>
              <a
                href="/insights/nki-foerderung"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border-2 border-[#81B29A] bg-white px-6 py-3 text-sm font-bold transition"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                {t.klimaInsightsButton}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hub-Sektion: Einstieg in die drei Zielgruppenseiten. Diese Seite ist das
          Ziel von Kachel 5 der Startseite, die Zielgruppenseiten haengen darunter. */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
            Für Ihre Einrichtung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                href: "/klimaschutzkonzepte-hochschulen",
                title: "Hochschulen & Universitäten",
                body: "Heterogene Gebäudebestände, energieintensive Labore, Pendelverkehr und Mensen, mit Konzepten, die Gremien überzeugen.",
              },
              {
                href: "/klimaschutzkonzepte-kirchen",
                title: "Kirchen & kirchliche Einrichtungen",
                body: "Von der denkmalgeschützten Kirche bis zur Kita, priorisiert je Gebäude und anschlussfähig an kirchliche Klimaziele.",
              },
              {
                href: "/klimaschutzkonzepte-krankenhaeuser",
                title: "Krankenhäuser & soziale Träger",
                body: "Maßnahmen, die Versorgungssicherheit und Hygieneanforderungen im 24/7-Betrieb nicht gefährden.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 p-6"
              >
                <h3
                  className="text-base font-extrabold uppercase tracking-wide mb-2"
                  style={{ color: "#81B29A" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                  {card.body}
                </p>
              </Link>
            ))}
          </div>

          <InfoBox label="Aktuelle Förderfakten">
            Seit dem 1. Juni 2026 erfolgt die Antragstellung über easy-Online ausschließlich
            digital. Und seit dem 1. Juli 2026 gelten Klimaschutzkonzepte, die vor dem
            31. August 2021 fertiggestellt und seitdem nicht grundlegend aktualisiert wurden,
            nicht mehr als förderschädlich für ein Erstvorhaben. Einrichtungen mit einem
            älteren Konzept können also wieder antragsberechtigt sein.
          </InfoBox>
        </div>
      </section>

      <ContactCTA
        location="klimaschutzkonzepte"
        context="Wir prüfen kostenlos, ob Ihre Einrichtung antragsberechtigt ist und welche Förderquote gilt."
      />

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