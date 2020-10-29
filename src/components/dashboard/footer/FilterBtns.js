import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FilterBtns = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-sm-6 filter_btns_container">
      <p
        className={filter === "all" ? "filter_btn filter_active" : "filter_btn"}
        onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
      >
        All
      </p>
      <p
        className={
          filter === "done" ? "filter_btn filter_active" : "filter_btn"
        }
        onClick={() => dispatch({ type: "SET_FILTER", payload: "done" })}
      >
        Done
      </p>
      <p
        className={
          filter === "left" ? "filter_btn filter_active" : "filter_btn"
        }
        onClick={() => dispatch({ type: "SET_FILTER", payload: "left" })}
      >
        Left
      </p>
    </div>
  );
};

export default FilterBtns;
