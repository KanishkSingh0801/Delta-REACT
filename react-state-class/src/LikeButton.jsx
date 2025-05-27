import React from "react";
import { useState } from "react";
function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let styles = {color : "red"};
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style = {styles}></i>
        )}
      </p>
    </div>
  );
}

export default LikeButton;
