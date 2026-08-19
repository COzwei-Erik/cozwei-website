# COzwei Website — Working Context für Claude Code

Diese Datei liest Claude Code beim Start jeder Session automatisch. Sie enthält alle Konventionen und Historik, damit ein neuer Claude sofort so arbeiten kann wie in den vorherigen Sessions.

Peter Wilson (COzwei-Erik) ist der einzige Nutzer, spricht Deutsch, arbeitet an zwei Rechnern (sequenziell, nicht parallel) mit Zugang zum Repo.

---

## Branch-Setup (LIES DAS ZUERST)

Wir arbeiten aktuell **immer auf Branch `relaunch`**, nicht auf `main`.

- **`main`** = Production. Deployt automatisch auf `cozwei.de`. Wird nur angefasst, wenn Peter explizit sagt „jetzt live nehmen".
- **`relaunch`** = Test/Staging. Deployt automatisch auf die Vercel-Preview-URL **`cozwei-website-git-relaunch-cozweis-projects.vercel.app`**. Hier passieren alle laufenden Änderungen.
- **Merge zurück nach `main`** passiert nur nach ausdrücklichem Peter-OK, entweder via GitHub-PR oder lokalem `git checkout main && git merge relaunch && git push`.

**Wechsel-Ritual bei Peter's PC-Wechsel** (er nutzt zwei Rechner sequenziell):

Bevor der aktuelle PC verlassen wird:
```
git add -A && git commit -m "…" && git push origin relaunch
```

Bevor am anderen PC angefangen wird:
```
git fetch origin && git pull origin relaunch
```

Solange Peter sequenziell arbeitet, gibt es keine Merge-Konflikte. Falls doch: die Konflikte lokal auflösen, nicht mit `--force` pushen.

**Bereits vorhandene Staging-Guards auf `relaunch`** (Stand August 2026):
- `robots.txt` und `X-Robots-Tag: noindex` für alle Non-Production-Deployments → Google indexiert Preview-URLs nicht
- Kein echter Mailversand außerhalb Production → Kontakt-/Buchungs-Anfragen auf der Preview-URL werden nicht real verschickt

Diese Guards sind bewusst so gesetzt; nicht ohne Rücksprache mit Peter deaktivieren.

---

## Ship-to-Vercel-Workflow (ZWEITWICHTIGSTER PUNKT)

**Geändert am 19.08.2026: Vor jedem Push wird der Stand lokal angeschaut.** Die frühere Regel „kein lokaler Dev-Server" gilt nicht mehr. Sie hat dazu geführt, dass Fehler erst nach dem Deployment auffielen, unter anderem ein falsch aufgelöstes OpenGraph-Bild und zwei Seiten ohne eigene `metadata`.

Der Verify-Loop ist jetzt:

1. Edit
2. `npx tsc --noEmit -p .` (TypeScript-Check)
3. **Dev-Server starten und den Stand ansehen**: `preview_start` mit dem Namen `cozwei-website` aus `.claude/launch.json` im Arbeitsverzeichnis (eine Ebene über dem Repo). Läuft auf Port 3020, damit er sich nicht mit den anderen Projekten beißt.
4. Prüfen: `preview_logs` auf Warnungen und Fehler, `read_page` für Struktur und Überschriften-Hierarchie, `resize_window` für Mobil und Tablet, `computer` für Klicks und Hover, `javascript_tool` für Statuscodes, Titles und JSON-LD über mehrere Routen hinweg.
5. `git commit` mit HEREDOC-Message
6. `git push origin relaunch`
7. Vercel deployt automatisch in ~1 Minute, Erik verifiziert auf der Preview-URL `cozwei-website-git-relaunch-cozweis-projects.vercel.app` (nicht auf `cozwei.de`, das ist Production)

Wichtig zu Schritt 3: **Config-Änderungen in `next.config.ts` greifen erst nach einem Neustart des Dev-Servers**, also `preview_stop` und `preview_start`. Hot Reload deckt sie nicht ab.

Grenzen des lokalen Blicks: Screenshots funktionieren nur, wenn das Browser-Panel eingeblendet ist; die textbasierten Werkzeuge gehen immer. Und lokal ist nicht Vercel, Bildoptimierung und Umgebungsvariablen können abweichen. Der Blick auf Staging bleibt also die Bestätigung, ist aber nicht mehr die erste Fehlersuche.

