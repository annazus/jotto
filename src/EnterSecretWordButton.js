import React from "react";

const EnterSecretWordButton = ({ display, showSecretWordInput }) => {
  const onClickButton = () => {
    showSecretWordInput();
  };
  return display ? (
    <div data-test="component-secret-word">
      <button
        data-test="show-secret-word-input-button"
        onClick={onClickButton}
        className="btb btn-secondary mb-2"
      >
        Enter your own secret word
      </button>
    </div>
  ) : (
    <div data-test="component-secret-word"> </div>
  );
};

export default EnterSecretWordButton;
