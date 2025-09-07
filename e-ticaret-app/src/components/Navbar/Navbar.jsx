import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
      <ul className="navbar-links">
        <li>
          <Link to="/anasayfa">Anasayfa</Link>
        </li>
        <li className="dropdown-container">
          <a onClick={handleMenuToggle}>Ürünler</a>
          {isMenuOpen && (
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
          <Link to="/sepet">Sepet</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
