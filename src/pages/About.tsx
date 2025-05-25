import "./About.css";
import { useState} from "react";
import porscheLogo from "../assets/porsche.png";
import bmwLogo from "../assets/bmw.png";
import sapLogo from "../assets/sap.jpg";
import googleLogo from "../assets/google.png";
import awsLogo from "../assets/aws.png";

import janinaImg from "../assets/janina.jpg";
import timoImg from "../assets/timo.jpg";
import christopherImg from "../assets/christopher.jpg";

const clients = [
  {
    name: "Porsche",
    logo: porscheLogo,
    description:
      "Für Porsche haben wir eine hochverfügbare Cloud-Infrastruktur zur Unterstützung ihrer Entwicklungs- und Testumgebungen entworfen und umgesetzt. Dabei kamen unter anderem skalierbare Compute-Cluster auf Basis von AWS EC2 zum Einsatz, ergänzt durch ein zentrales Monitoring mittels Prometheus und Grafana. Besonders im Fokus stand die nahtlose Integration in bestehende CI/CD-Pipelines zur Fahrzeugsoftware, inklusive automatisiertem Deployment und rollierendem Canary Release. Sämtliche Daten wurden redundant gesichert, verschlüsselt übertragen und über Geo-Redundanz abgesichert."
  },
  {
    name: "BMW",
    logo: bmwLogo,
    description:
      "Im Rahmen einer strategischen Zusammenarbeit mit BMW haben wir eine Big-Data-Plattform für die Verarbeitung und Analyse von Fahrzeugtelemetriedaten aufgebaut. Die Lösung basierte auf einem skalierbaren Data Lake (S3 + Glue) und wurde mit Apache Kafka für Echtzeit-Streaming kombiniert. Unser Team unterstützte sowohl bei der Architektur als auch bei der sicheren Anbindung mobiler Endgeräte. Zur Auswertung wurde ein individuelles Dashboard entwickelt, das Engineering-Teams weltweit Zugriff auf aggregierte Live-Daten ermöglichte."
  },
  {
    name: "SAP",
    logo: sapLogo,
    description:
      "Für SAP haben wir ein internes Self-Service-Cloud-Portal konzipiert, mit dem Entwicklungsteams innerhalb von Minuten eigene Sandbox-Umgebungen aufsetzen konnten. Die zugrunde liegende Infrastruktur bestand aus Kubernetes-Clustern, die über Terraform automatisiert provisioniert wurden. Besondere Anforderungen lagen im Bereich Mandantenfähigkeit, Audit-Fähigkeit und rollenbasierter Zugriff. Unser Beitrag umfasste auch die Einführung einer zentralen Geheimnisverwaltung (Vault) sowie das Onboarding von über 150 Nutzern in nur drei Wochen."
  },
  {
    name: "Google",
    logo: googleLogo,
    description:
      "Mit Google arbeiteten wir an der Optimierung von Containerlaufzeiten in Multi-Zone-Rechenzentren. Unser Fokus lag auf der Optimierung von Cold-Start-Zeiten in GKE (Google Kubernetes Engine), insbesondere für kurzfristig skalierende Dienste mit hohem Nutzeraufkommen. Neben technischem Feinschliff an Containern, Caching und Auto-Scaling wurden Edge-Services neu konzipiert, um nahe an den Nutzern in Europa ausgerollt zu werden. Ein weiteres Thema war die Überwachung der Dienste mit Cloud Logging und Alert-Routing an SRE-Teams."
  },
  {
    name: "AWS",
    logo: awsLogo,
    description:
      "In Zusammenarbeit mit AWS haben wir mehrere Optimierungsprojekte durchgeführt, unter anderem in den Bereichen Storage-Kostenreduktion, Serverless-Architektur und globales Failover. Ein zentrales Thema war die Migration von monolithischen Services in Lambda-Funktionen inklusive API Gateway. Zur Sicherstellung von Hochverfügbarkeit entwickelten wir ein automatisiertes Multi-Region-Failover-Szenario basierend auf Route 53 und DynamoDB Global Tables. Abgerundet wurde das Projekt durch ein individuelles Reporting über CloudWatch-Dashboards und eine automatisierte Compliance-Prüfung mit Config Rules."
  }
];


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="about-section">
      <section className="about-intro">
        <h1>Über CloudNova</h1>
        <p>
          CloudNova ist ein modernes Cloud-Beratungsunternehmen, das sich auf transparente, verständliche
          und flexible Cloud-Lösungen für KMU, Startups und technisch interessierte Nutzer spezialisiert hat.
          Unser Fokus liegt auf hochwertiger Aufbereitung von Cloud-Diensten, praxisnaher Orientierung und
          einem zugänglichen Gesamtpaket für alle, die Cloud-Infrastruktur verstehen und sinnvoll nutzen möchten.
        </p>
        <p>
          Wir haben bereits erfolgreich mit renommierten Kunden zusammengearbeitet:
        </p>
      </section>

      <section className="project-carousel">
  <h2>Erfolgreiche Kundenprojekte</h2>

  <div className="carousel-wrapper">
  <button className="carousel-button" onClick={() => setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length)}>
    ‹
  </button>

  <div className="carousel-track">
    <img
      src={clients[(activeIndex - 1 + clients.length) % clients.length].logo}
      alt="Previous"
      className="carousel-image faded"
    />

    <img
      src={clients[activeIndex].logo}
      alt="Aktiv"
      className="carousel-image active"
    />

    <img
      src={clients[(activeIndex + 1) % clients.length].logo}
      alt="Next"
      className="carousel-image faded"
    />
  </div>

  <button className="carousel-button" onClick={() => setActiveIndex((prev) => (prev + 1) % clients.length)}>
    ›
  </button>
