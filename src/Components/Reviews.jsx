import { ReviewCard } from "./ReviewCard";

export function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </>
  );
}
