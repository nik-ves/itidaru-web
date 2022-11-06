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

import ResponseMessage from "../UI/ResponseMessage";

const TodoItem = (props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [todoValue, setTodoValue] = useState(props.todoText);
  const [editedTodoValue, setEditedTodoValue] = useState(props.todoText);

  const { updateTodo, removeTodo, successMessage, errorMessage } =
    useContext(TodoContext);
  const { currentUser } = useContext(AuthContext);

  const editedTodoValueHandler = (event) => {
    setEditedTodoValue(event.target.value);
  };

  const editBtnHandler = () => {
    setEditTodo(!editTodo);
  };

  const saveBtnHandler = () => {
    updateTodo(props.todo.id, currentUser.email, editedTodoValue);
    setTodoValue(editedTodoValue);
    editBtnHandler();
  };

  const deleteBtnHandler = async () => {
    removeTodo(props.todo.id, currentUser.email);
  };

  return (
    <ListItem>
      {successMessage && (
        <ResponseMessage success>{successMessage}</ResponseMessage>
      )}
      {errorMessage && <ResponseMessage>{errorMessage}</ResponseMessage>}

      {!editTodo && <TodoName>{todoValue}</TodoName>}

      {editTodo && (
        <Input
          type="text"
          onChange={editedTodoValueHandler}
          value={editedTodoValue}
        />
      )}

      <Actions>
        {editTodo && <SaveBtn onClick={saveBtnHandler} />}

        {!editTodo && <EditBtn onClick={editBtnHandler} />}

        <DeleteBtn onClick={deleteBtnHandler} />
      </Actions>
    </ListItem>
  );
};

export default TodoItem;
