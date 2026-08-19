"use client";
import Header from "../Header";
import Image from "next/image";
import { useLanguage, translations } from "../LanguageContext";
import ContactForm from "../components/ContactForm";

export default function Foerderungen() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

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
                const target = document.getElementById('dashboard-section');
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
      
      {/* Klima-Förderungen Deutschland — interaktives Dashboard (full-width) */}
      <section id="dashboard-section" className="w-full py-12 sm:py-16 bg-white">
        <div className="text-center mb-8 sm:mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: '#3D405B' }}>
            Klima-Förderungen Deutschland
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto" style={{ color: '#3D405B' }}>
            Übersicht aller Bundes- und Landesförderungen rund um Klima, Energie und Effizienz. Inklusive interaktivem Förder-Finder, der in wenigen Fragen die passenden Programme für Ihr Unternehmen ermittelt.
          </p>
        </div>

        <div className="w-full px-4">
          <div className="rounded-2xl overflow-hidden border border-[#81B29A]/30 shadow-lg bg-white">
            <iframe
              src="/foerderungen-dashboard.html"
              title="Klima-Förderungen Deutschland: interaktives Dashboard"
              loading="lazy"
              className="w-full block"
              style={{ height: '1400px', border: 'none' }}
            />
          </div>
        </div>

        <p className="text-xs italic text-center mt-4 px-4" style={{ color: '#3D405B', opacity: 0.7 }}>
          Hinweis: Auf schmalen Bildschirmen stapeln sich Karte und Liste vertikal. Für die volle Side-by-Side-Ansicht ein Desktop-Format nutzen.
        </p>
      </section>
      
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