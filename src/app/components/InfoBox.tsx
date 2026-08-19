type Props = {
  /** Kurze Auszeichnung, z.B. "Förderhinweis" oder "Gut zu wissen". */
  label?: string;
  children: React.ReactNode;
};

/**
 * Hervorgehobene Hinweisbox für Förderhinweise und Fristen. Ice Beige mit
 * Sage-Kante links, kein flächiges Gelb (CI-Vorgabe).
 */
export default function InfoBox({ label, children }: Props) {
  return (
    <div
      className="rounded-2xl p-6 border-l-4"
      style={{ backgroundColor: "#F4F1DE", borderColor: "#81B29A" }}
    >
      {label && (
        <p
          className="text-xs font-extrabold uppercase tracking-wide mb-2"
          style={{ color: "#81B29A" }}
        >
          {label}
        </p>
      )}
      <div className="leading-relaxed" style={{ color: "#23243a" }}>
        {children}
      </div>
    </div>
  );
}
