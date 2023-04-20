import { useEffect, useState } from "react";
import reqURLs from "../api";
import CommentCard from "./CommentCard";
export default function Comments({ review }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `${reqURLs.APISingleReview}${review.review_id}/comments`
      );
      const { comments } = await response.json();
      setComments(comments);
    };
    getComments();
  }, [review.review_id]);

  return (
    <section className="grid place-content-center justi">
      <section>
        <h3 className="text-2xl font-bold">Comments</h3>
        {comments.map((comment, index) => {
          return (
            <CommentCard
              comment={comment}
              commentCount={review.comment_count}
              commentIndex={index}
              reviewAuthor={review.owner}
            />
          );
        })}
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
