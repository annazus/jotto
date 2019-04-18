import React, { Component } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
export class UnConnectedApp extends Component {
  constructor(props) {
    super(props);
    // const guessedWords = [
    //   { guessedWord: "lucky", letterMatchCount: 2 },
    //   { guessedWord: "plant", letterMatchCount: 1 },
    //   { guessedWord: "tiger", letterMatchCount: 1 }
    // ];
    // this.state = { success: true, guessedWords };
  }

  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = ({ guessedWords, success }) => {
  return { guessedWords, success };
};
export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnConnectedApp);
