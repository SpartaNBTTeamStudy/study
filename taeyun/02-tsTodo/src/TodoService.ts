import TodoTypes from './todo';

const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
	
	// Get Todos
	getTodos: () :TodoTypes[] => {
		const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
		return todoStr ? JSON.parse(todoStr) : []; // 로컬에 'todos'가 있으면 가져옴
	},

		// TODO 추가
		addTodos: (text:string): TodoTypes => {
			const todos = TodoService.getTodos();
			const newTodo: TodoTypes = {id : todos.length + 1, text, completed: false};
			const updateTodos = [...todos, newTodo];
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
			return newTodo;
		},

		// TODO 업데이트
		updateTodo: (todo:TodoTypes): TodoTypes => {
			const todos = TodoService.getTodos();
			const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
			return todo;
		},

		deleteTodo: (id:number): void => {
			const todos = TodoService.getTodos();
			const updateTodos = todos.filter((todo) => todo.id !== id);
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
		}
};

export default TodoService;