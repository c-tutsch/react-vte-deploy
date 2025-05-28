// src/pages/Services.tsx
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-page">
      <section className="intro">
        <h1>Unsere Cloud-Dienste</h1>
        <p>
          CloudNova bietet eine moderne, zuverlässige Cloud-Infrastruktur, die es Unternehmen ermöglicht, ihre Daten effizient, sicher und flexibel zu verwalten. Erfahren Sie, welche Vorteile Cloud-Computing Ihnen bietet.
        </p>
      </section>

      <section className="service-boxes">
        <div className="service-card">
          <h2>Was ist Cloud-Computing?</h2>
          <p>
            Cloud-Computing ermöglicht den Zugriff auf Rechenleistung, Speicherplatz und Software über das Internet – ohne eigene Server betreiben zu müssen. Unternehmen profitieren von Skalierbarkeit, Ausfallsicherheit und geringeren IT-Kosten.
          </p>
        </div>

        <div className="service-card">
          <h2>Vorteile für Ihr Unternehmen</h2>
          <ul>
            <li>⚡ Flexible Skalierung nach Bedarf</li>
            <li>🔒 Höchste Sicherheitsstandards</li>
            <li>💡 Keine Investitionen in teure Hardware</li>
            <li>🌍 Weltweiter Zugriff auf Ihre Anwendungen</li>
            <li>🔧 Automatische Updates & Wartung</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Online-Speicher vs. On-Premise</h2>
          <p>
            Während On-Premise-Lösungen kostspielig und wartungsintensiv sind, bieten Cloud-Speicherlösungen von CloudNova eine kostengünstige, sichere und skalierbare Alternative mit integriertem Backup und schneller Datenwiederherstellung.
          </p>
        </div>
      </section>

      <section className="why-us">
        <h2>Warum CloudNova?</h2>
        <ul>
          <li>✅ 24/7 Kundensupport durch Experten</li>
          <li>✅ Hosting ausschließlich in Deutschland</li>
          <li>✅ DSGVO-konform und TÜV-zertifiziert</li>
          <li>✅ Flexibel skalierbar für jede Unternehmensgröße</li>
          <li>✅ Transparente Preisgestaltung ohne versteckte Kosten</li>
          <li>✅ Intuitive Benutzeroberfläche für einfache Verwaltung</li>
        </ul>
      </section>

      <section className="use-cases">
        <h2>Typische Einsatzszenarien</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>Startups</h3>
            <p>Skalierbare Infrastruktur ohne hohe Anfangsinvestitionen.</p>
          </div>
          <div className="use-case">
            <h3>KMU</h3>
            <p>Flexible Speicherlösungen und sichere Datensicherung.</p>
          </div>
          <div className="use-case">
            <h3>Großunternehmen</h3>
            <p>Hybride Architekturen mit hohen Compliance-Anforderungen.</p>
          </div>
        </div>
      </section>

      <section className="cta-services">
        <p>
          Bereit für die Cloud?{' '}
          <Link to="/contact" className="cta-link">Jetzt beraten lassen</Link>
        </p>
      </section>
    </div>
  );
};

export default Services;
