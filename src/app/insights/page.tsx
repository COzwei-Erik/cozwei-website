"use client";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";

type Post = {
  slug: string;
  image: string;
  imageAlt: string;
  dateKey: keyof typeof translations.de;
  categoryKey: keyof typeof translations.de;
  titleKey: keyof typeof translations.de;
  descKey: keyof typeof translations.de;
};

const POSTS: Post[] = [
  {
    slug: "ccf-verifizierung",
    image: "/Pictures/pexels-rdne-7948058.jpg",
    imageAlt: "Datenanalyse am Schreibtisch",
    dateKey: "insightsPost3Date",
    categoryKey: "insightsPost3Category",
    titleKey: "insightsPost3Title",
    descKey: "insightsPost3Desc",
  },
  {
    slug: "buchverlage-dekarbonisierung",
    image: "/Pictures/pexels-marcin-jozwiak-199600-3641377.jpg",
    imageAlt: "Industrieanlage",
    dateKey: "insightsPost1Date",
    categoryKey: "insightsPost1Category",
    titleKey: "insightsPost1Title",
    descKey: "insightsPost1Desc",
  },
  {
    slug: "nki-foerderung",
    image: "/Pictures/image copy 6.png",
    imageAlt: "Klimaschutzkonzept Hochschule",
    dateKey: "insightsPost2Date",
    categoryKey: "insightsPost2Category",
    titleKey: "insightsPost2Title",
    descKey: "insightsPost2Desc",
  },
];

export default function Insights() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Pictures/2024-04-02__DSC0693-NEF_2024-03-24_DXO.jpg"
            alt="Insights Hero Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-3xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "#dc2626" }}>
              {t.insightsHeroTitle}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: "#3D405B" }}>
              {t.insightsHeroSubtitle}
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
              style={{ backgroundColor: "#81B29A", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
              onClick={() => {
                const target = document.getElementById("content-section");
                if (target) {
                  const header = document.querySelector("nav");
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {t.learnMore}
            </button>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 py-8 max-w-7xl mx-auto w-full">
        <section id="content-section" className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: "#3D405B" }}>
              {t.insightsSectionTitle}
            </h2>
            <p className="mb-12 text-lg text-center" style={{ color: "#3D405B" }}>
              {t.insightsSectionSubtitle}
            </p>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="block group"
                >
                  <article className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-2 group-hover:border-[#81B29A] group-hover:ring-2 group-hover:ring-[#81B29A]/30 overflow-hidden h-full">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                          {t[post.categoryKey] as string}
                        </span>
                        <span className="text-xs font-medium" style={{ color: "#3D405B", opacity: 0.7 }}>
                          {t[post.dateKey] as string}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold mb-3" style={{ color: "#23243a" }}>
                        {t[post.titleKey] as string}
                      </h3>
                      <p className="text-sm mb-6 flex-1" style={{ color: "#23243a" }}>
                        {t[post.descKey] as string}
                      </p>
                      <span className="mt-auto text-[#81B29A] font-bold flex items-center transition">
                        {t.insightsReadMore}
                        <svg
                          className="ml-2 w-5 h-5 text-[#81B29A] group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm italic" style={{ color: "#3D405B", opacity: 0.7 }}>
                {t.insightsComingSoonNote}
              </p>
            </div>
          </div>
        </section>
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
