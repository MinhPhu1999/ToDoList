import React from 'react';

// svgs
import addnew from 'assets/svgs/addnew.svg';

import './TodoHeading.css';

export default function TodoHeading({ length, handleAdd }) {
	return (
		<div className="todo__heading">
			<h1 className="todo__heading-title">
				You've got
				<p className="todo__heading-task">{length} Task</p>
				today
			</h1>
			<div className="todo__heading-add" onClick={handleAdd}>
				<img src={addnew} alt="Add New" />
				<button type="button" className="todo__heading-add--btn">
					Add New
				</button>
			</div>
		</div>
	);
}
