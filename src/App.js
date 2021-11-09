import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="centered">
      <h1>React Todo App</h1>

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
