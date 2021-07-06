import React,{ Component }  from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MyVenues from '../MyVenues/MyVenues';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';

class MyArtists extends Component
{
    state = { clicked: false }

	handleClick=()=>
	{
		this.setState ({ clicked: !this.state.clicked })
	}

    render()
    {
        return(
            <Router>
                <div>
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
                    
                    <Switch>
                        
                        <Route path="/profile" component={Profile} exact />
                        <Route path="/myvenues" component={MyVenues} exact />
                        <Route path="/search" component={Search} exact />
                    </Switch>
                </div>
            </Router>
            
        )
    }
    
    
}


export default MyArtists;