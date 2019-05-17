import React from "react";

const Table = props => {
  const table = {
    border: "8px solid #000000",
    width: "45vw",
    height: "45vw",
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
