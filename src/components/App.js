import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Views from "./Views.jsx";
import VoteButton from "./VoteButton.jsx";
import HideCommentsButton from "./HideCommentsButton.jsx";
import CommentsDisplayed from "./CommentsDisplayed.jsx";
import CommentsSection from "./CommentsSection.jsx";
import CommentsSearch from "./CommentsSearch.jsx";

function App() {
  console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [areCommentsVisible, setAreCommentsVisible] = useState(true);
  const [comments, setComments] = useState(video.comments);

  const handleUpVotes = (e) => {
    console.log("up handler");
    setUpVotes((votes) => votes + 1);
  };

  const handleDownVotes = (e) => {
    console.log("down handler");
    setDownVotes((votes) => votes + 1);
  };

  const handleCommentsVisibility = (e) => {
    console.log("comment button handler");
    setAreCommentsVisible(!areCommentsVisible);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} />
      <MainContent>
        <Views views={video.views} uploaded={video.createdAt} />
        <VoteButton
          upVotes={upVotes}
          setUpVotes={setUpVotes}
          value="up"
          onUpVoting={handleUpVotes}
        />
        <VoteButton
          downVotes={downVotes}
          setDownVotes={setDownVotes}
          value="down"
          onDownVoting={handleDownVotes}
        />
      </MainContent>
      <HideCommentsButton
        areCommentsVisible={areCommentsVisible}
        setAreCommentsVisible={setAreCommentsVisible}
        onHidingComments={handleCommentsVisibility}
      />
      <CommentsSection>
        <CommentsSearch
          areCommentsVisible={areCommentsVisible}
          comments={comments}
          setComments={setComments}
        >
          <CommentsDisplayed
            areCommentsVisible={areCommentsVisible}
            comments={comments}
          />
        </CommentsSearch>
      </CommentsSection>
    </div>
  );
}

export default App;

// video -
//
// Header - MainContent
//           |
//     Views - VoteButtons - HideCommentsButton
//                               |
//                             Comments
