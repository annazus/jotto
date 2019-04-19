import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { storeFactory, findByTestAttr } from "./utils/utils";
import App from "./App";
import EnterSecretWordButton from "./EnterSecretWordButton";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("App has a default prop called showSecretWordInput", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.props.showSecretWordInput).toBe(false);
});

// test("App shows Game component when showSecretWordInput is false", () => {
//   const wrapper = shallow(<App showSecretWordInput={false} />);

//   expect(wrapper.props.showSecretWordInput).toBe(false);
// });

// test("App shows EnterSecretWordButton component when showSecretWordInput is true", () => {});
