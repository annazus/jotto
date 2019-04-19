import React from "react";
import Game from "./Game";
import { connect } from "react-redux";
import SecretWordInput from "./SecretWordInput";
const UnConnectedApp = ({ showSecretWordInput }) => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      {showSecretWordInput ? <SecretWordInput /> : <Game />}
    </div>
  );
};
UnConnectedApp.defaultProps = {
  showSecretWordInput: false
};
const mapStateToProps = ({ showSecretWordInput }) => ({ showSecretWordInput });
export default connect(mapStateToProps)(UnConnectedApp);
