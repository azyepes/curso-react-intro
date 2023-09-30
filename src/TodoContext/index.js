import React from 'react'
import { UseLocalStorage } from './UseLocalStorage';


const TodoContext = React.createContext()

function TodoProvider( { children } ) {
  const {item: todos, saveItem: saveTodos, loading, error} = UseLocalStorage('TODO_V1', [])
  const [searchValue, setSearchValue] = React.useState("");
  const [ openModal, setOpenModal ] = React.useState(false)
  const [ editContent, setEditContent ] = React.useState(false)

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
    console.log(newTodos[todoIndex]);

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  // Añadir TODOS al comienzo de la lista
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.unshift({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }
  
  // Editar un Todo y actualizar la lista de TODOS

  const onEdit = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text)
    const valueText = document.getElementsByTagName("p")[todoIndex]
    valueText.classList.add('todoItem--editable')

    const trash = Array.from(document.querySelectorAll('.fa-trash'))[todoIndex]
    trash.classList.add('fa-floppy-disk')
    trash.classList.remove('fa-trash')
    
    valueText.contentEditable = true
    setEditContent(true)
  }
  
  const onSaveEdit = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text)
    const valueText = document.getElementsByTagName("p")[todoIndex]
    valueText.classList.remove('todoItem--editable')
    
    newTodos[todoIndex].text = valueText.textContent
    
    const trash = Array.from(document.querySelectorAll('.fa-floppy-disk'))[0]
    trash.classList.remove('fa-floppy-disk')
    trash.classList.add('fa-trash')
    
    saveTodos(newTodos)
    valueText.contentEditable = false
    setEditContent(false)
    
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      openModal,
      setOpenModal,
      todosCompleted,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      onEdit,
      onSaveEdit,
      editContent,
    }}>
      { children }
    </TodoContext.Provider>

  )
}

export { TodoProvider, TodoContext }