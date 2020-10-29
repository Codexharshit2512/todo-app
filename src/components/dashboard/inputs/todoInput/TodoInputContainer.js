import React from "react";
import { useSelector } from "react-redux";
import "./todoInput.scss";
import { addTodo } from "../../../../crud/crud";
import TodoInput from "./TodoInput";

const TodoInputContainer = () => {
  const username = useSelector((state) => state.auth.user.username);
  return (
    <div className="todo_input_container row col-12 col-md-9 justify-content-center">
      <TodoInput addTodo={addTodo} user={username} />
    </div>
  );
};

export default TodoInputContainer;
