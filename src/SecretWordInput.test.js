import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import SecretWordInput, { UnConnectedSecretWordInput } from "./SecretWordInput";
import { findByTestAttr, storeFactory } from "./utils/utils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<SecretWordInput store={store} />);
  return wrapper.dive().dive();
};

const defaultProps = { showSecretWordInput: false };

const setupUnconnected = props => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<UnConnectedSecretWordInput {...setupProps} />);
  return wrapper;
};

const setupConnected = initialState => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<SecretWordInput store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("test unconnected component when showSecretWordInput is false", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupUnconnected();
  });
  test("test renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-secret-word-form");
    expect(component.length).toBe(1);
  });

  test("test renders instruction message", () => {
    const message = findByTestAttr(wrapper, "enter-secret-word-message");
    expect(message.length).toBe(0);
  });
  test("test renders input box", () => {
    const message = findByTestAttr(wrapper, "secret-word-text");
    expect(message.length).toBe(0);
  });
  test("test renders button", () => {
    const message = findByTestAttr(wrapper, "secret-word-button");
    expect(message.length).toBe(0);
  });
});

describe("test unconnected component when showSecretWordInput is true", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupUnconnected({ showSecretWordInput: true });
  });
  test("test renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-secret-word-form");
    expect(component.length).toBe(1);
  });

  test("test renders instruction message", () => {
    const message = findByTestAttr(wrapper, "enter-secret-word-message");
    expect(message.length).toBe(1);
  });
  test("test renders input box", () => {
    const message = findByTestAttr(wrapper, "secret-word-text");
    expect(message.length).toBe(1);
  });
  test("test renders button", () => {
    const message = findByTestAttr(wrapper, "secret-word-button");
    expect(message.length).toBe(1);
  });
});
test("test onChange event on text input", () => {
  const setUserSecretWordMock = jest.fn();

  const wrapper = setupUnconnected({
    showSecretWordInput: true,
    setUserSecretWord: setUserSecretWordMock
  });

  const inputTextName = "secretWordText";
  const secretWord = "rainy";

  const secretInput = findByTestAttr(wrapper, "secret-word-text");
  secretInput.simulate("change", {
    preventDefault() {},
    target: { value: secretWord, name: inputTextName }
  });

  expect(wrapper.state(inputTextName)).toBe(secretWord);
});

test("test prop function setUserSecretWord is called", () => {
  const setUserSecretWordMock = jest.fn();

  const wrapper = setupUnconnected({
    showSecretWordInput: true,
    setUserSecretWord: setUserSecretWordMock
  });

  const inputTextName = "secretWordText";
  const secretWord = "rainy";

  const secretInput = findByTestAttr(wrapper, "secret-word-text");
  secretInput.simulate("change", {
    preventDefault() {},
    target: { value: secretWord, name: inputTextName }
  });

  const button = findByTestAttr(wrapper, "secret-word-button");
  button.simulate("click", {
    preventDefault() {}
  });

  expect(setUserSecretWordMock.mock.calls.length).toBe(1);
});

test("test prop function setUserSecretWord is called with input of text box as parameter", () => {
  const setUserSecretWordMock = jest.fn();

  const wrapper = setupUnconnected({
    showSecretWordInput: true,
    setUserSecretWord: setUserSecretWordMock
  });

  const inputTextName = "secretWordText";
  const secretWord = "rainy";

  const secretInput = findByTestAttr(wrapper, "secret-word-text");
  secretInput.simulate("change", {
    preventDefault() {},
    target: { value: secretWord, name: inputTextName }
  });

  const button = findByTestAttr(wrapper, "secret-word-button");
  button.simulate("click", {
    preventDefault() {}
  });

  expect(setUserSecretWordMock.mock.calls[0][0]).toBe(secretWord);
});

describe("test connected component", () => {
  test("test that showSecretWordInput prop on component is set correctly", () => {
    const initialState = { showSecretWordInput: true };
    const wrapper = setupConnected(initialState);

    expect(wrapper.instance().props.showSecretWordInput).toBe(
      initialState.showSecretWordInput
    );
  });

  test("test that setUserSecretWord prop on component is set correctly", () => {
    const initialState = { showSecretWordInput: true };
    const wrapper = setupConnected(initialState);

    expect(wrapper.instance().props.setUserSecretWord).toBeInstanceOf(Function);
  });
  describe("showSecretWordInput is false", () => {
    test("test render component when showSecretWordInput is false", () => {
      const initialState = { showSecretWordInput: false };
      const wrapper = setupConnected(initialState);
      const component = findByTestAttr(wrapper, "component-secret-word-form");
      expect(component.length).toBe(1);
    });

    test("test does not render submit button ", () => {
      const initialState = { showSecretWordInput: false };
      const wrapper = setupConnected(initialState);
      const button = findByTestAttr(wrapper, "secret-word-button");
      expect(button.length).toBe(0);
    });
  });

  describe("showSecretWordInput is true", () => {
    test("test render component when showSecretWordInput is true", () => {
      const initialState = { showSecretWordInput: true };
      const wrapper = setupConnected(initialState);
      const component = findByTestAttr(wrapper, "component-secret-word-form");
      expect(component.length).toBe(1);
    });

    test("test renders submit button ", () => {
      const initialState = { showSecretWordInput: true };
      const wrapper = setupConnected(initialState);
      const button = findByTestAttr(wrapper, "secret-word-button");
      expect(button.length).toBe(1);
    });
  });
});
