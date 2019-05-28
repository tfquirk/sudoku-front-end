import React from "react";
import ReactDOM from "react-dom";

import ConnectedApp, { App } from "./App";
import { fetchBoards } from "./Actions/Apis/fetchBoards";

test("fetchBoards dispatches to UPDATE_BOARDS", () => {
  return fetchBoards().then(data => {
    expect(data).toEqual(0);
  });
});
