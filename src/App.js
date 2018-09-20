import React, { Component } from "react";
import logo from "./logo.svg";
import CardList from "./CardList";
import Form from "./Form";
import NotFound from "./NotFound";
import "./App.css";

//Component can't change the state of its parent,
// but can pass properties to child components
class App extends Component {
  // add new card function
  addNewCard = cardInfo => {
    console.log(cardInfo);
    if (cardInfo.message !== "Not Found") {
      this.userFound(true);
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }));
    } else this.userFound(false);
  };

  userFound = found => {
    this.setState({ userFound: found });
  };

  // to let both CardList and Form access to cards data
  state = {
    cards: [],
    userFound: true
  };
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
        {!this.state.userFound && <NotFound />} {/* if a user is not found*/}
        {/* lets pass a function to Form's props, 
        Form component will then be able to access it 
        with this.props.onSubmit*/}
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

// if a module defines a default export
// you can import that default export
// without the curly braces in ES6: import foo from 'foo'
export default App;
