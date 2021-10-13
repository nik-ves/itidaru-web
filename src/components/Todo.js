import { Fragment } from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const checkboxClickHandler = () => {
    toggleComplete(todo.id);
  };

  const todoRemoveHandler = () => {
    removeTodo(todo.id);
  };

  const listItemClassses = todo.completed ? "todo-completed" : "";

  return (
    <div className="todo-items">
      <div className="todo-list-item">
        <li className={listItemClassses}>{todo.task}</li>
      </div>

      <div className="todo-actions">
        <input type="checkbox" onClick={checkboxClickHandler} />
        <button onClick={todoRemoveHandler}>Remove</button>
      </div>
    </div>
  );
};

export default Todo;
