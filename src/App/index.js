import React from "react";
import { AppUI } from "./AppUI"
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Picar tomáte", completed: true },
//   { text: "Picar pimentón", completed: true },
//   { text: "Adobar proteína", completed: true },
//   { text: "Cocinar", completed: true },
//   { text: "Estudiar", completed: true },
//   { text: "Comer", completed: true },
//   { text: "Lavar platos", completed: true },
//   { text: "Descansar después de cocinar, estudiar y comer", completed: true },
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODO_V1')

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
