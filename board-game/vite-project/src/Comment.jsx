import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsFrom";

export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "@kj",
      remarks: "Great job",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment");
    console.log(comments);
  };
  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>Rating = {comment.rating}</span>
            &nbsp;
            <p>{comment.username}</p>
            &nbsp;
          </div>
        ))}
      </div>
      <br></br>
      <CommentsForm addNewComment={addNewComment}></CommentsForm>
    </>
  );
}
