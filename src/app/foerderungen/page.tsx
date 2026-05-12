"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

export default function Foerderungen() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const [selectedState, setSelectedState] = useState<string>("");

  // Bundesländer data with their available funding boxes
  const bundeslaenderData = {
    "Baden-Württemberg": { box1: true, box2: false, box3: true },
    "Bayern": { box1: true, box2: true, box3: true },
    "Berlin": { box1: true, box2: true, box3: true },
    "Brandenburg": { box1: true, box2: true, box3: true },
    "Bremen": { box1: true, box2: true, box3: true },
    "Hamburg": { box1: true, box2: false, box3: true },
    "Hessen": { box1: true, box2: true, box3: true },
    "Mecklenburg-Vorpommern": { box1: true, box2: true, box3: true },
    "Niedersachsen": { box1: true, box2: true, box3: true },
    "Nordrhein-Westfalen": { box1: true, box2: true, box3: true },
    "Rheinland-Pfalz": { box1: true, box2: true, box3: true },
    "Saarland": { box1: true, box2: true, box3: true },
    "Sachsen": { box1: true, box2: true, box3: true },
    "Sachsen-Anhalt": { box1: true, box2: true, box3: true },
    "Schleswig-Holstein": { box1: true, box2: true, box3: true },
    "Thüringen": { box1: true, box2: true, box3: true }
  };

  const bundeslaender = Object.keys(bundeslaenderData);
  const selectedStateData = selectedState ? bundeslaenderData[selectedState as keyof typeof bundeslaenderData] : null;
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/image copy 2.png" 
            alt="Förderungen Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.foerderungenHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.foerderungenHeroSubtitle}
            </p>
            <button
              type="button"
              className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition mb-2 text-xl"
              style={{ backgroundColor: '#81B29A', color: 'white', boxShadow: '0 4px 24px 0 rgba(61, 64, 91, 0.25)' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6fa18a'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#81B29A'}
              onClick={() => {
                const target = document.getElementById('content-section');
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
        {/* Funding Selection Section */}
        <section id="content-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-8" style={{ color: '#3D405B' }}>
              Verfügbare Förderungen nach Bundesland
            </h2>
            
            {/* Bundesland Selection */}
            <div className="max-w-md mx-auto mb-12">
              <label htmlFor="bundesland-select" className="block mb-3 font-semibold text-lg text-center" style={{ color: '#3D405B' }}>
                {t.foerderungenSelectState}
              </label>
              <select
                id="bundesland-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-4 rounded-lg border-2 border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition text-lg font-medium"
                style={{ color: '#3D405B' }}
              >
                <option value="">{t.foerderungenSelectState}</option>
                {bundeslaender.map((bundesland) => (
                  <option key={bundesland} value={bundesland}>
                    {bundesland}
                  </option>
                ))}
              </select>
            </div>

            {/* Funding Boxes */}
            {selectedState && selectedStateData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Box 1: BAFA Modul 1-6 Förderung */}
                {selectedStateData.box1 && (
                  <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                    <div className="flex flex-col p-8 flex-1">
                      <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#23243a' }}>
                        {t.foerderungenBox1Title}
                      </h3>
                      <p className="mb-6 text-base leading-relaxed" style={{ color: '#23243a' }}>
                        {t.foerderungenBox1Desc}
                      </p>
                      <div className="mt-auto">
                        <div className="bg-[#81B29A]/10 rounded-lg p-4 border border-[#81B29A]/20">
                          <p className="text-sm font-semibold" style={{ color: '#81B29A' }}>
                            {t.foerderungenBox1Focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Box 2: GRW Förderung */}
                {selectedStateData.box2 && (
                  <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                    <div className="flex flex-col p-8 flex-1">
                      <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#23243a' }}>
                        {t.foerderungenBox2Title}
                      </h3>
                      <p className="mb-6 text-base leading-relaxed" style={{ color: '#23243a' }}>
                        {t.foerderungenBox2Desc}
                      </p>
                      <div className="mt-auto">
                        <div className="bg-[#81B29A]/10 rounded-lg p-4 border border-[#81B29A]/20">
                          <p className="text-sm font-semibold" style={{ color: '#81B29A' }}>
                            {t.foerderungenBox2Focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Box 3: Regionale Förderungen */}
                {selectedStateData.box3 && (
                  <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group">
                    <div className="flex flex-col p-8 flex-1">
                      <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#23243a' }}>
                        {t.foerderungenBox3Title}
                      </h3>
                      <p className="mb-6 text-base leading-relaxed" style={{ color: '#23243a' }}>
                        {t.foerderungenBox3Desc}
                      </p>
                      <div className="mt-auto">
                        <div className="bg-[#81B29A]/10 rounded-lg p-4 border border-[#81B29A]/20">
                          <p className="text-sm font-semibold" style={{ color: '#81B29A' }}>
                            {t.foerderungenBox3Focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* No selection message */}
            {!selectedState && (
              <div className="text-center py-12">
                <p className="text-lg" style={{ color: '#3D405B' }}>
                  Bitte wählen Sie ein Bundesland aus, um die verfügbaren Förderungen anzuzeigen.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Special Time-limited Funding Section */}
        <section className="w-full py-16 relative overflow-x-hidden">
          <div className="absolute inset-0 -z-10 animate-gradient-x" style={{background: 'linear-gradient(135deg, #81B29A 0%, #6fa18a 50%, #5a8f7a 100%)', opacity: 0.1}} />
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#3D405B' }}>
                {t.foerderungenSpecialTitle}
              </h2>
              <p className="text-xl mb-8" style={{ color: '#3D405B' }}>
                {t.foerderungenSpecialSubtitle}
              </p>
            </div>

            {/* Special Funding Card */}
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-[#81B29A] overflow-hidden">
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-extrabold mb-4" style={{ color: '#81B29A' }}>
                        {t.foerderungenSpecialSachsenTitle}
                      </h3>
                      <p className="text-lg mb-6" style={{ color: '#3D405B' }}>
                        {t.foerderungenSpecialSachsenDesc}
                      </p>
                      <div className="bg-white/60 rounded-xl p-6 mb-6 border border-[#81B29A]/30">
                        <h4 className="font-bold text-lg mb-3" style={{ color: '#81B29A' }}>📋 Förderdetails:</h4>
                        <ul className="space-y-2 text-sm" style={{ color: '#3D405B' }}>
                          <li className="flex items-start">
                            <span style={{ color: '#81B29A' }} className="mr-2">•</span>
                            <span>Bis zu <strong>70% Förderung</strong> auf förderfähige Kosten</span>
                          </li>
                          <li className="flex items-start">
                            <span style={{ color: '#81B29A' }} className="mr-2">•</span>
                            <span>Förderung für energieeffiziente Maschinen und Anlagen</span>
                          </li>
                          <li className="flex items-start">
                            <span style={{ color: '#81B29A' }} className="mr-2">•</span>
                            <span>Für KMU und große Unternehmen in Sachsen</span>
                          </li>
                          <li className="flex items-start">
                            <span style={{ color: '#81B29A' }} className="mr-2">•</span>
                            <span>Antragsfrist beachten - nur für begrenzte Zeit verfügbar</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm italic" style={{ color: '#3D405B' }}>
                        {t.foerderungenSpecialSachsenDetails}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="lg:w-48 flex-shrink-0">
                      <a
                        href="https://www.sab.sachsen.de/f%C3%B6rderrichtlinie-energie-und-klima/20231"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#81B29A] text-white font-bold py-4 px-6 rounded-xl text-center"
                      >
                        <div className="text-lg mb-1">{t.foerderungenSpecialSachsenButton}</div>
                        <div className="text-sm opacity-90">→ Direkt zur SAB</div>
                      </a>
                    </div>
                  </div>
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