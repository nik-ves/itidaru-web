import { ListItem, TodoName } from "./TodoItem.styles";

const TodoItem = (props) => {
  return (
    <ListItem onClick={props.removeTodo}>
      <TodoName>{props.todo}</TodoName>
    </ListItem>
  );
};

export default TodoItem;
