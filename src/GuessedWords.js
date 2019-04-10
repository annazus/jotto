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
  } else {
    const guessedWordRows = () =>
      guessedWords.map((word, index) => {
        return (
          <tr data-test="guessed-word" key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
          </tr>
        );
      });
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows(guessedWords)}</tbody>
        </table>
      </div>
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
