import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import CSS
import "./Board.css";

// components found in components folder
import Table from "./Table";
import Row from "./Row";
import Loading from "./Loading";

const Board = props => {
  // container styles
  const sudokuContainer = {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "table"
  };

  // sudoku game style
  const sudoku = {
    display: "table-cell",
    verticalAlign: "middle"
  };

  // if Redux state does not hold any games, return a loading gif
  if (props.boards.length === 0) {
    return (
      <div style={sudokuContainer}>
        <div style={sudoku}>
          <Loading />
        </div>
      </div>
    );

    // if Redux state holds games, then return a random game
  } else {
    // get randomPuzzleId to randomly display a puzzle from all of those
    // returned from the API
    const randomPuzzleId = Math.floor(Math.random() * props.boards.length);

    // deconstruct puzzle and solution based on the randomly assigned board
    const [puzzle, solution] = [
      props.boards[randomPuzzleId].puzzle,
      props.boards[randomPuzzleId].solution
    ];

    return (
      <div style={sudokuContainer}>
        <div style={sudoku}>
          <Table>
            <Row
              row="row1"
              numbers={puzzle.substr(0, 9)}
              solutions={solution.substr(0, 9)}
            />
            <Row
              row="row2"
              numbers={puzzle.substr(9, 9)}
              solutions={solution.substr(9, 9)}
            />
            <Row
              row="row3"
              numbers={puzzle.substr(18, 9)}
              solutions={solution.substr(18, 9)}
            />
            <Row
              row="row4"
              numbers={puzzle.substr(27, 9)}
              solutions={solution.substr(27, 9)}
            />
            <Row
              row="row5"
              numbers={puzzle.substr(36, 9)}
              solutions={solution.substr(36, 9)}
            />
            <Row
              row="row6"
              numbers={puzzle.substr(45, 9)}
              solutions={solution.substr(45, 9)}
            />
            <Row
              row="row7"
              numbers={puzzle.substr(54, 9)}
              solutions={solution.substr(54, 9)}
            />
            <Row
              row="row8"
              numbers={puzzle.substr(63, 9)}
              solutions={solution.substr(63, 9)}
            />
            <Row
              row="row9"
              numbers={puzzle.substr(72, 9)}
              solutions={solution.substr(72, 9)}
            />
          </Table>
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
