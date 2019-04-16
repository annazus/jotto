import { correctGuess } from "./actions";
import { guessWord } from "./actions";
import { storeFactory, findByTestAttr } from "./utils/utils";

describe("guess word action creation", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";

  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
      let newState = store.getState();
      console.log(newState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
      };

      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }]
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    let store;
    const initialState = {
      secretWord,
      guessedWords: [{ guessedWord: "moron", letterMatchCount: 1 }]
    };
    beforeEach(() => {
      store = storeFactory(initialState);
      let newState = store.getState();
      console.log(newState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
