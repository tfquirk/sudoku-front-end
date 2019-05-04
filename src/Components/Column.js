import React, { Fragment } from "react";

// // components found in components folder
// import Board from "../components/Board";

const Column = props => {
  if (props.number === "0") {
    return (
      <Fragment className={`${props.row} ${props.column}`}>
        <input />
      </Fragment>
    );
  } else {
    return (
      <Fragment className={`${props.row} ${props.column}`}>
        {props.number}
      </Fragment>
    );
  }
};

export default Column;
