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
    const loadedTodos = [];
    const data = response.data;

    for (const key in data) {
      loadedTodos.push({
        id: key,
        todo: data[key].todo,
      });
    }
    setTodos(loadedTodos);
  };

  const addTodoHandler = (todo) => {
    axios({
      method: "POST",
      url: "https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo.json",
      data: { todo: todo },
    }).then((response) => {
      setTodos((prevState) => {
        return [...prevState, { id: response.data.name, todo: todo }];
      });
    });
  };

  const removeTodoHandler = (todoId) => {
    axios
      .delete(
        `https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo/${todoId}.json`
      )
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
      });
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