**Commits**: Descriptive Messages, Co-Authored-By-Footer für Claude, HEREDOC-Format wegen mehrzeiliger Nachrichten. **Nie** `--no-verify`, `--amend`, `--force`. Nie Hooks skippen.

**GitHub-Repo**: `https://github.com/COzwei-Erik/cozwei-website` — Auth ist auf dem Rechner bereits eingerichtet. Peters PAT hat keinen `workflow`-Scope; wenn `.github/workflows/*` geändert werden muss, ist ein manuell konfigurierter PAT nötig (bisher nicht passiert).

---

## Tech-Stack

- **Next.js 16** App Router
- **TypeScript** strict
- **Tailwind CSS** (mit gelegentlichen inline-`style`-Overrides für CI-Farben)
- Deployed auf **Vercel** bei push-to-main
- Node ≥ 20 (auf Vercel automatisch)

---

## Repo-Layout

```
src/app/
  layout.tsx                        Server Component, Default-Metadaten + Root-Layout
  page.tsx                          Homepage
  Header.tsx                        Sticky Nav mit Lösungen-Dropdown + Sprachwahl DE/EN/PT
  MobileMenu.tsx                    Mobile Version des Headers
  LanguageContext.tsx               Globaler Sprach-Context + geteilte Translation-Strings
  ConsentContext.tsx                Cookie-Consent State (localStorage: cookie-consent-v1)
  analytics.ts                      trackEvent(), Events-Enum
  links.ts                          Zentrale URLs: HUBSPOT_FORM_URL, OUTLOOK_BOOKING_URL (Erik)
  components/
    ContactForm.tsx                 CTA-Sektion mit HubSpot-Link (kein echtes Formular mehr)
    GoogleAnalytics.tsx             Lädt gtag.js NUR nach Consent, feuert page_view bei Route-Change
    CookieBanner.tsx                Bottom-fixed 3-Button-Banner
    CookieSettingsButton.tsx        Floating bottom-left Reopen-Button
    InsightCallouts.tsx             StatCallout, PullQuote, PatternBox, CtaBox (für Blog-Posts)
  <slug>/page.tsx                   Landing Pages (meist "use client")
  cdp-klimaberichterstattung/       AUSNAHME: page.tsx ist Server Component mit eigener metadata + JSON-LD, rendert <CdpClient />
  insights/
    page.tsx                        Übersichtsseite mit POSTS[]-Array (neueste oben)
    <slug>/page.tsx                 Blog-Post (Client Component)
    <slug>/content.ts               Per-Post-Content, Record<"de"|"en"|"pt", Content>

public/Pictures/                    Alle Fotos & Assets (Portraits, Hero-Bilder, Logos)
public/foerderungen-dashboard.html  Legacy HTML-Dashboard, via iframe eingebunden auf /foerderungen
public/llms.txt, llms-full.txt      LLM-Crawling-Standard 2026, manuell gepflegt
```

---

## CI-Design-Tokens (COzwei-Palette)

Aus dem Folienmaster 2024 V4:

| Token | Hex | Verwendung |
|---|---|---|
| Sustainable Green | `#81B29A` | Primär-Akzent: Buttons, Borders, Hervorhebungen |
| Deep Sea Blue / Slate | `#3D405B` | Überschriften, Text-Anker, dunkle Buttons |
| Long Fall Yellow | `#F2CC8F` | Nur Fein-Akzent (Highlights, Icons), NIE flächig |
| Ice Beige | `#F4F1DE` | Zurückhaltende Karten (aktuell wenig verwendet) |
| Sunset Orange | `#E17960` | Selten, nur wenn explizit gewünscht |
| Body-Ink | `#23243a` oder `#1A1A1A` | Fließtext |
| Muted | `#6B6B6B` | Metadaten, italic Quellen |
| Rule / Hairline | `#E2DDD0` | 1-px-Borders auf weißen Karten |

**Verbot**: Kein Gelb-auf-Blau, kein flächiges Gelb, kein Amber-Button. Falls ein Blog-Post spezifische Tokens einführt (siehe CSRD-Post), ist das lokal in der `page.tsx` als `TOKEN`-Konstante zu spiegeln.

