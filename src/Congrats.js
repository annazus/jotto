import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component or null if 'success' prop is false
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success ? (
        <span data-test="congrats-message">
          "Congratulations! You guessed the word!"
        </span>
      ) : (
        undefined
      )}
    </div>
  );
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

Congrats.defaultTypes = {
  success: false
};
export default Congrats;
