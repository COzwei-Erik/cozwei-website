"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useLanguage } from "./LanguageContext";
import { homeContent } from "./home-content";
import { HUBSPOT_FORM_URL } from "./links";
import { trackEvent, Events } from "./analytics";

// Sprachunabhängige Struktur-Daten der Homepage (Bilder + Link-Ziele).
// Reihenfolge korrespondiert 1:1 mit den Arrays in home-content.ts.

const KUNDEN_LOGOS = [
  { src: "/Pictures/Homepage/logos/klett.jpg", alt: "Klett Gruppe" },
  { src: "/Pictures/Homepage/logos/deichmann.png", alt: "Deichmann" },
  { src: "/Pictures/Homepage/logos/porsche.png", alt: "Porsche" },
  { src: "/Pictures/Homepage/logos/lotus.webp", alt: "Lotus" },
  { src: "/Pictures/Homepage/logos/hfu.webp", alt: "Hochschule Furtwangen University" },
];

const SOLUTIONS_META: {
  image: string;
  alt: string;
  href: string | null;
  itemHrefs: (string | null)[];
}[] = [
  {
    image: "/Pictures/Homepage/loesung-transparenz.jpg",
    alt: "Industrieschornstein in der Abenddämmerung, Symbolbild für CO₂-Transparenz",
    href: "/dekarbonisierung",
    itemHrefs: ["/dekarbonisierung", "/dekarbonisierung", "/verifizierung"],
  },
  {
    image: "/Pictures/Homepage/loesung-berichten.jpg",
    alt: "Laptop und Tablet mit Diagrammen, Symbolbild für Nachhaltigkeitsberichterstattung",
    href: "/nachhaltigkeit",
    itemHrefs: ["/esrs-e1", "/cdp-klimaberichterstattung", "/nachhaltigkeit"],
  },
  {
    image: "/Pictures/pexels-tomfisk-9893729_low_low.jpg",
    alt: "Solarpark aus der Vogelperspektive, Symbolbild für Reduktionsmaßnahmen",
    href: "/dekarbonisierung",
    itemHrefs: ["/dekarbonisierung", "/massnahmen"],
  },
  {
    image: "/Pictures/Homepage/loesung-foerderung.jpg",
    alt: "Studierende mit Tablet in einem hellen Hochschulgebäude, Symbolbild für Förderprogramme",
    href: "/foerderungen",
    itemHrefs: ["/klimaschutzkonzepte", "/foerderungen"],
  },
  {
    image: "/Pictures/Homepage/loesung-ai.jpg",
    alt: "KI-Visualisierung über einem Laptop, Symbolbild für AI-Automatisierung",
    href: null,
    itemHrefs: [],
  },
];

const BRANCHEN_META: { image: string; alt: string; href: string }[] = [
  {
    image: "/Pictures/Homepage/branche-automotive.jpg",
    alt: "Getriebe eines Fahrzeugs in Nahaufnahme, Symbolbild für die Automobilindustrie",
    href: "/insights/csrd-automobilindustrie-lektionen-zulieferer",
  },
  {
    image: "/Pictures/Homepage/branche-druck-verlag.jpg",
    alt: "Stapel gedruckter Zeitungen, Symbolbild für Druck- und Verlagsbranche",
    href: "/insights/buchverlage-dekarbonisierung",
  },
  {
    image: "/Pictures/Homepage/branche-verbrauchsgueter.jpg",
    alt: "Mitarbeiterin mit Tablet im Einzelhandel, Symbolbild für Verbrauchsgüter",
    href: "/referenzen",
  },
  {
    image: "/Pictures/Homepage/branche-oeffentlich.jpg",
    alt: "Skyline einer Stadt, Symbolbild für öffentliche Einrichtungen",
    href: "/klimaschutzkonzepte",
  },
];

const TESTIMONIAL_IMAGES = [
  { src: "/Pictures/Homepage/testimonial-1.jpg", alt: "Kundin von COzwei" },
  { src: "/Pictures/Homepage/testimonial-2.jpg", alt: "Kunde von COzwei" },
];

// Footer-Link-Ziele, parallel zu footerLoesungen / footerBranchen in home-content.ts.
const FOOTER_LOESUNGEN_HREFS = [
  "/dekarbonisierung",
  "/dekarbonisierung",
  "/verifizierung",
  "/esrs-e1",
  "/cdp-klimaberichterstattung",
  "/nachhaltigkeit",
  "/dekarbonisierung",
  "/massnahmen",
];
const FOOTER_BRANCHEN_HREFS = [
  "/insights/buchverlage-dekarbonisierung",
  "/insights/csrd-automobilindustrie-lektionen-zulieferer",
  "/foerderungen",
  "/klimaschutzkonzepte",
];

