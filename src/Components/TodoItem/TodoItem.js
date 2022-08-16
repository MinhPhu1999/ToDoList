import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import AddItem from '../AddItem/AddItem';

import listStatus from 'assets/status';

import { useOnClickOutside } from 'helpers';

import './TodoItem.css';

export default function TodoItem({ todo, onTodoClick }) {
	const [isOpenStatus, setIsOpenStatus] = useState(false);

	const toggle = () => {
		setIsOpenStatus(prev => !prev);
	};

	const changeStatus = e => {
		onTodoClick(todo, e.currentTarget.lastChild.innerText);
	};

	const todoRef = useRef(null);
	useOnClickOutside(todoRef, () => {
		setIsOpenStatus(false);
	});

	return (
		<div className="todo__wrapper" key={todo.id}>
			<div className="todo__item">
				<div className="todo__item-wrapper--title">
					<div className="todo__item-dot1">
						<div className="todo__item-dot2"></div>
					</div>
					<Link to={`/detail/${todo.id}`} className="todo__item-link">
						<p className="todo__item-title">{todo.title}</p>
					</Link>
				</div>
				<div className="todo__item-wrapper--status">
					<p
						className={`todo__item-status ${todo.status
							.toLowerCase()
							.replace(/\s+/g, '')}`}
					>
						{todo.status}
					</p>
				</div>
				<div className="todo__item-wrapper--priority">
					<div
						className={`todo__item-dot1 ${todo.priority.toLowerCase()}`}
					>
						<div
							className={`todo__item-dot2 ${todo.priority.toLowerCase()}`}
						></div>
					</div>
					<p className="todo__item-priority">{todo.priority}</p>
				</div>

				<div
					className="todo__item-dropdown"
					onClick={toggle}
					ref={todoRef}
				>
					<button className="todo__item-btn">...</button>
					{isOpenStatus && (
						<AddItem changeTitle={changeStatus} list={listStatus} />
					)}
				</div>
			</div>
		</div>
	);
}
