import React, { useState } from "react";
import "./PaymentPage.css";

function PaymentPage({ calculateTotal }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ödeme işlemini simüle ediyoruz
    if (cardName && cardNumber && expiryDate && cvv) {
      setModalMessage("Ödemeniz başarıyla tamamlandı!");
      setModalType("success");
      setShowModal(true);
      // Gerçek bir uygulamada burada ödeme API çağrısı yapılır
    } else {
      setModalMessage("Lütfen tüm alanları doldurunuz.");
      setModalType("error");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="payment-page-container">
      <div className="payment-card">
        <h2>Ödeme Bilgileri</h2>
        <div className="payment-total">
          <span>Toplam Tutar:</span>
          <span>{calculateTotal()} TL</span>
        </div>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="card-name">Kart Üzerindeki İsim</label>
            <input
              type="text"
              id="card-name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Kart Numarası</label>
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // sadece rakam
                setCardNumber(value);
              }}
              maxLength="16"
              minLength="16"
              required
              pattern="\d{16}"
              placeholder="•••• •••• •••• ••••"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry-date">Son Kullanma Tarihi</label>
              <input
                type="text"
                id="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="3"
                required
              />
            </div>
          </div>
          <button type="submit" className="pay-button">
            Ödemeyi Tamamla
          </button>
        </form>
      </div>

      {showModal && (
        <div className={`modal-overlay ${modalType}`}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
