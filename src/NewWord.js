import React from "react";
import PropTypes from "prop-types";

const NewWord = ({ success, resetGame }) => {
  return (
    <div data-test="component-new-word">
      {success ? (
        <button data-test="new-word-button" onClick={resetGame}>
          New Word
        </button>
      ) : (
        undefined
      )}
    </div>
  );
};

NewWord.propTypes = {
  success: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired
};
export default NewWord;
