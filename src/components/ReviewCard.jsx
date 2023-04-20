import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reqURLs from "../api";

export function ReviewCard({ review }) {
  const [user, setUser] = useState("");
  const categoryLabel = review.category.split("-").join(" ");
  const date = new Date(review.created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // const reviewSlug = review.title
  //   .replace(/[^a-zA-Z0-9 ]/g, "")
  //   .split(" ")
  //   .join("-")
  //   .toLowerCase();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${reqURLs.APIUsers}`);
      const { users } = await response.json();
      const author = users.filter((user) => user.username === review.owner);
      setUser(author[0]);
    };
    getUser();
  }, [review.owner]);

  return (
    <>
      <article>
        <Link
          to={`/reviews/${review.review_id}`}
          className="border rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-2xl hover:-translate-y-4 transition-all min-h-full"
        >
          <div className="h-64">
            <img
              src={review.review_img_url}
              alt={""}
              width={400}
              height="100%"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="flex flex-col flex-grow gap-4 my-4 px-4">
            <div className="flex justify-between">
              <p
                className="text-sm font-semibold uppercase tracking-wider text-gray-500"
                aria-hidden="true"
              >
                {categoryLabel}
              </p>
            </div>
            <h3 className="text-lg font-extrabold">
              <span className="sr-only">Review title</span>
              {review.title}
            </h3>
            <span className="sr-only">Review category {categoryLabel}</span>

            <div className="flex items-center gap-2">
              <img
                src={user.avatar_url}
                alt=""
                width="48"
                height="48"
                className="rounded-full aspect-square object-contain border-gray-300 border"
              />

              <div className="flex flex-col">
                <p className="text-lg font-semibold">
                  <span className="sr-only">Posted by</span>
                  {user.name}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {formattedDate}
                </p>
              </div>
            </div>

            <div className="mt-auto text-lg text-black font-bold flex justify-between">
              <p>Read review</p>
              <span
                className="material-symbols-sharp rotate-90"
                aria-hidden="true"
              >
                straight
              </span>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
