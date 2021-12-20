import { useContext, useEffect } from "react";
import { TodoContext } from "../context/todo-context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  // let url =
  //   "https://auth-todo-app-234f0-default-rtdb.europe-west1.firebasedatabase.app/todo.json";

  // useEffect(() => {
  //   todoCtx.fetchData(url);
  // }, []);

  return (
    <ul>
      {todoCtx.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.todo}
          removeTodo={todoCtx.removeTodo.bind(this, todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