export default function Home() {
  const { language } = useLanguage();
  const c = homeContent[language] || homeContent.de;

  const scrollToContent = () => {
    const target = document.getElementById("kunden");
    if (!target) return;
    const header = document.querySelector("nav");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />

      {/* 01 HERO — grüne Textur mit eingebackenen Bubbles, leichter Gradient für Textlesbarkeit.
          Die Kreise sind Teil des Hintergrundbilds, es gibt bewusst kein separates Bubbles-Overlay mehr. */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "72vh" }}>
        <Image
          src="/Pictures/Homepage/hero-texture.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={82}
        />
        {/* Leichter Gradient von links, damit der Text sich abhebt */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(23,42,35,0.55) 0%, rgba(23,42,35,0.30) 40%, rgba(23,42,35,0.05) 70%, rgba(23,42,35,0) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 sm:px-10" style={{ minHeight: "72vh" }}>
          <div className="max-w-2xl py-24">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight mb-6 text-white"
              style={{ letterSpacing: "0.01em", textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
            >
              {c.heroTitle}
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 max-w-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.25)" }}
            >
              {c.heroSubtitle}
            </p>
          </div>
        </div>
        {/* Animierter Doppelpfeil, scrollt zu Kunden/Lösungen */}
        <button
          type="button"
          onClick={scrollToContent}
          aria-label={c.heroArrowAria}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce p-2 rounded-full transition hover:bg-white/15"
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-7 7-7-7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* 02 UNSERE KUNDEN — Band + Logos mit Grayscale-zu-Farbe-Hover */}
      <section id="kunden" className="w-full">
        <div className="w-full py-6" style={{ backgroundColor: "#c3c9cf" }}>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-center"
            style={{ color: "#3D405B", letterSpacing: "0.01em" }}
          >
            {c.kundenTitle}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {KUNDEN_LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center h-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 LÖSUNGEN — 5 Karten mit Bild, grünem Titel und verlinkten Leistungen */}
      <section id="loesungen" className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: "#3D405B" }}>
            {c.loesungenTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.solutions.map((sol, i) => {
              const meta = SOLUTIONS_META[i];
              const CardImage = (
                <Image
                  src={meta.image}
                  alt={meta.alt}
                  width={600}
                  height={340}
                  quality={75}
                  className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-[1.03]"
                />
              );
              return (
                <div
                  key={sol.title}
                  className="flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group"
                >
                  {meta.href ? (
                    <Link href={meta.href} className="block overflow-hidden rounded-t-2xl">
                      {CardImage}
                    </Link>
                  ) : (
                    <div className="overflow-hidden rounded-t-2xl">{CardImage}</div>
                  )}
                  <div className="flex flex-col p-7 flex-1">
                    {meta.href ? (
                      <Link href={meta.href} className="hover:underline">
                        <h3
                          className="text-lg font-extrabold uppercase tracking-wide mb-4"
                          style={{ color: "#81B29A" }}
                        >
                          {sol.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3
                        className="text-lg font-extrabold uppercase tracking-wide mb-4"
                        style={{ color: "#81B29A" }}
                      >
                        {sol.title}
                      </h3>
                    )}
                    {sol.items.length > 0 && (
                      <ul className="space-y-0">
                        {sol.items.map((item, j) => {
                          const href = meta.itemHrefs[j];
                          const inner = (
                            <span
                              className="block py-2.5 text-sm font-medium uppercase tracking-wide"
                              style={{ color: "#3D405B" }}
                            >
                              {item}
                            </span>
                          );
                          return (
                            <li
                              key={item}
                              className="border-b border-[#3D405B]/10 last:border-b-0"
                            >
                              {href ? (
                                <Link href={href} className="block hover:bg-[#81B29A]/10 -mx-2 px-2 rounded transition">
                                  {inner}
                                </Link>
                              ) : (
                                inner
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 BRANCHEN — 4 Kacheln mit Hover-Reveal (Titel hoch, Intro + Button ein) */}
      <section id="branchen" className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: "#3D405B" }}>
            {c.branchenTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.branchen.map((b, i) => {
              const meta = BRANCHEN_META[i];
              return (
                <Link
                  key={b.title}
                  href={meta.href}
                  className="relative block h-[320px] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={meta.image}
                    alt={meta.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dunkler Verlauf unten, verstärkt sich beim Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/40" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                    <h3 className="text-white text-lg font-extrabold uppercase tracking-wide transition-transform duration-300 md:translate-y-2 md:group-hover:-translate-y-2">
                      {b.title}
                    </h3>
                    <div className="md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 mt-2">
                      <p className="text-white/90 text-sm leading-snug mb-3">{b.intro}</p>
                      <span
                        className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ backgroundColor: "#81B29A", color: "white" }}
                      >
                        {b.button}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 KUNDENSTIMMEN — Platzhalter-Zitate, echte Zitate folgen */}
      <section id="kundenstimmen" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: "#3D405B" }}>
            {c.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {c.testimonials.map((tst, i) => (
              <figure key={i} className="flex items-start gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#81B29A]/30">
                  <Image
                    src={TESTIMONIAL_IMAGES[i].src}
                    alt={TESTIMONIAL_IMAGES[i].alt}
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <blockquote className="text-sm sm:text-base leading-relaxed italic" style={{ color: "#23243a" }}>
                  „{tst.quote}"
                  {tst.name && (
                    <footer className="mt-2 not-italic font-semibold" style={{ color: "#3D405B" }}>
                      {tst.name}
                    </footer>
                  )}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CTA — Sage-Fläche mit Christian + Erik und HubSpot-Kontakt */}
      <section className="w-full" style={{ backgroundColor: "#81B29A" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-end gap-8">
          <div className="py-14 md:py-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-5" style={{ color: "#3D405B" }}>
              {c.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white mb-8 max-w-lg">
              {c.ctaBody}
            </p>
            <a
              href={HUBSPOT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(Events.ContactFormClick, { location: "home_cta" })}
              className="inline-block px-8 py-3.5 rounded-md font-bold uppercase tracking-wider text-sm transition"
              style={{ backgroundColor: "#3D405B", color: "white", boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.3)" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#23243a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3D405B")}
            >
              {c.ctaButton}
            </a>
          </div>
          <div className="hidden md:flex items-end justify-center gap-0 self-end">
            <Image
              src="/Pictures/Homepage/christian-cta.jpg"
              alt="Christian Philippen, Geschäftsführer COzwei"
              width={450}
              height={300}
              className="w-1/2 h-auto object-cover"
            />
            <Image
              src="/Pictures/Homepage/erik-cta.jpg"
              alt="Erik Jakob, Geschäftsführer COzwei"
              width={450}
              height={300}
              className="w-1/2 h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 07 FOOTER — Slate mit weißem Logo und Link-Spalten */}
      <footer style={{ backgroundColor: "#3D405B" }} className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex items-start">
            <Image
              src="/Pictures/Homepage/cozwei-logo-white.png"
              alt="COzwei Solutions Logo"
              width={220}
              height={99}
              className="w-48 h-auto"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#81B29A" }}>
              {c.footerLoesungenHead}
            </h3>
            <ul className="space-y-2">
              {c.footerLoesungen.map((item, i) => (
                <li key={item}>
                  <Link
                    href={FOOTER_LOESUNGEN_HREFS[i]}
                    className="text-xs uppercase tracking-wide text-white/80 hover:text-white hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#81B29A" }}>
              {c.footerBranchenHead}
            </h3>
            <ul className="space-y-2">
              {c.footerBranchen.map((item, i) => (
                <li key={item}>
                  <Link
                    href={FOOTER_BRANCHEN_HREFS[i]}
                    className="text-xs uppercase tracking-wide text-white/80 hover:text-white hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/referenzen" className="text-sm font-bold uppercase tracking-wider text-white hover:underline" >
                  {c.footerNavReferenzen}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm font-bold uppercase tracking-wider text-white hover:underline">
                  {c.footerNavWissen}
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-sm font-bold uppercase tracking-wider text-white hover:underline">
                  {c.footerNavUeberUns}
                </Link>
              </li>
              <li>
                <a
                  href={HUBSPOT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(Events.ContactFormClick, { location: "home_footer" })}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:underline"
                >
                  {c.footerNavKontakt}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-white/70 space-y-2">
            <div>
              COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull; Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de
            </div>
            <div className="flex justify-center gap-4">
              <a href="/datenschutz" className="hover:underline hover:text-white">Datenschutz</a>
              <a href="/impressum" className="hover:underline hover:text-white">Impressum</a>
              <a
                href="https://www.linkedin.com/company/cozwei"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div>© {new Date().getFullYear()} COzwei GmbH</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
