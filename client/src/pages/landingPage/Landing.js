import React, { useState } from 'react';
import '../../App.css';
import logo from '../../images/logo.svg'
import 'font-awesome/css/font-awesome.min.css';
import { render } from "react-dom";
import Carousel from "../../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function LandingPage() {
	

	return (
		
		
		<body>
			<section class="hero is-info is-fullheight">
				<div class="hero-head">
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
								</div>
							</div>
						</div>
					</nav>
					</div>

					<div class="hero-body">
						<div class="container has-text-centered">
							<div class="column is-6 is-offset-3">
								<img src={logo}></img>
								<h1 class="title">
									YouTube.Live
								</h1>
								<h2 class="subtitle">Great Live Music . Period</h2>
								<div>
									<Carousel />
								</div>
							</div>
						</div>
					</div>

			</section>
    
</body>
	);
}

render(<LandingPage />, document.getElementById("root"));
export default LandingPage;
