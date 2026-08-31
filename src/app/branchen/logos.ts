import type { LogoEntry } from "../components/LogoStrip";

// Branchenzuordnung der Referenz-Logos.
//
// Quelle ist ausschließlich der Bestand von /referenzen, die Zuordnung folgt den
// dort hinterlegten alt-Texten. Es sind keine neuen Kundennamen ergänzt.
//
// Bewusst NICHT zugeordnet, weil die Branche aus der Datenquelle nicht eindeutig
// hervorgeht: Enpulse Ventures, ESKA-Welt GmbH, SFC Energy, Laniqo, Picto GmbH.
// Diese Logos erscheinen deshalb auf keiner Branchenseite.

const BASE = "/Pictures/Branchen/logos";

function logo(slug: string, alt: string, width: number, height: number): LogoEntry {
  return {
    src: `${BASE}/${slug}.png`,
    tint: `${BASE}/${slug}-tint.png`,
    alt,
    width,
    height,
  };
}

export const AUTOMOTIVE_LOGOS: LogoEntry[] = [
  logo("porsche", "Porsche", 390, 200),
  logo("lotus-cars", "Lotus Cars", 400, 400),
];

export const DRUCK_VERLAG_LOGOS: LogoEntry[] = [
  logo("ernst-klett-verlag", "Ernst Klett Verlag", 400, 226),
  logo("klett-cotta", "Klett-Cotta", 400, 350),
  logo("pons-langenscheidt", "PONS Langenscheidt", 300, 93),
  logo("junfermann-verlag", "Junfermann Verlag", 400, 99),
  logo("bange-verlag", "Bange Verlag", 369, 162),
];

export const VERBRAUCHSGUETER_LOGOS: LogoEntry[] = [
  logo("deichmann", "Deichmann SE", 199, 198),
];

export const OEFFENTLICH_LOGOS: LogoEntry[] = [
  logo("rwth-aachen", "RWTH Aachen University", 347, 111),
  logo("hochschule-furtwangen", "Hochschule Furtwangen", 400, 143),
  logo(
    "hochschule-albstadt-sigmaringen",
    "Hochschule Albstadt-Sigmaringen",
    400,
    102
  ),
  logo("hochschule-konstanz", "Hochschule Konstanz", 400, 92),
  logo("th-mannheim", "Technische Hochschule Mannheim", 343, 145),
];
