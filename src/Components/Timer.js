import React, { useState, useEffect } from "react";

const Timer = props => {
  const timer = {
    margin: "0 auto 2vh auto",
    padding: "1vh",
    textAlign: "center"
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timer);
    };

    function tick() {
      setSeconds(seconds + 1);
    }
  });

  if (seconds < 10) {
    return (
      <div style={timer}>
        <h1>Timer: 00:0{seconds}</h1>
      </div>
    );
  } else if (seconds < 60) {
    return (
      <div style={timer}>
        <h1>Timer: 00:{seconds}</h1>
      </div>
    );
  } else {
    let minutes = Math.floor(seconds / 60);
    return (
      <div style={timer}>
        <h1>
          Timer: {minutes}:
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </h1>
      </div>
    );
  }
};

export default Timer;
