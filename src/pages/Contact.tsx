import { Link } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";

const faqs = [
  {
    question: "Wie lange dauert es, bis ich eine Antwort erhalte?",
    answer: "In der Regel antworten wir innerhalb von 24 Stunden an Werktagen."
  },
  {
    question: "Kann ich auch telefonisch Kontakt aufnehmen?",
    answer: "Zurzeit bieten wir Support ausschließlich per E-Mail oder Kontaktformular an."
  },
  {
    question: "Ist die Nutzung der Webseite kostenlos?",
    answer: "Ja, alle Informationen und Tools auf CloudNova sind kostenlos nutzbar."
  },
  {
    question: "Wo befinden sich die Server von CloudNova?",
    answer: "Unsere Server befinden sich ausschließlich in zertifizierten Rechenzentren innerhalb der EU – DSGVO-konform und hochsicher."
  },
  {
    question: "Welche Service Level Agreements (SLAs) bieten Sie an?",
    answer: "Für unsere Dienste gilt eine garantierte Verfügbarkeit von 99,9 % pro Monat. Details unter cloudnova.de/sla."
  },
  {
    question: "Sind meine Daten bei Ihnen verschlüsselt?",
    answer: "Ja, wir verschlüsseln alle Daten nach aktuellen Standards (z. B. AES-256) – sowohl bei der Übertragung als auch im Ruhezustand."
  },
  {
    question: "Kann ich meine Daten jederzeit exportieren oder löschen?",
    answer: "Ja. Sie können Ihre Daten selbst exportieren oder auf Wunsch DSGVO-konform löschen lassen – mit Support durch unser Team."
  },
  {
    question: "Bieten Sie auch persönliche Beratung oder Projektunterstützung an?",
    answer: "Ja, unser Consulting-Team begleitet Sie bei Cloud-Projekten von der Planung bis zum Betrieb."
  }
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="contact-section">
      <h1>Kontaktiere uns</h1>
      <p>Wir helfen dir gerne weiter – ob Support, Beratung oder allgemeine Fragen.</p>
      <p>
        Gerne heißen wir Sie auch persönlich willkommen –
        besuchen Sie uns an einem unserer{" "}
        <Link to="/impressum" className="inline-link">Standorte</Link>.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Max Mustermann" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" placeholder="deine@email.de" required />
        </div>

        <div className="form-group">
          <label htmlFor="department">Abteilung</label>
          <select id="department" required>
            <option value="">Bitte wählen...</option>
            <option value="support">Support</option>
            <option value="consulting">Consulting</option>
            <option value="pricing">Preise & Angebote</option>
            <option value="general">Generelle Anfrage</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea id="message" rows={5} placeholder="Wie können wir dir helfen?" required></textarea>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input type="checkbox" required />
            &nbsp; Ich bin damit einverstanden, dass meine E-Mail-Adresse zur Kontaktaufnahme verwendet wird.
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input type="checkbox" />
            &nbsp; Ja, ich möchte den CloudNova-Newsletter mit Angeboten und Updates erhalten.
          </label>
        </div>

        <button type="submit" className="cta-button">Absenden</button>
      </form>
      &nbsp;
      &nbsp;
      <hr className="contact-divider" />
      <section className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Contact;