import React, { Component } from "react";
import Ninjas from "./Ninjas";

class AppTest extends Component {
  state = {
    ninjas: [
      { name: 'Aiyeola', age: 20, belt: "blue", id: 1 },
      { name: 'Noro', age: 30, belt: "green", id: 2 },
      { name: 'Ade', age: 21, belt: "red", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}
export default AppTest;
