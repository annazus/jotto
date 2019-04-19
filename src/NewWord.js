import React from "react";
import PropTypes from "prop-types";

const NewWord = ({ display, resetGame }) => {
  return (
    <div data-test="component-new-word">
      {display ? (
        <button
          data-test="new-word-button"
          onClick={resetGame}
          className="btb btn-secondary mb-2"
        >
          New Word
        </button>
      ) : (
        undefined
      )}
    </div>
  );
};

NewWord.propTypes = {
  display: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired
};
export default NewWord;
