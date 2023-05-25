import { useState } from "react";
import { CommentForm } from "./commentForm";
import { CommentList } from "./commentList";

export function Comments() {
  const [comments, setComments] = useState([Array(1).fill(null)]);
  console.log(comments);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const data = {
      comment: document.getElementById("comment").value,
      posted: `${
        currentDate.getFullYear() +
        "-" +
        currentDate.getMonth() +
        "-" +
        currentDate.getDay() +
        " @ " +
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds()
      }`,
    };
    document.getElementById("comment").innerText = "";

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch("/api/form", options);
    const result = await response.json();

    setComments(comments[0][0] === null ? [result] : [...comments, result]);

    return true;
  };

  return (
    <div className="mt-8 w-full">
      <CommentList comments={comments} />
      <div className="my-4 border-t border-t-slate-500 dark:border-t-white"></div>
      <CommentForm handleSubmit={handleSubmit} />
    </div>
  );
}
