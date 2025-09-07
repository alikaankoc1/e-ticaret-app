import React, { useState } from "react";

// Component'ları yeni klasörlerinden import et
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Card/Cart.jsx";
// Veri ve stil dosyalarını import et
import productsData from "./data/products.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  // Sepete ürün ekleme fonksiyonu
  const addToCart = (productToAdd) => {
    const existingProduct = cart.find((item) => item.id === productToAdd.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  // Sepetten ürün çıkarma fonksiyonu
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Toplam fiyatı hesapla
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="App">
      <Navbar /> {/* Navbar'ı buraya ekledik */}
      <div className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          total={calculateTotal()}
        />
      </div>
    </div>
  );
}

export default App;
