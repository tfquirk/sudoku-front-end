import React, { useState } from "react";

const Column = props => {
  const tdStyle = {
    padding: "0.5vw",
    textAlign: "center"
  };

  const inputStyle = {
    color: "#000000",
    padding: "0.5vh",
    border: "0",
    textAlign: "center",
    width: "48px",
    height: "48px",
    fontSize: "2em",
    backgroundColor: "#ffffff",
    outline: "none"
  };

  const correct_answer = props.solution;
  const [userAnswer, setUserAnswer] = useState("");

  const updateInput = event => {
    setUserAnswer(event.target.value);
  };

  if (props.number === "0") {
    if (userAnswer === correct_answer) {
      return (
        <td style={tdStyle} className={`${props.row} ${props.column} green`}>
          <input style={inputStyle} onChange={updateInput} />
        </td>
      );
    }

    return (
      <td style={tdStyle} className={`${props.row} ${props.column}`}>
        <input style={inputStyle} onChange={updateInput} />
      </td>
    );
  } else {
    return (
      <td style={tdStyle} className={`${props.row} ${props.column} green`}>
        {props.number}
      </td>
    );
  }
};

export default Column;
