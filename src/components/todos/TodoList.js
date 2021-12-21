import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todo-context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import classes from "./TodoList.module.css";
import Container from "../UI/Container";

const TodoList = () => {
  const { todos, fetchData, removeTodo } = useContext(TodoContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <TodoForm />

      <ul className={classes["todo-list"]}>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.todo}
            removeTodo={removeTodo.bind(this, todo.id)}
          />
        ))}
        <p className={classes["todo-message"]}>
          {todos.length === 0 ? "No todos. Add some!" : ""}
        </p>
      </ul>
    </Container>
  );
};

export default TodoList;
