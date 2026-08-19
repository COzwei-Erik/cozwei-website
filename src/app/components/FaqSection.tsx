import { faqSchema, jsonLd, type FaqItem } from "./schema";

type Props = {
  items: FaqItem[];
  heading?: string;
};

/**
 * FAQ-Akkordeon im Muster der Insights-Artikel: <details>/<summary>, also ohne
 * JavaScript, erste Frage geöffnet. Rendert zusätzlich das FAQPage-JSON-LD aus
 * denselben Daten, damit Markup und strukturierte Daten nicht auseinanderlaufen.
 */
export default function FaqSection({ items, heading = "Häufige Fragen" }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-[#81B29A]/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
          {heading}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={item.question}
              open={i === 0}
              className="group rounded-2xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl p-5 transition-all duration-300 hover:border-[#81B29A]"
            >
              <summary
                className="cursor-pointer list-none font-bold text-lg flex items-start justify-between gap-4"
                style={{ color: "#3D405B" }}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-open:rotate-45"
                  style={{ color: "#81B29A" }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed" style={{ color: "#23243a" }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script {...jsonLd(faqSchema(items))} />
    </section>
  );
}
