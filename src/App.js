import React from 'react'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Picar tomate', completed: true},
  { text: 'Adobar proteina', completed: false},
  { text: 'Cocinar', completed: true},
  { text: 'Estudiar', completed: false},
  { text: 'Comer', completed: true},
  { text: 'Lavar platos', completed: false},
  { text: 'Descansar después de cocinar, estudiar y comer', completed: true},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export { App };