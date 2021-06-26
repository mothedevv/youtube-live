import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
	const [currentPage, setCurrentPage] = useState('Home');

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<nav className="main-navigation">
			<button type="button" className="toggle-menu">
				<i className="fa fa-bars"></i>
			</button>
			<ul className="menu">
				<li
					className={
						currentPage !== 'Home' ? 'menu-item' : 'menu-item current-menu-item'
					}
				>
					<Link to="/" onClick={() => handlePageChange('Home')}>
						Home
					</Link>
				</li>
				<li
					className={
						currentPage !== 'About'
							? 'menu-item'
							: 'menu-item current-menu-item'
					}
				>
					<Link to="/about" onClick={() => handlePageChange('About')}>
						About
					</Link>
				</li>
				<li
					className={
						currentPage !== 'Gallery'
							? 'menu-item'
							: 'menu-item current-menu-item'
					}
				>
					<Link to="/gallery" onClick={() => handlePageChange('Gallery')}>
						Gallery
					</Link>
				</li>
				<li
					className={
						currentPage !== 'Download'
							? 'menu-item'
							: 'menu-item current-menu-item'
					}
				>
					<Link to="/download" onClick={() => handlePageChange('Download')}>
						Download
					</Link>
				</li>
				<li
					className={
						currentPage !== 'Blog' ? 'menu-item' : 'menu-item current-menu-item'
					}
				>
					<Link to="/blog" onClick={() => handlePageChange('Blog')}>
						Blog
					</Link>
				</li>
				<li
					className={
						currentPage !== 'Contact'
							? 'menu-item'
							: 'menu-item current-menu-item'
					}
				>
					<Link to="/contact" onClick={() => handlePageChange('Contact')}>
						Contact
					</Link>
				</li>
				<li
					className={
						currentPage !== 'Login'
							? 'menu-item'
							: 'menu-item current-menu-item'
					}
				>
					<Link to="/login" onClick={() => handlePageChange('Login')}>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
