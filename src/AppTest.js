import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./Form";

// This is a Container component
class AppTest extends Component {
  state = {
    ninjas: [
      { name: "Aiyeola", age: 20, belt: "blue", id: 1 },
      { name: "Noro", age: 30, belt: "green", id: 2 },
      { name: "Ade", age: 21, belt: "red", id: 3 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
    // console.log(ninja);
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };
// props are ways to pass data or functions from one component to another
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default AppTest;
