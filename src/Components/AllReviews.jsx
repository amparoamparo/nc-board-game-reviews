import { useEffect } from "react";
import { ReviewCard } from "./ReviewCard";

export function AllReviews({ reviews, setReviews }) {
  const reqURL = "https://board-game-reviews-brfi.onrender.com/api/reviews";

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews = async () => {
    const response = await fetch(`${reqURL}`);
    const { reviews } = await response.json();
    setReviews(reviews);
  };

  return (
    <main>
      <section>
        <h2>All reviews</h2>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </section>
    </main>
  );
}
