import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import classes from "./TodoList.module.css";
import Container from "../UI/Container";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <Container>
      <TodoForm />

      <ul className={classes["todo-list"]}>
        {todoCtx.todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.todo}
            removeTodo={todoCtx.removeTodo.bind(this, todo.id)}
          />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
