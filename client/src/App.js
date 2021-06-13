import './App.css';
import logo from './images/logo.svg'
import React from 'react'
import Button from './components/Button'
import ArtistPic from './components/ArtistPic'
const App = () =>
{
  return(
    <div className="App">
      <img src={logo}/>
      <Button />
      <ArtistPic />
    </div>
  )
}

export default App;
