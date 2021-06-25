import React from 'react';
import '../App.css';
import logo from './logo.svg';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<h1 id="logoMain" href="/">
				<img src={logo} style={{ height: '50px' }}></img>YouTube.Live
			</h1>
			<button
				className="navbar-toggler border-0"
				type="button"
				data-toggle="collapse"
				data-target="#navbar"
				aria-controls="navbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse text-center" id="navbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="/features">
							Feature
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/service">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="/team">
							Team
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="/pricing">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact">
							Contact
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/login">
							Login
						</a>
					</li>
				</ul>
				<a href="#" className="btn btn-primary ml-lg-3 primary-shadow">
					Try Free
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
