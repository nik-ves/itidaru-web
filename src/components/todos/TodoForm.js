import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import useInput from "../../hooks/use-input";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const todoCtx = useContext(TodoContext);
  const {
    inputValue: todo,
    valueChangeHandler: todoChangeHandler,
    valueReset: resetInput,
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    todoCtx.addTodo(todo);

    resetInput();
  };

  return (
    <section className={classes["todo-form-content"]}>
      <h2>Your Todos</h2>

      <form className={classes["form-todo"]} onSubmit={submitHandler}>
        <input
          type="text"
          id="text"
          value={todo}
          onChange={todoChangeHandler}
        />

        <button type="submit">Add todo</button>
      </form>
    </section>
  );
};

export default TodoForm;
