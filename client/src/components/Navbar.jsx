import React from 'react';
import logo from './logo.svg';
import '../App.css'

function Navbar()
{
    
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 id="logoMain" href="/"><img src={logo} style={{ height: '50px'}}></img>YouTube.Live</h1>
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbar">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#feature">Feature</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="service.html">Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#team">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#pricing">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
                </ul>
                <a href="#" class="btn btn-primary ml-lg-3 primary-shadow">Try Free</a>
            </div>
        </nav>
    )
    
}

export default Navbar;