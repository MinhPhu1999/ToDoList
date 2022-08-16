import React from 'react';

export default function AddItem({ list, changeTitle }) {
	return (
		<div className="dropdown__container-status">
			{list.map(status => (
				<div className="dropdown__container-item" key={status.title}>
					<div
						className={`dropdown__container-group ${status.title
							?.toLowerCase()
							?.replace(/\s+/g, '')}`}
						onClick={changeTitle}
					>
						<img src={`${status.icon}`} alt={status} />
						<p className="dropdown__container-group--content">
							{status.title}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
