import { actionTypes } from "../actions";
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SECRET_WORD_INPUT:
      return true;
    case actionTypes.SET_SECRET_WORD:
      return false;
    default:
      return state;
  }
};
