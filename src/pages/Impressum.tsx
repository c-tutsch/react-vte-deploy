// src/pages/Impressum.tsx
import "./Impressum.css";
import bremenImg from "../assets/bremen.jpg";
import erlangenImg from "../assets/Erlangen.jpg";
import frankfurtImg from "../assets/frankfurt.jpg";

const Impressum = () => {
  return (
    <div className="impressum-page">
      <h1>Impressum</h1>
      <div className="impressum-content">
        <p><strong>CloudNova GmbH</strong></p>
        <p>Musterstraße 12</p>
        <p>12345 Musterstadt</p>
        <p>Deutschland</p>

        <p><strong>Telefon:</strong> +49 (0)123 456789</p>
        <p><strong>E-Mail:</strong> info@cloudnova.de</p>

        <p><strong>Geschäftsführer:</strong> Max Mustermann</p>
        <p><strong>Handelsregister:</strong> Amtsgericht Musterstadt, HRB 123456</p>
        <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>

        <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Max Mustermann</p>
      </div>

      <div className="impressum-locations">
        <h2>Unsere Standorte</h2>

        <div className="location-row">
          <img src={bremenImg} alt="Büro Bremen" className="location-image" />
          <div className="location-info">
            <h3>Standort Bremen</h3>
            <p>Weserstraße 25<br />28205 Bremen<br />Deutschland</p>
          </div>
        </div>

        <div className="location-row reverse">
          <div className="location-info">
            <h3>Standort Erlangen</h3>
            <p>Henkestraße 10<br />91052 Erlangen<br />Deutschland</p>
          </div>
          <img src={erlangenImg} alt="Büro Erlangen" className="location-image" />
        </div>

        <div className="location-row">
          <img src={frankfurtImg} alt="Büro Frankfurt" className="location-image" />
          <div className="location-info">
            <h3>Standort Frankfurt</h3>
            <p>Mainzer Landstraße 50<br />60329 Frankfurt am Main<br />Deutschland</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
