import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todo-context";
import { AuthContext } from "../../context/auth-context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Container from "../UI/Container";
import { List, TodoMessage, Content, Title } from "./TodoList.styles";

const TodoList = () => {
  const { todos, getTodos, removeTodo, setTodos } = useContext(TodoContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getTodos(currentUser.email);

    return () => {
      setTodos([]);
    };
  }, []);

  return (
    <Container>
      <Content>
        <Title>Your Todos</Title>

        <TodoForm />

        <List>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              todoText={todo.todo}
              removeTodo={removeTodo.bind(this, todo.id, currentUser.email)}
            />
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
