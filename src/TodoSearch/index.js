import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
  return (
    <div className="search-bar">
      <input
        id="searchInputId"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value.toLocaleLowerCase());
        }}
        type={"search"}
        placeholder={"Buscar TODO..."}
      ></input>
    </div>
  );
}

export { TodoSearch };
