import React from "react";
import { Link } from "react-router-dom"; // Anasayfaya yönlendirmek için Link kullanacağız
import "./Login.css"; // Stil dosyamızı import ediyoruz

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">FUTBOL TUTKUNLARININ SAYFASI</h1>
        <p className="login-slogan">
          Aradığınız güncel ve özlenen tüm formalar burada!
        </p>
        <Link to="/anasayfa" className="login-button">
          Formaları Gör
        </Link>
      </div>
    </div>
  );
}

export default Login;
