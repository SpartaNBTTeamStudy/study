import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  // 투두 추가
  const handelAddTodo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [newTodo, ...prevTodo]);
      setNewTodoText("");
    }
  };

  return (
    <form onSubmit={handelAddTodo}>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Todo 추가"
      />
      <button type="submit" onClick={handelAddTodo}>
        추가
      </button>
    </form>
  );
};

export default TodoForm;
