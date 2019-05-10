import React from "react";

// // components found in components folder
// import Board from "../components/Board";

const Column = props => {
  if (props.number === "0") {
    return (
      <td className={`${props.row} ${props.column}`}>
        <input style={{ height: "2vh", width: "2vh" }} />
      </td>
    );
  } else {
    return <td className={`${props.row} ${props.column}`}>{props.number}</td>;
  }
};

export default Column;
