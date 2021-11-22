export const ApplicationReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "toggleHeader": {
      const newState = { ...state };
      newState.isShowing = !newState.isShowing;
      return newState;
    }

    case "toggleDropDown": {
      const newState = { ...state };
      newState.dropDownActive = !newState.dropDownActive;
      return newState;
    }

    default: {
      return state;
    }
  }
};
