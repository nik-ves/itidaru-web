const TodoItem = (props) => {
  return (
    <li onClick={props.removeTodo}>
      <span>{props.todo}</span>
    </li>
  );
};

export default TodoItem;
