import React from "react";
import "./ProductCard.css";
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)} TL</p>
      <button onClick={() => addToCart(product)}>Sepete Ekle</button>
    </div>
  );
}

export default ProductCard;
