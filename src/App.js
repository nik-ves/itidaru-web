import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="centered">
      <h1>React Todo App</h1>

      <TodoForm isSending={isSending} setIsSending={setIsSending} />
      <TodoList isSending={isSending} setIsSending={setIsSending} />
    </div>
  );
}

export default App;
