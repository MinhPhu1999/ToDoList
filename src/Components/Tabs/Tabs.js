import React from 'react';

import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab, options, components }) => {
	const handleTab = idx => {
		setActiveTab(idx);
	};
	return (
		<>
			<div className="tabs">
				<ul className="nav">
					{options.map((option, idx) => (
						<li
							key={option}
							className={activeTab === idx ? 'active' : ''}
							onClick={() => handleTab(idx)}
						>
							{option}
						</li>
					))}
				</ul>
			</div>
			{activeTab > -1 && components[activeTab]}
		</>
	);
};
export default Tabs;
