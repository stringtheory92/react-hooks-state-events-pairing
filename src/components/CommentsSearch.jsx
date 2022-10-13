import React, { useState } from "react";
import CommentsDisplayed from "./CommentsDisplayed";

function CommentsSearch({
  comments,
  setComments,
  areCommentsVisible,
  children,
}) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  function handleDelete(id) {
    const newCommentsList = comments.filter((comment) => {
      console.log("deleted!", id !== comment.id);
      return id !== comment.id;
    });
    setComments(newCommentsList);
  }

  const searchResults = comments
    .filter((comment) => {
      console.log(
        `filter for ${comment.user}`,
        comment.user.includes(searchValue)
      );
      console.log("truthiness: ", Boolean(searchValue));
      return comment.user.includes(searchValue);
    })
    .map((comment) => {
      console.log("mapping: ", comment);
      return (
        <CommentsDisplayed
          user={comment.user}
          comment={comment.comment}
          id={comment.id}
          deleteHandler={handleDelete}
          key={comment.id}
        />
      );
    });

  console.log("searchResults", searchResults);
  return (
    <>
      <input type="text" name="search" id="search" onChange={handleSearch} />
      {areCommentsVisible ? searchResults : ""}
    </>
  );
}

export default CommentsSearch;
