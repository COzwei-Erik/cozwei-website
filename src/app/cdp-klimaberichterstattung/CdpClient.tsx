"use client";
import { useEffect, useState } from "react";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";
import { trackEvent, Events } from "../analytics";
import { content } from "./content";

// Outlook-Booking-URL: 20-Min-Erstgespräch CDP mit Christian Philippen.
const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/3694425c783b44e5bcf0d6e259d842e2@cozwei.de/meetingtype/wYIFzzYbTEKz-RLZ18drfA2?anonymous&ep=mcard";

export default function CdpClient() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const c = content[language] || content.de;

  // Sticky Mobile CTA: blendet sich nach 50% Scrolltiefe ein.
  // Nur auf md-, sichtbar (Tailwind), damit Desktop-Layout unverändert bleibt.
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setShowStickyCta(false);
        return;
      }
      const ratio = window.scrollY / total;
      setShowStickyCta(ratio > 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProcess = () => {
    const target = document.getElementById("process-section");
    if (!target) return;
    const header = document.querySelector("nav");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* 01, HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/pexels-goumbik-590020.jpg"
            alt="Geschäftsleute analysieren Klimadaten am Laptop, Symbolbild für CDP Climate Change Questionnaire"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <div className="bg-white/85 rounded-2xl shadow-xl px-8 py-10 max-w-3xl mx-auto border border-white/60 backdrop-blur-sm">
            {/* Breadcrumb (sichtbar, ergänzend zum BreadcrumbList-JSON-LD) */}
            <nav aria-label="Breadcrumb" className="mb-4 text-xs">
              <ol className="flex items-center justify-center gap-2 flex-wrap" style={{ color: "#3D405B", opacity: 0.7 }}>
                <li><Link href="/" className="hover:underline">{c.breadcrumbHome}</Link></li>
                <li aria-hidden>›</li>
                <li><Link href="/nachhaltigkeit" className="hover:underline">{c.breadcrumbSolutions}</Link></li>
                <li aria-hidden>›</li>
                <li aria-current="page" className="font-semibold" style={{ color: "#3D405B" }}>{c.breadcrumbCurrent}</li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#81B29A" }}>
              {c.heroEyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              {c.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6" style={{ color: "#3D405B" }}>
              {c.heroSubtitle}
            </p>
            <p className="text-xs mb-8" style={{ color: "#3D405B", opacity: 0.6 }}>
              {c.lastUpdatedLabel}: {c.lastUpdatedDate}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(Events.BookingClick, { location: "cdp_hero" })}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg"
                style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              >
                {c.heroPrimaryCta}
              </a>
              <button
                type="button"
                onClick={scrollToProcess}
                className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg border-2 border-[#81B29A] bg-white"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                {c.heroSecondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 01b, AUF EINEN BLICK (AEO-optimierter 40-60-Wort-Antwortblock) + Trust-Signals */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-l-4 border-[#81B29A] bg-[#81B29A]/10 rounded-r-2xl pl-6 pr-6 py-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "#81B29A" }}>
              {c.glanceLabel}
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              {c.glanceBody}
            </p>
          </div>

          {/* Trust-Signals: 3 KPIs als kompakte Leiste */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {c.trustSignals.map((sig, i) => (
              <div key={i} className="text-center px-2 py-3 rounded-xl bg-white border border-[#81B29A]/20">
                <div className="text-2xl sm:text-3xl font-extrabold" style={{ color: "#81B29A" }}>
                  {sig.value}
                </div>
                <div className="text-xs sm:text-sm mt-1" style={{ color: "#3D405B" }}>
                  {sig.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] italic text-center mt-3" style={{ color: "#3D405B", opacity: 0.6 }}>
            {c.trustSignalsNote}
          </p>
        </div>
      </section>

      {/* 02, TRUST BAR (Badges teilweise verlinkt für E-E-A-T & Authority) */}
      <section className="w-full py-10 bg-white border-y border-[#81B29A]/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {c.trustBadges.map((b, idx) => {
              // Reihenfolge stabil über alle Sprachen:
              // 0 GHG Protocol · 1 ISO 14064 · 2 ESG-Ratings · 3 CSRD/ESRS · 4 SBTi · 5 GRI
              const badgeLinks: (string | null)[] = [
                "https://ghgprotocol.org",
                "https://www.iso.org/standard/66453.html",
                null, // ESG-Ratings, kein einzelner Anbieter
                "https://www.efrag.org/lab6",
                "https://sciencebasedtargets.org",
                "https://www.globalreporting.org",
              ];
              const href = badgeLinks[idx];
              const inner = (
                <>
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: "#81B29A" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{b}</span>
                </>
              );
              return href ? (
                <a
                  key={b}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 text-sm font-semibold py-2 hover:underline"
                  style={{ color: "#3D405B" }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={b}
                  className="flex items-center justify-center gap-2 text-sm font-semibold py-2"
                  style={{ color: "#3D405B" }}
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02b, WAS IST CDP? (Definitionsblock für Erstbesucher + AEO) */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
            {c.whatIsCdpTitle}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
            {c.whatIsCdpBody}{" "}
            <a
              href="https://www.cdp.net"
              target="_blank"
              rel="noopener"
              className="underline font-semibold"
              style={{ color: "#81B29A" }}
            >
              cdp.net
            </a>
          </p>
        </div>
      </section>

      {/* 03, WHY CDP */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.whySectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              {c.whySectionTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              {c.whySectionIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.trustCards.map((card, i) => (
              <article
                key={i}
                className="rounded-3xl bg-white/80 border border-[#81B29A]/30 p-6 sm:p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#23243a" }}>
                  {card.body}
                </p>
                <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                  {card.tag}
                </span>
              </article>
            ))}
          </div>

          {/* Quellen für die Statistiken oben (24.000 / 280 / 130 Bio.) */}
          <p className="text-xs italic text-center mt-8" style={{ color: "#3D405B", opacity: 0.65 }}>
            {c.statSourceLabel}:{" "}
            <a href="https://www.cdp.net" target="_blank" rel="noopener" className="underline">cdp.net</a>
            {" · "}
            <a href="https://www.cdp.net/en/supply-chain" target="_blank" rel="noopener" className="underline">CDP Supply Chain</a>
            {" · "}
            <a href="https://www.ifrs.org/issb" target="_blank" rel="noopener" className="underline">IFRS / ISSB</a>
          </p>
        </div>
      </section>

      {/* 04, PROZESS */}
      <section id="process-section" className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              {c.processSectionTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#23243a" }}>
              {c.processSectionIntro}
            </p>
          </div>
          <div className="space-y-5">
            {c.processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#81B29A]/30 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full font-extrabold text-xl flex items-center justify-center"
                    style={{ backgroundColor: "#81B29A", color: "white" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-extrabold mb-2" style={{ color: "#3D405B" }}>
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-3" style={{ color: "#23243a" }}>
                      {step.body}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {step.tags}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04b, TIMELINE — CDP-Jahreszyklus (P3.2) */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.timelineSectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
              {c.timelineSectionTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#23243a" }}>
              {c.timelineSectionIntro}
            </p>
          </div>

          <ol className="relative border-l-2 border-[#81B29A]/30 pl-6 sm:pl-10 space-y-6">
            {c.timelineSteps.map((step, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[2.0rem] sm:-left-[2.8rem] top-1 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#81B29A", color: "white" }}
                >
                  {i + 1}
                </span>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#81B29A" }}>
                  {step.period}
                </div>
                <h3 className="text-lg font-extrabold mb-1" style={{ color: "#3D405B" }}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#23243a" }}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05, INTEGRATION BANNER */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl p-8 sm:p-10" style={{ backgroundColor: "#3D405B", color: "white" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#81B29A" }}>
                {c.integrationBannerEyebrow}
              </p>
            </div>
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
              {c.integrationBannerBody}
            </p>
            {/* Interne Verlinkung auf verwandte Services (P2.4) */}
            <div className="flex flex-wrap gap-3">
              <Link href="/dekarbonisierung" className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold transition" style={{ backgroundColor: "rgba(129, 178, 154, 0.25)", color: "white" }}>
                → {c.internalLinkCcfLabel}
              </Link>
              <Link href="/verifizierung" className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold transition" style={{ backgroundColor: "rgba(129, 178, 154, 0.25)", color: "white" }}>
                → {c.internalLinkVerifLabel}
              </Link>
              <Link href="/klimaschutzkonzepte" className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold transition" style={{ backgroundColor: "rgba(129, 178, 154, 0.25)", color: "white" }}>
                → {c.internalLinkKlimaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06, SERVICE TIERS */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.tiersSectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
              {c.tiersSectionTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#23243a" }}>
              {c.tiersSectionIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {c.serviceTiers.map((tier) => (
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
                </div>

                <h3 className="text-xl font-extrabold leading-snug" style={{ color: "#3D405B" }}>
                  {tier.title}
                </h3>
                <p className="text-sm font-semibold mt-1 mb-4" style={{ color: "#3D405B", opacity: 0.7 }}>
                  {tier.subtitle}
                </p>

                <div className="border-t border-[#81B29A]/20 pt-4 mb-4">
                  <div className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: "#81B29A" }}>
                    {c.audienceLabel}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                    {tier.audience}
                  </p>
                </div>

                <div className="border-t border-[#81B29A]/20 pt-4 mb-4">
                  <div className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: "#81B29A" }}>
                    {c.servicesLabel}
                  </div>
                  <ul className="space-y-2">
                    {tier.services.map((s, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "#23243a" }}>
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#81B29A" }} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#81B29A]/20 pt-4 mb-4">
                  <div className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: "#81B29A" }}>
                    {c.prerequisiteLabel}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                    {tier.prerequisite}
                  </p>
                </div>

                <div className="border-t border-[#81B29A]/20 pt-4 mb-4">
                  <div className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: "#81B29A" }}>
                    {c.addonLabel}
                  </div>
                  <p className="text-sm leading-relaxed italic" style={{ color: "#23243a", opacity: 0.85 }}>
                    {tier.addon}
                  </p>
                </div>

                <div className="border-t border-[#81B29A]/20 pt-4 mb-6">
                  <div className="text-xs uppercase tracking-wider mb-1 font-semibold" style={{ color: "#81B29A" }}>
                    {c.durationLabel}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#3D405B" }}>
                    {tier.duration}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent(Events.BookingClick, { location: `cdp_tier_${tier.level.toLowerCase()}` })}
                    className="block w-full rounded-lg px-5 py-3 text-center text-sm font-bold transition"
                    style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.18)" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
                  >
                    {tier.ctaLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06b, COMPARISON TABLE (P2.1) */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#3D405B" }}>
              {c.comparisonTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: "#23243a", opacity: 0.85 }}>
              {c.comparisonIntro}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 font-semibold align-bottom" style={{ color: "#81B29A" }}></th>
                  {c.serviceTiers.map((tier) => (
                    <th key={tier.level} className="text-left p-4 align-bottom" style={{ color: "#3D405B" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: "#81B29A", color: "white" }}>
                          {tier.level}
                        </span>
                        <span className="font-extrabold">{tier.title}</span>
                      </div>
                      <span className="block text-xs font-normal" style={{ color: "#3D405B", opacity: 0.7 }}>
                        {tier.subtitle}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ color: "#23243a" }}>
                {[
                  { label: c.compareLabelAudience, val: (t: typeof c.serviceTiers[number]) => t.audience },
                  { label: c.compareLabelPrerequisite, val: (t: typeof c.serviceTiers[number]) => t.prerequisite },
                  { label: c.compareLabelDuration, val: (t: typeof c.serviceTiers[number]) => t.duration },
                  { label: c.compareLabelScoreFocus, val: (t: typeof c.serviceTiers[number]) => t.scoreFocus },
                  { label: c.compareLabelAddon, val: (t: typeof c.serviceTiers[number]) => t.addon },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[#81B29A]/20">
                    <td className="p-4 text-xs uppercase tracking-wider font-semibold align-top" style={{ color: "#81B29A" }}>
                      {row.label}
                    </td>
                    {c.serviceTiers.map((tier) => (
                      <td key={tier.level} className="p-4 align-top leading-relaxed">
                        {row.val(tier)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 06c, MINI CASE STUDY (P3.3 — anonymisiertes Praxisbeispiel) */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.caseSectionLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
              {c.caseSectionTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#23243a" }}>
              {c.caseClientType}
            </p>
          </div>

          <div className="rounded-3xl border border-[#81B29A]/30 bg-white p-6 sm:p-10">
            {/* Score before/after */}
            <div className="flex items-center justify-center gap-6 sm:gap-12 mb-8">
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider mb-1 font-semibold" style={{ color: "#3D405B", opacity: 0.7 }}>
                  {c.caseScoreBeforeLabel}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-200 text-3xl font-extrabold" style={{ color: "#3D405B" }}>
                  {c.caseScoreBefore}
                </div>
              </div>
              <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: "#81B29A" }} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider mb-1 font-semibold" style={{ color: "#81B29A" }}>
                  {c.caseScoreAfterLabel}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-3xl font-extrabold" style={{ backgroundColor: "#81B29A", color: "white" }}>
                  {c.caseScoreAfter}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {c.caseHighlights.map((h, i) => (
                <li key={i} className="flex gap-3" style={{ color: "#23243a" }}>
                  <span className="mt-2 inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#81B29A" }} />
                  <span className="text-base leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 pt-6 border-t border-[#81B29A]/20 text-xs italic" style={{ color: "#3D405B", opacity: 0.7 }}>
              {c.caseDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 07, ANSPRECHPARTNER */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.authorSectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#3D405B" }}>
              {c.authorSectionTitle}
            </h2>
          </div>

          <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/5 p-8 sm:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-[#81B29A]/30 mx-auto md:mx-0">
              <Image
                src="/Pictures/Christian.png"
                alt={`${c.authorName}, ${c.authorRole} bei COzwei`}
                fill
                sizes="160px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold mb-1" style={{ color: "#3D405B" }}>
                {c.authorName}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "#81B29A" }}>
                {c.authorRole}
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#23243a" }}>
                {c.authorBio}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(Events.BookingClick, { location: "cdp_author" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition text-base"
                style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              >
                {c.authorCtaLabel} →
              </a>
              <p className="text-sm mt-3 italic" style={{ color: "#23243a", opacity: 0.7 }}>
                {c.authorCtaDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08, INSIGHTS TEASER */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/10 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
                  {c.insightsSectionLabel}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3" style={{ color: "#3D405B" }}>
                  {c.insightsSectionTitle}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-2" style={{ color: "#23243a" }}>
                  {c.insightsTeaser}
                </p>
                <p className="text-xs italic" style={{ color: "#23243a", opacity: 0.7 }}>
                  {c.insightsTeaserNote}
                </p>
              </div>
              <Link
                href="/insights"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border-2 border-[#81B29A] bg-white px-6 py-3 text-sm font-bold transition"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#81B29A"; e.currentTarget.style.color = "white"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#3D405B"; }}
              >
                Insights ansehen
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 08b, FAQ (zentraler AEO-Hebel, wortgleich zum FAQPage-JSON-LD) */}
      <section className="w-full py-16 bg-[#81B29A]/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.faqSectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
              {c.faqSectionTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#23243a", opacity: 0.8 }}>
              {c.faqSectionIntro}
            </p>
          </div>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-[#81B29A]/20 bg-white px-5 py-4">
                <summary className="cursor-pointer font-bold flex items-center justify-between gap-3" style={{ color: "#3D405B" }}>
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 08c, GLOSSAR (P2.6 — Fachbegriffe als Accordion) */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#81B29A" }}>
              {c.glossarySectionLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#3D405B" }}>
              {c.glossarySectionTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#23243a", opacity: 0.85 }}>
              {c.glossarySectionIntro}
            </p>
          </div>
          <div className="space-y-2">
            {c.glossary.map((entry, i) => (
              <details key={i} className="group rounded-xl border border-[#81B29A]/20 bg-white px-4 py-3">
                <summary className="cursor-pointer font-bold text-sm flex items-center justify-between gap-3" style={{ color: "#3D405B" }}>
                  <span>{entry.term}</span>
                  <svg className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "#23243a" }}>{entry.definition}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 09, FINAL CTA */}
      <section className="w-full py-16 bg-[#81B29A]/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
            {c.finalCtaTitle}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#23243a" }}>
            {c.finalCtaSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row mb-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(Events.BookingClick, { location: "cdp_final_cta" })}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold transition"
              style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
            >
              {c.finalCtaPrimary}
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm" style={{ color: "#3D405B" }}>
            <div>
              <span className="font-semibold">{c.finalCtaSecondaryEmailLabel}:</span>{" "}
              <a href={`mailto:${c.finalCtaSecondaryEmail}`} className="underline hover:no-underline">
                {c.finalCtaSecondaryEmail}
              </a>
            </div>
            <span className="hidden sm:inline">·</span>
            <div>
              <span className="font-semibold">{c.finalCtaSecondaryPhoneLabel}:</span>{" "}
              <a href={`tel:${c.finalCtaSecondaryPhone.replace(/\s/g, "")}`} className="underline hover:no-underline">
                {c.finalCtaSecondaryPhone}
              </a>
            </div>
          </div>
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

      {/* STICKY MOBILE CTA (P2.5) — nur Mobile, ab 50% Scrolltiefe */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 transition-transform duration-300 ${
          showStickyCta ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showStickyCta}
      >
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(Events.BookingClick, { location: "cdp_sticky_mobile" })}
          className="block w-full text-center rounded-xl px-6 py-3.5 text-sm font-bold"
          style={{
            backgroundColor: "#81B29A",
            color: "white",
            boxShadow: "0 8px 28px 0 rgba(61, 64, 91, 0.35)",
          }}
        >
          {c.stickyCtaLabel} →
        </a>
      </div>
    </div>
  );
}
