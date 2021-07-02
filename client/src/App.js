import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Venues from './pages/dashboard/Venues';
import { UserProvider } from './utils/UserContext';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/features" component={Features} />
							<Route exact path="/venues" component={Venues} />
						</Switch>
					</div>
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
