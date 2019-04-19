import React, { Component, Fragment } from "react";
import Congrats from "./Congrats";
import Input from "./Input";
import GuessedWords from "./GuessedWords";
import GiveupMessage from "./GiveupMessage";
import NewWord from "./NewWord";
import { connect } from "react-redux";
import { getSecretWord, resetGame, showSecretWordInput } from "./actions";
import EnterSecretWordButton from "./EnterSecretWordButton";
import "./App.css";
export class UnConnectedGame extends Component {
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
      <Fragment>
        <Congrats success={this.props.success} />

        <GiveupMessage
          giveup={this.props.giveup}
          secretWord={this.props.secretWord}
        />

        <NewWord
          display={this.props.success || this.props.giveup}
          resetGame={this.props.resetGame}
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <EnterSecretWordButton
          display={!this.props.success && this.props.guessedWords.length === 0}
          showSecretWordInput={this.props.showSecretWordInput}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ guessedWords, success, giveup, secretWord }) => {
  return { guessedWords, success, giveup, secretWord };
};
const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => {
      dispatch(resetGame());
    },
    getSecretWord: () => {
      dispatch(getSecretWord());
    },
    showSecretWordInput: () => {
      dispatch(showSecretWordInput());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnConnectedGame);
