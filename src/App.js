import React, { Component } from "react";
import Ninja from "./Ninjas";
import "./App.css";

class App extends Component {
  state = {
    ninjas: [
      { name: "Victor", age: 21, belt: "White", id: 1 },
      { name: "Bright", age: 25, belt: "Red", id: 2 },
      { name: "Jesse", age: 31, belt: "Lilac", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
