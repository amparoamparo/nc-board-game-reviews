import { useState } from "react";
import reqURLs from "../api";

export function PostComment({ user, reviewId, setComments }) {
  const [newComment, setNewComment] = useState("");

  const handlePostComment = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${reqURLs.APISingleReview}${reviewId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          body: newComment,
        }),
      }
    );
    const { postedComment } = await response.json();

    setComments((comments) => [...comments, postedComment]);
    setNewComment("");
  };

  return (
    <section className="grid col-span-full w-full py-12">
      <form onSubmit={handlePostComment} className="flex flex-col gap-4">
        <label htmlFor="new-comment">
          <h4 className="text-xl font-bold">Post a comment</h4>
        </label>
        <textarea
          name="new-comment"
          id="new-comment"
          rows={4}
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          className="mt-4 p-4 text-lg border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-all"
          required
        ></textarea>
        <button
          type="submit"
          className="text-md font-bold px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all active:translate-y-1
           active:bg-gray-300"
        >
          Post comment
        </button>
      </form>
    </section>
  );
}
