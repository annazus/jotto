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

  test("test does not display total guesses ", () => {
    const totalGuesses = findByTestAttr(wrapper, "total-guesses");
    expect(totalGuesses.length).toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "lucky", letterMatchCount: 2 },
    { guessedWord: "plant", letterMatchCount: 1 },
    { guessedWord: "tiger", letterMatchCount: 1 }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders'guessed words' section", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });
  test("displays correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });

  test("testdisplays guess # with each guess word row", () => {
    const guessNumberNodes = findByTestAttr(wrapper, "guessed-word-number");
    expect(guessNumberNodes.length).toBe(guessedWords.length);
  });

  test("test displays total guesses ", () => {
    const totalGuesses = findByTestAttr(wrapper, "total-guesses");
    expect(totalGuesses.text()).toContain(guessedWords.length);
  });
});
