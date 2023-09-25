import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { ModalNewTodo } from "./components/ModalNewTodo";

export const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Picar tomáte", completed: true },
  { text: "Picar pimentón", completed: true },
  { text: "Adobar proteína", completed: false },
  { text: "Cocinar", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Comer", completed: true },
  { text: "Lavar platos", completed: false },
  { text: "Descansar después de cocinar, estudiar y comer", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter( todo => {
    // Remover acentos
    const removedAccent = todo.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // Pasar a Minúsculas
    const lowerCase = removedAccent.toLocaleLowerCase()
    return lowerCase.includes(searchValue)
  })

  return (
    <React.Fragment>
      <TodoCounter completed={todosCompleted} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <ModalNewTodo />
    </React.Fragment>
  );
}

export { App };
