"use client";
import Header from "../Header";
import Image from "next/image";
import React from "react";
import { useLanguage, translations } from "../LanguageContext";
import { useState, useMemo, useEffect } from "react";

// Inline LinkedIn-Icon (ersetzt /Pictures/image copy 3.png).
// Verhindert rechtsseitiges Clipping in Karten mit overflow-hidden + rounded-2xl.
function LinkedInIcon({ className = "w-6 h-6 sm:w-7 sm:h-7" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="#0A66C2"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function UeberUns() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const jobsLanguage = language === "en" ? "en" : language === "pt" ? "pt" : "de";
  
  // Partner slider state
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  
  // Responsive partner slider
  useEffect(() => {
    const updateVisible = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setVisible(mobile ? 1 : 3);
    };
    
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);
  
  const partners = useMemo(() => [
    {
      type: 'link',
      href: 'https://solera.de/',
      logo: '/Pictures/Logos Partner/image.png',
      name: t.partnerSoleraTitle,
      text: t.partnerSoleraDesc
    },
    {
      type: 'link',
      href: 'https://www.effizienzpioniere.de/',
      logo: '/Pictures/Logos Partner/image copy.png',
      name: t.partnerEffizienzTitle,
      text: t.partnerEffizienzDesc
    },
    {
      type: 'link',
      href: 'https://www.grundsteine.com/',
      logo: '/Pictures/Logos Partner/image copy 2.png',
      name: t.partnerGrundsteineTitle,
      text: t.partnerGrundsteineDesc
    },
    {
      type: 'link',
      href: 'https://envoria.com/de',
      logo: '/Pictures/Logos Partner/image copy 3.png',
      name: t.partnerEnvoriaTitle,
      text: t.partnerEnvoriaDesc
    },
    {
      type: 'link',
      href: 'https://www.finmatch.de/',
      logo: '/Pictures/Logos Partner/image copy 4.png',
      name: t.partnerFinmatchTitle,
      text: t.partnerFinmatchDesc
    },
    {
      type: 'link',
      href: 'https://www.remzero.de/',
      logo: '/Pictures/Logos Partner/image copy 5.png',
      name: t.partnerRemzeroTitle,
      text: t.partnerRemzeroDesc
    }
  ], [t]);
  const max = partners.length;
  const canPrev = max > visible;
  const canNext = max > visible;
  const getTransform = () => {
    if (current > max - visible) return `-${(max - visible) * (100 / visible)}%`;
    return `-${current * (100 / visible)}%`;
  };
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/2024-04-02__DSC0341-NEF_2024-03-24_DXO.jpg" 
            alt={t.aboutHeroImageAlt}
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <div className="bg-white/80 rounded-2xl shadow-xl px-4 sm:px-8 py-8 sm:py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words" style={{ color: '#3D405B' }}>{t.aboutHeroTitle}</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 break-words" style={{ color: '#3D405B' }}>
              {t.aboutHeroDesc}
            </p>
            <button
              type="button"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold shadow-lg transition mb-2 text-lg sm:text-xl"
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
      <section className="w-full flex justify-center items-center py-8 sm:py-12 bg-white/70 px-4">
        <div className="relative bg-white/80 rounded-2xl border border-white/60 backdrop-blur-sm p-4 sm:p-8 max-w-3xl w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 break-words" style={{ color: '#3D405B' }}>
            {t.aboutMapTitle}
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center break-words" style={{ color: '#3D405B' }}>
            {t.aboutMapSubtitle}
          </p>
          <EuropeMap t={t} />
        </div>
      </section>
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full">
        {/* Team/Info Section */}
        <section id="team-section" className="w-full py-8 sm:py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 break-words" style={{ color: '#3D405B' }}>
              {t.aboutTeamTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center place-items-stretch h-full">
              {/* Card 1 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Christian.png" alt="Christian Philippen" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Christian Philippen</div>
                  <div className="text-sm sm:text-base text-[#23243a] mb-1 break-words">{t.teamFocusChristian}</div>
                  <div className="text-sm font-semibold mb-2 text-[#81B29A] break-words">{t.teamRoleChristian}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">christian.philippen@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">+49 176 45830572</div>
                  <a href="https://www.linkedin.com/in/christian-philippen/" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Erik.png" alt="Erik Jakob" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Erik Jakob</div>
                  <div className="text-sm sm:text-base text-[#23243a] mb-1 break-words">{t.teamFocusErik}</div>
                  <div className="text-sm font-semibold mb-2 text-[#81B29A] break-words">{t.teamRoleErik}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">erik.jakob@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">+49 176 30886017</div>
                  <a href="https://www.linkedin.com/in/erik-jakob-9a81b5152/" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
              {/* Card 3: Dominik Enger */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Dominik_V2.png" alt="Dominik Enger" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Dominik Enger</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleDominik}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">dominik.enger@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/dominik-enger/" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
              {/* Card 4: Ronan Maier */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/65f96a3129c25914fbad539c_2024-03-14__DSC8933-NEF_2024-03-10_DXO.png" alt="Ronan Maier" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Ronan Maier</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleRonan}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">mail@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/ronan-maier-852764207/" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
              {/* Card 7: Marie Bruns */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Marie_Bruns.png" alt="Marie Bruns" width={600} height={600} className="rounded-xl object-contain flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" unoptimized priority quality={100} style={{ imageRendering: 'crisp-edges' }} />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Marie Bruns</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleMarie}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">marie.bruns@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/marie-bruns-9384481b5/" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
              {/* Card 8: Hannah Schmitt */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Hannah_Schmitt_v2.png" alt="Hannah Schmitt" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Hannah Schmitt</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleHannah}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">hannah.schmitt@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">&nbsp;</div>
                </div>
              </div>
              {/* Card 9: Ricardo Furtado */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl border border-[#81B29A]/30 p-4 sm:p-6 gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Logos Kunden/ChatGPT Image May 5, 2026, 04_35_49 PM.png" alt="Ricardo Furtado" width={120} height={120} className="rounded-xl object-cover flex-shrink-0 mb-4 md:mb-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44" />
                <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                  <div className="text-lg sm:text-xl font-bold mb-1 text-[#3D405B] break-words">Ricardo Furtado</div>
                  <div className="text-sm sm:text-base font-semibold mb-2 text-[#81B29A] tracking-wide break-words">{t.teamRoleRicardo}</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-1 break-all">ricardo.furtado@cozwei.de</div>
                  <div className="text-xs sm:text-sm text-[#3D405B] mb-3">&nbsp;</div>
                  <a href="https://www.linkedin.com/in/ricardo-furtado-7a36b2100" target="_blank" rel="noopener noreferrer" className="inline-block"><LinkedInIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Historie & Motivation Section */}
        <section className="w-full py-8 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center break-words"
              style={{ color: '#3D405B' }}
            >
              {t.aboutHistoryTitle}
            </h2>
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed" style={{ color: '#23243a' }}>
              <p>
                <span className="font-bold" style={{ color: '#3D405B' }}>{t.aboutHistoryP1Lead}</span>{' '}
                {t.aboutHistoryP1Body}
              </p>
              <p>
                <span className="font-bold" style={{ color: '#3D405B' }}>{t.aboutHistoryP2Lead}</span>{' '}
                {t.aboutHistoryP2Body}
              </p>
              <p>
                <span className="font-bold" style={{ color: '#3D405B' }}>{t.aboutHistoryP3Lead}</span>{' '}
                {t.aboutHistoryP3Body}
              </p>
              <p>
                <span className="font-bold" style={{ color: '#3D405B' }}>{t.aboutHistoryP4Lead}</span>{' '}
                {t.aboutHistoryP4Body}
              </p>
            </div>

            <figure className="mt-8 sm:mt-10">
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#81B29A]/30 bg-[#f8fafc]" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src="/Pictures/Gruendungsteam_COzwei_November_2022.jpg"
                  alt={t.aboutHistoryImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs sm:text-sm italic" style={{ color: '#3D405B', opacity: 0.75 }}>
                {t.aboutHistoryImageCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Partner Section */}
        <section className="w-full py-8 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center break-words" style={{ color: '#3D405B' }}>{t.aboutPartnersTitle}</h2>
            <div className="relative w-full">
              <button
                onClick={() => setCurrent(c => c === 0 ? max - visible : c - 1)}
                disabled={!canPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#81B29A]/40 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#3D405B] text-xl sm:text-2xl font-bold shadow-none transition hover:bg-[#e0eafc] disabled:opacity-30 disabled:cursor-not-allowed`}
                aria-label={t.aboutPartnersPreviousAria}
              >
                &#8592;
              </button>
              <div className="overflow-hidden px-12 sm:px-16">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(${getTransform()})` }}
                >
                  {partners.map((partner, i) => {
                                          const Card = (
                        <div key={i} className="flex-shrink-0 w-full sm:w-[280px] mx-1 sm:mx-2 flex flex-col items-center bg-white/80 rounded-2xl border border-[#81B29A]/20 p-4 sm:p-6" style={{
                          maxWidth: isMobile ? 'calc(100vw - 6rem)' : '280px', 
                          minWidth: isMobile ? 'calc(100vw - 6rem)' : '280px', 
                          minHeight: isMobile ? 240 : 280, 
                          height: isMobile ? 240 : 280 
                        }}>
                          <div className="w-20 h-16 sm:w-28 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center">
                            <Image 
                              src={partner.logo} 
                              alt={partner.name + ' Logo'} 
                              className="object-contain max-h-12 sm:max-h-16"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold mb-2 text-center break-words" style={{ color: '#3D405B' }}>{partner.name}</h3>
                          <p className="text-xs sm:text-sm text-center text-[#23243a] break-words">{partner.text}</p>
                        </div>
                      );
                    if (partner.type === 'link') {
                      return (
                        <a key={i} href={partner.href} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">{Card}</a>
                      );
                    }
                    return Card;
                  })}
                </div>
              </div>
              <button
                onClick={() => setCurrent(c => c === max - visible ? 0 : c + 1)}
                disabled={!canNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#81B29A]/40 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#3D405B] text-xl sm:text-2xl font-bold shadow-none transition hover:bg-[#e0eafc] disabled:opacity-30 disabled:cursor-not-allowed`}
                aria-label={t.aboutPartnersNextAria}
              >
                &#8594;
              </button>
            </div>
          </div>
        </section>
        
        {/* Benefits/Join Us Section */}
        <section className="w-full py-8 sm:py-16 flex flex-col items-center justify-center bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 break-words" style={{ color: '#3D405B' }}>
            {t.aboutBenefitsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full mb-8 sm:mb-12">
            {[t.aboutBenefit1, t.aboutBenefit2, t.aboutBenefit3, t.aboutBenefit4, t.aboutBenefit5, t.aboutBenefit6].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center text-[#3D405B] text-base sm:text-lg md:text-xl font-semibold h-16 sm:h-20 bg-white/60 border border-[#81B29A]/20 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group text-center px-3 sm:px-4 break-words"
                style={{ minHeight: '56px' }}
              >
                {item}
              </div>
            ))}
          </div>
          <a
            href={`https://cozwei-gmbh.jobs.personio.de/?language=${jobsLanguage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-6 px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition tracking-widest inline-block text-center"
            style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#6fa18a')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#81B29A')}
          >
            {t.aboutApplyButton}
          </a>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 sm:py-8 px-4 mt-8 text-center text-xs sm:text-sm text-gray-600">
        <div className="mb-2 break-words">{t.footerContactLine}</div>
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

function EuropeMap({ t }: { t: (typeof translations)["de"] }) {
  const [hovered, setHovered] = React.useState<"sintra" | "stuttgart" | null>(null);
  const [sintraBox, setSintraBox] = React.useState(false);
  const [stuttgartBox, setStuttgartBox] = React.useState(false);
  // Estimated positions for Sintra and Stuttgart on the map image
  // (adjust after first try if needed)
  // Sintra: left: 12%, top: 78%
  // Stuttgart: left: 56%, top: 38%
  return (
    <div className="relative w-full flex justify-center items-center" style={{ minHeight: 300, maxWidth: 700 }}>
      <Image
        src="/Pictures/map-Europe.png"
        alt={t.aboutMapImageAlt}
        width={700}
        height={500}
        className="rounded-xl border border-[#81B29A]/30 bg-[#f8fafc]"
        style={{ width: '100%', height: 'auto', maxWidth: 700 }}
        priority
      />
      {/* Sintra marker */}
      <div
        className="absolute z-20"
        style={{ left: '0.5%', top: '82%' }}
        onMouseEnter={() => setHovered('sintra')}
        onMouseLeave={() => setTimeout(() => { if (!sintraBox) setHovered(null); }, 50)}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#81B29A] border-2 sm:border-4 border-[#3D405B] rounded-full cursor-pointer transition-transform hover:scale-110" />
        {(hovered === 'sintra' || sintraBox) && (
          <div className="absolute left-8 sm:left-10 top-[-20px] sm:top-[-30px] z-30 animate-fade-in"
            onMouseEnter={() => setSintraBox(true)}
            onMouseLeave={() => { setSintraBox(false); setHovered(null); }}
          >
            <div className="bg-white/90 border border-[#81B29A]/40 rounded-xl p-3 sm:p-4 flex flex-col items-center w-48 sm:w-56">
              <Image src="/Pictures/image copy 5.png" alt="Sintra" width={128} height={128} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-2 transition-all duration-300" />
              <div className="font-bold text-[#3D405B] mb-1 text-sm sm:text-base break-words">{t.aboutMapSintraLabel}</div>
              <a
                href="https://www.google.com/maps?q=AV+Heliodoro+Salgado+48A,+Sintra,+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#3D405B] underline hover:text-[#81B29A] transition break-words"
              >
                {t.aboutMapSintraAddress}
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Stuttgart marker */}
      <div
        className="absolute z-20"
        style={{ left: '41.5%', top: '60%' }}
        onMouseEnter={() => setHovered('stuttgart')}
        onMouseLeave={() => setTimeout(() => { if (!stuttgartBox) setHovered(null); }, 50)}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#81B29A] border-2 sm:border-4 border-[#3D405B] rounded-full cursor-pointer transition-transform hover:scale-110" />
        {(hovered === 'stuttgart' || stuttgartBox) && (
          <div className="absolute left-8 sm:left-10 top-[-20px] sm:top-[-30px] z-30 animate-fade-in"
            onMouseEnter={() => setStuttgartBox(true)}
            onMouseLeave={() => { setStuttgartBox(false); setHovered(null); }}
          >
            <div className="bg-white/90 border border-[#81B29A]/40 rounded-xl p-3 sm:p-4 flex flex-col items-center w-48 sm:w-56">
              <Image src="/Pictures/WhatsApp Bild 2025-06-15 um 19.04.26_0e38abfb.jpg" alt="Stuttgart" width={128} height={128} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-2 transition-all duration-300" />
              <div className="font-bold text-[#3D405B] mb-1 text-sm sm:text-base break-words">{t.aboutMapStuttgartLabel}</div>
              <a
                href="https://www.google.com/maps?q=Gutenbergstraße+16A,+70176+Stuttgart,+Deutschland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#3D405B] underline hover:text-[#81B29A] transition break-words"
              >
                {t.aboutMapStuttgartAddress}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 