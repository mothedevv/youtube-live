import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const Navbar = () => 
{
    return(
            <nav className="NavbarItems">
                <img className = "logo" src={logo}/>
                <h1 className = "navbar-logo">YouTube.Live</h1>
                <div className = "menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) => 
                    {
                        return(
                            <li key={index}><a className ={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
}

export default Navbar