import React from 'react';
import '../App.css'

const Navbar = () => 
{
    return(
        <nav class="main-navigation">
            <button type="button" class="toggle-menu"><i class="fa fa-bars"></i></button>
            <ul class="menu">
                <li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
                <li class="menu-item"><a href="about.html">About</a></li>
                <li class="menu-item"><a href="gallery.html">Gallery</a></li>
                <li class="menu-item"><a href="download.html">Download</a></li>
                <li class="menu-item"><a href="blog.html">Blog</a></li>
                <li class="menu-item"><a href="contact.html">Contact</a></li>
            </ul> 
        </nav>
    )

}

export default Navbar;


