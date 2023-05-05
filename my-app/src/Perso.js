import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Membre from './components/Membretest';

function App() {
  return (
    // <Fragment>
    <div className="App">
      {/* <p className="test"> bblbllbl</p> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Membre />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn IA
        </a>
      </header>
    </div>
    // {/* <h2>Mon second titre</h2>
    // </Fragment> */}
    // React.createElement('div', { className:"App"}, React.createElement('h1', null, 'React App'))
  );
}

export default App;
