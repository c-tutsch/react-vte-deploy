import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">CloudNova © 2025</div>
        <nav className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;