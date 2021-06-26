import React from 'react';
import '../../../src/App.css';


function LandingPage()
{
    return(
        <div class="hero">
			<div class="slider">
				<ul class="slides">
					<li class="lazy-bg" data-background="dummy/slide-1.jpg">
						<div class="container">
							<h2 class="slide-title">Header goes here</h2>
							<h3 class="slide-subtitle">Less important text goes here</h3>
							<p class="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

							<a href="/dashboard" class="button cut-corner">Try it Out</a>
							<a href="/signup" class="button cut-corner">Sign Up</a>
							
						</div>
					</li>
					<li class="lazy-bg" data-background="dummy/slide-2.jpg">
						<div class="container">
								<h2 class="slide-title">Header goes here</h2>
								<h3 class="slide-subtitle">Less important text goes here</h3>
								<p class="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

								<a href="/dashboard" class="button cut-corner">Try it Out</a>
								<a href="/signup" class="button cut-corner">Sign Up</a>
						</div>
					</li>
					<li class="lazy-bg" data-background="dummy/slide-3.jpg">
						<div class="container">
								<h2 class="slide-title">Header goes here</h2>
								<h3 class="slide-subtitle">Less important text goes here</h3>
								<p class="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

								<a href="/dashboard" class="button cut-corner">Try it Out</a>
								<a href="/signup" class="button cut-corner">Sign Up</a>
						</div>
					</li>
				</ul>
			</div>
			</div>
		
            
    )
}

export default LandingPage;