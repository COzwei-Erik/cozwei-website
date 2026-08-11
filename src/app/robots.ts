import type { MetadataRoute } from "next";

// VERCEL_ENV ist auf Vercel "production" nur fuer Deployments von main.
// Staging- und Preview-Deployments liefern damit ein Disallow-all aus, damit
// Google die Testumgebung nicht als Duplicate Content der Live-Seite indexiert.
const isProduction = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
