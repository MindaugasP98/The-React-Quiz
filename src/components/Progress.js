import React from "react";

const Progress = ({ index, numQuestions, points, answer }) => {
  return (
    <header className="progress">
      <progress
        max={numQuestions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions.length}
      </p>
      <p>
        <strong>{points}</strong> /{" "}
        {numQuestions.reduce((acc, curr) => {
          return acc + curr.points;
        }, 0)}
      </p>
    </header>
  );
};

export default Progress;
