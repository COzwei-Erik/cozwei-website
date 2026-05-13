"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "../ConsentContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Lädt Google Analytics 4 ausschließlich nach erteilter Einwilligung.
 *
 * Verhalten:
 * - Ohne `NEXT_PUBLIC_GA_MEASUREMENT_ID` wird gar nichts geladen.
 * - Ohne Consent (`consent.analytics === true`) wird gar nichts geladen.
 * - Bei Consent: gtag.js wird via Next.js `Script` (afterInteractive) eingebunden.
 * - Page-Views werden bei Route-Changes (App Router) manuell gefeuert.
 */
export default function GoogleAnalytics() {
  const { consent } = useConsent();
  const pathname = usePathname();

  // Page-View beim Route-Wechsel feuern – nur wenn alles passt.
  useEffect(() => {
    if (!GA_ID) return;
    if (!consent?.analytics) return;
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    window.gtag("config", GA_ID, {
      page_path: pathname,
      anonymize_ip: true,
    });
  }, [pathname, consent]);

  if (!GA_ID) return null;
  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
