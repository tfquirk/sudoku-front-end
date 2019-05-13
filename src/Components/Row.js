import React from "react";

// components found in components folder
import Column from "./Column";

const Row = props => {
  // split numbers string from 9 numbers into the columns they belong in
  const column1_num = props.numbers.substr(0, 1);
  const column2_num = props.numbers.substr(1, 1);
  const column3_num = props.numbers.substr(2, 1);
  const column4_num = props.numbers.substr(3, 1);
  const column5_num = props.numbers.substr(4, 1);
  const column6_num = props.numbers.substr(5, 1);
  const column7_num = props.numbers.substr(6, 1);
  const column8_num = props.numbers.substr(7, 1);
  const column9_num = props.numbers.substr(8, 1);

  // split solution string from 9 numbers into the columns they belong in
  const column1_solution = props.solutions.substr(0, 1);
  const column2_solution = props.solutions.substr(1, 1);
  const column3_solution = props.solutions.substr(2, 1);
  const column4_solution = props.solutions.substr(3, 1);
  const column5_solution = props.solutions.substr(4, 1);
  const column6_solution = props.solutions.substr(5, 1);
  const column7_solution = props.solutions.substr(6, 1);
  const column8_solution = props.solutions.substr(7, 1);
  const column9_solution = props.solutions.substr(8, 1);

  return (
    <tr>
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