---

## Copy-Guidelines

- **Sprachen**: Deutsch ist Primär; EN und PT gleichzeitig pflegen. Nie DE-Änderungen ohne EN/PT nachziehen.
- **Keine Em-Dashes** (`—`). Ersatz: Komma, Doppelpunkt oder ganzer Satz. Historische Konvention aus mehreren Sessions.
- **Tonalität**: beraterisch-sachlich, keine Marketing-Floskeln, präzise Fachterminologie in etablierter Schreibweise (Scope 3, CSRD, ESRS, GHG Protocol, CDP, ISO 14064-3).
- **Zahlen**: DE mit Komma und Punkt (`22.100`, `2,5 %`), EN mit Komma und Punkt (`22,100`, `2.5 %`), PT wie DE.
- **Datum**: DE „Juli 2026", EN „July 2026", PT „Julho de 2026".

---

## Insights-Blog-Post-Pattern

Jeder Post lebt in `src/app/insights/<slug>/`:

- `content.ts`: Content-Typ + Record `{ de, en, pt }` mit allen Textfeldern (heroKicker, heroTitle, intro, section-Absätze, statCallouts, faq[], disclaimer, author-Felder)
- `page.tsx`: `"use client"`, importiert `content` + `translations`, verwendet StatCallout / PullQuote / PatternBox aus `InsightCallouts.tsx`
- Der Slug muss auch in `insights/page.tsx` als vierte/fünfte/... Card ins `POSTS[]`-Array eingetragen werden — neueste Posts stehen oben
- Card-Meta-Keys (`insightsPost<N>Date`, `Category`, `Title`, `Desc`) werden in `LanguageContext.tsx` in allen drei Sprachen ergänzt

**Standard-Sektionen im Post**:
1. Hero mit Kicker, H1, Meta (Datum · Kategorie · Autor)
2. „Zurück zur Übersicht"-Link
3. Article-Body mit H2-Sektionen (auf CSRD-Post: `ArticleH2` mit 56-px Sage-Underline)
4. Ein oder mehrere StatCallouts
5. Optional PullQuote
6. Optional Regulatorik-Chips, Lessons-Grid, Merksatz-Aside (siehe CSRD als Referenz-Implementierung)
7. **Ansprechpartner-Karte** (kombiniert: Foto + Rolle + Bio + primärer CTA + kursive Footnote) mit `id="kontakt"` — ersetzt separate CtaBox + Author-Aside
8. FAQ-Accordion (`<details>` + `<summary>`, erste Frage `open`)
9. Disclaimer (kursiv, klein)
10. Footer

---

## Landing-Page-Pattern

- Meist `"use client"`, ohne eigene `metadata` (Ausnahme: `cdp-klimaberichterstattung`)
- Hero-Bild via Next `<Image fill>` in Full-Screen-Section
- Sprachumschaltung via `useLanguage()` + `translations[language]`
- Ansprechpartner-Karte am Ende (analog Blog-Post-Muster) statt generischer ContactForm

---

## Booking-URLs — wer hat welche?

Wichtigste Sache, die ein neuer Claude sofort wissen muss. Die URLs sind auf drei Systeme verteilt (Outlook, Microsoft Bookings, HubSpot-Formular):

| Person | Verwendung | URL-Ort |
|---|---|---|
| **Erik Jakob** | CCF-Blog, Verifizierungsseite | `OUTLOOK_BOOKING_URL` in `src/app/links.ts` |
| **Erik Jakob** | Buchverlage-Blog | Eigener Microsoft-Bookings-Link, inline in `insights/buchverlage-dekarbonisierung/page.tsx` |
| **Marie Bruns** | NKI-Blog, Klimaschutzkonzepte-Seite | Eigener Microsoft-Bookings-Link, inline in beiden `page.tsx` |
| **Christian Philippen** | CDP-Landing-Page | Meeting-Type A in `cdp-klimaberichterstattung/CdpClient.tsx` |
| **Christian Philippen** | CSRD-Automotive-Blog | Meeting-Type B in `insights/csrd-automobilindustrie-lektionen-zulieferer/page.tsx` (andere URL als CDP!) |
| **Dominik Enger** | BAFA-Blog | Eigener Microsoft-Bookings-Link, inline in `insights/bafa-modul-4/page.tsx` |
| **HubSpot-Formular** | Fallback / „Prefer to write"-Links | `HUBSPOT_FORM_URL` in `src/app/links.ts` |

