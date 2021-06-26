import React, { useState } from 'react';
import './bubblyButton.css';

export default function BubblyButton() {
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
			<button
				onClick={() => animateButton()}
				className={`bubbly-button ${animateClass}`}
			>
				Click me!
			</button>
		</div>
	);
}
