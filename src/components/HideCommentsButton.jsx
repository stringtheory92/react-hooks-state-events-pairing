import React from "react";

function HideCommentsButton({
  areCommentsVisible,
  setAreCommentsVisible,
  onHidingComments,
}) {
  return (
    <button onClick={onHidingComments}>
      {areCommentsVisible ? "Hide Comments" : "Show Comments"}
    </button>
  );
}

export default HideCommentsButton;
