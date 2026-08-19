"use client";
import { HUBSPOT_FORM_URL } from "../links";
import { trackEvent, Events } from "../analytics";

type Props = {
  /**
   * Optionale kontextuelle Zeile über der Standard-Ansprache, damit die
   * Sektion auf jeder Seite zum Thema passt und nicht wie ein Baustein wirkt.
   */
  context?: string;
  /** Für die Auswertung in GA4: von welcher Seite kam der Klick? */
  location: string;
};

/**
 * Abschluss-Sektion jeder Lösungsseite. Bewusst ohne eigenes Formular:
 * Die Website führt Anfragen zentral über das HubSpot-Formular, siehe links.ts.
 */
export default function ContactCTA({ context, location }: Props) {
  return (
    <section className="w-full py-16 bg-[#81B29A]/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-8 sm:p-10 text-center transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30">
        <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#3D405B" }}>
          Kontaktieren Sie uns
        </h2>
        {context && (
          <p className="text-lg mb-3" style={{ color: "#3D405B" }}>
            {context}
          </p>
        )}
        <p className="text-base mb-8" style={{ color: "#23243a" }}>
          Schreiben Sie uns über unser Kontaktformular. Wir melden uns innerhalb von zwei
          Werktagen bei Ihnen.
        </p>
        <a
          href={HUBSPOT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(Events.ContactFormClick, { location })}
          className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition"
          style={{ backgroundColor: "#81B29A", color: "white" }}
        >
          Kontaktformular öffnen
        </a>
        </div>
      </div>
    </section>
  );
}
