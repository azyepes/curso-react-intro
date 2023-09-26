import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { ModalNewTodo } from "./components/ModalNewTodo";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Picar tomáte", completed: true },
  { text: "Picar pimentón", completed: true },
  { text: "Adobar proteína", completed: true },
  { text: "Cocinar", completed: true },
  { text: "Estudiar", completed: true },
  { text: "Comer", completed: true },
  { text: "Lavar platos", completed: true },
  { text: "Descansar después de cocinar, estudiar y comer", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [ header, setHeader] = React.useState('')

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
    console.log(newTodos);
    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false 
      : newTodos[todoIndex].completed = true
    // if (newTodos[todoIndex].completed) {
    //   newTodos[todoIndex].completed = false 
    // } else {
    //   newTodos[todoIndex].completed = true  
    // }
    setTodos(newTodos)
  }
  // Función para borrar todos
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }
  // Función para actualizar header
  const updateHeader = () => {
    todosCompleted === totalTodos ? setHeader('Felicitaciones') : setHeader('Sigue así')
  }

  return (
    <React.Fragment>
      <TodoCounter completed={todosCompleted} total={totalTodos} header={header} setHeader={updateHeader}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => { completeTodo(todo.text) }}
            onDelete={() => { deleteTodo(todo.text) }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <ModalNewTodo />
    </React.Fragment>
  );
}

export { App };
