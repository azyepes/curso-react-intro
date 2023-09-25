import React from "react";
import "../css/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
