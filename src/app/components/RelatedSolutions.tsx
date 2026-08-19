import Link from "next/link";

type Item = {
  title: string;
  body: string;
  href: string;
};

type Props = {
  items: Item[];
  heading?: string;
};

/**
 * "Passende Lösungen" vor der Kontaktsektion. Sorgt für die geforderte
 * kontextuelle Querverlinkung zwischen den Lösungsseiten; Ankertexte sind
 * beschreibend, nie "hier klicken".
 */
export default function RelatedSolutions({
  items,
  heading = "Passende Lösungen",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border p-6 transition hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30"
              style={{ borderColor: "#E2DDD0" }}
            >
              <h3
                className="text-base font-extrabold uppercase tracking-wide mb-2"
                style={{ color: "#81B29A" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#23243a" }}>
                {item.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
