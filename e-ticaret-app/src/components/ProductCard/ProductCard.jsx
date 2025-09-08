import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [notification, setNotification] = useState(""); // Bildirim state'ini ekledik

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Lütfen bir beden seçiniz.");
      return;
    }

    addToCart({ ...product, selectedSize });
    setNotification("Sepete eklendi!"); // Bildirimi ayarla
    setTimeout(() => {
      setNotification(""); // 3 saniye sonra bildirimi gizle
    }, 3000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)} TL</p>

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
      {/* Bildirim mesajı */}
      {notification && (
        <div className="add-to-cart-notification">{notification}</div>
      )}
    </div>
  );
}

export default ProductCard;
