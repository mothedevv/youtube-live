import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Landing from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				{/* <ArtistPic /> */}
				<div className="container">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/features" component={Features} />
					</Switch>
				</div>
				{/* <Footer /> */}
			</div>
		</Router>
	);
};

export default App;
