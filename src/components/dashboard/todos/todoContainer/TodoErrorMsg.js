import React from "react";

const TodoErrorMsg = () => {
  return (
    <div className="col-10 mt-4">
      <div className="alert alert-danger" role="alert">
        No todos found!!
      </div>
    </div>
  );
};

export default TodoErrorMsg;
