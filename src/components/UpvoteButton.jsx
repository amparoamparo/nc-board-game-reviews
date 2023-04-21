import { useState } from "react";
import reqURLs from "../api";

export function UpvoteReviewButton({ review_id, votes, user, author }) {
  const [updatedVotes, setUpdatedVotes] = useState(votes);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvoteReview = () => {
    const updateVotes = hasUpvoted ? -1 : 1;
    fetch(reqURLs.APISingleReview + review_id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inc_votes: updateVotes,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { votes } = data.updatedReview;
        setUpdatedVotes(votes);
        setHasUpvoted(!hasUpvoted);
      });
  };

  return (
    <>
      {user.username !== author && (
        <button
          className="text-md font-bold px-4 py-2 bg-gray-100 rounded-lg w-fit hover:bg-gray-200 transition-all active:translate-y-1 active:bg-gray-300"
          title="Click to upvote"
          onClick={handleUpvoteReview}
        >
          <span aria-hidden="true">👍 </span>
          <span className="sr-only">Upvoted </span>
          {updatedVotes}
          <span className="sr-only"> times. Click to upvote.</span>
        </button>
      )}
      {user.username === author && (
        <button
          className="text-md font-bold px-4 py-2 bg-gray-100 rounded-lg w-fit cursor-not-allowed"
          title="You cannot upvote your own review"
          disabled
        >
          <span aria-hidden="true">👍 </span>
          <span className="sr-only">Upvoted </span>
          {updatedVotes}
          <span className="sr-only">
            {" "}
            times. You cannot upvote your own review.
          </span>
        </button>
      )}
    </>
  );
}
