import React, { Component } from "react";
import Congrats from "./Congrats";
import Input from "./Input";
import GuessedWords from "./GuessedWords";
import NewWord from "./NewWord";
import { connect } from "react-redux";
import { getSecretWord, resetGame } from "./actions";
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
        <NewWord
          success={this.props.success}
          resetGame={this.props.resetGame}
        />

        <Input success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = ({ guessedWords, success }) => {
  return { guessedWords, success };
};
const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => {
      dispatch(resetGame());
    },
    getSecretWord: () => {
      dispatch(getSecretWord());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnConnectedApp);
