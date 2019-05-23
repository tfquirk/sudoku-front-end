import React from "react";

const Loading = props => {
  const loadingGif = {
    width: "45vw",
    height: "45vw",
    margin: "auto 27.5vw"
  };

  return (
    <img
      src="https://media.giphy.com/media/l41Yy6jvn3BXYDRu0/giphy.gif"
      style={loadingGif}
      alt="Sudoku gif while game loading"
    />
  );
};

export default Loading;
