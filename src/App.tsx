import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './shared/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>counter</div>
        <img src={logo} className="App-logo" alt="logo" />
        <Button interval={0} label={"click"}/>
      </header>
    </div>
  );
}

export default App;
