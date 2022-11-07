import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todo-context";
import { AuthContext } from "../../context/auth-context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Container from "../UI/Container";
import { List, TodoMessage, Content, Title } from "./TodoList.styles";

const TodoList = () => {
  const { todos, getTodos, setTodos } = useContext(TodoContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getTodos(currentUser.email);

    return () => {
      setTodos([]);
    };
    // I want to keep dependencies array empty
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Content>
        <Title>Your Todos</Title>

        <TodoForm />

        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} todoText={todo.todo} />
          ))}

          <TodoMessage>
            {todos.length === 0 ? "No todos. Add some!" : ""}
          </TodoMessage>
        </List>
      </Content>
    </Container>
  );
};

export default TodoList;
