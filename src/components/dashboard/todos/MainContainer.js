import React, { useState } from "react";
import TodosContainer from "./todoContainer/TodosContainer";
import TodoInputContainer from "../inputs/todoInput/TodoInputContainer";
import SearchInputContainer from "../inputs/searchInput/SearchInputContainer";
import FooterContainer from "../footer/FooterContainer";

const MainContainer = () => {
  const [inputActive, setInput] = useState("add");

  const setSearch = () => setInput("search");
  const setAdd = () => setInput("add");

  return (
    <div className="main_container row justify-content-center">
      {inputActive === "add" ? (
        <TodoInputContainer />
      ) : (
        <SearchInputContainer />
      )}
      <TodosContainer />
      <FooterContainer
        setSearch={setSearch}
        setAdd={setAdd}
        activeInput={inputActive}
      />
    </div>
  );
};

export default MainContainer;
