import moxios from "moxios";
import { storeFactory } from "../utils/utils";
import { getSecretWord, resetGame, WORDNIK_API } from "./";
describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.install();
  });

  test("add response word to state", () => {
    const secretWord = "party";

    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { word: secretWord }
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
  test("add response word to state", () => {
    const secretWord = "party";

    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { word: secretWord }
      });
    });

    return store.dispatch(resetGame()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });

  test("new state success must be false", () => {
    const secretWord = "party";

    const success = true;
    const guessedWords = [
      { guessedWord: "lucky", letterMatchCount: 2 },
      { guessedWord: "plant", letterMatchCount: 1 },
      { guessedWord: "tiger", letterMatchCount: 1 }
    ];
    const store = storeFactory({ success, guessedWords });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { word: secretWord }
      });
    });

    return store.dispatch(resetGame()).then(() => {
      const newState = store.getState();
      expect(newState.success).toBe(false);
    });
  });

  test("add response word to state", () => {
    const secretWord = "party";

    const success = true;
    const guessedWords = [
      { guessedWord: "lucky", letterMatchCount: 2 },
      { guessedWord: "plant", letterMatchCount: 1 },
      { guessedWord: "tiger", letterMatchCount: 1 }
    ];
    const store = storeFactory({ success, guessedWords });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { word: secretWord }
      });
    });

    return store.dispatch(resetGame()).then(() => {
      const newState = store.getState();
      expect(newState.guessedWords.length).toBe(0);
    });
  });
});

// describe("reset word", () => {
//   test("reset word", () => {
//     const success = true;
//     const guessedWords = [
//       { guessedWord: "lucky", letterMatchCount: 2 },
//       { guessedWord: "plant", letterMatchCount: 1 },
//       { guessedWord: "tiger", letterMatchCount: 1 }
//     ];
//     const store = storeFactory({ success, guessedWords });

//     return store.dispatch(resetWord()).then(() => {
//       const newState = store.getState();
//       expect(newState.guessedWords.length).toBe(0);
//     });
//   });

//   test("success", () => {
//     const success = true;
//     const guessedWords = [
//       { guessedWord: "lucky", letterMatchCount: 2 },
//       { guessedWord: "plant", letterMatchCount: 1 },
//       { guessedWord: "tiger", letterMatchCount: 1 }
//     ];
//     const store = storeFactory({ success, guessedWords });

//     return store.dispatch(resetWord()).then(() => {
//       const newState = store.getState();
//       expect(newState.success).toBe(false);
//     });
//   });

//   test("add response word to state", () => {
//     const secretWord = "party";

//     const store = storeFactory();

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: secretWord
//       });
//     });

//     return store.dispatch(resetWord()).then(() => {
//       const newState = store.getState();
//       expect(newState.secretWord).toBe(secretWord);
//     });
//   });
// });
