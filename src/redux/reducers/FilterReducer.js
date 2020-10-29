import * as types from "../actions";

const initState = "all";

export const filterRedcuer = (state = initState, action) => {
  switch (action.type) {
    case types.set_filter:
      return action.payload;
    default:
      return state;
  }
};
