import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Component
import Header from 'Components/Header/Header';
import TodoList from 'Components/TodoList/TodoList';
import TodoHeading from 'Components/TodoHeading/TodoHeading';
import Loading from 'Components/Loading/Loading';
import ActionTodo from 'Components/ActionTodo/ActionTodo';
import Tabs from 'Components/Tabs/Tabs';

// Action
import {
	getTodos as listTodos,
	updateStatus,
	addTodo as addTodoAction,
} from 'Redux/Actions/todoActions';

import './Todo.css';
import '../../App.css';
const Todo = () => {
	const dispatch = useDispatch();
	const [isOpenAdd, setIsOpenAdd] = useState(false);
	const [activeTab, setActiveTab] = useState(0);

	const todoItem = {
		title: '',
		status: 'Pending',
		priority: 'Priority',
		description: '',
	};

	const { todos, loading } = useSelector(state => state.getTodos);

	useEffect(() => {
		dispatch(listTodos());
	}, [dispatch]);

	const getWithStatus = status => {
		return todos.filter(todo => todo.status === status);
	};

	const togglePopup = () => {
		setIsOpenAdd(!isOpenAdd);
	};

	const addTodo = data => {
		dispatch(addTodoAction(data));
		togglePopup();
	};

	const handleChangeStatus = (todo, status) => {
		dispatch(updateStatus(todo, status));
	};

	const optionsTab = ['In Progress', 'Pending', 'Completed', 'Canceled'];
	const tabsComponent = optionsTab.map(tab => (
		<TodoList
			key={tab}
			todoList={getWithStatus(tab)}
			onTodoClick={handleChangeStatus}
			title={tab}
		/>
	));

	return (
		<div>
			<Header />
			{loading ? (
				<Loading />
			) : (
				<div className="todo">
					<TodoHeading
						length={todos.length}
						handleAdd={togglePopup}
					/>

					<Tabs
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						options={optionsTab}
						components={tabsComponent}
					/>

					{isOpenAdd && (
						<ActionTodo
							todo={todoItem}
							handleClose={togglePopup}
							handleAction={addTodo}
							heading="Add new"
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Todo;
