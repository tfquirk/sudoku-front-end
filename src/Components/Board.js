import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import CSS
import "./Board.css";

// components found in components folder
import Row from "./Row";

const Board = props => {
  if (props.boards.length === 0) {
    return null;
  } else {
    const puzzle = props.boards[0].puzzle;
    const row1 = puzzle.substr(0, 9);
    const row2 = puzzle.substr(9, 9);
    const row3 = puzzle.substr(18, 9);
    const row4 = puzzle.substr(27, 9);
    const row5 = puzzle.substr(39, 9);
    const row6 = puzzle.substr(45, 9);
    const row7 = puzzle.substr(54, 9);
    const row8 = puzzle.substr(63, 9);
    const row9 = puzzle.substr(72, 9);

    const solution = props.boards[0].solution;
    const row1_solution = solution.substr(0, 9);
    const row2_solution = solution.substr(9, 9);
    const row3_solution = solution.substr(18, 9);
    const row4_solution = solution.substr(27, 9);
    const row5_solution = solution.substr(39, 9);
    const row6_solution = solution.substr(45, 9);
    const row7_solution = solution.substr(54, 9);
    const row8_solution = solution.substr(63, 9);
    const row9_solution = solution.substr(72, 9);

    return (
      <table>
        <tbody>
          <Row row="row1" numbers={row1} solutions={row1_solution} />
          <Row row="row2" numbers={row2} solutions={row2_solution} />
          <Row row="row3" numbers={row3} solutions={row3_solution} />
          <Row row="row4" numbers={row4} solutions={row4_solution} />
          <Row row="row5" numbers={row5} solutions={row5_solution} />
          <Row row="row6" numbers={row6} solutions={row6_solution} />
          <Row row="row7" numbers={row7} solutions={row7_solution} />
          <Row row="row8" numbers={row8} solutions={row8_solution} />
          <Row row="row9" numbers={row9} solutions={row9_solution} />
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
