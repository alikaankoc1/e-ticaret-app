import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [isAdded, setIsAdded] = useState(false); // Yeni state ekledik

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Lütfen bir beden seçiniz.");
      return;
    }

    addToCart({ ...product, selectedSize });
    setIsAdded(true); // Ürün sepete eklenince state'i true yap

    // 2 saniye sonra butonu eski haline çevir
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
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

      {/* Koşullu butonu gösteriyoruz */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded} // Butonun tekrar tıklanmasını engeller
        className={isAdded ? "added-to-cart-button" : "add-to-cart-button"}
      >
        {isAdded ? "Sepete Eklendi" : "Sepete Ekle"}
      </button>
    </div>
  );
}

export default ProductCard;
