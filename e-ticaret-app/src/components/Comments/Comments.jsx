import React from "react";
import "./Comments.css";

const Comments = () => {
  const customerReviews = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      comment: "Ürünler harika, çok hızlı kargo. Tavsiye ederim!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mehmet Kara",
      comment:
        "Forum kısmı çok faydalı. Sorularıma yanıt bulabildim. Teşekkürler.",
      rating: 4,
    },
    {
      id: 3,
      name: "Zeynep Çelik",
      comment:
        "E-ticaret sitemizin güvenilir bir platformu. Kaliteden ödün vermiyorlar.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mustafa Yüce",
      comment: "Kaliteli ürün ve hızlı kargo teşekkürler.",
      rating: 4,
    },
    {
      id: 5,
      name: "Musa Arslan",
      comment: "Fenerbahçe yeni sezon çubuklu forma harika.",
      rating: 4,
    },
  ];

  return (
    <div className="comments-container">
      <h2>Müşteri Yorumları</h2>
      <div className="comment-list">
        {customerReviews.map((review) => (
          <div key={review.id} className="comment-card">
            <div className="comment-header">
              <h4>{review.name}</h4>
              <div className="rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
            <p className="comment-text">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
