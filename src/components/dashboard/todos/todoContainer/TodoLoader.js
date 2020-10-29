import React from "react";

const TodoLoader = () => {
  return (
    <div className="todo_loader_container col-8 d-flex justify-content-center mt-4">
      <div className="spinner-border text-danger text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default TodoLoader;
