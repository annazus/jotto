import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, storeFactory } from "./utils/utils";

import ConnectedInput, { UnConnectedInput } from "./Input";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedInput store={store} />);
  return wrapper;
};

const setupConnectedComponent = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(<ConnectedInput store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();
describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      let initalState = { success: false, giveup: false };
      wrapper = setupConnectedComponent(initalState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box without error", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
    test("renders giveup button", () => {
      const giveupButton = findByTestAttr(wrapper, "giveup-button");
      expect(giveupButton.length).toBe(1);
    });
  });
  describe("word has  been guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setupConnectedComponent({ success: true, giveup: false });
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders input box without error", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
    test("does not render giveup button", () => {
      const giveupButton = findByTestAttr(wrapper, "giveup-button");
      expect(giveupButton.length).toBe(0);
    });
  });

  describe("giveup up", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setupConnectedComponent({ success: false, giveup: true });
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders input box without error", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
    test("does not render giveup button", () => {
      const giveupButton = findByTestAttr(wrapper, "giveup-button");
      expect(giveupButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has display piece of state as props", () => {
    const success = false;
    const giveup = false;
    const display = !success && !giveup;
    const wrapper = setupConnectedComponent({
      success,
      giveup
    });
    const displayProps = wrapper.instance().props.display;
    console.log(wrapper.instance().props);
    expect(displayProps).toBe(display);
  });

  test("check guess word action creator is a function prop", () => {
    const wrapper = setupConnectedComponent();
    const guessWordProps = wrapper.instance().props.guessWord;

    expect(guessWordProps).toBeInstanceOf(Function);
  });
  test("check giveup action creator is a function prop", () => {
    const wrapper = setupConnectedComponent();
    const giveupProps = wrapper.instance().props.giveUp;

    expect(giveupProps).toBeInstanceOf(Function);
  });
});
describe("`guessWord` action creator", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "armed";
  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(
      <UnConnectedInput guessWord={guessWordMock} display={true} />
    );

    wrapper.instance().inputBox.current = { value: guessedWord };
    const submit = findByTestAttr(wrapper, "submit-button");
    submit.simulate("click", { preventDefault() {} });
  });

  test("`guessWord` was called once", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test("`guessWord` was called with input value as argument", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });
  test("input box clears on submit", () => {
    expect(wrapper.instance().inputBox.current.value).toBe("");
  });
});
