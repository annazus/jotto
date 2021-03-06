import { actionTypes } from "../actions";
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVEUP_GAME:
      return true;
    case actionTypes.RESET_GAME:
    case actionTypes.SET_SECRET_WORD:
    case actionTypes.SHOW_SECRET_WORD_INPUT:
    case actionTypes.CORRECT_GUESS:
    case actionTypes.GUESS_WORD:
      return false;
    default:
      return state;
  }
};
