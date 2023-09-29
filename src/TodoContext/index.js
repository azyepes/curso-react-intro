import React from 'react'
import { UseLocalStorage } from './UseLocalStorage';


const TodoContext = React.createContext()

function TodoProvider( { children } ) {
  const {item: todos, saveItem: saveTodos, loading, error} = UseLocalStorage('TODO_V1', [])
  const [searchValue, setSearchValue] = React.useState("");
  const [ openModal, setOpenModal ] = React.useState(false)

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
    <TodoContext.Provider value={{
      todosCompleted,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
    }}>
      { children }
    </TodoContext.Provider>

  )
}

export { TodoProvider, TodoContext }