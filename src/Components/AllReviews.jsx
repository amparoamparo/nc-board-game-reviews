import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";

export function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const reqURL = "https://board-game-reviews-brfi.onrender.com/api/reviews";

  useEffect(() => {
    getAllReviews().then(() => {
      setIsLoading(false);
    });
  }, []);

  const getAllReviews = async () => {
    const response = await fetch(`${reqURL}`);
    const { reviews } = await response.json();
    setReviews(reviews);
  };

  return (
    <section>
      <h2>All reviews</h2>
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : (
        <div className="reviews-wrapper">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </div>
      )}
    </section>
  );
}
