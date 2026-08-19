import SolutionCard from "./SolutionCard";

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
            <SolutionCard
              key={item.href}
              title={item.title}
              body={item.body}
              href={item.href}
              linkLabel="Mehr erfahren"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
