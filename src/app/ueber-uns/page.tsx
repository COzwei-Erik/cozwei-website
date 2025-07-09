"use client";
import Header from "../Header";
import Image from "next/image";
import React from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function UeberUns() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/2024-04-02__DSC0341-NEF_2024-03-24_DXO.jpg" 
            alt="Über uns Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.aboutHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.aboutHeroDesc}
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
              style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fa18a'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#81B29A'}
              onClick={() => {
                const target = document.getElementById('team-section');
                if (target) {
                  const header = document.querySelector('nav');
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {t.aboutHeroButton}
            </button>
          </div>
        </div>
      </section>
      {/* Interactive Europe Map Section */}
      <section className="w-full flex justify-center items-center py-12 bg-white/70">
        <div className="relative bg-white/80 rounded-2xl border border-white/60 backdrop-blur-sm p-8 max-w-3xl w-full flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>
            {t.aboutMapTitle}
          </h2>
          <p className="mb-8 text-lg text-center" style={{ color: '#3D405B' }}>
            {t.aboutMapSubtitle}
          </p>
          <EuropeMap />
        </div>
      </section>
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto">
        {/* Team/Info Section */}
        <section id="team-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>
              {t.aboutTeamTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-stretch h-full">
              {/* Card 1 */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/Christian.png" alt="Christian Philippen" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Christian Philippen</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleChristian}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">christian.philippen@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">+49 176 45830572</div>
                  <a href="https://www.linkedin.com/in/christian-philippen/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/Erik.png" alt="Erik Jakob" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Erik Jakob</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleErik}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">erik.jakob@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">+49 176 30886017</div>
                  <a href="https://www.linkedin.com/in/erik-jakob-9a81b5152/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
              {/* Card 3: Alina Krut */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/Alina_V2.png" alt="Alina Krut" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Alina Krut</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleAlina}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">alina.krut@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/alina-krut/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
              {/* Card 4: Dominik Enger */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/Dominik_V2.png" alt="Dominik Enger" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Dominik Enger</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleDominik}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">dominik.enger@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/dominik-enger/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
              {/* Card 5: Louis Noel Tallner */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/Louis_V2 (1).png" alt="Louis Noel Tallner" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Louis Noel Tallner</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleLouis}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">louis.tallner@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/louis-noel-tallner-025936296/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
              {/* Card 6: Ronan Maier */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group w-full max-w-full">
                <Image src="/Pictures/65f96a3129c25914fbad539c_2024-03-14__DSC8933-NEF_2024-03-10_DXO.png" alt="Ronan Maier" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 w-28 h-28 sm:w-[180px] sm:h-[180px]" />
                <div className="flex flex-col justify-center flex-1 w-full">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Ronan Maier</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleRonan}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-words">&nbsp;</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3 break-words">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/ronan-maier-852764207/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src="/Pictures/image copy 3.png" alt="LinkedIn" width={24} height={24} className="rounded w-6 h-6 sm:w-7 sm:h-7" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits/Join Us Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center bg-white">
          <h2 className="text-4xl font-extrabold text-center mb-10" style={{ color: '#3D405B' }}>
            {t.aboutBenefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
            {[t.aboutBenefit1, t.aboutBenefit2, t.aboutBenefit3, t.aboutBenefit4, t.aboutBenefit5, t.aboutBenefit6].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center text-[#3D405B] text-xl font-semibold h-20 bg-white/60 border border-[#81B29A]/20 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group text-center px-4"
                style={{ minHeight: '56px' }}
              >
                {item}
              </div>
            ))}
          </div>
          <a
            href="https://cozwei-gmbh.jobs.personio.de/?language=de"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-12 py-4 rounded-lg font-bold text-lg shadow-lg transition tracking-widest inline-block text-center"
            style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#6fa18a')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#81B29A')}
          >
            {t.aboutApplyButton}
          </a>
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

function EuropeMap() {
  const [hovered, setHovered] = React.useState<"sintra" | "stuttgart" | null>(null);
  const [sintraBox, setSintraBox] = React.useState(false);
  const [stuttgartBox, setStuttgartBox] = React.useState(false);
  // Estimated positions for Sintra and Stuttgart on the map image
  // (adjust after first try if needed)
  // Sintra: left: 12%, top: 78%
  // Stuttgart: left: 56%, top: 38%
  return (
    <div className="relative w-full flex justify-center items-center" style={{ minHeight: 400, maxWidth: 700 }}>
      <Image
        src="/Pictures/map-Europe.png"
        alt="Karte von Europa"
        width={700}
        height={500}
        className="rounded-xl border border-[#81B29A]/30 bg-[#f8fafc]"
        style={{ width: '100%', height: 'auto', maxWidth: 700 }}
        priority
      />
      {/* Sintra (Portugal) - moved to match red marker */}
      <div
        className="absolute z-20"
        style={{ left: '0.5%', top: '82%' }}
        onMouseEnter={() => setHovered('sintra')}
        onMouseLeave={() => setTimeout(() => { if (!sintraBox) setHovered(null); }, 50)}
      >
        <div className="w-5 h-5 bg-[#81B29A] border-4 border-[#3D405B] rounded-full cursor-pointer transition-transform hover:scale-110" />
        {(hovered === 'sintra' || sintraBox) && (
          <div className="absolute left-10 top-[-30px] z-30 animate-fade-in"
            onMouseEnter={() => setSintraBox(true)}
            onMouseLeave={() => { setSintraBox(false); setHovered(null); }}
          >
            <div className="bg-white/90 border border-[#81B29A]/40 rounded-xl p-4 flex flex-col items-center w-56">
              <Image src="/Pictures/image copy 5.png" alt="Sintra" width={128} height={128} className="w-32 h-32 object-cover rounded-lg mb-2 transition-all duration-300" />
              <div className="font-bold text-[#3D405B] mb-1">Sintra, Portugal</div>
              <a
                href="https://www.google.com/maps?q=AV+Heliodoro+Salgado+48A,+Sintra,+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3D405B] underline hover:text-[#81B29A] transition"
              >
                AV Heliodoro Salgado 48A
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Stuttgart (Germany) - moved to match red marker */}
      <div
        className="absolute z-20"
        style={{ left: '41.5%', top: '60%' }}
        onMouseEnter={() => setHovered('stuttgart')}
        onMouseLeave={() => setTimeout(() => { if (!stuttgartBox) setHovered(null); }, 50)}
      >
        <div className="w-5 h-5 bg-[#81B29A] border-4 border-[#3D405B] rounded-full cursor-pointer transition-transform hover:scale-110" />
        {(hovered === 'stuttgart' || stuttgartBox) && (
          <div className="absolute left-10 top-[-30px] z-30 animate-fade-in"
            onMouseEnter={() => setStuttgartBox(true)}
            onMouseLeave={() => { setStuttgartBox(false); setHovered(null); }}
          >
            <div className="bg-white/90 border border-[#81B29A]/40 rounded-xl p-4 flex flex-col items-center w-56">
              <Image src="/Pictures/WhatsApp Bild 2025-06-15 um 19.04.26_0e38abfb.jpg" alt="Stuttgart" width={128} height={128} className="w-32 h-32 object-cover rounded-lg mb-2 transition-all duration-300" />
              <div className="font-bold text-[#3D405B] mb-1">Stuttgart, Deutschland</div>
              <a
                href="https://www.google.com/maps?q=Gutenbergstraße+16A,+70176+Stuttgart,+Deutschland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3D405B] underline hover:text-[#81B29A] transition"
              >
                Gutenbergstraße 16A
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 