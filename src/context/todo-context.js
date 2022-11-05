import axios from "axios";
import React, { useState } from "react";

export const TodoContext = React.createContext({
  todos: [],
  getTodos: () => {},
  setTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});

const generateUsername = (email) => {
  return email?.split("@").at(0) + "-todos";
};

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const getTodosHandler = async (user) => {
    try {
      const loadedTodos = [];
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_LINK}/${generateUsername(user)}.json`
      );

      for (const key in response.data) {
        loadedTodos.push({
          id: key,
          todo: response.data[key].todo,
        });
      }

      setTodos(loadedTodos);
    } catch (error) {
      console.log(error.response);
    }
  };

  const addTodoHandler = async (todo, user) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_FIREBASE_LINK}/${generateUsername(
          user
        )}.json`,
        data: { todo: todo },
      });

      setTodos((prevState) => {
        return [...prevState, { id: response.data.name, todo: todo }];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodoHandler = async (todoId, user) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_FIREBASE_LINK}/${generateUsername(
          user
        )}/${todoId}.json`
      );

      setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    todos,
    getTodos: getTodosHandler,
    setTodos,
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
