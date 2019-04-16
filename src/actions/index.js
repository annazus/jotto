import axios from "axios";
import { getLetterMatchingCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD"
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;

    const letters = getLetterMatchingCount(secretWord, guessedWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount: letters }
    });

    if (secretWord === guessedWord)
      dispatch({ type: actionTypes.CORRECT_GUESS });
  };
};

export const getSecretWord = () => {
  return function(dispatch) {
    return axios.get("http://localhost:3030").then(response => {
      //get secret word
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data
      });
    });
  };
};
