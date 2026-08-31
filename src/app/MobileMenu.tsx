"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiX, HiChevronDown } from "react-icons/hi";
import { HUBSPOT_FORM_URL } from "./links";
import { trackEvent, Events } from "./analytics";
import { navContent } from "./nav-content";

type Language = "de" | "en" | "pt";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

type OpenSection = "solutions" | "branchen" | null;

export default function MobileMenu({ isOpen, onClose, language, setLanguage }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<OpenSection>(null);
  const nav = navContent[language] || navContent.de;

  if (!isOpen) return null;

  const toggle = (s: Exclude<OpenSection, null>) =>
    setOpenSection(openSection === s ? null : s);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
      <div className="bg-white shadow-lg w-4/5 max-w-sm h-full p-6 flex flex-col animate-slide-in-left overflow-y-auto">
        <button className="self-end mb-2 p-2" onClick={onClose} aria-label="Menü schließen">
          <HiX size={32} style={{ color: "#3D405B" }} />
        </button>
        <Link href="/" className="mb-6 flex items-center gap-2" onClick={onClose}>
          <Image src="/Pictures/cozwei.png" alt="COzwei Logo" width={100} height={100} priority />
        </Link>

        <div className="flex flex-col gap-1">
          {/* LÖSUNGEN Akkordeon: Kategorien als Gruppen-Labels, Leistungen als Links */}
          <button
            className="w-full flex items-center justify-between py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide"
            onClick={() => toggle("solutions")}
            aria-expanded={openSection === "solutions"}
          >
            <span>{nav.solutions}</span>
            <HiChevronDown
              size={24}
              className={`transition-transform ${openSection === "solutions" ? "rotate-180" : ""}`}
            />
          </button>
          {openSection === "solutions" && (
            <div className="pb-2">
              {nav.categories.map((cat) => (
                <div key={cat.label} className="mb-3">
                  <div
                    className="px-1 py-1 text-xs font-extrabold uppercase tracking-widest"
                    style={{ color: "#81B29A" }}
                  >
                    {cat.label}
                  </div>
                  <div className="flex flex-col">
                    {cat.items.map((item) =>
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg text-[#3D405B] text-sm font-semibold hover:bg-[#81B29A]/10"
                          onClick={onClose}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="px-3 py-2 rounded-lg text-[#3D405B] text-sm font-semibold hover:bg-[#81B29A]/10"
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BRANCHEN Akkordeon */}
          <button
            className="w-full flex items-center justify-between py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide"
            onClick={() => toggle("branchen")}
            aria-expanded={openSection === "branchen"}
          >
            <span>{nav.branchen}</span>
            <HiChevronDown
              size={24}
              className={`transition-transform ${openSection === "branchen" ? "rotate-180" : ""}`}
            />
          </button>
          {openSection === "branchen" && (
            <div className="flex flex-col pb-2">
              {nav.branchenItems.map((b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className="px-3 py-2 rounded-lg text-[#3D405B] text-sm font-semibold hover:bg-[#81B29A]/10"
                  onClick={onClose}
                >
                  {b.label}
                </Link>
              ))}
            </div>
          )}

          {/* Flache Links */}
          <Link
            href="/referenzen"
            className="py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide hover:text-[#81B29A] transition"
            onClick={onClose}
          >
            {nav.references}
          </Link>
          <Link
            href="/insights"
            className="py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide hover:text-[#81B29A] transition"
            onClick={onClose}
          >
            {nav.wissen}
          </Link>
          <Link
            href="/ueber-uns"
            className="py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide hover:text-[#81B29A] transition"
            onClick={onClose}
          >
            {nav.about}
          </Link>
          <a
            href={HUBSPOT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-[#3D405B] font-extrabold text-xl uppercase tracking-wide hover:text-[#81B29A] transition"
            onClick={() => {
              trackEvent(Events.ContactFormClick, { location: "mobile_menu" });
              onClose();
            }}
          >
            {nav.contact}
          </a>
        </div>

        <div className="mt-8 flex items-center gap-1 border rounded px-2 py-1 bg-white self-start">
          {(["de", "en", "pt"] as const).map((lng, i) => (
            <span key={lng} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#3D405B] text-lg font-bold">|</span>}
              <button
                className="px-3 py-1 text-lg font-bold transition-colors rounded focus:outline-none"
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
      </div>
    </div>
  );
}
