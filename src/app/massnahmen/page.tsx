"use client";
import Header from "../Header";
import Image from "next/image";
import { useState } from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function Massnahmen() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/pexels-tomfisk-9893729.jpg" 
            alt="Maßnahmen Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.measuresHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.measuresHeroSubtitle}
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
        {/* Drei-Karten-Section */}
        <section id="karten-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-center mb-4" style={{ color: '#3D405B' }}>
              {t.measuresSectionTitle}
            </h1>
            <p className="mb-12 text-lg text-center" style={{ color: '#3D405B' }}>
              {t.measuresSectionSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-stretch h-full">
              {/* Card 1 */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/image copy 2.png" alt="Card 1" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.measuresCard1Title}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.measuresCard1Desc}
                  </p>
                  <a href="#" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition text-lg">
                    {t.measuresLearnMore}
                    <svg className="ml-2 w-5 h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col h-[520px] rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                <Image src="/Pictures/Bild2.png" alt="Card 2" width={600} height={256} quality={40} className="w-full h-64 object-cover rounded-t-2xl transition-all duration-300" />
                <div className="flex flex-col p-8 flex-1">
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#23243a' }}>
                    {t.measuresCard2Title}
                  </h3>
                  <p className="mb-6 text-base" style={{ color: '#23243a' }}>
                    {t.measuresCard2Desc}
                  </p>
                  <a href="#" className="mt-auto text-[#81B29A] font-bold flex items-center group/link hover:underline transition text-lg">
                    {t.measuresLearnMore}
                    <svg className="ml-2 w-5 h-5 text-[#81B29A] group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Klima-Förderungen Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center bg-white">
          <div className="max-w-4xl w-full mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center" style={{ color: '#3D405B' }}>{t.climateFundingTitle}</h2>
            <p className="text-lg text-center mb-10" style={{ color: '#3D405B' }}>
              {t.climateFundingSubtitle}
            </p>
            <div className="flex justify-center items-center w-full">
              <iframe
                src="/Documents/Förderkatalog_Deutschland_COzwei_6_2025.pdf#toolbar=0&navpanes=0&view=FitH"
                title="Klima-Förderkatalog PDF"
                className="w-full h-[480px] rounded-2xl border border-[#81B29A]/30"
                style={{ background: 'white' }}
                allowFullScreen
              />
            </div>
            <form className="flex flex-col items-center gap-4 mt-8 mb-2 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition text-lg"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                required
              />
              {emailTouched && !isEmailValid && (
                <span className="text-red-500 text-sm w-full text-left">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
              )}
              <label className="flex items-center gap-2 w-full text-sm">
                <input
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={e => setPrivacyChecked(e.target.checked)}
                  className="accent-[#81B29A] w-4 h-4"
                  required
                />
                {t.acceptPrivacy}<a href="#datenschutz" className="underline text-[#81B29A]" target="_blank">{t.privacyPolicy}</a>.
              </label>
              <a
                href={isEmailValid && privacyChecked ? "/Documents/Förderkatalog_Deutschland_COzwei_6_2025.pdf" : undefined}
                download={isEmailValid && privacyChecked ? true : undefined}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-bold text-white text-lg transition bg-[#81B29A] hover:bg-[#6fa18a] focus:outline-none focus:ring-2 focus:ring-[#81B29A]/40 ${(!isEmailValid || !privacyChecked) ? 'opacity-50 pointer-events-none' : ''}`}
                style={{}}
                tabIndex={isEmailValid && privacyChecked ? 0 : -1}
                aria-disabled={!isEmailValid || !privacyChecked}
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"/></svg>
                PDF herunterladen
              </a>
            </form>
          </div>
        </section>
        {/* Unsere Partner Section */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center" style={{ color: '#3D405B' }}>Unsere Partner</h2>
            {/* Slider logic */}
            {(() => {
              const partners = [
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
                  logo: '/Pictures/Logos Kunden/image copy 7.png',
                  name: t.partnerMicrosoftTitle,
                  text: t.partnerMicrosoftDesc
                }
              ];
              const [current, setCurrent] = useState(0);
              const visible = 3;
              const max = partners.length;
              const canPrev = max > visible;
              const canNext = max > visible;
              // Calculate the correct transform so the last slide is always fully visible
              const getTransform = () => {
                if (current > max - visible) return `-${(max - visible) * (100 / visible)}%`;
                return `-${current * (100 / visible)}%`;
              };
              return (
                <div className="relative w-full">
                  <button
                    onClick={() => setCurrent(c => c === 0 ? max - visible : c - 1)}
                    disabled={!canPrev}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#81B29A]/40 rounded-full w-12 h-12 flex items-center justify-center text-[#3D405B] text-2xl font-bold shadow-none transition hover:bg-[#e0eafc] disabled:opacity-30 disabled:cursor-not-allowed`}
                    aria-label="Vorherige Partner"
                  >
                    &#8592;
                  </button>
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500"
                      style={{ transform: `translateX(${getTransform()})` }}
                    >
                      {partners.map((partner, i) => {
                        const Card = (
                          <div key={i} className="flex-shrink-0 w-full sm:w-[280px] mx-2 flex flex-col items-center bg-white/80 rounded-2xl border border-[#81B29A]/20 p-6 transition hover:scale-105 hover:border-[#81B29A]" style={{ maxWidth: 280, minWidth: 280, minHeight: 340, height: 340 }}>
                            <div className="w-28 h-20 mb-4 flex items-center justify-center">
                              <img src={partner.logo} alt={partner.name + ' Logo'} className="object-contain max-h-16" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#3D405B' }}>{partner.name}</h3>
                            <p className="text-sm text-center text-[#23243a]">{partner.text}</p>
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
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#81B29A]/40 rounded-full w-12 h-12 flex items-center justify-center text-[#3D405B] text-2xl font-bold shadow-none transition hover:bg-[#e0eafc] disabled:opacity-30 disabled:cursor-not-allowed`}
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