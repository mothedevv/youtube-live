import React from 'react';
import '../App.css'

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

}

export default Navbar;


