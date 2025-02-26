import { SET_LANGUAGE } from "../actions/languageActions";

const initialState = {
  language: localStorage.getItem("language") || "tr",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
