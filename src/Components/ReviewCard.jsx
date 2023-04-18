import React from "react";
export function ReviewCard({ review }) {
  const categoryLabel = review.category.split("-").join(" ");

  return (
    <article>
      <img
        src={review.review_img_url}
        alt={review.title}
        width={400}
        height="100%"
      />
      <h3>{review.title}</h3>
      <p>
        <span>{review.owner}</span>
      </p>
      <p>
        <span>{categoryLabel}</span>
      </p>
      <a href={`/reviews/${review.review_id}`}>Read review</a>
    </article>
  );
}
