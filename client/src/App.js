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

export default App;
