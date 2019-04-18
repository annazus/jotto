import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App, { UnConnectedApp } from "./App";
import { storeFactory } from "./utils/utils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const store = storeFactory({ success: false });
  const wrapper = shallow(<App store={store} />);
});

const setup = (state = {}) => {
  let store = storeFactory(state);
  let wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};
describe("redux props", () => {
  test("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    expect(wrapper.instance().props.success).toBe(success);
  });

  test("has access to guessWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    expect(wrapper.instance().props.guessedWords).toEqual(guessedWords);
  });

  test("getSecretWord is an action creator function on the props", () => {
    const wrapper = setup({});
    expect(wrapper.instance().props.getSecretWord).toBeInstanceOf(Function);
  });
});
describe("test `getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const wrapper = shallow(
    <UnConnectedApp
      getSecretWord={getSecretWordMock}
      success={false}
      guessedWords={[]}
    />
  );

  test("test if getSecretWord is called on mount", () => {
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
