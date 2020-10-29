import React, { useState, useEffect } from "react";

const TodoInput = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      props.addTodo(value, props.user);
      setValue("");
    }
  };

  return (
    <div className="col-12 col-md-8">
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Add Todo..."
          />
          <button type="submit" className="btn btn-success add_todo_btn">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
