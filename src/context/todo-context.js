import React, { useState } from "react";

export const TodoContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), item: text }];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const contextValue = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
