import React, { useState } from "react";

const Column = props => {
  const tdStyles = {
    padding: "0.5vw",
    textAlign: "center"
  };

  const correct_answer = props.solution;
  const [userAnswer, setUserAnswer] = useState("");

  const updateInput = event => {
    setUserAnswer(event.target.value);
  };

  if (props.number === "0") {
    if (userAnswer === correct_answer) {
      return (
        <td className={`${props.row} ${props.column} green`}>
          <input onChange={updateInput} />
        </td>
      );
    }

    return (
      <td className={`${props.row} ${props.column}`}>
        <input onChange={updateInput} />
      </td>
    );
  } else {
    return (
      <td className={`${props.row} ${props.column} green`}>{props.number}</td>
    );
  }
};

export default Column;
