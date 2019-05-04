// import type to be used with dispatches
import { UPDATE_BOARDS } from "../../Types/types";

// set API endpoints to hit as constants
const BOARDS_API = "http://localhost:8000/api/v1/boards";

// fecth to star wars api and get people
export function fetchBoards(dispatch, endpoint) {
  return fetch(BOARDS_API)
    .then(res => res.json())
    .then(boards => {
      // update array of 10 people in Redux state
      dispatch({
        type: UPDATE_BOARDS,
        payload: boards
      });
    });
}
