"use client";
import Header from "../Header";
import React from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function DatenschutzClient() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-center" style={{ color: '#3D405B' }}>Datenschutzerklärung</h1>
        <div className="prose prose-lg max-w-none text-[#3D405B]">
          <h2>1. Verantwortlicher für die Datenverarbeitung</h2>
          <p>Verantwortlicher gemäß Art. 4 Abs. 7 DSGVO ist:<br />COzwei GmbH<br />Waldfeuchterstr. 274, 52525 Heinsberg<br />Deutschland<br />E-Mail: datenschutz@cozwei.de<br />Telefon: 0711 12171034</p>
          <h2>2. Datenschutzbeauftragter</h2>
          <p>Wir sind gesetzlich nicht verpflichtet, einen Datenschutzbeauftragten zu benennen. Bei Fragen zum Datenschutz erreichen Sie uns unter datenschutz@cozwei.de.</p>
          <h2>3. Hosting und Logfiles</h2>
          <p>Beim Besuch unserer Webseite verarbeiten wir personenbezogene Daten, um den reibungslosen und sicheren Betrieb zu gewährleisten. Dabei können folgende Daten in sog. Logfiles verarbeitet werden:<br />- Betriebssystem und IP-Adresse (anonymisiert) des Endgeräts<br />- Browser (Typ, Version und Spracheinstellung)<br />- abgerufene Datenmenge<br />- Datum und Uhrzeit des Zugriffs<br />- URL der zuvor besuchten Webseite (Referrer)<br />- URL der aufgerufenen Seite<br />- Internet-Service-Provider des zugreifenden Systems</p>
          <p>Die Erhebung der Logfiles ist technisch erforderlich, um Ihnen die Webseite anzuzeigen und Stabilität und Sicherheit zu gewährleisten. Hierin liegt auch unser berechtigtes Interesse. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
          <p>Das Hosting dieser Webseite erfolgt durch Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Mit Vercel haben wir einen Auftragsverarbeitungsvertrag (DPA) geschlossen, der unter <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">vercel.com/legal/dpa</a> abrufbar ist. Vercel ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert; ergänzend gelten EU-Standardvertragsklauseln. Damit besteht für Datenübermittlungen in die USA ein geeignetes Schutzniveau im Sinne von Art. 45 ff. DSGVO.</p>
          <p>Die auf dieser Website verwendeten Schriftarten werden von unserem eigenen Server geladen. Eine Verbindung zu Servern von Google oder anderen Schriftanbietern wird dabei nicht aufgebaut.</p>

          <h2>4. Kontaktaufnahme über das HubSpot-Formular</h2>
          <p>Wenn Sie mit uns in Kontakt treten möchten, leiten wir Sie zu einem von HubSpot bereitgestellten Online-Formular weiter. Anbieter ist HubSpot, Inc., 25 First Street, 2nd Floor, Cambridge, MA 02141, USA. Im Rahmen Ihrer Anfrage verarbeiten wir die von Ihnen freiwillig angegebenen Daten (typischerweise Name, E-Mail-Adresse, Unternehmen sowie Ihre Nachricht) ausschließlich zur Bearbeitung Ihres Anliegens.</p>
          <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b DSGVO (Anbahnung oder Durchführung vorvertraglicher Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Ihre Daten werden gelöscht, sobald der Zweck der Speicherung entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
          <p>Mit HubSpot haben wir einen Auftragsverarbeitungsvertrag (DPA) gemäß Art. 28 DSGVO geschlossen (<a href="https://legal.hubspot.com/dpa" target="_blank" rel="noopener noreferrer">legal.hubspot.com/dpa</a>). HubSpot ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert; ergänzend gelten EU-Standardvertragsklauseln. Die Datenschutzerklärung von HubSpot finden Sie unter <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">legal.hubspot.com/privacy-policy</a>.</p>

          <h2>5. Terminbuchung über Microsoft Bookings</h2>
          <p>Auf mehreren Seiten verlinken wir auf unsere Online-Terminbuchung über Microsoft Bookings, einen Dienst der Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Microsoft wird erst aufgerufen, wenn Sie auf einen solchen Link klicken. Wenn Sie einen Termin buchen, verarbeiten wir die von Ihnen angegebenen Daten, etwa Name, E-Mail-Adresse, Telefonnummer und Ihre Anmerkungen, um den Termin zu vereinbaren und durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.</p>
          <p>Microsoft verarbeitet die Daten in unserem Auftrag; ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO besteht. Microsoft ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert; ergänzend gelten EU-Standardvertragsklauseln.</p>

          <h2>6. Cookies, lokaler Speicher und Einwilligung</h2>
          <p>Ohne Ihre Einwilligung setzen wir keine Cookies. Damit die Website wie gewünscht funktioniert, speichern wir im lokalen Speicher Ihres Browsers (localStorage) zwei Angaben: Ihre Auswahl im Cookie-Banner, damit wir Ihre Entscheidung beachten und der Banner nicht bei jedem Besuch erscheint, sowie Ihre gewählte Sprache. Diese Einträge enthalten keine Kennung zur Wiedererkennung, werden nicht an uns oder Dritte übertragen und bleiben gespeichert, bis Sie sie in Ihrem Browser löschen. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, soweit personenbezogene Daten betroffen sind, Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
          <p>Einwilligungspflichtige Dienste (Ziffer 7: Google Analytics) setzen wir nur ein, wenn Sie im Cookie-Banner zustimmen. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie unten links auf „Cookie-Einstellungen“ klicken.</p>

          <h2>7. Webanalyse mit Google Analytics (nur mit Einwilligung)</h2>
          <p>Mit Ihrer Einwilligung nutzen wir Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics wird erst geladen, nachdem Sie im Cookie-Banner zugestimmt haben.</p>
          <p>Google Analytics setzt zwei Cookies: „_ga“ zur Unterscheidung von Besuchern und „_ga_&lt;ID&gt;“ zur Speicherung des Sitzungsstatus, jeweils mit einer Speicherdauer von bis zu zwei Jahren. Verarbeitet werden insbesondere aufgerufene Seiten, Verweildauer, die zuvor besuchte Seite, Geräte- und Browserinformationen sowie der ungefähre Standort. Nach Angaben von Google werden IP-Adressen in Google Analytics 4 nicht protokolliert oder gespeichert. Google Signals und Funktionen für personalisierte Werbung haben wir deaktiviert. Die Analysedaten werden nach 14&nbsp;Monaten automatisch gelöscht.</p>
          <p>Google verarbeitet die Daten in unserem Auftrag; ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO besteht. Eine Übermittlung an die Google LLC in den USA ist möglich; Google LLC ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert, ergänzend gelten EU-Standardvertragsklauseln.</p>
          <p>Rechtsgrundlage ist Ihre Einwilligung nach § 25 Abs. 1 TDDDG i.&nbsp;V.&nbsp;m. Art. 6 Abs. 1 S. 1 lit. a DSGVO. Den Widerruf erklären Sie über „Cookie-Einstellungen“ unten links.</p>

          <h2>8. Ihre Rechte</h2>
          <p>Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten durch uns verarbeitet werden. Ist dies der Fall, geben wir Ihnen gerne Auskunft über diese personenbezogenen Daten und die in Art. 15 DSGVO aufgeführten Informationen. Darüber hinaus steht Ihnen unter den jeweiligen gesetzlichen Voraussetzungen das Recht auf Berichtigung (Art. 16 DSGVO), das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO), das Recht auf Löschung (Art. 17 DSGVO), das Recht auf Datenübertragbarkeit (Art. 20 DSGVO) und das Recht, Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO), zu. Beruht die Verarbeitung auf Ihrer Einwilligung, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO); die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung bleibt dabei unberührt. Zur Ausübung Ihrer Betroffenenrechte wenden Sie sich bitte an die unter Ziffer 1 genannten Kontaktmöglichkeiten. Zudem haben Sie jederzeit die Möglichkeit, Ihr Recht auf Beschwerde bei einer zuständigen Aufsichtsbehörde geltend zu machen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt (Art. 77 DSGVO).</p>
          <h2>9. Änderung der Datenschutzerklärung</h2>
          <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern. Derzeitiger Stand: Oktober 2026.</p>
        </div>
      </main>
      <footer className="bg-gray-100 py-8 px-4 mt-8 text-center text-sm text-gray-600">
        <div className="mb-2">COzwei GmbH &bull; Waldfeuchterstr. 274, 52525 Heinsberg &bull; HRB 30407, Amtsgericht Aachen &bull; Telefon: +49 711 12171034 &bull; E-Mail: mail@cozwei.de</div>
        <div className="flex justify-center gap-4 mb-2">
          <a href="/datenschutz" className="hover:underline">{t.privacy}</a>
          <a href="/impressum" className="hover:underline">{t.imprint}</a>
          <a href="https://www.linkedin.com/company/cozwei" target="_blank" rel="noopener noreferrer" className="hover:underline">{t.linkedin}</a>
        </div>
        <div>© {new Date().getFullYear()} COzwei GmbH</div>
      </footer>
    </div>
  );
} 