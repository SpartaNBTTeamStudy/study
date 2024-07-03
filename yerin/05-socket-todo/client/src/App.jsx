import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const socket = socketIOClient("http://localhost:4000");
    socket.emit("addTodo", inputValue);
    console.log("Emitting addTodo event with value:", inputValue);
    setInputValue("");
  };

  useEffect(() => {
    const socket = socketIOClient("http://localhost:4000");

    socket.on("connect", () => {
      socket.on("useSuccess", (data) => {
        setTodos((prevTodos) => [...prevTodos, data]);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
