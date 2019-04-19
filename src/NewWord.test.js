import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "./utils/utils";

import NewWord from "./NewWord";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = props => {
  const wrapper = shallow(<NewWord {...props} />);
  return wrapper;
};

test("renders without error", () => {
  let resetGameMock = jest.fn();
  const props = { display: false, resetGame: resetGameMock };
  const wrapper = setup(props);
  const newWordComponent = findByTestAttr(wrapper, "component-new-word");
  expect(newWordComponent.length).toBe(1);
});

test("renders button on display true ", () => {
  let resetGameMock = jest.fn();
  const props = { display: true, resetGame: resetGameMock };
  const wrapper = setup(props);
  const newWordComponent = findByTestAttr(wrapper, "new-word-button");
  expect(newWordComponent.length).toBe(1);
});

test("test does not render button on fail ", () => {
  let resetGameMock = jest.fn();
  const props = { display: false, resetGame: resetGameMock };
  const wrapper = setup(props);
  const newWordComponent = findByTestAttr(wrapper, "new-word-button");
  expect(newWordComponent.length).toBe(0);
});

test("test does not render button on fail ", () => {
  let resetGameMock = jest.fn();
  const props = { display: false, resetGame: resetGameMock };
  const wrapper = setup(props);
  const newWordComponent = findByTestAttr(wrapper, "new-word-button");
  expect(newWordComponent.length).toBe(0);
});

test("on button click calls resetWord prop function ", () => {
  let resetGameMock = jest.fn();
  const props = { display: true, resetGame: resetGameMock };
  const wrapper = setup(props);
  const newWordButton = findByTestAttr(wrapper, "new-word-button");
  newWordButton.simulate("click", { preventDefault() {} });
  expect(resetGameMock.mock.calls.length).toBe(1);
});
