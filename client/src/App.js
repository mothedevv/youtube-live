import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import LandingPage from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { UserProvider } from './utils/UserContext';
import MyArtists from './pages/MyArtists/MyArtists';
import MyVenues from './pages/MyVenues/MyVenues';
import SearchVideos from './pages/SearchVideos/SearchVideos';


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
							<Route exact path="/MyVenues" component={MyVenues} />
							<Route exact path="/SearchVideos" component={SearchVideos} />
							<Route exact path="/MyArtists" component={MyArtists} />
						</Switch>
					</div>
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
