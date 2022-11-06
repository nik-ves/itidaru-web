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

    if (todo.length < 1) return;

    addTodo(todo, currentUser.email);

    resetInput();
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <TextInput
          type="text"
          id="text"
          minlength="5"
          value={todo}
          onChange={todoChangeHandler}
        />

        <SubmitBtn type="submit">Add todo</SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default TodoForm;
