import React, {useState} from 'react';
import '../../../src/App.css';
import BubblyButton from '../../components/BubblyButton';
import {Link} from 'react-router-dom'


function LandingPage()
{
	const [button1, setButton1] = useState(['Try it Out'])
	const [button2, setButton2] = useState(['Sign Up'])

    return(
        <div className="hero">
			<div className="slider">
				<ul className="slides">
					<li className="lazy-bg" data-background="dummy/slide-1.jpg">
						<div className="container">
							<h2 className="slide-title">Header goes here</h2>
							<h3 className="slide-subtitle">Less important text goes here</h3>
							<p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

							<Link to="/dashboard">{button1.map((b, index) => (<BubblyButton key ={index} value={b}/>))}</Link>
							{button2.map((b, index) => (<BubblyButton key ={index} value={b}/>))}
							
							
						</div>
					</li>
					<li className="lazy-bg" data-background="dummy/slide-2.jpg">
						<div className="container">
								<h2 className="slide-title">Header goes here</h2>
								<h3 className="slide-subtitle">Less important text goes here</h3>
								<p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

								{button1.map((b, index) => (<BubblyButton key ={index} value={b}/>))}
								{button2.map((b, index) => (<BubblyButton key ={index} value={b}/>))}
						</div>
					</li>
					<li className="lazy-bg" data-background="dummy/slide-3.jpg">
						<div className="container">
								<h2 className="slide-title">Header goes here</h2>
								<h3 className="slide-subtitle">Less important text goes here</h3>
								<p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Fugiat aliquid minus nemo sed est.</p>

								{button1.map((b, index) => (<BubblyButton key ={index} value={b}/>))}
								{button2.map((b, index) => (<BubblyButton key ={index} value={b}/>))}
						</div>
					</li>
				</ul>
			</div>
			</div>
		
            
    )
}

export default LandingPage;