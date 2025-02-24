import { combineReducers } from "redux";

import langReducer from "./langReducer";
import darkModeReducer from "./darkModeReducer";

const rootReducer = combineReducers({
  language: langReducer,
  darkMode: darkModeReducer,
});

export default rootReducer;
