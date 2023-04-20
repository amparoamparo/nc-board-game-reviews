export function Comments() {
  return (
    <section>
      <section>
        <h3>Comments</h3>
        <article>
          <p>Date + Time</p>
          <h4>Commenter</h4>
          <p>Comment body</p>
        </article>
      </section>
      {/* only visible when logged in */}
      <section>
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
      </section>
    </section>
  );
}
