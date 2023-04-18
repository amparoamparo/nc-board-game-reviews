import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";

export function LatestReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const reqURL = "https://board-game-reviews-brfi.onrender.com/api/reviews";

  useEffect(() => {
    getLatestReviews().then(() => {
      setIsLoading(false);
    });
  }, []);

  const getLatestReviews = async () => {
    const response = await fetch(`${reqURL}`);
    const { reviews } = await response.json();
    const latestReviews = reviews.slice(0, 9);
    setReviews(latestReviews);
  };

  return (
    <section>
      <h2>Latest reviews</h2>
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
