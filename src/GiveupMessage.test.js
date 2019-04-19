import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "./utils/utils.js";
import GiveupMessage from "./GiveupMessage";
import checkPropType from "check-prop-types";

const defaultProps = { giveup: false, secretWord: "sandy" };
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GiveupMessage {...setupProps} />);
};
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = setup();
  const element = findByTestAttr(wrapper, "component-giveup");
  expect(element.length).toBe(1);
});
test("must not show  message on giveup = false", () => {
  const wrapper = setup();
  const element = findByTestAttr(wrapper, "giveup-message");
  expect(element.length).toBe(0);
});

test("giveup message component must show giveup message on giveup", () => {
  const wrapper = setup({ giveup: true });
  const element = findByTestAttr(wrapper, "giveup-message");
  expect(element.length).toBe(1);
});

test("giveup messaget must show secretword in giveup message on giveup=true", () => {
  const secretWord = "drain";
  const wrapper = setup({ giveup: true, secretWord });
  const element = findByTestAttr(wrapper, "giveup-message");
  expect(element.text()).toContain(secretWord);
});
