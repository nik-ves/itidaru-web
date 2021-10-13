import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const inputChangeHandler = (event) => {
    setTodo({ ...todo, task: event.target.value });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 1000) });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="form-box">
      <form onSubmit={formSubmissionHandler}>
        <input
          name="task"
          type="text"
          onChange={inputChangeHandler}
          value={todo.task}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
