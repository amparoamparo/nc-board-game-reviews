import { ReviewCard } from "./ReviewCard";

export function LatestReviews({ reviews }) {
  return (
    <section>
      <h2>Latest reviews</h2>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
}
