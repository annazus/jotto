import React, { Component } from "react";
import { connect } from "react-redux";

export class UnConnectedInput extends Component {
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
        />
        <button
          type="submit"
          className="btb btn-primary mb-2"
          data-test="submit-button"
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

export default connect(mapStateToProps)(UnConnectedInput);
