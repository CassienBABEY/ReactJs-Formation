import React from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membretest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Membre firstName="Antho"/>
        <Membre firstName="Marie" hobbies="Carjacking"/>
        <Membre firstName="Ken"/>
        <Membre firstName="Pisky"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
