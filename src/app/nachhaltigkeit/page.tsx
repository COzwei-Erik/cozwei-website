"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";

export default function Nachhaltigkeit() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/pexels-akilmazumder-1072824.jpg" 
            alt="Nachhaltigkeit Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.sustainabilityHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.sustainabilityHeroSubtitle}
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
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
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto">
        {/* Vier-Karten-Section (Nachhaltigkeitsdienstleistungen) */}
        <section id="karten-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>
              {t.sustainabilitySectionTitle}
            </h2>
            <p className="mb-12 text-lg text-center" style={{ color: '#3D405B' }}>
              {t.sustainabilitySectionSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-stretch h-full">
              {/* Card 1 - Nachhaltigkeitsstrategie */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/pexels-fauxels-3184292.jpg" alt="Nachhaltigkeitsstrategie" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.nachhaltigkeitsstrategieTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.nachhaltigkeitsstrategieDesc}
                  </p>
                </div>
              </div>
              {/* Card 2 - ESG Ratings & SAQ 5.0 */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/image copy.png" alt="ESG Ratings & SAQ 5.0" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.esgRatingsTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.esgRatingsDesc}
                  </p>
                </div>
              </div>
              {/* Card 3 - CSRD, GRI Berichte */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/pexels-goumbik-590020.jpg" alt="CSRD, GRI Berichte" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.csrdGriTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.csrdGriDesc}
                  </p>
                </div>
              </div>
              {/* Card 4 - ESG Software */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/pexels-asphotograpy-106344.jpg" alt="ESG Software" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.esgSoftwareTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.esgSoftwareDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
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