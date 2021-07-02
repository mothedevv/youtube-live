import 'bulma/css/bulma.min.css';
import React, { useContext, useEffect, useState } from 'react';
import '../pages/landingPage/style.css';
import { UserContext } from '../utils/UserContext';
import NavLink from './NavLink';

function Navbar() {
	const [loggedIn, setLoggedIn] = useContext(UserContext);
	const [navLinks, setNavLinks] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [clickedClass, setClickedClass] = useState('');
	useEffect(() => {
		!loggedIn
			? setNavLinks([
					{ name: 'Home', toLink: '/', icon: 'fas fa-home' },
					{ name: 'Venues', toLink: '/venues', icon: 'fas fa-guitar' },
					{ name: 'Artist', toLink: '/artist', icon: 'fas fa-music' },
					{ name: 'Social', toLink: '/social', icon: 'fas fa-user-friends' },
					{ name: 'Login', toLink: '/login', icon: 'fas fa-sign-in-alt' },
					{ name: 'Signup', toLink: '/signup', icon: 'fas fa-user-plus' },
			  ])
			: setNavLinks([
					{ name: 'Home', toLink: '/', icon: 'fas fa-home' },
					{ name: 'Venues', toLink: '/venues', icon: 'fas fa-guitar' },
					{ name: 'Artist', toLink: '/artist', icon: 'fas fa-music' },
					{ name: 'Social', toLink: '/social', icon: 'fas fa-user-friends' },
					{
						name: 'Dashboard',
						toLink: '/dashboard',
						icon: 'fa fa-user-circle',
					},
					{ name: 'Logout', toLink: '/', icon: 'fas fa-sign-out-alt' },
			  ]);
		return () => {
			console.log('Nav links set.');
			console.log('unmounted.');
		};
	}, [loggedIn]);

	const handleClick = () => {
		setClicked(true);
		setClickedClass('is-active');
	};

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
						{navLinks.map((link) => (
							<NavLink name={link.name} toLink={link.toLink} icon={link.icon} />
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
