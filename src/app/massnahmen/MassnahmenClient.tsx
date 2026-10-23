"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "@/app/components/ContactForm";
import PDFDownloadForm from "@/app/components/PDFDownloadForm";

export default function MassnahmenClient() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/pexels-tomfisk-9893729_low_low.jpg" 
            alt="Maßnahmen Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <div className="bg-white/80 rounded-2xl shadow-xl px-4 sm:px-8 py-8 sm:py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words" style={{ color: '#3D405B' }}>{t.measuresHeroTitle}</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 break-words" style={{ color: '#3D405B' }}>
              {t.measuresHeroSubtitle}
            </p>
            <button
              type="button"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold shadow-lg transition mb-2 text-lg sm:text-xl"
              style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fa18a'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#81B29A'}
              onClick={() => {
                const target = document.getElementById('karten-section');
                if (target) {
                  const header = document.querySelector('nav');
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {t.learnMore}
            </button>
          </div>
        </div>
      </section>
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full">
        {/* Drei-Karten-Section */}
        <section id="karten-section" className="w-full py-8 sm:py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 break-words" style={{ color: '#3D405B' }}>
              {t.measuresSectionTitle}
            </h2>
            <p className="mb-8 sm:mb-12 text-base sm:text-lg text-center break-words" style={{ color: '#3D405B' }}>
              {t.measuresSectionSubtitle}
            </p>
            <div className="max-w-xl mx-auto">
              {/* Card 1 */}
              <div className="flex flex-col h-auto sm:h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image 
                  src="/Pictures/image copy 2.png" 
                  alt="Card 1" 
                  width={600} 
                  height={256} 
                  quality={75}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-2xl transition-all duration-300"
                  loading="lazy"
                />
                <div className="flex flex-col p-4 sm:p-8 flex-1">
                  <h3 className="text-base sm:text-lg font-extrabold mb-2 break-words" style={{ color: '#23243a' }}>
                    {t.measuresCard1Title}
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base break-words" style={{ color: '#23243a' }}>
                    {t.measuresCard1Desc}
                  </p>
                  <a href="/foerderung#dashboard" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition text-base sm:text-lg">
                    {t.measuresLearnMore}
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Klima-Förderungen Section */}
        <section className="w-full py-8 sm:py-16 flex flex-col items-center justify-center bg-white">
          <div className="max-w-6xl w-full mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-center break-words" style={{ color: '#3D405B' }}>{t.climateFundingTitle}</h2>
            <p className="text-base sm:text-lg text-center mb-8 sm:mb-12 break-words max-w-3xl mx-auto" style={{ color: '#3D405B' }}>
              {t.climateFundingSubtitle}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Formular links */}
              <div className="lg:order-1 order-2">
                <PDFDownloadForm />
              </div>
              {/* Förderkatalog-Vorschau rechts */}
              <div className="lg:order-2 order-1 flex justify-center">
                <Image
                  src="/Pictures/foerderkatalog-preview.png"
                  alt="COzwei Förderkatalog für Klimaförderungen: Cover, Inhaltsverzeichnis und Beispielseiten"
                  width={1200}
                  height={1080}
                  className="w-full max-w-md h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
      <ContactForm />
      <footer className="bg-gray-100 py-6 sm:py-8 px-4 mt-8 text-center text-xs sm:text-sm text-gray-600">
        <div className="mb-2 break-words">COzwei GmbH &bull; Waldfeuchterstr. 274, 52525 Heinsberg &bull; HRB 30407, Amtsgericht Aachen &bull; Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de</div>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-2">
          <a href="/datenschutz" className="hover:underline">{t.privacy}</a>
          <a href="/impressum" className="hover:underline">{t.imprint}</a>
          <a href="https://www.linkedin.com/company/cozwei" target="_blank" rel="noopener noreferrer" className="hover:underline">{t.linkedin}</a>
        </div>
        <div>© {new Date().getFullYear()} COzwei GmbH</div>
      </footer>
    </div>
  );
} 