import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, storeFactory } from "./utils/utils";

import Input from "./Input";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();
describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      let initalState = { success: false };
      wrapper = setup();
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
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
  });
  describe("word has  been guessed", () => {
    test("renders component without error", () => {});

    test("does not render input box", () => {});
  });
});

describe("update state", () => {});
