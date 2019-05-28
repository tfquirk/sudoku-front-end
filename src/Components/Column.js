import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import dispatch action type
import { COMPLETED_TILE } from "../Types/types";

const Column = props => {
  // styles for each column in the given row
  const tdStyle = {
    padding: "0.5vw",
    textAlign: "center"
  };

  // specific styling for the input displayed in the column
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

  // style for when user enters correct input
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

  // local variable to check the proper solution for this column
  const correct_answer = props.solution;
  // local variable to hold the users answer
  const [userAnswer, setUserAnswer] = useState("");
  // boolean value to check the status of this tile, has it been completed?
  // A correct answer will change the value of this to true
  const [tileCompleted, setTileCompleted] = useState(false);

  const updateInput = event => {
    // updates the value of users answer upon change in the input field
    setUserAnswer(event.target.value);
  };

  // if the number prop holds a value of zero, then the user is required
  // to enter a solution for this tile.
  if (props.number === "0") {
    // if the user enters a correct value in the column tile return the following
    if (userAnswer === correct_answer) {
      // the first time the user enters the correct value execute the following
      if (tileCompleted === false) {
        // increse the redux state value of the correct tiles by 1
        props.completedTileIncrease();
        // change the boolean value for the local state of this column to true
        // this will prevent the redux state of completedTiles from being
        // incresed each time there is a re-render of this component
        setTileCompleted(true);
      }

      // return the column tile with the correct number and styling for a correct answer
      return (
        <td style={tdStyle} className={`${props.row} ${props.column} green`}>
          <input style={inputStyleGreen} onChange={updateInput} />
        </td>
      );
    }

    // return the tile with the blank or incorrect value for this column tile
    return (
      <td style={tdStyle} className={`${props.row} ${props.column}`}>
        <input style={inputStyle} onChange={updateInput} />
      </td>
    );
  } else {
    // in the case that this column tile aka props.number !== 0

    // change the boolean value of this column tile to show that it has the correct answer
    if (tileCompleted === false) {
      // increse the redux state value of the correct tiles by 1
      props.completedTileIncrease();
      // change the boolean value for the local state of this column to true
      // this will prevent the redux state of completedTiles from being
      // incresed each time there is a re-render of this component
      setTileCompleted(true);
    }

    // return the correct_answer in the column tile with the correct styling
    return (
      <td style={tdStyle} className={`${props.row} ${props.column} green`}>
        {props.number}
      </td>
    );
  }
};

// function mapStateToProps(state) {
//   return {
//     completedTiles: state.completedTiles
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    completedTileIncrease: () => dispatch({ type: COMPLETED_TILE })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Column);
