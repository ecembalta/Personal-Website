const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true" || false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      localStorage.setItem("darkMode", action.payload);
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
