import React, { useState, useEffect } from 'react';
import './ActionTodo.css';

// Components
import AddItem from '../AddItem/AddItem';

import listStatus from 'assets/status';
import listPriority from 'assets/priority';

// svg
import close from 'assets/svgs/close.svg';
import arrowdown from 'assets/svgs/arrowdown.svg';

export default function ActionTodo({
	todo,
	handleAction,
	handleClose,
	heading,
}) {
	const [isOpenStatus, setIsOpenStatus] = useState(false);
	const [isOpenPriority, setIsOpenPriority] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [title, setTitle] = useState(todo.title);
	const [status, setStatus] = useState(todo.status);
	const [priority, setPriority] = useState(todo.priority);
	const [description, setDescription] = useState(todo.description);

	const openStatus = () => {
		setIsOpenStatus(!isOpenStatus);
	};

	const closeStatusOrPriority = () => {
		isOpenStatus && setIsOpenStatus(!isOpenStatus);
		isOpenPriority && setIsOpenPriority(!isOpenPriority);
	};

	const changeStatus = e => {
		setStatus(e.target.innerText);
	};

	const openPriority = () => {
		setIsOpenPriority(!isOpenPriority);
	};

	const changePriority = e => {
		setPriority(e.target.innerText);
	};
	useEffect(() => {
		if (heading === 'Edit') {
			if (
				(title.length > 0 && title !== todo.title) ||
				(description.length > 0 && description !== todo.description) ||
				status !== todo.status ||
				priority !== todo.priority
			) {
				setDisabled(false);
			} else {
				setDisabled(true);
			}
		} else {
			if (
				title.length > 0 &&
				priority !== 'Priority' &&
				description.length > 0
			) {
				setDisabled(false);
			} else {
				setDisabled(true);
			}
		}
	}, [title, status, description, priority, todo, heading]);

	return (
		<div className="popup-box" onClick={closeStatusOrPriority}>
			<div className="action__box">
				<div className="action__heading">
					<div className="action__heading-title">{heading}</div>
					<div className="delete__todo-close">
						<span className="close-icon" onClick={handleClose}>
							<img src={close} alt={close} />
						</span>
					</div>
				</div>
				<div className="action__body">
					<input
						required
						className="action__body-title"
						type="text"
						placeholder="Title"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<div className="action__body-wrapperstatus">
						<div
							className="action__body-status"
							onClick={openStatus}
						>
							<p className="action__body-status--title">
								{status}
							</p>
							<span className="action__body-status--arrow">
								<img src={arrowdown} alt={arrowdown} />
							</span>
							{isOpenStatus && (
								<AddItem
									changeTitle={changeStatus}
									list={listStatus}
								/>
							)}
						</div>
					</div>

					<div className="action__body-wrapperstatus">
						<div
							className="action__body-priority"
							onClick={openPriority}
						>
							<p className="action__body-status--title">
								{priority}
							</p>
							<span className="action__body-status--arrow">
								<img src={arrowdown} alt={arrowdown} />
							</span>
							{isOpenPriority && (
								<AddItem
									changeTitle={changePriority}
									list={listPriority}
								/>
							)}
						</div>
					</div>
					<textarea
						required
						className="action__body-description"
						placeholder="Description"
						onChange={e => setDescription(e.target.value)}
						defaultValue={description}
					/>
				</div>

				<div className="action__todo-btn">
					<button
						className="action__todo-cancel"
						onClick={handleClose}
					>
						Cancel
					</button>
					<button
						disabled={disabled}
						className={`${
							disabled
								? 'action__todo-create disabled'
								: 'action__todo-create'
						}`}
						onClick={() =>
							handleAction({
								title,
								status,
								priority,
								description,
							})
						}
					>
						{heading}
					</button>
				</div>
			</div>
		</div>
	);
}
