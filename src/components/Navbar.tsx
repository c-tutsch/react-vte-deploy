import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">CloudNova</div>
        <nav className="navbar-links">
          <NavLink to="/" end className="nav-link">Start</NavLink>
          <NavLink to="/services" className="nav-link">Dienste</NavLink>
          <NavLink to="/pricing" className="nav-link">Preise</NavLink>
          <NavLink to="/about" className="nav-link">Über uns</NavLink>
          <NavLink to="/contact" className="nav-link">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;