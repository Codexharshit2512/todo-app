import React from "react";

const Todo = ({ todo, ...rest }) => {
  return (
    <li className="todo_container">
      <div className="check_box">
        <input
          onChange={() => rest.update(todo.id, todo.isCompleted)}
          type="checkbox"
          checked={todo.isCompleted ? true : false}
        />
      </div>
      <p
        className="todo_text"
        style={{
          textDecoration: todo.isCompleted === true ? "line-through" : "none",
        }}
      >
        {todo.description}
      </p>
      <div className="cross_icon">
        <span onClick={() => rest.delete(todo.id)}>&#88;</span>
      </div>
    </li>
  );
};

export default Todo;
