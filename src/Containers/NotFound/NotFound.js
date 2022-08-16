import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';
// svgs
import arrowback from '../../assets/svgs/arrowback.svg';

export default function NotFound() {
	return (
		<div id="notfound">
			<div className="notfound">
				<h1 className="notfound__heading">404</h1>
				<p className="notfound__content-top">
					Oops, you still haven't found what you looking for?
				</p>
				<p className="notfound__content-bottom">
					The page you are looking for might have been removed,  had
					its name changed, or is temporarily unavailable.
				</p>
				<div className="notfound__backhome">
					<Link to="/" className="notfound__backhome-btn">
						<div className="notfound__backhome-link">
						<img src={arrowback} alt={'arrowback'} />
						</div>
					</Link>
					<p className="notfound__backhome-content">
						Back to Home Page
					</p>
				</div>
			</div>
		</div>
	);
}