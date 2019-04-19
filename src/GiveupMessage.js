import React from "react";
import PropTypes from "prop-types";
const GiveupMessage = ({ giveup, secretWord }) => {
  return giveup ? (
    <div data-test="component-giveup">
      <span data-test="giveup-message">
        The secret word was "{secretWord}". Better luck next time!
      </span>
    </div>
  ) : (
    <div data-test="component-giveup" />
  );
};

export default GiveupMessage;

GiveupMessage.propTypes = {
  giveup: PropTypes.bool.isRequired,
  secretWord: PropTypes.string
};

GiveupMessage.defaultProps = {
  giveup: false
};
