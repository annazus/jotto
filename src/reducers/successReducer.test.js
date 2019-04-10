import successReducer from "./successReducer";
import { actionTypes } from "../actions";
test("returns defaults initial of false when no action types is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("returns state of true when action of type CORRECT_ACTION", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
