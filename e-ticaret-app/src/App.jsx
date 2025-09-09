// src/App.jsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  Outlet, // Outlet bileşenini import ediyoruz
} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Card/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import PaymentPage from "./components/PaymentPage/PaymentPage.jsx";
import PaymentButton from "./components/PaymentButton/PaymentButton.jsx";
import Footer from "./components/Footer/Footer.jsx";
import productsData from "./data/products.js";
import "./App.css";

// Layout bileşeni
const MainLayout = ({ cart }) => {
  return (
    <>
      <Navbar cartItemCount={cart.length} />
      <main>
        {/* İç içe rotaların içeriği burada render edilecek */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// TeamPage bileşeni
const TeamPage = ({
  products,
  addToCart,
  cart,
  removeFromCart,
  calculateTotal,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { teamName } = useParams();
  const filteredProducts = products.filter(
    (p) => p.team && p.team.toLowerCase() === teamName.toLowerCase()
  );

  return (
    <div className="main-content">
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
};

// NewArrivalsPage bileşeni
const NewArrivalsPage = ({
  products,
  addToCart,
  cart,
  removeFromCart,
  calculateTotal,
  incrementQuantity,
  decrementQuantity,
}) => {
  const newArrivalProductIds = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];
  const newArrivalProducts = products.filter((product) =>
    newArrivalProductIds.includes(product.id)
  );

  return (
    <div className="main-content">
      <ProductList products={newArrivalProducts} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
};

// CartPage bileşeni
const CartPage = ({
  cart,
  removeFromCart,
  calculateTotal,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="cart-page-container">
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      {cart.length > 0 && (
        <div className="cart-page-checkout-button-container">
          <Link to="/odeme">
            <PaymentButton />
          </Link>
        </div>
      )}
    </div>
  );
};

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const existingProduct = cart.find(
      (item) =>
        item.id === productToAdd.id &&
        item.selectedSize === productToAdd.selectedSize
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id &&
          item.selectedSize === productToAdd.selectedSize
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

  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Router>
      <Routes>
        {/* Login sayfası kendi başına render edilir (Navbar ve Footer olmadan) */}
        <Route path="/" element={<Login />} />

        {/* Ana sayfalar için Layout bileşenini kullanıyoruz */}
        {/* Bu rota, Navbar ve Footer'ı her sayfada tekrar etmeden gösterir */}
        <Route element={<MainLayout cart={cart} />}>
          <Route
            path="/anasayfa"
            element={<HomePage products={products} addToCart={addToCart} />}
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
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            }
          />
          <Route
            path="/sale"
            element={
              <NewArrivalsPage
                products={products}
                addToCart={addToCart}
                cart={cart}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            }
          />
          <Route
            path="/sepet"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            }
          />
          <Route
            path="/odeme"
            element={<PaymentPage calculateTotal={calculateTotal} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
