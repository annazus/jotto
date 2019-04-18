import { actionTypes } from "../actions";
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case actionTypes.RESET_GAME:
      return [];
    default:
      return state;
  }
};
