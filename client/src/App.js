<<<<<<< HEAD
import React from 'react'
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
const App = () =>
{
  return(
    <Router>
      <div>
        <div id="site-content">
          <Header />
          <LandingPage />
        </div>

        
      </div>
    </Router>
  )
}
=======

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import './App.css';
import Landing from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				{/* <ArtistPic /> */}
				<div>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

>>>>>>> 238121ed0798c410fd9186d453f3813689cfd7fb

export default App;
