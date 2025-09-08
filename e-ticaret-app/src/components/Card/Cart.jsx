import React from "react";
import "./Cart.css";
// Yeni oluşturduğumuz stil dosyasını buraya dahil edelim
import "./CartPage.css";

function Cart({
  cart,
  removeFromCart,
  total,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="cart">
      <h2>Sepet</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">
                      {item.price.toFixed(2)} TL
                    </span>
                    {/* Beden bilgisini buraya ekledik */}
                    <span className="item-size">
                      Beden: {item.selectedSize}
                    </span>
                  </div>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Sil
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Toplam: {total} TL</h3>
            <button className="checkout-button">Ödeme Yap</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
