import React from "react";
import Todo from "./Todo";
import { updateTodo, deleteTodo } from "../../../../crud/crud";
import "./todo.scss";

const Todos = (props) => {
  return (
    <div className="col-12 col-md-10">
      <ul className="todo_list list-unstyled">
        {props.todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              delete={deleteTodo}
              update={updateTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
