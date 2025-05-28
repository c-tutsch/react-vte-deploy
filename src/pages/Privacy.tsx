// src/pages/Privacy.tsx
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1>Datenschutzerklärung</h1>

      <div className="privacy-toc">
        <h2>Inhaltsverzeichnis</h2>
        <ul>
          <li><a href="#verantwortlicher">1. Verantwortlicher</a></li>
          <li><a href="#datenarten">2. Arten der verarbeiteten Daten</a></li>
          <li><a href="#zwecke">3. Zwecke der Verarbeitung</a></li>
          <li><a href="#rechtsgrundlagen">4. Rechtsgrundlagen</a></li>
          <li><a href="#auftragsverarbeiter">5. Zusammenarbeit mit Auftragsverarbeitern</a></li>
          <li><a href="#rechte">6. Rechte der betroffenen Personen</a></li>
          <li><a href="#speicherdauer">7. Speicherdauer</a></li>
          <li><a href="#sicherheit">8. Sicherheitsmaßnahmen</a></li>
        </ul>
      </div>

      <div className="privacy-content">
        <p id="verantwortlicher">
          <strong>1. Verantwortlicher</strong><br />
          Max Mustermann, CloudNova GmbH, Musterstraße 12, 12345 Musterstadt<br />
          E-Mail: datenschutz@cloudnova.de
        </p>

        <p id="datenarten">
          <strong>2. Arten der verarbeiteten Daten</strong><br />
          Bestandsdaten (z.B., Namen, Adressen), Kontaktdaten (z.B., E-Mail), Inhaltsdaten (Texte, Dateien), Nutzungsdaten (z.B., besuchte Seiten), Meta-/Kommunikationsdaten (z.B., Geräteinformationen, IP-Adressen).
        </p>

        <p id="zwecke">
          <strong>3. Zwecke der Verarbeitung</strong><br />
          Bereitstellung unseres Onlineangebots, Kommunikation mit Nutzern, Sicherheitsmaßnahmen, Marketing und Analyse.
        </p>

        <p id="rechtsgrundlagen">
          <strong>4. Rechtsgrundlagen</strong><br />
          Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 DSGVO: a) Einwilligung, b) Vertragserfüllung, c) rechtliche Verpflichtung, f) berechtigtes Interesse.
        </p>

        <p id="auftragsverarbeiter">
          <strong>5. Zusammenarbeit mit Auftragsverarbeitern</strong><br />
          Wir setzen Dienstleister (z. B. Hosting, IT) ein, mit denen Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO bestehen.
        </p>

        <p id="rechte">
          <strong>6. Rechte der betroffenen Personen</strong><br />
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.
        </p>

        <p id="speicherdauer">
          <strong>7. Speicherdauer</strong><br />
          Ihre Daten werden gelöscht, sobald der Zweck der Speicherung entfällt, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>

        <p id="sicherheit">
          <strong>8. Sicherheitsmaßnahmen</strong><br />
          Wir treffen organisatorische, vertragliche und technische Maßnahmen gemäß dem Stand der Technik, um die Sicherheit der Datenverarbeitung sicherzustellen.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
