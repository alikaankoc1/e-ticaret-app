import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";
function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
