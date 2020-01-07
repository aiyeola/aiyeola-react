import React, { Component } from "react";
import Ninja from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Victor", age: 21, belt: "White", id: 1 },
      { name: "Bright", age: 25, belt: "Red", id: 2 },
      { name: "Jesse", age: 31, belt: "Lilac", id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  deleteNinja = id => {
    let ninja = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninja
    });
  };

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
