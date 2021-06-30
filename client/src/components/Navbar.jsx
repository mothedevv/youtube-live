import React from 'react';
import '../App.css';


function Navbar(){
	

	return (
		<nav className="navbar">
						<div className="container">
							<div className="navbar-brand">
								<span className="navbar-burger burger" data-target="navbarMenu">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</div>
							<div id="navbarMenu" className="navbar-menu">
								<div className="navbar-end">
									<span className="navbar-item">
										<a  href="/" className="button is-white is-outlined">
											<span className="icon">
												<i className="fa fa-home"></i>
											</span>
											<span>Home</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-white is-outlined">
											<span className="icon">
												<i className="fas fa-guitar"></i>
											</span>
											<span>Venues</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-white is-outlined">
											<span className="icon">
												<i className="fas fa-music"></i>
											</span>
											<span>Artists</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-white is-outlined" >
											<span className="icon">
												<i className="fas fa-user-friends"></i>
											</span>
											<span>Social</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-white is-outlined" >
											<span className="icon">
												<i className="fas fa-question"></i>
											</span>
											<span>Try it out</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-purple is-outlined" >
											<span className="icon">
												<i className="fas fa-sign-in-alt"></i>
											</span>
											<span>Login</span>
										</a>
									</span>
									<span className="navbar-item">
										<a  href="/" className="button is-purple is-outlined" >
											<span className="icon">
												<i className="fas fa-user-plus"></i>
											</span>
											<span>Signup</span>
										</a>
									</span>
								</div>
							</div>
						</div>
					</nav>
	);
};

export default Navbar;
