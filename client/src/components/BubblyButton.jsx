import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './bubblyButton.css';

export default function BubblyButton({ value, link }) {
	const [animateClass, setAnimateClass] = useState('');
	const animateButton = () => {
		// e.preventDefault();
		//reset animation
		setAnimateClass('');

		setAnimateClass('animate');
		setTimeout(function () {
			setAnimateClass('');
		}, 1000);
	};

	// const addAnimation = (e) => {
	// 	e.preventDefault();
	// 	e.target.classList.add('animate');
	// 	setTimeout(function () {
	// 		e.target.classList.remove('animate');
	// 	}, 700);
	// };
	return (
		<div>
			<Link
				onClick={() => animateButton()}
				className={`btn bubbly-button ${animateClass}`}
				to={link}
			>
				{value}
			</Link>
		</div>
	);
}
