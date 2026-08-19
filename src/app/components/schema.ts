// Helper für die JSON-LD-Schemas der Lösungsseiten.
//
// Die Seiten sind Server Components mit eigener `metadata`, analog zum Muster
// von cdp-klimaberichterstattung. Diese Helper erzeugen die Objekte, die dort
// per <script type="application/ld+json"> ausgegeben werden.

export const SITE_URL = "https://www.cozwei.de";

// Einmal zentral, damit provider-Angaben über alle Seiten identisch sind.
export const ORGANIZATION = {
  "@type": "Organization",
  name: "COzwei GmbH",
  url: SITE_URL,
  email: "mail@cozwei.de",
  telephone: "+49 711 12171034",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gutenbergstr. 16A",
    postalCode: "70176",
    addressLocality: "Stuttgart",
    addressCountry: "DE",
  },
} as const;

export type FaqItem = { question: string; answer: string };

/**
 * Organization-Schema der Startseite, mit Adresse, Kontaktpunkt und sameAs.
 * Gehört genau einmal ins Dokument, deshalb nur auf der Startseite ausgeben.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
    description:
      "COzwei GmbH ist eine Nachhaltigkeits- und Dekarbonisierungsberatung mit Standorten in Stuttgart und Lissabon. Leistungen sind CO₂-Bilanzierung, Dekarbonisierung, Nachhaltigkeitsberichterstattung, Förderberatung und Automatisierung von Nachhaltigkeitsdaten.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "mail@cozwei.de",
      telephone: "+49 711 12171034",
      areaServed: "DE",
      availableLanguage: ["de", "en", "pt"],
    },
    sameAs: ["https://www.linkedin.com/company/cozwei"],
  };
}

/** Service-Schema einer Lösungsseite. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: ORGANIZATION,
    areaServed: { "@type": "Country", name: "DE" },
    url: `${SITE_URL}${opts.path}`,
  };
}

/**
 * FAQPage-Schema. Wird von <FaqSection> automatisch mitgerendert, damit die
 * Fragen im Markup und im strukturierten Datensatz nicht auseinanderlaufen.
 */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Breadcrumb von der Startseite auf die aktuelle Seite. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Kurzform für die Ausgabe im JSX: <script {...jsonLd(schema)} /> */
export function jsonLd(schema: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
