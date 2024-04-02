import React from "react";

const StartScreen = ({ questions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Page</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "gameActivated" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
