import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';

import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = props => {
	const { onTodoClick, todoList, title } = props;
	const [todos, setTodos] = useState(todoList);

	const onKeyUp = () => {
		const input = document.getElementById('myInput');
		const filter = input.value.toUpperCase();
		let list = todoList.filter(
			todo => todo.title.toUpperCase().indexOf(filter) > -1,
		);
		setTodos(list);
	};

	return (
		<div>
			<input
				type="text"
				id="myInput"
				onKeyUp={onKeyUp}
				placeholder="Search for names.."
				title="Type in a name"
			/>
			<h1 className="hold__heading">{title}</h1>
			{isEmpty(todos) ? (
				<div className="empty-todolist">Empty</div>
			) : (
				<>
					{todos.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onTodoClick={onTodoClick}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default TodoList;
