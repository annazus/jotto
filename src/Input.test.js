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
  console.log(wrapper.debug());
};

setup();
describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box without error", () => {});
    test("renders submit button", () => {});
  });
  describe("word has  been guessed", () => {
    test("renders component without error", () => {});

    test("does not render input box", () => {});
  });
});

describe("update state", () => {});
