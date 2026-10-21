import { KONTAKTE, kontaktFinden, vcard, vcardDateiname } from "../../kontakte";

// Liefert die vCard als Datei aus. Darauf zeigt der Knopf "Kontakt speichern"
// auf der Seite /k/<slug>.
//
// Die Kopfzeilen sind entscheidend: Ohne den Medientyp text/vcard erkennen die
// Telefone die Datei nicht als Kontakt und zeigen nur Text an.

export function generateStaticParams() {
  return KONTAKTE.map((k) => ({ slug: k.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const kontakt = kontaktFinden(slug);

  if (!kontakt) {
    return new Response("Kontakt nicht gefunden", { status: 404 });
  }

  return new Response(vcard(kontakt), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${vcardDateiname(kontakt)}"`,
      // Kurz zwischenspeichern: Aenderungen an den Kontaktdaten sollen zeitnah
      // ankommen, die Datei ist winzig.
      "Cache-Control": "public, max-age=300",
    },
  });
}
