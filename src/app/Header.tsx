"use client";
import Image from "next/image";
import { useState, useRef, lazy, Suspense } from "react";
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

// Lazy load mobile menu component
const MobileMenu = lazy(() => import('./MobileMenu'));

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
          <Image 
            src="/Pictures/cozwei.png" 
            alt="COzwei Logo" 
            width={120} 
            height={120}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
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
        <Suspense fallback={<div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"><div className="bg-white p-4 rounded">Loading...</div></div>}>
          <MobileMenu 
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            language={language}
            setLanguage={setLanguage}
            t={t}
          />
        </Suspense>
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