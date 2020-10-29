import * as types from "../actions";

const initState = {
  todos: [],
  isEmpty: true,
  filteredTodos: [],
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case types.set_todos:
      return {
        todos: action.payload.todos,
        isEmpty: action.payload.filteredTodos.length == 0 ? true : false,
        filteredTodos: action.payload.filteredTodos,
      };
    case types.set_filtered_todos:
      if (action.payload.length === 0)
        return { ...state, filteredTodos: action.payload, isEmpty: true };
      else return { ...state, filteredTodos: action.payload, isEmpty: false };
    case types.reset_todos:
      if (action.payload.length === 0)
        return { ...state, filteredTodos: action.payload, isEmpty: true };
      else return { ...state, filteredTodos: action.payload, isEmpty: false };
    default:
      return state;
  }
};
