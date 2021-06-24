import React from 'react';
import Navbar from './Navbar';
import '../../src/App.css'

function Header()
{
    return(

        <header className="site-header">
            <div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;