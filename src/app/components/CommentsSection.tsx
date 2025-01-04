"use client";

import { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here"
      />
      <br />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default CommentsSection;
