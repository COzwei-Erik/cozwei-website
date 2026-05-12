"use client";
import Header from "../../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../../LanguageContext";
import ContactForm from "../../components/ContactForm";
import { StatCallout, PullQuote, CtaBox } from "../../components/InsightCallouts";
import { content } from "./content";

export default function NkiFoerderung() {
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
                {c.heroKicker}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#3D405B" }}>
              {c.heroTitle}
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
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.intro}</p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>{c.section1Title}</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section1P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section1P2}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section1P3}</p>

          <StatCallout number={c.statNumber}>{c.statText}</StatCallout>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>{c.section2Title}</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section2P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section2P2}</p>

          <PullQuote>{c.pullQuote}</PullQuote>

          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section2P3}</p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>{c.section3Title}</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section3Intro}</p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>{c.factor1Title}</h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor1P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor1P2}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor1P3}</p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>{c.factor2Title}</h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor2P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor2P2}</p>

          <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-3" style={{ color: "#3D405B" }}>{c.factor3Title}</h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor3P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.factor3P2}</p>

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-12 mb-4" style={{ color: "#3D405B" }}>{c.section4Title}</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section4P1}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section4P2}</p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#23243a" }}>{c.section4P3}</p>

          <CtaBox title={c.ctaTitle} buttonLabel={c.ctaButtonLabel}>
            {c.ctaBody}
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
              <p className="text-base leading-relaxed" style={{ color: "#23243a" }}>{c.authorBio}</p>
            </div>
          </aside>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-2" style={{ color: "#3D405B" }}>{t.insightsFaqTitle}</h2>
          <p className="text-base mb-6" style={{ color: "#23243a", opacity: 0.8 }}>{c.faqIntro}</p>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-[#81B29A]/20 bg-white/60 px-5 py-4">
                <summary className="cursor-pointer font-bold flex items-center justify-between" style={{ color: "#3D405B" }}>
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-base leading-relaxed mt-3" style={{ color: "#23243a" }}>{faq.a}</p>
              </details>
            ))}
          </div>

          <p className="text-sm italic mt-12" style={{ color: "#23243a", opacity: 0.7 }}>{c.disclaimer}</p>
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
