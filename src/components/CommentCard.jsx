import { useState, useEffect } from "react";
import reqURLs from "../api";

const CommentCard = ({ comment, commentCount, commentIndex, reviewAuthor }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${reqURLs.APIUsers}`);
      const { users } = await response.json();
      const author = users.filter((user) => user.username === comment.author);
      setUser(author[0]);
    };

    if (comment && comment.author) {
      getUser();
    }
  }, [comment]);

  const date = new Date(comment.created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article>
        <div className="flex items-center gap-4 w-full py-12">
          <img
            src={user.avatar_url}
            alt=""
            width="48"
            height="48"
            className="rounded-full aspect-square object-contain border-gray-300 border self-start"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 align-middle">
              <p className="text-md font-bold tracking-wider text-black">
                {user.name}
              </p>
              {comment.author === reviewAuthor ? (
                <p className="uppercase text-xs bg-gray-100 font-bold text-gray-600 rounded px-2 py-1">
                  author
                </p>
              ) : null}
              <p>∙</p>
              <p className="text-md text-gray-500">{formattedDate}</p>
            </div>
            <div className="max-w-xl">
              <p className="text-base text-gray-700">{comment.body}</p>
            </div>
            <div className=" w-fit mt-2 rounded-md cursor-default">
              <p className="text-sm font-semibold">
                <span aria-hidden="true">👍 </span>
                <span className="sr-only">Upvoted </span>
                {comment.votes} <span className="sr-only">times</span>
              </p>
            </div>
          </div>
        </div>
      </article>
      {commentCount - 1 !== commentIndex ? <hr /> : <div></div>}
    </>
  );
};

export default CommentCard;
