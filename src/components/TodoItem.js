const TodoItem = (props) => {
  return (
    <li onClick={props.removeTodo}>
      <span >{props.item}</span>
    </li>
  );
};

export default TodoItem;
