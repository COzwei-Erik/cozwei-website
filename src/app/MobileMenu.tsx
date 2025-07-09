"use client";
import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";

type Language = "de" | "en" | "pt";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Record<string, string>;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  dropdownOpen, 
  setDropdownOpen, 
  language, 
  setLanguage, 
  t 
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
      <div className="bg-white shadow-lg w-4/5 max-w-xs h-full p-8 flex flex-col gap-8 animate-slide-in-left">
        <button className="self-end mb-4 p-2" onClick={onClose} aria-label="Menü schließen">
          <HiX size={32} style={{ color: '#3D405B' }} />
        </button>
        <Link href="/" className="mb-6 flex items-center gap-2" onClick={onClose}>
          <Image 
            src="/Pictures/cozwei.png" 
            alt="COzwei Logo" 
            width={100} 
            height={100}
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 text-lg font-bold">
          <div className="relative">
            <button 
              className="w-full flex items-center justify-between px-0 py-2 rounded hover:bg-gray-100 text-[#3D405B] font-bold text-2xl" 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              style={{paddingLeft: '0.25rem'}}
            >
              <span className="flex items-center gap-2">{t.solutions}</span>
              <svg className="w-5 h-5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="flex flex-col mt-2 bg-white border border-[#81B29A]/30 rounded-2xl shadow-lg py-2 z-50">
                <Link href="/nachhaltigkeit" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={onClose}>{t.sustainability}</Link>
                <Link href="/dekarbonisierung" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={onClose}>{t.decarbonization}</Link>
                <Link href="/massnahmen" className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold" onClick={onClose}>{t.measures}</Link>
              </div>
            )}
          </div>
          <Link href="/ueber-uns" className="hover:text-green-700 transition text-[#3D405B] font-bold text-2xl pl-1" onClick={onClose}>{t.about}</Link>
          <a href="#kontakt" className="hover:text-green-700 transition text-[#3D405B] font-bold text-2xl pl-1" onClick={onClose}>{t.contact}</a>
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
  );
} 