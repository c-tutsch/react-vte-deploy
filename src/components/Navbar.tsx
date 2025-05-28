import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          CloudNova
        </NavLink>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Start</NavLink>
          <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Dienste</NavLink>
          <NavLink to="/pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Preise</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Über uns</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;