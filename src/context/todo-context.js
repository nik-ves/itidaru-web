import axios from "axios";
import React, { useState } from "react";

export const TodoContext = React.createContext({
  todos: [],
  getTodos: () => {},
  setTodos: () => {},
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
  successMessage: "",
  errorMessage: "",
});

const generateUsername = (email) => {
  return email?.split("@").at(0) + "-todos";
};

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  if (successMessage || errorMessage) {
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage();
    }, 2000);
  }

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
      setErrorMessage("Something went wrong. Try again later.");
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
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  const removeTodoHandler = async (todoId, user) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_FIREBASE_LINK}/${generateUsername(
          user
        )}/${todoId}.json`
      );

      if (response.status === 200) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
        setSuccessMessage("Successfully deleted!");
      } else {
        setErrorMessage("Something went wrong. Try again later.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  const updateTodoHandler = async (todoId, user, newTodoValue) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_FIREBASE_LINK}/${generateUsername(
          user
        )}/${todoId}.json`,
        data: {
          todo: newTodoValue,
        },
      });

      if (response.status === 200) {
        setSuccessMessage("Successfully edited!");
      } else {
        setErrorMessage("Something went wrong. Try again later.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  const contextValue = {
    todos,
    getTodos: getTodosHandler,
    setTodos,
    addTodo: addTodoHandler,
    updateTodo: updateTodoHandler,
    removeTodo: removeTodoHandler,
    successMessage,
    errorMessage,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
