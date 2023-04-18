import React from "react";

export function ReviewCard({ review }) {
  const categoryLabel = review.category.split("-").join(" ");

  return (
    <article className="review-card">
      <img
        src={review.review_img_url}
        alt={review.title}
        width={400}
        height="100%"
      />
      <h3>{review.title}</h3>
      <p>
        <span>{categoryLabel}</span>
      </p>
      <p>
        <span>{review.owner}</span>
      </p>
      <a href={`/reviews/${review.review_id}`}>Read review</a>
    </article>
  );
}
