"use client";
import Link from "next/link";
import { useState } from "react";

// Signature-Element dieser Seite: Umschalter zwischen den beiden Bilanzarten.
// Wechselt die Leitfrage und hebt die zugehoerige Karte hervor. Reiner
// React-State, keine externe Bibliothek.

const CARDS = [
  {
    key: "ccf" as const,
    tab: "Unternehmen",
    question: "Was emittiert mein Unternehmen?",
    title: "Corporate Carbon Footprint (CCF)",
    body: "die Klimabilanz Ihres gesamten Unternehmens über die Scopes 1, 2 und 3: von Produktionsemissionen über eingekaufte Energie bis zur Mitarbeitermobilität und Lieferkette.",
    href: "/corporate-carbon-footprint",
    linkLabel: "Zum Corporate Carbon Footprint",
  },
  {
    key: "pcf" as const,
    tab: "Produkt",
    question: "Was emittiert mein Produkt?",
    title: "Product Carbon Footprint (PCF)",
    body: "die Klimabilanz eines einzelnen Produkts von der Rohstoffgewinnung bis zur Entsorgung (cradle to grave), berechnet nach ISO 14067 und GHG Protocol Product Standard.",
    href: "/product-carbon-footprint",
    linkLabel: "Zum Product Carbon Footprint",
  },
];

export default function BilanzSwitch() {
  const [active, setActive] = useState<"ccf" | "pcf">("ccf");
  const activeCard = CARDS.find((c) => c.key === active) ?? CARDS[0];

  return (
    <div>
      <div
        className="inline-flex rounded-full p-1 mb-6"
        style={{ backgroundColor: "rgba(129,178,154,0.12)" }}
        role="tablist"
        aria-label="Bilanzart wählen"
      >
        {CARDS.map((card) => (
          <button
            key={card.key}
            type="button"
            role="tab"
            aria-selected={active === card.key}
            onClick={() => setActive(card.key)}
            className="px-5 py-2 rounded-full text-sm font-bold transition"
            style={
              active === card.key
                ? { backgroundColor: "#81B29A", color: "white" }
                : { color: "#3D405B" }
            }
          >
            {card.tab}
          </button>
        ))}
      </div>

      <p className="text-xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
        {activeCard.question}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((card) => {
          const isActive = card.key === active;
          return (
            <div
              key={card.key}
              className="rounded-3xl bg-white/60 backdrop-blur-xl border p-7 transition-all duration-300"
              style={
                isActive
                  ? {
                      borderColor: "#81B29A",
                      borderWidth: 2,
                      boxShadow: "0 8px 24px rgba(61,64,91,0.10)",
                    }
                  : { borderColor: "rgba(129,178,154,0.20)", opacity: 0.75 }
              }
            >
              <h3 className="text-lg font-extrabold mb-3" style={{ color: "#3D405B" }}>
                {card.title}
              </h3>
              <p className="leading-relaxed mb-5" style={{ color: "#23243a" }}>
                {card.body}
              </p>
              <Link
                href={card.href}
                className="font-bold hover:underline"
                style={{ color: "#81B29A" }}
              >
                {card.linkLabel}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
