import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from "./utils/utils";

const defaultProps = {
  guessedWords: [{ guessedWord: "field", letterMatchCount: 2 }]
};

const setup = props => {
  const setupProps = { ...defaultProps, ...props };

  const wrapper = shallow(<GuessedWords {...setupProps} />);
  return wrapper;
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("does not throw error with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});

// test("renders without error", () => {
//   const wrapper = setup({ guessedWords: [{ word: "fighter", match: 3 }] });
//   const listElement = findByTestAttr(wrapper, "component-guessed-words-list");
//   expect(listElement.length).toBe(1);
// });

// test("renders without error given an empty list", () => {});

// test("renders all provided guessed words", () => {});

// test("does not throw warning with expected props", () => {});
