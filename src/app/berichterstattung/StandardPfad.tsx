"use client";
import Link from "next/link";
import { useState } from "react";

// Signature-Element dieser Seite: Entscheidungspfad. Drei Ja/Nein-Fragen,
// jede beantwortete Frage schaltet die zugehoerige Empfehlung frei.
// Reiner React-State, keine externe Bibliothek.

const FRAGEN = [
  {
    key: "csrd" as const,
    frage: "Mehr als 1.000 Mitarbeitende und über 450 Mio. € Umsatz?",
    standard: "CSRD / ESRS E1",
    folge: "Sie fallen unter die Berichtspflicht. Der Klimastandard ESRS E1 ist der aufwendigste Teil.",
    href: "/esrs-e1",
  },
  {
    key: "cdp" as const,
    frage: "Fordern Kunden oder Investoren CDP?",
    standard: "CDP Klima-Reporting",
    folge: "Der CDP-Fragebogen verlangt eine vollständige THG-Bilanz und ein Scoring-taugliches Antwortprofil.",
    href: "/cdp-klimaberichterstattung",
  },
  {
    key: "vsme" as const,
    frage: "ESG-Anfragen von Banken oder Kunden?",
    standard: "VSME / Voluntary Standard",
    folge: "Ein freiwilliger Bericht beantwortet diese Anfragen gebündelt statt jeden Fragebogen einzeln.",
    href: "/vsme",
  },
];

type Antwort = "ja" | "nein";

export default function StandardPfad() {
  const [antworten, setAntworten] = useState<Record<string, Antwort>>({});

  const setAntwort = (key: string, wert: Antwort) =>
    setAntworten((prev) => ({ ...prev, [key]: wert }));

  const relevant = FRAGEN.filter((f) => antworten[f.key] === "ja");
  const alleBeantwortet = FRAGEN.every((f) => antworten[f.key]);

  return (
    <div>
      <div className="space-y-4">
        {FRAGEN.map((f) => {
          const antwort = antworten[f.key];
          return (
            <div
              key={f.key}
              className="rounded-2xl border p-5 transition-colors"
              style={{
                borderColor: antwort === "ja" ? "#81B29A" : "#E2DDD0",
                backgroundColor: "white",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                <p className="font-bold" style={{ color: "#3D405B" }}>
                  {f.frage}
                </p>
                <div className="flex gap-2 shrink-0">
                  {(["ja", "nein"] as Antwort[]).map((wert) => (
                    <button
                      key={wert}
                      type="button"
                      aria-pressed={antwort === wert}
                      onClick={() => setAntwort(f.key, wert)}
                      className="px-4 py-2 rounded-full text-sm font-bold border transition"
                      style={
                        antwort === wert
                          ? { backgroundColor: "#3D405B", color: "white", borderColor: "#3D405B" }
                          : { color: "#3D405B", borderColor: "#E2DDD0" }
                      }
                    >
                      {wert === "ja" ? "Ja" : "Nein"}
                    </button>
                  ))}
                </div>
              </div>

              {antwort === "ja" && (
                <div className="mt-4 pt-4 border-t" style={{ borderColor: "#E2DDD0" }}>
                  <p className="font-extrabold mb-1" style={{ color: "#81B29A" }}>
                    {f.standard}
                  </p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#23243a" }}>
                    {f.folge}
                  </p>
                  <Link
                    href={f.href}
                    className="text-sm font-bold hover:underline"
                    style={{ color: "#3D405B" }}
                  >
                    Details zu {f.standard}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {alleBeantwortet && (
        <div className="mt-6 rounded-2xl p-5" style={{ backgroundColor: "#F4F1DE" }}>
          {relevant.length > 0 ? (
            <p className="leading-relaxed" style={{ color: "#23243a" }}>
              <strong>Für Sie relevant:</strong>{" "}
              {relevant.map((f) => f.standard).join(", ")}. Wir klären im Erstgespräch, in
              welcher Reihenfolge Sie das angehen.
            </p>
          ) : (
            <p className="leading-relaxed" style={{ color: "#23243a" }}>
              <strong>Kein Standard zwingend.</strong> Dann lohnt sich der Blick auf den
              freiwilligen{" "}
              <Link href="/vsme" className="font-bold underline" style={{ color: "#3D405B" }}>
                VSME-Bericht
              </Link>
              , sobald die ersten Anfragen von Banken oder Kunden kommen.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
