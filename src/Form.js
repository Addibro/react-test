import React from "react";

class Form extends React.Component {
  // state element on this component for the input value of the userName field
  state = { userName: "" };
  // every react event function recvies an event argument
  // it's a wrapper around the native js event object
  handleSubmit = event => {
    event.preventDefault(); // we want to take over the HTML logic we should prevent the default form submission behaviour
    console.log("Event: Form submit!", this.state.userName);
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => resp.json())
      .then(json => this.props.onSubmit(json)); // invoke onSubmit function which will invoke the function reference (addNewCard) we passed to it);
    this.setState({ userName: "" }); // reset the input
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName} // will be the value of the input element
          onChange={event => this.setState({ userName: event.target.value })}
          //the function receives the event object and we'll make it modify this component's state to change the userName value to match the value coming from the event's target element
          // React will be aware of this element state change and reflect that change

          //ref={input => (this.userNameInput = input)} // special property we can use to get a reference to this element, takes in a function that will be executed when the input element is mounted to the DOM
          placeholder="Github Username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
