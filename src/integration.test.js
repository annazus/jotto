import { correctGuess } from "./actions";
import { guessWord, setUserSecretWord, showSecretWordInput } from "./actions";
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
        giveup: false,
        showSecretWordInput: false,

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
        giveup: false,
        showSecretWordInput: false,

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
        giveup: false,
        showSecretWordInput: false,

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
        giveup: false,
        showSecretWordInput: false,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("test user setting secret word", () => {
  // const secretWord = "rainy";
  // let showSecretWordInput= false,

  // let store;
  // let initialState = { secretWord };
  // beforeEach(() => {
  //   store = storeFactory(initialState);
  // });

  test("initial state of store", () => {
    const store = storeFactory({});
    const expectedState = {
      success: false,
      giveup: false,
      secretWord: null,
      showSecretWordInput: false,
      guessedWords: []
    };

    expect(store.getState()).toEqual(expectedState);
  });

  test("showSecretWordInput dispatch", () => {
    const initialState = {
      success: false,
      giveup: false,
      secretWord: "drain",
      showSecretWordInput: false,
      guessedWords: []
    };

    const store = storeFactory(initialState);
    console.log(store.getState());
    store.dispatch(showSecretWordInput());
    const expectedState = {
      success: false,
      giveup: false,
      secretWord: "drain",
      showSecretWordInput: true,
      guessedWords: []
    };
    expect(store.getState()).toEqual(expectedState);
  });

  test("set setUserSecretWord", () => {
    const initialState = {
      success: false,
      giveup: false,
      secretWord: "drain",
      showSecretWordInput: true,
      guessedWords: []
    };

    const store = storeFactory(initialState);
    console.log(store.getState());
    const newSecretWord = "rainy";
    store.dispatch(setUserSecretWord(newSecretWord));
    const expectedState = {
      success: false,
      giveup: false,
      secretWord: newSecretWord,
      showSecretWordInput: false,
      guessedWords: []
    };
    expect(store.getState()).toEqual(expectedState);
  });
});
