import React, { Component } from 'react';
import '../pages/landingPage/style.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from '../pages/landingPage/Landing';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/SignUp';
import Dashboard from '../pages/dashboard/dashboard';



class Navbar extends Component 
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
					<nav className="navbar">
						<div className="menu-icon" onClick={this.handleClick}>
							<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
						</div>
						<div className="container">
							
							<div id="navbarMenu" className="navbar-menu">
								<div className="navbar-end">
									<span className="navbar-item">
										<Link  to="/" className="button is-white is-outlined">
											<span className="icon">
												<i className="fa fa-home"></i>
											</span>
											<span>Home</span>
										</Link>
									</span>
									<span className="navbar-item">
										<Link  to="/venues" className="button is-white is-outlined">
											<span className="icon">
												<i className="fas fa-guitar"></i>
											</span>
											<span>Venues</span>
										</Link>
									</span>
									<span className="navbar-item">
										<Link  to="/artists" className="button is-white is-outlined">
											<span className="icon">
												<i className="fas fa-music"></i>
											</span>
											<span>Artists</span>
										</Link>
									</span>
									<span className="navbar-item">
										<Link  to="/social" className="button is-white is-outlined" >
											<span className="icon">
												<i className="fas fa-user-friends"></i>
											</span>
											<span>Social</span>
										</Link>
									</span>
									
									<span className="navbar-item">
										<Link  to="/login" className="button is-purple is-outlined" >
											<span className="icon">
												<i className="fas fa-sign-in-alt"></i>
											</span>
											<span>Login</span>
										</Link>
									</span>
									<span className="navbar-item">
										<Link  to="/signup" className="button is-purple is-outlined" >
											<span className="icon">
												<i className="fas fa-user-plus"></i>
											</span>
											<span>Signup</span>
										</Link>
									</span>
								</div>
							</div>
						</div>
					</nav>

					<Switch>
						<Route path="/" component={LandingPage} exact/>
						<Route path="/login" component={Login} exact/>
						<Route path="/signup" component={Signup} exact/>
						<Route path="/dashboard" component={Dashboard} exact/>
					</Switch>
			</div>

				

			</Router>
		)
		
		
	}	
};

export default Navbar;
