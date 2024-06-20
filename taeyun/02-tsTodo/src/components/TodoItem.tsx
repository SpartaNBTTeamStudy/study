import { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";

interface TodoItemTypes {
  id: number;
  text: string;
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoItem = ({ id, text, setTodos }: TodoItemTypes) => {
  const [editedTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  // 수정 하기
  const handleEdit = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  // 수정 취소
  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  // 수정 완료 저장
  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updateTodo : todo))
      );

      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div key={id}>
      {editedTodoId === id ? (
        <>
          <input
            type="text"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
            autoFocus={true}
          />
          <button onClick={() => handleEditSave(id)}>저장</button>

          <button onClick={() => handleEditCancel()}>취소</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={() => handleEdit(id, text)}>수정</button>
          <button onClick={() => handleDeleteTodo(id)}>삭제?</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
