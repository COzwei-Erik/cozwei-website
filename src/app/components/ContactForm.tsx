"use client";
import { useLanguage, translations } from "../LanguageContext";
import { HUBSPOT_FORM_URL } from "../links";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <section
      id="kontakt"
      className="w-full py-16 bg-white flex justify-center items-center"
    >
      <div className="max-w-3xl w-full mx-auto px-4">
        <div className="rounded-3xl border border-[#81B29A]/30 bg-[#81B29A]/10 p-8 sm:p-12 text-center backdrop-blur-sm">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "#3D405B" }}
          >
            {t.contactUs}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8"
            style={{ color: "#23243a" }}
          >
            {t.contactCtaDescription}
          </p>
          <a
            href={HUBSPOT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
            style={{
              backgroundColor: "#81B29A",
              color: "white",
              boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#6fa18a")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#81B29A")
            }
          >
            {t.contactCtaButton}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
