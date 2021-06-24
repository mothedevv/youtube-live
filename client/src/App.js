
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


export default App;
