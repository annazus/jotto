import React from "react";
import PropTypes from "prop-types";

const NewWord = ({ display, resetGame }) => {
  return (
    <div data-test="component-new-word">
      {display ? (
        <button
          data-test="new-word-button"
          onClick={resetGame}
          className="btn btn-primary spacer-bottom"
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
