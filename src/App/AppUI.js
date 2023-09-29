import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { CreateTodoButton } from "../CreateTodoButton";
import { ModalNewTodo } from "../ModalNewTodo";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { 
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    // setOpenModal
  } = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
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

      {openModal && (
        <ModalNewTodo>
          {/* La funcionalidad de agregar TODOS */}
        </ModalNewTodo>
      )}
    </React.Fragment>
  );
}

export { AppUI };
