import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css'
import 'bulma/css/bulma.min.css';

import Profile from './Profile';
import Venues from './Venues';
import Artists from './Artists';
import Search from './Search';



class Dashboard extends Component 
{
    state = { clicked: false }

	handleClick=()=>
	{
		this.setState ({ clicked: !this.state.clicked, className: "is-active" })
	}

    render(ID, className)
    {
        

        return (
            <Router>
                <div>
                    <body>
                        <section className="hero is-info-dashboard">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title"> 
                                        Person logged in
                                    </h1>
                                    <h2 className="subtitle">
                                        welcome back!
                                    </h2>
                                </div>
                            </div>
                            <div className="tabs is-boxed is-centered main-menu" id="nav">
                                <ul>
                                    <li data-target="#pane-1" id="1" className="li" >
                                        <Link to="/profile">
                                            <span className="icon is-small"><i className="fa fa-image"></i></span>
                                            <span>My Profile</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-2" id="2" className="li">
                                        <Link to="/venues">
                                            <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                            <span>My Venues</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-3" id="3" className="li">
                                        <Link to="/artists">
                                            <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                            <span>My Artists</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-4" id="4" className="li">
                                        <Link to="/search">
                                            <span className="icon is-small"><i className="fa fa-film"></i></span>
                                            <span>Search</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </section>
                    </body>

                    <Switch>
                        <Route path="/dashboard/profile" component={Profile} />
                        <Route path="/dashboard/venues" component={Venues}/>
                        <Route path="/dashboard/artists" component={Artists} />
                        <Route path="/dashboard/search" component={Search}/>
                        
                    </Switch>
                </div>
            </Router>
        )
    }
    
    
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
export default Dashboard;