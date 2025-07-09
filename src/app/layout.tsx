import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./critical.css";
import { LanguageProvider } from "./LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "COzwei - Nachhaltigkeit & Dekarbonisierung",
  description: "COzwei GmbH - Ihr Partner für Nachhaltigkeit und Dekarbonisierung. Wir unterstützen Unternehmen bei der Transformation zu nachhaltigen Geschäftsmodellen.",
  keywords: "Nachhaltigkeit, Dekarbonisierung, Klimaschutz, COzwei, Transformation",
  authors: [{ name: "COzwei GmbH" }],
  robots: "index, follow",
  openGraph: {
    title: "COzwei - Nachhaltigkeit & Dekarbonisierung",
    description: "Ihr Partner für Nachhaltigkeit und Dekarbonisierung",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="font-['Ebrima']">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
              `
            }}
          />
        )}
      </body>
    </html>
  );
}
