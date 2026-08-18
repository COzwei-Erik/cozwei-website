"use client";
import Image from "next/image";
import Header from "./Header";
import { useLanguage, translations } from "./LanguageContext";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Navigation Bar */}
      <Header variant="red" />

      {/* Hero Section with Background Image */}
      <header className="relative flex flex-col items-center justify-center min-h-screen w-full text-center">
        <Image 
          src="/Pictures/16_9_Bildschrim_Gemälde+COzwei+Kreis.jpg" 
          alt="COzwei Hero Background" 
          fill 
          style={{objectFit: 'cover', objectPosition: 'center'}}
          className="z-0 opacity-90"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-3xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.heroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>{t.heroSubtitle}</p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-6 text-xl"
              style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fa18a'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#81B29A'}
              onClick={() => {
                const target = document.getElementById('loesungen');
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
      </header>

      {/* Carbon Calculator Section */}
      {/* <CarbonCalculator /> */}

      {/* Main Content Placeholder */}
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto">
        {/* Lösungen Section */}
        <section id="loesungen" className="w-full py-16 relative overflow-x-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 animate-gradient-x" style={{background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)', opacity: 0.7}} />
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>{t.solutions}</h2>
            <p className="mb-12 text-lg text-center" style={{ color: '#3D405B' }}>{t.solutionsDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Nachhaltigkeit Card */}
              <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/pexels-akilmazumder-1072824.jpg" alt="Nachhaltigkeit" width={600} height={256} quality={75} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#23243a' }}>{t.sustainability}</h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>{t.sustainabilityDesc}</p>
                  <a href="/nachhaltigkeit" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition">
                    {t.learnMore}
                    <svg className="ml-2 w-5 h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
              {/* Dekarbonisierung Card */}
              <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image 
                  src="/Pictures/pexels-pixabay-60575.jpg" 
                  alt="Dekarbonisierung" 
                  width={600} 
                  height={256} 
                  quality={75}
                  className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" 
                />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#23243a' }}>{t.decarbonization}</h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>{t.decarbonizationDesc}</p>
                  <a href="/dekarbonisierung" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition">
                    {t.learnMore}
                    <svg className="ml-2 w-5 h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
              {/* Maßnahmen Card */}
              <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/pexels-tomfisk-9893729_low_low.jpg" alt="Maßnahmen" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#23243a' }}>{t.measures}</h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>{t.measuresDesc}</p>
                  <a href="/massnahmen" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition">
                    {t.learnMore}
                    <svg className="ml-2 w-5 h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Customers Section */}
        <section id="customers" className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-10" style={{ color: '#3D405B', letterSpacing: '-0.01em' }}>{t.customers}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 justify-items-center items-center mb-6">
              <Image src="/Pictures/Logos Kunden/Bild1.png" alt="Kunde 1" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/Ernst_Klett_Verlag.svg.png" alt="Kunde 2" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image.png" alt="Kunde 3" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image copy.png" alt="Kunde 4" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image copy 2.png" alt="Kunde 5" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image copy 3.png" alt="Kunde 6" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image copy 4.png" alt="Kunde 7" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
              <Image src="/Pictures/Logos Kunden/image copy 5.png" alt="Kunde 8" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
                              <Image src="/Pictures/Logos Kunden/image copy 6.png" alt="Kunde 9" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
                <Image src="/Pictures/Logos Kunden/image copy 7.png" alt="Kunde 10" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
                <Image src="/Pictures/Logos Kunden/image copy 8.png" alt="Kunde 11" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
                              <Image src="/Pictures/Logos Kunden/image-removebg-preview.png" alt="Kunde 12" width={140} height={64} quality={75} className="max-h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-200" />
            </div>
            <a 
              href="/referenzen" 
              className="text-center mt-2 text-[#81B29A] text-base font-medium opacity-80 hover:underline hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1 group"
            >
              {t.andManyMore}
              <svg 
                className="w-4 h-4 text-[#81B29A] group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
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
