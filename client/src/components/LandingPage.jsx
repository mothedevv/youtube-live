import React from 'react';
import '../../src/App.css';
import Features from '../components/Features';
// import bannerImage from './images/hero-area/banner-img.png';

function LandingPage() {
	return (
		<div className="hero">
			<section
				className="hero-section hero"
				data-background=""
				// style={{ backgroundImage: 'url(images/hero-area/banner-bg.png)' }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center zindex-1">
							<h1 className="mb-3">
								Great Live Music.<br></br>
								Period.
							</h1>
							<p className="mb-4">
								In order to save videos or interact<br></br>
								an account is required. Feel free to try us out first!
							</p>
							<a href="" className="btn btn-secondary btn-lg">
								Enter
							</a>
							<br></br>
							<br></br>
							<a href="" className="btn btn-secondary btn-lg">
								Sign Up
							</a>
							{/* <img
								className="img-fluid w-100 banner-image"
								// src={bannerImage}
								alt="banner-img"
							/> */}
						</div>
					</div>
				</div>

				<div id="scene">
					{/* <img
						className="img-fluid hero-bg-1 up-down-animation"
						src="images/background-shape/feature-bg-2.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-2 left-right-animation"
						src="images/background-shape/seo-ball-1.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-3 left-right-animation"
						src="images/background-shape/seo-half-cycle.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-4 up-down-animation"
						src="images/background-shape/green-dot.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-5 left-right-animation"
						src="images/background-shape/blue-half-cycle.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-6 up-down-animation"
						src="images/background-shape/seo-ball-1.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-7 left-right-animation"
						src="images/background-shape/yellow-triangle.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-8 up-down-animation"
						src="images/background-shape/service-half-cycle.png"
						alt=""
					/>
					<img
						className="img-fluid hero-bg-9 up-down-animation"
						src="images/background-shape/team-bg-triangle.png"
						alt=""
					/> */}
				</div>
			</section>

			<Features />
		</div>
	);
}

export default LandingPage;
