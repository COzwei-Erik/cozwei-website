import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  body?: string;
  /** Optionales Bild oben in der Karte, wie bei den Kacheln der Startseite. */
  image?: string;
  imageAlt?: string;
  href?: string | null;
  linkLabel?: string;
  /** Frei gestaltbarer Inhalt statt oder unter dem Body, z.B. Listen oder Chips. */
  children?: React.ReactNode;
};

// Kartenoptik der Website: weiße Glasfläche, dezenter Sage-Rahmen, beim Hover
// kräftigerer Rahmen mit Ring. Identisch zu den Kacheln auf der Startseite und
// den Karten auf /dekarbonisierung.
const CARD_CLASSES =
  "flex flex-col rounded-3xl bg-white/60 border border-[#81B29A]/20 backdrop-blur-xl transition-all duration-300 hover:border-2 hover:border-[#81B29A] hover:ring-2 hover:ring-[#81B29A]/30 overflow-hidden group";

export default function SolutionCard({
  title,
  body,
  image,
  imageAlt,
  href,
  linkLabel,
  children,
}: Props) {
  const inner = (
    <>
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          width={600}
          height={256}
          quality={70}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-[1.03]"
        />
      )}
      <div className="flex flex-col p-7 flex-1">
        <h3
          className="text-base font-extrabold uppercase tracking-wide mb-3"
          style={{ color: "#81B29A" }}
        >
          {title}
        </h3>
        {body && (
          <p className="mb-4 leading-relaxed" style={{ color: "#23243a" }}>
            {body}
          </p>
        )}
        {children}
        {href && linkLabel && (
          <span className="mt-auto pt-2 font-bold flex items-center gap-2" style={{ color: "#81B29A" }}>
            {linkLabel}
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${CARD_CLASSES} hover:scale-[1.02]`}>
        {inner}
      </Link>
    );
  }

  return <div className={CARD_CLASSES}>{inner}</div>;
}
