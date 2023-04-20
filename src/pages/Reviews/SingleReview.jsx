import { useEffect, useState, useLayoutEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import reqURLs from "../../api";
import { NotFound } from "../NotFound/NotFound";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CommentSection from "../../components/CommentSection";

export default function SingleReview() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const { review } = useLoaderData();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${reqURLs.APIUsers}`);
      const { users } = await response.json();
      const author = users.filter((user) => user.username === review.owner);
      setUser(author[0]);
      setIsUserLoading(false);
    };

    if (!review) {
      navigate("/not-found", { state: { from: "single-review" } });
      return;
    }

    if (review && review.owner) {
      getUser();
    }

    setIsLoading(false);
  }, [navigate, review]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryLabel = review.category.split("-").join(" ");
  const date = new Date(review.created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!review) {
    return <NotFound />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Board Game Reviews - ${review.title}`}</title>
        </Helmet>
        <section className="grid place-content-center">
          {isLoading ? (
            <p className="text-xl font-medium text-gray-600 pt-12 pb-4">
              Loading Review...
            </p>
          ) : (
            <article>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 pb-6">
                {categoryLabel}
              </p>
              <h2 className="text-3xl font-extrabold pb-2">{review.title}</h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 pb-12">
                {formattedDate}
              </p>
              <img src={review.review_img_url} alt={review.title} />

              {isUserLoading ? (
                <p className="text-xl font-medium text-gray-600 pt-12 pb-4">
                  Loading author details...
                </p>
              ) : (
                <div className="flex items-center gap-3 w-full pt-12 pb-4">
                  <img
                    src={user.avatar_url}
                    alt=""
                    width="64"
                    height="64"
                    className="rounded-full aspect-square object-contain border-gray-300 border"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Written by
                    </p>
                    <p className="text-lg font-bold text-black">{user.name}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-5">
                <p className="py-4">
                  <span aria-hidden="true">💬 </span>
                  {review.comment_count}
                  <span className="sr-only">comments</span>
                </p>
                <p className="py-4">
                  <span aria-hidden="true">👍 </span>
                  <span className="sr-only">Upvoted </span>
                  {review.votes} <span className="sr-only">times</span>
                </p>
              </div>
              <div className="max-w-2xl">
                <p className="text-xl text-gray-700 leading-7 pt-4 max-w-24">
                  {review.review_body}
                </p>
              </div>
              <p className="text-xl text-gray-500 pt-10">
                Game designed by {review.designer}
              </p>
            </article>
          )}
        </section>
        <hr className="h-px w-full" />
        <CommentSection review={review} />
      </HelmetProvider>
    </>
  );
}

export const singleReviewLoader = async ({ params }) => {
  const { review_id } = params;

  const response = await fetch(
    `https://board-game-reviews-brfi.onrender.com/api/reviews/${review_id}`
  );

  if (!response.ok) {
    throw Error("No reviews with that ID");
  }

  return response.json();
};
