import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

<<<<<<< HEAD
const Navbar = () => 
{
    return(
        <nav className="main-navigation">
            <button type="button" className="toggle-menu"><i className="fa fa-bars"></i></button>
            <ul className="menu">
                <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                <li className="menu-item"><a href="about.html">About</a></li>
                <li className="menu-item"><a href="gallery.html">Gallery</a></li>
                <li className="menu-item"><a href="download.html">Download</a></li>
                <li className="menu-item"><a href="blog.html">Blog</a></li>
                <li className="menu-item"><a href="contact.html">Contact</a></li>
            </ul> 
        </nav>
    )
=======
const Navbar = () => {
	const [currentPage, setCurrentPage] = useState('Home');
>>>>>>> 3b1d3704176bd34c308a126c44c8d5f06782e2c6

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
