import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style.css'
import 'bulma/css/bulma.min.css';
import Profile from '../../pages/profile/Profile.js';
import MyVenues from "../../pages/MyVenues/MyVenues";
import MyArtists from "../../pages/MyArtists/MyArtists";
import Search from "../../pages/Search/Search";



class Dashboard extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {clicked: false}

        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick=()=>
    {
        this.setState({ 
            clicked: !this.state.clicked,
            className: "is-active"
        });

    }



    render()
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
                                    <li data-target="#pane-1" id="1" className={this.state.clicked ? 'is-active' : 'li'} >
                                        <Link to="/profile">
                                            <span className="icon is-small"><i className="fa fa-image"></i></span>
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-2" id="2" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <Link to="/myvenues">
                                            <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                            <span>My Venues</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-3" id="3" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <Link to="/myartists">
                                            <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                            <span>My Artists</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-4" id="4" className={this.state.clicked ? 'is-active' : 'li'}>
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
                        <Route path="/profile" component={Profile} exact />
                        <Route path="/myartists" component={MyArtists} exact />
                        <Route path="/myvenues" component={MyVenues} exact />
                        <Route path="/search" component={Search} exact />
                    </Switch>
                </div>
            </Router>
        )
    }
    
    
}

export default Dashboard;