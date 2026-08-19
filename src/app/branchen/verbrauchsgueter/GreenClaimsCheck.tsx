"use client";
import { useState } from "react";

// Signature-Element dieser Seite: Selbstcheck zu Umweltaussagen.
// Vier Ja/Nein-Fragen, Ergebnis nur als Hinweis. Reiner React-State, kein
// Speichern, keine Uebertragung.

const FRAGEN = [
  { key: "spezifisch", frage: "Ist die Aussage spezifisch statt pauschal?" },
  { key: "nachweis", frage: "Liegt ein belastbarer, aktueller Nachweis vor?" },
  { key: "bezug", frage: "Ist klar benannt, worauf sich die Aussage bezieht?" },
  { key: "kompensation", frage: "Kommt die Aussage ohne reine Kompensation aus?" },
];

export default function GreenClaimsCheck() {
  const [antworten, setAntworten] = useState<Record<string, boolean>>({});

  const beantwortet = FRAGEN.filter((f) => f.key in antworten).length;
  const alleJa = FRAGEN.every((f) => antworten[f.key] === true);
  const fertig = beantwortet === FRAGEN.length;

  return (
    <div className="rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-6 sm:p-8">
      <ul className="space-y-4">
        {FRAGEN.map((f) => {
          const wert = antworten[f.key];
          return (
            <li
              key={f.key}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pb-4 border-b border-[#81B29A]/20 last:border-b-0 last:pb-0"
            >
              <p className="font-bold" style={{ color: "#3D405B" }}>
                {f.frage}
              </p>
              <div className="flex gap-2 shrink-0">
                {[true, false].map((option) => (
                  <button
                    key={String(option)}
                    type="button"
                    aria-pressed={wert === option}
                    onClick={() =>
                      setAntworten((prev) => ({ ...prev, [f.key]: option }))
                    }
                    className="px-4 py-2 rounded-full text-sm font-bold border transition"
                    style={
                      wert === option
                        ? {
                            backgroundColor: "#3D405B",
                            color: "white",
                            borderColor: "#3D405B",
                          }
                        : { color: "#3D405B", borderColor: "rgba(129,178,154,0.35)" }
                    }
                  >
                    {option ? "Ja" : "Nein"}
                  </button>
                ))}
              </div>
            </li>
          );
        })}
      </ul>

      {fertig && (
        <div
          className="mt-6 rounded-2xl p-5 border-l-4"
          style={{
            backgroundColor: "rgba(129,178,154,0.10)",
            borderLeftColor: alleJa ? "#81B29A" : "#E17960",
          }}
        >
          <p className="font-bold leading-relaxed" style={{ color: "#3D405B" }}>
            {alleJa
              ? "Gute Ausgangslage, die Datenbasis prüfen wir gern."
              : "Hier besteht Handlungsbedarf vor dem 27. September 2026."}
          </p>
        </div>
      )}

      <p className="text-sm mt-5" style={{ color: "#6B6B6B" }}>
        Der Selbstcheck ersetzt keine Rechtsprüfung, er zeigt, wo Daten fehlen.
      </p>
    </div>
  );
}
