import React from "react";

function VoteButton({
  upVotes,
  setUpVotes,
  downVotes,
  setDownVotes,
  value,
  onUpVoting,
  onDownVoting,
}) {
  return (
    <button onClick={value === "up" ? onUpVoting : onDownVoting}>
      {value === "up" ? `👍${upVotes}` : `👎${downVotes}`}
    </button>
  );
}

export default VoteButton;
