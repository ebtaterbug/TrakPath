import React from "react";
import Button from "react-bootstrap/Button"
import './App.scss';

function App() {

  const alertFunc = () => {
    alert("Alert!");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>CODE</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={alertFunc}>Add an alert</Button>
      </header>
    </div>
  );
}

export default App;
