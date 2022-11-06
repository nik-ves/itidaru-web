import { useState, useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import { AuthContext } from "../../context/auth-context";
import {
  ListItem,
  TodoName,
  EditBtn,
  DeleteBtn,
  SaveBtn,
  Actions,
  Input,
} from "./TodoItem.styles";

const TodoItem = (props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [todoValue, setTodoValue] = useState(props.todoText);
  const [editedTodoValue, setEditedTodoValue] = useState(props.todoText);

  const { updateTodo } = useContext(TodoContext);
  const { currentUser } = useContext(AuthContext);

  const changeValue = (event) => {
    setEditedTodoValue(event.target.value);
  };

  const editBtnHandler = () => {
    setEditTodo(!editTodo);
  };

  const saveBtnHandler = async () => {
    const response = await updateTodo(
      props.todo.id,
      currentUser.email,
      todoValue,
      editedTodoValue
    );
    setTodoValue(response.todo);

    editBtnHandler();
  };

  return (
    <ListItem>
      {!editTodo && <TodoName>{todoValue}</TodoName>}

      {editTodo && (
        <Input type="text" onChange={changeValue} value={editedTodoValue} />
      )}

      <Actions>
        {editTodo && <SaveBtn onClick={saveBtnHandler} />}

        {!editTodo && <EditBtn onClick={editBtnHandler} />}

        <DeleteBtn onClick={props.removeTodo} />
      </Actions>
    </ListItem>
  );
};

export default TodoItem;
