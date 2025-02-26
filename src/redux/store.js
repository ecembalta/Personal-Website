import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index";

export const myStore = createStore(rootReducer, applyMiddleware(thunk));
