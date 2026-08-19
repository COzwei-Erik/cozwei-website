import type { NextConfig } from "next";

// Nur Deployments von main laufen auf Vercel als "production". Alles andere
// (Staging-Branch, Previews) bekommt zusaetzlich zum robots.txt einen
// noindex-Header, damit einzeln verlinkte Seiten nicht doch im Index landen.
const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    // images.domains ist in Next.js 16 veraltet, remotePatterns ist der Ersatz
    // und erlaubt eine engere Einschraenkung auf Protokoll und Pfad.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Next.js 16 erlaubt nur noch deklarierte quality-Werte. Ohne diese Liste
    // gilt der Default [75] und jedes andere quality-Attribut wird verworfen,
    // sichtbar nur als Warnung im Server-Log. Hier stehen alle Werte, die in
    // src/ tatsaechlich verwendet werden.
    qualities: [40, 70, 75, 82],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static optimization
  trailingSlash: false,
  // Dauerhafte Umleitungen umbenannter Seiten. Ohne diese verlieren die alten
  // URLs ihre Rankings und externe Links laufen ins Leere.
  async redirects() {
    return [
      {
        source: "/nachhaltigkeit",
        destination: "/berichterstattung",
        permanent: true,
      },
    ];
  },
  // Add headers for better caching
  async headers() {
    return [
      ...(isProduction
        ? []
        : [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'X-Robots-Tag',
                  value: 'noindex, nofollow',
                },
              ],
            },
          ]),
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // SAMEORIGIN statt DENY: damit kann die Website eigene
            // Inhalte iframen (z.B. /foerderungen-dashboard.html),
            // Drittseiten können die Website weiterhin nicht einbetten.
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/Pictures/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Documents/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
