// import React, { useState } from "react";

// function CommentsDisplayed({ comments, areCommentsVisible }) {
//   const [likedComments, setLikedComments] = useState(0);
//   const [dislikedComments, setDislikedComments] = useState(0);

//   function handleLike() {
//     console.log("like");
//     setLikedComments((like) => like + 1);
//   }

//   function handleDislike() {
//     console.log("dislike");
//     setDislikedComments((dislike) => dislike + 1);
//   }

//   const displayedComments = comments.map((comment) => {
//     return (
//       <>
//         <h3>{comment.user}</h3>
//         <p>{comment.comment}</p>
//         <button onClick={handleLike}>👍{likedComments}</button>
//         <button onClick={handleDislike}>👎{dislikedComments}</button>
//       </>
//     );
//   });
//   return <div>{areCommentsVisible ? displayedComments : ""}</div>;
// }

// export default CommentsDisplayed;
// //`👍${upVotes}` : `👎${downVotes}`
import React, { useState } from "react";
import CommentLikes from "./CommentLikes";

function CommentsDisplayed({
  comments,
  areCommentsVisible,
  user,
  comment,
  deleteHandler,
  id,
}) {
  return (
    <>
      <h3>{user}</h3>
      <p>{comment}</p>
      <CommentLikes />
      <button onClick={() => deleteHandler(id)}>delete comment</button>
    </>
  );
}

export default CommentsDisplayed;
//`👍${upVotes}` : `👎${downVotes}`
