import React from "react";
import PropTypes from "prop-types";
const row = (item, key) => (
  <div data-test="guessed-words-row" key={key}>
    <span data-test="guessed-words-word">{item.word}</span>
    <span data-test="guessed-words-count">{item.count}</span>
  </div>
);
// {guessedWords.map((item, key) => row(item, key))}

const GuessedWords = ({ guessedWords }) => {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
export default GuessedWords;
