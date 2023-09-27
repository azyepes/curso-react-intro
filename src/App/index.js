import React from "react";
import { AppUI } from "./AppUI"
import { UseLocalStorage } from "./UseLocalStorage";

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
  const [todos, saveTodos] = UseLocalStorage('TODO_V1', [])
  const [searchValue, setSearchValue] = React.useState("");

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // Función para buscar coincidencias
  const searchedTodos = todos.filter( todo => {
    // Remover acentos
    const removedAccent = todo.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // Pasar a Minúsculas
    const lowerCase = removedAccent.toLocaleLowerCase()
    return lowerCase.includes(searchValue)
  })

  // Función para encontrar el todo completado
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text)

    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false 
      : newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  // Función para borrar todos
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
    completed={todosCompleted} 
    total={totalTodos}
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export { App };
