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
import Login from "./components/Login/Login.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import productsData from "./data/products.js";
import "./App.css";

// TeamPage component'ı artık hem Navbar'ı hem de Cart'ı kendi içinde barındıracak.
const TeamPage = ({
  products,
  addToCart,
  cart,
  removeFromCart,
  calculateTotal,
}) => {
  const { teamName } = useParams();
  const filteredProducts = products.filter(
    (p) => p.team && p.team.toLowerCase() === teamName.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <div className="main-content">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          total={calculateTotal()}
        />
      </div>
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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/anasayfa"
            element={
              <>
                <Navbar />
                <div className="main-content">
                  <HomePage products={products} addToCart={addToCart} />
                </div>
              </>
            }
          />
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
    </Router>
  );
}

export default App;