**Regel**: Wenn Peter sagt „Marie's Termin", „Erik's CDP-Termin", „Christian für CSRD" — genau die passende URL nehmen. Nicht kreativ werden. Fragen, wenn unklar.

---

## Analytics

- Google Analytics 4, ID `G-074TG0K251`
- Lädt **erst nach Consent** über den Cookie-Banner. Ohne Consent kein gtag.js.
- Route-Changes werden im `useEffect` in `GoogleAnalytics.tsx` als `gtag('config', GA_ID, { page_path: pathname })` gefeuert
- Custom Events: `trackEvent(Events.BookingClick, { location: 'blog_csrd_author' })` etc.
- Bekanntes Reporting-Problem: nur `cdp-klimaberichterstattung/page.tsx` hat eigene `metadata`. Alle anderen Pages fallen in GA4 unter denselben Default-Title zusammen. In GA4 mit Dimension `pagePath` statt `pageTitle` reporten.

---

## Bekannte offene Punkte (Backlog)

- **SEO-Metadaten fehlen auf allen Seiten außer CDP.** Fix: pro Landing Page und Blog-Post eine Server-Component-Wrapper-Datei mit `export const metadata` bauen (Muster: `cdp-klimaberichterstattung/page.tsx`). Aufwand ~15 min pro Seite. Wenn Peter das anstößt: alle betroffenen Seiten in einem Rutsch machen.
- Partner-Sektion auf `/ueber-uns` wurde entfernt; `t.partner*`-Strings liegen in `LanguageContext.tsx` als Dead-Data. Nur räumen, wenn Peter explizit sagt.
- Legacy Bilddateien mit generischen Namen (`image copy N.png/.webp`) im `public/Pictures/`-Ordner: nicht anfassen ohne Absprache.

---

## Konventionen für Commits

Format:
```
<Bereich>: <Kernaussage in einem Halbsatz>

<optional Detail-Absatz, 2-3 Sätze>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

Beispiele aus der Historie:
- `CSRD Automotive: visual overhaul per V1 briefing (Sage/Slate/Beige, +stats, +grid, +chips)`
- `Insights index: reorder cards newest first (was oldest first)`
- `Über uns: remove "Unsere Partner" section and the surrounding slider machinery`

---

## Erste Schritte auf einem neuen Rechner

Der neue PC hat GitHub-Auth schon eingerichtet. Ablauf:

```bash
# 1. Repo clonen
git clone https://github.com/COzwei-Erik/cozwei-website.git
cd cozwei-website

# 2. Auf die Arbeits-Branch wechseln (wir arbeiten nicht auf main)
git checkout relaunch
git pull origin relaunch

# 3. TypeScript-Check als Sanity-Test
npx tsc --noEmit -p .

# 4. Fertig. Push-to-Vercel läuft ohne local dev.
#    Optional falls doch mal local dev nötig:
#      npm install
#      cp .env.example .env.local   (oder .env.local manuell anlegen)
#      npm run dev
```

Die einzige Umgebungsvariable, die für Prod aktiv genutzt wird, ist `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-074TG0K251` — diese ist auf Vercel serverseitig hinterlegt, also für Push-to-Deploy nicht auf der lokalen Machine nötig.

---

## Reihenfolge bei Änderungen

1. Peter beschreibt einen Wunsch (oft mit Screenshot, PDF-Briefing oder Word-Doc)
2. Kurz spiegeln, was verstanden wurde, wenn nicht offensichtlich
3. Umsetzen in den passenden Dateien
4. TypeScript-Check
5. Commit mit klarer Message
6. `git push origin main`
7. Peter kurz zusammenfassen: welche Files, welche Commits, was live geht
8. Peter checkt live und meldet zurück

Kein Warten auf lokale Verification. Vercel ist der Test.

---

_Diese Datei wird bei größeren Änderungen an Workflow, Struktur oder CI aktualisiert. Zuletzt: Juli 2026 (Session-Übergabe auf zweiten Rechner)._
