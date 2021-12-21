import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <li className={classes["todo-list-item"]} onClick={props.removeTodo}>
      <span>{props.todo}</span>
    </li>
  );
};

export default TodoItem;
