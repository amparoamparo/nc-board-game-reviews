import { Helmet, HelmetProvider } from "react-helmet-async";
import { LatestReviews } from "../../components/LatestReviews";

export function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Board Game Reviews - Your community-driven guide to the world of
            board games
          </title>
        </Helmet>
        <main>
          <LatestReviews />
        </main>
      </HelmetProvider>
    </>
  );
}
