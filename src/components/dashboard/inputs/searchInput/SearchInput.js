import React from "react";

const SearchInput = (props) => {
  return (
    <div className="col-12 col-md-6">
      <div className="search_input_container">
        <input
          onChange={(e) => props.search(e.target.value)}
          type="text"
          placeholder="Search Todo..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
