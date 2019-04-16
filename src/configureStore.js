import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middleWares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
export default createStoreWithMiddleware(rootReducer);
