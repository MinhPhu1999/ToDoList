import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from 'Redux/Actions/userActions';

import { useOnClickOutside } from 'helpers';

// svgs
import search from 'assets/svgs/search.svg';
import bell from 'assets/svgs/bell.svg';

// images
import logoutIcon from 'assets/images/logout.png';
import avatar from 'assets/images/avatar.png';

import './Header.css';

const Header = () => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const handleLogout = () => {
		dispatch(logout());
	};

	const handleToggle = () => {
		setOpen(!open);
	};

	const logoutRef = useRef(null);
	useOnClickOutside(logoutRef, () => {
		setOpen(false);
	});

	return (
		<div className="header">
			<div className="header__left">
				<img src={search} alt="Search" />
				<input
					className="header__left-search"
					type="search"
					placeholder="Search for any training you want "
				/>
			</div>
			<div className="header__right" ref={logoutRef}>
				<img src={bell} alt="Bell" />
				<div className="header__right-img" onClick={handleToggle}>
					<img src={avatar} alt="Avartar" className="img-item" />
				</div>
				{open && (
					<div className="header__right-logout">
						<div
							className="header__right-logout-item"
							onClick={handleLogout}
						>
							<img
								src={logoutIcon}
								alt="logout"
								width="20"
								height="20"
							/>
							<span className="header__right-logout-span">
								Logout
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
