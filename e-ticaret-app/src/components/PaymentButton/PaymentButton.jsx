import React from "react";
import "./PaymentButton.css";

function PaymentButton({ onClick }) {
  return (
    <button onClick={onClick} className="payment-button">
      Ödemeyi Tamamla
    </button>
  );
}

export default PaymentButton;
