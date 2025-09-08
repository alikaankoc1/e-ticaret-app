import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Bu satır doğru, kendi stil dosyasını import ediyor.

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const teams = [
    "Konyaspor",
    "Beşiktaş",
    "Fenerbahçe",
    "Galatasaray",
    "Trabzonspor",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-ticaret App</Link>
      </div>
      {/* Mobil menü ikonu */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? "✖" : "☰"} {/* Çarpı veya üç çizgi ikonu */}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/anasayfa">Anasayfa</Link>
        </li>
        <li className="dropdown-container">
          <a onClick={handleMenuToggle}>Ürünler</a>
          {isMenuOpen && ( // Mobil menü açıkken dropdown'ı göster
            <ul className="dropdown-menu">
              {teams.map((team, index) => (
                <li key={index}>
                  <Link to={`/${team.toLowerCase()}`}>{team}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/sale">Yeni Gelenler</Link>
        </li>
        <li>
          <Link to="/sepet">Sepet</Link> {/* Sepet linki */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
