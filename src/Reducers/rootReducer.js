// set default Redux state
const initialState = {
  boards: [],
  token: null,
  currentPlayer: {},
  games: [],
  completedTiles: 0
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
    case "COMPLETED_TILE":
      return { ...state, completedTiles: state.completedTiles + 1 };
    default:
      return state;
  }
}

export default reducer;
