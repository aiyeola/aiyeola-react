import React, { Component } from "react";
import "./App.css";

class Tutorial extends Component {
  state = {
    name: "Ryu",
    age: 30
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
	e.preventDefault();
	console.log("Form submitted", this.state.name)
  };

  render() {
    return (
      <div className="App">
        <h1>My name is {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Tutorial;
