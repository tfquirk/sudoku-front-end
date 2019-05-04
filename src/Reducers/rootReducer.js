// set default Redux state
const initialState = {
  boards: [],
  token: null,
  currentPlayer: {},
  games: []
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_GAMES":
      return { ...state, games: action.payload };
    case "UPDATE_BOARDS":
      return { ...state, boards: action.payload };
    case "CURRENT_PLAYER":
      return { ...state, currentPlayer: action.payload };
    case "PLAYER_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default reducer;
