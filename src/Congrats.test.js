import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "./utils/utils.js";
import Congrats from "./Congrats";
import checkPropType from "check-prop-types";

const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = setup();
  const element = findByTestAttr(wrapper, "component-congrats");
  expect(element.length).toBe(1);
});

test("must not show congrats message on fail", () => {
  const wrapper = setup({ success: false });
  const element = findByTestAttr(wrapper, "congrats-message");
  expect(element.length).toBe(0);
});

test("congrats component must show congrats message on success", () => {
  const wrapper = setup({ success: true });
  const element = findByTestAttr(wrapper, "congrats-message");
  expect(element.length).toBe(1);
});
test("does not throw warning with expected props", () => {
  checkProps(Congrats, { success: false });
});
