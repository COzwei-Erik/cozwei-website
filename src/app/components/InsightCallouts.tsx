"use client";
import React from "react";
import { trackEvent, Events } from "../analytics";

// Big-number stat callout (e.g. "45 %" + explanation)
export function StatCallout({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 rounded-2xl border border-[#81B29A]/40 bg-[#81B29A]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div
        className="text-5xl sm:text-6xl font-extrabold leading-none flex-shrink-0"
        style={{ color: "#81B29A" }}
      >
        {number}
      </div>
      <div
        className="text-base sm:text-lg leading-relaxed text-center sm:text-left"
        style={{ color: "#23243a" }}
      >
        {children}
      </div>
    </div>
  );
}

// Pull-quote with optional attribution
export function PullQuote({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <blockquote className="my-10 border-l-4 border-[#81B29A] bg-[#81B29A]/5 rounded-r-2xl pl-6 pr-6 py-6">
      <p
        className="text-lg sm:text-xl italic leading-relaxed"
        style={{ color: "#3D405B" }}
      >
        {children}
      </p>
      {author && (
        <footer
          className="mt-3 text-sm font-semibold not-italic"
          style={{ color: "#81B29A" }}
        >
          {/* Kein Em-Dash als Attributionsstrich, Copy-Konvention laut CLAUDE.md. */}
          {author}
        </footer>
      )}
    </blockquote>
  );
}

// Numbered pattern box (e.g. "1. Fehlerhafte Dateneintragung beim Gasverbrauch")
export function PatternBox({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-2xl border border-[#81B29A]/30 bg-white/70 backdrop-blur-sm overflow-hidden">
      <div className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full font-extrabold text-xl flex items-center justify-center"
          style={{ backgroundColor: "#81B29A", color: "white" }}
        >
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className="text-lg sm:text-xl font-extrabold mb-2"
            style={{ color: "#3D405B" }}
          >
            {title}
          </h4>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#23243a" }}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

// CTA callout — title, description, prominent button
export function CtaBox({
  eyebrow = "Ihr nächster Schritt",
  title,
  children,
  buttonLabel = "30-Minuten-Erstgespräch buchen",
  buttonHref = "#kontakt",
  trackingLocation,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  trackingLocation?: string;
}) {
  return (
    <aside className="my-12 rounded-3xl border-2 border-[#81B29A] bg-[#81B29A]/10 p-8 sm:p-10 text-center">
      <div
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color: "#81B29A" }}
      >
        {eyebrow}
      </div>
      <h3
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: "#3D405B" }}
      >
        {title}
      </h3>
      <div
        className="text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
        style={{ color: "#23243a" }}
      >
        {children}
      </div>
      <a
        href={buttonHref}
        onClick={() =>
          trackEvent(Events.BookingClick, {
            location: trackingLocation || "cta_box",
            label: buttonLabel,
          })
        }
        className="inline-block px-8 py-4 rounded-lg font-bold transition text-lg"
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
        {buttonLabel}
      </a>
    </aside>
  );
}
