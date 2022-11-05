import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todo-context";
import { AuthContext } from "../../context/auth-context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Container from "../UI/Container";

import { List, TodoMessage } from "./TodoList.styles";

const TodoList = () => {
  const { currentUser } = useContext(AuthContext);
  const { todos, getTodos, removeTodo, setTodos } = useContext(TodoContext);

  useEffect(() => {
    getTodos(currentUser.email);

    return () => {
      setTodos([]);
    };
  }, []);

  return (
    <Container>
      <TodoForm />

      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.todo}
            removeTodo={removeTodo.bind(this, todo.id, currentUser.email)}
          />
        ))}

        <TodoMessage>
          {todos.length === 0 ? "No todos. Add some!" : ""}
        </TodoMessage>
      </List>
    </Container>
  );
};

export default TodoList;
