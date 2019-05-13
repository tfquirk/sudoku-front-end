import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import CSS
import "./Board.css";

// components found in components folder
import Row from "./Row";

const Board = props => {
  if (props.boards.length === 0) {
    // TODO: Add spinner
    return null;
  } else {
    // get randomPuzzleId to randomly display a puzzle from all of those
    // returned from the API
    const randomPuzzleId = Math.floor(Math.random() * props.boards.length);
    const puzzle = props.boards[randomPuzzleId].puzzle;

    // Split the puzzle into its 9 rows
    const row1 = puzzle.substr(0, 9);
    const row2 = puzzle.substr(9, 9);
    const row3 = puzzle.substr(18, 9);
    const row4 = puzzle.substr(27, 9);
    const row5 = puzzle.substr(36, 9);
    const row6 = puzzle.substr(45, 9);
    const row7 = puzzle.substr(54, 9);
    const row8 = puzzle.substr(63, 9);
    const row9 = puzzle.substr(72, 9);

    // get the solution for the random puzzle and split that
    // information into its 9 rows
    const solution = props.boards[randomPuzzleId].solution;
    const row1_solution = solution.substr(0, 9);
    const row2_solution = solution.substr(9, 9);
    const row3_solution = solution.substr(18, 9);
    const row4_solution = solution.substr(27, 9);
    const row5_solution = solution.substr(36, 9);
    const row6_solution = solution.substr(45, 9);
    const row7_solution = solution.substr(54, 9);
    const row8_solution = solution.substr(63, 9);
    const row9_solution = solution.substr(72, 9);

    return (
      <div className="sudoku-container">
        <div className="sudoku">
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
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

export default connect(mapStateToProps)(Board);
