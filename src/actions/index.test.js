import moxios from "moxios";
import { storeFactory } from "../utils/utils";
import { getSecretWord } from "./";
import { debug } from "util";

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
    console.log(store);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
