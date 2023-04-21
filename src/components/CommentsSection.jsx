import { PostComment } from "./PostComment";
import { useEffect, useState, useContext } from "react";
import reqURLs from "../api";
import CommentCard from "./CommentCard";
import AuthContext from "../auth/auth";

export default function Comments({ review }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `${reqURLs.APISingleReview}${review.review_id}/comments`
      );
      const { comments } = await response.json();
      setComments(comments);
    };

    getComments().then(() => {
      setIsLoading(false);
    });
  }, [review.review_id]);

  return (
    <section className="grid place-content-center" id="comments-section">
      <section>
        <h3 className="text-2xl font-bold">Comments</h3>
        {isLoading ? (
          <p className="text-xl font-medium text-gray-600 py-12">
            Loading comments...
          </p>
        ) : comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentCard
              key={index}
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
      {user ? (
        <PostComment
          user={user}
          reviewId={review.review_id}
          setComments={setComments}
        />
      ) : null}
    </section>
  );
}
