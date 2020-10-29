import { store } from "../../store/store";
import * as types from "../actions";

export const setTodos = (todos) => {
  const state = store.getState();
  const query = state.query,
    filter = state.filter;

  if (query !== "") {
    let arr = [];
    let re = new RegExp(query);
    if (filter != "all") {
      const bool = filter == "done" ? true : false;
      todos.forEach((todo) => {
        if (re.test(todo.description) && todo.isCompleted === bool) {
          arr.push(todo);
        }
      });
    } else {
      todos.forEach((todo) => {
        if (re.test(todo.description)) {
          arr.push(todo);
        }
      });
    }
    return { type: types.set_todos, payload: { todos, filteredTodos: arr } };
  } else {
    if (filter !== "all") {
      let arr = [];
      const bool = filter == "done" ? true : false;
      todos.forEach((todo) => {
        if (todo.isCompleted === bool) arr.push(todo);
      });
      return { type: types.set_todos, payload: { todos, filteredTodos: arr } };
    }
  }
  return { type: types.set_todos, payload: { todos, filteredTodos: todos } };
};

export const resetTodos = () => {
  const state = store.getState();
  const filter = state.filter,
    todos = state.todos.todos;
  let arr = [];
  if (filter != "all") {
    const bool = filter == "done" ? true : false;
    todos.forEach((todo) => {
      if (todo.isCompleted === bool) {
        arr.push(todo);
      }
    });
    return { type: types.reset_todos, payload: arr };
  }
  return { type: types.reset_todos, payload: todos };
};
