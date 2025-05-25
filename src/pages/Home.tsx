import './Home.css';
import { Link } from 'react-router-dom';
import computeImage from '../assets/compute.jpg';
import storageImage from '../assets/storage.jpg';
import databaseImage from '../assets/database.jpg';
import consultingImage from '../assets/consulting.jpg';

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <h1>CloudNova – Ihre Cloud, Ihre Kontrolle.</h1>
        <p>Skalierbare, sichere und transparente Cloud-Lösungen für Unternehmen jeder Größe – ganz ohne Komplexität.</p>
        <Link to="/services" className="cta-button">Jetzt entdecken</Link>
      </section>

      <section className="intro">
        <h2>Was ist CloudNova?</h2>
        <p>
          CloudNova ist ein fiktiver Anbieter moderner Cloud-Dienste, der kleinen und mittleren Unternehmen den Zugang zur Cloud erleichtert. Unsere Plattform erklärt verständlich, was Cloud-Services wie Compute, Storage oder Datenbanken leisten – und was sie kosten.
        </p>
      </section>

      <section className="visual-services">
        <div className="visual-card">
          <img src={computeImage} alt="Compute" />
          <h3>Compute</h3>
          <p>Flexible Rechenleistung für alle Anwendungsszenarien – sofort einsatzbereit.</p>
        </div>
        <div className="visual-card">
          <img src={storageImage} alt="Storage" />
          <h3>Storage</h3>
          <p>Zuverlässiger Cloud-Speicher für Dateien, Backups und Datenmengen jeder Größe.</p>
        </div>
        <div className="visual-card">
          <img src={databaseImage} alt="Datenbanken" />
          <h3>Datenbanken</h3>
          <p>Voll gemanagte SQL- und NoSQL-Datenbanken für maximale Performance.</p>
        </div>
        <div className="visual-card">
          <img src={consultingImage} alt="Cloud-Beratung" />
          <h3>Cloud-Beratung</h3>
          <p>Individuelle Beratung für maßgeschneiderte Cloud-Lösungen.</p>
        </div>
      </section>

      <section className="services-overview">
        <h2>Unsere Kernbereiche</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Compute</h3>
            <p>Virtuelle Maschinen, Container und Rechenleistung – sofort skalierbar für Ihre Workloads.</p>
          </div>
          <div className="service-card">
            <h3>Storage</h3>
            <p>Objekt- und Blockspeicher mit hoher Verfügbarkeit – ideal für Ihre Daten, Backups und mehr.</p>
          </div>
          <div className="service-card">
            <h3>Datenbanken</h3>
            <p>Verwalten Sie relationale oder NoSQL-Datenbanken mit nur wenigen Klicks – performant & sicher.</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Warum CloudNova?</h2>
        <ul>
          <li>✔️ Einfache Benutzeroberfläche</li>
          <li>✔️ Übersichtliche Preiskalkulation</li>
          <li>✔️ Keine versteckten Kosten</li>
          <li>✔️ Ideal für KMU, Startups & Berater</li>
        </ul>
      </section>

      <section className="offerings">
        <h2>Unsere Angebote im Überblick</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <h3>Compute</h3>
            <p>
              Starten Sie virtuelle Maschinen, skalieren Sie Container-Anwendungen oder führen Sie komplexe Berechnungen durch – alles auf Knopfdruck.
            </p>
            <ul>
              <li>⚙️ Virtuelle Server mit nur wenigen Klicks</li>
              <li>📈 Skalierbar von 1 bis 1000 Instanzen</li>
              <li>🧮 CPU-optimierte und GPU-basierte Workloads</li>
            </ul>
          </div>
          <div className="offer-card">
            <h3>Storage</h3>
            <p>
              Ob Backups, Mediendateien oder große Datenmengen – unser Speichersystem wächst mit Ihren Anforderungen.
            </p>
            <ul>
              &nbsp;
              <li>📦 Objekt- & Blockspeicher</li>
              <li>🔐 Redundante Speicherung für maximale Ausfallsicherheit</li>
              <li>🚀 Zugriff via API oder Web</li>
            </ul>
          </div>
          <div className="offer-card">
            <h3>Datenbanken</h3>
            <p>
              Schnell eingerichtet, hoch verfügbar und bestens gesichert – unsere Datenbanklösungen decken alles ab.
            </p>
            &nbsp;
            <ul>
              <li>🗃️ MySQL, PostgreSQL & NoSQL</li>
              <li>📊 Automatisierte Backups</li>
              <li>🛡️ DSGVO-konforme Datenhaltung</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="consulting">
        <h2>Individuelle Beratung für Ihre Cloud-Strategie</h2>
        <p className="consulting-text">
          Sie wissen noch nicht, welche Cloud-Dienste für Ihr Unternehmen am besten geeignet sind?
          Kein Problem – wir helfen Ihnen dabei, eine maßgeschneiderte Lösung zu entwickeln.
        </p>
        <div className="consulting-points">
          <div className="point">
            <h3>🧭 Analyse & Bedarfsermittlung</h3>
            <p>Gemeinsam analysieren wir Ihre Anforderungen und identifizieren sinnvolle Cloud-Modelle (z. B. IaaS, PaaS).</p>
          </div>
          <div className="point">
            <h3>🧩 Individuelle Empfehlungen</h3>
            <p>Sie erhalten einen übersichtlichen Vorschlag mit passenden Diensten, Infrastrukturvarianten und groben Preisschätzungen.</p>
          </div>
          <div className="point">
            <h3>📞 Persönlicher Kontakt</h3>
            <p>Auf Wunsch besprechen wir die Ergebnisse in einem unverbindlichen Beratungsgespräch – digital oder telefonisch.</p>
          </div>
        </div>
        <Link to="/contact" className="cta-button consulting-cta">Beratung anfragen</Link>
      </section>

      <section className="cta-section">
        <h2>Bereit für den nächsten Schritt?</h2>
        <p>Erfahren Sie mehr über unsere Dienstleistungen oder lassen Sie sich individuell beraten.</p>
        <Link to="/contact" className="cta-button">Jetzt Kontakt aufnehmen</Link>
      </section>

    </div>
  );
};

export default Home;
