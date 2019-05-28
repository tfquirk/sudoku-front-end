import React from "react";

const Table = props => {
  const table = {
    border: "8px solid #000000",
    width: "40vw",
    height: "40vw",
    margin: "auto",
    background: "#000000"
  };

  return (
    <table style={table}>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;
