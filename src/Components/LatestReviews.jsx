import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import reqURLs from "../api";

export function LatestReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestReviews().then(() => {
      setIsLoading(false);
    });
  }, []);

  const getLatestReviews = async () => {
    const response = await fetch(`${reqURLs.APIReviews}`);
    const { reviews } = await response.json();
    const latestReviews = reviews.slice(0, 9);
    setReviews(latestReviews);
  };

  return (
    <section className="space-y-8">
      <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
        Latest reviews
      </h2>
      {isLoading ? (
        <p className="text-xl font-medium text-gray-600">Loading reviews...</p>
      ) : (
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-12">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </div>
      )}
    </section>
  );
}
