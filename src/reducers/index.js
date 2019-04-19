import { combineReducers } from "redux";
import success from "./successReducer";
import secretWord from "./secretWordReducer";
import guessedWords from "./guessedWordsReducer";
import giveup from "./giveupReducer";

export default combineReducers({ success, secretWord, guessedWords, giveup });
