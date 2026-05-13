"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useConsent } from "../ConsentContext";
import { useLanguage, translations } from "../LanguageContext";
import { trackEvent, Events } from "../analytics";

export default function CookieBanner() {
  const {
    consent,
    acceptAll,
    rejectAll,
    setConsent,
    settingsOpen,
    closeSettings,
  } = useConsent();
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  const [showDetails, setShowDetails] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState<boolean>(
    consent?.analytics ?? false
  );

  // Wenn der Nutzer den Banner über die Einstellungen erneut öffnet,
  // den Toggle auf den aktuellen Wert setzen.
  useEffect(() => {
    if (settingsOpen) {
      setAnalyticsToggle(consent?.analytics ?? false);
      setShowDetails(true);
    }
  }, [settingsOpen, consent]);

  const isOpen = consent === null || settingsOpen;
  if (!isOpen) return null;

  const handleSave = () => {
    setConsent({ analytics: analyticsToggle });
    setShowDetails(false);
    // Erst nach setConsent feuern, sonst ist gtag evtl. noch nicht da.
    // setTimeout 0 verschiebt das Event ans Ende des Tick.
    setTimeout(() => {
      trackEvent(Events.CookieConsent, {
        choice: analyticsToggle ? "custom_analytics_yes" : "custom_analytics_no",
      });
    }, 0);
  };

  const handleAcceptAll = () => {
    acceptAll();
    setShowDetails(false);
    setTimeout(() => {
      trackEvent(Events.CookieConsent, { choice: "accept_all" });
    }, 0);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowDetails(false);
    // Bei Ablehnung wird GA NICHT geladen — das Event geht ins Leere
    // (kein Tracking ohne Consent). Das ist gewollt: DSGVO-konform.
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#81B29A]/30 p-6 sm:p-8 pointer-events-auto">
        <h2
          id="cookie-banner-title"
          className="text-xl sm:text-2xl font-extrabold mb-3"
          style={{ color: "#3D405B" }}
        >
          {t.cookieBannerTitle}
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed mb-5"
          style={{ color: "#23243a" }}
        >
          {t.cookieBannerDescription}
          <Link
            href="/datenschutz"
            className="underline font-semibold"
            style={{ color: "#81B29A" }}
            onClick={() => settingsOpen && closeSettings()}
          >
            {t.cookieBannerPrivacyLink}
          </Link>
        </p>

        {showDetails && (
          <div className="space-y-5 mb-5 border-t border-b border-[#81B29A]/30 py-5">
            {/* Notwendige Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div
                  className="font-bold text-sm sm:text-base mb-1"
                  style={{ color: "#3D405B" }}
                >
                  {t.cookieCategoryNecessary}
                </div>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#23243a", opacity: 0.75 }}
                >
                  {t.cookieCategoryNecessaryDesc}
                </p>
              </div>
              <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                {t.cookieAlwaysOn}
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div
                  className="font-bold text-sm sm:text-base mb-1"
                  style={{ color: "#3D405B" }}
                >
                  {t.cookieCategoryAnalytics}
                </div>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#23243a", opacity: 0.75 }}
                >
                  {t.cookieCategoryAnalyticsDesc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analyticsToggle}
                aria-label={t.cookieCategoryAnalytics}
                onClick={() => setAnalyticsToggle((v) => !v)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors mt-1 ${
                  analyticsToggle ? "bg-[#81B29A]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform mt-0.5 ${
                    analyticsToggle ? "translate-x-[1.4rem]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {showDetails ? (
            <button
              type="button"
              onClick={handleSave}
              className="w-full px-6 py-3 rounded-lg font-bold transition text-base"
              style={{
                backgroundColor: "#81B29A",
                color: "white",
                boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.15)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#6fa18a")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#81B29A")
              }
            >
              {t.cookieSavePrefs}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg font-bold transition text-base border-2 border-[#81B29A] bg-white"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#81B29A";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#3D405B";
                }}
              >
                {t.cookieRejectAll}
              </button>
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg font-bold transition text-base border-2 border-[#81B29A] bg-white"
                style={{ color: "#3D405B" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#81B29A";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#3D405B";
                }}
              >
                {t.cookieSettings}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg font-bold transition text-base"
                style={{
                  backgroundColor: "#81B29A",
                  color: "white",
                  boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.15)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6fa18a")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#81B29A")
                }
              >
                {t.cookieAcceptAll}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
