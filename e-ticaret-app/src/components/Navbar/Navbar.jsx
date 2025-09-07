import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">E-ticaret App</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Anasayfa</a>
        </li>
        <li>
          <a href="#">Ürünler</a>
        </li>
        <li>
          <a href="#">Sepet</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
