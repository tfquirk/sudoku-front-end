import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import dispatch action type
import { COMPLETED_TILE } from "../Types/types";

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

  const inputStyleGreen = {
    color: "#000000",
    padding: "0.5vh",
    border: "0",
    textAlign: "center",
    width: "48px",
    height: "48px",
    fontSize: "2em",
    backgroundColor: "#b2ffb2",
    outline: "none"
  };

  const correct_answer = props.solution;
  const [userAnswer, setUserAnswer] = useState("");

  const updateInput = event => {
    setUserAnswer(event.target.value);
  };

  console.log(props.completedTiles);

  if (props.number === "0") {
    if (userAnswer === correct_answer) {
      props.completedTileIncrease();
      return (
        <td style={tdStyle} className={`${props.row} ${props.column} green`}>
          <input style={inputStyleGreen} onChange={updateInput} />
        </td>
      );
    }

    return (
      <td style={tdStyle} className={`${props.row} ${props.column}`}>
        <input style={inputStyle} onChange={updateInput} />
      </td>
    );
  } else {
    props.completedTileIncrease();
    return (
      <td style={tdStyle} className={`${props.row} ${props.column} green`}>
        {props.number}
      </td>
    );
  }
};

function mapStateToProps(state) {
  return {
    completedTiles: state.completedTiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    completedTileIncrease: () => dispatch({ type: COMPLETED_TILE })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
