"use client";
import { useConsent } from "../ConsentContext";
import { useLanguage, translations } from "../LanguageContext";

export default function CookieSettingsButton() {
  const { consent, openSettings, settingsOpen } = useConsent();
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  // Nur anzeigen, wenn der Banner gerade nicht offen ist.
  if (consent === null || settingsOpen) return null;

  return (
    <button
      type="button"
      onClick={openSettings}
      aria-label={t.cookieReopen}
      className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-lg border border-[#81B29A]/30 text-xs font-semibold hover:shadow-xl transition"
      style={{ color: "#3D405B" }}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5z M8.5 8.5h.01 M15 7h.01 M16 14h.01 M9 16h.01"
        />
      </svg>
      <span className="hidden sm:inline">{t.cookieReopen}</span>
    </button>
  );
}
