// Zentraler Helper für Custom-Events und User-Properties.
//
// Die Funktionen sind absichtlich "stumm", wenn gtag nicht geladen ist —
// das ist genau dann der Fall, wenn der Nutzer keine Einwilligung erteilt
// hat oder die GA-Mess-ID fehlt. So müssen die einzelnen Components nicht
// jedes Mal selbst die Einwilligung prüfen.

export type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params || {});
}

export function setUserProperties(
  props: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("set", "user_properties", props);
}

// Vorgesehene Event-Namen (TypeScript-Sicherheit: nur diese in Code nutzen).
export const Events = {
  ContactFormClick: "contact_form_click",
  BookingClick: "booking_click",
  PdfRequestSuccess: "pdf_request_success",
  CookieConsent: "cookie_consent",
  InsightOpen: "insight_open",
} as const;
