import * as types from "../actions";
const initState = "";

export const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.change_query:
      return action.payload;

    default:
      return state;
  }
};
