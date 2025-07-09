"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";

export default function Transformationskonzepte() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/pexels-marcin-jozwiak-199600-3641377.jpg"
            alt="Transformationskonzepte Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-[#81B29A]/20 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.transfHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.transfHeroDesc}
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
              style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fa18a'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#81B29A'}
              onClick={() => {
                const target = document.getElementById('steps');
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
        {/* Info Section */}
        <section className="w-full py-12">
          <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl border border-[#81B29A]/20 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-extrabold mb-4 text-center" style={{ color: '#3D405B' }}>{t.transfInfoTitle}</h2>
            <p className="text-lg mb-4 text-center" style={{ color: '#3D405B' }}>
              {t.transfInfoDesc.split('\n').map((line, idx) => <span key={idx}>{line}<br/><br/></span>)}
            </p>
          </div>
        </section>
        {/* 4 Steps Section */}
        <section id="steps" className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#3D405B' }}>{t.transfStepsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">01</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.transfStep1Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.transfStep1Desc}</p>
              </div>
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">02</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.transfStep2Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.transfStep2Desc}</p>
              </div>
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">03</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.transfStep3Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.transfStep3Desc}</p>
              </div>
              <div className="flex flex-col items-center bg-white/60 rounded-3xl border border-[#81B29A]/20 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#81B29A] text-white text-2xl font-bold mb-4">04</div>
                <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#23243a' }}>{t.transfStep4Title}</h3>
                <p className="text-sm text-center text-[#23243a]">{t.transfStep4Desc}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Förderfähigkeit Section */}
        <section className="w-full py-12">
          <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl border border-[#81B29A]/20 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-extrabold mb-4 text-center" style={{ color: '#3D405B' }}>{t.transfEligTitle}</h2>
            <p className="text-lg mb-4 text-center" style={{ color: '#3D405B' }}>
              {t.transfEligDesc}
            </p>
            <ul className="text-base text-[#23243a] mb-4 list-disc list-inside">
              <li>{t.transfEligList1}</li>
              <li>{t.transfEligList2}</li>
              <li>{t.transfEligList3}</li>
            </ul>
            <p className="text-lg text-center" style={{ color: '#3D405B' }}>
              {t.transfEligMax}<br/>
              <span className="text-xs">{t.transfEligSource}</span>
            </p>
          </div>
        </section>
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
      </main>
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