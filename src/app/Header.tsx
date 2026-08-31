"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, lazy, Suspense } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "./LanguageContext";
import { HUBSPOT_FORM_URL } from "./links";
import { trackEvent, Events } from "./analytics";
import { navContent } from "./nav-content";

// Type for timeout ref (works in both JS and TS)
type Timeout = ReturnType<typeof setTimeout>;

// Lazy load mobile menu component
const MobileMenu = lazy(() => import("./MobileMenu"));

type OpenMenu = "solutions" | "branchen" | null;

export default function Header() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [activeCat, setActiveCat] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const closeTimeout = useRef<Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const nav = navContent[language] || navContent.de;

  const open = (menu: Exclude<OpenMenu, null>) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (openMenu !== menu) {
      setActiveCat(0);
      setActiveItem(0);
    }
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 160);
  };
  const closeNow = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(null);
  };

  const activeCategory = nav.categories[activeCat] ?? nav.categories[0];
  const activeNavItem = activeCategory.items[activeItem] ?? activeCategory.items[0];

  const topLinkClass =
    "uppercase tracking-wide transition text-base lg:text-lg font-extrabold hover:text-[#81B29A]";

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-1">
        <div className="flex items-center gap-2">
          <Link href="/" className="cursor-pointer" onClick={closeNow}>
            <Image
              src="/Pictures/cozwei.png"
              alt="COzwei Logo"
              width={120}
              height={120}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          {/* LÖSUNGEN — Mega-Menü */}
          <li onMouseEnter={() => open("solutions")} onMouseLeave={scheduleClose}>
            <button
              className={`${topLinkClass} flex items-center gap-1.5`}
              style={{ color: openMenu === "solutions" ? "#81B29A" : "#3D405B" }}
              aria-expanded={openMenu === "solutions"}
              onClick={() => (openMenu === "solutions" ? closeNow() : open("solutions"))}
            >
              {nav.solutions}
              <svg
                className={`w-4 h-4 transition-transform ${openMenu === "solutions" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>

          {/* BRANCHEN — schlankes Dropdown unter dem Button */}
          <li className="relative" onMouseEnter={() => open("branchen")} onMouseLeave={scheduleClose}>
            <button
              className={`${topLinkClass} flex items-center gap-1.5`}
              style={{ color: openMenu === "branchen" ? "#81B29A" : "#3D405B" }}
              aria-expanded={openMenu === "branchen"}
              onClick={() => (openMenu === "branchen" ? closeNow() : open("branchen"))}
            >
              {nav.branchen}
              <svg
                className={`w-4 h-4 transition-transform ${openMenu === "branchen" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === "branchen" && (
              <ul
                className="absolute left-1/2 -translate-x-1/2 mt-3 min-w-[280px] bg-white border border-[#81B29A]/30 rounded-2xl shadow-lg py-2 z-50"
                onMouseEnter={() => open("branchen")}
                onMouseLeave={scheduleClose}
              >
                {nav.branchenItems.map((b) => (
                  <li key={b.label}>
                    <Link
                      href={b.href}
                      onClick={closeNow}
                      className="block px-6 py-3 hover:bg-[#81B29A]/10 text-[#3D405B] text-base font-semibold"
                    >
                      {b.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="/referenzen" className={topLinkClass} style={{ color: "#3D405B" }}>
              {nav.references}
            </a>
          </li>
          <li>
            <a href="/insights" className={topLinkClass} style={{ color: "#3D405B" }}>
              {nav.wissen}
            </a>
          </li>
          <li>
            <a href="/ueber-uns" className={topLinkClass} style={{ color: "#3D405B" }}>
              {nav.about}
            </a>
          </li>
          <li>
            <a
              href={HUBSPOT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(Events.ContactFormClick, { location: "header" })}
              className={topLinkClass}
              style={{ color: "#3D405B" }}
            >
              {nav.contact}
            </a>
          </li>
          <li className="ml-2">
            <div className="flex items-center gap-1 border rounded px-2 py-1 bg-white">
              {(["de", "en", "pt"] as const).map((lng, i) => (
                <span key={lng} className="flex items-center gap-1">
                  {i > 0 && <span className="text-[#3D405B] text-lg font-bold">|</span>}
                  <button
                    className="px-2.5 py-1 text-base font-bold transition-colors rounded focus:outline-none"
                    style={{
                      background: language === lng ? "#8ABBA7" : "transparent",
                      color: language === lng ? "#fff" : "#3D405B",
                    }}
                    onClick={() => setLanguage(lng)}
                  >
                    {lng.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen/schließen"
        >
          {mobileMenuOpen ? (
            <HiX size={32} style={{ color: "#3D405B" }} />
          ) : (
            <HiMenu size={32} style={{ color: "#3D405B" }} />
          )}
        </button>
      </div>

      {/* MEGA-PANEL Lösungen: Kategorie -> Leistung -> Beschreibung (Slate-Panel rechts) */}
      {openMenu === "solutions" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-[#3D405B]/10 z-40"
          onMouseEnter={() => open("solutions")}
          onMouseLeave={scheduleClose}
        >
          <div className="grid grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr_440px] min-h-[360px]">
            {/* Spalte 1: Kategorien */}
            <div className="py-8 pl-10 pr-6 border-r border-[#3D405B]/10">
              <ul className="space-y-1">
                {nav.categories.map((cat, i) => (
                  <li key={cat.label}>
                    <button
                      onMouseEnter={() => {
                        setActiveCat(i);
                        setActiveItem(0);
                      }}
                      onFocus={() => {
                        setActiveCat(i);
                        setActiveItem(0);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg uppercase tracking-wide text-sm font-extrabold transition"
                      style={{
                        color: activeCat === i ? "#3D405B" : "#9aa0ae",
                        backgroundColor: activeCat === i ? "rgba(129,178,154,0.12)" : "transparent",
                      }}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spalte 2: Leistungen der aktiven Kategorie */}
            <div className="py-8 px-8">
              <ul className="space-y-1">
                {activeCategory.items.map((item, j) => {
                  const isActive = activeItem === j;
                  const linkStyle = {
                    color: isActive ? "#81B29A" : "#3D405B",
                  };
                  const linkClass =
                    "block px-3 py-2.5 rounded-lg uppercase tracking-wide text-sm font-bold transition hover:bg-[#81B29A]/10";
                  return (
                    <li key={item.label} onMouseEnter={() => setActiveItem(j)}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeNow}
                          className={linkClass}
                          style={linkStyle}
                          onFocus={() => setActiveItem(j)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeNow}
                          className={linkClass}
                          style={linkStyle}
                          onFocus={() => setActiveItem(j)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Spalte 3: Beschreibung im Slate-Panel (erst ab lg sichtbar) */}
            <div className="hidden lg:block py-8 px-10" style={{ backgroundColor: "#3D405B" }}>
              <h3
                className="uppercase tracking-wide text-sm font-extrabold mb-4"
                style={{ color: "#E17960" }}
              >
                {activeNavItem.label}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {activeNavItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded">Loading...</div>
            </div>
          }
        >
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            language={language}
            setLanguage={setLanguage}
          />
        </Suspense>
      )}
    </nav>
  );
}
