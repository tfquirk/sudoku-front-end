import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// components found in components folder
import Board from "../Components/Board";
import Loading from "../Components/Loading";
import Sidebar from "../Components/Sidebar";

const Homepage = props => {
  const gameContainer = {
    minWidth: "98vw",
    minHeight: "100vh",
    display: "flex"
  };

  // get randomPuzzleId to randomly display a puzzle from all of those
  // returned from the API
  const randomPuzzleId = Math.floor(Math.random() * props.boards.length);

  // if Redux state does not hold any games, return a loading gif
  if (props.boards.length === 0) {
    return (
      <div style={gameContainer}>
        <Loading />
      </div>
    );

    // if Redux state holds games, then return a random game
  } else {
    return (
      <div style={gameContainer}>
        <Sidebar board={props.boards[randomPuzzleId]} />
        <Board randomPuzzleId={randomPuzzleId} boards={props.boards} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

export default connect(mapStateToProps)(Homepage);
