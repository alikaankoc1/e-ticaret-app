// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // react-icons kütüphanesini kullanmak için önce yüklemeniz gerekir: npm install react-icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Hakkımızda</h3>
          <p>
            En son moda trendlerini yakalamak için en kaliteli ürünleri
            sunuyoruz. Tarzınıza uygun mükemmel parçaları bulmak için bizi takip
            edin.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Ürünler</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
            <li>
              <a href="#">Sıkça Sorulan Sorular</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Bizi Takip Edin</h3>
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} E-Ticaret Uygulaması. Tüm Hakları
        Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
