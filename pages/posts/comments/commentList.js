export function CommentList({ comments }) {
  return (
    // TODO - add foldable comment list
    <div className="flex flex-col">
      <h4 className="text-md font-bold">Comments</h4>
      {comments[0][0] === null ? (
        <div className="py-4 text-center text-gray-500">
          No comments. Be the first to write a comment.
        </div>
      ) : (
        comments.map((comment, index) => (
          <div
            className={`my-2 w-[90%] rounded-3xl px-4 py-2 ${
              index % 9 !== 0
                ? "self-end rounded-br-none bg-slate-300 dark:bg-slate-700"
                : "self-start rounded-bl-none bg-slate-100 dark:bg-slate-600"
            }`}
            key={index}
          >
            <p className="font-bold">username</p>
            <p>{comment.comment}</p>
            <span className="text-sm text-gray-400">
              <span>{comment.posted}</span>
            </span>
          </div>
        ))
      )}
    </div>
  );
}
