import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { UserProvider } from './utils/UserContext';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div id="routeContainer" className="container">
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/features" component={Features} />
							<Route exact path="/venues" component={Venues} />
							<Route exact path="/dashboard" component={Dashboard} />
						</Switch>
					</div>
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
