import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aboutme from './aboutme'
import NavBar from './navbar'
import './aboutme.css'
import ImageGrid from './imagegrid'
import './imagegrid.css'
import SplashScreen from './splashscreen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <NavBar/>
      <SplashScreen/>
        <Aboutme/>
    <ImageGrid/>
    
    </div>
  );
}

export default App;
