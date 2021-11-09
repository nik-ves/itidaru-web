import { useContext } from "react";

import { TodoContext } from '../context/todo-context';
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  // checking if there are no items in Todos array
  const isTodos = todoCtx.todos.length === 0;

  return (
    <ul>
      {todoCtx.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo.item}
          removeTodo={todoCtx.removeTodo.bind(this, todo.id)}
        />
      ))}
      {isTodos && <p>No todos yet, add some!</p>}
    </ul>
  );
};

export default TodoList;
