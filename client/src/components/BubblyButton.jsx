import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './bubblyButton.css';

export default function BubblyButton({ value, link }) {
	const [animateClass, setAnimateClass] = useState('');
	const animateButton = () => {

=======

		setAnimateClass('');

		setAnimateClass('animate');
		setTimeout(function () {
			setAnimateClass('');
		}, 1000);
	};

	
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
