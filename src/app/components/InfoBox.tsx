type Props = {
  /** Kurze Auszeichnung, z.B. "Förderhinweis" oder "Gut zu wissen". */
  label?: string;
  children: React.ReactNode;
};

/**
 * Hervorgehobene Hinweisbox für Förderhinweise und Fristen. Weiße Glasfläche
 * mit kräftiger Sage-Kante links, passend zur Kartenoptik der Website.
 */
export default function InfoBox({ label, children }: Props) {
  return (
    <div
      className="rounded-2xl p-6 border border-l-4 bg-white/60 backdrop-blur-xl border-[#81B29A]/20"
      style={{ borderLeftColor: "#81B29A" }}
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
