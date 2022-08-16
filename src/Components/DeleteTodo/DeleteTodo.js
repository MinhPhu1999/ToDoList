import './DeleteTodo.css';
import React from 'react';
// svg
import close from 'assets/svgs/close.svg';

function DeleteTodo({ handleClose, handleDelete }) {
	return (
		<div className="popup-box">
			<div className="box">
				<div className="delete__todo-close">
					<span className="close-icon" onClick={handleClose}>
						<img src={close} alt={close} />
					</span>
				</div>
				<p className="delete__todo-title">Are you sure?</p>
				<div className="delete__todo-btn">
					<button
						className="delete__todo-cancel"
						onClick={handleClose}
					>
						Cancel
					</button>
					<button
						className="delete__todo-delete"
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteTodo;
