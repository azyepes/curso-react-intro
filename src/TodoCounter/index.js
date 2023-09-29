import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";



function TodoCounter() {
  const { todosCompleted, totalTodos } = React.useContext(TodoContext)

  return (
    
    todosCompleted < totalTodos ?
      <h1 id="titleId" className="title">
        Has completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> TODOs
      </h1>
      : totalTodos === 0 ?
      <h1 id="titleId" className="title">
        Agrega un nuevo TODO
      </h1>
      : 
      <h1 id="titleId" className="title">
        Felicidades completastes tus TODOS
      </h1>
    
  );
}

export { TodoCounter };
