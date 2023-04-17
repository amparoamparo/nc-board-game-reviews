import { useEffect } from "react";
import { Reviews } from "./Reviews";

export function AllReviews({ reviews, setReviews, isLoading, setIsLoading }) {
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

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <section>
        <h2>All reviews</h2>
        <Reviews reviews={reviews} setReviews={setReviews} />
      </section>
    </main>
  );
}
