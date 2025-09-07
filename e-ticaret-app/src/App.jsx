import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Card/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import productsData from "./data/products.js";
import "./App.css";

// Yeni component: TeamPage
// Bu component URL'deki parametreyi alacak ve ürünleri filtreleyecek
const TeamPage = ({
  products,
  addToCart,
  cart,
  removeFromCart,
  calculateTotal,
}) => {
  const { teamName } = useParams();
  const filteredProducts = products.filter(
    (p) => p.team.toLowerCase() === teamName
  );

  return (
    <>
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
      />
    </>
  );
};

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductList products={products} addToCart={addToCart} />
                  <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    total={calculateTotal()}
                  />
                </>
              }
            />
            {/* Dinamik rota ile takıma göre filtreleme */}
            <Route
              path="/:teamName"
              element={
                <TeamPage
                  products={products}
                  addToCart={addToCart}
                  cart={cart}
                  removeFromCart={removeFromCart}
                  calculateTotal={calculateTotal}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
