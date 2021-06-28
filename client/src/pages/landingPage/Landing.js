import React, { useState } from 'react';
import '../../../src/App.css';
import BubblyButton from '../../components/BubblyButton';

function LandingPage() {
	const [buttons, setButton1] = useState([
		{ value: 'Try it Out', link: '/login' },
		{ value: 'Sign Up', link: '/signup' },
	]);
	// const [button2, setButton2] = useState(['Sign Up'])

	return (
		<div className="hero">
			<div className="slider">
				<ul className="slides">
					<li className="lazy-bg" data-background="dummy/slide-1.jpg">
						<div className="container">
							<h2 className="slide-title">Header goes here</h2>
							<h3 className="slide-subtitle">Less important text goes here</h3>

							<p className="slide-desc">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
								<br></br>Fugiat aliquid minus nemo sed est.
							</p>
							{buttons.map((b) => (
								<BubblyButton value={b.value} link={b.link} />
							))}


							<p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

							{button1.map((b, index) => (<BubblyButton key={index} value={b} />))}
							{button2.map((b, index) => (<BubblyButton key={index} value={b} />))}





						</div>
					</li>
					<li className="lazy-bg" data-background="dummy/slide-2.jpg">
						<div className="container">
							<h2 className="slide-title">Header goes here</h2>
							<h3 className="slide-subtitle">Less important text goes here</h3>
							<p className="slide-desc">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
								<br></br>Fugiat aliquid minus nemo sed est.
							</p>

							{buttons.map((b) => (
								<BubblyButton value={b.value} link={b.link} />
							))}
						</div>
					</li>
					<li className="lazy-bg" data-background="dummy/slide-3.jpg">
						<div className="container">
							<h2 className="slide-title">Header goes here</h2>
							<h3 className="slide-subtitle">Less important text goes here</h3>
							<p className="slide-desc">
								Lorem ipsuimport BubblyButton from
								'../../components/BubblyButton'; m dolor sit amet, consectetur
								adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.
							</p>

							{buttons.map((b) => (
								<BubblyButton value={b.value} link={b.link} />
							))}
						</div>
					</li>
				</ul>
			</div>
		</div>

	)


};

export default LandingPage;
