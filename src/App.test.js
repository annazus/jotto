import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { storeFactory, findByTestAttr } from "./utils/utils";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("test app renders without error", () => {
  const store = storeFactory({});
  const wrapper = shallow(<App store={store} />).dive();

  console.log(wrapper.props());
  expect(wrapper.props().showSecretWordInput).toBe(false);
});

// test("App shows Game component when showSecretWordInput is false", () => {
//   const wrapper = shallow(<App showSecretWordInput={false} />);

//   expect(wrapper.props.showSecretWordInput).toBe(false);
// });

// test("App shows EnterSecretWordButton component when showSecretWordInput is true", () => {});
