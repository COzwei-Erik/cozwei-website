type Step = {
  title: string;
  body: string;
};

type Props = {
  heading: string;
  steps: Step[];
};

/**
 * Nummerierte Schritte mit Sage-Badges, im Stil der bestehenden
 * "In 4 Schritten"-Sektion auf /dekarbonisierung.
 */
export default function ProcessSteps({ heading, steps }: Props) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-10" style={{ color: "#3D405B" }}>
          {heading}
        </h2>
        <ol className="space-y-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-lg"
                style={{ backgroundColor: "#81B29A", color: "white" }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-extrabold mb-1" style={{ color: "#3D405B" }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#23243a" }}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
