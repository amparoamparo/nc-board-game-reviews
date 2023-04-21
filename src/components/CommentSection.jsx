import { useEffect, useState } from "react";
import reqURLs from "../api";
import CommentCard from "./CommentCard";
export default function Comments({ review }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `${reqURLs.APISingleReview}${review.review_id}/comments`
      );
      const { comments } = await response.json();
      setComments(comments);
    };

    getComments().then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [review.review_id]);

  return (
    <section className="grid place-content-center justi">
      <section>
        <h3 className="text-2xl font-bold">Comments</h3>
        {isLoading ? (
          <p className="text-xl font-medium text-gray-600 py-12">
            Loading comments...
          </p>
        ) : comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              commentCount={review.comment_count}
              commentIndex={index}
              reviewAuthor={review.owner}
            />
          ))
        ) : (
          <h4 className="text-lg py-12">No comments yet.</h4>
        )}
      </section>
      {/* only visible when logged in */}
      {/* <section>
        <form action="">
          <label htmlFor="new-comment">
            <h4>Post a comment</h4>
          </label>
          <textarea
            name="new-comment"
            id="new-comment"
            cols="60"
            rows="10"
          ></textarea>
          <button type="submit" className="">
            Post comment
          </button>
        </form>
      </section> */}
    </section>
  );
}
