import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import productsData from "./products.js";
import "./styles.css";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

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

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basit E-ticaret Uygulaması</h1>
      </header>
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
