import { useRef, useState } from "react";
import "./App.css";

type onClickType = (event: React.FormEvent<HTMLFormElement>) => void;

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<string[]>([]);

  const onClick: onClickType = (event) => {
    event.preventDefault();

    if (!ref.current) {
      alert("필수로 입력해주세요");

      return;
    }

    setTodos((prev) => [...prev, ref.current!.value]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onClick}>
        <input type="text" ref={ref} />
        <button>Add</button>
      </form>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </>
  );
}

export default App;
