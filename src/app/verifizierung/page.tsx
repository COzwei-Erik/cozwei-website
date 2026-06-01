"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";
import { trackEvent, Events } from "../analytics";

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/4e00978e7e7f42e38133622070d543b9@cozwei.de/meetingtype/vbiOdceuK0-As0tl2Bxhvg2?anonymous&ep=mCardFromTile";

export default function Verifizierung() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  const tiers = [
    {
      level: "S",
      title: t.verifTier1Title,
      tagline: t.verifTier1Tagline,
      bullets: [t.verifTier1Bullet1, t.verifTier1Bullet2, t.verifTier1Bullet3],
      priceDuration: t.verifTier1Price,
    },
    {
      level: "M",
      title: t.verifTier2Title,
      tagline: t.verifTier2Tagline,
      bullets: [t.verifTier2Bullet1, t.verifTier2Bullet2, t.verifTier2Bullet3],
      priceDuration: t.verifTier2Price,
    },
    {
      level: "L",
      title: t.verifTier3Title,
      tagline: t.verifTier3Tagline,
      bullets: [t.verifTier3Bullet1, t.verifTier3Bullet2, t.verifTier3Bullet3],
      priceDuration: t.verifTier3Price,
    },
  ];

  const faqs = [
    { q: t.verifFaq1Q, a: t.verifFaq1A },
    { q: t.verifFaq2Q, a: t.verifFaq2A },
    { q: t.verifFaq3Q, a: t.verifFaq3A },
    { q: t.verifFaq4Q, a: t.verifFaq4A },
    { q: t.verifFaq5Q, a: t.verifFaq5A },
    { q: t.verifFaq6Q, a: t.verifFaq6A },
    { q: t.verifFaq7Q, a: t.verifFaq7A },
  ];

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
              {t.verifEyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              {t.verifHeroTitle}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8" style={{ color: "#3D405B" }}>
              {t.verifHeroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(Events.BookingClick, { location: "verif_hero" })}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg"
                style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              >
                {t.verifHeroPrimaryCta}
              </a>
              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById("tiers-section");
                  if (!target) return;
                  const header = document.querySelector("nav");
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg border-2 border-[#81B29A] bg-white"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                {t.verifHeroSecondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro-section" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12" style={{ color: "#3D405B" }}>
            {t.verifIntroTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="md:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              <p>{t.verifIntroP1}</p>
              <p>{t.verifIntroP2}</p>
              <p>{t.verifIntroP3}</p>
            </div>
            <aside className="md:col-span-1">
              <div className="rounded-2xl border border-[#81B29A]/40 bg-[#81B29A]/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: "#81B29A" }}>
                  {t.verifStatsLabel}
                </p>
                <div className="font-extrabold text-5xl leading-none" style={{ color: "#3D405B" }}>{t.verifStat1Number}</div>
                <p className="mt-2 text-sm leading-snug" style={{ color: "#23243a" }}>
                  {t.verifStat1Text}
                </p>
                <div className="my-5 h-px w-full bg-[#81B29A]/30" />
                <div className="font-extrabold text-5xl leading-none" style={{ color: "#3D405B" }}>{t.verifStat2Number}</div>
                <p className="mt-2 text-sm leading-snug" style={{ color: "#23243a" }}>
                  {t.verifStat2Text}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="tiers-section" className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              {t.verifTiersTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              {t.verifTiersSubtitle}
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
                    {t.verifTierLabel} {tier.level}
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
                    {t.verifPriceLabel}
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
                    onClick={() => trackEvent(Events.BookingClick, { location: `verif_tier_${tier.level.toLowerCase()}` })}
                    className="block w-full rounded-lg px-5 py-3 text-center text-sm font-bold transition"
                    style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.18)" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
                  >
                    {t.verifBookButton} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic leading-relaxed" style={{ color: "#3D405B", opacity: 0.7 }}>
            {t.verifIsoDisclaimer}
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
                  {t.verifInsightsEyebrow}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3" style={{ color: "#3D405B" }}>
                  {t.verifInsightsTitle}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#23243a" }}>
                  {t.verifInsightsDesc}
                </p>
              </div>
              <a
                href="/insights/ccf-verifizierung"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border-2 border-[#81B29A] bg-white px-6 py-3 text-sm font-bold transition"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                {t.verifInsightsButton}
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
              {t.verifFaqTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#23243a", opacity: 0.8 }}>
              {t.verifFaqSubtitle}
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
            {t.verifFinalTitle}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#23243a" }}>
            {t.verifFinalDesc}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(Events.BookingClick, { location: 'verif_final_cta' })}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold transition"
              style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
            >
              {t.verifFinalBookButton}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-4 text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: "#3D405B" }}
            >
              {t.verifFinalFormLink}
            </a>
          </div>
          <p className="mt-10 text-xs italic leading-relaxed max-w-3xl mx-auto" style={{ color: "#3D405B", opacity: 0.7 }}>
            {t.verifFinalDisclaimer}
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
