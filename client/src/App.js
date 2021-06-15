import './App.css';
import logo from './images/logo.svg'
import React from 'react'
import Button from './components/Button'
import ArtistPic from './components/ArtistPic'
import Navbar from '../src/components/Navbar/Navbar'
const App = () =>
{
  return(
    <div className="App">
      <Navbar />
      <Button />
      <ArtistPic />
    </div>
  )
}

export default App;
