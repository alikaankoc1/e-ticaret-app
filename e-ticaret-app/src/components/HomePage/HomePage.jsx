import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../ProductList/ProductList.jsx";
import "./HomePage.css";

function HomePage({ products, addToCart }) {
  // Anasayfada gösterilecek öne çıkan ürünlerin id'leri
  const featuredProductIds = [7, 11, 15, 21, 28, 30, 42, 49, 57, 51, 41];
  const featuredProducts = products.filter((product) =>
    featuredProductIds.includes(product.id)
  );

  return (
    <div className="homepage-container">
      {/* Hero Alanı */}
      <div className="hero-section">
        <h1>Yeni Sezon Formaları Keşfet</h1>
        <p>En güncel ve en popüler formalar tek tıkla kapınızda!</p>
        <Link to="/anasayfa" className="hero-button">
          Alışverişe Başla
        </Link>
      </div>

      {/* Kategoriler */}
      <div className="category-section">
        <h2>Tüm Kategorilerimiz</h2>
        <div className="category-cards">
          <Link to="/konyaspor" className="category-card">
            <h3>Konyaspor Formaları</h3>
          </Link>
          <Link to="/galatasaray" className="category-card">
            <h3>Galatasaray Formaları</h3>
          </Link>
          <Link to="/beşiktaş" className="category-card">
            <h3>Beşiktaş Formaları</h3>
          </Link>
          <Link to="/fenerbahçe" className="category-card">
            <h3>Fenerbahçe Formaları</h3>
          </Link>

          {/* Diğer takımlar için de Link bileşenleri ekleyebilirsin */}
        </div>
      </div>

      {/* Çok Satanlar */}
      <div className="bestsellers-section">
        <h2>Çok Satanlar</h2>
        <ProductList products={featuredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default HomePage;
