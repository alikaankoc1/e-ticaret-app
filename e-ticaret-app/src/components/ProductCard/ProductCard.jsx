import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(""); // Beden seçimi için state

  const handleAddToCart = () => {
    // Eğer beden seçilmediyse kullanıcıyı uyar
    if (!selectedSize) {
      alert("Lütfen bir beden seçiniz.");
      return;
    }
    // Seçilen bedeni de sepete ekleme fonksiyonuna gönder
    addToCart({ ...product, selectedSize });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)} TL</p>

      {/* Beden seçimi için açılır menü */}
      <div className="size-selector">
        <label htmlFor={`size-${product.id}`}>Beden: </label>
        <select
          id={`size-${product.id}`}
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="" disabled>
            Beden Seç
          </option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleAddToCart}>Sepete Ekle</button>
    </div>
  );
}

export default ProductCard;