</div>

  <div className="carousel-description">
    <h3>{clients[activeIndex].name}</h3>
    <p>{clients[activeIndex].description}</p>
  </div>
</section>

      <section className="team-section">
        <h2>Unser Projektteam</h2>

        <div className="team-member">
          <img src={janinaImg} alt="Janina Gehrke" />
          <div className="team-text">
            <h3>Janina Gehrke</h3>
            <p>
              Janina übernimmt als Projektleiterin die zentrale Steuerung des gesamten Projekts. Sie ist verantwortlich für die
              Projektplanung, -organisation und das Controlling. Besonders wichtig ist ihr die Abstimmung mit Projektbetreuung
              und Auftraggeber, sowie die strukturierte Weiterleitung aller relevanten Informationen im Team.
              Mit viel Kommunikationsstärke und Organisationstalent sorgt sie für transparente Abläufe, eine klare Aufgabenverteilung
              und die termingerechte Umsetzung der Meilensteine.
            </p>
          </div>
        </div>

        <div className="team-member reverse">
          <img src={timoImg} alt="Timo Schneider" />
          <div className="team-text">
            <h3>Timo Schneider</h3>
            <p>
              Timo kümmert sich als Projektadministrator um alle strukturellen und dokumentarischen Belange des Projekts.
              Er erstellt und verwaltet sämtliche projektorganisatorischen Unterlagen, pflegt das DMS-System auf StudyOnline
              und verantwortet die Fortschreibung aller zentralen Dokumente. Darüber hinaus übernimmt er die Planung
              von Besprechungen sowie die Protokollführung und trägt so entscheidend zur Nachvollziehbarkeit und Qualitätssicherung bei.
            </p>
          </div>
        </div>

        <div className="team-member">
          <img src={christopherImg} alt="Christopher Tutsch" />
          <div className="team-text">
            <h3>Christopher Tutsch</h3>
            <p>
              Christopher unterstützt die Projektleitung operativ und inhaltlich. Er übernimmt die Verantwortung für einzelne
              Arbeitspakete sowie Teilprojekte und ist maßgeblich an der fachlichen Ausarbeitung und Dokumentation beteiligt.
              Mit seinem ausgeprägten technischen Verständnis und analytischen Vorgehen sorgt er dafür, dass Aufgaben
              effizient, vollständig und praxisnah umgesetzt werden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;