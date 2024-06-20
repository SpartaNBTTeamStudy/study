import { useState } from 'react'
import TodoTypes from '../todo'
import TodoService from '../TodoService'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
	const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
	
	return (
	<div>
		<div>
			<TodoForm setTodos={setTodos}/>
		</div>

		{
			todos.map((todo) => 
				<TodoItem key={todo.id} {...todo} setTodos={setTodos}/>
			)
		}
		</div>
	);
}

export default TodoList
