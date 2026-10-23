import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { KONTAKTE, kontaktFinden, type Kontakt } from "../kontakte";

// Digitale Visitenkarte. Ziel des QR-Codes auf der gedruckten Karte.
//
// Bewusst ohne Header und Footer der Website: Die Seite wird praktisch
// ausschliesslich direkt nach dem Scannen auf einem Telefon geoeffnet. Sie soll
// in einem Blick erfassbar sein und mit einer Geste zum Kontakt fuehren.
//
// Bewusst ohne Suchmaschinen-Indexierung: persoenliche Kontaktdaten gehoeren
// nicht in den Google-Index.

const SAGE = "#81B29A";
const SLATE = "#3D405B";
const INK = "#23243a";

export function generateStaticParams() {
  return KONTAKTE.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const k = kontaktFinden(slug);
  if (!k) return { title: "Kontakt | COzwei" };

  return {
    title: `${k.vorname} ${k.nachname} | COzwei`,
    description: `Kontaktdaten von ${k.vorname} ${k.nachname}, ${k.position} bei ${k.firma}.`,
    robots: { index: false, follow: false },
  };
}

function Zeile({
  href,
  label,
  wert,
  extern,
}: {
  href: string;
  label: string;
  wert: string;
  extern?: boolean;
}) {
  return (
    <a
      href={href}
      {...(extern ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex flex-col gap-0.5 rounded-2xl border px-5 py-4 transition active:scale-[0.99]"
      style={{ borderColor: "rgba(129,178,154,0.30)" }}
    >
      <span
        className="text-xs font-extrabold uppercase tracking-wide"
        style={{ color: SAGE }}
      >
        {label}
      </span>
      <span className="text-base font-semibold break-words" style={{ color: INK }}>
        {wert}
      </span>
    </a>
  );
}

export default async function VisitenkartePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const k: Kontakt | undefined = kontaktFinden(slug);
  if (!k) notFound();

  const mapsZiel = encodeURIComponent(
    `${k.strasse}, ${k.plz} ${k.ort}, ${k.land}`
  );

  return (
    <main className="min-h-screen w-full flex justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-md">
        {/* Kopf: Foto, Name, Position, Firma */}
        <div className="flex flex-col items-center text-center mb-8">
          {k.foto && (
            <Image
              src={k.foto}
              alt={`${k.vorname} ${k.nachname}`}
              width={160}
              height={160}
              priority
              className="w-28 h-28 rounded-full object-cover mb-5 border-4"
              style={{ borderColor: SAGE }}
            />
          )}
          <h1 className="text-3xl font-extrabold leading-tight" style={{ color: SLATE }}>
            {k.vorname} {k.nachname}
          </h1>
          <p className="text-base font-semibold mt-1" style={{ color: SAGE }}>
            {k.position}
          </p>
          <p className="text-base mt-1" style={{ color: INK }}>
            {k.firma}
          </p>
        </div>

        {/* Hauptaktion: Kontakt speichern */}
        <a
          href={`/k/${k.slug}/vcard`}
          className="block w-full text-center rounded-xl px-6 py-4 text-lg font-bold mb-8 transition active:scale-[0.99]"
          style={{
            backgroundColor: SAGE,
            color: "white",
            boxShadow: "0 4px 24px 0 rgba(61, 64, 91, 0.25)",
          }}
        >
          Kontakt speichern
        </a>

        {/* Alle Angaben einzeln, jede direkt nutzbar */}
        <div className="flex flex-col gap-3">
          <Zeile
            href={`tel:${k.handy.replace(/\s/g, "")}`}
            label="Mobil"
            wert={k.handy}
          />
          {k.festnetz && (
            <Zeile
              href={`tel:${k.festnetz.replace(/\s/g, "")}`}
              label="Telefon"
              wert={k.festnetz}
            />
          )}
          <Zeile href={`mailto:${k.email}`} label="E-Mail" wert={k.email} />
          <Zeile
            href={`https://www.google.com/maps/search/?api=1&query=${mapsZiel}`}
            label="Adresse"
            wert={`${k.strasse}, ${k.plz} ${k.ort}`}
            extern
          />
          <Zeile
            href={k.web}
            label="Website"
            wert={k.web.replace(/^https?:\/\//, "")}
            extern
          />
          {k.linkedin && (
            <Zeile href={k.linkedin} label="LinkedIn" wert="Profil ansehen" extern />
          )}
        </div>

        <p className="text-center text-xs mt-10" style={{ color: "#6B6B6B" }}>
          {k.firma} &bull; Waldfeuchterstr. 274, 52525 Heinsberg
          <br />
          <a href="/impressum" className="underline">
            Impressum
          </a>{" "}
          &bull;{" "}
          <a href="/datenschutz" className="underline">
            Datenschutz
          </a>
        </p>
      </div>
    </main>
  );
}
