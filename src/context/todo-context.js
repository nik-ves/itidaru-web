import axios from "axios";
import React, { useState } from "react";

export const TodoContext = React.createContext({
  todos: [],
  getTodos: () => {},
  setTodos: () => {},
  addTodo: () => {},
  updateTodo: () => {},
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

      if (response.status === 200) {
        console.log("Uspesno obrisano"); // Dodati globalnu poruku za ovo
        setTodos(todos.filter((todo) => todo.id !== todoId));
      } else {
        console.log("Something went wrong poruka "); // Dodati globalnu poruku za ovo
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodoHandler = async (
    todoId,
    user,
    oldTodoValue,
    newTodoValue
  ) => {
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
        return {
          message: "Successfully edited.",
          todo: response.data.todo,
        };
      } else {
        return {
          message: "Something went wrong. Try again later.",
          todo: oldTodoValue,
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    todos,
    getTodos: getTodosHandler,
    setTodos,
    addTodo: addTodoHandler,
    updateTodo: updateTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
