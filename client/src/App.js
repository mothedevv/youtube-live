import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
<<<<<<< Updated upstream
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
=======
import Header from './components/Header';
import Landing from './pages/landingPage/Landing';
>>>>>>> Stashed changes
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { UserProvider } from './utils/UserContext';

const App = () => {
	return (
		<Router>
<<<<<<< Updated upstream
			<UserProvider>
				<div>
					<Navbar />
					{/* <ArtistPic /> */}
					<div className="container">
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/features" component={Features} />
						</Switch>
					</div>
					{/* <Footer /> */}
=======
			<div>	
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/features" component={Features} />
					</Switch>
>>>>>>> Stashed changes
				</div>
			</UserProvider>
		</Router>
	);
};

export default App;
