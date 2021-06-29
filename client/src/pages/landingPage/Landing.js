import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './style.css';
import logo from '../../images/logo.svg'
import 'font-awesome/css/font-awesome.min.css';
import { render } from "react-dom";
import Carousel from "../../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/Navbar';


function LandingPage() {
	

	return (
		
		
		<body>
			<section class="hero is-info is-fullheight">
				<div class="hero-head">
					<Navbar />
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
