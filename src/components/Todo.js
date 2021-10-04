const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id == todo.id));
    // console.log(todo);
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>

      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
