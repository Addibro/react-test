import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Login = props => {
  return <div />;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Login />
      </div>
    );
  }
}

// if a module defines a default export
// you can import that default export without the curly braces: import foo from 'foo'
export default App;
