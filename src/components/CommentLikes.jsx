import React, { useState } from "react";

function CommentLikes() {
  const [likedComments, setLikedComments] = useState(0);
  const [dislikedComments, setDislikedComments] = useState(0);

  function handleLike() {
    console.log("like");
    setLikedComments((like) => like + 1);
  }

  function handleDislike() {
    console.log("dislike");
    setDislikedComments((dislike) => dislike + 1);
  }

  return (
    <div>
      <button onClick={handleLike}>👍{likedComments}</button>
      <button onClick={handleDislike}>👎{dislikedComments}</button>
    </div>
  );
}

export default CommentLikes;
