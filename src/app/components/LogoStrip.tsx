import Image from "next/image";
import Link from "next/link";

export type LogoEntry = {
  src: string;
  tint: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  logos: LogoEntry[];
  heading?: string;
  /** Wird gezeigt, wenn keine Logos zugeordnet sind. */
  emptyNote?: string;
};

/**
 * Logo-Leiste im Muster der Startseiten-Sektion "Wer auf unsere Beratung setzt":
 * Ruhezustand einheitlich getönt in #788596, beim Hover das farbige Original.
 * Beide Dateien liegen vor, weil ein CSS-Filter dunkle und helle Logos nicht auf
 * einen gemeinsamen Ton bringt.
 */
export default function LogoStrip({
  logos,
  heading = "Referenzen aus der Branche",
  emptyNote,
}: Props) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#3D405B" }}>
          {heading}
        </h2>

        {logos.length === 0 ? (
          <p className="text-lg leading-relaxed" style={{ color: "#23243a" }}>
            {emptyNote ??
              "Referenzen aus dieser Branche stellen wir Ihnen gern im Gespräch vor."}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center mb-8">
            {logos.map((logo) => (
              <div key={logo.alt} className="group relative h-14 sm:h-16 md:h-20">
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <Image
                    src={logo.tint}
                    alt=""
                    aria-hidden="true"
                    width={logo.width}
                    height={logo.height}
                    className="max-h-11 sm:max-h-12 md:max-h-16 w-auto max-w-full object-contain"
                  />
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-11 sm:max-h-12 md:max-h-16 w-auto max-w-full object-contain"
                  />
                </span>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/referenzen"
          className="font-bold hover:underline"
          style={{ color: "#81B29A" }}
        >
          Alle Referenzen ansehen
        </Link>
      </div>
    </section>
  );
}
