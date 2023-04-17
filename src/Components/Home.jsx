import { useEffect } from "react";
import { LatestReviews } from "./LatestReviews";

export function Home({ reviews, setReviews }) {
  const reqURL = "https://board-game-reviews-brfi.onrender.com/api/reviews";

  useEffect(() => {
    getLatestReviews();
  }, []);

  const getLatestReviews = async () => {
    const response = await fetch(`${reqURL}`);
    const { reviews } = await response.json();
    const latestReviews = reviews.slice(0, 9);
    setReviews(latestReviews);
    console.log(latestReviews);
  };

  return (
    <main>
      <LatestReviews reviews={reviews} setReviews={setReviews} />
    </main>
  );
}
