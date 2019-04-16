import { combineReducers } from "redux";
import success from "./successReducer";
import secretWord from "./secretWordReducer";
import guessedWords from "./guessedWordsReducer";
export default combineReducers({ success, secretWord, guessedWords });
