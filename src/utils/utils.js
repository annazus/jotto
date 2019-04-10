import Enzyme from "enzyme";
import checkPropType from "check-prop-types";
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

/**
 * Check if the conforming props comply with the component's proptypes
 * @param {object} component
 * @param {*} conformingProps - props that meet the component's proptypes definition
 *
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropType(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
