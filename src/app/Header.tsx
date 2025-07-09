"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "./LanguageContext";

// Type for timeout ref (works in both JS and TS)
type Timeout = ReturnType<typeof setTimeout>;

const headerTranslations = {
  de: {
    solutions: "Lösungen",
    sustainability: "Nachhaltigkeit",
    decarbonization: "Dekarbonisierung",
    measures: "Maßnahmen",
    about: "Über uns",
    contact: "Kontakt",
  },
  en: {
    solutions: "Solutions",
    sustainability: "Sustainability",
    decarbonization: "Decarbonization",
    measures: "Measures",
    about: "About us",
    contact: "Contact",
  },
  pt: {
    solutions: "Soluções",
    sustainability: "Sustentabilidade",
    decarbonization: "Descarbonização",
    measures: "Medidas",
    about: "Sobre nós",
    contact: "Contato",
  },
};

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = headerTranslations[language];

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-1 shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <a href="/" className="cursor-pointer">
          <Image src="/Pictures/cozwei.png" alt="COzwei Logo" width={120} height={120} />
        </a>
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center text-base font-medium">
        <li className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}>
          <button className="hover:text-green-700 transition text-lg font-bold flex items-center gap-2" style={{ color: '#3D405B' }}>
            {t.solutions}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <ul
            className={`absolute left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-white border border-[#81B29A]/30 rounded-2xl shadow-lg py-2 transition-all z-50 ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <li><a href="/nachhaltigkeit" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold">{t.sustainability}</a></li>
            <li><a href="/dekarbonisierung" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold">{t.decarbonization}</a></li>
            <li><a href="/massnahmen" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold">{t.measures}</a></li>
          </ul>
        </li>
        <li><a href="/ueber-uns" className="hover:text-green-700 transition text-lg font-bold" style={{ color: '#3D405B' }}>{t.about}</a></li>
        <li><a href="#kontakt" className="hover:text-green-700 transition text-lg font-bold" style={{ color: '#3D405B' }}>{t.contact}</a></li>
        <li className="ml-4">
          <div className="flex items-center gap-1 border rounded px-2 py-1 bg-white">
            <button
              className={`px-3 py-1 text-lg font-bold transition-colors rounded focus:outline-none ${language === "de" ? "" : "text-[#3D405B]"}`}
              style={{ background: language === "de" ? '#8ABBA7' : 'transparent', color: language === "de" ? '#fff' : '#3D405B' }}
              onClick={() => setLanguage("de")}
            >DE</button>
            <span className="text-[#3D405B] text-lg font-bold">|</span>
            <button
              className={`px-3 py-1 text-lg font-bold hover:bg-gray-100 transition-colors rounded focus:outline-none ${language === "en" ? "" : "text-[#3D405B]"}`}
              style={{ background: language === "en" ? '#8ABBA7' : 'transparent', color: language === "en" ? '#fff' : '#3D405B' }}
              onClick={() => setLanguage("en")}
            >EN</button>
            <span className="text-[#3D405B] text-lg font-bold">|</span>
            <button
              className={`px-3 py-1 text-lg font-bold hover:bg-gray-100 transition-colors rounded focus:outline-none ${language === "pt" ? "" : "text-[#3D405B]"}`}
              style={{ background: language === "pt" ? '#8ABBA7' : 'transparent', color: language === "pt" ? '#fff' : '#3D405B' }}
              onClick={() => setLanguage("pt")}
            >PT</button>
          </div>
        </li>
      </ul>
      {/* Hamburger for mobile */}
      <button className="md:hidden p-2 rounded focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menü öffnen/schließen">
        {mobileMenuOpen ? <HiX size={32} style={{ color: '#3D405B' }} /> : <HiMenu size={32} style={{ color: '#3D405B' }} />}
      </button>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
          <div className="bg-white shadow-lg w-4/5 max-w-xs h-full p-8 flex flex-col gap-8 animate-slide-in-left">
            <button className="self-end mb-4 p-2" onClick={() => setMobileMenuOpen(false)} aria-label="Menü schließen">
              <HiX size={32} style={{ color: '#3D405B' }} />
            </button>
            <a href="/" className="mb-6 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/Pictures/cozwei.png" alt="COzwei Logo" width={100} height={100} />
            </a>
            <div className="flex flex-col gap-4 text-lg font-bold">
              <div className="relative">
                <button className="w-full flex items-center justify-between px-0 py-2 rounded hover:bg-gray-100 text-[#3D405B] font-bold text-2xl" onClick={() => setDropdownOpen(!dropdownOpen)} style={{paddingLeft: '0.25rem'}}>
                  <span className="flex items-center gap-2">{t.solutions}</span>
                  <svg className="w-5 h-5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {dropdownOpen && (
                  <div className="flex flex-col mt-2 bg-white border border-[#81B29A]/30 rounded-2xl shadow-lg py-2 z-50">
                    <a href="/nachhaltigkeit" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={() => setMobileMenuOpen(false)}>{t.sustainability}</a>
                    <a href="/dekarbonisierung" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={() => setMobileMenuOpen(false)}>{t.decarbonization}</a>
                    <a href="/massnahmen" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={() => setMobileMenuOpen(false)}>{t.measures}</a>
                  </div>
                )}
              </div>
              <a href="/ueber-uns" className="hover:text-green-700 transition text-[#3D405B] font-bold text-2xl pl-1" onClick={() => setMobileMenuOpen(false)}>{t.about}</a>
              <a href="#kontakt" className="hover:text-green-700 transition text-[#3D405B] font-bold text-2xl pl-1" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
            </div>
            <div className="mt-8 flex items-center gap-1 border rounded px-2 py-1 bg-white self-start">
              <button
                className={`px-3 py-1 text-lg font-bold transition-colors rounded focus:outline-none ${language === "de" ? "" : "text-[#3D405B]"}`}
                style={{ background: language === "de" ? '#8ABBA7' : 'transparent', color: language === "de" ? '#fff' : '#3D405B' }}
                onClick={() => setLanguage("de")}
              >DE</button>
              <span className="text-[#3D405B] text-lg font-bold">|</span>
              <button
                className={`px-3 py-1 text-lg font-bold hover:bg-gray-100 transition-colors rounded focus:outline-none ${language === "en" ? "" : "text-[#3D405B]"}`}
                style={{ background: language === "en" ? '#8ABBA7' : 'transparent', color: language === "en" ? '#fff' : '#3D405B' }}
                onClick={() => setLanguage("en")}
              >EN</button>
              <span className="text-[#3D405B] text-lg font-bold">|</span>
              <button
                className={`px-3 py-1 text-lg font-bold hover:bg-gray-100 transition-colors rounded focus:outline-none ${language === "pt" ? "" : "text-[#3D405B]"}`}
                style={{ background: language === "pt" ? '#8ABBA7' : 'transparent', color: language === "pt" ? '#fff' : '#3D405B' }}
                onClick={() => setLanguage("pt")}
              >PT</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* Add this to your global CSS or Tailwind config:
@keyframes slide-in-left {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-in-left {
  animation: slide-in-left 0.3s cubic-bezier(0.4,0,0.2,1) both;
}
*/ 