import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div className="container">
						
					</div>

				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
