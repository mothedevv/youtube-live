import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import LandingPage from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import MyArtists from './pages/MyArtists/MyArtists';
import MyVenues from './pages/MyVenues/MyVenues';
import Profile from './pages/Profile/Profile.jsx';
import Search from './pages/Search/Search';
import SignUp from './pages/signup/SignUp';
import Venues from './pages/venue/venue';
import { UserProvider } from './utils/UserContext';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/venues" component={Venues} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/myartists" component={MyArtists} />
							<Route exact path="/myvenues" component={MyVenues} />
							<Route exact path="/search" component={Search} />
						</Switch>
					</div>
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
