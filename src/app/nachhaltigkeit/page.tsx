"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";

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
        {/* Drei-Karten-Section (Klimaziele erreichen) */}
        <section id="karten-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>
              {t.sustainabilitySectionTitle}
            </h2>
            <p className="mb-12 text-lg text-center" style={{ color: '#3D405B' }}>
              {t.sustainabilitySectionSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-stretch h-full">
              {/* Card 1 */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/image.png" alt="Card 1" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.sdgCardTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.sdgCardDesc}
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/image copy.png" alt="Card 2" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.esgCardTitle}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.esgCardDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
      <section id="kontakt" className="w-full py-16 bg-white flex justify-center items-center">
        <div className="max-w-4xl w-full bg-white/80 rounded-3xl border border-[#81B29A]/30 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: '#3D405B' }}>{t.contactUs}</h2>
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-[#3D405B]">{t.name}</label>
              <input id="name" name="name" type="text" required className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" placeholder={t.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-[#3D405B]">{t.email}</label>
              <input id="email" name="email" type="email" required className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" placeholder={t.emailPlaceholder} />
            </div>
            <div>
              <label htmlFor="company" className="block mb-1 font-semibold text-[#3D405B]">{t.company}</label>
              <input id="company" name="company" type="text" className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" placeholder={t.companyPlaceholder} />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-[#3D405B]">{t.message}</label>
              <textarea id="message" name="message" rows={5} required className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition resize-none" placeholder={t.messagePlaceholder}></textarea>
            </div>
            <button type="submit" className="mt-2 bg-[#81B29A] hover:bg-[#6fa18a] text-white font-bold py-3 px-8 rounded-lg transition text-lg shadow-lg">{t.send}</button>
          </form>
        </div>
      </section>
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