import './App.css';
import logo from './images/logo.svg'
import React from 'react'
import Button from './components/Button'
import ArtistPic from './components/ArtistPic'
import Navbar from '../src/components/Navbar/Navbar'
import LandingPage from './components/LandingPage';

const App = () =>
{
  return(
    <div className="App">
      <Navbar />
      <ArtistPic />
      <LandingPage />
      
      
    </div>
  )
}

export default App;
