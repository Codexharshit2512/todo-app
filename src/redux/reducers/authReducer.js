import * as types from "../actions";

const initState = {
  user: {
    username: null,
    uid: null,
  },
  isAuthenticated: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.user_login:
      const newState = {
        user: { username: action.payload.name, uid: action.payload.uid },
        isAuthenticated: true,
      };
      return newState;
    case types.user_logout:
      return initState;
    default:
      return state;
  }
};
