import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul>
      {todoCtx.todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo.todo}
          removeTodo={todoCtx.removeTodo.bind(this, todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
