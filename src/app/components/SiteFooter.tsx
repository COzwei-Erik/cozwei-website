"use client";
import { useLanguage, translations } from "../LanguageContext";

/**
 * Footer der Website, wortgleich zu dem, der auf den Bestandsseiten inline
 * steht. Als Komponente, weil er auf den neuen Lösungs- und Branchenseiten
 * gefehlt hat: Damit war das Impressum von diesen Seiten aus nicht erreichbar,
 * was in Deutschland Pflicht ist.
 *
 * Die Bestandsseiten haben ihn weiterhin inline. Wer dort aufräumt, kann sie
 * auf diese Komponente umstellen, das Markup ist identisch.
 */
export default function SiteFooter() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  return (
    <footer className="bg-gray-100 py-8 px-4 mt-8 text-center text-sm text-gray-600">
      <div className="mb-2">
        COzwei GmbH &bull; Gutenbergstraße 16A, 70176 Stuttgart &bull; Telefon: +49 711
        12171034 &bull; E-Mail: mail@cozwei.de
      </div>
      <div className="flex justify-center gap-4 mb-2">
        <a href="/datenschutz" className="hover:underline">
          {t.privacy}
        </a>
        <a href="/impressum" className="hover:underline">
          {t.imprint}
        </a>
        <a
          href="https://www.linkedin.com/company/cozwei"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {t.linkedin}
        </a>
      </div>
      <div>© {new Date().getFullYear()} COzwei GmbH</div>
    </footer>
  );
}
