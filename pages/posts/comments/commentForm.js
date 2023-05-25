export function CommentForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-4">
      <textarea
        rows={5}
        type="text"
        className="w-full rounded-md border border-gray-400 p-2 outline-slate-600 active:p-2 dark:bg-inherit dark:outline-slate-400"
        name="comment"
        id="comment"
        placeholder="Write your comment here"
        required
      ></textarea>
      <input
        id="comment"
        className="w-fit cursor-pointer rounded border border-slate-600 px-4 py-2 uppercase text-slate-800 duration-200 hover:border-slate-600 hover:bg-slate-600 hover:text-white dark:border-white dark:text-white dark:hover:border-slate-800 dark:hover:bg-white dark:hover:text-slate-800"
        type="submit"
        value="post"
      />
    </form>
  );
}
