import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";
export class UnConnectedInput extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};

    this.inputBox = React.createRef();
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    this.props.guessWord(e.target.name);
  };

  submitWord = e => {
    e.preventDefault();

    if (this.inputBox.current.value && this.inputBox.current.value.length > 0)
      this.props.guessWord(this.inputBox.current.value);
    this.inputBox.current.value = "";
  };
  render() {
    const contents = this.props.success ? (
      { undefined }
    ) : (
      <form className="form-inline">
        <input
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          data-test="input-box"
          id="word-guess"
          name="inputBox"
          ref={this.inputBox}
          onChange={this.onChange}
        />
        <button
          type="submit"
          className="btb btn-primary mb-2"
          data-test="submit-button"
          onClick={this.submitWord}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(UnConnectedInput);
