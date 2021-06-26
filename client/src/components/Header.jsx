import React from 'react';
import '../../src/App.css'
import Navbar from './Navbar'
import logo from './logo.png'


function Header()
{
    return(

        <div class="site-header">
			<div class="container">
				<a href="/" id="branding">
					<img id="logo" src={logo} alt="Site Title"/>
				</a>
				<Navbar />
				<div class="mobile-menu"></div>
			</div>
		</div>
            
    )
}

export default Header;