import React from "react";
import PropTypes from "prop-types";
const EnterSecretWordButton = ({ display, showSecretWordInput }) => {
  const onClickButton = () => {
    showSecretWordInput();
  };
  return display ? (
    <div data-test="component-secret-word">
      <button
        data-test="show-secret-word-input-button"
        onClick={onClickButton}
        className="btn btn-primary mt-3 spacer-bottom"
      >
        Enter your own secret word
      </button>
    </div>
  ) : (
    <div data-test="component-secret-word"> </div>
  );
};
EnterSecretWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  showSecretWordInput: PropTypes.func
};
EnterSecretWordButton.defaultProps = { display: false };
export default EnterSecretWordButton;
