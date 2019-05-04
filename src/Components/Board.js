import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// components found in components folder
import Row from "./Row";

const Board = props => {
  if (props.boards.length === 0) {
    return null;
  } else {
    const testBoard = props.boards[0].puzzle;
    const row1 = testBoard.substr(0, 9);
    const row2 = testBoard.substr(9, 9);
    const row3 = testBoard.substr(18, 9);
    const row4 = testBoard.substr(27, 9);
    const row5 = testBoard.substr(39, 9);
    const row6 = testBoard.substr(45, 9);
    const row7 = testBoard.substr(54, 9);
    const row8 = testBoard.substr(63, 9);
    const row9 = testBoard.substr(72, 9);

    return (
      <table>
        <tbody>
          <Row row="row1" numbers={row1} />
          <Row row="row2" numbers={row2} />
          <Row row="row3" numbers={row3} />
          <Row row="row4" numbers={row4} />
          <Row row="row5" numbers={row5} />
          <Row row="row6" numbers={row6} />
          <Row row="row7" numbers={row7} />
          <Row row="row8" numbers={row8} />
          <Row row="row9" numbers={row9} />
        </tbody>
      </table>
    );
  }
};

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

export default connect(mapStateToProps)(Board);
