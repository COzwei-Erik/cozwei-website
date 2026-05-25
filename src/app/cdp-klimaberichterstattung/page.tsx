import type { Metadata } from "next";
import CdpClient from "./CdpClient";
import { content } from "./content";

const PAGE_URL = "https://www.cozwei.de/cdp-klimaberichterstattung";

// Page-spezifische Metadaten — überschreiben den Default aus app/layout.tsx
export const metadata: Metadata = {
  title: "CDP Klima-Reporting & Climate Change Questionnaire | COzwei",
  description:
    "Begleitung beim CDP Climate Change Questionnaire: von THG-Bilanz und Modul-Redaktion bis zur fristgerechten Einreichung. Drei Pakete (SME, Full, Optimierung) für KMU und Konzerne.",
  keywords: [
    "CDP",
    "Carbon Disclosure Project",
    "CDP Klimafragebogen",
    "Climate Change Questionnaire",
    "CDP Score",
    "CDP Supply Chain",
    "Klima-Reporting",
    "THG-Bilanz",
    "GHG Protocol",
    "ESG-Rating",
    "CSRD",
    "ESRS E1",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "CDP Klima-Reporting: von der Datenbasis bis zum A-Score | COzwei",
    description:
      "Wir begleiten Sie durch den vollständigen CDP-Klimafragebogen — von der THG-Bilanz bis zur Einreichung im CDP-Portal. Pragmatisch für KMU, gründlich für Konzerne.",
    url: PAGE_URL,
    siteName: "COzwei",
    locale: "de_DE",
    type: "website",
    images: [
      {
        // TODO: dediziertes 1200x630-OG-Bild für CDP-Seite designen lassen.
        // Aktuell Fallback auf das bestehende COzwei-Logo-Render.
        url: "https://www.cozwei.de/Pictures/Artboard 1.png",
        width: 1200,
        height: 630,
        alt: "CDP Klima-Reporting Beratung durch COzwei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CDP Klima-Reporting: von der Datenbasis bis zum A-Score | COzwei",
    description:
      "Begleitung durch den CDP Climate Change Questionnaire — von THG-Bilanz bis Einreichung.",
    images: ["https://www.cozwei.de/Pictures/Artboard 1.png"],
  },
  robots: { index: true, follow: true },
};

// JSON-LD Schemas — Service, HowTo, FAQPage, BreadcrumbList, Organization.
// In Deutsch, weil die kanonische URL und der Primärinhalt deutsch sind.
const c = content.de;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CDP Klima-Reporting Beratung",
  name: "CDP Climate Change Questionnaire Begleitung",
  description:
    "Vollständige Begleitung beim CDP Climate Change Questionnaire — von der THG-Bilanzierung über die Modul-Redaktion bis zur fristgerechten Einreichung im CDP-Portal.",
  provider: {
    "@type": "Organization",
    name: "COzwei GmbH",
    url: "https://www.cozwei.de",
    logo: "https://www.cozwei.de/Pictures/cozwei.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gutenbergstraße 16A",
      postalCode: "70176",
      addressLocality: "Stuttgart",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-711-12171034",
      email: "mail@cozwei.de",
      contactType: "sales",
    },
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "Portugal" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "B2B-Unternehmen mit Klimaberichtspflicht oder Lieferkettenanfragen",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CDP-Beratungspakete",
    itemListElement: c.serviceTiers.map((tier) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: tier.title,
        description: tier.audience,
      },
    })),
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "In vier Schritten zum belastbaren CDP-Klima-Score",
  description:
    "Strukturiertes Vorgehen zur Beantwortung des CDP Climate Change Questionnaire — von der Gap-Analyse bis zur Score-Auswertung.",
  totalTime: "P8W",
  step: c.processSteps.map((step) => ({
    "@type": "HowToStep",
    position: step.number,
    name: step.title,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: c.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: c.breadcrumbHome,
      item: "https://www.cozwei.de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: c.breadcrumbSolutions,
      item: "https://www.cozwei.de/nachhaltigkeit",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: c.breadcrumbCurrent,
      item: PAGE_URL,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "COzwei GmbH",
  url: "https://www.cozwei.de",
  logo: "https://www.cozwei.de/Pictures/cozwei.png",
  sameAs: ["https://www.linkedin.com/company/cozwei"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gutenbergstraße 16A",
    postalCode: "70176",
    addressLocality: "Stuttgart",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-711-12171034",
    email: "mail@cozwei.de",
    contactType: "customer service",
    availableLanguage: ["de", "en", "pt"],
  },
};

export default function CdpKlimaberichterstattungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <CdpClient />
    </>
  );
}
