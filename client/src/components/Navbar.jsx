import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar(){
	

	return (
		<nav class="navbar">
						<div class="container">
							<div class="navbar-brand">
								<span class="navbar-burger burger" data-target="navbarMenu">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</div>
							<div id="navbarMenu" class="navbar-menu">
								<div class="navbar-end">
									<span class="navbar-item">
										<a class="button is-white is-outlined">
											<span class="icon">
												<i class="fa fa-home"></i>
											</span>
											<span>Home</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-white is-outlined">
											<span class="icon">
												<i class="fas fa-guitar"></i>
											</span>
											<span>Venues</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-white is-outlined">
											<span class="icon">
												<i class="fas fa-music"></i>
											</span>
											<span>Artists</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-white is-outlined" >
											<span class="icon">
												<i class="fas fa-user-friends"></i>
											</span>
											<span>Social</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-white is-outlined" >
											<span class="icon">
												<i class="fas fa-question"></i>
											</span>
											<span>Try it out</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-purple is-outlined" >
											<span class="icon">
												<i class="fas fa-sign-in-alt"></i>
											</span>
											<span>Login</span>
										</a>
									</span>
									<span class="navbar-item">
										<a class="button is-purple is-outlined" >
											<span class="icon">
												<i class="fas fa-user-plus"></i>
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
