import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import reqURLs from "../../api";

// components
import { ReviewCard } from "../../components/ReviewCard";

export default function AllReviews() {
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
    setReviews(reviews);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>All reviews - Board Game Reviews</title>
        </Helmet>
        <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
          All reviews
        </h2>
        {isLoading ? (
          <p className="text-xl font-medium text-gray-600">
            Loading reviews...
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-12">
            {reviews.map((review) => (
              <ReviewCard key={review.review_id} review={review} />
            ))}
          </div>
        )}
      </HelmetProvider>
    </>
  );
}
