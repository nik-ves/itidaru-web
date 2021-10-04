import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([{id: 1, text: 'Ovo je neki tekst', completed: false}, {id: 2, text: 'Opet neka testara', completed: false}]);

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
