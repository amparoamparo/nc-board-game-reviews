import { useEffect } from "react";
import { Reviews } from "./Reviews";

export function Home({ reviews, setReviews, isLoading, setIsLoading }) {
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

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <section>
        <h2>Latest reviews</h2>
        <Reviews reviews={reviews} setReviews={setReviews} />
      </section>
    </main>
  );
}
