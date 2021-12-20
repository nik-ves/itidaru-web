import axios from "axios";
import React, { useState } from "react";

export const TodoContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  fetchData: () => {},
});

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  let url =
    "https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo.json";

  const fetchData = async () => {
    const response = await axios.get(
      "https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo.json"
    );
    const data = response.data;
    setTodos(Object.values(data));
  };

  const addTodoHandler = (todo) => {
    axios({
      method: "POST",
      url: "https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo.json",
      data: { id: Math.random(), todo: todo },
    }).then((response) => {
      setTodos((prevState) => {
        return [...prevState, { id: Math.random(), todo: todo }];
      });
    });
  };

  const removeTodoHandler = (todoId) => {
    // axios({
    //   method: "DELETE",
    //   url: `https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo/${todoId}.json`,
    //   data: { id: Math.random(), todo: "Test" },
    // }).then((response) => {
    //   console.log(response);
    //   setTodos(todos.filter((todo) => todo.id !== todoId));
    // });
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const contextValue = {
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    fetchData,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
