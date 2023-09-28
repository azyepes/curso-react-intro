import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { ModalNewTodo } from "../ModalNewTodo";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";

function AppUI({
  completed,
  total,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  console.log(total);
  return (
    <React.Fragment>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && 
          <React.Fragment>
            <TodosLoading todos={4} />
          </React.Fragment>
        }
        {error && <TodosError />}
        {(!loading && searchedTodos.lenght === 0) && <TodosEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => { completeTodo(todo.text); }}
            onDelete={() => { deleteTodo(todo.text); }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <ModalNewTodo />
    </React.Fragment>
  );
}

export { AppUI };
