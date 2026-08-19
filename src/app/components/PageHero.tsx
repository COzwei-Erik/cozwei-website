"use client";
import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  title: string;
  /** Definitionsabsatz: steht direkt unter der H1 und ist für Answer Engines gedacht. */
  subtitle: string;
  /** Label des Sage-Buttons, der zur ersten Sektion springt. */
  ctaLabel?: string;
  /** id der Sektion, zu der der Button scrollt. */
  scrollTargetId: string;
};

/**
 * Hero der Lösungsseiten, exakt im Muster der bestehenden Landing Pages
 * (siehe /dekarbonisierung, /verifizierung): Vollbild-Section mit
 * Hintergrundbild, dunklem Overlay und einer weißen Glaskarte darüber.
 *
 * Bewusst kein Ice Beige: Die Website arbeitet mit weißen Glasflächen auf Bild
 * und mit Sage-Tönungen für Sektionen.
 */
export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  ctaLabel = "Mehr erfahren",
  scrollTargetId,
}: Props) {
  const scrollToSection = () => {
    const target = document.getElementById(scrollTargetId);
    if (!target) return;
    const header = document.querySelector("nav");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
        <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-10 max-w-3xl mx-auto flex flex-col items-center border border-white/60 backdrop-blur-sm">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#3D405B" }}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "#3D405B" }}>
            {subtitle}
          </p>
          <button
            type="button"
            className="inline-block px-8 py-4 rounded-lg font-bold shadow-lg transition text-lg"
            style={{
              backgroundColor: "#81B29A",
              color: "white",
              boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6fa18a")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")}
            onClick={scrollToSection}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
