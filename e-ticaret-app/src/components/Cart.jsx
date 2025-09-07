import React from "react";

function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>Sepet</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} adet - {item.price.toFixed(2)} TL
                <button onClick={() => removeFromCart(item.id)}>Sil</button>
              </li>
            ))}
          </ul>
          <h3>Toplam: {total} TL</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
