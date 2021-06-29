import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';
import Carousel from '../../components/Carousel';
import logo from '../../images/logo.svg';

function LandingPage() {
	return (
		<section className="hero is-fullheight" id="landing">
			<div id="overlay"></div>
			<div className="hero-head">
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
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fa fa-home"></i>
										</span>
										<span>Home</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fas fa-guitar"></i>
										</span>
										<span>Venues</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fas fa-music"></i>
										</span>
										<span>Artists</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fas fa-user-friends"></i>
										</span>
										<span>Social</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fas fa-question"></i>
										</span>
										<span>Try it out</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-purple is-outlined">
										<span className="icon">
											<i className="fas fa-sign-in-alt"></i>
										</span>
										<span>Login</span>
									</a>
								</span>
								<span className="navbar-item">
									<a className="button is-purple is-outlined">
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
			</div>

			<div className="hero-body">
				<div className="container has-text-centered">
					<div className="column is-6 is-offset-3">
						<img src={logo}></img>
						<h1 className="title white">YouTube.Live</h1>
						<h2 className="subtitle white">Great Live Music . Period</h2>
						<div>
							<Carousel />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// render(<LandingPage />, document.getElementById("root"));
export default LandingPage;
