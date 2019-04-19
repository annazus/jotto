import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserSecretWord } from "./actions";
export class UnConnectedSecretWordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickSubmit = e => {
    e.preventDefault();
    const secretWord = this.state.secretWordText;
    if (secretWord && secretWord.length > 0) {
      this.props.setUserSecretWord(secretWord);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { showSecretWordInput } = this.props;
    return showSecretWordInput ? (
      <div data-test="component-secret-word-form">
        <span data-test="enter-secret-word-message">
          Enter a secret word for someone else to guess.
        </span>
        <form className="form-inline">
          <input
            type="text"
            data-test="secret-word-text"
            name="secretWordText"
            className="mb-2 mx-sm-3"
            onChange={this.onChange}
          />
          <button
            type="submit"
            data-test="secret-word-button"
            name="submitButton"
            className="btb btn-primary mb-2"
            onClick={this.onClickSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div data-test="component-secret-word-form" />
    );
  }
}

const mapStateToProps = ({ showSecretWordInput }) => {
  return {
    showSecretWordInput
  };
};
export default connect(
  mapStateToProps,
  { setUserSecretWord }
)(UnConnectedSecretWordInput);
