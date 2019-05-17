import React from "react";

// components found in components folder
import Column from "./Column";

const Row = props => {
  const rowStyles = {
    background: "white"
  };

  // destructure and split numbers string from 9 numbers into the columns they belong in
  const [
    column1_num,
    column2_num,
    column3_num,
    column4_num,
    column5_num,
    column6_num,
    column7_num,
    column8_num,
    column9_num
  ] = [
    props.numbers.substr(0, 1),
    props.numbers.substr(1, 1),
    props.numbers.substr(2, 1),
    props.numbers.substr(3, 1),
    props.numbers.substr(4, 1),
    props.numbers.substr(5, 1),
    props.numbers.substr(6, 1),
    props.numbers.substr(7, 1),
    props.numbers.substr(8, 1)
  ];

  // destructure and split solution string from 9 numbers into the columns they belong in
  const [
    column1_solution,
    column2_solution,
    column3_solution,
    column4_solution,
    column5_solution,
    column6_solution,
    column7_solution,
    column8_solution,
    column9_solution
  ] = [
    props.solutions.substr(0, 1),
    props.solutions.substr(1, 1),
    props.solutions.substr(2, 1),
    props.solutions.substr(3, 1),
    props.solutions.substr(4, 1),
    props.solutions.substr(5, 1),
    props.solutions.substr(6, 1),
    props.solutions.substr(7, 1),
    props.solutions.substr(8, 1)
  ];

  return (
    <tr style={rowStyles}>
      <Column
        row={props.row}
        column="column1"
        number={column1_num}
        solution={column1_solution}
      />

      <Column
        row={props.row}
        column="column2"
        number={column2_num}
        solution={column2_solution}
      />

      <Column
        row={props.row}
        column="column3"
        number={column3_num}
        solution={column3_solution}
      />

      <Column
        row={props.row}
        column="column4"
        number={column4_num}
        solution={column4_solution}
      />

      <Column
        row={props.row}
        column="column5"
        number={column5_num}
        solution={column5_solution}
      />

      <Column
        row={props.row}
        column="column6"
        number={column6_num}
        solution={column6_solution}
      />

      <Column
        row={props.row}
        column="column7"
        number={column7_num}
        solution={column7_solution}
      />

      <Column
        row={props.row}
        column="column8"
        number={column8_num}
        solution={column8_solution}
      />

      <Column
        row={props.row}
        column="column9"
        number={column9_num}
        solution={column9_solution}
      />
    </tr>
  );
};

export default Row;
