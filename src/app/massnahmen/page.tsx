"use client";
import Header from "../Header";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "@/app/components/ContactForm";
import PDFDownloadForm from "@/app/components/PDFDownloadForm";

export default function Massnahmen() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

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

  // Memoize partners data to prevent unnecessary re-renders
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
    },
    {
      logo: '/Pictures/Logos Kunden/image copy 9.png',
      name: t.partnerMicrosoftTitle,
      text: t.partnerMicrosoftDesc
    }
  ], [t]);
  const max = partners.length;
  const canPrev = max > visible;
  const canNext = max > visible;
  // Calculate the correct transform so the last slide is always fully visible
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 break-words" style={{ color: '#3D405B' }}>
              {t.measuresSectionTitle}
            </h1>
            <p className="mb-8 sm:mb-12 text-base sm:text-lg text-center break-words" style={{ color: '#3D405B' }}>
              {t.measuresSectionSubtitle}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center place-items-stretch h-full">
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
                  <a href="/foerderungen" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition text-base sm:text-lg">
                    {t.measuresLearnMore}
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col h-auto sm:h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image 
                  src="/Pictures/Bild2.png" 
                  alt="Card 2" 
                  width={600} 
                  height={256} 
                  quality={75}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-2xl transition-all duration-300"
                  loading="lazy"
                />
                <div className="flex flex-col p-4 sm:p-8 flex-1">
                  <h3 className="text-base sm:text-lg font-extrabold mb-2 break-words" style={{ color: '#23243a' }}>
                    {t.measuresCard2Title}
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base break-words" style={{ color: '#23243a' }}>
                    {t.measuresCard2Desc}
                  </p>
                  <a href="#" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition text-base sm:text-lg">
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
                <div className="relative">
                  {/* Hintergrund-Seite (leicht versetzt) */}
                  <div
                    className="absolute -top-2 -right-2 w-56 sm:w-64 aspect-[3/4] rounded-xl shadow-lg rotate-[4deg]"
                    style={{
                      background: 'linear-gradient(135deg, #5a7a6a 0%, #3d5747 100%)',
                    }}
                    aria-hidden
                  />
                  {/* Haupt-Cover */}
                  <div
                    className="relative w-56 sm:w-64 aspect-[3/4] rounded-xl shadow-2xl overflow-hidden p-6 flex flex-col text-white"
                    style={{
                      background: 'linear-gradient(135deg, #4a6855 0%, #2f4636 100%)',
                    }}
                  >
                    {/* Dekorative weiße Kreise (angelehnt an das Cover-Design) */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/15" aria-hidden />
                    <div className="absolute -top-2 right-10 w-12 h-12 rounded-full bg-white/20" aria-hidden />
                    <div className="absolute top-14 right-2 w-8 h-8 rounded-full bg-white/15" aria-hidden />

                    <div className="relative flex-1 flex flex-col justify-end">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-80 mb-2">
                        COzwei
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold leading-tight mb-1">
                        Förderkatalog
                      </div>
                      <div className="text-sm sm:text-base font-semibold opacity-95 leading-snug">
                        für Klimaförderungen
                      </div>
                    </div>
                    <div className="relative mt-6 pt-3 border-t border-white/20 text-[10px] opacity-80 flex justify-between">
                      <span>Stand 10/2025</span>
                      <span>35 Seiten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Unsere Partner Section */}
        <section className="w-full py-8 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center break-words" style={{ color: '#3D405B' }}>Unsere Partner</h2>
            {/* Slider logic */}
            {(() => {
              return (
                <div className="relative w-full">
                  <button
                    onClick={() => setCurrent(c => c === 0 ? max - visible : c - 1)}
                    disabled={!canPrev}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#81B29A]/40 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#3D405B] text-xl sm:text-2xl font-bold shadow-none transition hover:bg-[#e0eafc] disabled:opacity-30 disabled:cursor-not-allowed`}
                    aria-label="Vorherige Partner"
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
                          <div key={i} className="flex-shrink-0 w-full sm:w-[280px] mx-1 sm:mx-2 flex flex-col items-center bg-white/80 rounded-2xl border border-[#81B29A]/20 p-4 sm:p-6 transition hover:scale-105 hover:border-[#81B29A]" style={{ 
                            maxWidth: isMobile ? 'calc(100vw - 6rem)' : '280px', 
                            minWidth: isMobile ? 'calc(100vw - 6rem)' : '280px', 
                            minHeight: isMobile ? 240 : 280, 
                            height: isMobile ? 240 : 280 
                          }}>
                            <div className="w-20 h-16 sm:w-28 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center">
                              <Image
                                src={partner.logo}
                                alt={partner.name + ' Logo'}
                                width={120}
                                height={80}
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
                    aria-label="Nächste Partner"
                  >
                    &#8594;
                  </button>
                </div>
              );
            })()}
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
      <ContactForm />
      <footer className="bg-gray-100 py-6 sm:py-8 px-4 mt-8 text-center text-xs sm:text-sm text-gray-600">
        <div className="mb-2 break-words">COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull; Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de</div>
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