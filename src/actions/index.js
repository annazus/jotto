import axios from "axios";
import { getLetterMatchingCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
  RESET_GAME: "RESET_GAME",
  GIVEUP_GAME: "GIVEUP_GAME"
};

export const WORDNIK_API =
  "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=";
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

const getSecretWordDispatch = dispatch => {
  const key = process.env.REACT_APP_WORDNIK_API_KEY;
  const wordnikURL = WORDNIK_API + key;
  return axios.get(wordnikURL).then(response => {
    //get secret word
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: response.data.word
    });
  });
};

export const getSecretWord = () => {
  return dispatch => {
    return getSecretWordDispatch(dispatch);
  };
};

export const resetGame = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.RESET_GAME
    });
    return getSecretWordDispatch(dispatch);
  };
};

export const giveUp = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GIVEUP_GAME
    });
  };
};
