import React from "react";

const Sidebar = props => {
  const sidebarStyles = {
    margin: 0,
    width: "25vw",
    height: "100vh",
    backgroundColor: "Red",
    color: "white"
  };

  return (
    <div style={sidebarStyles}>
      <div
        style={{
          border: "1px solid white",
          margin: "auto",
          width: "15vw",
          height: "25vh"
        }}
      >
        <h1>Game #: {`${props.board.id}/5000`}</h1>
        <p>
          Quickest time completed: {props.board.quickest_time_completed || "NA"}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
