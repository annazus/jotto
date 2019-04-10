import React, { Component } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    const guessedWords = [
      { guessedWord: "lucky", letterMatchCount: 2 },
      { guessedWord: "plant", letterMatchCount: 1 },
      { guessedWord: "tiger", letterMatchCount: 1 }
    ];
    this.state = { success: true, guessedWords };
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.state.success} />
        <GuessedWords guessedWords={this.state.guessedWords} />
      </div>
    );
  }
}

export default App;
