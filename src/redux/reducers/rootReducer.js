import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { queryReducer } from "./queryReducer";
import { filterRedcuer } from "./FilterReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  query: queryReducer,
  filter: filterRedcuer,
});
