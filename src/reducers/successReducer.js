import { actionTypes } from "../actions";
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    case actionTypes.RESET_GAME:
      console.log(state);
      return false;
    default:
      return state;
  }
};
