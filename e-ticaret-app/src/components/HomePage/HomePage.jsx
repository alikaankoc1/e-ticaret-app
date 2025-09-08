import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../ProductList/ProductList.jsx";
import "./HomePage.css";

function HomePage({ products, addToCart }) {
  // Anasayfada gösterilecek öne çıkan ürünlerin id'leri
  const featuredProductIds = [1, 19, 16, 26, 33, 39, 27, 37, 8, 15, 50, 57];
  const featuredProducts = products.filter((product) =>
    featuredProductIds.includes(product.id)
  );

  // Yeni gelen ürünlerin id'leri - Eksik ID'ler eklendi
  const newArrivalProductIds = [59, 60, 61, 62, 66, 67];
  const newArrivalProducts = products.filter((product) =>
    newArrivalProductIds.includes(product.id)
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
          <Link to="/trabzonspor" className="category-card">
            <h3>Trabzonspor Formaları</h3>
          </Link>
          <Link to="/sale" className="category-card">
            <h3>Yeni Gelenler</h3>
          </Link>
        </div>
      </div>

      {/* Çok Satanlar */}
      <div className="bestsellers-section">
        <h2>Çok Satanlar</h2>
        <ProductList products={featuredProducts} addToCart={addToCart} />
      </div>

      {/* Yeni Gelenler */}
      <div className="new-arrivals-section">
        <h2>Yeni Gelenler</h2>
        <ProductList products={newArrivalProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default HomePage;
