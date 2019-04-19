import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "./utils/utils";
import EnterSecretWordButton from "./EnterSecretWordButton";
import { setupMaster } from "cluster";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  const wrapper = shallow(<EnterSecretWordButton {...props} />);
  return wrapper;
};
describe("test secret word enter button", () => {});
test("test renders without error", () => {
  const showSecretWordInputMock = jest.fn();
  const props = { showSecretWordInput: showSecretWordInputMock };
  const wrapper = setup(props);
  const enterSecretWordButtonComponent = findByTestAttr(
    wrapper,
    "component-secret-word"
  );
  expect(enterSecretWordButtonComponent.length).toBe(1);
});

test("renders button when display is true", () => {
  const showSecretWordInputMock = jest.fn();
  const display = true;
  const props = { display, showSecretWordInput: showSecretWordInputMock };
  const wrapper = setup(props);
  const button = findByTestAttr(wrapper, "show-secret-word-input-button");
  expect(button.length).toBe(1);
});

test("does not render button when display is false", () => {
  const showSecretWordInputMock = jest.fn();
  const display = false;
  const props = { display, showSecretWordInput: showSecretWordInputMock };
  const wrapper = setup(props);
  const button = findByTestAttr(wrapper, "show-secret-word-input-button");
  expect(button.length).toBe(0);
});

test("calls showSecretWord prop function on button click", () => {
  const showSecretWordInputMock = jest.fn();
  const display = true;
  const props = { display, showSecretWordInput: showSecretWordInputMock };
  const wrapper = setup(props);
  const button = findByTestAttr(wrapper, "show-secret-word-input-button");
  button.simulate("click", () => {});
  expect(showSecretWordInputMock.mock.calls.length).toBe(1);
});
