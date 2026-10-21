// Datenquelle der digitalen Visitenkarten unter /k/<slug>.
//
// Hintergrund: Der QR-Code auf der gedruckten Visitenkarte enthaelt nur die
// kurze Adresse https://www.cozwei.de/k/<slug>. Die Kontaktdaten liegen hier
// und koennen jederzeit geaendert werden, ohne dass neu gedruckt werden muss.
//
// WICHTIG: Diese Adressen stehen gedruckt in fremden Brieftaschen. Der Pfad
// /k/<slug> darf niemals geaendert oder entfernt werden, auch nicht beim
// Website-Relaunch. Ein Slug wird vergeben und bleibt.

export type Kontakt = {
  slug: string;
  vorname: string;
  nachname: string;
  position: string;
  firma: string;
  /** Optional. Leer lassen, wenn die Person keine eigene Durchwahl hat. */
  festnetz?: string;
  handy: string;
  email: string;
  strasse: string;
  plz: string;
  ort: string;
  land: string;
  /** Mit Protokoll, landet so in der vCard. */
  web: string;
  linkedin?: string;
  /** Pfad unter /public, wird auf der Seite gezeigt (nicht in der vCard). */
  foto?: string;
};

export const KONTAKTE: Kontakt[] = [
  {
    slug: "erik",
    vorname: "Erik",
    nachname: "Jakob",
    position: "Geschäftsführer",
    firma: "COzwei GmbH",
    festnetz: "+49 711 12171034",
    handy: "+49 176 30886017",
    email: "erik.jakob@cozwei.de",
    strasse: "Waldfeuchter Str. 274",
    plz: "52525",
    ort: "Heinsberg-Kirchhoven",
    land: "Deutschland",
    web: "https://www.cozwei.de",
    linkedin: "https://www.linkedin.com/in/erik-jakob-9a81b5152/",
    foto: "/Pictures/Erik.png",
  },
];

export function kontaktFinden(slug: string): Kontakt | undefined {
  return KONTAKTE.find((k) => k.slug === slug);
}

/**
 * vCard 3.0. Diese Fassung wird ueber HTTP ausgeliefert, die Datenmenge spielt
 * also keine Rolle mehr. Deshalb sind hier alle Felder enthalten, anders als
 * bei einem statischen QR-Code, wo jedes Zeichen die Druckgroesse erhoeht.
 *
 * Zeilenende ist CRLF, so schreibt es die Spezifikation vor.
 */
export function vcard(k: Kontakt): string {
  const z: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${k.nachname};${k.vorname};;;`,
    `FN:${k.vorname} ${k.nachname}`,
    `ORG:${k.firma}`,
    `TITLE:${k.position}`,
  ];
  if (k.festnetz) z.push(`TEL;TYPE=WORK,VOICE:${k.festnetz}`);
  z.push(`TEL;TYPE=CELL:${k.handy}`);
  z.push(`EMAIL;TYPE=WORK:${k.email}`);
  // Reihenfolge der Adressfelder: Postfach;Zusatz;Strasse;Ort;Region;PLZ;Land
  z.push(`ADR;TYPE=WORK:;;${k.strasse};${k.ort};;${k.plz};${k.land}`);
  z.push(`URL:${k.web}`);
  if (k.linkedin) z.push(`URL;TYPE=LinkedIn:${k.linkedin}`);
  z.push("END:VCARD");
  return z.join("\r\n") + "\r\n";
}

/** Dateiname des Downloads, etwa "Erik_Jakob.vcf". */
export function vcardDateiname(k: Kontakt): string {
  return `${k.vorname}_${k.nachname}.vcf`.replace(/[^A-Za-z0-9_.-]/g, "_");
}
