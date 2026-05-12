"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Referenzen() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Pictures/2024-04-02__DSC0568-NEF_2024-03-24_DXO.jpg" 
            alt="Referenzen Hero Background" 
            fill
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16">
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: '#3D405B' }}>{t.referenzenHeroTitle}</h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-6" style={{ color: '#3D405B' }}>
              {t.referenzenHeroSubtitle}
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
        {/* Referenzen Section */}
        <section id="content-section" className="w-full py-16 relative overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-8" style={{ color: '#3D405B' }}>
              {t.referenzenProjectsTitle}
            </h2>
            <p className="mb-12 text-lg text-center" style={{ color: '#3D405B' }}>
              {t.referenzenProjectsSubtitle}
            </p>
            
            {/* Filter Buttons */}
            <div className="flex justify-center mb-12 gap-4 flex-wrap">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-[#81B29A] text-white shadow-lg"
                    : "bg-white/60 text-[#3D405B] border border-[#81B29A]/30 hover:bg-[#81B29A]/10"
                }`}
              >
                {t.referenzenAllProjects}
              </button>
              <button
                onClick={() => setSelectedCategory("nachhaltigkeit")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === "nachhaltigkeit"
                    ? "bg-[#81B29A] text-white shadow-lg"
                    : "bg-white/60 text-[#3D405B] border border-[#81B29A]/30 hover:bg-[#81B29A]/10"
                }`}
              >
                {t.referenzenNachhaltigkeit}
              </button>
              <button
                onClick={() => setSelectedCategory("klimaschutz")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === "klimaschutz"
                    ? "bg-[#81B29A] text-white shadow-lg"
                    : "bg-white/60 text-[#3D405B] border border-[#81B29A]/30 hover:bg-[#81B29A]/10"
                }`}
              >
                {t.referenzenKlimaschutz}
              </button>
              <button
                onClick={() => setSelectedCategory("maßnahmen")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === "maßnahmen"
                    ? "bg-[#81B29A] text-white shadow-lg"
                    : "bg-white/60 text-[#3D405B] border border-[#81B29A]/30 hover:bg-[#81B29A]/10"
                }`}
              >
                {t.referenzenMaßnahmen}
              </button>
            </div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Klimaschutz Projects */}
              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 5.png" 
                        alt="Klett Cotta Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project1Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project1Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 3.png" 
                        alt="PONS Langenscheidt Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project2Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project2Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview (1).png" 
                        alt="Junfermann Verlag Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project3Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project3Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 8.png" 
                        alt="Bange Verlag Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project4Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project4Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/Ernst_Klett_Verlag.svg.png" 
                        alt="Ernst Klett Sprachen Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project5Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project5Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview (4).png" 
                        alt="Ernst Klett Aktiengesellschaft Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project6Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project6Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy.png" 
                        alt="Enpulse Ventures Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project7Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project7Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview (3).png" 
                        alt="ESKA-Welt GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project8Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project8Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview.png" 
                        alt="SFC Energy Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project9Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project9Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                                     <div className="p-6 border-b border-[#81B29A]/20">
                     <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                       <Image 
                         src="/Pictures/Logos Kunden/Bild1.png" 
                         alt="Porsche Logo" 
                         width={112} 
                         height={40}
                         className="object-contain max-w-full max-h-full"
                       />
                     </div>
                     <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                       {t.referenzenKlimaschutz}
                     </span>
                   </div>
                   <div className="flex flex-col p-6 flex-1">
                     <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                       {t.project10Title}
                     </h3>
                     <p className="text-sm" style={{ color: '#23243a' }}>
                       {t.project10Desc}
                     </p>
                   </div>
                 </div>
               </div>

               <div className={`transition-all duration-500 ${
                 selectedCategory === "all" || selectedCategory === "klimaschutz" 
                   ? "opacity-100 scale-100" 
                   : "opacity-0 scale-95 pointer-events-none absolute"
               }`}>
                 <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                   <div className="p-6 border-b border-[#81B29A]/20">
                     <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                       <Image 
                         src="/Pictures/Logos Kunden/image.png" 
                         alt="Hochschule Furtwangen Logo" 
                         width={112} 
                         height={40}
                         className="object-contain max-w-full max-h-full"
                       />
                     </div>
                     <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                       {t.referenzenKlimaschutz}
                     </span>
                   </div>
                   <div className="flex flex-col p-6 flex-1">
                     <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                       {t.project11Title}
                     </h3>
                     <p className="text-sm" style={{ color: '#23243a' }}>
                       {t.project11Desc}
                     </p>
                   </div>
                 </div>
               </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 6.png" 
                        alt="Hochschule Albstadt-Sigmaringen Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project12Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project12Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 4.png" 
                        alt="Hochschule Konstanz Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project13Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project13Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 2.png" 
                        alt="Lotus Cars Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project14Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project14Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview (4).png" 
                        alt="Klett Haus Stuttgart Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project15Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project15Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/deichmann.jpg" 
                        alt="Deichmann SE Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project26Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project26Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/laniqo.jpg" 
                        alt="Laniqo Sp. z o.o. Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project27Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project27Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/rwth-aachen.jpg" 
                        alt="RWTH Aachen University Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project28Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project28Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "klimaschutz" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/technische-mannheim.jpg" 
                        alt="Technische Hochschule Mannheim Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenKlimaschutz}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project29Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project29Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nachhaltigkeit Projects */}
              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "nachhaltigkeit" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy.png" 
                        alt="Enpulse Ventures Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenNachhaltigkeit}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project16Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project16Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "nachhaltigkeit" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image-removebg-preview (3).png" 
                        alt="ESKA-Welt GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenNachhaltigkeit}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project17Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project17Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "nachhaltigkeit" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/image copy 5.png" 
                        alt="Klett Cotta Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenNachhaltigkeit}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project18Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project18Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "nachhaltigkeit" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/Bild1.png" 
                        alt="Porsche Logo" 
                        width={112} 
                        height={40}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenNachhaltigkeit}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project19Title}
                  </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project19Desc}
                  </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "nachhaltigkeit" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                                          <Image 
                      src="/Pictures/Logos Kunden/image copy 2.png" 
                      alt="Lotus Tech Innovation Centre Logo" 
                      width={128} 
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenNachhaltigkeit}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project20Title}
                  </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project20Desc}
                  </p>
                  </div>
                </div>
              </div>

              {/* Maßnahmen Projects */}
              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "maßnahmen" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/picto.jpg" 
                        alt="Picto GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenMaßnahmen}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project21Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project21Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "maßnahmen" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/saxoprint.jpg" 
                        alt="SAXOPRINT GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenMaßnahmen}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project22Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project22Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "maßnahmen" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/posterlounge.jpg" 
                        alt="Posterlounge GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenMaßnahmen}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project23Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project23Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "maßnahmen" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/maxxprint.jpg" 
                        alt="MaXxPrint GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenMaßnahmen}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project24Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project24Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${
                selectedCategory === "all" || selectedCategory === "maßnahmen" 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 pointer-events-none absolute"
              }`}>
                <div className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group h-full">
                  <div className="p-6 border-b border-[#81B29A]/20">
                    <div className="w-36 h-20 rounded-lg flex items-center justify-start mb-4 overflow-hidden px-4 py-2">
                      <Image 
                        src="/Pictures/Logos Kunden/werbetechnik.jpg" 
                        alt="Werbetechnik Baden GmbH Logo" 
                        width={128} 
                        height={64}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-[#3D405B] text-xs font-semibold rounded-full">
                      {t.referenzenMaßnahmen}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: '#23243a' }}>
                      {t.project25Title}
                    </h3>
                    <p className="text-sm" style={{ color: '#23243a' }}>
                      {t.project25Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Text */}
            <div className="text-center mt-12">
              <p className="text-xl font-semibold" style={{ color: '#3D405B' }}>
                {t.referenzenMoreText}
              </p>
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