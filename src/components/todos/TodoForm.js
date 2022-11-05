import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import { AuthContext } from "../../context/auth-context";
import useInput from "../../hooks/use-input";

import { Form, SubmitBtn, TextInput, Wrapper } from "./TodoForm.styles";

const TodoForm = () => {
  const { currentUser } = useContext(AuthContext);
  const { addTodo } = useContext(TodoContext);
  const {
    inputValue: todo,
    valueChangeHandler: todoChangeHandler,
    valueReset: resetInput,
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    addTodo(todo, currentUser.email);

    resetInput();
  };

  return (
    <Wrapper>
      <h2>Your Todos</h2>

      <Form onSubmit={submitHandler}>
        <TextInput
          type="text"
          id="text"
          value={todo}
          onChange={todoChangeHandler}
        />

        <SubmitBtn type="submit">Add todo</SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default TodoForm;
