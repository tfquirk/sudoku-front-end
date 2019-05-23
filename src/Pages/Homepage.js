import React from "react";

// components found in components folder
import Board from "../Components/Board";
import Sidebar from "../Components/Sidebar";

const Homepage = props => {
  const gameContainer = {
    minWidth: "98vw",
    minHeight: "100vh",
    display: "flex"
  };

  return (
    <div style={gameContainer}>
      <Sidebar />
      <Board />
    </div>
  );
};

export default Homepage;
